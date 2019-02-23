<template>
    <div class="bottom-tab">
       <span class="tab-item" @click="switchTo('/home')">
           <img :src="$route.path.includes('/home')? tabBarImagesAll[0].selected : tabBarImagesAll[0].normal" alt="">
           <span :class="{on: $route.path.includes('/home')}">首页</span>
       </span>
        <span class="tab-item" @click="switchTo('/recommend')">
           <img :src="$route.path.includes('/recommend')? tabBarImagesAll[1].selected : tabBarImagesAll[1].normal" alt="">
           <span :class="{on: $route.path.includes('/recommend')}">推荐</span>
       </span>
        <span class="tab-item" @click="switchTo('/search')">
           <img :src="$route.path.includes('/search')? tabBarImagesAll[2].selected : tabBarImagesAll[2].normal" alt="">
           <span :class="{on: $route.path.includes('/search')}">搜索</span>
       </span>
        <span class="tab-item" @click="switchTo('/chat')">
           <img :src="$route.path.includes('/chat')? tabBarImagesAll[3].selected : tabBarImagesAll[3].normal" alt="">
           <span :class="{on: $route.path.includes('/chat')}">聊天</span>
       </span>
        <span class="tab-item" @click="switchTo('/me')">
           <img :src="$route.path.includes('/me')? tabBarImagesAll[4].selected : tabBarImagesAll[4].normal" alt="">
           <span :class="{on: $route.path.includes('/me')}">我的</span>
       </span>
    </div>
</template>
<script>
export default {
    name: "TabBar",
    data() {
        return {
            tabBarImagesAll:[
                {normal: require('../../../static/img/icon_home.png'), selected: require('../../../static/img/icon_home_selected.png')},
                {normal: require('../../../static/img/icon_intro.png'), selected: require('../../../static/img/icon_intro_selected.png')},
                {normal: require('../../../static/img/icon_search.png'), selected: require('../../../static/img/icon_search_selected.png')},
                {normal: require('../../../static/img/icon_chat.png'), selected: require('../../../static/img/icon_chat_selected.png')},
                {normal: require('../../../static/img/icon_mine.png'), selected: require('../../../static/img/icon_mine_selected.png')}
            ]
        }
    },
    methods: {
        switchTo(path){
            // console.log(this.$router)
            this.$router.replace(path)
        }
    }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .bottom-tab
        width 100%
        height 50px
        background-color #ffffff
        position fixed
        left 0
        bottom 0
        display flex
        z-index 999
        .tab-item
            display flex
            flex 1
            flex-direction column
            align-items center
            justify-content center
            font-size 14
            color #666
            img
                width 35%
                margin-bottom 2px
            .on
                color red
</style>