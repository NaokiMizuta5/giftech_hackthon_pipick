import type { SuggestData } from "../types";

export const INITIAL_EAT_SUGGEST_DATA: SuggestData[] = [
  {
    index: 0,
    img: require("~/assets/images/0.png"),
    placeName: "お箸はそろそろ飽きたでしょ？",
    tags: ["東京", "魚介", "アメリカン", "スパイシー,", "ワイルド"],
    detail: {
      star: {
        ワイルド: 8,
        鮮度: 4,
        珍しさ: 4,
      },
      GoogleUrl: "https://maps.app.goo.gl/gU4Z1MvZHm8XszM3A",
      comment: "豪快に素手でたべるべし！",
    },
  },
  {
    index: 1,
    img: require("~/assets/images/1.png"),
    placeName: "アイスって焼いて食べるモノ？",
    tags: ["東京", "フレンチ", "老舗"],
    detail: {
      star: {
        店の歴史: 5,
        メニューの豊富さ: 4,
        落ち着く: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/WxDoLEnkxKGN1xbj6",
      comment: "焼けばなんでもおいしくなるはず！",
    },
  },
  {
    index: 2,
    img: require("~/assets/images/0.png"),
    placeName: "戦国時代にタイムスリップ",
    tags: ["東京", "日本食", "個室", "動乱の戦国時代"],
    detail: {
      star: {
        雰囲気: 9,
        落ち着く: 5,
        日本らしさ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/aQ9mAKCDfAJJwXgh6",
      comment: "美味しものを食べて天下統一だ！",
    },
  },
  {
    index: 3,
    img: require("~/assets/images/1.png"),
    placeName: "ロボットとカフェタイム",
    tags: ["東京", "日本食", "ロボット"],
    detail: {
      star: {
        奇抜さ: 6,
        落ち着く: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/8hd2bexmbdwmUkV97",
      comment: "ロボット、ト、コーヒー。",
    },
  },
  {
    index: 4,
    img: require("~/assets/images/0.png"),
    placeName: "お化け屋敷でお食事",
    tags: ["東京", "日本食", "お化け"],
    detail: {
      star: {
        怖さ: 5,
        楽しさ: 5,
        奇抜さ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/M1qK4xkWcaRhpGyR8",
      comment: "うらめしや～",
    },
  },
  {
    index: 5,
    img: require("~/assets/images/1.png"),
    placeName: "信じられないほどたくさんの怪獣がいるよ！",
    tags: ["東京", "日本食", "怪獣"],
    detail: {
      star: {
        落ち着かなさ: 5,
        アットホーム感: 5,
        懐かしさ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/Purm5Q5FXNUbK81G8",
      comment: "豪快に素手でたべるべし！",
    },
  },
  {
    index: 6,
    img: require("~/assets/images/0.png"),
    placeName: "ペンギンとごはん",
    tags: ["沖縄", "ダイニングBar", "動物"],
    detail: {
      star: {
        かわいさ: 5,
        ペンギン度: 4,
      },
      GoogleUrl: "https://maps.app.goo.gl/yXCMiWCYjwDmduin8",
      comment: "豪快に素手でたべるべし！",
    },
  },
  {
    index: 7,
    img: require("~/assets/images/1.png"),
    placeName: "冷蔵庫の中でお食事",
    tags: ["東京", "日本食", "寒いかも", "生肉LOVER"],
    detail: {
      star: {
        寒い感: 5,
        メニューの豊富さ: 4,
        新鮮さ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/L3YEGfHkiPsUUg7L6",
      comment: "冷蔵庫の中で飲むビールは格別だ。",
    },
  },
  {
    index: 8,
    img: require("~/assets/images/0.png"),
    placeName: "食べたいものは自分で捕獲",
    tags: ["東京", "魚介", "新鮮", "釣り"],
    detail: {
      star: {
        達成感: 7,
        鮮度: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/iBBfjXZsiTSBDkpj8",
      comment: "豪快に素手でたべるべし！",
    },
  },
  {
    index: 9,
    img: require("~/assets/images/1.png"),
    placeName: "忍者メシ",
    tags: ["東京", "日本食", "忍法"],
    detail: {
      star: {
        日本らしさ: 5,
        異世界感: 7,
        サプライズ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/73qwSZaDaE3Vwemy7",
      comment: "にんにん！",
    },
  },
  {
    index: 10,
    img: require("~/assets/images/black.jpeg"),
    placeName: "",
    tags: [],
    detail: {
      star: {},
      GoogleUrl: "",
      comment: "",
    },
  },
];

export const INITIAL_EAT_FAVORITE_DATA: SuggestData[] = [
  {
    index: 0,
    img: require("~/assets/images/0.png"),
    placeName: "お箸はそろそろ飽きたでしょ？",
    tags: ["東京", "魚介", "アメリカン", "スパイシー,", "ワイルド"],
    detail: {
      star: {
        ワイルド: 8,
        鮮度: 4,
        珍しさ: 4,
      },
      GoogleUrl: "https://maps.app.goo.gl/gU4Z1MvZHm8XszM3A",
      comment: "豪快に素手でたべるべし！",
    },
  },
  {
    index: 1,
    img: require("~/assets/images/1.png"),
    placeName: "アイスって焼いて食べるモノ？",
    tags: ["東京", "フレンチ", "老舗"],
    detail: {
      star: {
        店の歴史: 5,
        メニューの豊富さ: 4,
        落ち着く: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/WxDoLEnkxKGN1xbj6",
      comment: "焼けばなんでもおいしくなるはず！",
    },
  },
];

export const INITIAL_EAT_DONE_DATA: SuggestData[] = [
  {
    index: 2,
    img: require("~/assets/images/0.png"),
    placeName: "戦国時代にタイムスリップ",
    tags: ["東京", "日本食", "個室", "動乱の戦国時代"],
    detail: {
      star: {
        雰囲気: 9,
        落ち着く: 5,
        日本らしさ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/aQ9mAKCDfAJJwXgh6",
      comment: "美味しものを食べて天下統一だ！",
    },
  },
  {
    index: 3,
    img: require("~/assets/images/1.png"),
    placeName: "ロボットとカフェタイム",
    tags: ["東京", "日本食", "ロボット"],
    detail: {
      star: {
        奇抜さ: 6,
        落ち着く: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/8hd2bexmbdwmUkV97",
      comment: "ロボット、ト、コーヒー。",
    },
  },
];
