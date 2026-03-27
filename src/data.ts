export interface River {
  id: string;
  name: string;
  description: string;
  features: string[];
  mainFish: string[];
  image: string;
}

export interface FishBehavior {
  season: string;
  tempRange: string;
  behavior: string;
  targetFish: string[];
  tips: string;
}

export interface CatchReport {
  date: string;
  fish: string;
  weight: string;
  method: string;
}

export interface FishingSpot {
  id: string;
  riverId: string;
  name: string;
  location: string;
  coords: { lat: number; lng: number };
  bestSeason: string[];
  difficulty: "简单" | "中等" | "困难";
  targetSpecies: string[];
  description: string;
  weather: {
    temp: string;
    condition: string;
    wind: string;
    pressure: string;
  };
  reports: CatchReport[];
}

export interface FishSpecies {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  image: string;
  habit: string;
}

export const FISH_SPECIES: FishSpecies[] = [
  {
    id: "tilapia",
    name: "罗非鱼",
    scientificName: "Oreochromis niloticus",
    description: "广州最常见的鱼类，生命力极强，几乎遍布所有水域。",
    habit: "杂食性，喜温暖，在河涌、珠江均有大量分布。",
    image: "https://i.postimg.cc/6y3kYGX4/luo-fei-yu.jpg"
  },
  {
    id: "crucian",
    name: "鲫鱼",
    scientificName: "Carassius auratus",
    description: "淡水钓鱼人的入门首选，肉质鲜美，分布广泛。",
    habit: "底层鱼类，喜草丛，四季皆可钓。",
    image: "https://i.postimg.cc/GH2WqsCH/ji-yu.jpg"
  },
  {
    id: "mud-carp",
    name: "鲮鱼",
    scientificName: "Cirrhinus molitorella",
    description: "岭南特色鱼种，力量极大，是广州钓友最喜爱的目标之一。",
    habit: "喜温怕冷，底层觅食，冲劲十足。",
    image: "https://i.postimg.cc/qzRPjCTN/ling-yu.png"
  },
  {
    id: "grass-carp",
    name: "草鱼",
    scientificName: "Ctenopharyngodon idella",
    description: "体型较大，生长迅速，是大型淡水鱼的代表。",
    habit: "中下层鱼类，喜食草类，夏季最为活跃。",
    image: "https://i.postimg.cc/KRz6Jg2c/cao-yu.jpg"
  },
  {
    id: "bass",
    name: "鲈鱼",
    scientificName: "Micropterus salmoides",
    description: "路亚钓法的热门目标，攻击性强，动作迅猛。",
    habit: "肉食性，常躲在障碍物附近伏击猎物。",
    image: "https://i.postimg.cc/LnXcNZpm/lu-yu.jpg"
  },
  {
    id: "mandarin",
    name: "鳜鱼",
    scientificName: "Siniperca chuatsi",
    description: "名贵淡水鱼，肉质极佳，俗称“桂花鱼”。",
    habit: "底层肉食鱼，喜乱石结构，夜间活跃。",
    image: "https://i.postimg.cc/LnXcNZp2/gui-yu.jpg"
  },
  {
    id: "carp",
    name: "鲤鱼",
    scientificName: "Cyprinus carpio",
    description: "生性机警，力量持久，是考验钓技的经典鱼种。",
    habit: "底层杂食，喜拱泥寻食，春秋两季好钓。",
    image: "https://i.postimg.cc/xcCwtb2S/li-yu.jpg"
  },
  {
    id: "catfish",
    name: "鲶鱼",
    scientificName: "Silurus asotus",
    description: "夜行性鱼类，嗅觉灵敏，常在浑浊水域出没。",
    habit: "底层肉食，喜阴暗，雨后或夜间是绝佳时机。",
    image: "https://i.postimg.cc/fJLGB0Ns/nian-yu.jpg"
  }
];

export const RIVERS: River[] = [
  {
    id: "pearl-river",
    name: "珠江干流 (广州段)",
    description: "珠江广州段水域面广，受潮汐影响明显。水质中等，鱼种丰富，是市民最常去的钓场。",
    features: ["潮汐变化大", "结构复杂", "交通便利"],
    mainFish: ["罗非鱼", "鲶鱼", "鲤鱼", "鲻鱼"],
    image: "https://picsum.photos/seed/pearlriver/800/600"
  },
  {
    id: "liuxihe",
    name: "流溪河",
    description: "广州的母亲河，上游水质极佳。中下游水流平缓，是钓友们公认的黄金钓场。",
    features: ["水质清澈", "环境优美", "鱼种多样"],
    mainFish: ["鲮鱼", "草鱼", "鲫鱼", "白条"],
    image: "https://picsum.photos/seed/liuxihe/800/600"
  },
  {
    id: "zengjiang",
    name: "增江",
    description: "增江画廊风景如画，水域宽阔，是大型淡水鱼类的栖息地。",
    features: ["水域开阔", "大鱼多", "风景优美"],
    mainFish: ["青鱼", "鳙鱼", "翘嘴", "鲤鱼"],
    image: "https://picsum.photos/seed/zengjiang/800/600"
  },
  {
    id: "dongjiang",
    name: "东江 (广州段)",
    description: "东江水流较急，含氧量高，鱼类活力强。适合路亚和远投钓法。",
    features: ["流速较快", "含氧量高", "鱼类劲头足"],
    mainFish: ["鲈鱼", "鳜鱼", "赤眼鳟", "黄颡鱼"],
    image: "https://picsum.photos/seed/dongjiang/800/600"
  },
  {
    id: "city-canals",
    name: "市内河涌",
    description: "遍布广州市区的河涌，虽然水质参差不齐，但却是最接地气的钓点。",
    features: ["随处可见", "罗非鱼天下", "适合练手"],
    mainFish: ["罗非鱼", "塘鲺", "攀鲈"],
    image: "https://picsum.photos/seed/canal/800/600"
  }
];

