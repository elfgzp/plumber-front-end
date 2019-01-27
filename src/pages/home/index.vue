<style lang="less">
  @import './style';
</style>

<template lang="pug">
  el-row.home(type='flex' align='middle')
    el-col.intro(span=9 push=3)
      el-row.intro__title Plumber
      el-row.intro__breif 一个采用 Vue & Golang 开发的看板项目管理工具
    el-col.signup(span=8 push=4)
      el-row.signup__title(justify='center' type='flex') 开始使用
      el-row(justify='center' type='flex')
        el-input.signup_name(placeholder='请输入您的姓名' v-model='name')
      el-row(justify='center' type='flex')
        el-input.signup__email(placeholder='请输入您的邮箱' v-model='email')
      el-row(justify='center' type='flex')
        el-input.signup__password(placeholder='请输入密码(至少包含6位字符)' v-model='password' type='password')
      el-row(justify='center' type='flex')
        el-input.signup__password(placeholder='请再次输入密码' v-model='passwordAgain' type='password')
      el-row(justify='center' type='flex')
        el-button.signup__btn 立即注册
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordAgain: ''
    }
  }
}
</script>
