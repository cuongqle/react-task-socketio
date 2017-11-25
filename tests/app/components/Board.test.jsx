import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Board} from '../../../src/app/components/Board';
import {Provider} from "react-redux";
import {createStore} from '../Skeleton.test';

Enzyme.configure({ adapter: new Adapter() });

describe('Board component: ', () => {
  let wrapper;
  let initialState = {
    tasks: []
  };

  beforeEach(() => {
    wrapper = mount(
        <Provider store={createStore(initialState)}>
          <Board/>
        </Provider>
    );
  });

  it("should be rendered", () => {
    expect(!!wrapper).to.be.true;
  });

  it("should able to find element with id 'header'", () => {
    expect(wrapper.find('#header')).to.exist;
  });

  it("should able to find element with id 'task-management'", () => {
    expect(wrapper.find('#task-management')).to.exist;
  });

  it("should able to find element with class name 'new-task'", () => {
    expect(wrapper.find('new-task')).to.exist;
  });
});