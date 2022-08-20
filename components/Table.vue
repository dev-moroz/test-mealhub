<template>
  <div class="container">
    <template v-if="listLength" style="width: 100%">
      <table>
        <tr>
          <th id="sort" @click="sortById()">id <span>sort</span></th>
          <th>name</th>
          <th>email</th>
        </tr>
        <tr v-for="(item, i) in partList" :key="i">
          <td class="sort">{{ item.id }}</td>
          <td>
            <NuxtLink :to="`/${item.id}`">{{ item.name }}</NuxtLink>
          </td>
          <td>{{ item.email }}</td>
        </tr>
      </table>

      <Pagination
        v-if="itemsAmount"
        :pageCount="pageCount"
        :allPagination="allPagination"
        :itemLength="lists.length"
        :itemsAmount="itemsAmount"
        @newPageCount="onClickChild"
      />
    </template>

    <Spinner v-else />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    itemsAmount: Number,
    lists: Array,
  },
  name: "Table",
  data() {
    return {
      pageCount: 1,
    };
  },
  methods: {
    ...mapActions(["sortById"]),
    onClickChild(value) {
      this.pageCount = value;
    },
  },

  computed: {
    partList() {
      return this.lists.slice(
        this.itemsAmount * (this.pageCount - 1),
        this.itemsAmount * this.pageCount
      );
    },
    listLength() {
      return this.partList.length > 0;
    },
  },
};
</script>

<style>
#sort span {
  font-size: 12px;
  color: gray;
}

#sort:hover {
  cursor: pointer;
}

.sort {
  text-align: center;
}
</style>
