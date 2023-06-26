import { msgKeyName } from '@/constants';
import type { LoginOrRegType } from '@/store/modules/user';
import { isAccountErrCode, isMsgErrCode } from '@/views/user/config';

export function useErrorMess () {
  function handleError (error, setFormItemError, type?: LoginOrRegType) {
    if (error.code === 400008) {
      setFormItemError('password', '密码或者账号不正确');
    }
    if (isMsgErrCode.includes(error.code)) {
      setFormItemError('verifyCode', error[msgKeyName]);
    } else if (isAccountErrCode.includes(error.code)) {
      setFormItemError(type === 'loginPhone' ? 'phone' : 'account', error[msgKeyName]);
    } else {
      setFormItemError('password', error[msgKeyName]);
    }
  }
  
  return { handleError };
}
