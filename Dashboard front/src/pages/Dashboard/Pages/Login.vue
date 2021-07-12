<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(submit)">
      <div class="col-md-4 ml-auto mr-auto">
          <card class="card-login card-plain">
            <div slot="header">
              <div class="logo-container">
                <img src="img/now-logo.png" alt="" />
              </div>
            </div>
            <div v-if="!isLogged" class="if-logged">
              Login or password is incorrect!
            </div>
            <div>
              <ValidationProvider
                name="email"
                rules="required|min:2"
                v-slot="{ passed, failed }"
              >
                <fg-input
                  type="text"
                  :error="failed ? 'The Username field is required' : null"
                  :hasSuccess="passed"
                  class="no-border form-control-lg"
                  placeholder="Username"
                  addon-left-icon="now-ui-icons ui-1_email-85"
                  v-model="username"
                >
                </fg-input>
              </ValidationProvider>

              <ValidationProvider
                name="password"
                rules="required|min:3"
                v-slot="{ passed, failed }"
              >
                <fg-input
                  type="password"
                  :error="failed ? 'The Password field is required' : null"
                  :hasSuccess="passed"
                  class="no-border form-control-lg"
                  placeholder="Password"
                  addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                  v-model="password"
                >
                </fg-input>
              </ValidationProvider>
            </div>

            <div slot="footer">
              <n-button native-type="submit" type="primary" round block>
                Get Started
              </n-button>
              <div class="pull-left">
                <h6>
                  <router-link class="link footer-link" to="/register">
                    Create Account
                  </router-link>
                </h6>
              </div>

              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </div>
          </card>
      </div>
    </form>
  </ValidationObserver>
</template>
<script>
import { extend } from "vee-validate";
import { required, min } from "vee-validate/dist/rules";
import axios from 'axios';
import { LOGIN_POST_URL } from '../../../cfg'

extend("required", required);
extend("min", min);

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      isLogged: true
    };
  },
  methods: {
    async submit() {
      await axios.post(LOGIN_POST_URL, {Login: this.username, Password: this.password}).then( (res) => {
        localStorage.setItem('token', res.data.token)
        this.$router.push('/pages/user')
      }, (error) => {
        console.log(error)
        this.isLogged = false
      })
    }
  }
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}

.if-logged {
  font-size: 16px;
  color: red;
  text-align: center;
}
</style>
