// page/home/home.js
Page({

  /**   * 页面的初始数据   */
  data: {name:'coderwht',
         age:'10',
         count:0,
         student:[
           {id:110,name:'qw',age:10},
           {id:111,name:'qw',age:10},
           {id:112,name:'qw',age:10},
           {id:113,name:'qw',age:10},
           {id:114,name:'qw',age:10}
           ]                    
  }, 
  jiafa() {
 //   this.data.count +=1
 //   console.log('按钮发生点击')
 //↑界面不会刷新
 this.setData({
   count:this.data.count + 1
 }) 
  },

  jianfa(){
    this.setData({
    count:this.data.count - 1   
    })
  },

  /**   * 生命周期函数--监听页面加载   */
  onLoad: function (options) {

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