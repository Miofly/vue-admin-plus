import { type LoginOrRegType, useUserStoreWithOut } from '@/store/modules/user';
import { useErrorMess } from '@/views/user/use';
import type { FormInstance } from 'vft';

export function useSubmit () {
  const loading = ref(false);
  const userStore = useUserStoreWithOut();
  // 错误信息存储
  const errMess = reactive({
    pwd: '',
    code: '',
    account: ''
  });
  
  const { cleanMess, handleError } = useErrorMess(errMess);
  
  const handleClick = async({
    formEl,
    params,
    loginType,
    extraValidCallback,
    successCallback,
    errorCallBack
  }: {
    formEl: FormInstance
    params: Record<string, any>
    loginType?: LoginOrRegType,
    extraValidCallback?: Function,
    successCallback?: Function,
    errorCallBack?: Function,
  }) => {
    if (!formEl) return;
    await formEl.validate(async(valid) => {
      if (valid) {
        if (!extraValidCallback || extraValidCallback?.()) {
          cleanMess();
          loading.value = true;
  
          await userStore.loginOrReg(params, loginType)
          .then((res) => {
            successCallback?.(res);
          })
          .catch((error) => {
            handleError(error);
            errorCallBack?.();
          })
          .finally(() => {
            loading.value = false;
          });
        }
      }
    });
  };
  
  return {
    loading,
    errMess,
    handleClick
  };
}
