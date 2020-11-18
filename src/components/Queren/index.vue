<template>
    <span @click="open1" class="gai"><i class="el-icon-success"></i>确认</span>
</template>
<script>
export default {
     methods: {
      open1() {
        this.$notify({
          title: '退货成功',
          message: '退货成功',
          type: 'success',
          position: 'bottom-right'
        });
      },
     }
}
</script>
<style scoped>
.gai{
        color: #50a6ff;
    font-size: 12px;
    display: inline-block;
    margin-left: 5px;
    cursor: pointer;
}
</style>