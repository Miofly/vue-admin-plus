import { ACCOUNT_MESS } from '@/constants';
import { ls } from '@/utils';

export function useLoginCommon (activeName, formRef, loginType, isSaveAccount) {
  watch(
    () => activeName.value,
    (val) => {
      if (val === loginType) {
        formRef.value?.clearValidate();
      }
    }
  );
  
  function saveAccount (accountValue) {
    if (isSaveAccount.value) {
      ls.set(ACCOUNT_MESS, accountValue);
    } else {
      ls.remove(ACCOUNT_MESS);
    }
  }
 
  return {
    saveAccount
  };
}
