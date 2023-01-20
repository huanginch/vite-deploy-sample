<template>
  <div class="row row-cols-3 my-4 g-2">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <div class="card">
        <img
          :src="product.imageUrl"
          class="card-img-top"
          :alt="product.title"
        />
        <div class="card-body">
          <h5 class="card-title">
            {{ product.title }}
            <span class="float-end">$ {{ product.price }}</span>
          </h5>
          <a
            href="#"
            class="btn btn-outline-primary w-100"
            @click.prevent="addProductToCart(product.id)"
            >加入購物車</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productStore from "../stores/productStore.js";
import cartStore from "../stores/cartStore.js";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(productStore, ["sortProducts"]),
  },
  methods: {
    ...mapActions(cartStore, ["addProductToCart"]),
  },
};
</script>
