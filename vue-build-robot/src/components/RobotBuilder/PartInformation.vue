<template>
  <div>
    <h1>{{ part.title }}</h1>
    <p>{{ part.description }}</p>
  </div>
</template>
<script lang="js">
import getParts from '../../mixins/getParts'


export default {
  name:"PartInformation",
  mixins: [getParts],
  computed: {
    part() {
      const {partType, id} = this.$route.params
      return this.parts[partType].find(part => part.id === +id)
    }
  },
}
</script>
<style scoped lang="css"></style>
