import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam iure dolorum quis! Repellat illo nisi similique mollitia minus quasi, magni deleniti laborum dolores blanditiis est, error, deserunt fuga soluta fugit.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
