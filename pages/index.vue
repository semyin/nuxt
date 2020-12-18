<template>
  <div>
    <ul>
      首页
      <li><nuxt-link :to="{name:'pc-home'}">PCHOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'m-home'}">MHOME</nuxt-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  layout: "default"
}
</script>

<style>

</style>