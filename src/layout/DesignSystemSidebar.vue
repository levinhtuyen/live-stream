<template>
  <el-row class="left-section-sidebar">
    <div>
      <p class="is-page">Pages</p>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo">
      <el-menu-item 
        v-for="(menu, index) in menus" 
        :key="index"
        :index="menu.path"
        :class="setActive(menu) ? 'is-active' :''">
        <el-link :href="menu.path">
          <i class="el-icon-check"></i>
          <span>{{ menu.title}}</span>
        </el-link>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
  export default {
    name: 'Sidebar',
    components: {
    },
    data () {
      return {
        menus : [ 
          
          {
            title: 'Typography',
            path: '/hotel/sadmin/typography',
            index: 1
          }
        ]
      }
    },
    methods: {
      setActive (menu) {
        if (this.$router.currentRoute.fullPath === menu.path) {
          return true
        } else {
          return false
        }
    },
    }
  }
</script>
<style lang="scss" scoped>
.left-section-sidebar:deep(.el-menu-item) {
  height: 45px;
  line-height: 45px;
}
.el-link {
    display: inherit !important;
}
.left-section-sidebar {
  
  .is-page {
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    padding: 32px 0 8px 24px;
  }
  .el-menu-vertical-demo {
    height: calc(100vh - 100px);
    li {
      
      a:hover {
        text-decoration: none !important;
      }
    }
    .el-link--inner::after {
      display: none;
    }
    .el-link.el-link--default:after {
      display: none;
    }
  }
}
.is-active {
  a {
    color: #ff6400 !important;
    text-decoration: none !important;
  }
}
</style>
