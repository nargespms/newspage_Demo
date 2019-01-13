
import expect from 'expect';

import { shallowMount } from '../node_modules/@vue/test-utils';
import survey from '../src/components/content/survey.vue';


describe('survey', () => {
  // **********************no effected in coverage**********************
  // for checking value of radio button One
  it('when choosing one', () => {
    const wrapper = shallowMount(survey);
    wrapper.find('#one').trigger('click');
    expect(wrapper.find('.choosed_item').text()).toMatch('you chosed : One');
  });
  // for checking value of radio button Two
  it('when choosing two', () => {
    const wrapper = shallowMount(survey);
    wrapper.find('#two').trigger('click');
    expect(wrapper.find('.choosed_item').text()).toMatch('you chosed : Two');
  });
  // when choosing none
  it('when choosing none', () => {
    const wrapper = shallowMount(survey);
    wrapper.find("[type='submit']").trigger('click');
    expect(wrapper.find('#survey_msg').exists()).toBe(true);
  });
  // when choosing none2
  it('when choosing none choosing item', () => {
    const wrapper = shallowMount(survey);
    wrapper.find("[type='submit']").trigger('click');
    expect(wrapper.find('.choosed_item').text()).toMatch('you chosed :');
  });
  // when choosing none2
  it('when choosing none number of people', () => {
    const wrapper = shallowMount(survey);
    wrapper.find("[type='submit']").trigger('click');
    expect(wrapper.find('.numpart').text()).toMatch('participated people : 0');
  });
  // **********************no effected in coverage**********************
  // if choosing any counter shoud increase (choosed item.length != 0)
  it('should increase number of people', () => {
    const wrapper = shallowMount(survey);
    wrapper.find("[type='radio']").trigger('click');
    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.vm.counter).toBe(1);
  });
  // if choosing any counter shoud increase (choosed item.length == 0)
  it('should not increase number of people  ', () => {
    const wrapper = shallowMount(survey);
    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.vm.counter).toBe(0);
    // console.log(wrapper.vm.choosed);
  });
  // **********************no effected in coverage**********************
  // if choosing any counter shoud increase
  it('should not increase number of people  ', () => {
    const wrapper = shallowMount(survey);
    console.log(wrapper.vm.choosed.length);
    expect(wrapper.vm.choosed.length).toBe(0);
  });
  // **********************no effected in coverage**********************
});
