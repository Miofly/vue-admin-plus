import { emailRegExp } from '@vft/constants';

export const tabStyle = {
  'item-bg-color': 'transparent',
  'item-bg-color-hover': 'transparent',
  'item-bg-color-active': 'transparent',
  'item-color-hover': '#1890FF',
  'item-color-active': '#1890FF',
  'item-border': 'none',
  'item-padding': '0',
  'item-distance': '32px',
  'show-border-bottom': 'none',
  'header-padding': '0 0 7px 0',
  'header-border-bottom': '1px solid rgba(0, 0, 0, 0.06)'
};

export const pageCfg = {
  title: '管理系统',
  desc: '待替换的系统名称文字专业智能数据，绿色地球 蔚蓝数据小字小字绿色地球 蔚蓝数据小字',
  loginText: '用户名登录',
  phoneText: '手机登录/注册',
  forgotText: '忘记密码',
  userPlaceholder: '请输入用户名',
  pwaPlaceholder: '请输入密码',
  rePwaPlaceholder: '请确认密码',
  pwaRegPlaceholder: '含数字&大小写字母，至少六位',
  phonePlaceholder: '请输入手机号',
  emailPlaceholder: '请输入邮箱账号',
  codePlaceholder: '请输入验证码',
  getCodeText: '获取验证码',
  goLoginText: '修改成功，正在跳转登录页',
  getPhoneCodeTip: '请先获取验证码'
};

export enum LoginTabEnum {
  /** account login */
  TAB_USER = 'account',
  /** phone login */
  TAB_PHONE = 'phone'
}

export const noEmpty = (text = '账户') => {
  return { required: true, message: `${text}不能为空`, trigger: 'blur' };
};

export const rules = {
  emailRegExp: [
    noEmpty('邮箱'),
    { pattern: emailRegExp, message: '邮箱格式不正确', trigger: 'blur' }
  ]
};

/** 验证码错误相关 code */
export const isMsgErrCode = [400000];
/** 密码错误相关 code */
export const isPwdErrCode = [400011, 400008, 400005];
/** 账号相关错误信息 code */
export const isAccountErrCode = [400001];
