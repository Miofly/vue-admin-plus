import { type LoginOrRegType, useUserStoreWithOut } from '@/store/modules/user';
import { useErrorMess } from '@/views/user/use';
import setting from '@/setting';
import type { FormActionType } from 'vft';

export function useSubmit () {
  const loading = ref(false);
  const userStore = useUserStoreWithOut();

  const { handleError } = useErrorMess();

  const submit = async({
    params,
    loginType,
    successCallback,
    errorCallBack,
    setFormItemError,
    setSubmitLoading
  }: {
    params: Record<string, any>
    loginType?: LoginOrRegType,
    successCallback?: Function,
    errorCallBack?: Function,
    setFormItemError?: FormActionType['setFormItemError'],
    setSubmitLoading?: FormActionType['setSubmitLoading'],
  }) => {
    setSubmitLoading && await setSubmitLoading();
    await userStore.loginOrReg(params, loginType)
    .then((res) => {
      useTitle(setting.name);
      successCallback?.(res);
    })
    .catch((error) => {
      setSubmitLoading && setSubmitLoading(false);
      handleError(error, setFormItemError, loginType);
      errorCallBack?.();
    });
  };

  return {
    loading,
    submit
  };
}
