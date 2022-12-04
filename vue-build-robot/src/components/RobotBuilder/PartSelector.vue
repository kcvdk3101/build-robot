<template>
  <div :class="['part', position]">
    <img @click="showPartInformation()" :src="selectedPart.src" />
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <span v-pin class="sale" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script>
import pinDirective from "../../directives/pin-directive";
import positionsArray from "../../constants/position";

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: "PartSelector",
  directives: {
    pin: pinDirective,
  },
  props: {
    specificParts: {
      type: Array,
      required: true,
    },
    position: {
      type: String,
      required: true,
      validator(value) {
        return positionsArray.includes(value);
      },
    },
  },
  data() {
    return { selectedPartIndex: 0 };
  },
  created() {
    this.emitSelectedPart();
  },
  computed: {
    selectedPart() {
      return this.specificParts[this.selectedPartIndex];
    },
  },
  methods: {
    emitSelectedPart() {
      this.$emit("partSelected", this.selectedPart);
    },
    showPartInformation() {
      this.$router.push({
        name: "part-information",
        path: "/part-info",
        params: {
          partType: this.selectedPart.type,
          id: this.selectedPart.id,
        },
      });
    },
    selectNextPart() {
      this.selectedPartIndex = getNextValidIndex(
        this.selectedPartIndex,
        this.specificParts.length
      );
      this.emitSelectedPart();
    },
    selectPreviousPart() {
      this.selectedPartIndex = getPreviousValidIndex(
        this.selectedPartIndex,
        this.specificParts.length
      );
      this.emitSelectedPart();
    },
  },
};
</script>

<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid var(--vt-c-white-mute);
}
.sale {
  color: white;
  background-color: red;
  padding: 3px;
}
.part img {
  cursor: pointer;
  width: 165px;
}

.top {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.bottom {
  border-top: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.left .prev-selector:after,
.right .prev-selector:after {
  content: "\25B2";
}
.left .next-selector:after,
.right .next-selector:after {
  content: "\25BC";
}
.top .prev-selector:after,
.bottom .prev-selector:after,
.center .prev-selector:after {
  content: "\25C4";
}
.top .next-selector:after,
.bottom .next-selector:after,
.center .next-selector:after {
  content: "\25BA";
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -4px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.highlight {
  border: 1px solid red;
}
</style>
