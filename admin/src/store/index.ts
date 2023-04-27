import { piniaHelper } from '@vft/store';
import { name, version } from '../../package.json';

/** 项目名称+版本 */
export const storagePrefixName = name + '_' + version + '_';

const pinia = createPinia();

const { cleanPiniaStorage } = piniaHelper(pinia, storagePrefixName);

export {
  cleanPiniaStorage
};

export default pinia;
