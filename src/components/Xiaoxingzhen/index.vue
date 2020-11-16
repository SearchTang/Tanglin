<template>
  <div class="da">
    <el-button type="text" @click="dialogTableVisible = true">
      <el-button><i class="el-icon-plus"></i>新增产品</el-button></el-button
    >

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <div class="shangwu">
        <div class="tian">
          <div class="dinwei">
            <div class="tian1">产品编辑：</div>
            <div class="wei1">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="dinwei">
            <div class="tian1">产品编辑：</div>
            <div class="wei1">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="dinwei">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </div>
      </div>
      <el-table :data="gridData">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="shuma"
          label="显示名"
          width="100"
        ></el-table-column>
        <el-table-column
          property="shuma"
          label="重量"
          width="100"
        ></el-table-column>
        <el-table-column
          property="shuma"
          label="单价"
          width="100"
        ></el-table-column>
        <el-table-column
          property="name"
          label="储存单位"
          width="100"
        ></el-table-column>
        <el-table-column
          property="name"
          label="包装类型"
          width="100"
        ></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
      <div class="weizi">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Xiaoxingzhen",
  data() {
    return {
      input: "",
       dialogVisible: false,
      gridData: [
        {
          shuma: "数码产品",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          shuma: "数码产品",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          shuma: "数码产品",
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          shuma: "数码产品",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          shuma: "数码产品",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          shuma: "数码产品",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
      handleClose(done) {
          alert(1)
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
};
</script>
<style scoped>
.weizi{
   margin-top: 10px;
   margin-left: 460px;
}
.wei1 {
  position: absolute;
  left: 72px;
}
.dinwei {
  width: 30%;
  float: left;
  height: 50px;
  position: relative;
  margin-right: 10px;
}
.tian1 {
  float: left;
  padding-top: 10px;
}

.shangwu {
  width: 100%;
}
.da >>> .el-table td {
  border: 1px solid #eaebeb;
}
.da >>> .el-table--enable-row-transition .el-table__body td {
  border: 1px solid #eaebeb;
}
.da >>> .el-dialog__header {
  border: 1px solid #eaebeb;
}
.da >>> .el-dialog {
  width: 70%;
}
.da >>> .el-input__inner {
  width: 100%;
}
</style>