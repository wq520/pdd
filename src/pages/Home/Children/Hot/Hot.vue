<template>
    <div class="hot">
        <!--1.轮播图-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../imgs/rowing/s1.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s2.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s3.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s4.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s5.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s6.png" alt="" width="100%"></div>
                <div class="swiper-slide"><img src="../../imgs/rowing/s7.png" alt="" width="100%"></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 中间导航 -->
        <HotNav></HotNav>
    </div>
</template>

<script>
    import HotNav from './HotNav.vue'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    export default {
        name: "Hot",
        mounted(){
            // 创建swiper实例
            new Swiper('.swiper-container', {
                autoplay: true,//等同于以下设置
                loop: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                }
            })
        },
        components: {
            HotNav
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .hot
      width 100%
      height 100%
      background #f5f5f5
      padding-top 46px
</style>
