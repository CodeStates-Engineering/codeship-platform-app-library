import { AlertOctagon } from 'react-feather';

import type { Meta, StoryObj } from '@storybook/react';

import { Textbox } from '.';

const meta: Meta<typeof Textbox> = {
  title: 'molecules/Textbox',
  component: Textbox,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: 'Textbox',
    label: 'Textbox',
    validationTrigger: 'onChange',
    labelStyle: {
      fontSize: 'small',
      fontWeight: 500,
      direction: 'column',
    },
    inputStyle: {
      width: '300px',
      fontSize: 'normal',
      fontWeight: 500,
      borderRadius: '8',
      size: 'large',
    },
    validation: (value?: string | number) => {
      if (!value) {
        return 'Value is required';
      }
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textbox>;

export const Default: Story = {
  render: (args) => (
    <>
      <Textbox {...args} label="Readonly" value={100} unit="명" readOnly />
      <Textbox
        {...args}
        label="Large number"
        type="large-number"
        value={undefined}
        description="테스트"
      />
      <Textbox
        {...args}
        label="Phone number"
        type="phone-number"
        value={undefined}
        description="테스트"
      />
      <Textbox
        {...args}
        label="Business number"
        type="business-number"
        value={undefined}
      />
      <Textbox {...args} type="number" label="Number" value={undefined} />
      <Textbox {...args} unit={<AlertOctagon />} />
    </>
  ),
};
