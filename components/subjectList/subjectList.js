// components/subjectList/subjectList.js
Component({
  /**
   * 组件的属性列表
   */
  
  properties: {
    Sitem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    img:[],
    name:[],
    author:[]
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
  
    introduce:function(e){
      console.log(e)
      let img = e.target.dataset.img
      let author = e.target.dataset.author
      let name = e.target.dataset.name
      wx.navigateTo({
        url: '../goods/goods?img=' + img + '&author=' + author + '&name=' + name
      })
    }
  }
})
