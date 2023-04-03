import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '..';
import { Button } from '../../../atoms';

import type { ModalProps } from '..';

export default {
  title: 'organisms/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const ModalStory: ComponentStory<typeof Modal> = (args) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <Button
        onClick={() => {
          navigate('/?tab=1');
        }}
      >
        Open
      </Button>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia. Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula, suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae scelerisque egestas. Praesent hendrerit pharetra purus, at elementum tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim non est nec, ultrices pulvinar est.

Fusce ac accumsan turpis, eget fermentum augue. Curabitur odio massa, tincidunt vitae condimentum nec, iaculis et augue. Nunc sapien eros, congue sit amet enim sed, malesuada elementum felis. Curabitur auctor, magna egestas tincidunt tristique, nisl enim malesuada felis, eu laoreet ligula urna in sapien. Vestibulum commodo tincidunt felis, eget euismod sapien lacinia nec. Sed a quam diam. Maecenas in tortor dolor. Mauris eros tortor, tincidunt quis blandit vitae, finibus ut augue. Nunc ac facilisis sem. Suspendisse maximus eros aliquet blandit volutpat. Aenean ac tortor rhoncus, venenatis diam sit amet, porta tortor. Sed sit amet ante sit amet lectus sollicitudin pretium. Sed a odio ligula. Curabitur porta ex sit amet mauris condimentum finibus. Nam in augue dolor. Vivamus at purus sed augue iaculis lacinia.

Duis congue sem nisi, non cursus tortor porttitor non. Morbi commodo consectetur erat et aliquet. Quisque ullamcorper faucibus neque a luctus. Aliquam semper tortor lorem. Nunc ac ante eu velit porta dapibus et maximus libero. Donec non magna eu dolor ullamcorper pulvinar eget sed urna. Ut condimentum velit non nibh sagittis, ac pharetra nisi sollicitudin. Mauris blandit suscipit sapien. Etiam at turpis quis mauris lacinia semper quis ac tellus. Curabitur ut pretium odio.

Sed nunc eros, faucibus id ipsum et, ultricies iaculis nisl. Nunc pretium, enim a ornare malesuada, enim sapien venenatis risus, in facilisis nibh dolor nec mi. Etiam ut lorem dictum lorem vehicula dapibus ac in dui. Nunc dignissim a quam egestas pharetra. Nunc rutrum ipsum nec quam ultrices ultrices. Donec sed justo vel nunc tempor accumsan. Mauris maximus sodales bibendum. Aliquam non odio convallis, efficitur velit non, convallis augue. Sed id arcu sem. Donec interdum leo nunc, id condimentum ligula fringilla non. Nullam eros sapien, ultricies nec felis ac, mattis ullamcorper quam. Quisque at aliquam neque, mollis pellentesque turpis. Cras at arcu vitae quam fermentum volutpat.

Nunc eu sapien nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tincidunt libero vitae ante bibendum pellentesque. Mauris tempus bibendum orci, non mattis nisi. Phasellus fringilla ut nisi ultrices convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus est ut enim molestie, in condimentum eros aliquet.`}
      <Modal
        {...args}
        opened={search.includes('?tab=')}
        onClose={() => {
          navigate('/');
        }}
      />
    </div>
  );
};

export const Default = ModalStory.bind({});
const defaultArgs: ModalProps = {
  tabItems: [
    {
      label: 'Tab 1',
      to: '/?tab=1',
    },
    {
      label: 'Tab 2',
      to: '/?tab=2',
    },
    {
      label: 'Tab 3',
      to: '/?tab=3',
    },
    {
      label: 'Tab 4',
      to: '/?tab=4',
    },
  ],
  children: (
    <>
      <section>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia. Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula, suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae scelerisque egestas. Praesent hendrerit pharetra purus, at elementum tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim non est nec, ultrices pulvinar est.

  Fusce ac accumsan turpis, eget fermentum augue. Curabitur odio massa, tincidunt vitae condimentum nec, iaculis et augue. Nunc sapien eros, congue sit amet enim sed, malesuada elementum felis. Curabitur auctor, magna egestas tincidunt tristique, nisl enim malesuada felis, eu laoreet ligula urna in sapien. Vestibulum commodo tincidunt felis, eget euismod sapien lacinia nec. Sed a quam diam. Maecenas in tortor dolor. Mauris eros tortor, tincidunt quis blandit vitae, finibus ut augue. Nunc ac facilisis sem. Suspendisse maximus eros aliquet blandit volutpat. Aenean ac tortor rhoncus, venenatis diam sit amet, porta tortor. Sed sit amet ante sit amet lectus sollicitudin pretium. Sed a odio ligula. Curabitur porta ex sit amet mauris condimentum finibus. Nam in augue dolor. Vivamus at purus sed augue iaculis lacinia.
  
  Duis congue sem nisi, non cursus tortor porttitor non. Morbi commodo consectetur erat et aliquet. Quisque ullamcorper faucibus neque a luctus. Aliquam semper tortor lorem. Nunc ac ante eu velit porta dapibus et maximus libero. Donec non magna eu dolor ullamcorper pulvinar eget sed urna. Ut condimentum velit non nibh sagittis, ac pharetra nisi sollicitudin. Mauris blandit suscipit sapien. Etiam at turpis quis mauris lacinia semper quis ac tellus. Curabitur ut pretium odio.
  
  Sed nunc eros, faucibus id ipsum et, ultricies iaculis nisl. Nunc pretium, enim a ornare malesuada, enim sapien venenatis risus, in facilisis nibh dolor nec mi. Etiam ut lorem dictum lorem vehicula dapibus ac in dui. Nunc dignissim a quam egestas pharetra. Nunc rutrum ipsum nec quam ultrices ultrices. Donec sed justo vel nunc tempor accumsan. Mauris maximus sodales bibendum. Aliquam non odio convallis, efficitur velit non, convallis augue. Sed id arcu sem. Donec interdum leo nunc, id condimentum ligula fringilla non. Nullam eros sapien, ultricies nec felis ac, mattis ullamcorper quam. Quisque at aliquam neque, mollis pellentesque turpis. Cras at arcu vitae quam fermentum volutpat.
  
  Nunc eu sapien nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tincidunt libero vitae ante bibendum pellentesque. Mauris tempus bibendum orci, non mattis nisi. Phasellus fringilla ut nisi ultrices convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus est ut enim molestie, in condimentum eros aliquet.`}</section>
      <footer>Lorem ipsum dolor sit amet</footer>
    </>
  ),
};
Default.args = defaultArgs;
