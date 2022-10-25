<template>
    <div class="page-search">
        <div class="columns is-multline">
            <div class="column is-12">
                <h1 class="title">Search</h1>
                <h2 class="is-size-5 has-text-grey">Search term: {{ query }}</h2>
            </div>

            <ProductBox 
                v-for="product in products"
                v-bind:key="product.id"
                v-bind:product="product"
            />
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox'


export default {
 name: 'Search',
 components: {
    ProductBox
 },

 data() {
    return {
        products: [],
        query: ''
    }
 },

 mounted() {
    document.title = 'Search | Ecome'
 }
}
</script>








