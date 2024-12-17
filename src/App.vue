<template>
  <div>
    <el-button type="primary" size="default" @click="sendRequest">测试</el-button>
  </div>
</template>

<script setup lang='ts'>
  import request from '@/utils/request'

  function sendRequest(){
    request({
      url: '/user/login',
      method: 'post',
      data: {
        username: 'admin',
        password: 'admin',
      }
    }).then(res=>{
      console.log(res)
    })
  }
  
</script>

<style lang='less' scoped>
  
</style>