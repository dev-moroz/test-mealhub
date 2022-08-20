<template>
  <div class="container">
    <template v-if="listLength" style="width: 100%">
      <table id="table-lists">
        <tr id="head">
          <th id="sort" @click="sortById()">id <span>sort</span></th>
          <th>name</th>
          <th>email</th>
        </tr>
        <tr v-for="(item, i) in partList" :key="i">
          <td class="sort"><strong class="mobile-head">id: </strong> {{ item.id }}</td>
          <td>
            <NuxtLink :to="`/${item.id}`"><strong class="mobile-head">name: </strong> {{ item.name }}</NuxtLink>
          </td>
          <td><strong class="mobile-head">email: </strong> {{ item.email }}</td>
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

<style scoped>
#sort span {
  font-size: 12px;
  color: gray;
}

#sort:hover {
  cursor: pointer;
}

th:first-child {
  border-top-left-radius: 10px;
}

th:last-child {
  border-top-right-radius: 10px;
  border-right: none;
}

tr:last-child td:first-child {
  border-radius: 0 0 0 10px;
}

tr:last-child td:last-child {
  border-radius: 0 0 10px 0;
}
@media screen and (max-width: 720px) {
  tr:last-child td:first-child {
    border-radius: 0;
  }

  tr:last-child td:last-child {
    border-radius: 0;
  }
}
</style>
