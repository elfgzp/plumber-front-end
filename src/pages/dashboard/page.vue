<template>
    <a-layout id="dashboard">
        <a-layout-header class="header">
            <div class="container">
                <a href="javascript:void(0)" class="logo">
                    Plumber
                </a>
                <div class="nav"></div>
                <div class="actions">
                    <div class="dropdown">
                        <a-badge :count="1" dot>
                            <a href="javascript:void(0)" class="bell">
                                <a-icon type="bell" />
                            </a>
                        </a-badge>
                    </div>
                    <div class="dropdown">
                        <a-dropdown>
                            <a href="javascript:void(0)" class="avatar">
                                <a-avatar icon="user" />
                                <span class="dropdown-caret"></span>
                            </a>
                            <a-menu slot="overlay">
                                <a-menu-item>
                                    <span>XXX@example.com</span>
                                </a-menu-item>
                                <a-menu-divider />
                                <a-menu-item>
                                    <a href="javascript:void(0)">个人资料</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:void(0)" @click="$router.push({name: 'home'})">注销登陆</a>
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>

                    </div>
                </div>
            </div>
        </a-layout-header>
        <a-layout-content class="content">
            <div class="container">
                <router-view />
            </div>
        </a-layout-content>
        <a-layout-footer class="footer">
            <div class="container">
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
  Avatar,
  Icon,
  Badge,
  Dropdown,
  Menu,
} from 'ant-design-vue'

export default {
  name: 'page',
  components: {
    'a-layout': Layout,
    'a-layout-header': Layout.Header,
    'a-layout-content': Layout.Content,
    'a-layout-footer': Layout.Footer,
    'a-avatar': Avatar,
    'a-icon': Icon,
    'a-badge': Badge,
    'a-dropdown': Dropdown,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-menu-divider': Menu.Divider
  }
}
</script>

<style scoped>
    @import "./style.css";
</style>