<template>
  <div>
    This is argu vue:{{$route.params.name}}
    <Button type="primary" @click="handleClick('push')">点击跳转</Button>
        <Button type="primary" @click="handleClick('tel')">点击跳转TEL</Button>

  </div>
</template>

<script>
  export default {
    methods: {
     handleClick(type) {
        if(type==='push'){
          this.$router.push({
            path: '/parent',
            // query: {
            //   name: 'huangfl'
            // }
            params: {
              name: 'huangfloong'
            }
          })
        }else if(type==='tel'){
          this.$router.push('/tel')
        }
      }
    },
  }
</script>

<style scoped>

</style>