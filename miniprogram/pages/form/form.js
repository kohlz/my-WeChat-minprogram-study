// miniprogram/pages/form/form.js
Page({
  onShareAppMessage() {
    return {
      title: 'radio',
      path: 'page/component/pages/radio/radio'
    }
  },

  data: {
    items: [
      {value: 'USA', name: '美国'},
      {value: 'CHN', name: '中国', checked: 'true'},
      {value: 'BRA', name: '巴西'},
      {value: 'JPN', name: '日本'},
      {value: 'ENG', name: '英国'},
      {value: 'FRA', name: '法国'},
    ],

    region: ['上海市', '上海市', '杨浦区'],

    date: '2016-09-01',
    time: '12:01',
    
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }
    
    this.setData({
      items
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  bindDateChange: function(e){
    console.log("hello world")
    this.setData({
      date: e.detail.value
    })
  },

  bindTimeChange: function(e){
    console.log("hello world time")
    this.setData({
      time: e.detail.value
    })
  }
})