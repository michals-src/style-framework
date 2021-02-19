import React from 'react';
import Colors from './Colors';


export default {
  title: 'Theme/Colors',

  parameters: {
    component: Colors,
  },
};

export const _Default = () => <Colors />;

_Default.story = {
    name: 'Colors',
};
