import { FormCompEnum, type FormSchema, VftLink } from 'vft';
import { mobileRegExp, passwordRegExp } from '@vft/constants';
import { openWindow, phoneAddBlank, trimPhoneBlank } from '@vft/utils';
import { LINK_AGREEMENT_PRIVACY, LINK_AGREEMENT_USER } from '@/router/constants';

const phone_field: FormSchema = {
  field: 'phone',
  label: '手机号',
  type: FormCompEnum.INPUT,
  rules: [{
    validator: (rule, value) => {
      if (value && !mobileRegExp.test(value.replace(/\s/g, ''))) {
        return Promise.reject('手机号码格式不正确');
      }
      return Promise.resolve();
    }
  }],
  required: true,
  showLabel: false,
  componentProps: ({ formModel }) => {
    return {
      maxlength: 13,
      prefixIcon: 'ico-ep:iphone',
      onInput: (e) => {
        formModel.phone = phoneAddBlank(e);
      },
      onKeyup: (e) => {
        formModel.phone = trimPhoneBlank(e);
      }
    };
  }
};

const pwd_field = (isRepeat = false, isReg = false) => {
  const field = {
    field: isRepeat ? 'rePassword' : 'password',
    label: '密码',
    type: FormCompEnum.PASSWORD,
    required: true,
    showLabel: false,
    componentProps: {
      placeholder: isRepeat ? '请确认密码' : '请输入密码',
      maxlength: 20,
      prefixIcon: 'ico-ep:lock'
    }
  };
  
  const rule = (isRepeat, isReg) => {
    const commonRule = { min: 6, max: 20 };
    const pwdRegExp = {
      pattern: passwordRegExp,
      message: '需包含数字和大小写字母',
      trigger: 'blur'
    };
    const dynamicRule = ({ values }) => {
      return {
        required: true,
        validator: (_, value) => {
          if (value !== values.password) {
            return Promise.reject('两次输入的密码不一致!');
          }
          return Promise.resolve();
        }
      };
    };
    if (isRepeat && isReg) {
      return {
        rules: [
          commonRule,
          pwdRegExp
        ],
        dynamicRule
      };
    } else if (!isRepeat && isReg) {
      return {
        rules: [
          commonRule,
          pwdRegExp
        ]
      };
    } else if (!isRepeat && !isReg) {
      return {
        rules: [
          commonRule
        ]
      };
    }
  };
  
  return { ...rule(isRepeat, isReg), ...field } as FormSchema;
};

const privacy_policy_field: FormSchema = {
  field: 'checked',
  type: FormCompEnum.CHECKBOX_SINGLE,
  prefixParentStyle: { display: 'flex', 'justify-content': 'space-between' },
  suffix: () => <>
    <VftLink underline={false} type="primary"
      onClick={() => openWindow(LINK_AGREEMENT_USER)}>用户协议</VftLink>
    、
    <VftLink underline={false} type="primary"
      onClick={() => openWindow(LINK_AGREEMENT_PRIVACY)}>隐私政策</VftLink>
  </>,
  componentProps: {
    label: '已阅读并同意'
  },
  itemProps: {
    class: 'privacy-policy-item'
  },
  defaultValue: true,
  rules: [
    {
      validator (_, value) {
        if (value) {
          return Promise.resolve();
        } else {
          return Promise.reject('需要勾选用户协议');
        }
      }
    }
  ]
};

export {
  phone_field,
  pwd_field,
  privacy_policy_field
};
