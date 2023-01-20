<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import CartComponent from "./components/CartComponent.vue";
import ProductComponent from "./components/ProductComponent.vue";

export default {
  components: {
    NavbarComponent,
    CartComponent,
    ProductComponent,
  },
};
</script>

<template>
  <div class="container my-2">
    <NavbarComponent></NavbarComponent>
    <CartComponent></CartComponent>
    <ProductComponent></ProductComponent>
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss";
$primary: "#3eaf7c";

div {
  color: $primary;
}

.table-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
