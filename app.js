// 頁面管理
const pages = {
  lobby: document.getElementById('page-lobby'),
  intro: document.getElementById('page-intro'),
  roles: document.getElementById('page-roles'),
  act1: document.getElementById('page-act1'),
  investigation: document.getElementById('page-investigation'),
  debate: document.getElementById('page-debate'),
  ending: document.getElementById('page-ending')
};

function showPage(pageName) {
  Object.keys(pages).forEach(key => pages[key].classList.remove('active'));
  pages[pageName].classList.add('active');
  window.scrollTo(0, 0);
}

// 角色定義（包含劇本）
const roles = {
  qingteng: {
    id: 'qingteng',
    name: '青藤',
    fullName: '青藤｜被排斥的旁系',
    tag: '嫌疑人',
    description: '不會夢遊的遠房親戚，怨恨與貪婪在心中發酵，懂得利用家族的「神選」迷思。',
    thumb: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
    script: {
      text: `你心裡覺得好笑。早川健死了，死得和你預期的一樣——像個笨拙的傀儡滾下樓梯。你站在靈堂角落，看著這些人哭天搶地，讚頌他是「回到了神的懷抱」。你昨晚確實去過神社。你知道健有夢遊的習慣，每天凌晨兩點，他會像上了發條的鐘一樣走向鳥居。你只是稍微「調整」了一下路邊的石頭，或者說，你只是站在那裡，看著他走過去。你沒有動手推他，是「神」帶走了他。你在屍體旁擺下了三根直的稻穗，一根橫的。那是你小說裡的「章節結束」符號。但在這群愚昧的村民眼裡，那成了神聖的印記。`,
      task: '嘲諷調查官的無能，引導大家相信這是神的旨意，隱藏你放置稻穗的真實含義（簽名行為）。'
    }
  },
  rin: {
    id: 'rin',
    name: '早川凜',
    fullName: '早川凜｜被壓抑的目擊者',
    tag: '目擊',
    description: '夢裡的神社、真實的拖行聲交疊。他的證詞零碎，被大人視為幻覺。',
    thumb: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    script: {
      text: `你很害怕。哥哥死了，就像之前的叔叔一樣。大人們說哥哥去侍奉神明了，但你記得昨晚看見的東西。你昨晚也夢遊了，或者你是醒著的？你分不清楚。你躲在樹叢後面，看見哥哥搖搖晃晃地走著。而在哥哥身後，有一個黑影。那個黑影沒有夢遊，他走得很穩，手裡拿著稻穗。那個人好像是……青藤表哥？不，不能說。上次你說看見青藤表哥在現場，村長爺爺打了你一巴掌，說你在褻瀆神明，說青藤是被神遺棄的人，不可能靠近神選的儀式。你的腦袋好痛，那段記憶變成了碎片。`,
      task: '試圖表達你的恐懼，但因為害怕被罵而語無倫次。你懷疑青藤，但不敢確定。'
    }
  },
  lin: {
    id: 'lin',
    name: '林衡',
    fullName: '林衡｜外地調查者',
    tag: '調查',
    description: '注意到三縱一橫稻穗與夢遊患者皆遇難，懷疑有人利用症狀偽裝意外。',
    thumb: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    script: {
      text: `這已經是第三起了。三名死者，全都是夢遊症患者，全都是摔死，身邊有奇怪的稻穗圖案（三縱一橫）。這絕對不是巧合，這是連環殺人案。你的直覺告訴你，那個叫青藤的小說家有問題。他看人的眼神充滿輕蔑，而且他是唯一沒有夢遊症、在夜間行動自如的人。但是你沒有證據。這裡沒有監視器，屍檢報告被村長壓了下來，村民們甚至拒絕配合調查。他們把你當作「不懂信仰的外人」。今天是你最後的機會，你必須打破村長的迷信防線。`,
      task: '找出青藤犯案的時間線漏洞，說服村長這是一場謀殺。'
    }
  },
  chief: {
    id: 'chief',
    name: '村長',
    fullName: '村長｜信仰與否認',
    tag: '信仰',
    description: '身兼家主與宗教權威，堅信夢遊是神諭，對人為說法本能排拒。',
    thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    script: {
      text: `健死了，你的繼承人沒了。雖然心痛，但你是村長，你不能展現軟弱。那個外來的調查官一直在散布謠言，說什麼「連環謀殺」。荒謬！早川家的血脈是神聖的，夢遊是神與我們的連結。如果承認有人能利用這個連結殺人，那豈不是說我們的信仰毫無保護力？更何況，懷疑青藤？那個廢物？他連被神看一眼的資格都沒有，怎麼可能介入神聖的夢遊儀式？凜那孩子最近總是胡言亂語，一定是嚇壞了，必須讓他閉嘴，不能讓外人看笑話。`,
      task: '維護家族榮譽，駁斥林衡的「謀殺論」，將凜的異常行為解釋為「靈力失控」。'
    }
  }
};

