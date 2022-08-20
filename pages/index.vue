<template> 
    <Table :lists="comments" :itemsAmount="10" /> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(["comments"]),
  },
  methods: {
    ...mapActions(["getComments"]),
  },
  mounted(){
    this.getComments()
  }
}
</script>

<style>

</style>