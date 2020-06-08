

Page({
  data:{
    Lbtimage:[],
    booklist:[
        {
          id:"1",
          text:"计算机类"
        
        },
        {
          id:"2",
          text:"科幻类"
        
        },
         {
          id:"3",
          text:"文艺类"
         
        },
        {
          id:"4",
          text:"生活类"
       
        },
        {
          id:"5",
          text:"文学类"
         
        },
        {
          id:"6",
          text:"科研类"
        }
    ]
  },
  
  onLoad:function(){
    
    wx.cloud.init({
      env : 'saobang-v83x8'
    })
    const db = wx.cloud.database()
    //查询并显示某一个数据
    // db.collection('LbtList').where({  
    //   _id : 'lbt_01'
    // }).get({
    //   success:res=>{
    //    console.log(res.data)
    //   }
    // })
    db.collection('LbtList').get({
      success:(res)=>{
        let image = Object(res.data)
        console.log(image)
        this.setData({
          Lbtimage: res.data
        })
      }
    })
  },
  serch:function(){

  },
  lunbo:function(e){
    let img = e.currentTarget.dataset.img
    let content = e.currentTarget.dataset.content
    let author = e.currentTarget.dataset.author
    let name = e.currentTarget.dataset.name
    console.log(e.currentTarget)
    wx.navigateTo({

      url: '../goods/goods?img=' + img + '&author=' + author + '&name=' + name + '&content=' + content
    })
    console.log(img)
  },
  handleTap:function(e){
    let classid = e.currentTarget.dataset.id 
    let classtext =e.currentTarget.dataset.class
    console.log(e)
    console.log(classid)
    wx.navigateTo({
      url: '../classes/classes?class=' + classtext + '&id=' + classid
    })
    console.log(e.currentTarget)
  }
})
