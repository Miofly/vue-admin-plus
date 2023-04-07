import { request } from '@/apis';
import { objAddPrefix } from '@vft/utils';

const prefixUrl = '/user-center';
const subPrefixUrl = '/v2/pc';

const Api = {
  /** 获取验证码 */
  getCaptcha: '/getCaptcha',
  /** 密码登录 */
  loginByPw: subPrefixUrl + '/loginByPw',
  /** 短信登录 */
  loginBySms: subPrefixUrl + '/loginBySms',
  /** 注册 */
  register: subPrefixUrl + '/register',
  /** 改变密码 */
  changePw: subPrefixUrl + '/changePw',
  /** 发送验证码 */
  sendSms: '/sendSms',
  /** 获取用户信息 */
  getUserInfo: '/getUserInfo',
  /** 退出登录 */
  logout: '/logout'
};

objAddPrefix(Api, prefixUrl);

interface LoginPwdProps {
  /** 图形验证码key */
  captchaKey: string;
  /** 图形验证码value */
  captchaValue: string;
  /** 密码（RSA加密），只能包含字母、数字和下划线，长度在6~18 */
  password: string;
  /** 手机号 */
  phone: string;
}

interface LoginPhoneProps {
  /** 手机号 */
  phone?: string;
  email?: string;
  /** 短信验证码，有效期2分钟 */
  smsVerifyCode: string;
  
}

interface RegisterProps extends LoginPhoneProps {
  /** 密码（RSA加密），只能包含字母、数字和下划线，长度在6~18 */
  password: string;
}

/** 获取图形验证码 */
export const getCaptcha = () =>
  request.post({
    url: Api.getCaptcha
  });

/** 手机号/密码登录 */
export const loginByPw = (params: LoginPwdProps) =>
  request.post(
    { url: Api.loginByPw, params },
    {
      isTransformResponse: false
    }
  );

/** 手机号/短信验证码登录 */
export const loginBySms = (params: LoginPhoneProps) =>
  request.post(
    { url: Api.loginBySms, params },
    {
      isTransformResponse: false
    }
  );

/** 注册 */
export const register = (params: RegisterProps) =>
  request.post(
    {
      url: Api.register,
      params: { ...params }
    },
    {
      isTransformResponse: false
    }
  );

/** 修改密码 */
export const changePw = (params: RegisterProps) =>
  request.post(
    {
      url: Api.changePw,
      params: { ...params }
    },
    {
      isTransformResponse: false
    }
  );

/** 验证码类型 */
export type SmsType = 'login' | 'register' | 'updatePhone' | 'changePw' | 'email';

/** 发送验证码 */
export const sendSms = (params: Partial<Pick<LoginPhoneProps, 'phone' | 'email'> & {smsType: SmsType}>) =>
  request.post(
    {
      url: Api.sendSms,
      params: { ...params }
    },
    {
      joinParamsToUrl: true,
      isTransformResponse: false
    }
  );

/** 获取用户信息 */
export const getUserInfo = () =>
  request.get({
    url: Api.getUserInfo
  });

/** 退出登录 */
export const logout = (refreshToken: string) =>
  request.post({
    url: Api.logout,
    params: { refreshToken: refreshToken }
  }, {
    joinParamsToUrl: true
  });
