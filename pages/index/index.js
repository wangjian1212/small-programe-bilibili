Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航数据
    navList:[
      { text: "科技", id: 1 },
      { text: "鬼畜", id: 2 },
      { text: "动画", id: 3 },
      { text: "国产", id: 4 },
      { text: "欧美", id: 5 },
      { text: "日本", id: 6 },
      { text: "经济", id: 7 },
      { text: "鬼畜", id: 8 },
    ],
    //被点击nav索引
    currentNav:0,
    //轮播图数据
    swiperList:[
      { link:'1',
        imgSrc: 'https://i0.hdslb.com/bfs/archive/bf2aa1f18ccae9ecae4cb666417f75da951ee2f4.jpg@480w_300h.webp'
      }, 
      {
        link:'2',
        imgSrc: 'https://i0.hdslb.com/bfs/archive/bf2aa1f18ccae9ecae4cb666417f75da951ee2f4.jpg@480w_300h.webp'
      }, 
      {
        link:'3',
        imgSrc: 'https://i0.hdslb.com/bfs/archive/bf2aa1f18ccae9ecae4cb666417f75da951ee2f4.jpg@480w_300h.webp'
      }, 
    ],
    //视频列表数据
    videoList:[],
  },
  /**
   * nav-item 点击事件函数
   */
  tapNav(e){
    console.log(999)
    this.setData({
      currentNav: e.target.dataset.index
    })
  },
  /**
   * 获取标签
   */
  getNavList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList',
      success(res) {
        // 由于这个接口返回数组太短，不足以拖动，添加两个实现下效果
        var arr = res.data.data.navList
        arr[5] = { text: "科技", id: 5 };
        arr[6] = { text: "鬼畜", id: 6 };
        // 判断请求成功
        if (res.data.code === 0) {
          that.setData({
            navList: arr
          })
        }
      }
    })    
  },

  //获取轮播图
  getSwiperList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res) {
        //判断请求成功
        console.log(JSON.stringify(res))
        console.log(1111111111111111111)
        if (res.data.code === 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })

  },
   //获取视频
   getVideoList() {
    let that = this;
    //接口获取不稳定
    // wx.request({
    //   url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
    //   success(res) {
    //     //判断请求成功
    //     if (res.data.code === 0) {
    //       that.setData({
    //         videoList: res.data.data.videosList
    //       })
    //     }
    //   }
    // })
    var res = require('../../utils/vedio_info')
    that.setData({
      videoList: res.videos.data.videosList
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取首页导航数据
    this.getNavList()
    //获取轮播图数据
    this.getSwiperList()
    //获取视频列表
    this.getVideoList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})