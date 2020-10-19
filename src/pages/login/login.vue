<template>
  <div class="login">
    <h1>{{ msg }} Page</h1>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    components: {

    },
    mixins: [],
    props: {
      msg: {
        type: String,
        default: 'Login'
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
  .login {}
</style>
