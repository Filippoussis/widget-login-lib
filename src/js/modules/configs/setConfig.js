const setConfig = (config) => {
  window.roox_config_login = {
    isLibMod: true,
    client_id: config.client_id,
  };
};

export { setConfig };
