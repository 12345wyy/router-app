<template>
    <div id="bar">
        <h1>我是bar</h1>
        <p>id是：{{this.$route.params.id}}</p>
        <p>name是：{{this.$route.params.name}}</p>
    </div>
</template>

<script>
export default {
  created: function() {
    console.log(this.$route.params);
  }
};
</script>

<style>
</style>
