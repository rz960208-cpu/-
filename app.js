// 頁面管理
const pages = {
  intro: document.getElementById('page-intro'),
  roles: document.getElementById('page-roles'),
  story: document.getElementById('page-story'),
  ending: document.getElementById('page-ending')
};

let currentPage = 'intro';
let currentRole = null;
let currentSceneIndex = 0;

// 角色定義與完整劇情線
const roles = {
  qingteng: {
    id: 'qingteng',
    name: '青藤',
    fullName: '青藤｜被排斥的旁系',
    tag: '嫌疑人',
    description: '不會夢遊的遠房親戚，怨恨與貪婪在心中發酵，懂得利用家族的「神選」迷思。',
    thumb: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80',
    scenes: [
      {
        text: '你回到稻禾村已經三個月了。作為早川家族的遠房親戚，你從小就因為「不會夢遊」而被視為異類。那些會夢遊的族人總是用憐憫或輕蔑的眼神看著你，彷彿你缺少了什麼重要的東西。',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '回憶過去的屈辱', next: 'scene1a' },
          { text: '觀察族人的夢遊模式', next: 'scene1b' }
        ]
      },
      {
        id: 'scene1a',
        text: '你想起小時候，當其他孩子在夜裡被視為「被神選中」而受到讚美時，你卻被要求「不要打擾神的儀式」。那種被排除在外的感覺，至今仍讓你憤怒。',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續觀察', next: 'scene2' }
        ]
      },
      {
        id: 'scene1b',
        text: '你開始記錄每個夢遊者的習慣：他們通常在深夜兩點到四點之間活動，會沿著固定的路徑走向神社，對外界的聲音反應遲鈍。這些資訊，或許能成為你的「故事素材」。',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續計劃', next: 'scene2' }
        ]
      },
      {
        id: 'scene2',
        text: '第一個「意外」發生在一個月前。你的表弟在夢遊時從神社階梯跌落。你親手在屍體旁排出了三縱一橫的稻穗——這是你的簽名，也是你作為小說家的「落款」。',
        image: 'https://images.unsplash.com/photo-1518689000812-44e345196396?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續執行計劃', next: 'scene3' },
          { text: '感到不安，想要停止', next: 'scene3b' }
        ]
      },
      {
        id: 'scene3',
        text: '第二個、第三個...你越來越熟練。每次都在夢遊者必經的路上等待，輕推他們走向危險，然後留下你的標記。村民們將這些視為「神的旨意」，沒有人懷疑你。',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '準備最後一次行動', next: 'scene4' }
        ]
      },
      {
        id: 'scene3b',
        text: '你開始感到不安，但已經無法回頭。每次看到村民們為「神意」而恐懼和崇敬時，你既感到滿足，又感到空虛。這真的是你想要的嗎？',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續執行', next: 'scene4' }
        ]
      },
      {
        id: 'scene4',
        text: '今晚，你準備對你的叔叔下手。但就在你拖著他走向階梯時，你注意到不遠處有微弱的光——是凜的手電筒。他看到了你。',
        image: 'https://images.unsplash.com/photo-1513012142877-5d154e9cf00a?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '立刻完成行動，然後威脅凜', next: 'scene5a' },
          { text: '暫時撤回，觀察凜的反應', next: 'scene5b' }
        ]
      },
      {
        id: 'scene5a',
        text: '你完成了最後一次「意外」，然後找到凜，威脅他保持沉默。這個孩子因為恐懼而選擇遺忘，他的證詞變得支離破碎，沒有人相信他。',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '離開村落', next: 'ending' }
        ]
      },
      {
        id: 'scene5b',
        text: '你暫時撤回，但計劃已經暴露。雖然凜的證詞不被信任，但外地來的調查者林衡開始懷疑你。你必須做出選擇：繼續留在村落，還是帶著你的「作品」離開？',
        image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '離開村落，完成你的小說', next: 'ending' }
        ]
      }
    ]
  },
  lin: {
    id: 'lin',
    name: '林衡',
    fullName: '林衡｜外地調查者',
    tag: '調查',
    description: '注意到三縱一橫稻穗與夢遊患者皆遇難，懷疑有人利用症狀偽裝意外。',
    thumb: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    scenes: [
      {
        text: '你被派來調查稻禾村的連續死亡事件。第一次看到現場時，你就注意到異常：屍體旁的稻穗排列過於工整，三縱一橫的圖案明顯是人為排列的。',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '仔細檢查現場', next: 'scene1a' },
          { text: '詢問村民', next: 'scene1b' }
        ]
      },
      {
        id: 'scene1a',
        text: '你發現石階上有拖拽的痕跡，而且鞋印的尺寸與死者不符。這明顯不是單純的夢遊意外。但當你提出質疑時，村民們用敵意的眼神看著你。',
        image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續調查', next: 'scene2' }
        ]
      },
      {
        id: 'scene1b',
        text: '村民們告訴你，這些都是「神的旨意」，夢遊者被神召喚，稻穗是神留下的印記。你試圖解釋這可能是人為的，但他們拒絕相信。',
        image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續調查', next: 'scene2' }
        ]
      },
      {
        id: 'scene2',
        text: '你注意到一個關鍵線索：所有死者都是夢遊症患者，而且都發生在夜間。更重要的是，你發現有一個不會夢遊的人——青藤。他總是出現在現場附近，但從未被懷疑。',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '調查青藤', next: 'scene3' },
          { text: '尋找目擊者', next: 'scene3b' }
        ]
      },
      {
        id: 'scene3',
        text: '你開始調查青藤的背景。你發現他從小因為不會夢遊而被排斥，最近才回到村落。你懷疑他利用夢遊症狀來掩蓋自己的罪行。',
        image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '尋找證據', next: 'scene4' }
        ]
      },
      {
        id: 'scene3b',
        text: '你聽說有一個孩子——早川凜——可能目擊了什麼。但當你找到他時，他的證詞支離破碎，前後矛盾。他似乎在逃避什麼。',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續追問', next: 'scene4' }
        ]
      },
      {
        id: 'scene4',
        text: '你收集了所有證據：鞋印、拖拽痕跡、稻穗排列的規律性，以及青藤的動機。但當你向村長提出調查請求時，他拒絕了你，堅持這是「神的試煉」。',
        image: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '堅持調查', next: 'scene5a' },
          { text: '理解村長的立場', next: 'scene5b' }
        ]
      },
      {
        id: 'scene5a',
        text: '你堅持要調查，但村民們開始排斥你。沒有他們的配合，你無法獲得足夠的證據來起訴青藤。你意識到，在這個地方，真相並不自動等於正義。',
        image: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '離開村落', next: 'ending' }
        ]
      },
      {
        id: 'scene5b',
        text: '你理解村長的困境：如果承認這是人為的，就意味著他一生守護的信仰是錯誤的。但這也意味著真正的加害者將逍遙法外。你帶著無力感離開了村落。',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '結束調查', next: 'ending' }
        ]
      }
    ]
  },
  rin: {
    id: 'rin',
    name: '早川凜',
    fullName: '早川凜｜被壓抑的目擊者',
    tag: '目擊',
    description: '夢裡的神社、真實的拖行聲交疊。他的證詞零碎，被大人視為幻覺。',
    thumb: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    scenes: [
      {
        text: '你是早川家族中年紀最小的成員。你容易做噩夢，經常在夜裡醒來。今晚，你又被噩夢驚醒，決定去神社附近走走。',
        image: 'https://images.unsplash.com/photo-1513012142877-5d154e9cf00a?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '走向神社', next: 'scene1a' },
          { text: '留在房間', next: 'scene1b' }
        ]
      },
      {
        id: 'scene1a',
        text: '你走到神社附近，突然聽到奇怪的聲音。你用手電筒照過去，看到一個可怕的景象：青藤正拖著你的叔叔走向神社階梯。你的叔叔看起來像是夢遊中，完全沒有意識。',
        image: 'https://images.unsplash.com/photo-1500534310060-436dd09bff8f?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '大喊阻止', next: 'scene2a' },
          { text: '躲起來觀察', next: 'scene2b' },
          { text: '逃回房間', next: 'scene2c' }
        ]
      },
      {
        id: 'scene1b',
        text: '你決定留在房間，但心裡總覺得不安。你聽到外面有奇怪的聲音，但你不敢出去看。第二天，你聽說叔叔在夢遊時跌落了。',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene3' }
        ]
      },
      {
        id: 'scene2a',
        text: '你大喊了一聲，青藤立刻轉過頭來。他的眼神讓你感到恐懼。他完成了他的行動，然後走向你，威脅你不要說出去。你因為恐懼而答應了。',
        image: 'https://images.unsplash.com/photo-1518689000812-44e345196396?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene3' }
        ]
      },
      {
        id: 'scene2b',
        text: '你躲在木柱後面，看著青藤完成他的行動。你看到他在屍體旁排出了稻穗——三縱一橫的圖案。然後他離開了。你因為恐懼而不敢動，直到天亮。',
        image: 'https://images.unsplash.com/photo-1500534310060-436dd09bff8f?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene3' }
        ]
      },
      {
        id: 'scene2c',
        text: '你逃回房間，躲在被窩裡。你告訴自己那只是夢，但你知道那不是夢。第二天，你聽說叔叔死了，但你不敢說出你看到的。',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene3' }
        ]
      },
      {
        id: 'scene3',
        text: '當大人們問你看到了什麼時，你的記憶開始變得模糊。你記得一些片段，但又覺得不確定。你開始懷疑自己是不是真的看到了，還是只是做了噩夢。',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '試圖說出真相', next: 'scene4a' },
          { text: '選擇遺忘', next: 'scene4b' }
        ]
      },
      {
        id: 'scene4a',
        text: '你試圖告訴大人們你看到的，但你的證詞前後矛盾，情緒激動。大人們認為你只是因為恐懼而胡思亂想，沒有人相信你。你感到無助和孤獨。',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene5' }
        ]
      },
      {
        id: 'scene4b',
        text: '你選擇遺忘這段記憶。你告訴自己那只是夢，強迫自己相信。但你知道，在你的心裡，你知道真相。你只是選擇不去面對它。',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene5' }
        ]
      },
      {
        id: 'scene5',
        text: '時間過去了，你的記憶變得更加模糊。當外地來的調查者問你時，你只能說出一些破碎的片段：「夜裡有人拖著人走」、「不會夢遊的人」。但這些證詞無法成為證據。你選擇把真相埋藏在心裡，不再提起。',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '結束', next: 'ending' }
        ]
      }
    ]
  },
  chief: {
    id: 'chief',
    name: '村長',
    fullName: '村長｜信仰與否認',
    tag: '信仰',
    description: '身兼家主與宗教權威，堅信夢遊是神諭，對人為說法本能排拒。',
    thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    scenes: [
      {
        text: '你是早川家族的家主，也是稻禾村的村長。你一生都相信夢遊是稻禾神的召喚，是神選血脈的證明。但最近發生的一連串死亡事件，讓你開始感到不安。',
        image: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '堅持這是神的旨意', next: 'scene1a' },
          { text: '開始懷疑', next: 'scene1b' }
        ]
      },
      {
        id: 'scene1a',
        text: '你告訴自己和村民，這些都是神的試煉。那些被選中的人被神召喚，稻穗是神留下的印記。你必須堅信這一點，否則你一生的信仰就會崩塌。',
        image: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene2' }
        ]
      },
      {
        id: 'scene1b',
        text: '你開始懷疑，但這個懷疑讓你感到恐懼。如果這些死亡是人為的，那就意味著你一生守護的信仰可能是錯誤的。你不敢面對這個可能性。',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene2' }
        ]
      },
      {
        id: 'scene2',
        text: '外地來的調查者林衡開始質疑這些「意外」。他告訴你，現場的證據顯示這可能是人為的。你感到憤怒，因為他在挑戰你的信仰。',
        image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '拒絕調查', next: 'scene3a' },
          { text: '允許調查', next: 'scene3b' }
        ]
      },
      {
        id: 'scene3a',
        text: '你拒絕了調查者的請求，堅持這是神的旨意。你告訴村民，這是神的試煉，他們必須堅信。但你知道，如果真的有兇手，你的決定可能會讓更多人受害。',
        image: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene4' }
        ]
      },
      {
        id: 'scene3b',
        text: '你允許了調查，但這讓你的信仰受到動搖。如果調查證實這是人為的，你的威望將會毀滅，村民們會質疑你。但你還是選擇了真相。',
        image: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '繼續', next: 'scene4' }
        ]
      },
      {
        id: 'scene4',
        text: '你開始注意到青藤的異常行為。他不會夢遊，但總是出現在現場附近。你開始懷疑他，但你不願意承認，因為承認就意味著承認你的信仰是錯誤的。',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '私下質問青藤', next: 'scene5a' },
          { text: '選擇沉默', next: 'scene5b' }
        ]
      },
      {
        id: 'scene5a',
        text: '你私下質問青藤，但他的言辭閃爍，你更加懷疑。但你最終選擇了沉默，因為承認真相意味著承認你一生的信仰是錯誤的。你選擇維持信仰，即使這意味著放走真正的加害者。',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '結束', next: 'ending' }
        ]
      },
      {
        id: 'scene5b',
        text: '你選擇沉默，繼續維持你的信仰。你告訴自己，這些都是神的旨意。但你知道，在你的心裡，你知道真相。你只是選擇不去面對它，因為面對它意味著毀滅你一生的意義。',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        choices: [
          { text: '結束', next: 'ending' }
        ]
      }
    ]
  }
};

