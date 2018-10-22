<template>
  <div class="tel">
    This is tel: 17356196519<br>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: ''
      }
    },
    mounted(){
      this.$bus.$on('on-click',mes=>{
        this.message = mes
      })
    }
  }
</script>

<style scoped>
.tel {
  border: 1px solid red;
}
</style>