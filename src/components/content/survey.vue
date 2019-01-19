<template lang="pug">
    form.survey_wrap.clear(@submit.prevent="countPerson()")
        div.clear
            span.survey_question choose one them :)
            div.choices
                input(type="radio" id="one" value="One" v-model="choosed")
                label(for="one") One

                input(type="radio" id="two" value="Two" v-model="choosed")
                label(for="two") Two
        p.choosed_item you chosed : {{ choosed }}
        p.numpart participated people : {{counter }}
        //-  button for submitting
        input.survey_but(type="submit" value="send")
        div.survey_msg {{showMe}}
</template>

<script>
export default {
    name: 'survey',
      data : function() {
          return {
              choosed: [],
              counter: 0,
              showMe : '',
          }
      },
    methods : {
       countPerson () {
         console.log('run heer');
           if (this.choosed.length !== 0 ){
               this.counter = this.counter +1;
                let showMe = "thank you :)";
               console.log(showMe);
           }
           else if (this.choosed.length == 0) {
               document.getElementById("survey_msg").innerHTML = "please choose one the above & try again!"
           }
       }
   }
}
</script>

<style lang="scss" scoped>
.survey_wrap {
    background-color: #ccccc6;
    margin-top: 16px;
    padding: 12px;
}
.survey_question {
    float: left;
}
.choices {
    float: left;
    padding-left: 12px;
}
.survey_but {
	background-color: #e7582a;
	border: 1px solid #df7e56;
	color: #fff;
	border-radius: 2px;
    padding: 4px 12px;
    float: left;
    margin-top: 12px;
}
#survey_msg {
	color: #ea3b16;
	float: left;
	padding-left: 32px;
	padding-top: 6px;
}
</style>


