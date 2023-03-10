import React from 'react';
import { AlertOctagon } from 'react-feather';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textbox } from '..';

import type { TextboxProps } from '..';

export default {
  title: 'molecules/Textbox',
  component: Textbox,
} as ComponentMeta<typeof Textbox>;

const TextboxStory: ComponentStory<typeof Textbox> = ({ ...args }) => (
  <>
    <Textbox
      {...args}
      label="readonly textbox"
      disabled="readonly"
      value={100}
      unit="명"
    />
    <Textbox
      {...args}
      label="large number textbox"
      type="large-number"
      value={undefined}
    />
    <Textbox {...args} type="number" value={undefined} />
    <Textbox {...args} unit={<AlertOctagon />} />
  </>
);

export const Default = TextboxStory.bind({});

Default.args = {
  placeholder: 'Textbox',
  width: '300px',
  label: 'textbox',
  validation: (value?: string) => {
    if (!value) {
      return 'Value is required';
    }
  },
} satisfies TextboxProps;
