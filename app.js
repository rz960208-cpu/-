const roles = [
  {
    id: "qingteng",
    name: "青藤｜被排斥的旁系",
    tag: "嫌疑人",
    summary: "不會夢遊的遠房親戚，怨恨與貪婪在心中發酵，懂得利用家族的「神選」迷思。",
    thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80",
    scene: {
      title: "神社階梯的無聲夜",
      desc: "月光如霜，你拖著沉睡的族人往神社階梯。稻穗早已排成三縱一橫，只等他們踏空成為『意外』。",
      choices: [
        {
          title: "動手前再確認證物",
          result: "你重新檢查安排，卻在不遠處看到微弱光點——是凜的手電。你暫時撤回，計劃拖延。"
        },
        {
          title: "立刻推下昏睡者",
          result: "屍體滾落，稻穗散落如同儀式，但你留下了鞋印與刮痕。日後林衡在此發現可疑痕跡。"
        },
        {
          title: "改用火災偽裝",
          result: "你打算引燃稻草，但火光容易驚動村民。村長察覺焦味，開始懷疑神社被褻瀆。"
        }
      ],
      gallery: [
        { label: "夜色神社", url: "https://images.unsplash.com/photo-1518689000812-44e345196396?auto=format&fit=crop&w=800&q=80" },
        { label: "稻穗陣", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" },
        { label: "潮濕石階", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  },
  {
    id: "lin",
    name: "林衡｜外地調查者",
    tag: "調查",
    summary: "注意到三縱一橫稻穗與夢遊患者皆遇難，懷疑有人利用症狀偽裝意外。",
    thumb: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
    scene: {
      title: "勘驗現場的稻穗陣",
      desc: "你蹲下觀察散落的稻穗。排列過於工整，且石階有拖拽痕跡。村民盯著你，信仰與敵意交織。",
      choices: [
        {
          title: "收集鞋印樣本",
          result: "你拍下鞋印，尺寸與青藤的鞋相符，但缺乏直接對比證據，難以定罪。"
        },
        {
          title: "質疑村長的說法",
          result: "村長以『神意』反駁，阻止你靠近內社。你的立場遭到孤立，但疑心更深。"
        },
        {
          title: "採訪凜",
          result: "凜語焉不詳，只提到『夜裡有人拖著人走』。記憶破碎，仍能指向『不會夢遊的人』。"
        }
      ],
      gallery: [
        { label: "調查現場", url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80" },
        { label: "警戒的村民", url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80" },
        { label: "石階細節", url: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  },
  {
    id: "rin",
    name: "早川凜｜被壓抑的目擊者",
    tag: "目擊",
    summary: "夢裡的神社、真實的拖行聲交疊。他的證詞零碎，被大人視為幻覺。",
    thumb: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    scene: {
      title: "夢與現實的交界",
      desc: "你在夢中醒來，看到青藤拖著叔叔走向石階。恐懼讓你躲在木柱後，記憶開始斷片。",
      choices: [
        {
          title: "鼓起勇氣大喊",
          result: "你的喊聲驚動了青藤，他暫停行動並威脅沉默。你留下的恐懼成為日後的夢魘。"
        },
        {
          title: "偷偷跟隨並記錄",
          result: "你在沙地留下足跡，成為僅有的線索，但第二天你因恐懼否認自己所見。"
        },
        {
          title: "逃回房間",
          result: "你躲回被窩，強迫自己相信那只是夢。這段失憶讓真相被拖延。"
        }
      ],
      gallery: [
        { label: "夜間神社", url: "https://images.unsplash.com/photo-1513012142877-5d154e9cf00a?auto=format&fit=crop&w=800&q=80" },
        { label: "木柱陰影", url: "https://images.unsplash.com/photo-1500534310060-436dd09bff8f?auto=format&fit=crop&w=800&q=80" },
        { label: "稻禾月色", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  },
  {
    id: "chief",
    name: "村長｜信仰與否認",
    tag: "信仰",
    summary: "身兼家主與宗教權威，堅信夢遊是神諭，對人為說法本能排拒。",
    thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    scene: {
      title: "神前的決斷",
      desc: "連環死亡逼近真相，林衡要求封鎖內社調查。若承認人為，你的一生信仰就此崩塌。",
      choices: [
        {
          title: "准許調查",
          result: "你同意開放內社，信眾動搖。若真有人為，你的威望將毀，但村子或能獲救。"
        },
        {
          title: "以神諭拒絕",
          result: "你拒絕並宣布這是神的試煉。民眾暫時安靜，但青藤的行動將在你的盲信下繼續。"
        },
        {
          title: "私下質疑青藤",
          result: "你暗中詢問青藤，他言辭閃爍。你起疑卻不願承認，選擇沈默維繫信仰。"
        }
      ],
      gallery: [
        { label: "內社與神龕", url: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&w=800&q=80" },
        { label: "村民聚集", url: "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=800&q=80" },
        { label: "長老屋", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  }
];

const roleGrid = document.getElementById("role-grid");
const sceneCard = document.getElementById("scene");
const galleryCard = document.getElementById("gallery");
const sceneRole = document.getElementById("scene-role");
const sceneTitle = document.getElementById("scene-title");
const sceneDesc = document.getElementById("scene-desc");
const choiceList = document.getElementById("choice-list");
const galleryGrid = document.getElementById("gallery-grid");

const intro = document.getElementById("intro");
const startBtn = document.getElementById("start-btn");
const aboutBtn = document.getElementById("about-btn");
const playBtn = document.getElementById("play-btn");

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  window.scrollTo({ top: document.querySelector(".main").offsetTop - 20, behavior: "smooth" });
});

aboutBtn.addEventListener("click", () => {
  intro.classList.toggle("hidden");
  if (!intro.classList.contains("hidden")) {
    intro.scrollIntoView({ behavior: "smooth" });
  }
});

playBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  document.getElementById("role-grid").scrollIntoView({ behavior: "smooth" });
});

function renderRoles() {
  roleGrid.innerHTML = roles
    .map(
      (role) => `
        <article class="role-card" data-role="${role.id}">
          <img class="role-thumb" src="${role.thumb}" alt="${role.name}">
          <div class="role-meta">
            <div class="tag">${role.tag}</div>
            <h3>${role.name}</h3>
            <p>${role.summary}</p>
          </div>
        </article>
      `
    )
    .join("");

  roleGrid.querySelectorAll(".role-card").forEach((card) => {
    card.addEventListener("click", () => {
      const roleId = card.getAttribute("data-role");
      const selected = roles.find((r) => r.id === roleId);
      if (selected) renderScene(selected);
    });
  });
}

function renderScene(role) {
  sceneRole.textContent = role.name;
  sceneTitle.textContent = role.scene.title;
  sceneDesc.textContent = role.scene.desc;

  choiceList.innerHTML = "";
  role.scene.choices.forEach((choice) => {
    const div = document.createElement("div");
    div.className = "choice";
    div.innerHTML = `
      <div class="title">${choice.title}</div>
      <div class="body">${choice.result}</div>
    `;
    div.addEventListener("click", () => {
      document.querySelectorAll(".choice").forEach((el) => el.classList.remove("active"));
      div.classList.add("active");
    });
    choiceList.appendChild(div);
  });

  renderGallery(role.scene.gallery);
  sceneCard.classList.remove("hidden");
  galleryCard.classList.remove("hidden");
  sceneCard.scrollIntoView({ behavior: "smooth" });
}

function renderGallery(items) {
  galleryGrid.innerHTML = items
    .map(
      (item) => `
        <div class="gallery-item">
          <img src="${item.url}" alt="${item.label}">
          <div class="label">${item.label}</div>
        </div>
      `
    )
    .join("");
}

renderRoles();

