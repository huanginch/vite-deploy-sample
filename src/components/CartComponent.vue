<template>
  <div class="bg-light my-4 p-4">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td>
            <a
              href="#"
              class="text-dark text-decoration-none"
              @click.prevent="removeProductFromCart(item.id)"
              >x</a
            >
          </td>
          <td>
            <img :src="item.product.imageUrl" class="table-img" alt="" />
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <select
              :value="item.qty"
              @change="(event) => setCartQty(item.id, event)"
              class="form-select"
              aria-label="Default select example"
            >
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </td>
          <td class="text-end">$ {{ item.subTotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額NT$ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from "../stores/cartStore.js";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  methods: {
    ...mapActions(cartStore, ["removeProductFromCart", "setCartQty"]),
  },
};
</script>
