<template>
    <div class="hot-nav">
        <!-- 滚动区域 -->
        <div class="hot-nav-content">
            <div class="nav-content-inner">
                <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon02.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon03.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon04.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon05.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon06.gif" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon07.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon08.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon09.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon10.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon11.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon12.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon13.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon14.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon15.png" alt="">
                    <span>限时秒杀</span>
                </a>
                 <a href="" class="inner-item">
                    <img src="../../imgs/nav/nav_icon16.png" alt="">
                    <span>限时秒杀</span>
                </a>
            </div>
        </div>
        <!-- 进度条 -->
        <div class="hot-nav-bottom">
            <div class="hot-nav-bottom-inner" :style="innerBarStyle">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HotNav",
        data() {
            return {
                // 屏幕宽度
                screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                // 滚动条内容长度
                scrollContentW: 720,
                // 滚动条背景长度
                gbBarW: 100,
                // 滚动条长度
                barXWidth: 0
            }
        },
        computed:{
            innerBarStyle(){
                return {
                    width: `${this.barXWidth}px`
                }
            }
        },
        mounted(){
            this.getBottomBarWidth()
        },
        methods: {
            getBottomBarWidth(){
                this.barXWidth = this.gbBarW * (this.screenW/this.scrollContentW)
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
   .hot-nav
        width 100%
        height 180px
        background-color #fff
        padding-bottom 10px
        position relative
        .hot-nav-content
            width 100%
            overflow-x scroll
            .nav-content-inner
                width 720px
                height 180px
                display flex
                flex-wrap wrap
                .inner-item
                    width 90px
                    height 90px
                    display flex
                    flex-direction column
                    justify-content  center
                    align-items center
                    font-size 14px
                    color #666
                    img 
                        width 40%
                        margin-bottom 5px
        .hot-nav-content::-webkit-scrollbar
            display none
        .hot-nav-bottom
            height 2px
            width 100px
            background-color  #ccc
            position absolute
            left 50%
            margin-left -50px
            bottom 8px
            .hot-nav-bottom-inner
                position absolute
                left 0
                height 100%
                background-color orangered
                width 0
</style>
