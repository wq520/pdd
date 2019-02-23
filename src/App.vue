<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view/>
  </div>
</template>

<script>
import TabBar from '../src/components/TabBar/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #app
    width 100%;
    height 100%;
    background-color #f5f5f5;
</style>