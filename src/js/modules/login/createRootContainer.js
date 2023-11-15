const createRootContainer = (container = 'roox-widget') => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', 'roox-root');

  const clientContainer = document.getElementById(container);
  clientContainer.append(rootContainer);
};

export { createRootContainer };
