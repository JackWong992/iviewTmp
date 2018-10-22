<template>
  <div class="email">
    This email is big<br>
    <button @click="handleClick">按我</button>

  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(){
        this.$bus.$emit('on-click','hello')
      }
    },
    
  }
</script>

<style scoped>
.email {
  border: 1px solid green;
}
</style>