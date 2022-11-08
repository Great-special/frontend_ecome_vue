<template>
  <div class="page-product">
    <div class="colums is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Products</h2>

        <ProductBox
          v-for="product in product.products"
          v-bind:key="product.id"
          v-bind:product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";
import ProductBox from "@/components/ProductBox.vue";

export default {
  name: "Products",

  data() {
    return {
      product: {
        products: [],
      },
    };
  },

  components: {
    ProductBox,
  },

  mounted() {
    document.title = "Products | Ecome";
    this.getProducts();
  },

  watch: {
    $route(to, from) {
      if (to.name === "Products") {
        this.getProducts();
      }
    },
  },

  methods: {
    async getProducts() {
      this.$store.commit("setIsLoading", true);

      await axios
        .get("/api/v1/product-list/")
        .then((response) => {
          this.product.products = response.data;
        })
        .catch((error) => {
          console.log(error);
          toast({
            message: "Something went wrong. Please try again",
            type: "is-danger",
            dismissible: true,
            pauseOnHover: true,
            position: "bottom-right",
          });
        });

      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>

<style>
</style>