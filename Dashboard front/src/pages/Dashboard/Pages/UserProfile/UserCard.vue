<template>
  <card class="card-user">
    <div slot="image" class="image">
      <img src="img/bg5.jpg" alt="..." />
    </div>
    <div>
      <div class="author">
        <a href="#">
          <img class="avatar border-gray" src="img/mike.jpg" alt="..." />
          <h5 class="title">{{ name }} {{ surname }}</h5>
        </a>
        <p class="description">Login: {{ login }}</p>
      </div>
    </div>
    <div slot="footer" class="button-container">
      <n-button href="#" type="neutral" icon round size="lg">
        <i class="fa fa-facebook-square"></i>
      </n-button>
      <n-button href="#" type="neutral" icon round size="lg">
        <i class="fa fa-twitter"></i>
      </n-button>
      <n-button href="#" type="neutral" icon round size="lg">
        <i class="fa fa-google-plus-square"></i>
      </n-button>
    </div>
  </card>
</template>
<script>
import customerServices from "../../../../services/customer.services";
import { mapGetters } from "vuex";

export default {
  props: {
    user: Object
  },
  data() {
    return {
      name: "",
      surname: "",
      login: ""
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      const response = await customerServices.getUser();
      const data = response.data;
      this.name = data.Name;
      this.surname = data.Surname;
      this.login = data.Login;
    }
  }
};
</script>
<style></style>
