import type { ImageSourcePropType } from "react-native";
import type { PlaceInfo } from "../types";
import { getImages } from "./get-image";

const imgList: ImageSourcePropType[] = getImages();

export const INITIAL_PLACE_INFO_LENGTH_ATOM = imgList.length;

//index・img・placeNameはList/Swiperで使用しているので、一旦は変更しないように。
//その他はまだ変更可能。
//PlaceInfo[]の一番最後から降順にPlaceInfoが表示されることに注意。
//スワイプ開始時に最後のPlaceInfoが表示されるが、画像は透けて表示されるので、次のPlaceInfoが透けて見える。なので、PlaceInfo[]の最後には、何も表示されない画像を入れておく。
export const INITIAL_PLACE_INFO_LIST_ATOM: PlaceInfo[] = [
  {
    index: 0,
    img: imgList[0],
    placeName: "お箸はそろそろ飽きたでしょ？",
    comment: "豪快に素手でたべるべし！",
    tags: ["東京", "魚介", "アメリカン", "スパイシー,", "ワイルド"],
    detail: {
      star: {
        ワイルド: 8,
        鮮度: 4,
        珍しさ: 4,
      },
      GoogleUrl: "https://maps.app.goo.gl/gU4Z1MvZHm8XszM3A",
    },
  },
  {
    index: 1,
    img: imgList[1],
    placeName: "アイスって焼いて食べるモノ？",
    comment: "焼けばなんでもおいしくなるはず！",
    tags: ["東京", "フレンチ", "老舗"],
    detail: {
      star: {
        店の歴史: 5,
        メニューの豊富さ: 4,
        落ち着く: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/WxDoLEnkxKGN1xbj6",
    },
  },
  {
    index: 2,
    img: imgList[2],
    placeName: "戦国時代にタイムスリップ",
    comment: "美味しものを食べて天下統一だ！",
    tags: ["東京", "日本食", "個室", "動乱の戦国時代"],
    detail: {
      star: {
        雰囲気: 9,
        落ち着く: 5,
        日本らしさ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/aQ9mAKCDfAJJwXgh6",
    },
  },
  {
    index: 3,
    img: imgList[3],
    placeName: "ロボットとカフェタイム",
    comment: "ロボット、ト、コーヒー。",
    tags: ["東京", "日本食", "ロボット"],
    detail: {
      star: {
        奇抜さ: 6,
        落ち着く: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/8hd2bexmbdwmUkV97",
    },
  },
  {
    index: 4,
    img: imgList[4],
    placeName: "お化け屋敷でお食事",
    comment: "うらめしや～",
    tags: ["東京", "日本食", "お化け"],
    detail: {
      star: {
        怖さ: 5,
        楽しさ: 5,
        奇抜さ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/M1qK4xkWcaRhpGyR8",
    },
  },
  {
    index: 5,
    img: imgList[5],
    placeName: "信じられないほどたくさんの怪獣がいるよ！",
    comment: "豪快に素手でたべるべし！",
    tags: ["東京", "日本食", "怪獣"],
    detail: {
      star: {
        落ち着かなさ: 5,
        アットホーム感: 5,
        懐かしさ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/Purm5Q5FXNUbK81G8",
    },
  },
  {
    index: 6,
    img: imgList[6],
    placeName: "ペンギンとごはん",
    comment: "豪快に素手でたべるべし！",
    tags: ["沖縄", "ダイニングBar", "動物"],
    detail: {
      star: {
        かわいさ: 5,
        ペンギン度: 4,
      },
      GoogleUrl: "https://maps.app.goo.gl/yXCMiWCYjwDmduin8",
    },
  },
  {
    index: 7,
    img: imgList[7],
    placeName: "冷蔵庫の中でお食事",
    comment: "冷蔵庫の中で飲むビールは格別だ。",
    tags: ["東京", "日本食", "寒いかも", "生肉LOVER"],
    detail: {
      star: {
        寒い感: 5,
        メニューの豊富さ: 4,
        新鮮さ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/L3YEGfHkiPsUUg7L6",
    },
  },
  {
    index: 8,
    img: imgList[8],
    placeName: "食べたいものは自分で捕獲",
    comment: "豪快に素手でたべるべし！",
    tags: ["東京", "魚介", "新鮮", "釣り"],
    detail: {
      star: {
        達成感: 7,
        鮮度: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/iBBfjXZsiTSBDkpj8",
    },
  },
  {
    index: 9,
    img: imgList[9],
    placeName: "忍者メシ",
    comment: "にんにん！",
    tags: ["東京", "日本食", "忍法"],
    detail: {
      star: {
        日本らしさ: 5,
        異世界感: 7,
        サプライズ: 5,
      },
      GoogleUrl: "https://maps.app.goo.gl/73qwSZaDaE3Vwemy7",
    },
  },
  {
    index: 10,
    img: imgList[10],
    placeName: "",
    comment: "",
    tags: [],
    detail: {
      star: {},
      GoogleUrl: "",
    },
  },
];
