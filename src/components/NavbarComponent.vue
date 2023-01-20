<script>
import cartStore from "../stores/cartStore.js";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(cartStore, ["cart"]),
  },
};
</script>

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand" href="#">香香麵攤</span>
      <button type="button" class="btn nav-link">
        購物車
        <span class="badge rounded-pill bg-danger text-white">5</span>
      </button>
    </div>
  </nav>
</template>
