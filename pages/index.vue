<template>
  <div>
    <ul>
      首页
      <li>
        <nuxt-link :to="{name:'pc-home'}">PCHOME</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'m-home'}">MHOME</nuxt-link>
      </li>
    </ul>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  const routeMap = {
    'index': 'index',
    '/pc/home': '/m/home',
    '/pc/about': '/m/about'
  }

  const map = new Map()

  for(let i in routeMap) {
    map.set(i, routeMap[i])
    map.set(routeMap[i], i)
  }

  export default {
    asyncData({ store, redirect, route }) {
      const { path } = route
      const { isMobile } = store.state.global
      if(path.includes('/pc/') && isMobile) {
        redirect(map.get(path))
      }
      if(path.includes('/m/') && !isMobile) {
        redirect(map.get(path))
      }
    }
  }
</script>

<style>

</style>