// 頁面切換函數
function showPage(pageName) {
  Object.keys(pages).forEach(key => {
    pages[key].classList.remove('active');
  });
  pages[pageName].classList.add('active');
  currentPage = pageName;
}

// 初始化
document.getElementById('enter-story-btn').addEventListener('click', () => {
  showPage('roles');
  renderRoles();
});

document.getElementById('restart-btn').addEventListener('click', () => {
  currentRole = null;
  currentSceneIndex = 0;
  showPage('intro');
});

// 渲染角色選擇頁面
function renderRoles() {
  const roleGrid = document.getElementById('role-grid');
  roleGrid.innerHTML = Object.values(roles).map(role => `
    <div class="role-card" data-role="${role.id}">
      <img class="role-thumb" src="${role.thumb}" alt="${role.name}">
      <div class="role-meta">
        <div class="tag">${role.tag}</div>
        <h3>${role.fullName}</h3>
        <p>${role.description}</p>
      </div>
    </div>
  `).join('');

  roleGrid.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', () => {
      const roleId = card.getAttribute('data-role');
      startStory(roles[roleId]);
    });
  });
}

// 開始故事
function startStory(role) {
  currentRole = role;
  currentSceneIndex = 0;
  showPage('story');
  renderScene(role.scenes[0]);
}

