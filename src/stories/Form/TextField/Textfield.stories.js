import React from 'react';
import Textfield from './Textfield';


export default {
  title: 'Form/Textfield',

  parameters: {
    component: Textfield,
  },
};

export const _Default = () => <Textfield />;

_Default.story = {
    name: 'Textfield',
};
