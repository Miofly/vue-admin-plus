import setting from '@/setting';
// import { useSetMediaStyle } from '@vft/use';
import { addUnit } from '@vft/utils';
import { computed } from 'vue';

export function useLayout(showSide) {
  const { contentMinWidth, defaultScrollDom, sideMenuWidth, sideMenuCollapseWidth } = setting;

  const route = useRoute();

  const collapse = ref(false);
  const overflowClass = computed(() => route.meta.scrollDom || route.meta.hideScroll ? '' : 'overflow-auto overflow-overlay');

  const sideWidth = ref(sideMenuWidth);
  const sideCollapseWidth = ref(sideMenuCollapseWidth);

  const layoutSideWidth = computed(() => {
    return route.meta?.sideWidth ?
      addUnit(route.meta.sideWidth) :
      showSide.value ? addUnit(collapse.value ? sideCollapseWidth.value : sideWidth.value) : 0;
  });

  const calcSideWidth = computed(() => {
    return showSide.value ? addUnit(sideWidth.value) : '0px';
  });

  // const mediaWidthText = computed(() => {
  //   const textStr = addUnit(route.meta?.contentMinWidth || contentMinWidth);
  //     // (route.meta.hideSide ? contentMinWidth :  - sideWidth.value)) + 'px';
  //
  //   return `@media (max-width: ${textStr}) {.layout-main .layout-container ${defaultScrollDom} {min-width: ${textStr};}}`;
  // });
  // useSetMediaStyle(mediaWidthText);

  return {
    collapse,
    sideWidth,
    sideCollapseWidth,
    contentMinWidth,
    defaultScrollDom,
    overflowClass,
    layoutSideWidth,
    calcSideWidth
  };
}
