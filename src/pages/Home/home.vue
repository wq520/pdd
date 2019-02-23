<template>
    <div class="home">
       <ly-tab class="fix" v-model="selectedId" :items="items" :options="options" @change="hanleChange"></ly-tab>
       <router-view/>
    </div>
</template>
<script>

export default {
    name: "Home",
    data () {
        return {
            selectedId: 0, // 选中的id
            items: [
                {label: '热门'},
                {label: '服饰'},
                {label: '鞋包'},
                {label: '母婴'},
                {label: '百货'},
                {label: '食品'},
                {label: '内衣'},
                {label: '男装'},
                {label: '电器'}
            ],
            options: {
                activeColor: '#e9232c' //设置选中的颜色
            },
            subRouteUrl: [
                '/home/hot', '/home/dress', '/home/box', '/home/mbaby', '/home/general', '/home/food', '/home/shirt', '/home/man', '/home/ele'
            ]
        }
    },
    methods: {
        hanleChange(item, index){
            this.$router.replace(this.subRouteUrl[index])
        }
    }
}
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
    .home
        background #f5f5f5;
        height 100%
        .fix
            position fixed
            left 0
            top 0
            z-index 998
</style>