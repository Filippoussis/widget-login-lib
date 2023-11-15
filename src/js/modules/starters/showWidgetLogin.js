import { setConfig } from '../configs/setConfig';
import { createDownloadScript } from '../login/createDownloadScript';
import { createRootContainer } from '../login/createRootContainer';

const showWidgetLogin = (host, container, config) => {
  setConfig(config);
  createRootContainer(container);
  createDownloadScript(host);
};

export { showWidgetLogin };
