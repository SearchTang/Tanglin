
<template>
<span class="tai">
    <span type="text" @click="dialogVisible = true">新增</span>
<el-dialog
  title="新增类别"
  :visible.sync="dialogVisible"
  width="40%"
  :before-close="handleClose">
  
 <el-row>
     <el-col :span="11" style="text-align: left;">
         <p style="margin-bottom: 10px;">类别编号：</p>
         <el-input v-model="input" placeholder="请输入内容"></el-input>
     </el-col>
     <el-col :span="11" :offset="2" style="text-align: left;">
         <p style="margin-bottom: 10px;">类别编号：</p>
         <el-input v-model="input" placeholder="请输入内容"></el-input>
     </el-col>
 </el-row>
 <el-row style="margin-top: 10px; text-align: left;">
     <el-col :span="24" >
         <p style="margin-bottom: 10px;">备注：</p>
         <el-input
  type="textarea"
  :rows="3"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
     </el-col>
 </el-row>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</span>
</template>
<script>
  export default {
    data() {
      return {
            textarea: '',
          input:'',
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
<style scoped>
.tai>>>.el-dialog__header {
    padding: 20px 20px 10px;
    text-align: left;
    border-bottom: 1px solid #c8c8c8;
}
</style>