// pages/classes/classes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:[],
    class:[],
    list:[],
    subjectList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
    id : options.id,
    class: options.class
    });
    let key = options.id
    if(key=="1"){
      console.log("hah")
      wx.request({
        url: 'http://product.china-pub.com/log/RecommendHandler.ashx', //仅为示例，并非真实的接口地址
        data: {
          'bookId': '8061917'
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res)=> {
          console.log(res.data)
          this.setData({
            subjectList: res.data
          })
        }
      })
    }
    if(key=="2"){
      wx.request({
        url: '', //仅为示例，并非真实的接口地址
        data: {
          
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res)=> {
          console.log(res.data)
          this.setData({
            subjectList: res.data
          })
        }
      })
    }
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