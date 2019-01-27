<template lang="pug">
  el-container(direction='vertical' class='frame')
    p-header
    p-main
    p-footer
</template>

<script>
import Header from './header'
import Footer from './footer'
import Main from './main'

export default {
  name: 'index',
  components: {
    'p-header': Header,
    'p-main': Main,
    'p-footer': Footer
  }
}
</script>

<style lang="less">
  @import './style.less';
</style>
