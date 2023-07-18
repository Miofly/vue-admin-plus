import { FormCompEnum , VftButton } from 'vft';
import { trimBlank } from '@vft/utils';
import { sendSms, type SmsType } from '../apis';
import { pageCfg } from '../config';
import { useVerifyCode } from '../use';

export function usePhoneVerifyCode (smsType: SmsType, phone, formRef, isUpdate?) {
  const { isDisabled, text, start, end } = useVerifyCode();
  
  const isClickSend = ref(false);
  
  const { run, loading } = useRequest(sendSms, {
    manual: true,
    onSuccess (res) {
      if (res.code === 200) {
        isClickSend.value = true;
        start(60);
      }
    }
  });
  
  const handleGetSms = async() => {
    formRef.value.clearValidate();
    if (!isUpdate) {
      formRef.value.validateField(['phone']).then(async() => {
        await sendRequest();
      }).catch((err) => {
        console.error(err);
      });
    } else {
      await sendRequest();
    }
  };
  
  const sendRequest = async() => {
    // if (smsType === 'updatePhone' && phone.value === trimBlank(phone.value, 'all')) {
    //   formRef.value.setFormItemError('phone', '当前手机号与原手机号码一致');
    //   return;
    // }
    
    run({
      phone: trimBlank(phone.value, 'all'),
      smsType
    });
  };
  
  onBeforeUnmount(() => {
    end();
  });
  
  const phoneVerifyCodeItem = {
    field: 'verifyCode',
    label: '验证码',
    type: FormCompEnum.INPUT_NUMBER,
    rules: [
      {
        validator (rule, value) {
          if (!isClickSend.value) {
            return Promise.reject(pageCfg.getPhoneCodeTip);
          } else if (!value) {
            return Promise.reject('验证码不能为空');
          }
          return Promise.resolve();
        }
      },
      { len: 4, message: '验证码格式不对' }
    ],
    showLabel: false,
    componentProps: {
      maxlength: 4,
      class: 'h-40px',
      prefixIcon: 'ico-ant-design:safety-outlined'
    },
    suffix: () => <VftButton loading={loading.value} disabled={isDisabled.value} class="ml-2 h-40px"
      onClick={handleGetSms}>
      {text.value?.length > 0 ? text.value + '秒后重新获取' : pageCfg.getCodeText}
    </VftButton>
  };
  
  return {
    isClickSend,
    phoneVerifyCodeItem
  };
}
