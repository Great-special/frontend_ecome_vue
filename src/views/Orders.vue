<template>
  <div class="page-order">
    <div class="column is-12">
      <h1 class="title">My Orders</h1>

      <OrderSummary 
        v-for="order in orders"
        v-bind:key="order.id"
        v-bind:order="order" />
    </div>
  </div>
</template>

<script>
  import OrderSummary from '@/components/OrderSummary'
export default {
    name: 'Order',
    components: {
      OrderSummary
    },
    mounted() {
      document.title = 'My Orders | Ecome'

      this.getMyOrders()
    }
}
</script>

<style>

</style>