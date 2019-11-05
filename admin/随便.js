// $(function () {
    //   //进到文章列表页面，就获取符合条件的文章封装成了一函数。
    //   function getData(myPage) {
    //     $.ajax({
    //       type: 'get',
    //       url: 'http://47.111.184.55:8888/api/v1/admin/article/query',
    //       data: {
    //         page: myPage, // 当前第几页
    //         perpage: 5    // 每页展示条数
    //       },
    //       success: function (data) {
    //         console.log(data)
    //         var html = template('postsTpl', backdata)
    //         $('postsBox').html(html)

    //         var totalPages = data.data.totalPage

    //         if (myTotalPage != totalPages) {
    //           myTotalPage = totalPages
    //           $pagination.twbsPagination('destroy')
    //           $pagination.twbsPagination($.extend({}, defaultOpts, {
    //             startPage: 1,
    //             totalPages: totalPages
    //           }))
    //         }
    //       }
    //     })
    //   }
    //   getData(1)
    //   var $pagination = $('#pagination-demo')
    //   var myTotalPage = 10
    //   var defaultOpts = {
    //     totalPages: myTotalPage,
    //     visiblePages: 7,
    //     first: '首页',
    //     last: '末页',
    //     prev: '上一页',
    //     next: '下一页',
    //   }