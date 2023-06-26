import { ls } from '@/utils';

export function useLoginCommon (activeName, clearValidate, loginType, isSaveAccount) {
  watch(
    () => activeName.value,
    async (val) => {
      if (val === loginType) {
        await clearValidate();
      }
    }
  );
  
  function saveLoginInfo (accountValue) {
    if (isSaveAccount.value) {
      ls.set(activeName.value, accountValue);
    } else {
      ls.remove(activeName.value);
    }
  }
 
  return {
    saveLoginInfo
  };
}
