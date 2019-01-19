<template lang="pug">
    div.content
      button.increase(v-on:click="fontSize++") increase
          i.fa.fa-plus-square(aria-hidden="true")
      button.decrease(v-on:click="fontSize--") decrease
          i.fa.fa-minus-square(aria-hidden="true")
      span  Font size is: {{ fontSize }}
          //- <!-- news uptitle -->
      h2.newsUptitle
          //- {{mynews.uptitle}}
          //- <!-- news title -->
      a(:href="mynews.primaryPicture")
        h1.newsTitle
          //- {{mynews.title}}
          //- <!-- newsPrimaryPic -->
      a.newsPrimaryPic_wrapper(:href="mynews.primaryPicture")
        img.newsPrimaryPic(:src="mynews.primaryPicture" alt="")
          //- <!-- news lead -->
      p.newsLead {{mynews.lead}}
          //- <!-- newscontent -->
      div.newsContent(v-bind:style="{ fontSize: fontSize + 'px' }")
          //- {{mynews.content}}
          div.keywords
              i.fa.fa-tag.fa-rotate-90(aria-hidden="true")
              ul
                li(v-for="tag in mynews.tags" v-bind:key="tag.index")
                  span {{tag}}
                  i.fa.fa-circle(aria-hidden="true")
</template>

<script>
import mainNewsData from '../../data/mainNewsData.json'

export default {
    name:'news',
    data() {
        return {
            mynews : mainNewsData,
            fontSize: 14,
        }
    }
}
</script>

<style lang="scss">
  .newsUptitle {
    font-size: 16px;
    margin: 4px 0px;
  }
  .newsTitle {
    font-size: 18px;
    color: #30285c;
  }
  .newsPrimaryPic_wrapper {
      display: block;
      margin: auto;
      width: 85%;
      img {
          width: 100%;
      }
  }
  .newsLead {
    padding: 8px;
    background-color: #8c8484;
  }
  .newsContent {
      line-height: 26px;
  }
  .keywords {
      margin: 7px 0px;
      border: 1px solid #edecec;
      padding: 5px;
      ul {
          overflow: auto;
          li {
              float: left;
          }
      }
      i {
          color: #41b883;
          float: left;
          font-size: 17px;
      }
      .fa-circle {
          float: left;
          font-size: 7px;
          margin-top: 6px;
          padding: 0px 2px;
      }
      span {
          float: left;
          padding: 0px 4px;
      }
      .fa-tag {
          margin-top: 6px;
          padding-right: 6px;
          box-sizing: border-box;
      }
  }
</style>


