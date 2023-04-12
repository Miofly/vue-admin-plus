import setting from '@/setting';
import type { ProjectConfig } from '@/setting';
import { deepMerge } from '@vft/utils';
import { defineStore } from 'pinia';
import pinia from '../';

interface AppState {
  projectConfig: ProjectConfig;
}

export const useAppStore = defineStore({
  id: 'app',
  persist: {
    paths: ['projectConfig']
  },
  state: (): AppState => ({
    projectConfig: setting
  }),
  getters: {
    getProjectConfig(): ProjectConfig {
      return this.projectConfig;
    }
  },
  actions: {
    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      this.projectConfig = deepMerge(this.projectConfig || {}, config);
    }
  }
});

export function useAppStoreWithOut() {
  return useAppStore(pinia);
}
