<template>
  <el-container>
    <Header fuchuanzi="设备管理"></Header>
    <el-main style="margin-top: 50px">
      <div class="zhenti">
        <div class="shangban">
          <div class="tiao">
            <span>数据筛选</span>
            <span>
                <Gaojishous></Gaojishous>
            </span>
          </div>
        </div>
        <div class="shangban1">
          <div class="shi1">
            <div class="shi1-2"><span>设备编码:</span></div>
            <div class="shi1-1">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </div>
          <div class="shi1">
            <div class="shi1-2"><span>设备名称:</span></div>
            <div class="shi1-1">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </div>
          </div>

          <div class="shi1">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button icon="el-icon-back">重置</el-button>
          </div>
        </div>

        <div class="xiaban">
          <div class="neir">
            <div class="neirr1">数据列表</div>
            <div class="neirr2">
             
                <el-button plain style="margin-right: 10px;"
                  ><i class="el-icon-plus" style="font-weight: 900"></i
                  ><Xingzhengdueihuakuan></Xingzhengdueihuakuan></el-button
                >
        
             
                <el-button plain
                  ><i class="el-icon-edit" style="font-weight: 900"></i
                  ><Bianyicaiwu></Bianyicaiwu></el-button
                >
         

              <el-button plain @click="centerDialogVisible = true"
                ><i class="el-icon-delete-solid" style="font-weight: 900"></i
                >删除</el-button
              >

              <el-dialog
                title="确定删除"
                :visible.sync="centerDialogVisible"
                width="30%"
                left
              >
                <img src="../../assets/登入img/tubiao.png" />
                <span class="daxiao"
                  >该操作将删除该订单所有数据,确定要删除吗？</span
                ><br />
                <span>该操作将删除该订单所有数据,确定要删除吗？</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="centerDialogVisible = false"
                    >取 消</el-button
                  >
                  <el-button
                    type="primary"
                    @click="(centerDialogVisible = false), open1()"
                    >确 定</el-button
                  >
                </span>
              </el-dialog>

              <el-button plain style="margin-left: 10px"
                ><i class="el-icon-refresh-right"></i>刷新</el-button
              >
              <el-button plain><i class="el-icon-upload2"></i>导出</el-button>
            </div>
          </div>

          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="dindan" label="类别编号" width="200">
            </el-table-column>
            <el-table-column prop="dindan" label="类别名称" width="700">
            </el-table-column>
            <el-table-column label="创建时间" width="220">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="address" label="操作" show-overflow-tooltip>
               <span><i class="el-icon-edit"></i><Chakan></Chakan></span>
               <span><i class="el-icon-s-fold"></i><Bianyicaiwu></Bianyicaiwu></span>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px; float: left">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])"
              >全选</el-button
            >
            <el-button @click="toggleSelection()">取消选择</el-button>
            <el-select
              v-model="value"
              placeholder="请选择"
              style="margin-left: 15px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="block" style="margin-top: 20px; float: left">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Xingzhengdueihuakuan from "../../components/Xingzhengdueihuakuan";
import Header from "../../components/Header";
import Chakan from "../../components/Chakan"
import Gaojishous from "../../components/Gaojishous"
import Bianyicaiwu from "../../components/Bianyicaiwu";
export default {
    name:'shebeiguanli',
  components: {
    Header,
    Gaojishous,
    Chakan,
    Xingzhengdueihuakuan,
    Bianyicaiwu
  },
  data() {
    return {
      input: "",
      centerDialogVisible: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      value1: "",
      tableData: [
        {
            shifo:"是",
            tuihu:"退",
          chanpin: "设备箱",
          dindan: "RKD11",
          chanpinbianhao: "00184",
          pinsi: "201518",
          gueige: "台",
          can: "设备库",
          shulian: "30004",
          kuc: "100",
          gueige: "默认真是",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
            shifo:"是",
           
          chanpin: "设备箱",
          dindan: "RKD11",
          chanpinbianhao: "00184",
          pinsi: "201518",
          gueige: "台",
          can: "设备库",
          shulian: "30004",
          kuc: "100",
          gueige: "默认真是",
          can: "设备库",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
            shifo:"是",
            tuihu:"退",
          chanpin: "设备箱",
          dindan: "RKD11",
          chanpinbianhao: "00184",
          pinsi: "201518",
          gueige: "台",
          can: "设备库",
          shulian: "30004",
          kuc: "100",
          gueige: "默认真是",
          can: "设备库",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      
     
      ],
      multipleSelection: [],
    };
  },

  methods: {
    open() {
      this.$prompt("请输入邮箱", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    open1() {
      this.$notify({
        title: "入库删除成功",
        message: "入库数据删除成功",
        type: "success",
      });
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
.xiaban>>>.el-table--enable-row-transition .el-table__body td {
    text-align: center;
    border: 1px solid #ebebeb;
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease;
}
.xiaban>>>.el-table th>.cell {
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    padding-left: 10px;
    text-align: center;
    /* border: 1px solid; */
    padding-right: 10px;
    width: 100%;
}
.yi {
  margin-right: 10px;
}
.zhenti {
  width: 100%;
}
.shangban > div {
  line-height: 50px;
}
.shangban > div > span:nth-of-type(1) {
  font-weight: 700;
  color: #909399;
  padding-left: 25px;
}
.shangban > div > span:nth-of-type(2) {
  float: right;
  padding-right: 25px;
}
.el-button--text {
  color: #409eff;
  font-weight: 800;
}
.shi1 {
  width: 21%;
  height: 100%;
  float: left;
  padding-top: 20px;
  margin-left: 30px;
}
.shi1-2 {
  padding-top: 8px;
  float: left;
  font-family: 微软雅黑;
  color: #909399;
  padding-right: 9px;
}
.shi1-1 {
  width: 70%;
  float: left;
}
.shangban {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  margin: 0px auto;
  border: 1px solid #eaebeb;
}
.shangban1 {
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  margin: 0px auto;
  border: 1px solid #eaebeb;
}

.xiaban {
  width: 100%;
  border: 1px solid #eaebeb;
}
.neir {
      width: 100%;
    height: 70px;
    margin-top: 20px;
}
.neirr1 {
  font-weight: 700;
  color: #909399;
  float: left;
  padding-top: 10px;
  padding-left: 25px;
}
.neirr2 {
  float: right;
  margin-right: 25px;
}
.daxiao {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  display: inline-block;
}
.zhenti>>>.el-table .cell.el-tooltip {
    white-space: nowrap;
    font-size: 13px;
    min-width: 50px;
    color: #328eed;
}
</style>