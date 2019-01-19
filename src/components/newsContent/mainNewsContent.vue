<template lang="pug">
    div.main_news_content
        newsInfo
        news
        sendComment
        commentsList
</template>

<script>
  import newsInfo from './newsInfo.vue';
  import news from './news.vue';
  import sendComment from './sendComment.vue';
  import commentsList from './commentsList.vue';

  export default {
      name: 'mainNewsContent',
      components: {
          newsInfo,
          news,
          sendComment,
          commentsList,
      }
  }
</script>

