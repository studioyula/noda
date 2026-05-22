const routes = {
  home: { label: "Home", title: "Home", group: null },
  brand: { label: "브랜드 소개", title: "브랜드 소개", group: "intro" },
  story: { label: "브랜드 스토리", title: "브랜드 스토리", group: "intro" },
  curriculum: { label: "커리큘럼", title: "커리큘럼", group: null },
  community: { label: "커뮤니티", title: "커뮤니티", group: null },
  communityStories: { label: "도반 이야기 목록", title: "도반 이야기 목록", parent: "community" },
  voyageRecords: { label: "항해 기록 게시판", title: "항해 기록 게시판", parent: "community" },
  reviewArchive: { label: "후기 아카이브 목록", title: "후기 아카이브 목록", parent: "community" },
  learning: { label: "배움과 도구", title: "배움과 도구", group: "program" },
  consulting: { label: "기업 컨설팅", title: "기업 컨설팅", group: "program" },
  curation: { label: "큐레이션", title: "큐레이션", group: "program" },
  membership: { label: "승선 신청", title: "멤버십 신청 랜딩", group: null },
  platform: { label: "도반 공간", title: "도반 공간", group: null }
};

const nav = [
  { label: "소개", route: "brand", children: ["brand", "story"] },
  { label: "커리큘럼", route: "curriculum" },
  { label: "커뮤니티", route: "community" },
  { label: "프로그램", route: "learning", children: ["learning", "consulting", "curation"] },
  { label: "승선 신청", route: "membership" },
  { label: "도반 공간", route: "platform", special: true }
];

const filters = {
  all: {
    label: "전체 보기",
    description: "방문자 상태를 선택하면 관련 항목만 지도 위에서 강조됩니다.",
    items: []
  },
  beginner: {
    label: "노션 기초가 막막하다면?",
    description: "처음 시작하는 사람에게 필요한 입문 대화방과 기초 강의를 먼저 보여줍니다.",
    items: ["openchat", "beginner"]
  },
  better: {
    label: "노션을 잘 쓰고 싶다면?",
    description: "꾸준히 참고할 채널과 질문 기반 특강으로 연결합니다.",
    items: ["youtube", "openchat", "openlecture"]
  },
  monthly: {
    label: "매달 열리는 특강이 궁금하다면?",
    description: "오픈특강을 중심으로 다음 행동을 확인합니다.",
    items: ["openlecture"]
  },
  automation: {
    label: "업무 자동화가 궁금하다면?",
    description: "노션, Make, AI 자동화 학습 경로를 강조합니다.",
    items: ["welcome", "class101", "fastcampus"]
  },
  template: {
    label: "바로 쓰는 템플릿과 스킬이 필요하다면?",
    description: "템플릿과 실무 도구를 바로 확인할 수 있는 경로입니다.",
    items: ["freeTemplate", "paidTemplate", "toolbox"]
  },
  productivity: {
    label: "생산성을 높이는 도구가 필요하다면?",
    description: "일하는 환경과 생산성을 높이는 추천 도구 큐레이션으로 연결합니다.",
    items: ["recommend"]
  }
};

const mapItems = {
  youtube: {
    name: "노션다움 유튜브",
    tag: "인사이트 채널",
    desc: "나만의 템플릿으로 개인과 조직의 생산성을 높이는 노션다움의 인사이트 채널. 노션을 데이터베이스로 사용하며 자동화와 AI 활용에 대한 인사이트 공유.",
    target: "노션과 자동화/AI 활용 사례를 먼저 보고 싶은 사람",
    gain: "사례, 관점, 반복 시청 가능한 학습 자료",
    cta: "영상 보러가기",
    linkLabel: "외부 유튜브 링크 placeholder",
    external: "#placeholder-youtube",
    x: "54%", y: "9%"
  },
  openchat: {
    name: "오픈톡방",
    tag: "커뮤니티",
    desc: "노션 사용자들과 서로 지식과 소식을 나누는 대화방.",
    target: "혼자 막히는 지점을 빠르게 물어보고 싶은 사람",
    gain: "질문, 소식, 사용자 간 지식 교환",
    cta: "오픈톡방 참여하기",
    linkLabel: "외부 오픈톡방 링크 placeholder",
    external: "#placeholder-openchat",
    x: "7%", y: "16%"
  },
  openlecture: {
    name: "질문의 서원 / 오픈특강",
    tag: "월간 특강",
    desc: "한 달에 한 번 열리는 오픈 특강. 노다의 방주만의 문제 해결 방식과 관점을 미리 경험하고, 열린 질문과 새로운 프레임워크를 통해 사고 전환.",
    target: "노다의 문제 해결 방식을 가볍게 경험해보고 싶은 사람",
    gain: "월간 주제, 사고 전환, 프레임워크 맛보기",
    cta: "오픈특강 보러가기",
    linkLabel: "큐레이션 > 오픈특강",
    route: "curation",
    category: "오픈특강",
    x: "62%", y: "25%"
  },
  beginner: {
    name: "노션101비기너클래스",
    tag: "기초강의",
    desc: "노션을 노션답게 사용하는 노션 기초 강의.",
    target: "노션을 처음 배우거나 기본기를 다시 잡고 싶은 사람",
    gain: "기본 구조, 데이터베이스 감각, 입문 사용법",
    cta: "강의 보러가기",
    linkLabel: "큐레이션 > 기초강의",
    route: "curation",
    category: "기초강의",
    x: "37%", y: "25%"
  },
  welcome: {
    name: "웰컴기프트 — 노션 자동화 설계 기초강의",
    tag: "자동화 기초",
    desc: "실전에 바로 적용 가능한 노션과 Make 강의.",
    target: "업무 흐름을 자동화로 연결하고 싶은 사람",
    gain: "노션과 Make를 함께 보는 자동화 설계 기초",
    cta: "강의 보러가기",
    linkLabel: "큐레이션 > 기초강의",
    route: "curation",
    category: "기초강의",
    x: "56%", y: "44%"
  },
  class101: {
    name: "Class101",
    tag: "외부 강의",
    desc: "Part 1. 노션 AI 코파일럿으로 남들보다 1시간 먼저 퇴근하는 나만의 자동화 비법. Part 2. MAKE + AI + NOTION 100% 업무 자동화 프로세스.",
    target: "체계적인 외부 강의로 자동화를 배우고 싶은 사람",
    gain: "AI, Make, Notion을 연결하는 업무 자동화 프로세스",
    cta: "Class101 강의 보러가기",
    linkLabel: "외부 Class101 강의 페이지 placeholder",
    external: "#placeholder-class101",
    x: "75%", y: "47%"
  },
  fastcampus: {
    name: "패스트캠퍼스",
    tag: "외부 강의",
    desc: "노션다움의 24시간 일하는 강의 판매 시스템 구축하기.",
    target: "판매 시스템과 운영 자동화 구조가 궁금한 사람",
    gain: "강의 판매 시스템 구축 관점",
    cta: "패스트캠퍼스 강의 보러가기",
    linkLabel: "외부 패스트캠퍼스 강의 페이지 placeholder",
    external: "#placeholder-fastcampus",
    x: "71%", y: "64%"
  },
  freeTemplate: {
    name: "무료 템플릿",
    tag: "0원 템플릿",
    desc: "업무에 바로 적용해볼 수 있는 무료 노션 템플릿.",
    target: "가볍게 템플릿을 써보고 싶은 사람",
    gain: "즉시 사용 가능한 무료 업무 구조",
    cta: "무료 템플릿 보기",
    linkLabel: "큐레이션 > 노션 템플릿",
    route: "curation",
    category: "노션 템플릿",
    x: "8%", y: "62%"
  },
  paidTemplate: {
    name: "유료 템플릿",
    tag: "유료 템플릿",
    desc: "업무 구조를 더 정교하게 만들 수 있는 유료 노션 템플릿.",
    target: "더 완성도 높은 업무 구조가 필요한 사람",
    gain: "정교한 템플릿 구조와 실무 적용 속도",
    cta: "유료 템플릿 보기",
    linkLabel: "큐레이션 > 노션 템플릿",
    route: "curation",
    category: "노션 템플릿",
    x: "24%", y: "72%"
  },
  toolbox: {
    name: "노션다움 도구함",
    tag: "작업 도구",
    desc: "노션다움 GPTs, 노션단축키, 날짜 생성 프로그램, 노션 포뮬러 2.0, 노션허브, 노션다움 QnA 등 노션 작업 속도와 활용도를 높이는 도구 모음.",
    target: "노션 작업 속도와 정확도를 높이고 싶은 사람",
    gain: "반복 작업을 줄이는 실무 보조 도구",
    cta: "도구함 보기",
    linkLabel: "큐레이션 > 노션다움 도구함",
    route: "curation",
    category: "노션다움 도구함",
    x: "48%", y: "73%"
  },
  recommend: {
    name: "추천 도구",
    tag: "생산성 큐레이션",
    desc: "플라우드 노트, 전자기기, 온라인 SaaS, 도서/리소스 등 일하는 환경과 생산성을 높이는 도구 큐레이션.",
    target: "일하는 환경 자체를 개선하고 싶은 사람",
    gain: "생산성 도구, 장비, 리소스 추천",
    cta: "추천 도구 보기",
    linkLabel: "큐레이션 > 추천 도구",
    route: "curation",
    category: "추천 도구",
    x: "76%", y: "80%"
  }
};

