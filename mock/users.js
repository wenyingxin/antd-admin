// ./src/mock/users.js
'use strict';

const qs = require('qs');

// 引入 mock js
const Mock = require('mockjs');

module.exports = {
  'GET /api/users' (req, res) {
    const page = qs.parse(req.query);

    const data = Mock.mock({
      'data|100': [{
        'id|+1': 1,
        name: '@cname',
        email: '@email',
        nickName: '@last',
        isMale: '@boolean',
        phone: /^1[34578]\d{9}$/,
        'age|11-99': 1,
        address: '@county(true)',
        createTime: '@datetime',
        avatar: function(){
	       return Mock.Random.image('100x100', Mock.Random.color(),"#757575",'png',this.nickName.substr(0,1))
	    }
      }],
      page: {
        total: 100,
        current: 1
      }
    });

    res.json({
      success: true,
      data: data.data,
      page: data.page
    });
  },
};