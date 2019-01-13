<template >
    <div class="news_info">
        <span>
            newscode : {{mynews._id}}  /
        </span>
        <span>
            newsCategory : {{ mynews.newsCategory }}  /
        </span>
        <time>newsPublisheDate : {{mynews.datePublished }}</time>
    </div>
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

