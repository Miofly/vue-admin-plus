import { isFunction } from 'lodash';

import { APP_INSTALLED, APP_READY } from '@/constants/pwa';
import pwa from '@/pwa';
import { usePwasStore } from '@/store/modules/pwas';

export default function usePwa() {
  const pwaStore = usePwasStore();
  
  const isInApp = ref(false);
  
  pwaStore.$subscribe(() => {
    pwa.subscribe(APP_INSTALLED, () => {
      pwaStore.changeProps({ isPwa: true });
    });
  
    if (pwa.ready || window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      pwaStore.changeProps({ isPwa: true });
    }
  
    pwa.subscribe(APP_INSTALLED, () => {
      pwaStore.changeProps({ isAppInstalled: true, showAddDesk: false });
    });
  
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      pwaStore.changeProps({ isPwa: true });
      isInApp.value = true;
    }
  
    const handler = (evt: MediaQueryListEvent) => {
      if (evt.matches) {
        isInApp.value = true;
      } else {
        isInApp.value = false;
      }
      pwaStore.changeProps({ isPwa: evt.matches });
    };
    const media = window.matchMedia('(display-mode: standalone)');
  
    if (isFunction(media.addEventListener)) {
      media.addEventListener('change', handler);
    } else if (isFunction(media.addListener)) {
      media.addListener(handler);
    }
  
    pwa.subscribe(APP_READY, () => {
      if (pwa.event && !isInApp.value) {
        pwaStore.changeProps({ showAddDesk: true });
      }
    });
    
  });
  
  watch(()=> isInApp.value, (val) => {
    pwa.subscribe(APP_READY, () => {
      if (pwa.event && !val) {
        pwaStore.changeProps({ showAddDesk: true });
      }
    });
  });
}
