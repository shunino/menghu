<template>
  <div style="width: 100%;text-align: left">
    <el-form  :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="80px">
      <el-form-item label="用户名称"  prop="username">
        <el-input v-model="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="mobile">
        <el-input v-model="ruleForm2.mobile"></el-input>
      </el-form-item>
      <el-form-item label="邮件地址" prop="email">
        <el-input v-model="ruleForm2.email"></el-input>
      </el-form-item>
      <el-form-item label="职业">
        <el-input v-model="ruleForm2.profession"></el-input>
      </el-form-item>
      <el-form-item label="单位">
        <el-input v-model="ruleForm2.company"></el-input>
      </el-form-item>
      <el-form-item label="所在城市">
        <el-input v-model="ruleForm2.city"></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="ruleForm2.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm2:{},
        rules2:{
          username: [
            { required: true, trigger: 'blur',validator: this.vcopy },
          ],
          mobile: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          password1: [
            {required: true,validator: this.validatePass, trigger: 'blur' },
          ],
        },
      };
    },
    mounted(){
        this.getInfo();
    },
    methods: {
      getInfo(){
        this.$http.post('api/resshare/user/getUserById',{
          userid:this.$userId,
          token:this.$token
        }).then(res => {
          this.ruleForm2 = res.data.data;
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
      register(){
        var self = this;
        this.$refs['ruleForm2'].validate((valid) => {
          //debugger;
          if (valid) {
            self.$http.post('api/resshare/user/updateUser',{
              user:self.ruleForm2,
            }).then(res => {
              this.$message({
                message: '修改成功！' ,
                type: 'success'
              });
              console.log(res);
            }).catch(err => {
              console.log(err)
            })
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
