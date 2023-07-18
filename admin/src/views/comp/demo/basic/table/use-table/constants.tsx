import {
  CREATE_TIME_FIELD,
  DATE_FIELD,
  NAME_FIELD,
  SEQ_FIELD,
  STATUS_FIELD
} from 'vft';

export const columns = [
  SEQ_FIELD,
  { ...NAME_FIELD, field: 'name', title: '名称' },
  { field: 'account', title: '账户id' },
  STATUS_FIELD(),
  {
    field: 'avatar', title: '头像头像',
    slots: {
      default: ({ row }) => <img src={row.avatar} width="50" height="50" />
    }
  },
  { field: 'password', title: '密码', minWidth: 150 },
  { ...DATE_FIELD({ field: 'birthdate', title: '生日' }), minWidth: 200 },
  CREATE_TIME_FIELD({ field: 'registeredAt', title: '注册时间' }),
  { field: 'email', title: '邮箱', minWidth: 150 }
];
