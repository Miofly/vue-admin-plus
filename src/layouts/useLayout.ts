import { addUnit } from '@vft/utils';
import { cssVarValue } from 'vft';
import { computed } from 'vue';
import setting from '@/setting';
import { useSetMediaStyle } from '@vft/use';


export function useLayout (showSide, sideMenuRef) {

  const route = useRoute();

  const collapse = ref(false);
  const overflowClass = computed(() => route.meta.scrollDom || route.meta.hideScroll ? '' : 'overflow-auto overflow-overlay');

  const sideWidth = cssVarValue('side-menu-width', sideMenuRef);
  const sideCollapseWidth = cssVarValue('side-menu-collapse-width', sideMenuRef);

  const layoutSideWidth = computed(() =>
    route.meta?.sideWidth ? addUnit(route.meta.sideWidth) : showSide.value ? (collapse.value ? sideCollapseWidth.value : sideWidth.value) : 0);

  const { contentMinWidth, defaultScrollDom } = setting;

  const mediaWidthText = computed(() => {
    const textStr = (route.meta?.contentMinWidth ||
      (route.meta.hideSide ? contentMinWidth : contentMinWidth - Number(sideWidth.value.replace('px', '')))) + 'px';

    return `@media (max-width: ${textStr}) {.layout-main .layout-container ${defaultScrollDom} {min-width: ${textStr};}}`;
  });
  useSetMediaStyle(mediaWidthText);

  return {
    collapse,
    sideWidth,
    sideCollapseWidth,
    contentMinWidth,
    defaultScrollDom,
    overflowClass,
    layoutSideWidth
  };
}
