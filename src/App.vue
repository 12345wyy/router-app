<template>
  <div id="app">
    <button @click="barActive(1)">bar</button>
    <button @click="barActive(2)">bar</button>
    <button @click="barActive(3)">bar</button>
    <button @click="fooActive">foo</button>
            <router-view/>

  </div>
</template>
<script>
export default {
  methods: {
    barActive: function(index) {
      // console.log(this.$route);
      this.$router.push({
        // path: "/bar"
        name: "bar",
        params: {
          id: index,
          name: "bar"
        }
      });
    },
    fooActive: function() {
      // console.log();
      this.$router.replace("/foo");
    }
  }
};
</script>
<style>
</style>
