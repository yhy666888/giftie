
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '520送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '这是第一行文案', },
    { key: 's', wording: '这是第二行文案', },
    { key: 'd', wording: '然后，这里是第三行文案', },
  ],
  // 最终解释权归属人
  owner: 'XXX',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
    { key: 'q', name: '樱花美白面膜', alias: '樱花面膜', image: '/images/01.png', description: '把可爱的春天提前送给你' },
    { key: 'w', name: '腾讯视频一个季度VIP', alias: 'VIP', image: '/images/2.png', description: '忙着追剧，也要记得想我' },
    { key: 'e', name: '心心相吸手链一对', alias: '手链套装', image: '/images/03.png', description: '将你我系在一起' },
    { key: 'r', name: '520红包', alias: '520', image: '/images/6.png', description: '“想给你唱一百首情歌”' },
    { key: 't', name: '朝朝暮暮香薰', alias: '香薰', image: '/images/05.png', description: '「日月星河，朝朝暮暮」' },
    { key: 'y', name: '旋转木马香水', alias: '木马香水', image: '/images/06.png', description: '“是梦幻，是童话，是无需长大”' },
    { key: 'u', name: '指定口红礼品', alias: '口红', image: '/images/1.png', description: '“口红！买！”' },
    { key: 'i', name: '故宫美妆套装', alias: '故宫美妆', image: '/images/08.png', description: '「春与美妆，皆动人」' },
];
