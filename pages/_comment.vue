<template>
     <TableSingle :lists="countComment"/>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["comments"]),
    countComment() {
      let idComment = Number(this.$route.path.slice(1));
      return this.comments.find((item) => item.id === idComment);
    },
  },
  methods: {
    ...mapActions(["getComments"]),
  },
  mounted() {
    this.getComments();
  },
};
</script>
<style>
.container #reload-page {
  text-align: center;
}
</style>
