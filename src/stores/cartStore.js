import { defineStore } from "pinia";
import productStore from "./productStore.js";

export default defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addProductToCart(productId, qty = 1) {
      //取得已經有加入的購物車產品資料
      //進行判斷, 如果已經有加入購物車則該產品的數量+1, 如果沒有則新增一筆資料
      const currentCart = this.cart.find(
        (item) => item.productId === productId
      );

      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
      }
    },
    setCartQty(id, event) {
      const currentCart = this.cart.find((item) => item.id === id);
      currentCart.qty = event.target.value * 1; //轉成數字
    },
    removeProductFromCart(id) {
      //方法一: 用findIndex找到要刪除的item id, 再用splice去掉要刪除的item, 會直接修改原陣列
      // const index = this.cart.findIndex(item => item.id === id);
      // this.cart.splice(index, 1);
      //方法二: 用filter去掉要刪除的item, 直接獲得新的陣列
      this.cart = this.cart.filter((item) => item.id !== id);
    },
  },
  getters: {
    cartList: ({ cart }) => {
      //1.購物車的產品資訊需要整合產品資料
      //2.需要計算小計
      //3.需要計算總價
      const { products } = productStore();
      const carts = cart.map((item) => {
        //找到對應的產品資料
        const product = products.find((p) => p.id === item.productId);
        return {
          ...item,
          product,
          subTotal: product.price * item.qty,
        };
      });
      console.log(carts);

      const total = carts.reduce((total, item) => total + item.subTotal, 0);

      return {
        carts, //列表
        total, //總價
      };
    },
  },
});
