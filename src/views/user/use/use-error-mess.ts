import { isAccountErrCode, isMsgErrCode } from '@/views/user/config';

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
      errMess.code = error.msg;
    } else if (isAccountErrCode.includes(error.code)) {
      errMess.account = error.msg;
    } else {
      errMess.pwd = error.msg;
    }
  }

  return { handleError, cleanMess };
}
