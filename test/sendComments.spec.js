
import expect from 'expect';

import { shallowMount } from '../node_modules/@vue/test-utils';
import sendComment from '../src/components/newsContent/sendComment.vue';

const { log } = console;

describe('send Comments ', () => {
  // send comment succesfully variables shoud set to null
  it('send comment succesfully1', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      Name: 'sara',
      opinion: 'something',
      email: 'somethingElse',
    });
    wrapper.find('form').trigger('submit.prevent');
    setTimeout(() => {
      expect(wrapper.vm.opinion).toBe(null);
      expect(wrapper.vm.Name).toBe(null);
      expect(wrapper.vm.email).toBe(null);
    }, 2000);
  });

  // send comment succesfully2 errors length shoud be 0
  it('send comment succesfully2', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      Name: 'sara',
      opinion: 'something',
      email: 'somethingElse',
    });
    wrapper.find('form').trigger('submit.prevent');
    // expect(wrapper.vm.errors).toBe([]);
    expect(wrapper.vm.errors.length).toBe(0);
  });

  // send comment unsuccesfully email not intered error has value empty email
  it('send comment unsuccesfully email error', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      Name: 'sara',
      opinion: 'something',
    });
    wrapper.find('form').trigger('submit.prevent');
    // expect(wrapper.vm.opinion).toBe(null);
    // log(wrapper.vm.errors);
    expect(wrapper.find('.error_wrap').exists()).toBe(true);
  });
  // send comment unsuccesfully email not intered email empty
  it('send comment unsuccesfully email error', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      Name: 'sara',
      opinion: 'something',
    });
    wrapper.find('form').trigger('submit.prevent');
    // expect(wrapper.vm.opinion).toBe(null);
    // log(wrapper.vm.email);
    expect(wrapper.vm.email).toBe('');
  });
  // send comment unsuccesfully email not intered opinion empty
  it('send comment unsuccesfully opinion error2', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      Name: 'sara',
      email: 'somethingElse',
    });
    wrapper.find('form').trigger('submit.prevent');
    // expect(wrapper.vm.opinion).toBe(null);
    // log(wrapper.setData());
    expect(wrapper.vm.opinion).toBe('');
  });
});