export const SEASONAL_BEHAVIORS: FishBehavior[] = [
  {
    season: "春季 (3-5月)",
    tempRange: "15°C - 25°C",
    behavior: "万物复苏，鱼类进入产卵期，开始向浅水区移动寻找食物和产卵地。",
    targetFish: ["鲫鱼", "鲤鱼", "鲮鱼"],
    tips: "选择浅滩、草边，使用腥香饵料，钓浅不钓深。"
  },
  {
    season: "夏季 (6-8月)",
    tempRange: "28°C - 35°C",
    behavior: "气温高，水温升，鱼类活跃度下降，多在深水区或阴凉处避暑。早晚及夜间活跃。",
    targetFish: ["草鱼", "鲢鳙", "罗非鱼"],
    tips: "钓早晚、钓夜间、钓深水、钓活水。饵料偏清淡。"
  },
  {
    season: "秋季 (9-11月)",
    tempRange: "20°C - 28°C",
    behavior: "黄金垂钓期。鱼类为了越冬疯狂进食，全天候活跃，力量大。",
    targetFish: ["青鱼", "鳙鱼", "鲤鱼", "翘嘴"],
    tips: "全天可钓，饵料香甜腥均可，注意线组强度。"
  },
  {
    season: "冬季 (12-2月)",
    tempRange: "8°C - 18°C",
    behavior: "水温低，鱼类新陈代谢减慢，多在深水避寒，进食欲望低，动作轻微。",
    targetFish: ["鲫鱼", "鲮鱼"],
    tips: "钓深、钓阳、钓草洞。使用细线小钩，饵料以腥为主，动作要轻。"
  }
];

export const FISHING_SPOTS: FishingSpot[] = [
  {
    id: "1",
    riverId: "pearl-river",
    name: "中大码头段",
    location: "海珠区滨江东路",
    coords: { lat: 23.103, lng: 113.298 },
    bestSeason: ["春季", "秋季"],
    difficulty: "简单",
    targetSpecies: ["罗非鱼", "鲶鱼"],
    description: "交通极其便利，适合新手练手，晚上钓友众多，氛围好。",
    weather: { temp: "22°C", condition: "多云", wind: "北风 2级", pressure: "1012 hPa" },
    reports: [
      { date: "2026-03-20", fish: "罗非鱼", weight: "1.2kg", method: "台钓" },
      { date: "2026-03-22", fish: "鲶鱼", weight: "2.5kg", method: "海竿" }
    ]
  },
  {
    id: "2",
    riverId: "liuxihe",
    name: "人和大坝下游",
    location: "白云区人和镇",
    coords: { lat: 23.335, lng: 113.285 },
    bestSeason: ["春季", "夏季", "秋季"],
    difficulty: "中等",
    targetSpecies: ["鲮鱼", "鲫鱼", "白条"],
    description: "水流平缓，鱼种丰富，是竞技钓和休闲钓的热门地点。",
    weather: { temp: "21°C", condition: "晴", wind: "东风 1级", pressure: "1015 hPa" },
    reports: [
      { date: "2026-03-21", fish: "鲮鱼", weight: "0.8kg", method: "拉饵" },
      { date: "2026-03-23", fish: "鲫鱼", weight: "0.5kg", method: "搓饵" }
    ]
  },
  {
    id: "3",
    riverId: "zengjiang",
    name: "增江画廊景区段",
    location: "增城区正果镇",
    coords: { lat: 23.412, lng: 113.892 },
    bestSeason: ["夏季", "秋季"],
    difficulty: "困难",
    targetSpecies: ["青鱼", "草鱼", "鳙鱼"],
    description: "水深面广，适合守大鱼，需要较强的耐力和装备。",
    weather: { temp: "23°C", condition: "晴间多云", wind: "南风 3级", pressure: "1008 hPa" },
    reports: [
      { date: "2026-03-18", fish: "草鱼", weight: "5.5kg", method: "谷麦" },
      { date: "2026-03-24", fish: "青鱼", weight: "8.2kg", method: "螺蛳" }
    ]
  },
  {
    id: "4",
    riverId: "dongjiang",
    name: "新沙港附近",
    location: "黄埔区/增城交界",
    coords: { lat: 23.085, lng: 113.562 },
    bestSeason: ["秋季", "冬季"],
    difficulty: "中等",
    targetSpecies: ["鲈鱼", "鳜鱼", "赤眼鳟"],
    description: "结构丰富，适合路亚爱好者，鱼类冲劲大。",
    weather: { temp: "20°C", condition: "阴", wind: "东北风 4级", pressure: "1018 hPa" },
    reports: [
      { date: "2026-03-19", fish: "鲈鱼", weight: "1.5kg", method: "路亚" },
      { date: "2026-03-22", fish: "鳜鱼", weight: "0.9kg", method: "路亚" }
    ]
  }
];
