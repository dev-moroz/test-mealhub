<template>
  <ul class="pagination">
    <template v-if="pageCount > 1">
      <li @click="firstPage()">&lt;&lt;</li>
      <li @click="prevPage()">{{ pageCount - 1 }}</li>
    </template>
    <li class="chosen-page">{{ pageCount }}</li>
    <template v-if="pageCount < allPagination">
      <li @click="nextPage()">{{ pageCount + 1 }}</li>
      <li @click="lastPage()">&gt;&gt;</li>
    </template>
  </ul>
</template>

<script>
export default {
   props: {
      pageCount: Number,
      allPagination: Number,
      itemLength: Number,
      itemsAmount: Number
   },
   methods: {
    lastPage() {
      if (this.pageCount === this.allPagination) return;
      this.pageCount = this.allPagination;
      this.newCountPage()
    },
    firstPage() {
      if (this.pageCount === 1) return;
      this.pageCount = 1;
      this.newCountPage()
    },
    nextPage() {
      this.pageCount += 1
      this.newCountPage()
    },
    prevPage() {
      this.pageCount -= 1
      this.newCountPage()
    },
    newCountPage(){
      this.$emit("newPageCount", this.pageCount)
    }
  },
  computed: {
    allPagination() {
      return Math.round(this.itemLength / this.itemsAmount);
    },
  }
};
</script>

<style>
.chosen-page {
  background-color: #aff8e2;
  color: rgb(0, 0, 0);
  border-radius: 5px;
}

.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
ul > li {
  margin: 5px;
  list-style: none;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 5px;
}

ul > li:hover {
  cursor: pointer;
  background-color: #ddd;
}
</style>
