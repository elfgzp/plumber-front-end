<template>
    <a-layout id="home">
        <a-layout-header class="header">
            <div class="container">
                <a class="logo">
                    Plumber
                </a>
                <div class="nav"></div>
                <div class="actions">
                    <router-link class="link" to="/users/login">登陆</router-link>
                    <router-link class="link" to="/users/signUp">注册</router-link>
                </div>
            </div>
        </a-layout-header>
        <a-layout-content class="content">
            <div class="container">
                <a-row>
                    <a-col :span="14">
                        <div class="descr">
                            <h1>Plumber</h1>
                            <h2>A project manager tool.</h2>
                            <p>Plumber 是一个使用 <a href="https://golang.org/">Golang</a> & <a
                                    href="https://cn.vuejs.org/index.html">Vue</a>，使用 <a
                                    href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce/">Ant Design
                                of Vue</a> 组件开发的项目管理工具，本工具为 <a href="https://github.com/elfgzp/plumber">Github
                                开源项目</a>，使用 Kanban 的方式去管理项目的任务。</p>
                        </div>
                    </a-col>
                    <a-col :span="10">
                        <a-form layout="vertical" :form="signUpForm" class="signUpForm">
                            <h1>开始使用</h1>
                            <a-form-item
                                    v-bind="formItemLayout"
                                    :wrapperCol="{}"
                            >
                                <a-input size="large" placeholder="你的姓名"></a-input>
                            </a-form-item>
                            <a-form-item
                                    v-bind="formItemLayout"
                                    :wrapperCol="{}"
                            >
                                <a-input size="large" placeholder="邮箱 you@example.com"></a-input>
                            </a-form-item>
                            <a-form-item
                                    v-bind="formItemLayout"
                                    :wrapperCol="{}"
                            >
                                <a-input size="large" placeholder="密码 至少包含 6 位字符"></a-input>
                            </a-form-item>
                            <a-form-item
                                    v-bind="formItemLayout"
                                    :wrapperCol="{}"
                            >
                                <a-input size="large" placeholder="确认密码"></a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-button class="signUpBtn">立即注册</a-button>
                            </a-form-item>
                        </a-form>
                    </a-col>
                </a-row>
            </div>
        </a-layout-content>
        <a-layout-footer class="footer">
            <div class="container">
                <p>
                    🌟 Don't forget give me a star !
                    <a href="https://github.com/elfgzp/plumber"><a-icon type="github" :spin="true" style="color: #000000"/></a>
                </p>
            </div>
            <div class="bottom">
                <div class="copy">
                    <ul>
                        <li>© 2019 Power by elfgzp.</li>
                    </ul>
                </div>
            </div>
        </a-layout-footer>
    </a-layout>
</template>

<script>

import {
  Layout,
  Row, Col,
  Form,
  Input,
  Button,
  Icon
} from 'ant-design-vue'

export default {
  name: 'home',
  data () {
    return {
      signUpForm: {},
      formDecorator: {
        email: [
          'email',
          {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }]
          }
        ]
      },
      formItemLayout: {
        labelCol: {
          xs: {span: 24},
          sm: {span: 8},
        },
        wrapperCol: {
          xs: {span: 24},
          sm: {span: 16},
        },
      },
    }
  },
  components: {
    'a-layout': Layout,
    'a-layout-header': Layout.Header,
    'a-layout-content': Layout.Content,
    'a-layout-footer': Layout.Footer,
    'a-row': Row,
    'a-col': Col,
    'a-form': Form,
    'a-form-item': Form.Item,
    'a-input': Input,
    'a-button': Button,
    'a-icon': Icon
  }
}
</script>

<style scoped>
    .header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 10;
        font-size: 16px;
        text-align: center;
        transition: all .3s ease-in-out;
    }

    .header .container {
        height: 100%;
        position: relative;
        margin: 0 30px;
        display: flex;
        align-items: center;
    }

    .logo {
        color: #FFFFFF;
        font: normal normal normal 14px/1 "Arial Black";
        font-size: 32px;
        line-height: 32px;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
    }

    .nav {
        flex: 1 1;
    }

    .actions .link {
        margin: 0 14px;
        color: #FFFFFF;
        font-size: inherit;
    }

    .actions .link:hover {
        color: #d1d5da;
    }

    .content {
        min-height: 80vh;
        background-color: #2b3137;
    }

    .content .container {
        max-width: 1012px;
        padding-top: 64px;
        padding-bottom: 64px;
        margin-top: 64px;
        margin-left: auto;
        margin-right: auto;
    }

    .content .descr {
        text-align: left;
        padding: 64px 24px 0 24px;
    }

    .content .descr h1, h2 {
        color: #FFFFFF;
        margin-bottom: 0;
        font: normal normal normal 14px/1 "Arial Black";
    }

    .content .descr h1 {
        font-size: 64px;
    }

    .content .descr h2 {
        font-size: 36px;
    }

    .content .descr p, a {
        color: #d1d5da;
        font-size: 21px;
        font-weight: 400;
        font-family: InterUI, -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Oxygen, Ubuntu, Cantarell, Open Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        margin: 24px 0;
    }

    .content .descr a {
        color: #FFFFFF;
        border-bottom: 1px solid hsla(0, 0%, 100%, .125);
        font-weight: 400;
    }

    .content .signUpForm {
        background-color: #FFFFFF;
        padding: 24px;
        border-radius: 3px;

    }

    .content .signUpBtn {
        width: 100%;
        background-color: #2ebc4f;
        padding: 30px 32px;
        border-radius: 3px;
        border: 1px solid #2ebc4f;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 24px;
        line-height: 4px;
        font-weight: 500;
        transition: .2s;
        user-select: none;
        vertical-align: middle;
        white-space: nowrap;
    }

    .footer {
        min-height: 20vh;
        padding: 40px 0 0 0 !important;
    }

    .footer .container {
        max-width: 1012px;
        height: 90px;
        margin-left: auto;
        margin-right: auto;
        color: #000000;
    }

    .footer .bottom {
        height: 64px;
        background-color: #d1d5da;
    }

    .footer .copy {
        max-width: 1012px;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 24px 0;
    }

    .footer .copy ul {
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    }

    .footer .copy ul li {
        list-style: none;
    }


</style>