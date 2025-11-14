/** @module Scripts root module
 *  @since 2025.11.13, 20:32
 *  @changed 2025.11.14, 23:15
 */

import './project-info.scss';
import './variables/variables-expose.scss';
import './styles';

import { initAddresses } from './Addresses';
import { initConfirmForms } from './ConfirmForm';
import { isDebug, isDev } from './core/constants';
import { removeDevNoteBlocks } from './DevNote';
import { cleanupFooter } from './Footer';

/** Print app info */
function printAppInfo() {
  const appVersion = process.env.APP_VERSION;
  // eslint-disable-next-line no-console
  const consoleMethod = isDebug || isDev ? console.warn : console.log;
  consoleMethod.call(console, appVersion);
}

/** Init all the page */
function initPage() {
  // Start subcomponents...
  initAddresses();
  initConfirmForms();
  removeDevNoteBlocks();
  cleanupFooter();
  // Forcibely update components' dimensions
  window.dispatchEvent(new Event('resize'));
}

printAppInfo();

window.addEventListener('load', initPage);
