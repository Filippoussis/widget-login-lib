const createDownloadScript = (host = 'psb-demo.demo.rooxteam.com') => {
  const script = document.createElement('script');
  script.setAttribute('id', 'script-tag-login');
  script.setAttribute('src', `https://${host}/widgets/widgets-uidm-login/static/js/bundle.js`);
  document.body.append(script);
};

export { createDownloadScript };
