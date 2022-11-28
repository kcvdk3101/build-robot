<template>
  <RobotBuilder
    :robot="defaultRobot"
    :showPreview="show"
    :robotCart="cart"
    :isAddedToCart="addedToCart"
    @isAddedToCart="(value) => (addedToCart = value)"
    @robotCart="(cart) => (cart = cart)"
  />
</template>
<script>
import RobotBuilder from "../components/RobotBuilder/RobotBuilder.vue";

export default {
  name: "RobotBuilderView",
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      const response = confirm(
        "You have not added your robot to cart, are you sure you want to leave?"
      );
      next(response);
    }
  },
  data() {
    return {
      addedToCart: false,
      cart: [],
      defaultRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {},
      },
      show: true,
    };
  },
  components: {
    RobotBuilder,
  },
};
</script>
