import {
  createStore
} from 'vuex'
import {getMusicLyric} from "@/request/api/item"
import {getPhoneLogin} from "@/request/api/home"
export default createStore({
  state: {
    playList: [{ //播放列表
      al: {
        id: 89039055,
        name: "雨爱抖音版",
        pic: 109951164966568500,
        picUrl: "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
        pic_str: "109951164966568495"
      },
      id: 1446137141,
      name: "雨爱（抖音版）",
      ar:[{name: "灏灏灏仔"}]
    }],
    playListIndex:0,//默认下标为零
    isbtnShow:true,//暂停按钮的显示
    detailShow:false,//歌曲详情页的显示
    lyricList:{},//歌词
    lyricTranslateList:{},//歌词翻译
    currentTime:0,//当前时间
    duration:0,//歌曲总时长
    isLogin:false,//是否登录
    isFooterMusic:true,//是否显示底部组件
    token:"",//账号token
  },
  getters: {},
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value
    },
    updatePlayList:function(state,value){
      state.playList=value
    },
    updatePlayListIndex:function(state,value){
      state.playListIndex=value
    },
    updateDetailShow:function(state){
      state.detailShow=!state.detailShow
    },
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    updateCurrentTime:function(state,value){
      state.currentTime=value
    },
    updateDuration:function(state,value){
      state.duration=value
    },
    pushPlayList:function(state,value){
      state.playList.push(value)
    },
    updateIsLogin:function(state,value){
      state.isLogin=true
    },
    updateToken:function(state,value){
      state.token=value,
      localStorage.setItem('token',state.token)
    },
    updateLyricTranslateList:function(state,value){
      state.lyricTranslateList=value
    },
  },
  actions: {
    getLyric:async function(context,value){
      let res=await getMusicLyric(value)
      // console.log('&&&&',res)
      context.commit("updateLyricList",res.data.lrc)//提交更新的歌词数据
      context.commit('updateLyricTranslateList',res.data.tlyric)
    },
    getLogin:async function(context,value){
      let res=await getPhoneLogin(value)
      return res
    }
  },
  modules: {}
})