<template>
    <div class="xiao">
        <el-button plain @click="centerDialogVisible = true">
            <i class="el-icon-delete-solid" style="font-weight: 900"></i>删除
        </el-button>
              <el-dialog
                title="确定删除"
                :visible.sync="centerDialogVisible"
                width="30%"
                left >
                <img src="../../assets/登入img/tubiao.png">
                <span class="daxiao">该操作将删除该订单所有数据,确定要删除吗？</span><br>
                <span>该操作将删除该订单所有数据,确定要删除吗？</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="centerDialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="centerDialogVisible = false,open1()">确 定</el-button>
                </span>
             </el-dialog>
    </div>
</template>
<script>
export default {
    name:"Shanchu",
    data() {
        return {
             centerDialogVisible: false,
        }
    },
    methods:{
            open1() {
        this.$notify({
          
          title: '入库删除成功',
          message: '入库数据删除成功',
          type: 'success'
        });
      },
    }
}
</script>