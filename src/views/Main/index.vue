<template>
  <div class="zhenti">
      <div class="daohanlan">
          <!-- <div class="img"><img src="../../assets/登入img/1.png"/></div> -->
        <el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-loading"></i>工作台</template>
        <el-menu-item-group>
          <template slot="title"><i class="el-icon-c-scale-to-original"></i>快捷功能</template>
          <el-menu-item index="1-1"><router-link to="../Contentshuju" tag="div">数据概念</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="../Contentluku" tag="div" @click="dian" v-model="bandin">入库管理</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link to="../Chukuguanli" tag="div">出库管理</router-link></el-menu-item>
          <el-menu-item index="1-4"><router-link to="../Pandian" tag="div">盘点管理</router-link></el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title"><i class="el-icon-c-scale-to-original"></i>报表分析</template>
          <el-menu-item index="1-5"><router-link to="../Changkuzhandan" tag="div">仓库台账</router-link></el-menu-item>
          <el-menu-item index="1-6"><router-link to="../Kuchuenyujin" tag="div">库存预警</router-link></el-menu-item>
          <el-menu-item index="1-7"><router-link to="../Kuchuanqindan" tag="div">库存清单</router-link></el-menu-item>
          <el-menu-item index="1-8"><router-link to="../Caiwujizhan" tag="div">财务记账</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>仓库管理</template>
        <el-menu-item-group>
          <template slot="title"><i class="el-icon-c-scale-to-original"></i>出入库管理</template>
          <el-menu-item index="2-1"><router-link to="../Contentluku" tag="div" @click="dian" v-model="bandin">入库管理</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link to="../Chukuguanli" tag="div">出库管理</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link to="../Yikuguanli" tag="div">移库管理</router-link></el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title"><i class="el-icon-c-scale-to-original"></i>盘点掉盘管理</template>
          <el-menu-item index="2-5"><router-link to="../Baosuenguanli" tag="div">报损管理</router-link></el-menu-item>
          <el-menu-item index="2-6"><router-link to="../Pandianguanli" tag="div">盘点管理</router-link></el-menu-item>
          <el-menu-item index="2-7"><router-link to="../Tiaoboguanli" tag="div">调拨管理</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>业务管理</template>
        <el-menu-item-group>
          <template slot="title"><i class="el-icon-c-scale-to-original"></i>采购销售管理</template>
          <el-menu-item index="3-1"><router-link to="../Caigouguanli" tag="div">采购管理</router-link></el-menu-item>
          <el-menu-item index="3-2">采购退货</el-menu-item>
          <el-menu-item index="3-3">销售管理</el-menu-item>
          <el-menu-item index="3-4">销售退货</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

       <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>财务管理</template>
        <el-menu-item-group>
          <template slot="title"><i class="el-icon-c-scale-to-original"></i>财务数据</template>
          <el-menu-item index="4-1">财务类别</el-menu-item>
          <el-menu-item index="4-2">应收管理</el-menu-item>
          <el-menu-item index="4-3">应付管理</el-menu-item>
          <el-menu-item index="4-4">财务记账</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

       <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>报表管理</template>
        <el-menu-item-group>
          <template slot="title"><i class="el-icon-c-scale-to-original"></i>报表数据</template>
          <el-menu-item index="5-1">库存清单</el-menu-item>
          <el-menu-item index="5-2">可出库存</el-menu-item>
          <el-menu-item index="5-3">期初期末</el-menu-item>
          <el-menu-item index="5-4">库存台账</el-menu-item>
          <el-menu-item index="5-5">库存预警</el-menu-item>
          <el-menu-item index="5-6">库存容量</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <router-view></router-view>
</el-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "main",

   data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
};
</script>
<style scoped>
.el-header {
    background-color: #fff;
    border: 1px solid #e6e7e7;
    color: #333;
    line-height: 60px;
}
.img{
     text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
.img>img{
    width: 40%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .chuan{

 height: 100%;
 width: 20%;
  }
  .yan{
    background: blue;
    display: inline-block;
    width: 10px;
    height: 30px;
  margin-top: 10px;

  }
</style>