<template>
  <div class="page-order">
    <div class="column is-12">
      <h1 class="title">My Orders</h1>

      <OrderSummary
        v-for="order in orders"
        v-bind:key="order.id"
        v-bind:order="order"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OrderSummary from "@/components/OrderSummary.vue";
export default {
  name: "Order",
  components: {
    OrderSummary,
  },
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    document.title = "My Orders | Ecome";``

    this.getMyOrders();
  },
  methods: {
    async getMyOrders() {
      this.$store.commit("setIsLoading", true);

      await axios
        .get("api/v1/orders/")
        .then(response => {
          this.orders = response.data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>

<style>
</style>