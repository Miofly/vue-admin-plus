import type { InjectionKey, Ref } from 'vue';
import { createContext, useContext } from '@vft/use';

/**
 * @description 菜单中的 context
 * @author wfd
 * @date 2021-07-21 14:52:44
 */
export interface LayoutContextProps {
  layoutContainerRef: Ref<HTMLElement>;
  layoutContentRef: Ref<HTMLElement>;
}

const key: InjectionKey<LayoutContextProps> = Symbol();

export function createLayoutContext(context: LayoutContextProps) {
  return createContext<LayoutContextProps>(context, key);
}

export function useLayoutContext() {
  return useContext<LayoutContextProps>(key);
}
