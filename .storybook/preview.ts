import type { Preview } from "@storybook/react";
import "../src/styles/colors.scss";
import "../src/styles/index.scss";
import "../src/styles/mixins.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
