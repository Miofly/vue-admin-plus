import { request, ContentTypeEnum } from '@/apis';

const Api = {
  userEdit: '/user/user-edit',
  checkVerifyCode: '/common',
  updatePhone: '/user/updatePhone',

  sendSmsToMail: '/common',
  bindEmail: '/common',
  changeAvatar: '/common',
  uploadAuth: '/common',
  submitUserAuthentication: '/common',
  pushSettings: '/common',
  pushSettingsV2: '/common',
  message: '/common',
  myCollectionEvents: '/common'
};

// objAddPrefix(Api, prefixUrl);

interface UserEditProps {
  username?: string;
  photo?: string;
}

/** 修改昵称头像 */
export const userEdit = (params: UserEditProps) =>
  request.post({
      url: Api.userEdit,
      params
    },
    {
      joinParamsToUrl: true
    }
  );

/** 发送邮箱验证码 */
export const sendEmailSms = (params) =>
  request.post(
    {
      url: Api.sendSmsToMail,
      params
    },
    {
      joinParamsToUrl: true,
      isTransformResponse: false
    }
  );

/** 绑定邮箱 */
export const bindEmail = (params) =>
  request.post(
    {
      url: Api.bindEmail,
      params
    },
    {
      joinParamsToUrl: true,
      isTransformResponse: false
    }
  );

/** 改头像 */
export const changeAvatar = (files) =>
  request.post(
    {
      url: Api.changeAvatar,
      params: { files },
      headers: { 'Content-Type': ContentTypeEnum.FORM_DATA }
    });

interface VerifyPhoneProps {
  smsVerifyCode: string
  phone: string
  smsType: string
}

/** 校验验证码 */
export const checkVerifyCode = (params: VerifyPhoneProps) =>
  request.get(
    {
      url: Api.checkVerifyCode,
      params
    },
    {
      isTransformResponse: false
    });

/** 更新手机号 */
export const updatePhone = (params: Pick<VerifyPhoneProps, 'phone' | 'smsVerifyCode'>) =>
  request.post(
    {
      url: Api.updatePhone,
      params
    },
    {
      joinParamsToUrl: true,
      isTransformResponse: false
    });

/** 认证信息图片修改 */
export const uploadAuth = (files) =>
  request.post(
    {
      url: Api.uploadAuth,
      params: { files },
      headers: { 'Content-Type': ContentTypeEnum.FORM_DATA }
    });

/** 修改认证信息 */
export const submitUserAuthentication = (params) =>
  request.post(
    {
      url: Api.submitUserAuthentication,
      params
    },
    {
      isTransformResponse: false
    });

/** 推送 */
export const getPushSettings = (params) =>
  request.get(
    {
      url: Api.pushSettings,
      params
    });

/** 设置推送 */
export const setPushSettings = (params) =>
  request.post(
    {
      url: Api.pushSettings,
      params: {
        ...params
      }
    }, {
      joinParamsToUrl: true
    });

export interface MessageProps {
  // 时间区间,0: 全部, 1:一天内, 2: 3天内, 3:一周内, 4:一个月内, 5:3个月内
  duration?: number
  // 消息类型，不填表示所有,企业动态:dynamics,系统消息:system,会员福利:benefits,快讯:news,所有:all
  type?: string
  /** 返回的个数限制 */
  limit: number
  /** 偏移量 */
  offset?: number
  sortRule?: string
}

/** 获取消息 */
export const getMessage = (params: MessageProps) =>
  request.get(
    {
      url: Api.message,
      params
    });

/** 获取收藏 */
export const getCollection = (params) =>
  request.get(
    {
      url: Api.myCollectionEvents,
      params
    });
