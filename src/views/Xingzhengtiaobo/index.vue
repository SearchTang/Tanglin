<template>
  <el-container>
    <Header fuchuanzi="新增调拨"></Header>

    <el-main style="margin-top: 50px">
      <div class="shangban">
        <div>
          <span>数据筛选</span
          ><span
            ><span style="color: #b8b8b8; font-size: 15px"
              ><span style="color: red">*</span>为必填项</span
            ></span
          >
        </div>
      </div>

      <div class="neir">
        <div class="n1">
          <div class="n1-1">
            <p>调拨单号：</p>
            <el-input
              v-model="input"
              placeholder="可不选填，自动生成"
            ></el-input>
          </div>
          <div class="n1-1">
            <p><span style="color: red">* </span>调拨仓库：</p>
            <el-input v-model="input" placeholder="请选入库内容"></el-input>
          </div>
          <div class="n1-1 n1-2">
            <p>关联订单号</p>
            <el-input v-model="input" placeholder="请选入库内容"></el-input>
          </div>
        </div>

        <div class="n1">
          <div class="n1-1">
            <p>入库单号：</p>
            <el-input
              v-model="input"
              placeholder="可不选填，自动生成"
            ></el-input>
          </div>
          <div class="n1-1">
            <p><span style="color: red">* </span>入库单类型</p>
            <el-input v-model="input" placeholder="请选入库内容"></el-input>
          </div>
          <div class="n1-1 n1-2">
            <p>关联订单号</p>
            <el-input v-model="input" placeholder="请选入库内容"></el-input>
          </div>
        </div>

        <div class="n1">
          <div class="n1-1">
            <p>制单人：</p>
            <el-input
              v-model="input"
              placeholder="可不选填，自动生成"
            ></el-input>
          </div>
          <div class="n1-1">
            <p><span style="color: red">* </span>制单时间：</p>
            <el-time-select
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
          </div>
          <div class="n1-1 n1-2">
            
          </div>
        </div>


        <div class="n2">
          <p class="p">备注：</p>
          <el-input
           
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            maxlength="100"
            show-word-limit 
          >
          </el-input>
        </div>
      </div>
       <Xingzhen></Xingzhen>
    </el-main>
  </el-container>
</template>
<script>
import Xingzhen from "../../components/Xingzhen"
import Header from "../../components/Header";
export default {
    name:'xingzhengtiaobo',
  components: {
    Header,
    Xingzhen
  },
  data() {
    return {
         textarea: '',
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
    };
  },
};
</script>
<style scoped>
.p{
    margin-bottom: 10px;
}
.n2 {
  width: 100%;
  
  margin-top: 50px;
}
.n1 {
  width: 100%;
  margin-top: 20px;
  height: 60px;
}
.n1-1 {
  width: 30%;
  float: left;
  margin-right: 48px;
}
.n1-1 > p {
  margin-bottom: 5px;
}
.n1-2 {
  margin-right: 0px;
}
.neir {
  width: 80%;
  margin: 0px auto;
}
.shangban {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  margin: 0px auto;
  border: 1px solid #eaebeb;
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
</style>