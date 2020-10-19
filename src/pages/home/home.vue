<template>
  <div class="home">
    <h1>{{ msg }} Page</h1>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {

    },
    mixins: [],
    props: {
      msg: {
        type: String,
        default: 'Home'
      }
    },
    data: function () {
      return {

      }
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {}
</style>
