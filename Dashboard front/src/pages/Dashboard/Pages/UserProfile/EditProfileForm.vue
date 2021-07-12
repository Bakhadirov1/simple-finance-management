<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <form @submit.prevent="updateProfile" method="put">
      <div class="row">
        <div class="col-md-6">
          <fg-input
            type="text"
            label="First Name"
            placeholder="First Name"
            v-model="customer.Name"
          >
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input
            type="text"
            label="Last Name"
            placeholder="Last Name"
            v-model="customer.Surname"
          >
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <fg-input
            label="Balance"
            type="number"
            :disabled="true"
            v-model="customer.Balance"
          >
          </fg-input>
        </div>
      </div>
      <n-button
        native-type="submit"
        type="primary"
        round
        block
        @click.native="notifyVue('bottom', 'left')"
      >
        Change profile info
      </n-button>
    </form>
  </card>
</template>
<script>
import customerServices from "../../../../services/customer.services";

import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"]
    };
  },
  mounted() {
    this.fetchUser();
  },
  computed: {
    ...mapGetters({
      customer: "user"
    })
  },
  methods: {
    ...mapActions({
      fetchUser: "fetchUser",
      updateUser: "updateUser"
    }),
    updateProfile() {
      const body = {
        Name: this.customer.Name,
        Surname: this.customer.Surname
      };
      console.log(body);
      const response = customerServices.updateUser(body);
    },
    notifyVue(verticalAlign, horizontalAlign) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message: "Profile information has been changed, reload a page",
        timeout: 30000,
        icon: "now-ui-icons ui-1_bell-53",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[2]
      });
    }
  }
};
</script>
<style></style>