const catalog = [
  ["오픈특강", "질문의 서원 지난 특강", "지난 특강 → 유튜브 영상", "0원"],
  ["오픈특강", "다음 오픈특강", "예정 특강 → 신청폼", "신청"],
  ["기초강의", "노션101비기너클래스", "노션을 노션답게 사용하는 기초 강의", "유료"],
  ["기초강의", "웰컴기프트 — 노션 자동화 설계 기초강의", "노션과 Make 자동화 설계 기초", "0원/신청"],
  ["기초강의", "Class101", "AI + Make + Notion 업무 자동화 프로세스", "외부"],
  ["기초강의", "패스트캠퍼스", "24시간 일하는 강의 판매 시스템 구축하기", "외부"],
  ["노션 템플릿", "무료 템플릿", "업무에 바로 적용해보는 무료 템플릿", "0원"],
  ["노션 템플릿", "유료 템플릿", "정교한 업무 구조를 위한 유료 템플릿", "유료"],
  ["노션다움 도구함", "노션다움 GPTs", "작업 속도를 높이는 GPT 도구", "도구"],
  ["노션다움 도구함", "노션단축키", "반복 입력을 줄이는 단축키 도구", "도구"],
  ["노션다움 도구함", "날짜 생성 프로그램", "날짜 데이터 생성 보조 도구", "도구"],
  ["노션다움 도구함", "노션 포뮬러 2.0", "포뮬러 작성 보조 자료", "도구"],
  ["노션다움 도구함", "노션허브", "노션 관련 허브 placeholder", "도구"],
  ["노션다움 도구함", "노션다움 QnA", "질문과 답변 아카이브", "도구"],
  ["추천 도구", "플라우드 노트", "일하는 환경을 돕는 추천 도구", "추천"],
  ["추천 도구", "전자기기", "생산성 장비 큐레이션", "추천"],
  ["추천 도구", "온라인 SaaS", "업무에 쓰는 SaaS 큐레이션", "추천"],
  ["추천 도구", "도서 / 리소스", "관점과 실무를 돕는 자료", "추천"]
];

const ctaStates = {
  open: {
    label: "모집 중",
    button: "지금 승선 신청하기 / 결제하기",
    link: "#plans",
    desc: "결제 또는 플랜 선택 영역으로 연결"
  },
  briefing: {
    label: "설명회 신청 기간",
    button: "설명회 신청하기",
    link: "https://www.latpeed.com/products/KrllJ",
    desc: "외부 설명회 신청 페이지로 연결"
  },
  waiting: {
    label: "대기 기간",
    button: "승선 대기하기",
    link: "#waitlist",
    desc: "승선 대기 / 다음 기수 알림 placeholder"
  },
  closed: {
    label: "모집 마감",
    button: "다음 기수 알림 받기",
    link: "#waitlist",
    desc: "승선 대기 / 다음 기수 알림 placeholder"
  }
};

const state = {
  route: "home",
  filter: "all",
  selectedItem: "openlecture",
  catalogCategory: "전체",
  ctaState: "open",
  curriculumStage: "전체",
  selectedIsland: 0
};

