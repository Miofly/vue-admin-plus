import { defineStore } from 'pinia';
import pinia from '../';

export interface UpdateList {
  id: string;
  listTitle: string;
  listSubTitle?: string;
}

export interface PwasState {
  /** 是否有新版本 */
  hasNewVersion: boolean;
  /** 刷新的状态，当为true的时候，刷新不显示阻止 */
  refreshStatus: boolean;
  /** 是否显示添加到桌面 */
  showAddDesk: boolean;
  /** pwa是否安装 */
  isAppInstalled: boolean;
  /** 是否为pwa引用 */
  isPwa: boolean;
  /** 更新版本的内容列表 */
  updateLogs?: UpdateLogs;
  /** 获取到的新的更新版本的内容列表 */
  newUpdateLogs?: UpdateLogs;
  /** 更新内容的版本 */
  releaseVersion: string;
  /** 弹窗按钮的样式区别 */
  isButtonRefresh: boolean;
  /** 更新日志弹窗是否关闭 */
  hasCloseModal: boolean;
  /** 显示活动弹窗 */
  showActivityModal: boolean;
  /** 显示会员到期提醒弹窗 */
  showVipCountDownModal: boolean;
}

export interface UpdateLogs {
  /** 发布日期 */
  releaseDate: string;
  /** 更新标题 */
  title: string;
  /** 更新短描述 */
  desc: string;
  /** 是否仅修复bug */
  isFix?: boolean;
  /** 更新描述列表 */
  updateList: UpdateList[];
}

export const usePwasStore = defineStore({
  id: 'pwas',
  state: (): PwasState => ({
    // 是否有新版本页面
    hasNewVersion: false,
    // 刷新页面的状态，用于控制发现新本版刷新时不提示离开页面弹窗
    refreshStatus: false,
    showAddDesk: false,
    isAppInstalled: false,
    isPwa: false,
    releaseVersion: '',
    isButtonRefresh: false,
    updateLogs: {} as UpdateLogs,
    newUpdateLogs: {} as UpdateLogs,
    // 更新日志弹窗是否关闭
    hasCloseModal: false,
    // 显示活动弹窗
    showActivityModal: false,
    /** 显示会员到期提醒弹窗 */
    showVipCountDownModal: false
  }),
  actions: {
    changeProps (props: Partial<PwasState>) {
      this.$patch(props);
    },
    updateNewReleaseInfo (info: UpdateLogs) {
      this.newUpdateLogs = info;
    },
    updateReleaseInfo (info: UpdateLogs) {
      this.updateLogs = info;
    }
  }
});

export function usePwasStoreWithOut() {
  return usePwasStore(pinia);
}
