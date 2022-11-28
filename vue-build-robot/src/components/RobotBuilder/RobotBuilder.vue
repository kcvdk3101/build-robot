<template>
  <div v-if="parts" class="robot-builder">
    <div class="preview">
      <CollapsibleSection>
        <div class="preview-content">
          <div class="top-row">
            <img :src="defaultRobot.head.src" />
          </div>
          <div class="middle-row">
            <img :src="defaultRobot.leftArm.src" class="rotate-left" />
            <img :src="defaultRobot.torso.src" />
            <img :src="defaultRobot.rightArm.src" class="rotate-right" />
          </div>
          <div class="bottom-row">
            <img :src="defaultRobot.base.src" />
          </div>
        </div>
      </CollapsibleSection>

      <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    </div>
    <div class="robot-name">
      {{ defaultRobot.head.title }}
      <span v-if="defaultRobot.head.onSale" class="sale">Sale!</span>
    </div>
    <div class="robot-parts">
      <div class="top-row">
        <PartSelector
          position="top"
          :specificParts="parts.heads"
          @partSelected="(part) => (defaultRobot.head = part)"
        />
      </div>
      <div class="middle-row">
        <PartSelector
          position="left"
          :specificParts="parts.arms"
          @partSelected="(part) => (defaultRobot.leftArm = part)"
        />
        <PartSelector
          position="center"
          :specificParts="parts.torsos"
          @partSelected="(part) => (defaultRobot.torso = part)"
        />
        <PartSelector
          position="right"
          :specificParts="parts.arms"
          @partSelected="(part) => (defaultRobot.rightArm = part)"
        />
      </div>
      <div class="bottom-row">
        <PartSelector
          position="bottom"
          :specificParts="parts.bases"
          @partSelected="(part) => (defaultRobot.base = part)"
        />
      </div>
    </div>
  </div>
</template>
<script lang="js">
import CollapsibleSection from '../../shared/CollapsibleSection.vue';
import PartSelector from './PartSelector.vue';

export default {
    name: "RobotBuilder",
    created() {
      this.$store.dispatch("getParts");
    },
    props: {
      showPreview: {
        type: Boolean,
        required: true
      },
      robot: {
        type: Object,
        required: true
      },
      robotCart: {
        type: Array,
      },
      isAddedToCart: {
        type: Boolean,
      },
    },
    data() {
        return {
            addedToCart: this.isAddedToCart,
            cart: this.robotCart,
            defaultRobot: this.robot,
            show: this.showPreview
        };
    },
    components: {
      PartSelector,
      CollapsibleSection
    },
    computed: {
        parts() {
            return this.$store.state.parts;
        },
        headBorderStyle() {
            return {
                border: this.defaultRobot.head.onSale ? "3px solid red" : "3px solid #ccc"
            };
        }
    },
    methods: {
        // Add to Cart
        addToCart() {
            const { head, leftArm, rightArm, torso, base } = this.defaultRobot;
            const cost = head.cost + leftArm.cost + rightArm.cost + torso.cost + base.cost;
            this.$emit("robotCart", this.cart.push(Object.assign({}, this.defaultRobot, { cost })));
            this.$emit('isAddedToCart', true)
            this.$store.dispatch('addRobotToCart', {...this.defaultRobot, cost}).then(() => this.$router.push('/cart'))
        }
    },
};
</script>
<style lang="css">
.robot-builder {
  position: relative;
}

.robot-parts {
  margin: 10px 0px;
}

.robot-name {
  margin-top: 20px;
  text-align: center;
  color: var(--color-heading);
}

.preview {
  z-index: 10;
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}

.preview-content {
  margin: 10px 0px;
}

.preview img {
  width: 60px;
  height: 60px;
}

.top-row {
  display: flex;
  justify-content: space-around;
  border-bottom: none;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}

.add-to-cart {
  z-index: inherit;
  width: 100%;
}

.sale {
  color: #bf0000;
}

td,
th {
  text-align: left;
  padding: 5px;
}

th {
  font-weight: bold;
}
</style>
