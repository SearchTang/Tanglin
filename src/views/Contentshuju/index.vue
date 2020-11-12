<template>
  
 
 <el-container>
    <Header></Header>
    
    <el-main style="margin-top: 50px;">
       <div class="tou">
         <div class="qiehuan">
              <span href="javascript:;" @click="dian=0" :class="{'bian':dian==0}">数据总览</span>
              <span href="javascript:;" @click="dian=1" :class="{'bian':dian==1}">仓库作业</span>
         </div>
         <div v-show="dian===0">
           <div class="neir1">
                <div class="nei1">
                    <p>库存总量</p>
                    <p>76,763,424.80</p>
                    <p>库存成本</p>
                    <p>3,665,745,933.54</p>
                </div>
                 <div class="nei1">
                    <p>库存总量</p>
                    <p>76,763,424.80</p>
                    <p>库存成本</p>
                    <p>3,665,745,933.54</p>
                </div>
                 <div class="nei1">
                    <p>库存总量</p>
                    <p>76,763,424.80</p>
                    <p>库存成本</p>
                    <p>3,665,745,933.54</p>
                </div>
                 <div class="nei1">
                    <p>库存总量</p>
                    <p>76,763,424.80</p>
                    <p>库存成本</p>
                    <p>3,665,745,933.54</p>
                </div>
           </div>
           
          
            <Cheshi></Cheshi>
           
   
         </div>
          <div v-show="dian===1">
            <div class="neir2">
                <div class="nei2">
                     <p>已发运</p>
                     <p>3,424</p>
                </div>
                <div class="nei2">
                     <p>已发运</p>
                     <p>3,424</p>
                </div>
                <div class="nei2">
                     <p>已发运</p>
                     <p>3,424</p>
                </div>

                <div class="nei2">
                     <p>已发运</p>
                     <p>3,424</p>
                </div>
                <div class="nei2">
                     <p>已发运</p>
                     <p>3,424</p>
                </div>
                <div class="nei2">
                     <p>已发运</p>
                     <p>3,424</p>
                </div>
            </div>
         </div>
       </div>
    </el-main>
  </el-container> 

</template>
<script>
import Cheshi from '../Cheshi'
import Header from '../../components/Header'
export default {
    components:{
         Cheshi,
         Header
      
    },
    name:'contentshuju',
    data() {
      return {
         dian:0,
      };
    },
   
 
   
     
};
</script>
<style scoped>
#myChart {
        width: 70%;
        min-height: 300px;
        clear: both;
        box-sizing: border-box;
        margin: 30px auto;
    }
.zhenti {
  width: 100%;
}
.qiehuan{
    width: 100%;
    margin: 10px 0px;
    text-align: center;
}
.qiehuan>span{
        border-bottom: 3px solid #797979;
        display: inline-block;
       padding: 10px 80px;
}
.qiehuan>span:hover{
   cursor: pointer;
   border-bottom: 3px solid #3d84e7;
   
}
.qiehuan .bian{
    color: #ffffff;
      border-bottom: 3px solid #3d84e7;
    background: #3d84e7;
}
.neir1{
    width: 90%;
    margin: 0px auto;
    border: 1px solid #eaebeb;
    height: 140px;
}
.nei1>p:nth-of-type(2){
    font-weight: 700;
}
.nei1>p:nth-of-type(4){
    font-weight: 700;
}
.nei1>p{
    margin: 10px 0px 10px 0px;
}
.nei1{
    width: 25%;
    float: left;
    text-align: center;

}
.neir2{
      width: 95%;
    margin: 0px auto;
    border: 1px solid #eaebeb;
    height: 140px;
}
.nei2{
    width: 15%;
    float: left;
    /* margin: 7px; */
    padding: 30px 0px;
    margin-top: 20px;
    margin-left: 15px;
    text-align: center;
    border: 1px solid #eaebeb;
}
</style>