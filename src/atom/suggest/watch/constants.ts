import type { SuggestData } from "../types";

export const INITIAL_WATCH_SUGGEST_DATA: SuggestData[] = [
    {
        index: 0,
        img: require('./assets/1.jpg'),
        placeName: 'ブルーマン東京',
        tags: ['#パフォーマンス', '#ジャパンツアー', '#奇想天外', '#口からマシュマロ'],
        detail: {
            star: {
                びしょ濡れ: 3,
                興奮: 3,
                青: 10,
            },
            GoogleUrl: 'https://g.co/kgs/iAAPxA',
            comment: '意味わからないのがいいよね。',
        },
    },
    {
        index: 1,
        img: require('./assets/2.jpg'),
        placeName: 'サマソニ',
        tags: ['#千葉', '#音楽フェスティバル', '#ロック', '#夏といえば'],
        detail: {
            star: {
                激アツ: 3,
                爆音: 3,
                夏: 10,
            },
            GoogleUrl: 'https://g.co/kgs/iDMYK4',
            comment: 'デカい夏に行かないで何するの？',
        },
    },
    {
        index: 2,
        img: require('./assets/3.jpg'),
        placeName: 'イケイケ乗り物',
        tags: ['#静岡', '#バイク', '#ミュージアム', '#無免許', '#スーパーカー'],
        detail: {
            star: {
                かっこいい: 3,
                ロマン: 2,
                メカ: 5,
            },
            GoogleUrl: 'https://g.co/kgs/4WJmtH',
            comment: 'あれもこれも乗り放題！',
        },
    },
    {
        index: 3,
        img: require('./assets/4.jpg'),
        placeName: '天空テラス',
        tags: ['#長野', '#リゾート', '#絶景', '#アルプス超え', '#最高'],
        detail: {
            star: {
                気持ちいい: 7,
                運: 5,
                美味しい: 5,
            },
            GoogleUrl: 'https://g.co/kgs/fPgzoL',
            comment: '天空テラスに行くしかないね。',
        },
    },
    {
        index: 4,
        img: require('./assets/5.jpg'),
        placeName: '日本のウユニ塩湖',
        tags: ['#香川', '#絶景', '#非日常', '#天空の鏡', '#死ぬまでに見たい夕陽'],
        detail: {
            star: {
                運: 5,
                感動: 7,
                映え: 10,
            },
            GoogleUrl: 'https://g.co/kgs/f3TmF2',
            comment: '日本でウユニ塩湖見れるのはお得すぎるよ。',
        },
    },
    {
        index: 5,
        img: require('./assets/6.jpg'),
        placeName: '青い池',
        tags: ['#北海道', '#絶景', '#神秘的', '#青', '#iPhone'],
        detail: {
            star: {
                映え: 5,
                運: 3,
                青: 7,
            },
            GoogleUrl: 'https://maps.app.goo.gl/kVcPnjhrtqXodVsw7?g_st=ic',
            comment: 'なんで青いんだろうね。',
        },
    },
    {
        index: 6,
        img: require('./assets/7.jpg'),
        placeName: 'まじでデカい美術館',
        tags: ['#徳島', '#美術館', '#デカい', '#米津', '#礼拝堂'],
        detail: {
            star: {
                デカい: 5,
                本物: 1,
                映え: 8,
            },
            GoogleUrl: 'https://g.co/kgs/Jv22RE',
            comment: '映えたいならココね。',
        },
    },
    {
        index: 7,
        img: require('./assets/8.jpg'),
        placeName: '幻の村',
        tags: ['#北海道', '#かまくら', '#氷', '#温泉', '#湖'],
        detail: {
            star: {
                キラキラ: 3,
                冬: 6,
                美: 7,
            },
            GoogleUrl: 'https://g.co/kgs/QeoFhz',
            comment: '冬しか行けないよ。',
        },
    },
    {
        index: 8,
        img: require('./assets/9.jpg'),
        placeName: '日本一危険な公園',
        tags: ['#岐阜', '#公園', '#奇妙', '#感覚バグ', '#不思議空間'],
        detail: {
            star: {
                危険: 10,
                やばい: 3,
                カラフル: 3,
            },
            GoogleUrl: 'https://g.co/kgs/QQsruD',
            comment: '行ってみないとわからないよ。',
        },
    },
    {
        index: 9,
        img: require('./assets/10.jpg'),
        placeName: '美術の島',
        tags: ['#香川', '#地中', '#銭湯', '#水玉かぼちゃ', '#ヘンテコ建築'],
        detail: {
            star: {
                アート: 7,
                かぼちゃ: 3,
                没入: 3,
            },
            GoogleUrl: 'https://g.co/kgs/69nxRN',
            comment: 'インスピレーションを受けにいくよ。',
        },
    },
];
export const INITIAL_WATCH_FAVORITE_DATA: SuggestData[] = [
    {
        index: 0,
        img: require('./assets/1.jpg'),
        placeName: 'ブルーマン東京',
        tags: ['#パフォーマンス', '#ジャパンツアー', '#奇想天外', '#口からマシュマロ'],
        detail: {
            star: {
                びしょ濡れ: 3,
                興奮: 3,
                青: 10,
            },
            GoogleUrl: 'https://g.co/kgs/iAAPxA',
            comment: '意味わからないのがいいよね。',
        },
    },
    {
        index: 1,
        img: require('./assets/2.jpg'),
        placeName: 'サマソニ',
        tags: ['#千葉', '#音楽フェスティバル', '#ロック', '#夏といえば'],
        detail: {
            star: {
                激アツ: 3,
                爆音: 3,
                夏: 10,
            },
            GoogleUrl: 'https://g.co/kgs/iDMYK4',
            comment: 'デカい夏に行かないで何するの？',
        },
    },
];
export const INITIAL_WATCH_DONE_DATA: SuggestData[] = [
    {
        index: 3,
        img: require('./assets/4.jpg'),
        placeName: '天空テラス',
        tags: ['#長野', '#リゾート', '#絶景', '#アルプス超え', '#最高'],
        detail: {
            star: {
                気持ちいい: 7,
                運: 5,
                美味しい: 5,
            },
            GoogleUrl: 'https://g.co/kgs/fPgzoL',
            comment: '天空テラスに行くしかないね。',
        },
    },
    {
        index: 4,
        img: require('./assets/5.jpg'),
        placeName: '日本のウユニ塩湖',
        tags: ['#香川', '#絶景', '#非日常', '#天空の鏡', '#死ぬまでに見たい夕陽'],
        detail: {
            star: {
                運: 5,
                感動: 7,
                映え: 10,
            },
            GoogleUrl: 'https://g.co/kgs/f3TmF2',
            comment: '日本でウユニ塩湖見れるのはお得すぎるよ。',
        },
    },
];
    