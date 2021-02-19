import React from 'react';
import Checkbox from './Checkbox';


export default {
  title: 'Form/Checkbox',

  parameters: {
    component: Checkbox,
  },
};

export const _Default = () => <Checkbox />;

_Default.story = {
    name: 'Checkbox',
};
