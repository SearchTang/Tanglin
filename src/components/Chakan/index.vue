<template>
  <span class="li">
        <el-button type="text" @click="dialogTableVisible = true"><span style="font-size: 12px;">查看</span></el-button>
<el-dialog title="入库单详情" :visible.sync="dialogTableVisible">
   <el-row class="stl">
        <el-col :span="8" class="stll"><span>入库单号：</span><span>RKD441682E9D0767</span></el-col>
         <el-col :span="8" class="stll"><span>入库单类型：</span><span>销售退货入库</span></el-col>
          <el-col :span="8" class="stll"><span>入库状态:</span><span>审核成功</span></el-col>
   </el-row>
   <el-row class="stl">
        <el-col :span="8" class="stll"><span>供应商编号：</span><span>GYS00210</span></el-col>
         <el-col :span="8" class="stll"><span>供应商名称：</span><span>华为科技HUAWEI</span></el-col>
          <el-col :span="8" class="stll"><span>联系人:</span><span>李长明</span></el-col>
   </el-row>
   <el-row class="stl">
        <el-col :span="8" class="stll"><span>电话：</span><span>13013001300</span></el-col>
         <el-col :span="8" class="stll"><span>制单人：</span><span>张丽</span></el-col>
          <el-col :span="8" class="stll"><span>制单日期:</span><span>2019-05-29 10:10</span></el-col>
   </el-row>
    <el-row class="stl">
        <el-col :span="8" class="stll"><span>备注：</span><span>无</span></el-col>
         <el-col :span="8" class="stll"><span>审核原因：</span><span>同意</span></el-col>
          <el-col :span="8" class="stll"></el-col>
   </el-row>
  <el-table :data="gridData">
    <el-table-column property="date" label="产品编码" width="100"></el-table-column>
    <el-table-column property="name" label="产品名称" width="100"></el-table-column>
     <el-table-column property="guei" label="规格" width="100"></el-table-column>
      <el-table-column property="pic" label="批次" width="100"></el-table-column>
       <el-table-column property="dan" label="单价" width="100"></el-table-column>
        <el-table-column property="ruku" label="入库数" width="150"></el-table-column>
         <el-table-column property="zji" label="总价" width="150"></el-table-column>
          <el-table-column property="ku" label="库位" width="150"></el-table-column>
  </el-table>
</el-dialog>
    </span>
</template>
<script>
export default {
    name:'chakan',
     data() {
      return {
        gridData: [{
          date: '000187',
          name: '设备箱',
          guei:'个',
          pic:'20156852',
          dan:'件',
          zji:'12533',
          ruku:'1523',
          ku:'仓库2.默认正式库位',
        
        }, {
            date: '000187',
          name: '设备箱',
          guei:'个',
          pic:'20156852',
          dan:'件',
          zji:'12533',
          ruku:'1523',
          ku:'仓库2.默认正式库位',
         
        }, {
           date: '000187',
          name: '设备箱',
          guei:'个',
          pic:'20156852',
          dan:'件',
          zji:'12533',
          ruku:'1523',
          ku:'仓库2.默认正式库位',
        }, 
        {
           date: '000187',
          name: '设备箱',
          guei:'个',
          pic:'20156852',
          dan:'件',
          zji:'12533',
          ruku:'1523',
          ku:'仓库2.默认正式库位',
        },
        {
           date: '000187',
          name: '设备箱',
          guei:'个',
          pic:'20156852',
          dan:'件',
          zji:'12533',
          ruku:'1523',
          ku:'仓库2.默认正式库位',
        },
        {
          date: '000187',
          name: '设备箱',
          guei:'个',
          pic:'20156852',
          dan:'件',
          zji:'12533',
          ruku:'1523',
          ku:'仓库2.默认正式库位',
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
}
</script>
<style scoped>
.stl{
  margin-bottom: 10px;
}
.stll>span:nth-of-type(1){
      font-family: 微软雅黑;
    font-weight: 400;
    font-style: normal;
    color: rgb(153, 153, 153);
    text-align: right;
    line-height: 28px;
}
.stll>span:nth-of-type(2){
  font-family: 微软雅黑;
    font-weight: 400;
    font-style: normal;
    text-align: left;
    line-height: 28px;
    padding-left: 5px;
}
.li>>>.v-modal   {
    z-index: 1 !important;
}
.li>>>.el-dialog__header {
    border: 1px solid #eaebeb;
}
.li>>>.el-table td, .el-table th.is-leaf{
    border: 1px solid #eaebeb;
}
.li>>>.el-dialog{
  width: 65%;
}
.li>>>.el-dialog{
      margin-top: 10vh !important;
}
</style>