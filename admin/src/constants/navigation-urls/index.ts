import { type UrlListProps } from './types';
import { getList } from './utils';

const list = import.meta.glob(['!./index.ts', '!./types.ts', '!./utils.ts', './**/*.ts'], { eager: true });

export const NAVIGATION_URLS = getList(list) as UrlListProps[];
