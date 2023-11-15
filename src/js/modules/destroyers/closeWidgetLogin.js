const closeWidgetLogin = () => {
  const container = document.getElementById('roox-root');
  const script = document.getElementById('script-tag-login');
  container.remove();
  script.remove();
};

export { closeWidgetLogin };
