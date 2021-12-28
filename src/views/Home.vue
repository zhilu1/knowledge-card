<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <SideBar >
      <!-- <template v-slot:default="slotProps">
        <i class="fas fa-check"></i>
        <span class="green">{{ slotProps.item }}</span>
      </template> -->
    </SideBar>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import BarArea from '@/components/sidebar/BarArea.vue'
import BarItem from '@/components/sidebar/BarItem.vue'

export default {
  name: 'Home',
  components: {
    BarArea,
    BarItem
    // HelloWorld
  },
  data: {
    categories: [
      {
        title: "JS 语言",
        children: [
          {
            title: "第一级1",

          },
          {
            title: "第一级2",
            children: [
              {
                title: "levelup"
              }
            ]
          },
        ]
      },
      {
        title: "CSS",
      }
    ]
  }
}
</script>
