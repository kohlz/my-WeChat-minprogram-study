// pages/index/index.js
Page({
  buttonToCamera: function(){
    wx.navigateTo({
      url: '../camera/camera',
    })
  },

  buttonToAudio: function(){
    wx.navigateTo({
      url: '../audio/audio',
    })
  },

  buttonToForm: function(){
    wx.navigateTo({
      url: '../form/form',
    })
  },

  buttonToIcon: function(){
    wx.navigateTo({
      url: '../icon/icon',
    })
  },

  buttonToImage: function(){
    wx.navigateTo({
      url: '../image/image',
    })
  },

  buttonToMovableArea: function(){
    wx.navigateTo({
      url: '../movable-area/movable-area',
    })
  },

  buttonToProgress: function(){
    wx.navigateTo({
      url: '../progress/progress',
    })
  },

  buttonToRichText: function(){
    wx.navigateTo({
      url: '../rich-text/rich-text',
    })
  },

  buttonToScrollView: function(){
    wx.navigateTo({
      url: '../scroll-view/scroll-view',
    })
  },

  buttonToSwiper: function(){
    wx.navigateTo({
      url: '../swiper/swiper',
    })
  },

  buttonToText: function(){
    wx.navigateTo({
      url: '../text/text',
    })
  },

  buttonToVideo: function(){
    wx.navigator({
      url: '../video/video',
    })
  }
})