// 線索定義
const clues = {
  public: [
    { title: '【屍體報告】', content: '早川健，死因頸椎折斷。死亡時間約凌晨2:00。無防禦性傷痕（符合夢遊中無意識墜落）。' },
    { title: '【現場照片】', content: '屍體旁有四根稻穗，擺成「|||-」的形狀。稻穗切口平整，是用剪刀剪下來的。' },
    { title: '【青藤的房間】', content: '桌上有一本未寫完的小說手稿，裡面有一段描述：「完美的人偶在月光下起舞，線斷了，戲就落幕了。」' },
    { title: '【凜的畫冊】', content: '畫風凌亂，畫著一個長著黑影的大人，拖著一個閉著眼睛的小人走向懸崖。黑影的手裡拿著草。' }
  ],
  privateByRole: {
    lin: [{ title: '【圖書館舊籍】（林衡搜得）', content: '關於稻禾神的古老傳說，完全沒有提到「三縱一橫」的稻穗印記。這是後人捏造的，或者是兇手自創的。' }],
    rin: [{ title: '【青藤的垃圾桶】（凜搜得）', content: '一雙沾滿泥土的運動鞋。昨晚下過雨，只有出門的人鞋子才會這麼髒。' }],
    qingteng: [{ title: '【村長的日記】（青藤搜得）', content: '記載著家族成員的夢遊規律。「健：凌晨2點，路徑固定經過鳥居。」這本書平時放在客廳，誰都能翻閱。' }],
    chief: [{ title: '【醫療診斷書】（村長搜得）', content: '早川凜的診斷書，上面寫著「創傷後壓力症候群（PTSD），伴隨選擇性失憶」。' }]
  }
};

// 辯論要點
const debatePoints = [
  {
    title: '稻穗的含義',
    content: '林衡：古籍無此記載 → 人為標記（簽名）。青藤：小說靈感 / 神啟。村長：堅稱神蹟。'
  },
  {
    title: '不在場證明與泥鞋',
    content: '青藤泥鞋為關鍵，辯稱散步找靈感。林衡反駁：為何跟著夢遊者？'
  },
  {
    title: '凜的證詞',
    content: '凜想說「我看見青藤哥哥」。青藤使用煤氣燈術抹除記憶，村長以信仰壓制。'
  }
];

// 結局與主持人
const endings = {
  default: {
    title: '結局 A：真相被掩埋',
    content: `村長（宣讀）：「外地人的調查結束了。結論是……意外。稻禾神的召喚不容污衊。青藤雖然行為怪異，但他也是家族的一份子，稻穗……那是神給健的禮物。」

旁白：
林衡看著村長堅決的臉，手中的報告書變得沈重而無用。他明知道那雙沾泥的鞋子、那整齊的稻穗、那本預言死亡的小說代表著什麼，但在這個被信仰包裹的巨大的謊言面前，邏輯毫無力量。

青藤收拾好行李，嘴角掛著一抹不易察覺的微笑。他的小說《稻禾之死》終於完成了最後一章。他走過林衡身邊，輕聲說：「這是一個好故事，對吧？可惜，沒人會信你的版本。」

早川凜縮在角落，看著青藤離去的背影。他想大叫，想說那是兇手，但喉嚨像是被稻草塞住了一樣。他低下頭，自我催眠著：「那是夢……那只是夢……」

全劇終`
  }
};

