export default () => {
  const components = {};

  return {
    add(title, component) {
      components[title] = component;
    },
    build() {
      return components;
    },
  };
};