const curriculumIslands = [
  { stage: "유입", name: "질문의 서원", subtitle: "무엇이든 물어보세요", desc: "한 달에 한 번 열리는 오픈 특강으로 누구나 참여할 수 있는 구역입니다. 노다의 방주만의 문제 해결 방식과 관점을 미리 경험할 수 있습니다.", type: "오픈 특강", activity: "열린 질문 / 새로운 프레임워크 / 사고 전환" },
  { stage: "안내", name: "초본디 제도", subtitle: "온보딩 프로그램", desc: "노다의 방주에 처음 승선하는 사람들을 위한 온보딩 구역입니다. 세계관과 규칙을 익히고, 함께 항해할 도반들과 연결되며 첫 출발을 준비합니다.", type: "온보딩", activity: "세계관 안내 / 규칙 확인 / 도반 연결" },
  { stage: "학습", name: "툴킷의 정원", subtitle: "노션 집중 클래스", desc: "노션을 중심으로 다양한 디지털 도구를 배우고 익히는 학습 구역입니다. 기본 사용법을 넘어, 각자의 업무와 흐름에 맞게 도구를 선택하고 활용하는 감각을 기릅니다.", type: "노션 집중 클래스", activity: "도구 학습 / 업무 흐름 적용 / 실습" },
  { stage: "학습", name: "자동화 용암지대", subtitle: "업무 구조 설계 훈련", desc: "자동화 시스템을 설계하고 직접 구축해보는 실전 학습 구역입니다. 워크플로우 설계, 데이터 처리, 반복 업무 자동화를 통해 실제 업무 구조를 더 견고하게 만드는 방법을 익힙니다.", type: "자동화 실전 학습", activity: "워크플로우 설계 / 데이터 처리 / 반복 업무 자동화" },
  { stage: "학습", name: "립 업 스트림", subtitle: "맞춤 시스템 완성 부트캠프", desc: "짧은 기간 동안 집중적으로 몰입해 자동화 역량을 끌어올리는 심화 부트캠프입니다. 케이스 스터디와 피어러닝을 통해 각자의 문제를 실제 시스템으로 구현합니다.", type: "심화 부트캠프", activity: "케이스 스터디 / 피어러닝 / 맞춤 시스템 구현" },
  { stage: "기록", name: "노다지", subtitle: "노다의 지혜 저장소", desc: "특강과 심화 콘텐츠가 축적되는 아카이브입니다. 항해를 거듭할수록 두꺼워지는 지식 자산을 언제든 꺼내 쓸 수 있습니다.", type: "콘텐츠 아카이브", activity: "특강 아카이브 / 심화 콘텐츠 / 지식 자산 축적" },
  { stage: "기록", name: "골디락스 아카이브", subtitle: "템플릿 아카이브", desc: "방주가 선별한 템플릿과 기준이 쌓이는 아카이브입니다. 더할 것도 뺄 것도 없는 균형에 가까운 구조를 확인합니다.", type: "아카이브", activity: "템플릿 선별 / 기준 정리 / 사례 축적" },
  { stage: "공유", name: "엔젤스 쉐어", subtitle: "프라이빗 오프라인 특강", desc: "실무 경험과 시행착오를 나누며 서로의 지혜를 나누는 오프라인 모임입니다. 혼자 쌓은 경험을 함께 나누는 과정에서 각자의 배움이 더 깊고 넓어지도록 돕습니다.", type: "프라이빗 오프라인 특강", activity: "경험 공유 / 실무 지혜 / 제한된 인원" },
  { stage: "공유", name: "윤슬도", subtitle: "1:1 멘토링", desc: "깊은 대화가 필요한 순간에 찾는 1:1 멘토링 구역입니다. 복잡한 고민을 함께 풀어가며 각자에게 맞는 다음 방향과 리듬을 차분히 정리해봅니다.", type: "1:1 멘토링", activity: "깊은 대화 / 방향 정리 / 리듬 점검" }
];

const app = document.querySelector("#app");
const globalMenu = document.querySelector("#globalMenu");
const floatingCta = document.querySelector("#floatingCta");

