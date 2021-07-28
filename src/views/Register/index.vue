<template>
  <ValidationObserver class="register-container" v-slot="{ handleSubmit }">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <a href="login.html" target="_blank">登陆</a>
        </span>
      </h3>
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          tag="div"
          class="content"
          rules="required|phone"
          mode="lazy"
          v-slot="{ errors }"
        >
          <label>手机号:</label>
          <input type="text" placeholder="请输入你的手机号" v-model="phone" />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          tag="div"
          class="content"
          rules="required|code"
          mode="lazy"
          v-slot="{ errors }"
        >
          <label>验证码:</label>
          <input type="text" placeholder="请输入验证码" v-model="code" />
          <button v-if="!isCodeSended" @click.prevent="sendCode">
            获取验证码
          </button>
          <button v-else>重新发送({{ time }}s)</button>
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          tag="div"
          class="content"
          rules="required|password"
          mode="lazy"
          v-slot="{ errors }"
          vid="password"
        >
          <label>登录密码:</label>
          <input
            type="password"
            placeholder="请输入你的登录密码"
            v-model="password"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          tag="div"
          class="content"
          rules="required|confirmed:password"
          mode="lazy"
          v-slot="{ errors }"
        >
          <label>确认密码:</label>
          <input
            type="password"
            placeholder="请输入确认密码"
            v-model="rePassword"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          tag="div"
          rules="isChecked"
          mode="lazy"
          v-slot="{ errors }"
          class="controls"
        >
          <input name="m1" type="checkbox" v-model="isChecked" />
          <span>同意协议并注册《尚品汇用户协议》</span>
          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="btn">
          <button>完成注册</button>
        </div>
      </form>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </ValidationObserver>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, confirmed } from "vee-validate/dist/rules";
import { reqSendCode, reqRegister } from "../../api/user";

const MAX_TIME = 60;

const phoneReg = /^1[3-9][0-9]{9}$/;

const passwordReg = /^[A-Za-z0-9]{5,15}/;

const codeReg = /^\d{6}$/;

extend("phone", {
  validate(val) {
    return phoneReg.test(val);
  },
  message: "输入的电话号码格式不正确",
});
extend("password", {
  validate(val) {
    return passwordReg.test(val);
  },
  message: "输入的密码格式不正确",
});
extend("code", {
  validate(val) {
    return codeReg.test(val);
  },
  message: "输入的验证码格式不正确",
});
extend("required", {
  ...required,
  message: "请输入内容",
});
extend("confirmed", {
  ...confirmed,
  message: "两次密码不一致",
});
extend("isChecked", {
  validate(val) {
    return val;
  },
  message: "请阅读并同意用户条款",
});

export default {
  name: "Register",
  data() {
    return {
      phone: "",
      code: "",
      password: "",
      rePassword: "",
      time: MAX_TIME,
      timer: "",
      isChecked: false,
      isCodeSended: false,
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    async onSubmit() {
      const { phone, code, password } = this;
      await reqRegister({ phone, code, password });
      this.$router.push("/Login");
    },
    async sendCode() {
      const { phone } = this;
      if (!phone) return;
      this.isCodeSended = true;
      const timer = setInterval(() => {
        if (this.time <= 1) {
          clearInterval(timer);
          this.isCodeSended = false;
          this.time = MAX_TIME;
          return;
        }
        this.time--;
      }, 1000);
      let res = await reqSendCode(phone);
      console.log(res);
    },
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
