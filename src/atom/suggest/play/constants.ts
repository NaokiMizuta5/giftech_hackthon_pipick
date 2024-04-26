import type { SuggestData } from "../types";

export const INITIAL_PLAY_SUGGEST_DATA: SuggestData[] = [
    {
        index: 1,
        img: require('./assets/1.jpg'),
        placeName: 'ペイントバトル',
        tags: ['#北海道', '#リアルスプ◯トゥーン', '#ハラハラドキドキ', '#アメリカスポーツ', '#旗取った人が勝ち'],
        detail: {
        star: {
            'ハラハラ': 4,
            '頭脳戦': 3,
            'チームワーク': 5,
        },
        GoogleUrl: 'https://activityjapan.com/publish/feature/2862',
        comment: '時間内にフラッグを所定の場所に持って行ったら勝ち！',
        },
    },
    {
        index: 2,
        img: require('./assets/2.jpg'),
        placeName: '目に見えるものだけが全てじゃない',
        tags: ['#東京', '#怖', '#もはや目は必要ない', '#どこに連れてかれるの？', '#ハラハラドキドキ'],
        detail: {
        star: {
            '真っ暗': 5,
        },
        GoogleUrl: 'https://did.dialogue.or.jp/',
        comment: 'だんだん感覚が鋭くなっていくんだよ〜',
        },
    },
    {
        index: 3,
        img: require('./assets/3.jpg'),
        placeName: '"それ"が付いたらオワリ',
        tags: ['#theEND', '#どこまでできるか', '#IQ1以上', '#攻めが肝心'],
        detail: {
        star: {
            '緊張感': 0,
            'ホラー': 0,
            'ドキドキ': 0,
        },
        GoogleUrl: 'https://ja.wikipedia.org/wiki/%E3%81%97%E3%82%8A%E3%81%A8%E3%82%8A',
        comment: 'どこまでできるか、、見ものだね、、',
        },
    },
    {
        index: 4,
        img: require('./assets/4.jpg'),
        placeName: '水のうえを駆け回る',
        tags: ['#滋賀', '#ハムスターかな？', '#全身筋肉痛ww', '#アクティビティ', '#浮遊感がおもろい', '#駐車場有'],
        detail: {
        star: {
            '体力': 5,
            '元気': 5,
        },
        GoogleUrl: 'https://www.asoview.com/base/153749/',
        comment: '水上の浮遊感って新しい感覚！',
        },
    },
    {
        index: 5,
        img: require('./assets/5.jpg'),
        placeName: '青い温泉',
        tags: ['#アイスランド', '#癒し', '#ブルーラグーン', '#事前予約', '#ちょっとぬるめでちょうどいい'],
        detail: {
        star: {
            '映え': 5,
        },
        GoogleUrl: 'https://www.veltra.com/jp/europe/iceland/a/177706',
        comment: 'ドリンクを飲みながら優雅に入れる温泉！最高〜',
        },
    },
    {
        index: 6,
        img: require('./assets/6.jpg'),
        placeName: '아이돌',
        tags: ['#韓国', '#かわいい', '#まるで別人', '#他撮でも盛れる', '#♡♡♡', '#韓国アイドルメイク', '#🇰🇷', '#要予約'],
        detail: {
        star: {},
        GoogleUrl: 'https://map.naver.com/p/entry/place/1808492360?placePath=%2Fhome&c=15.00,0,0,0,dh https://koreaddicted.jp/21886',
        comment: 'あのTWICEのメイクアップアーティスト"ウォンジョンヨ"先生がいるみたい！',
        },
    },
    {
        index: 7,
        img: require('./assets/7.jpg'),
        placeName: 'オトナマキ',
        tags: ['#東京', '#健康法', '#SNSで話題になった', '#ミイラマキもいける', '#要予約'],
        detail: {
        star: {},
        GoogleUrl: 'https://suitengoo.com/811otonamaki.html',
        comment: 'お母さんのお腹の中に戻った気持ちになれるらしい',
        },
    },
    {
        index: 8,
        img: require('./assets/8.jpg'),
        placeName: '己に眠る野獣を目覚めさせる',
        tags: ['#東京', '#ストレス発散', '#家電も壊せる', '#新感覚', '#エンターテイメント'],
        detail: {
        star: {},
        GoogleUrl: 'https://www.asoview.com/item/activity/pln3000032016/',
        comment: 'なんでもかんでも破壊しちゃえ！！',
        },
    },
    {
        index: 9,
        img: require('./assets/9.jpg'),
        placeName: 'ゴム跳びLev.100',
        tags: ['#東京', '#バランス感覚', '#5cmのロープでアクロバティック', '#体幹', '#医療の分野でも注目されてるらしい'],
        detail: {
        star: {},
        GoogleUrl: 'https://www.westrock-climbing.com/slackline/',
        comment: '簡単だからこそ難しい...',
        },
    },
    {
        index: 10,
        img: require('./assets/10.jpg'),
        placeName: '謎解き！脱出ゲーム！',
        tags: ['#東京', '#謎解き', '#やっぱり王道なのはココ', '#キャラコラボ', '#大人数'],
        detail: {
        star: {},
        GoogleUrl: 'https://realdgame.jp/',
        comment: 'いろんな種類があるから、自分に合った謎解きが見つかるよ',
        },
    },
    {
        index: 11,
        img: require('./assets/11.jpg'),
        placeName: 'スダテリョウ',
        tags: ['#東京', '#簀立', '#謎の棒がたくさん', '#新鮮', '#これはここでしか味わえない'],
        detail: {
        star: {},
        GoogleUrl: 'https://sudate.satoumi.com/',
        comment: '取った魚をその場で捌いて食べられる',
        },
    },
    {
        index: 12,
        img: require('./assets/12.jpg'),
        placeName: '流れに身を任せましょう',
        tags: ['#京都', '#スリル満点', '#日本最古の川下り', '#涼味', '#奇岩', '#怪石'],
        detail: {
        star: {},
        GoogleUrl: 'https://ja.kyoto.travel/event/single.php?event_id=4450',
        comment: '船頭さんのおもしろトークも楽しめるよ',
        },
    },
    {
        index: 13,
        img: require('./assets/13.jpg'),
        placeName: '無人島体験',
        tags: ['#長崎', '#火おこし', '#サバイバル', '#魚釣り', '#イカダで脱出', '#自給自足生活', '#要予約'],
        detail: {
        star: {},
        GoogleUrl: 'https://www.ikikankou.com/spot/10376',
        comment: 'いくつかプランがあって数時間でサクッと楽しめるのもあるよ！',
        },
    },
    {
        index: 14,
        img: require('./assets/14.jpg'),
        placeName: 'うんこっていいたい',
        tags: ['#うんこ', '#💩', '#パニック', '#MAXうんこカワイイ', '#縛りプレイ'],
        detail: {
        star: {},
        GoogleUrl: 'https://www.amazon.co.jp/%E3%81%86%E3%82%93%E3%81%93%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%A0-%E3%81%86%E3%82%93%E3%81%93%E3%81%A3%E3%81%A6%E3%81%84%E3%81%84%E3%81%9F%E3%81%84/dp/B0C47B7SGM',
        comment: '...言いたいですか？ うんこ💩💩💩💩💩💩💩💩💩💩💩',
        },
    },
    {
        index: 15,
        img: require('./assets/15.jpg'),
        placeName: '世界一怖いアスレチック',
        tags: ['#神奈川', '#マッスルモンスター', '#空中浮遊', '#これは死んだw', '#絶叫系アスレチック'],
        detail: {
        star: {},
        GoogleUrl: 'https://www.sagamiko-resort.jp/',
        comment: '92種類ものアトラクションが楽しめる！',
        },
    },
    {
        index: 16,
        img: require('./assets/16.jpg'),
        placeName: '自転車の国',
        tags: ['#静岡', '#大量の自転車', '#自転車型の迷路', '#世界の自転車が集まる場', '#穴場スポット'],
        detail: {
        star: {},
        GoogleUrl: 'https://iko-yo.net/facilities/2294',
        comment: '世界のいろんな自転車が試せるみたい〜',
        },
    },
    {
        index: 17,
        img: require('./assets/17.jpg'),
        placeName: 'タロット占い3D',
        tags: ['#東京', '#占い', '#新感覚', '#VR', '#選んだカードのストーリを楽しめる'],
        detail: {
        star: {},
        GoogleUrl: 'https://www.tyffonium.com/attraction/tarotvr.html',
        comment: 'あなたの運勢も占ってみよう？',
        },
    },
    {
        index: 18,
        img: require('./assets/18.jpg'),
        placeName: '和心村の大自然でで猫まみれ',
        tags: ['#ぬこさま', '#和心村', '#大自然', '#グランピング'],
        detail: {
        star: {},
        GoogleUrl: 'https://www.washinmura.jp/',
        comment: '',
        },
    },
];
export const INITIAL_PLAY_FAVORITE_DATA: SuggestData[] = [
    {
        index: 1,
        img: require('./assets/1.jpg'),
        placeName: 'ペイントバトル',
        tags: ['#北海道', '#リアルスプ◯トゥーン', '#ハラハラドキドキ', '#アメリカスポーツ', '#旗取った人が勝ち'],
        detail: {
        star: {
            'ハラハラ': 4,
            '頭脳戦': 3,
            'チームワーク': 5,
        },
        GoogleUrl: 'https://activityjapan.com/publish/feature/2862',
        comment: '時間内にフラッグを所定の場所に持って行ったら勝ち！',
        },
    },
    {
        index: 2,
        img: require('./assets/2.jpg'),
        placeName: '目に見えるものだけが全てじゃない',
        tags: ['#東京', '#怖', '#もはや目は必要ない', '#どこに連れてかれるの？', '#ハラハラドキドキ'],
        detail: {
        star: {
            '真っ暗': 5,
        },
        GoogleUrl: 'https://did.dialogue.or.jp/',
        comment: 'だんだん感覚が鋭くなっていくんだよ〜',
        },
    },
];
export const INITIAL_PLAY_DONE_DATA: SuggestData[] = [
    {
        index: 3,
        img: require('./assets/3.jpg'),
        placeName: '"それ"が付いたらオワリ',
        tags: ['#theEND', '#どこまでできるか', '#IQ1以上', '#攻めが肝心'],
        detail: {
        star: {
            '緊張感': 0,
            'ホラー': 0,
            'ドキドキ': 0,
        },
        GoogleUrl: 'https://ja.wikipedia.org/wiki/%E3%81%97%E3%82%8A%E3%81%A8%E3%82%8A',
        comment: 'どこまでできるか、、見ものだね、、',
        },
    },
    {
        index: 4,
        img: require('./assets/4.jpg'),
        placeName: '水のうえを駆け回る',
        tags: ['#滋賀', '#ハムスターかな？', '#全身筋肉痛ww', '#アクティビティ', '#浮遊感がおもろい', '#駐車場有'],
        detail: {
        star: {
            '体力': 5,
            '元気': 5,
        },
        GoogleUrl: 'https://www.asoview.com/base/153749/',
        comment: '水上の浮遊感って新しい感覚！',
        },
    },
];

