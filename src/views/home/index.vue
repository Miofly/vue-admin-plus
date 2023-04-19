<script lang="tsx" setup>
const _columns = [
  {
    field: 'nickname',
    title: '名称',
    align: 'center',
    sortable: true
  },
  { field: 'account', title: '账户id' },
  {
    field: 'avatar', title: '头像'
  },
  { field: 'password', title: '密码' },
  {
    field: 'birthdate', title: '生日', align: 'center'
  },
  {
    field: 'registeredAt', title: '注册时间'
  },
  { field: 'email', title: '邮箱' }
];

const data = {
  'items': [
    {
      'id': '0',
      'account': 'f4c75150-090a-4635-862c-006bf544141a',
      'avatar': 'https://loremflickr.com/640/480/cats',
      'password': 'aPza561nW2BY4nf',
      'birthdate': '1987-07-19T19:48:12.817Z',
      'registeredAt': '2023-03-21T05:37:40.536Z',
      'email': 'Kaylie79@hotmail.com',
      'nickname': 'Jerod84'
    },
    {
      'id': '1',
      'account': 'de19980d-36d2-4c14-a006-8235611fc46e',
      'avatar': 'https://loremflickr.com/640/480/cats',
      'password': '9gm1j_hx9WfYk6X',
      'birthdate': '1980-08-24T09:03:01.512Z',
      'registeredAt': '2022-12-09T20:30:50.058Z',
      'email': 'Emelia_Feest@gmail.com',
      'nickname': 'Reggie11'
    },
    {
      'id': '2',
      'account': '22a9a374-ec86-4078-ab70-444e1d143e1b',
      'avatar': 'https://loremflickr.com/640/480/cats',
      'password': 'MrpuRvOSlnk6PzY',
      'birthdate': '1956-12-15T11:13:47.364Z',
      'registeredAt': '2022-09-09T11:38:51.599Z',
      'email': 'Elliott49@gmail.com',
      'nickname': 'Alayna.Farrell'
    },
    {
      'id': '3',
      'account': '13bcb9ff-c2ea-44c2-99b5-60ce56963da1',
      'avatar': 'https://loremflickr.com/640/480/fashion',
      'password': 'AboYYKnPi_Jay4y',
      'birthdate': '1950-03-26T17:51:58.286Z',
      'registeredAt': '2023-01-24T15:40:04.359Z',
      'email': 'Opal_Grimes17@gmail.com',
      'nickname': 'Camilla44'
    },
    {
      'id': '4',
      'account': 'ea88edb1-3bff-4440-b6a0-9d493d80259c',
      'avatar': 'https://loremflickr.com/640/480/nature',
      'password': '5gewpJ81JC3l7sc',
      'birthdate': '1960-12-28T04:10:59.903Z',
      'registeredAt': '2022-09-16T11:35:58.210Z',
      'email': 'Eugene7@hotmail.com',
      'nickname': 'Reagan.Deckow51'
    },
    {
      'id': '5',
      'account': '14f4f274-5ef3-40a4-99b2-49d598fc6ab6',
      'avatar': 'https://loremflickr.com/640/480/transport',
      'password': 'ehGKh56UsrYr8oj',
      'birthdate': '1976-09-07T12:11:50.963Z',
      'registeredAt': '2022-09-12T07:29:12.832Z',
      'email': 'Yasmeen_Franecki77@yahoo.com',
      'nickname': 'Daphney_Ruecker'
    },
    {
      'id': '6',
      'account': '9c9e17e8-00e9-42dc-a79b-7c3993a693c3',
      'avatar': 'https://loremflickr.com/640/480/nature',
      'password': 'KywoD3B6I9VN09I',
      'birthdate': '1996-07-06T21:55:59.904Z',
      'registeredAt': '2023-02-05T21:58:22.150Z',
      'email': 'Lavina.Olson@hotmail.com',
      'nickname': 'Jaden_Satterfield'
    },
    {
      'id': '7',
      'account': '34577327-076b-43f3-864d-298369f4f9d8',
      'avatar': 'https://loremflickr.com/640/480/nightlife',
      'password': 'Wg7OQI6lYYUcYkY',
      'birthdate': '1958-09-23T04:40:23.385Z',
      'registeredAt': '2023-02-09T08:22:10.444Z',
      'email': 'Carmella.Thompson@yahoo.com',
      'nickname': 'Stephania59'
    },
    {
      'id': '8',
      'account': 'dd6b497f-5ddf-4cb6-aeda-01e425ca0d48',
      'avatar': 'https://loremflickr.com/640/480/business',
      'password': '8CYAWgW4gb3QkU1',
      'birthdate': '2005-11-25T17:49:31.311Z',
      'registeredAt': '2023-02-18T21:11:43.936Z',
      'email': 'Crawford58@hotmail.com',
      'nickname': 'Uriah67'
    },
    {
      'id': '9',
      'account': 'bfabcc86-3b2b-4b1b-a844-c1be6533be0d',
      'avatar': 'https://loremflickr.com/640/480/sports',
      'password': '5yht3FAjzbXQ6ku',
      'birthdate': '1964-04-29T19:06:30.002Z',
      'registeredAt': '2023-02-14T02:43:10.052Z',
      'email': 'Austen.OHara94@hotmail.com',
      'nickname': 'Adalberto_Olson'
    }
  ],
  'total': 93
};
</script>

<template>

  <vft-table
    height="500px"
    border
    :pageOptions="{background: true}"
    :tableData="data?.items"
    :columns="_columns"
    :total="data?.total"
    :pageSize="PAGE_SIZE"
  />
</template>

<style lang="scss" scoped>
.container {
  .tabs {
    margin: 7px 0 9px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 22px;

    .text {
      font-size: 12px;
      margin-right: 15px;
      line-height: 22px;
      font-weight: 500;
    }

    .date {
      margin-left: 36px;
    }
  }

  :deep(.enterprise-dynamics-menu) {
    border-bottom: none;
    margin-top: -2px;

    .vc-menu-item, .vc-sub-menu__title {
      font-size: 12px;
      border-bottom: none;
      //height: 20px;
    }
  }

  :deep(.tabs) {
    .vc-datepicker__title {
      color: black;
      margin-left: 36px;
      font-size: 12px;
      margin-right: 8px;
      line-height: 22px;
      font-weight: 500;
    }

    .vc-datepicker__title.is-hasValue {
      color: #409eff
    }
  }
}
</style>

<style lang="scss">
.unique-menu-popover {
  .vc-menu-item, .vc-sub-menu__title {
    font-size: 12px;
  }
}
</style>
