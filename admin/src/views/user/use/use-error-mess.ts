import { isAccountErrCode, isMsgErrCode } from '@/views/user/config';
import { msgKeyName } from '@/constants';

export function useErrorMess (errMess) {
  function cleanMess () {
    errMess.pwd = '';
    errMess.code = '';
    errMess.account = '';
  }

  function handleError (error) {
    if (error.code === 400008) {
      errMess.pwd = '密码或者账号不正确';
      return;
    }
    if (isMsgErrCode.includes(error.code)) {
      errMess.code = error[msgKeyName];
    } else if (isAccountErrCode.includes(error.code)) {
      errMess.account = error[msgKeyName];
    } else {
      errMess.pwd = error[msgKeyName];
    }
  }

  return { handleError, cleanMess };
}
