<template lang="pug">
    div.news_info
      span newscode : {{mynews._id}}
      span newsCategory : {{ mynews.newsCategory }}
      time newsPublisheDate : {{mynews.datePublished }}
</template>

<script>
  import mainNewsData from '../../data/mainNewsData.json'

  export default {

      name: 'newsInfo',
      data() {
          return {
              mynews:mainNewsData,
          }
      }

  }
</script>

<style lang="scss" scoped>
  .news_info {

      background-color: #2ab7ae;
      padding: 6px;
      margin-bottom: 4px;
  }
</style>

