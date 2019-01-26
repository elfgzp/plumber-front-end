<template>
    <div id="team">
        <div class="container-box">
            <div class="container-box-actions">
                <div class="float-left"
                >
                    <a-input-search
                            placeholder="input search text"
                            style="width: 200px"
                    />
                </div>
                <div class="float-right">
                    <a-button class="btn" type="primary">创建团队</a-button>
                </div>
            </div>
            <div class="container-box-content">

                <a-list
                        :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
                        :dataSource="listData"
                >
                    <!--eslint-disable-next-line-->
                    <a-list-item slot="renderItem" slot-scope="item, index" class="team-item">

                        <a-card :title="item.team" :memberAvatars="item.memberAvatars" class="team-card">
                            <a href="#" slot="extra" @click="$router.push({name:'project'})" class="team-project-link">查看项目</a>
                            <a>
                                <a-icon type="left" />
                            </a>
                            <template v-for="(avatar, index) in item.memberAvatars">
                                <a-avatar :key="index" style="backgroundColor:#87d068" size="large" icon="user"
                                          class="team-avatar" />
                            </template>
                            <a>
                                <a-icon type="right" />
                            </a>
                        </a-card>
                    </a-list-item>
                </a-list>
            </div>
            <div class="container-box-page">
                <a-button-group>
                    <a-button class="btn" type="primary">
                        <a-icon type="left" />
                        上一页
                    </a-button>
                    <a-button class="btn" type="primary">
                        下一页
                        <a-icon type="right" />
                    </a-button>
                </a-button-group>
            </div>
        </div>
    </div>
</template>
<script>
import {
  Input,
  Button,
  List,
  Card,
  Avatar,
  Icon
} from 'ant-design-vue'

export default {
  name: 'page',
  data () {
    return {
      listData: [
        {
          team: 'Team 1',
          memberAvatars: ['#', '#', '#', '#']
        },
        {
          team: 'Team 2',
          memberAvatars: ['#', '#', '#', '#']
        },
        {
          team: 'Team 3',
          memberAvatars: ['#', '#', '#', '#']
        },
        {
          team: 'Team 4',
          memberAvatars: ['#', '#', '#', '#']
        },
        {
          team: 'Team 5',
          memberAvatars: ['#', '#', '#', '#']
        },
        {
          team: 'Team 6',
          memberAvatars: ['#', '#', '#', '#']
        },

      ]
    }
  },
  components: {
    'a-input-search': Input.Search,
    'a-button': Button,
    'a-button-group': Button.Group,
    'a-list': List,
    'a-list-item': List.Item,
    'a-card': Card,
    'a-avatar': Avatar,
    'a-icon': Icon
  }
}
</script>

<style scoped>
    @import "./style.css";
</style>