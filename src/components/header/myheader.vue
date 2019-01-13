<template>
    <div class="outer_main_header ">
        <div class="logo_wrapper">
            <logo/>
        </div>
        <div class="social_wrapper">
            <infoHeader/>
        </div>

    </div>
</template>

<script>
  import logo from './logo.vue'
  import infoHeader from './infoHeader.vue'

  export default {
    components: {
      logo,
      infoHeader,
    },
  }
</script>

<style lang="scss" scoped>
  .outer_main_header {
      background-color:#15243e;
  }
</style>


