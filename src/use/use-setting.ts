import { computed } from 'vue';
import { useAppStore } from '@/store/modules/app';
import { type ProjectConfig } from '@/setting';

export function useSetting() {
  const appStore = useAppStore();
  const getAppTheme = computed(() => appStore.getProjectConfig.theme);
  const getIsDark = computed(() => appStore.getProjectConfig.theme === 'dark');

  function setRootSetting(setting: DeepPartial<ProjectConfig>) {
    appStore.setProjectConfig(setting);
  }
  
  // toggle system theme color
  function toggleThemeMode () {
    appStore.setProjectConfig({
      theme: getIsDark.value ? 'light' : 'dark'
    });
  }

  return {
    getAppTheme,
    getIsDark,
    toggleThemeMode,
    setRootSetting
  };
}
