const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { WebSocketServer } = require('ws');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '.')));

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

// 房間內存資料：{ roomId: Set<ws> }
const rooms = new Map();

function broadcast(roomId, data, exclude) {
  const set = rooms.get(roomId);
  if (!set) return;
  const payload = JSON.stringify(data);
  for (const client of set) {
    if (client !== exclude && client.readyState === client.OPEN) {
      client.send(payload);
    }
  }
}

wss.on('connection', (ws, req) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const roomId = url.searchParams.get('room') || 'demo-room';
  if (!rooms.has(roomId)) rooms.set(roomId, new Set());
  rooms.get(roomId).add(ws);

  ws.on('message', (buf) => {
    let msg = {};
    try {
      msg = JSON.parse(buf.toString());
    } catch {
      return;
    }
    if (msg.type === 'join') {
      ws.roleId = msg.roleId;
      ws.name = msg.name;
      broadcast(roomId, { type: 'system', text: `${msg.name || '玩家'} 已加入房間` }, ws);
    } else if (msg.type === 'chat') {
      broadcast(roomId, { type: 'chat', sender: msg.sender, text: msg.text });
    } else if (msg.type === 'vote') {
      broadcast(roomId, { type: 'vote', roleId: msg.roleId, target: msg.target });
    }
  });

  ws.on('close', () => {
    const set = rooms.get(roomId);
    if (set) {
      set.delete(ws);
      if (set.size === 0) rooms.delete(roomId);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

