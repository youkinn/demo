export default {
  // mock数据的接口路径
  test: {
    getSwiperList: '/api/getSwiperList',
    getUserInfo: '/api/getDemoData',
    getNewsList: '/api/getNewsList',
    getNewsDetail: '/api/getNewsDetail',
    getGameList: '/api/getGameList',
  },
  // 正式库接口
  production: {
    doLogin: '/User/Login/login',                               // 登陆
    getSwiperList: '/Game/Index/get_banner_ad',                 // 轮播列表
    getGameList: '/Game/Index/get_game_list',                   // 游戏列表
    getNewsList: '/News/Index/get_news_list',                   // 资讯列表
    getNewsDetail: '/News/Index/get_news_info',                 // 资讯详情
    getNewsRelated: '/News/Index/get_unite_news',                // 相关资讯
    getNewsCommentList: '/News/NewsComment/get_comment_list',   // 资讯评论列表
  }
};