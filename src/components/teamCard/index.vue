<template>
    <a-card :title="teamName">
        <template v-for="(avatar, index) in memberAvatars">
            <a-avatar :key="index" style="backgroundColor:#87d068" icon="user" :src="avatar" />
        </template>
    </a-card>
</template>

<script>
import {
  Card,
  Avatar
} from 'ant-design-vue'

export default {
  name: 'index',
  props: {
    teamName: {
      type: String,
      default: 'Team'
    },
    memberAvatars: {
      type: Array,
      default: []
    }
  },
  components: {
    'a-card': Card,
    'a-avatar': Avatar
  }
}
</script>

<style scoped>

</style>