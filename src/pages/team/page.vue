<template>
    <div id="team">
        <div class="container-box">
            <a-list
                    :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
                    :dataSource="listData"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <team-card :name="item.team" :memberAvatars="item.memberAvatars"></team-card>
                </a-list-item>
            </a-list>
        </div>
    </div>
</template>
<script>
import {
  List,
  // Card
} from 'ant-design-vue'

import teamCard from '@/components/teamCard'

export default {
  name: 'page',
  data () {
    return {
      listData: [
        {
          team: 'Title 1',
          memberAvatars: ['#']
        },
        {
          team: 'Title 2',
          memberAvatars: ['#']
        },
        {
          team: 'Title 3',
          memberAvatars: ['#']
        },
        {
          team: 'Title 4',
          memberAvatars: ['#']
        },
        {
          team: 'Title 5',
          memberAvatars: ['#']
        },
        {
          team: 'Title 6',
          memberAvatars: ['#']
        },

      ]
    }
  },
  components: {
    'a-list': List,
    'a-list-item': List.Item,
    // 'a-card': Card,
    'team-card': teamCard
  }
}
</script>

<style scoped>
    @import "./style.css";
</style>