const hostLines = [
  '主持人（機器人）：雖然這是警方的調查，但在這座村莊，法律並不是最高準則。',
  '主持人（機器人）：請各位依照心中的判斷投出你們的真相，最終裁決權仍在村長手中。'
];

// 狀態管理
const session = {
  players: [], // {name, roleId}
  currentRoleId: null,
  stage: 'lobby', // lobby -> intro -> script -> public -> private -> vote -> host -> truth
  votes: {},
  chat: [],
  voiceActive: false
};

// DOM 參考
const playerNameInput = document.getElementById('player-name-input');
const playerRoleSelect = document.getElementById('player-role-select');
const addPlayerBtn = document.getElementById('add-player-btn');
const fillDemoBtn = document.getElementById('fill-demo-btn');
const startSessionBtn = document.getElementById('start-session-btn');
const playerList = document.getElementById('player-list');
const enterStoryBtn = document.getElementById('enter-story-btn');
const roleGrid = document.getElementById('role-grid');
const viewerRoleSelect = document.getElementById('viewer-role-select');
const toPublicBtn = document.getElementById('to-public-btn');
const toPrivateBtn = document.getElementById('to-private-btn');
const toDebateBtn = document.getElementById('to-debate-btn');
const submitVoteBtn = document.getElementById('submit-vote-btn');
const hostTalkBtn = document.getElementById('host-talk-btn');
const revealTruthBtn = document.getElementById('reveal-truth-btn');
const restartBtn = document.getElementById('restart-btn');
const sendChatBtn = document.getElementById('send-chat-btn');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const voiceBtn = document.getElementById('voice-btn');

// 初始化頁面
showPage('lobby');
renderPlayerList();
updateChatStatus('未連線（本地模擬）');
appendChat('system', '系統', '歡迎進入討論區，這裡僅為本地模擬聊天室。');

// 事件綁定
addPlayerBtn.addEventListener('click', handleAddPlayer);
fillDemoBtn.addEventListener('click', handleFillDemo);
startSessionBtn.addEventListener('click', handleStartSession);
enterStoryBtn.addEventListener('click', () => {
  session.stage = 'intro';
  renderRoles();
  showPage('roles');
});

viewerRoleSelect.addEventListener('change', (e) => {
  switchRole(e.target.value);
});

toPublicBtn.addEventListener('click', () => goStage('public'));
toPrivateBtn.addEventListener('click', () => goStage('private'));
toDebateBtn.addEventListener('click', () => goStage('vote'));
submitVoteBtn.addEventListener('click', submitVote);
hostTalkBtn.addEventListener('click', handleHostTalk);
revealTruthBtn.addEventListener('click', () => goStage('truth'));
restartBtn.addEventListener('click', resetAll);

sendChatBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendChatMessage();
  }
});

voiceBtn.addEventListener('click', toggleVoiceInput);

// ----- 玩家配對 -----
function handleAddPlayer() {
  const name = playerNameInput.value.trim();
  const roleId = playerRoleSelect.value;
  if (!name) {
    alert('請輸入玩家暱稱');
    return;
  }
  if (session.players.find(p => p.roleId === roleId)) {
    alert('該角色已被選擇，請換一個角色');
    return;
  }
  session.players.push({ name, roleId });
  playerNameInput.value = '';
  renderPlayerList();
  updateStartButton();
}

function handleFillDemo() {
  session.players = [
    { name: '玩家A', roleId: 'qingteng' },
    { name: '玩家B', roleId: 'rin' },
    { name: '玩家C', roleId: 'lin' },
    { name: '玩家D', roleId: 'chief' }
  ];
  renderPlayerList();
  updateStartButton();
}

function renderPlayerList() {
  if (!playerList) return;
  playerList.innerHTML = session.players.map(p => {
    const role = roles[p.roleId];
    return `<li><span>${role.name}</span><span>${p.name}</span></li>`;
  }).join('') || '<li>尚未有人加入</li>';
}

function updateStartButton() {
  const ready = session.players.length === 4;
  startSessionBtn.disabled = !ready;
}

function handleStartSession() {
  if (session.players.length !== 4) {
    alert('需 4 名玩家且角色唯一');
    return;
  }
  session.stage = 'intro';
  session.currentRoleId = session.players[0].roleId;
  appendChat('system', '系統', '配對完成，準備進入劇情。');
  renderRoles();
  renderViewerSelect();
  showPage('intro');
}

