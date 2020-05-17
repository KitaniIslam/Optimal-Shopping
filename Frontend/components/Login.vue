<template>
<a-card :title="buttonTxt" class="card" :bordered="true" style="width: 300px" hoverable>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }], },
        ]"
        placeholder="Email"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item >
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' },
          {validator: validateToNextPassword}] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item v-if="!haveAccount">
      <a-input
        v-decorator="[
          'newpassword',
          { rules: [
                { required: true, message: 'Please input your Password!' },
                {validator: compareToFirstPassword}
            ] },
        ]"
        type="password"
        @blur="handleConfirmBlur"
        placeholder="Repeate Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button" block>
        {{buttonTxt}}
      </a-button>
      <a @click="registerMode" class="switch-button">
        {{btnAction}}
      </a>
    <a-form-item >
    </a-form-item>
  </a-form>
  </a-card>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  data(){
      return {
        buttonTxt : "Login",
        haveAccount: true ,
        btnAction: 'Register'
      }
  },
  methods: {
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
    //   if(this.haveAccount){callback()}
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
            const crid = {email:values.userName, password: values.password}
            if(this.haveAccount){
                this.login(crid)
            }else{
                this.signup(crid);
            }
        }
      });
    },
    registerMode(){
        
        if(this.haveAccount){
          this.haveAccount = false;
          this.buttonTxt = "Register";
          this.btnAction = "Login"
        } else {
          this.haveAccount = true;
          this.buttonTxt = "Login";
          this.btnAction = "Register"
        }
    },
    login(crid){
        // TODO: implement login functionality 
        // this.$auth.loginWith('local', { data: crid })
        // .then(res => {
        this.$notification.open({
            message: `${this.buttonTxt}`,
            type:"success"})
        // })
        // .catch(err=> {
        //     this.$notification.open({
        //         message: 'Email or Password incorrect !',
        //         type:'error'})
        //     }
        // )
    },
    signup(crid){
        // TODO: implement signup functionality
        // this.$axios.post('/auth/signup',crid)
        // .then(res => {
            this.login(crid);
        // })
        // .catch(err => {
        //     this.$notification.open({
        //         message: 'Something went wrong',
        //         type:'error'})
        // })
    },
    resetPassword(){
        // TODO: implement resetPassword functionality 
    }
    },
};
</script>
<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>