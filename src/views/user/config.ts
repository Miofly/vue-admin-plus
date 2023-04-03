import { mobile, password, checkCodeFour, checkCodeSix, emailRegExp } from '@vft/constants';

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
  TAB_USER = 'user',
  /** phone login */
  TAB_PHONE = 'phone'
}

/** 密码比对 */
export const checkPwdSame = (pwd) => {
  return {
    validator: (rule, value, callback) => {
      if (value && value !== pwd) {
        callback(new Error('两次输入的密码不一样'));
      } else {
        callback();
      }
    },
    trigger: 'blur'
  };
};

/** 密码比对 */
export const checkVerifyCode = (code) => {
  return {
    validator: (rule, value, callback) => {
      if (value && value !== code) {
        callback(new Error('验证码输入错误'));
      } else {
        callback();
      }
    },
    trigger: 'blur'
  };
};

export const noEmpty = (text = '账户') => {
  return { required: true, message: `${text}不能为空`, trigger: 'blur' };
};

export const rules = {
  loginPwd: [noEmpty('密码'), { min: 6, message: '密码长度不足', trigger: 'blur' }, { max: 20, message: '密码最多为20位', trigger: 'blur' }],
  regForgotPwd: [
    noEmpty('密码'),
    { min: 6, message: '密码至少为6位', trigger: 'blur' },
    { max: 20, message: '密码最多为20位', trigger: 'blur' },
    {
      pattern: password,
      message: '需包含数字和大小写字母',
      trigger: 'blur'
    }
  ],
  phone: [
    noEmpty('手机号'),
    {
      validator: (rule, value, callback) => {
        if (value && !mobile.test(value.replace(/\s/g, ''))) {
          callback(new Error('手机号码格式不正确'));
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ],
  emailRegExp: [
    noEmpty('邮箱'),
    { pattern: emailRegExp, message: '邮箱格式不正确', trigger: 'blur' }
  ],
  phoneCode: [
    { required: true, message: '您还没有填写短信验证码', trigger: 'blur' },
    { pattern: checkCodeFour, message: '短信验证码格式不正确', trigger: 'blur' }
  ],
  verifyCode: [
    { required: true, message: '您还没有填写验证码', trigger: 'blur' },
    { pattern: checkCodeFour, message: '验证码格式不正确', trigger: 'blur' },
  ],
  privacy: [
    {
      validator: (_, value, callback) => {
        return value ? callback() : callback(new Error('需要勾选用户协议'));
      },
      trigger: 'blur'
    }
  ]
};

/** 验证码错误相关 code */
export const isMsgErrCode = [400000];
/** 密码错误相关 code */
export const isPwdErrCode = [400011, 400008, 400005];
/** 账号相关错误信息 code */
export const isAccountErrCode = [400001];
