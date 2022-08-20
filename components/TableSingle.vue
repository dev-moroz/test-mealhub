<template>
  <div class="container" id="table-single">
    <template v-if="lists">
      <table>
        <tr>
          <th>id</th>
          <td>{{ lists.id }}</td>
         </tr>
         <tr>
          <th>email</th>
          <td>{{ lists.email }}</td>
        </tr>
        <tr>
          <th>name</th>
          <td>{{ lists.name }}</td>
         </tr>
         <tr>
          <th>body</th>
          <td>{{ lists.body }}</td>
        </tr>
      </table>
      <NuxtLink id="go-back" to="/">go back</NuxtLink>
    </template>

    <Spinner v-else />
  </div>
</template>

<script>
export default {
  props: {
    lists: Object,
  },
};
</script>

<style scoped>
#go-back {
  margin: 20px auto 0 auto;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  background-color: antiquewhite;
  color: #000;
  display: flex;
  justify-content: center;
  max-width: 100px;
}
tr:first-child th{
   border-top-left-radius: 10px;
}
tr:last-child th{
   border-bottom-left-radius: 10px;
}

tr:first-child td{
   border-top-right-radius: 10px;
}
tr:last-child td{
   border-bottom-right-radius: 10px;
}
</style>