// 渲染場景
function renderScene(scene) {
  const storyText = document.getElementById('story-text');
  const storyImage = document.getElementById('story-image');
  const storyChoices = document.getElementById('story-choices');
  const nextBtn = document.getElementById('next-scene-btn');
  const roleTag = document.getElementById('story-role-tag');
  const roleName = document.getElementById('story-role-name');
  const progressText = document.getElementById('story-progress-text');
  const progressFill = document.getElementById('progress-fill');

  // 更新角色資訊
  roleTag.textContent = currentRole.tag;
  roleName.textContent = currentRole.fullName;

  // 更新進度（簡化計算）
  const totalScenes = currentRole.scenes.length;
  const currentProgress = Math.min(currentSceneIndex + 1, totalScenes);
  progressText.textContent = `第 ${currentProgress} / ${totalScenes} 幕`;
  progressFill.style.width = `${(currentProgress / totalScenes) * 100}%`;

  // 渲染場景內容
  storyText.innerHTML = `<p>${scene.text}</p>`;
  storyImage.innerHTML = scene.image ? `<img src="${scene.image}" alt="場景圖片">` : '';

  // 渲染選擇
  storyChoices.innerHTML = '';
  if (scene.choices && scene.choices.length > 0) {
    scene.choices.forEach(choice => {
      const choiceBtn = document.createElement('button');
      choiceBtn.className = 'btn choice-btn';
      choiceBtn.textContent = choice.text;
      choiceBtn.addEventListener('click', () => {
        handleChoice(choice.next);
      });
      storyChoices.appendChild(choiceBtn);
    });
    nextBtn.classList.add('hidden');
  } else {
    // 沒有選擇，顯示繼續按鈕
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = '繼續';
    nextBtn.onclick = () => {
      // 檢查是否有下一個場景
      if (currentSceneIndex < currentRole.scenes.length - 1) {
        currentSceneIndex++;
        renderScene(currentRole.scenes[currentSceneIndex]);
      } else {
        // 到達結局
        showPage('ending');
      }
    };
  }
}

// 處理選擇
function handleChoice(next) {
  if (next === 'ending') {
    showPage('ending');
    return;
  }

  // 查找下一個場景
  const nextScene = findSceneById(currentRole.scenes, next);
  if (nextScene) {
    // 更新場景索引
    const sceneIndex = currentRole.scenes.indexOf(nextScene);
    if (sceneIndex !== -1) {
      currentSceneIndex = sceneIndex;
    } else {
      currentSceneIndex++;
    }
    renderScene(nextScene);
  } else {
    // 如果找不到，嘗試繼續下一個場景
    if (currentSceneIndex < currentRole.scenes.length - 1) {
      currentSceneIndex++;
      renderScene(currentRole.scenes[currentSceneIndex]);
    } else {
      showPage('ending');
    }
  }
}

// 查找場景
function findSceneById(scenes, id) {
  if (!id) return null;
  // 先嘗試通過id查找
  const foundById = scenes.find(s => s.id === id);
  if (foundById) return foundById;
  // 如果id是數字，嘗試按索引查找
  const index = parseInt(id);
  if (!isNaN(index) && index >= 0 && index < scenes.length) {
    return scenes[index];
  }
  return null;
}

// 初始化
showPage('intro');
