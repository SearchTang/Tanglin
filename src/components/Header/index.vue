<template>
    <div style=" font-size: 12px; background-color: #fff;border: 1px solid #e6e7e7;width:100%" class="dian">
         <div class="chuan">
             <span class="yan"></span>
             <span class="yan1">{{fuchuanzi}}</span>
         </div>
         <div class="you">
              <span><i class="el-icon-refresh-right"></i>刷新</span>
              <span><i class="el-icon-arrow-right"></i>返回</span>
         </div>
    </div>
</template>
<script>
export default {
    name:'Header',
    props:{
        fuchuanzi:{
            type:String,
            default:'数据概念'
        }
    }
}
</script>
<style scoped>
.chuan{
    float: left;
}
.you{
        /* float: left; */
    width: 80%;
    text-align: right;
    margin-top: 22px;
}
.you>span{
    border: 1px solid #e4e4e4;
    padding: 5px 25px;
    margin-right: 10px;
    cursor: pointer;
    color: #a1a1a1;
}
.yan{
      width: 10px;
    margin-right: 11px;
    height: 25px;
    background: blue;
    margin-top: 16px;
    margin-left: 20px;
    display: inline-block;
}
.yan1{
        vertical-align: super;
    display: inline-block;
    font-size: 20px;
    font-family: "微软雅黑 Bold", "微软雅黑 Regular", 微软雅黑;
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    color: rgb(153, 153, 153);
}
.dian{
    height: 60px;
    position: fixed;
}
</style>