// ----- 角色/劇本 -----
function renderRoles() {
  if (!roleGrid) return;
  roleGrid.innerHTML = Object.values(roles).map(role => {
    const player = session.players.find(p => p.roleId === role.id);
    const playerName = player ? player.name : '未分配';
    return `
      <div class="role-card" data-role="${role.id}">
        <img class="role-thumb" src="${role.thumb}" alt="${role.name}">
        <div class="role-meta">
          <div class="tag">${role.tag}</div>
          <h3>${role.fullName}</h3>
          <p>${role.description}</p>
          <p class="muted-note">玩家：${playerName}</p>
        </div>
      </div>
    `;
  }).join('');

  roleGrid.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', () => {
      const roleId = card.getAttribute('data-role');
      switchRole(roleId);
      goStage('script');
    });
  });
}

function renderViewerSelect() {
  if (!viewerRoleSelect) return;
  viewerRoleSelect.innerHTML = session.players.map(p => {
    const role = roles[p.roleId];
    return `<option value="${role.id}" ${session.currentRoleId === role.id ? 'selected' : ''}>${role.name}（${p.name}）</option>`;
  }).join('');
}

function switchRole(roleId) {
  session.currentRoleId = roleId;
  renderViewerSelect();
  if (session.stage === 'script') renderScript();
  if (session.stage === 'public' || session.stage === 'private') renderClues();
}

function renderScript() {
  const role = roles[session.currentRoleId];
  const player = session.players.find(p => p.roleId === role.id);
  document.getElementById('script-role-tag').textContent = role.tag;
  document.getElementById('script-role-name').textContent = role.fullName;
  document.getElementById('script-player-name').textContent = player ? `玩家：${player.name}` : '';
  document.getElementById('script-text').innerHTML = role.script.text.split('\n').map(p => `<p>${p}</p>`).join('');
  document.getElementById('script-task-text').textContent = role.script.task;
}

// ----- 線索 -----
function renderClues() {
  const publicClues = document.getElementById('public-clues');
  const hiddenClues = document.getElementById('hidden-clues');
  if (!publicClues || !hiddenClues) return;

  publicClues.innerHTML = clues.public.map(clue => `
    <div class="clue-card">
      <div class="clue-title">${clue.title}</div>
      <div class="clue-content">${clue.content}</div>
    </div>
  `).join('');

  if (session.stage === 'private') {
    const privates = clues.privateByRole[session.currentRoleId] || [];
    hiddenClues.innerHTML = privates.map(clue => `
      <div class="clue-card">
        <div class="clue-title">${clue.title}</div>
        <div class="clue-content">${clue.content}</div>
      </div>
    `).join('') || '<p class="muted-note">此角色沒有額外線索。</p>';
  } else {
    hiddenClues.innerHTML = '<p class="muted-note">請先按「顯示個別線索」</p>';
  }
}

// ----- 辯論與投票 -----
function renderDebate() {
  const debatePointsEl = document.getElementById('debate-points');
  if (!debatePointsEl) return;
  debatePointsEl.innerHTML = debatePoints.map(point => `
    <div class="debate-point">
      <h3>${point.title}</h3>
      <p>${point.content}</p>
    </div>
  `).join('');
  renderVoteForm();
}

function renderVoteForm() {
  const voteForm = document.getElementById('vote-form');
  const voteResults = document.getElementById('vote-results');
  if (!voteForm || !voteResults) return;
  voteForm.innerHTML = `
    <label class="muted-note">目前視角：${roles[session.currentRoleId].name}</label>
    ${Object.values(roles).map(r => `
      <div class="vote-option">
        <input type="radio" name="vote-target" value="${r.id}" id="vote-${r.id}">
        <label for="vote-${r.id}">${r.fullName}</label>
      </div>
    `).join('')}
  `;
  voteResults.textContent = '';
}

