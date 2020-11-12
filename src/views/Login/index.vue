<template>
  <div class="login">
    <div class="beirjin">
      <div class="neir">
        <div class="nei1">
          <div class="nei2">
            <div class="img"><img src="../../assets/登入img/1.png" /></div>
            <div class="nei3">
              <p>和智云仓储管理系统</p>
              <p>HeZi Cloud Warehouse Management System</p>
            </div>
          </div>
          <div class="shurukuan">
            <el-input
              placeholder="请输入用户名称"
              v-model="input"
              clearable
              class="input1 input2"
            ></el-input>
            <el-input
              placeholder="请输入密码"
              v-model="mima"
              show-password
              class="input1"
            ></el-input>
            <el-button type="primary" round @click="dengru">登入</el-button>
            <div class="dinwei1">
              <el-alert
                title="用户不正确"
                v-show="xi1"
                type="error"
                show-icon
                style="background: transparent"
              ></el-alert>
              <el-alert
                title="用户为空"
                type="warning"
                description=""
                v-show="xi3"
                show-icon
                style="background: transparent"
              >
              </el-alert>
            </div>
            <div class="dingwei2">
              <el-alert
                title="密码错误"
                v-show="xi2"
                type="error"
                show-icon
                style="background: transparent"
              >
              </el-alert>
              <el-alert
                title="密码为空"
                type="warning"
                v-show="xi4"
                description=""
                show-icon
                style="background: transparent"
              >
              </el-alert>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      input: "",
      mima: "",
      xi1: false,
      xi2: false,
      xi3: false,
      xi4: false,
    };
  },
  methods: {
    dengru() {
      if (this.input == "") {
        this.xi3 = true;
      } else if (this.mima == "") {
        this.xi4 = true;
      } else if (this.input !== "tang") {
        this.xi1 = true;
      } else if (this.mima !== "123") {
        this.xi2 = true;
      } else {
        this.$router.push({
          //要用编程试路由，不能直接path跳转
          path: "../Main",
        });
      }
    },
  },
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100vh;
}
.beirjin {
  background-image: url("../../assets/登入img/2.png");
  width: 100%;
  height: 100%;
  position: relative;
}
.neir {
  width: 100%;
  height: 300px;
  /* background: transparent; */
  background: #00000096;
  position: absolute;
  top: 30%;
}
.nei1 {
  width: 60%;
  margin: 0px auto;
  height: 100%;
}
.nei2 {
  width: 100%;
  height: 100px;
  margin-top: 70px;
}
.img {
  float: left;
}
.img > img {
  width: 80px;
}
.nei3 {
  color: #fff;
  float: left;
}
.nei3 > p:nth-of-type(1) {
  font-size: 32px;
  font-weight: 600;
}
.nei3 > p:nth-of-type(2) {
  font-size: 28px;
}
.shurukuan {
  width: 100%;
  height: 125px;
  position: relative;
}
.shurukuan > input {
  height: 45px;
}
.input1 {
  width: 35%;

  margin-right: 15px;
}
.input2 {
  margin-left: 80px;
}
.dinwei1 {
  position: absolute;
  width: 200px;
  left: 65px;
}
.dingwei2 {
  position: absolute;
  width: 200px;
  left: 398px;
}
</style>