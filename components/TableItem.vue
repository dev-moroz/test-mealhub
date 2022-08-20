<template>
  <div class="container">
    <template v-if="lists">
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>body</th>
        </tr>
        <tr>
          <td>{{ lists.id }}</td>
          <td>{{ lists.name }}</td>
          <td>{{ lists.email }}</td>
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
</style>