function submitVote() {
  const target = document.querySelector('input[name="vote-target"]:checked');
  if (!target) {
    alert('請選擇一個兇手候選');
    return;
  }
  session.votes[session.currentRoleId] = target.value;
  const summary = tallyVotes();
  const voteResults = document.getElementById('vote-results');
  voteResults.textContent = `投票完成：${Object.keys(summary).map(k => `${roles[k].name} ${summary[k]} 票`).join(' / ')}`;
  appendChat('system', '系統', `${roles[session.currentRoleId].name} 已投票。`);
}

function tallyVotes() {
  const result = {};
  Object.values(session.votes).forEach(v => {
    result[v] = (result[v] || 0) + 1;
  });
  return result;
}

function handleHostTalk() {
  session.stage = 'host';
  const voteResults = document.getElementById('vote-results');
  voteResults.innerHTML = hostLines.map(l => `<div class="muted-note">${l}</div>`).join('');
  appendChat('system', '主持人', '主持人（機器人）已發言，請前往公布真相。');
  showPage('ending');
  renderEnding();
}

// ----- 結局 -----
function renderEnding() {
  const endingContent = document.getElementById('ending-content');
  const ending = endings.default;
  endingContent.innerHTML = `
    <div class="ending-card">
      <h2>${ending.title}</h2>
      <div class="ending-text">${ending.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
    </div>
    <div class="ending-card">
      <h2>DM 復盤手冊</h2>
      <h3>兇手確認：青藤</h3>
      <p><strong>動機：</strong>長期的歧視與排擠。他想用「製造完美意外」來證明自己比這些「神選之人」更強大，並將家族當作寫作素材。</p>
      <p><strong>手法：</strong>利用家族成員夢遊的規律，在特定地點（如階梯前）進行聲音引導或輕微推搡，造成跌落意外。</p>
      <p><strong>稻穗的意義：</strong>三縱一橫，既是對信仰的嘲弄（模仿祭祀），也是他在小說中的簽名（章節完結符號）。</p>
      <p><strong>凜的記憶：</strong>凜確實看見了，但因為年幼目擊親人被害，產生了創傷性失憶。他在遊戲中的反覆無常是真實的心理防禦機制。</p>
      <p class="quote"><strong>悲劇核心：</strong>林衡（理性）無法戰勝村長（體制/迷信）。真相被權力與集體潛意識所吞沒。</p>
    </div>
  `;
}

// ----- 流程控制 -----
function goStage(stage) {
  session.stage = stage;
  if (stage === 'script') {
    renderScript();
    showPage('act1');
  } else if (stage === 'public') {
    renderClues();
    toPrivateBtn.disabled = false;
    showPage('investigation');
  } else if (stage === 'private') {
    renderClues();
    showPage('investigation');
  } else if (stage === 'vote') {
    renderDebate();
    showPage('debate');
  } else if (stage === 'truth') {
    renderEnding();
    showPage('ending');
  }
}

function resetAll() {
  session.players = [];
  session.currentRoleId = null;
  session.stage = 'lobby';
  session.votes = {};
  renderPlayerList();
  updateStartButton();
  playerNameInput.value = '';
  chatMessages.innerHTML = '';
  appendChat('system', '系統', '已重置會話，請重新配對玩家。');
  showPage('lobby');
}

// ----- 討論區 -----
function appendChat(type, sender, text) {
  if (!chatMessages) return;
  const div = document.createElement('div');
  div.className = 'chat-bubble';
  div.innerHTML = `<div class="meta">${sender}</div><div class="text">${text}</div>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  const sender = roles[session.currentRoleId]?.name || '旁觀者';
  appendChat('user', sender, text);
  chatInput.value = '';
}

function updateChatStatus(status) {
  const el = document.getElementById('chat-status');
  if (el) el.textContent = status;
}

// 簡易語音輸入（瀏覽器支援才可用）
let recognition = null;
function toggleVoiceInput() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('此瀏覽器不支援語音辨識，請改用文字輸入');
    return;
  }
  if (session.voiceActive) {
    recognition.stop();
    session.voiceActive = false;
    voiceBtn.textContent = '🎤 語音';
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'zh-TW';
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results).map(r => r[0].transcript).join('');
    chatInput.value = transcript;
  };
  recognition.onend = () => {
    session.voiceActive = false;
    voiceBtn.textContent = '🎤 語音';
  };
  recognition.start();
  session.voiceActive = true;
  voiceBtn.textContent = '錄音中...';
}
