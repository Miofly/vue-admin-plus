import { useUserStore } from '@/store/modules/user';

export function useUserInfo () {
  const userStore = useUserStore();
  const getUserName = computed(() => userStore.getUserInfo.username);
  const getUserAvatar = computed(() => userStore.getUserInfo.avatar);
  
  return {
    getUserName,
    getUserAvatar
  };
}
