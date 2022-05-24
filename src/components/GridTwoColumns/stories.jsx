import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid two columns',
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia optio deserunt necessitatibus, eum, beatae nulla accusamus asperiores unde quas quasi rerum sequi doloremque error ab blanditiis a assumenda ut quae?`,
    srcImg: 'assets/image/javascript.svg',
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
