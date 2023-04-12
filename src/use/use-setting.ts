import { setCssVar, setPrimaryColorCssvars } from 'vft';
import { computed } from 'vue';
import { useAppStore } from '@/store/modules/app';
import { type ProjectConfig } from '@/setting';

export function useSetting () {
  const appStore = useAppStore();
  const getAppTheme = computed(() => appStore.getProjectConfig.theme);
  const getIsDark = computed(() => appStore.getProjectConfig.theme === 'dark');
  const getThemeColor = computed(() => appStore.getProjectConfig.themeColor);

  function setRootSetting (setting: DeepPartial<ProjectConfig>) {
    appStore.setProjectConfig(setting);
  }

  // toggle system theme color
  function toggleThemeMode () {
    appStore.setProjectConfig({
      theme: getIsDark.value ? 'light' : 'dark'
    });
  }

  function themeLight () {
    appStore.setProjectConfig({
      theme: 'light'
    });
  }

  function themeDark () {
    appStore.setProjectConfig({
      theme: 'dark'
    });
  }

  // toggle system theme color
  function changeThemeColor(color) {
    appStore.setProjectConfig({
      themeColor: color
    });
    setCssVar('primary-color', color);
    setPrimaryColorCssvars(color);
  }

  return {
    getThemeColor,
    changeThemeColor,
    themeLight,
    themeDark,
    getAppTheme,
    getIsDark,
    toggleThemeMode,
    setRootSetting
  };
}
