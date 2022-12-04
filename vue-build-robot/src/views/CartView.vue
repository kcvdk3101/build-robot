<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ $filters.currencyUSD(robot.cost) }}
          </td>
        </tr>
      </tbody>
    </table>

    <h2 class="saved-money">You can saved money on these robots in cart:</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ $filters.currencyUSD(robot.cost) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="js">

export default {
  name: "CartView",
  computed: {
    cart() {
      return this.$store.state.robot.cart
    },
    cartSavedMoney() {
      return this.$store.getters["robot/cartSavedMoney"]
    },
  },
};
</script>

<style scoped lang="css">
td,
th {
  padding: 5px;
}
.saved-money {
  margin-top: 50px;
  text-decoration: overline;
  font-style: italic;
  color: var(--color-primary);
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
</style>
