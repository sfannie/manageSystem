define(['jquery', 'vue', 'C', 'metisMenu'], function($, Vue, C, metisMenu){

    var component = {
      props: {
        toggledStatus: Boolean,
        current: 0
      },
      data: function(){
        return {
          menuList: [
            {
              name: '主页',
              url: '',
              icon: 'fa-th-large',
              openSub: false,
              children: [
                { name: 'example 1', url: 'index.html', id: ''},
                { name: 'example 2', url: '', id: ''},
                { name: 'example 3', url: '', id: ''}
              ]
            },
            {
              name: '图表',
              url: '',
              icon: 'fa-bar-chart-o',
              openSub: false,
              children: [
                { name: 'Flot', url: '', id: ''},
                { name: 'Morris', url: '', id: ''},
                { name: 'Rickshaw', url: '', id: ''}
              ]
            },
            {
              name: '布局',
              url: '',
              icon: 'fa-diamond',
              openSub: false,
              children: [
                { name: 'Flot', url: '', id: ''},
                { name: 'Morris', url: '', id: ''},
                { name: 'Rickshaw', url: '', id: ''}
              ]
            },
            {
              name: '表单',
              url: '',
              icon: 'fa-edit',
              openSub: false,
              children: [
                { name: '基本表单', url: '', id: ''},
                { name: '高级表单', url: '', id: ''},
                { name: '表单向导', url: '', id: ''},
                { name: '文件上传', url: '', id: ''},
                { name: '编辑器', url: '', id: ''},
              ]
            },
            {
              name: '页面',
              url: '',
              icon: 'fa-files-o',
              openSub: false,
              children: [
                { name: '搜索', url: '', id: ''},
                { name: '登录', url: '', id: ''},
                { name: '忘记密码', url: '', id: ''},
                { name: '404页', url: '', id: ''},
                { name: '500页', url: '', id: ''},
                { name: '空白页', url: '', id: ''}
              ]
            },
            {
              name: 'UI元素',
              url: '',
              icon: 'fa-flask',
              openSub: false,
              children: [
                { name: '排版', url: 'typography.html', id: ''},
                { name: '图标', url: '', id: ''},
                { name: '拖动排序', url: '', id: ''},
                { name: '内容缩放', url: '', id: ''},
                { name: '按钮', url: '', id: ''},
                { name: '视频', url: '', id: ''},
                { name: '面板', url: '', id: ''},
                { name: '标签', url: '', id: ''},
                { name: '通知 & 工具', url: '', id: ''},
                { name: 'CSS辅助', url: '', id: ''},
                { name: '徽章 & 标签 & 进度条', url: '', id: ''}
              ]
            },
            {
              name: '表格',
              url: '',
              icon: 'fa-table',
              openSub: false,
              children: [
                { name: '静态表格', url: 'table_basic.html', id: ''},
                { name: '数据表格', url: '', id: ''},
                { name: 'Foo表格', url: '', id: ''},
                { name: 'jqGrid', url: '', id: ''}
              ]
            }
          ]
        }
      },
      created: function(){

      },
      mounted: function(){
        $('#side-menu').metisMenu();
      },
      methods: {
        toggle: function(parent,child){
          this.$emit('toggle',{
            parent: parent,
            child: child
          });
          //this.menuList[index].openSub = !this.menuList[index].openSub;
        }
      }
    };

    return function (resolve, reject) {
        C.getTemplate("/components/sideMenu.html", function (template) {
            component.template = template;
            resolve(component);
        });
    }
});