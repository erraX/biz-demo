<template>
   <div class="add-plan">
       <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" style="width: 440px;">
           <el-form-item label="密码" prop="pass">
               <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
           </el-form-item>
           <el-form-item label="确认密码" prop="checkPass">
               <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
           </el-form-item>
           <el-form-item label="年龄" prop="age">
               <el-input v-model.number="ruleForm2.age"></el-input>
           </el-form-item>
           <el-form-item label="账号" prop="username">
               <input v-model="ruleForm2.username"></input>
           </el-form-item>
           <el-form-item>
               <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
               <el-button @click="resetForm('ruleForm2')">重置</el-button>
           </el-form-item>
       </el-form>
   </div>
</template>

<script>

export default {
    name: 'AddPlan',

    data() {
        var checkUsername = (rule, value, callback) => {
            if (value !== 'niminjie') {
                callback(new Error('必须为niminjie'));
            }
        };

        const checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        const validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };

        return {
            link: '',
            ruleForm2: {
                pass: '',
                checkPass: '',
                age: '',
                username: '',
            },
            rules2: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                age: [
                    { validator: checkAge, trigger: 'blur' }
                ],
                username: [
                    { validator: checkUsername, trigger: 'blur' }
                ],
            },
        };
    },

    mounted() {
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>

<style lang="less" scoped>
</style>
