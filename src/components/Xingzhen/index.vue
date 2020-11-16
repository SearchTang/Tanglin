<template>
  <div class="zhenti">
    <div class="ding">
      <div class="wei">入库产品信息</div>
      <div class="wei1">
        <Xiaoxingzhen></Xiaoxingzhen>
      </div>
    </div>

    <div class="bian">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="产品名称" width="120">
        </el-table-column>
        <el-table-column prop="pic" label="产品编码" width="120">
        </el-table-column>
        <el-table-column prop="danjia" label="规格" width="120">
        </el-table-column>
        <el-table-column prop="ruku" label="批次" width="120">
          <el-input v-model="input" placeholder="请输入批次"></el-input>
        </el-table-column>
        <el-table-column prop="ruku" label="单价" width="120">
          <el-input v-model="input" placeholder="请输入单价"></el-input>
        </el-table-column>
        <el-table-column prop="ruku" label="入库数" width="120">
          <el-input v-model="input" placeholder="请输入入库数"></el-input>
        </el-table-column>
        <el-table-column prop="zho" label="总价" width="120"> </el-table-column>
        <el-table-column prop="ruku" label="库位" width="120">
          <el-input v-model="input" placeholder="请输入库位"></el-input>
        </el-table-column>
        <el-table-column prop="ruku" label="操作" width="120">
          <Shanchu></Shanchu>
        </el-table-column>
      </el-table>
      <el-row>
        <el-col :span="8" class="s"></el-col>
        <el-col :span="8" :offset="1" class="s">
          <el-row>
            <el-button type="primary" @click="fan">提交</el-button>
            <el-button @click="fan">取消</el-button>
          </el-row>
        </el-col>
        <el-col :span="8" class="s"></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Xiaoxingzhen from "../Xiaoxingzhen";
import Shanchu from "../Shanchu";
export default {
  components: {
    Xiaoxingzhen,
    Shanchu,
  },
  name: "Xingzhen",
  data() {
    return {
      tableData: [
        {
          zho: "0",
          danjia: "10040100",
          pic: "000187",
          date: "2016-05-03",
          name: "设备箱",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          zho: "0",
          danjia: "10040100",
          pic: "000187",
          date: "2016-05-02",
          name: "设备箱",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          zho: "0",
          danjia: "10040100",
          pic: "000187",
          date: "2016-05-04",
          name: "设备箱",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          zho: "0",
          danjia: "10040100",
          pic: "000187",
          date: "2016-05-01",
          name: "设备箱",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          zho: "0",
          danjia: "10040100",
          pic: "000187",
          date: "2016-05-08",
          name: "设备箱",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          zho: "0",
          danjia: "10040100",
          pic: "000187",
          date: "2016-05-06",
          name: "设备箱",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          zho: "0",
          danjia: "10040100",
          pic: "000187",
          date: "2016-05-07",
          name: "设备箱",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },

  methods: {
      fan(){
         this.$router.go(-1)
      },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style scoped>
.s{
  border: 1px solid #ffffff;
  margin-top: 20px;
}
.ma {
  margin: 0px auto;
}
.bian >>> .el-input__inner {
  border: 1px solid #ffffff;
}
.zhenti {
  width: 100%;
}
.wei {
  float: left;
  vertical-align: super;
  display: inline-block;
  font-size: 20px;
  font-family: "\5FAE\8F6F\96C5\9ED1 Bold", "\5FAE\8F6F\96C5\9ED1 Regular",
    微软雅黑;
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
  color: rgb(153, 153, 153);
  line-height: 67px;
  padding-left: 25px;
}
.wei1 {
  padding-right: 15px;
  float: right;
}
.ding {
  width: 100%;
  height: 67px;
  margin-top: 50px;
  border: 1px solid #eaebeb;
}
</style>