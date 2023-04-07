export interface UrlListProps {
  category: string;
  order?: number;
  roles: string[];
  list: TITLE_PATH_TYPE[];
}

export type TITLE_PATH_TYPE = { path: string; title: string; category?: string; roles?: string[] };
export type All_URL_LIST_TYPE = Partial<Omit<TITLE_PATH_TYPE, 'category'> & { category: string[]; sourceType: sourceType }>[];

export type sourceType = 'blog' | 'url';
