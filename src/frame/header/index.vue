<template lang="pug">
  el-header.header( height='80px')
    el-row.header-container(align='middle' justify='space-between' type='flex')
      el-col.header-title Plumber
      el-col.header-login
        el-row(justify='end' type='flex')
            router-link.header-login-btn(to='/login') 已注册? 请先登录
</template>

<script>
export default {
  name: 'p-header'
}
</script>

<style lang="less" scoped>
  @import './style.less';
</style>
