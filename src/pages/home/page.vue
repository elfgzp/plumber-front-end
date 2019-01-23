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
                    <a-col :span="12"></a-col>
                    <a-col :span="12">
                        <a-form>

                        </a-form>
                    </a-col>
                </a-row>
            </div>
        </a-layout-content>
        <a-layout-footer class="footer">
        </a-layout-footer>
    </a-layout>
</template>

<script>

import {Layout, Row, Col, Form} from 'ant-design-vue'

export default {
  name: 'home',
  components: {
    'a-layout': Layout,
    'a-layout-header': Layout.Header,
    'a-layout-content': Layout.Content,
    'a-layout-footer': Layout.Footer,
    'a-row': Row,
    'a-col': Col,
    'a-form': Form
  }
}
</script>

<style scoped>

    .header {
        position: sticky;
        top: 0;
        z-index: 10;
        font-size: 16px;
        text-align: center;
        transition: all .3s ease-in-out;
    }

    .header .container {
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
        padding-top: 64px;
        padding-bottom: 64px;
    }

    .content .container {
        max-width: 1012px;
        margin-left: auto;
        margin-right: auto;
    }

    .footer {
        min-height: 20vh;
    }

</style>