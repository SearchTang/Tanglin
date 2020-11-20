<template>
  <el-container>
    <Header fuchuanzi="编译库位"></Header>

    <el-main style="margin-top: 50px">
      <div class="shangban">
        <div>
          <span>编译库位</span
          ><span
            ><span style="color: #b8b8b8; font-size: 15px"
              ><span style="color: red">*</span>为必填项</span
            ></span
          >
        </div>
      </div>

      <div class="neir">
        <el-row class="tiao">
             <el-col :span="11">
                <p class="ziti">库位编号：</p>
            <el-input
              v-model="input"
              placeholder="1号仓库"
            ></el-input>
             </el-col>
             <el-col :span="11" :offset="2">
               <p class="ziti"><span style="color: red"></span>库位类型：</p>
             <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
             </el-col>
        </el-row>
          
         
         
        

        <el-row class="tiao">
             <el-col :span="11">
                <p class="ziti">入库单号：</p>
            <el-input
              v-model="input"
              placeholder="可不选填，自动生成"
            ></el-input>
             </el-col>
             <el-col :span="11" :offset="2">
               <p class="ziti"><span style="color: red">* </span>入库单类型</p>
            <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
             </el-col>
        </el-row>

         <el-row class="tiao">
             <el-col :span="11">
               
            <span class="tia1">是否默认：</span><el-checkbox v-model="checked"></el-checkbox>
             </el-col>
             <el-col :span="11" :offset="2">
            <span class="tia1">是否禁用：</span><el-checkbox v-model="checked1" disabled></el-checkbox>
             </el-col>
        </el-row>

       

       
      </div>
      <el-row>
       <el-col :span="12" :offset="10"> <el-button type="primary" @click="taing">提交</el-button>
        <el-button  @click="taing">取消</el-button></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Xingzhen from "../../components/Xingzhen"
import Header from "../../components/Header";
export default {
    name:'bianyikuwei',
  components: {
    Header,
    Xingzhen
  },
  data() {
    return {
         checked: true,
         checked1: false,
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
       options1: [
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
        options2: [
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
  methods:{
    taing(){
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
.tiao{
  margin-top: 20px;
  margin-bottom: 20px;
}
.ziti{
      font-family: 微软雅黑;
    font-weight: 400;
    font-style: normal;
    text-align: left;
    line-height: 28px;
        font-size: 14px;
    color: #666666;
}
.tia1{
        font-family: 微软雅黑;
    font-weight: 400;
    font-style: normal;
    text-align: left;
    line-height: 28px;
        font-size: 14px;
    color: #666666;
}
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
.neir>>>.el-select {
    display: inline-block;
    position: relative;
    width: 100%;
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