module.exports = {
  stories: ["../components/**/src/lib/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/angular",
  core: {
    builder: "webpack5",
  },
};