function setRoute(route, options = {}) {
  state.route = route;
  if (options.category) state.catalogCategory = options.category;
  location.hash = route === "home" ? "" : route;
  render();
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function activeTopRoute(item) {
  const current = routes[state.route];
  if (current?.parent) return item.route === current.parent;
  if (item.children) return item.children.includes(state.route);
  return item.route === state.route;
}

function renderNav() {
  globalMenu.innerHTML = nav.map(item => `
    <div class="nav-item">
      <button class="nav-btn ${item.special ? "nav-btn-special" : ""} ${activeTopRoute(item) ? "is-active" : ""}" data-route="${item.route}">
        ${item.label}
      </button>
      ${item.children ? `
        <div class="dropdown" role="menu">
          ${item.children.map(child => `
            <button class="${state.route === child ? "is-active" : ""}" data-route="${child}" role="menuitem">
              ${routes[child].label}
            </button>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `).join("");

  globalMenu.querySelectorAll("[data-route]").forEach(button => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });

  document.querySelector(".brand").onclick = () => setRoute("home");
}

function pageFrame(kicker, title, desc, body, tabs = "") {
  const header = title ? `
      <header class="page-head">
        <div>
          <h1>${title}</h1>
        </div>
        <div>
          <p class="page-role">${desc}</p>
        </div>
      </header>` : "";
  return `
    <article class="frame">
      ${header}
      ${tabs}
      ${body}
    </article>
  `;
}

function subtabs(group) {
  const keys = Object.keys(routes).filter(key => routes[key].group === group);
  return `
    <div class="subtabs">
      ${keys.map(key => `<button class="tab-btn ${state.route === key ? "is-active" : ""}" data-route="${key}">${routes[key].label}</button>`).join("")}
    </div>
  `;
}

function renderHome() {
  return pageFrame(
    "Home",
    "",
    "",
    `<div class="sections home-sections">
      <section class="home-hero">
        <div class="media-placeholder">
          <span class="box-label">S1. Hero</span>
          <h1>비주얼 영역</h1>
          <p>풀 이미지 또는 영상 키씬이 들어가는 자리입니다. 첫 화면에서 노다의 방주가 일반적인 노션·자동화 강의 사이트가 아니라, 일하는 방식을 다시 구조화하는 1년 항해형 브랜드임을 직감하게 만드는 영역.</p>
        </div>
      </section>
      <section class="section-box">
        <span class="box-label">S2. What is Noda</span>
        <h2>노다의 방주가 무엇을 하는 곳인지 짧고 명확하게 설명하는 영역</h2>
        <p>노다의 방주 브랜드 한 줄 정의와 기본 성격을 보여줍니다.</p>
        <p>노다의 방주는 자기 업에서 자리 잡았지만 시스템 없이 감각에 의존해온 전문가가, 어떤 문제든 시스템으로 바라보는 사람으로 변하도록 설계된 1년 항해형 프리미엄 멤버십입니다.</p>
        <ul class="content-list">
          <li>WHO: 자기 업에서 자리 잡은 전문가</li>
          <li>FROM: 감각에 의존하던 사람</li>
          <li>TO: 시스템으로 사고하는 사람</li>
          <li>HOW: 1년 항해형 멤버십 구조</li>
        </ul>
        <div class="section-actions">
          <button class="plain-btn" data-route="brand">더 알아보기</button>
        </div>
      </section>
      <section class="section-box">
        <div class="section-head">
          <div>
            <span class="box-label">S3. Explore Map</span>
            <h2>세계관형 탐색 지도</h2>
          </div>
          <p>노다의 방주 세계관 안에서 자연스럽게 보여줄 수 있는 주요 공간과 이동 지점을 지도처럼 탐색하게 하는 영역.</p>
        </div>
        <div class="world-map">
          <div class="world-region region-ark">방주</div>
          <div class="world-region region-voyage">항해</div>
          <div class="world-region region-village">출발 전 마을</div>
          <div class="world-region region-community">도반 기록</div>
          <button class="world-node world-node-ark" data-route="brand"><strong>방주 소개</strong><span>브랜드 소개</span></button>
          <button class="world-node world-node-story" data-route="story"><strong>세계관 이야기</strong><span>브랜드 스토리</span></button>
          <button class="world-node world-node-voyage" data-route="curriculum"><strong>항해 지도</strong><span>커리큘럼에서 확대</span></button>
          <button class="world-node world-node-village" data-route="learning"><strong>탑승 전 마을</strong><span>배움과 도구에서 상세</span></button>
          <button class="world-node world-node-community" data-route="community"><strong>도반 이야기</strong><span>기록과 변화</span></button>
          <button class="world-node world-node-boarding" data-route="membership"><strong>승선장</strong><span>승선 신청</span></button>
        </div>
        <div class="section-actions">
          <button class="plain-btn" data-route="curriculum">항해 지도 보기</button>
        </div>
      </section>
      <section class="section-box">
        <span class="box-label">S4. Gateway Cards</span>
        <h2>주요 메뉴로 이동하는 영역</h2>
        <p>방문자의 관심사 기준으로 안내합니다.</p>
        <div class="grid-2">
          ${gateway("세계관을 더 깊게 보고 싶다면?", "브랜드 스토리", "story")}
          ${gateway("도반들의 이야기가 궁금하다면?", "커뮤니티", "community")}
          ${gateway("어디서 시작하면 좋을지 모르겠다면?", "배움과 도구", "learning")}
          ${gateway("승선을 고민 중이라면?", "승선 신청", "membership")}
        </div>
      </section>
    </div>`
  );
}

function section(label, text) {
  return `<section class="section-box"><span class="box-label">${label}</span><p>${text}</p></section>`;
}

function richSection(label, role, items = [], type = "list") {
  const list = `<ul class="content-list">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  let visual = list;
  if (type === "cards" || type === "check") {
    visual = `<div class="grid-3">${items.map(item => `<article class="card"><strong>${item}</strong></article>`).join("")}</div>`;
  }
  if (type === "faq") {
    visual = `<div class="faq-list">${items.map(item => `<details open><summary>${item}</summary><p>답변 영역</p></details>`).join("")}</div>`;
  }
  if (type === "hero") {
    visual = `<div class="grid-2"><article class="card"><strong>들어갈 내용</strong>${list}</article><article class="card"><strong>CTA / 모집 상태 안내</strong></article></div>`;
  }
  return `<section class="section-box">
    <div class="section-head">
      <div>
        <span class="box-label">${label}</span>
      </div>
      <p>${formatRole(role)}</p>
    </div>
    ${visual}
  </section>`;
}

function formatRole(text) {
  return text.replace(/\. /g, ".<br>");
}

function gateway(title, desc, route) {
  return `<button class="card plain-btn" data-route="${route}"><strong>${title}</strong>${desc ? `<p>${desc}</p>` : ""}</button>`;
}

function renderCurriculum() {
  const stages = ["전체", "유입", "안내", "학습", "기록", "공유"];
  const selected = curriculumIslands[state.selectedIsland];
  return pageFrame(
    "커리큘럼",
    "항해 지도",
    "노다의 방주 1년 항해 구조를 지도처럼 확인하는 페이지.<br>9개의 섬과 5단계 여정을 통해 변화가 어떻게 설계되는지 보여줌.",
    `<div class="sections">
      <section class="section-box">
        <div class="section-head">
          <div><span class="box-label">S1. 1년 항해 지도</span><h2>9개 섬 / 5단계 여정</h2></div>
          <p>노다의 방주 1년 항해 구조를 한눈에 이해하게 하는 핵심 섹션. 9개의 섬을 5단계 여정 안에서 탐색하게 함.</p>
        </div>
        <p>5단계 필터와 9개 섬 마커를 통해 항해 구조를 탐색합니다. 필터 클릭 시 해당 단계의 섬만 선명하게 표시되고, 섬 클릭 시 상세 패널이 변경됩니다.</p>
        <div class="curriculum-map-wrap">
          <aside class="curriculum-filter-panel">
            ${stages.map(stage => `<button class="filter-btn ${state.curriculumStage === stage ? "is-active" : ""}" data-stage="${stage}">${stage}</button>`).join("")}
          </aside>
          <div class="island-map">
            <div class="stage-band band-1" aria-label="유입 구역"></div>
            <div class="stage-band band-2" aria-label="안내 구역"></div>
            <div class="stage-band band-3" aria-label="학습 구역"></div>
            <div class="stage-band band-4" aria-label="기록 구역"></div>
            <div class="stage-band band-5" aria-label="공유 구역"></div>
            ${curriculumIslands.map((island, index) => {
              const dim = state.curriculumStage !== "전체" && state.curriculumStage !== island.stage;
              return `<button class="island pos-${index} ${dim ? "is-dim" : ""} ${state.selectedIsland === index ? "is-selected" : ""}" data-island="${index}" data-stage="${island.stage}">
                <b>${island.name}</b>
                <span>${island.stage} · ${island.subtitle}</span>
              </button>`;
            }).join("")}
          </div>
          <aside class="curriculum-detail-panel">
            <h3>${selected.name}</h3>
            <p><strong>단계</strong> · ${selected.stage}</p>
            <p><strong>부제</strong> · ${selected.subtitle}</p>
            <p>${selected.desc}</p>
            <p><strong>운영 성격</strong> · ${selected.type}</p>
            <p><strong>관련 활동</strong> · ${selected.activity}</p>
            ${selected.name === "질문의 서원" ? `<button class="plain-btn" data-route="learning">오픈특강 보기</button>` : ""}
          </aside>
        </div>
      </section>
      ${richSection("S2. 항해 사이클", "1년 멤버십의 시간 구조를 보여줍니다. 항해와 정박이 반복되는 리듬을 이해하게 합니다.", ["3~7월: 항해", "8월: 정박", "9~1월: 항해", "2월: 정박", "연 2회 승선"], "cards")}
      ${richSection("S3. 변화가 일어나는 장치", "콘텐츠만 제공하는 곳이 아니라, 변화가 지속되도록 설계된 구조임을 보여줍니다.", ["선언: 보딩패스, 마인드 앵커링 데이, 승선식", "적용: 쌍방향 수업, TMF", "기록: 항해일지, 성과공유회", "동행: 도반, 전보라운지, 폴라리스, 오프라인 모임"], "cards")}
      ${richSection("S4. 승선 전 궁금한 것들", "커리큘럼을 본 방문자가 참여 전 느끼는 학습 불안을 줄입니다.", ["질문 1", "질문 2", "질문 3", "질문 4"], "faq")}
      ${ctaSection("S5. CTA", "커리큘럼을 확인한 방문자가 다음 행동을 선택하게 합니다.", [
        ["승선 대기", "membership"],
        ["탑승 신청", "membership"],
        ["도반 이야기 보러가기", "community"]
      ])}
    </div>`
  );
}

function renderCommunity() {
  return pageFrame(
    "커뮤니티",
    "도반 이야기",
    "실제 항해 중인 도반들의 기록과 항해 후 변화를 통해 커뮤니티의 실체와 신뢰를 보여주는 페이지",
    `<div class="sections">
      <section class="section-box">
        <div class="section-head">
          <div><span class="box-label">S1. 도반 인터뷰 Preview</span></div>
          <p>${formatRole("도반들의 실제 변화를 통해 신뢰감을 높이고, 사람 중심의 정체성 매력을 형성합니다.")}</p>
        </div>
        <div class="grid-3 interview-grid">
          ${interviewCard("도반 인터뷰 카드 1")}
          ${interviewCard("도반 인터뷰 카드 2")}
          ${interviewCard("도반 인터뷰 카드 3")}
        </div>
        <div class="section-actions">
          <button class="plain-btn" data-route="communityStories">전체 보기 → 도반 이야기 목록</button>
        </div>
      </section>
      ${communityPreviewSection("S2. 항해 기록 Preview", "노다의 방주 안에서 실제로 일어난 주요 활동과 장면을 보여줍니다.", ["주요 활동 사진 또는 스냅샷", "도반들의 발표 / 공유 장면", "항해 중 있었던 주요 이벤트", "활동 모습 / 결과물 일부 노출"], "전체 보기 → 항해 기록 게시판", "voyageRecords")}
      ${communityPreviewSection("S3. 후기 아카이브 Preview", "도반들이 남긴 짧은 후기를 선별하여 보여주고, 반복적으로 나타나는 변화의 언어를 보여줍니다.", ["후기 일부", "반복적으로 등장하는 키워드", "기수 / 직업 / 상황 태그"], "전체 보기 → 후기 아카이브 목록", "reviewArchive")}
      ${ctaSection("S4. CTA", "도반들의 기록을 본 방문자가 다음 탐색으로 이동하게 합니다.", [
        ["항해 지도 보기", "curriculum"],
        ["승선 대기", "membership"]
      ])}
    </div>`
  );
}

function interviewCard(title) {
  return `<article class="card interview-card">
    <strong>${title}</strong>
    <div class="interview-thumb">도반 이미지</div>
    <dl>
      <div><dt>이름 / 기수 / 직업</dt><dd>정보 영역</dd></div>
      <div><dt>탑승 전 고민</dt><dd>내용 영역</dd></div>
      <div><dt>항해 후 변화</dt><dd>내용 영역</dd></div>
      <div><dt>대표 문장</dt><dd>인용문 영역</dd></div>
    </dl>
  </article>`;
}

function communityPreviewSection(label, role, items, buttonLabel, route) {
  return `<section class="section-box">
    <div class="section-head">
      <div><span class="box-label">${label}</span></div>
      <p>${formatRole(role)}</p>
    </div>
    <div class="grid-3">
      ${items.map(item => `<article class="card"><strong>${item}</strong></article>`).join("")}
    </div>
    <div class="section-actions">
      <button class="plain-btn" data-route="${route}">${buttonLabel}</button>
    </div>
  </section>`;
}

function ctaSection(label, role, actions) {
  return `<section class="section-box">
    <div class="section-head">
      <div><span class="box-label">${label}</span></div>
      <p>${formatRole(role)}</p>
    </div>
    <div class="grid-${actions.length === 2 ? "2" : "3"}">
      ${actions.map(([title, route]) => gateway(title, "", route)).join("")}
    </div>
  </section>`;
}

function renderCommunitySubpage(routeKey) {
  const data = {
    communityStories: ["커뮤니티 > 도반 이야기 목록", "도반 이야기 목록", "도반 인터뷰를 모아보는 목록 페이지. 여러 도반의 탑승 전 고민, 항해 후 변화, 현재 일하는 방식을 비교하며 확인하게 함.", ["도반 인터뷰 카드 목록", "도반 이미지", "이름 / 기수 / 직업", "탑승 전 고민", "항해 후 변화", "대표 문장", "인터뷰 보기"]],
    voyageRecords: ["커뮤니티 > 항해 기록 게시판", "항해 기록 게시판", "성과공유회, 오프라인 모임, 주요 활동 등 항해 중 공개 가능한 기록을 모아보는 목록 페이지.", ["성과공유회 기록", "오프라인 모임 / 엔젤스 쉐어 기록", "주요 활동 사진 또는 스냅샷", "도반들의 발표 / 공유 장면", "항해 중 있었던 주요 이벤트"]],
    reviewArchive: ["커뮤니티 > 후기 아카이브 목록", "후기 아카이브 목록", "도반들이 남긴 짧은 후기를 선별하여 모아보는 목록 페이지.", ["후기 일부", "반복적으로 등장하는 키워드", "기수 / 직업 / 상황 태그", "후기 카드 목록"]]
  }[routeKey];
  return pageFrame(
    data[0],
    data[1],
    data[2],
    `<div class="sections">
      ${richSection("목록 구조", "이번 와이어프레임에서는 상세 목록 페이지의 대표 구조만 표시합니다.", data[3], "cards")}
      <section class="section-box">
        <button class="plain-btn" data-route="community">← 커뮤니티 메인으로 돌아가기</button>
      </section>
    </div>`
  );
}

function renderLearning() {
  const currentFilter = filters[state.filter];
  const activeItems = currentFilter.items;
  const selected = mapItems[state.selectedItem];
  return pageFrame(
    "프로그램 > 배움과 도구",
    "배움과 도구",
    "노션다움을 처음 접한 사람이 자신의 관심 상태에 따라 어떤 강의, 자료, 템플릿, 도구부터 보면 좋을지 찾는 지도형 페이지. 카드 목록이나 섹션 나열이 아니라, 탑승 전 마을 지도처럼 구성해 각자의 상태에 맞는 시작점을 안내함.",
    `<div class="sections">
      <section class="section-box">
        <span class="box-label">방문자 상태 필터</span>
        <div class="filters">
          ${Object.entries(filters).map(([key, filter]) => `<button class="filter-btn ${state.filter === key ? "is-active" : ""}" data-filter="${key}">${filter.label}</button>`).join("")}
        </div>
        <div class="route-hint"><strong>추천 경로 / 그룹 설명</strong><p>${currentFilter.description}</p></div>
      </section>
      <div class="map-layout">
        <section>
          <div class="village-map" aria-label="배움과 도구 마을 지도">
            <div class="map-zone zone-community">커뮤니티 / 입문 광장</div>
            <div class="map-zone zone-lecture">특강 / 강의 거리</div>
            <div class="map-zone zone-template">템플릿 작업소</div>
            <div class="map-zone zone-tool">도구 창고</div>
            ${Object.entries(mapItems).map(([key, item]) => {
              const highlighted = state.filter === "all" || activeItems.includes(key);
              return `<button class="map-node ${highlighted ? "is-highlight" : "is-dim"} ${state.selectedItem === key ? "is-selected" : ""}" data-item="${key}" style="left:${item.x}; top:${item.y}">
                <strong>${item.name}</strong><span>${item.tag}</span>
              </button>`;
            }).join("")}
          </div>
        </section>
        ${detailPanel(selected)}
      </div>
    </div>`,
    subtabs("program")
  );
}

function detailPanel(item) {
  return `<aside class="detail-panel panel">
    <span class="box-label">선택 항목 상세 패널</span>
    <h2>${item.name}</h2>
    <dl>
      <div><dt>한 줄 설명</dt><dd>${item.desc}</dd></div>
      <div><dt>추천 대상</dt><dd>${item.target}</dd></div>
      <div><dt>얻을 수 있는 것</dt><dd>${item.gain}</dd></div>
      <div><dt>연결 목적지</dt><dd>${item.linkLabel}</dd></div>
    </dl>
    <button class="cta-btn" data-detail-cta="${state.selectedItem}">${item.cta}</button>
  </aside>`;
}

function renderCuration() {
  const categories = ["전체", "오픈특강", "기초강의", "노션 템플릿", "노션다움 도구함", "추천 도구"];
  const items = state.catalogCategory === "전체" ? catalog : catalog.filter(item => item[0] === state.catalogCategory);
  return pageFrame(
    "프로그램 > 큐레이션",
    "큐레이션",
    "노션다움이 선별한 템플릿, 도구, 장비, 리소스를 모아보는 목록 페이지.",
    `<div class="sections">
      <section class="section-box">
        <span class="box-label">카테고리 탭 / 필터</span>
        <div class="catalog-tools">
          ${categories.map(category => `<button class="plain-btn ${state.catalogCategory === category ? "is-active" : ""}" data-category="${category}">${category}</button>`).join("")}
        </div>
        <div class="grid-3">
          ${items.map(([category, name, desc, price]) => `
            <article class="card">
              <div class="thumb">썸네일 placeholder</div>
              <strong>${name}</strong>
              <div class="meta">${category}</div>
              <span class="price">${price}</span>
              <p>${desc}</p>
              <button class="plain-btn">링크 버튼 placeholder</button>
            </article>
          `).join("")}
        </div>
      </section>
    </div>`,
    subtabs("program")
  );
}

function renderMembership() {
  return pageFrame(
    "승선 신청",
    "",
    "",
    `<div class="sections membership-sections">
      <section class="section-box membership-guide">
        <span class="box-label">페이지 구성 안내</span>
        <p>이 페이지에는 멤버십을 이해하고 신청 여부를 판단하는 데 필요한 핵심 정보만 요약해서 넣습니다.</p>
        <p>모집 중이 아니어도 페이지 본문은 항상 볼 수 있습니다. 대신 지금 신청할 수 있는지, 설명회를 신청해야 하는지, 대기해야 하는지는 화면 하단의 고정 버튼에서 안내합니다.</p>
      </section>
      ${richSection("S1. Hero / 멤버십 한 줄 정의", "노다의 방주를 처음 보는 사람도 멤버십의 성격을 빠르게 이해하게 함.", ["노다의 방주 한 줄 정의", "1년 단위 프리미엄 멤버십", "노션/자동화 교육이 아니라 일하는 구조를 만드는 사람으로 바뀌는 과정", "CTA 보조 안내"], "hero")}
      ${richSection("S2. 이 항해가 필요한 사람", "방문자가 자신이 이 멤버십의 대상인지 판단하게 함.", ["자기 업에서 자리 잡았지만 시스템 없이 감각으로 일해온 사람", "반복 업무와 정보 혼란으로 성장 한계를 느끼는 사람", "노션/자동화/AI를 도구가 아니라 일하는 구조로 만들고 싶은 사람", "혼자 배워서는 유지가 어렵다고 느끼는 사람"], "check")}
      ${richSection("S3. 1년 후 무엇이 달라지는가", "1년 항해 후 방문자가 기대할 수 있는 변화의 방향을 보여줌.", ["일하는 방식이 감각이 아니라 구조로 정리됨", "반복 업무와 정보 흐름을 시스템으로 다루게 됨", "도구 사용자가 아니라 자기 업무 구조를 설계하는 사람으로 바뀜"], "cards")}
      ${richSection("S4. 변화가 일어나는 구조", "항해, 도반, 반복 실험, 피드백을 통해 변화가 작동하는 원리를 보여줌.", ["선언", "적용", "기록", "동행"], "cards")}
      ${richSection("S5. 무엇이 포함되는가", "멤버십에 포함되는 경험과 제공 범위를 확인하게 함.", ["쌍방향 수업", "항해일지와 기록", "도반 커뮤니티", "성과공유회", "오프라인 접점"], "cards")}
      <section id="plans" class="section-box">
        <span class="box-label">S6. 플랜 비교</span>
        <table class="compare-table">
          <thead><tr><th>플랜</th><th>포함 범위</th><th>CTA 연결</th></tr></thead>
          <tbody>
            <tr><td>Core</td><td>노션 + 자동화 수업</td><td>결제 / 신청</td></tr>
            <tr><td>Boost</td><td>Core + 부트캠프 (립 업 스트림, 8주)</td><td>결제 / 신청</td></tr>
            <tr><td>Black</td><td>Boost + 1:1 컨설팅 4회</td><td>결제 / 신청</td></tr>
          </tbody>
        </table>
      </section>
      ${richSection("S7. 도반의 변화", "도반의 변화를 통해 멤버십의 신뢰를 보조함.", ["탑승 전 고민", "항해 중 만든 구조", "1년 후 달라진 일하는 방식"], "cards")}
      ${richSection("S8. 불안 해소", "신청 전 망설임, 난이도, 시간, 적합성에 대한 우려를 줄임.", ["시간이 부족해도 가능한가", "중간에 밀리면 어떻게 되는가", "혼자 못 따라가면 어떻게 되는가"], "faq")}
      ${richSection("S9. FAQ", "최종 확인 전 자주 묻는 질문을 정리함.", ["가격 / 플랜", "참여 방식", "결제 / 환불", "모집 상태"], "faq")}
      <section id="waitlist" class="section-box">
        <span class="box-label">S10. 최종 CTA + 상태값 미리보기</span>
        <p>하단 플로팅 CTA는 승선 신청 페이지에서만 노출되는 고정 요소입니다.</p>
        <p>실제 사이트에는 운영 시점의 현재 모집 상태 CTA 하나만 노출될 예정입니다. 이 와이어프레임에서는 고객 검토를 위해 아래 탭으로 4가지 상태를 미리 전환해봅니다.</p>
        <p>탭을 누르면 화면 하단의 고정 CTA 문구와 연결 목적지가 함께 바뀝니다.</p>
        <div class="cta-preview">
          ${Object.entries(ctaStates).map(([key, cta]) => `<button class="plain-btn ${state.ctaState === key ? "is-active" : ""}" data-cta-state="${key}">${cta.label}</button>`).join("")}
        </div>
      </section>
    </div>`
  );
}

function renderPlaceholder(routeKey) {
  const data = {
    brand: ["소개 > 브랜드 소개", "브랜드 소개", "노다의 방주가 무엇이고, 왜 만들어졌으며, 누가 이끄는지 명료하게 설명함.<br>리더에 대한 신뢰와 노션다움·노다의 방주·비전허브가 하나의 철학 안에서 어떻게 연결되는지 보여줌."],
    story: ["소개 > 브랜드 스토리", "브랜드 스토리", "디지털 대홍수와 항해의 세계관을 문학적 서사처럼 경험하게 하는 몰입형 브랜드 스토리 페이지. 이 세계 안으로 들어가보고 싶게 만드는 역할."],
    consulting: ["프로그램 > 기업 컨설팅", "기업 컨설팅", "팀과 조직의 일하는 구조를 진단하고, 노션·자동화·AI를 기반으로 업무 시스템을 설계·도입하는 서비스 안내 페이지."],
    platform: ["도반 공간", "도반 공간", "도반 전용 플랫폼 또는 외부 커뮤니티로 이동하는 메뉴 자리입니다. 세부 구조는 후속 DB 확정 후 반영합니다."]
  }[routeKey];
  const tabs = routes[routeKey].group ? subtabs(routes[routeKey].group) : "";
  const bodies = {
    brand: `<div class="sections">
      ${richSection("S1. 노다의 방주는 무엇인가", "노다의 방주의 기본 정의를 명확히 설명함.<br>도구 교육이 아니라 일하는 구조를 만드는 사람으로 바뀌는 경험임을 보여줌.", ["1년 항해형 프리미엄 멤버십", "노션, 자동화, AI를 다루지만 도구 교육이 중심은 아님", "일하는 방식을 구조화하는 사람으로 바뀌는 곳", "자기 업에서 자리 잡았지만 시스템화가 필요한 사람에게 적합"], "cards")}
      ${richSection("S2. 왜 만들어졌는가", "노다의 방주가 단순 교육 상품이 아니라 시대적 문제의식에서 출발했음을 설명함.<br>더 많은 도구보다 자기 일을 구조화하는 능력이 필요하다는 문제의식을 보여줌.", ["AI·디지털 시대의 정보 과부하", "감각과 의지만으로 버티기 어려운 환경", "성장의 변곡점에서 시스템 부재를 느끼는 사람들", "구조가 필요한 이유"], "cards")}
      ${richSection("S3. 이 항해를 이끄는 사람", "이현석 대표가 왜 이 구조를 만들 수 있는 사람인지 보여줌.<br>단순 강사가 아니라 구조를 설계하고 사람을 변화시키는 사람으로 신뢰를 형성함.", ["이현석 대표 (프로필 이미지)", "Flow Tailor", "16년 기획자 경험", "대표 인용문 또는 짧은 관점 문장"], "cards")}
      ${richSection("S4. 브랜드 아키텍처", "노션다움·노다의 방주·비전허브가 따로 노는 브랜드가 아니라 하나의 철학이 깊이별로 펼쳐지는 구조임을 보여줌.<br>방문자가 세 브랜드의 관계를 직관적으로 이해하게 함.", ["노션다움 = 발견", "노다의 방주 = 몰입", "비전허브 = 확장", "발견 → 몰입 → 확장 흐름"], "cards")}
      ${richSection("S5. 노다의 방주가 지키는 방식", "노다의 방주가 어떤 기준으로 운영되는지 보여줌.", ["도구보다 구조", "의지보다 시스템", "혼자보다 도반"], "cards")}
      <section class="section-box">
        <div class="section-head">
          <div><span class="box-label">S6. 다음 이동</span></div>
          <p>브랜드 이해를 마친 방문자가 다음 관심사에 따라 이동하게 함.</p>
        </div>
        <div class="grid-3">
          ${gateway("세계관을 더 깊게 보고 싶다면", "", "story")}
          ${gateway("실제 1년 항해 구조가 궁금하다면", "", "curriculum")}
          ${gateway("승선을 고민 중이라면", "", "membership")}
        </div>
      </section>
    </div>`,
    story: `<div class="sections">
      ${richSection("S1. 디지털 대홍수의 시대", "디지털 대홍수의 시대와 아직 파도 위에 있는 사람들의 감각을 여는 도입부.", ["도구와 정보가 계속 밀려오는 시대", "감각과 의지만으로는 버티기 어려운 환경", "기존 방식이 더 이상 통하지 않는 감각"], "cards")}
      ${richSection("S2. 왜 방주인가", "방주가 단순 피난처가 아니라 보호와 훈련의 공간임을 보여줌. 피하는 곳이 아니라, 함께 적응하고 항해하는 공간으로 의미를 전환함.", ["방주 메타포", "피난처가 아니라 적응 훈련소", "보호와 훈련의 이중 의미", "함께 항해하는 배"], "cards")}
      ${richSection("S3. 혼자가 아니라 도반으로", "혼자 배우는 교육이 아니라, 같은 방향을 선택한 사람들과 함께 항해하는 구조임을 보여줌.", ["수강생이 아니라 도반", "함께 항해하는 사람", "같은 방향을 선택한 사람들", "같은 언어와 리듬을 공유하는 사람들"], "cards")}
      ${richSection("S4. 작업자에서 설계자로", "노다의 방주가 약속하는 정체성 변화를 보여줌. 도구를 잘 쓰는 사람이 아니라, 자기 일을 구조로 바라보고 설계하는 사람으로 바뀌는 방향을 제시함.", ["작업자에서 설계자로", "감각에 의존하던 사람 → 시스템으로 사고하는 사람", "도구를 쓰는 사람 → 일하는 구조를 만드는 사람"], "cards")}
      ${richSection("S5. 함께 항해하는 사람들", "노다의 방주 안에서 함께 항해하는 사람들의 역할과 표식을 짧게 소개함. (도반 등급 소개)", ["도반", "마도로스", "폴라리스", "필요 시 방주님", "등급/역할 표식"], "cards")}
      ${richSection("S6. 항해가 펼쳐지는 세계", "노다의 방주 세계관이 9개의 섬과 항해 구조로 펼쳐져 있음을 보여줌.", ["9개 섬 이름", "섬별 부제 또는 짧은 설명", "항해 지도 보기 → 커리큘럼"], "cards")}
      ${ctaSection("S7. CTA", "브랜드 스토리를 읽은 방문자가 실제 항해 구조나 도반 이야기로 이동하게 함.", [
        ["항해 지도 보기", "curriculum"],
        ["도반 이야기 보기", "community"]
      ])}
    </div>`,
    consulting: `<div class="sections">
      ${richSection("S1. 어떤 조직에 필요한가", "팀과 조직의 일하는 구조를 진단하고, 노션·자동화·AI를 기반으로 업무 시스템을 설계·도입하는 서비스 안내 페이지.", ["업무 구조가 흩어진 조직", "노션/자동화 도입이 필요한 조직", "AI 활용 기준이 필요한 조직"], "cards")}
      ${richSection("S2. 제공 범위", "기업 컨설팅에서 제공하는 범위를 확인하는 영역.", ["업무 구조 진단", "노션 시스템 설계", "자동화/AI 활용", "운영 교육"], "cards")}
      ${richSection("S3. 진행 프로세스", "대략적인 프로세스와 문의 동선을 보여주는 영역.", ["진단", "설계", "구축", "교육", "운영 점검"], "cards")}
      ${richSection("S4. 적용 예시", "도입 사례 또는 적용 예시를 배치하는 영역.", ["적용 전 문제", "설계한 업무 시스템", "도입 후 운영 방식"], "cards")}
      ${richSection("S5. 문의 안내", "조직 대상 문의 동선과 연락처를 안내하는 영역.", ["문의 버튼", "상담 폼", "연락처"], "cards")}
    </div>`,
    platform: `<div class="sections">${richSection("도반 공간", "도반 전용 플랫폼 또는 외부 커뮤니티로 이동하는 메뉴 자리입니다.", ["외부 플랫폼 링크", "로그인/입장 안내", "권한 안내"], "cards")}</div>`
  };
  return pageFrame(data[0], data[1], data[2], bodies[routeKey], tabs);
}

function renderFloatingCta() {
  if (state.route !== "membership") {
    floatingCta.hidden = true;
    floatingCta.innerHTML = "";
    return;
  }
  const cta = ctaStates[state.ctaState];
  floatingCta.hidden = false;
  floatingCta.innerHTML = `
    <div>
      <strong>하단 플로팅 CTA 미리보기: ${cta.label}</strong>
      <p>${cta.desc}</p>
    </div>
    <a class="cta-btn" href="${cta.link}" ${cta.link.startsWith("http") ? "target=\"_blank\" rel=\"noopener\"" : ""}>${cta.button}</a>
  `;
}

function bindEvents() {
  app.querySelectorAll("[data-route]").forEach(button => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });
  app.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      render();
    });
  });
  app.querySelectorAll("[data-item]").forEach(button => {
    button.addEventListener("click", () => {
      state.selectedItem = button.dataset.item;
      render();
    });
  });
  app.querySelectorAll("[data-detail-cta]").forEach(button => {
    button.addEventListener("click", () => {
      const item = mapItems[button.dataset.detailCta];
      if (item.route) setRoute(item.route, { category: item.category });
      else window.open(item.external, "_blank", "noopener");
    });
  });
  app.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      state.catalogCategory = button.dataset.category;
      render();
    });
  });
  app.querySelectorAll("[data-stage]").forEach(button => {
    button.addEventListener("click", () => {
      state.curriculumStage = button.dataset.stage;
      render();
    });
  });
  app.querySelectorAll("[data-island]").forEach(button => {
    button.addEventListener("click", () => {
      state.selectedIsland = Number(button.dataset.island);
      render();
    });
  });
  app.querySelectorAll("[data-cta-state]").forEach(button => {
    button.addEventListener("click", () => {
      state.ctaState = button.dataset.ctaState;
      render();
    });
  });
}

function render() {
  renderNav();
  if (state.route === "home") app.innerHTML = renderHome();
  else if (state.route === "curriculum") app.innerHTML = renderCurriculum();
  else if (state.route === "community") app.innerHTML = renderCommunity();
  else if (routes[state.route]?.parent === "community") app.innerHTML = renderCommunitySubpage(state.route);
  else if (state.route === "learning") app.innerHTML = renderLearning();
  else if (state.route === "curation") app.innerHTML = renderCuration();
  else if (state.route === "membership") app.innerHTML = renderMembership();
  else app.innerHTML = renderPlaceholder(state.route);
  bindEvents();
  renderFloatingCta();
}

window.addEventListener("hashchange", () => {
  const route = location.hash.replace("#", "");
  if (route && routes[route]) {
    state.route = route;
    render();
  }
});

const initialRoute = location.hash.replace("#", "");
if (initialRoute && routes[initialRoute]) state.route = initialRoute;
render();
