<template>
  <div class="zen">
    <el-button type="text" @click="dialogVisible = true">高级搜索</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <el-row>
        <el-col :span="11"
          >移库单号：<el-input
            v-model="input"
            placeholder="请输入内容"
          ></el-input
        ></el-col>
        <el-col :span="11" :offset="1">
          单据类型：
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11"
          >移库单号：<el-input
            v-model="input1"
            placeholder="请输入内容"
          ></el-input
        ></el-col>
        <el-col :span="11" :offset="1">
          单据类型：
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="11">
          起始时间：
          <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
          >
          </el-time-select>
        </el-col>
        <el-col :span="11" :offset="1"> </el-col>
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "gaojishous",
  data() {
    return {
      startTime: "",
      input: "",
       input1: "",
      dialogVisible: false,
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
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style scoped>
.zen >>> .el-dialog__body {
  padding: 0px 20px;
}
</style>