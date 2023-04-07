import { cloneDeep } from '@vft/utils';
import { ref } from 'vue';

const isDisabled = ref(false);
const timer = ref();
const text = ref('');

/**
 * @description 验证码倒计时
 * @author wfd
 * @date 2022/11/23 12:30
 * @example
 * @returns {{timer: Ref<any>, start: (formEl: ( | undefined), props: , time?: number) => Promise<void>, end: () => void, isDisabled: Ref<UnwrapRef<boolean>>, text: Ref<UnwrapRef<string>>}}
 */
export const useVerifyCode = () => {
  const start = async(time = 60) => {
    const initTime = cloneDeep(time);
    
    clearInterval(timer.value);
    const fn = () => {
      if (time > 0) {
        text.value = `${time}`;
        isDisabled.value = true;
        time -= 1;
      } else {
        text.value = '';
        isDisabled.value = false;
        clearInterval(timer.value);
        time = initTime;
      }
    };
    fn();
  
    timer.value = setInterval(() => {
      fn();
    }, 1000);
  };
  
  const end = () => {
    text.value = '';
    isDisabled.value = false;
    clearInterval(timer.value);
  };
  
  return {
    isDisabled,
    timer,
    text,
    start,
    end
  };
};
