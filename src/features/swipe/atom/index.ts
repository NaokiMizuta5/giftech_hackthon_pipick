import { getImages } from "../utils/get-image";

type PlaceInfo = Record<string, string>;

export const useSwipeAtom = () => {
  //ダミーデータは、画像はgetImages()で取得、それ以外のタグ情報はPlaceInfoで渡している。
  //YOLPとの繋ぎ込みの際には、placeInfosみたいな配列で渡すと良いかも。
  const data = getImages();
  const placeInfo: PlaceInfo = {
    placeName: "三鷹の森ジブリ美術館",
    genre: "美術館",
    prefecture: "東京都",
    place: "井の頭公園",
    station: "吉祥寺駅",
    distance: "1.5km",
  };

  return {
    data, //画像データ
    dataLength: data.length, //dataの長さ
    placeInfo,
  };
};
