webpackJsonp([1],{"+3bb":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("C5iE"),i=a("vLgD"),n=function(t){return Object(i.a)({url:"/api/v1/topics/hot",method:"post",data:t})},c=function(t){return Object(i.a)({url:"/api/v1/posts/explore",method:"post",data:t})},r={name:"Index",data:function(){return{content:[{question_id:"1",question_content:"",add_time:"",update_time:"",answer_count:"",agree_count:""}],questions:[],hotTopics:[],hotUsers:[]}},created:function(){this.getExplore(),this.getHotUsers(),this.getHotTopics()},methods:{getExplore:function(){var t=this;c({}).then(function(s){t.questions=s.data.list}).catch(function(t){console.log(t)})},getHotUsers:function(){var t=this;e.a.getHotUsers({}).then(function(s){t.hotUsers=s.data.list}).catch(function(t){console.log(t)})},getHotTopics:function(){var t=this;n({}).then(function(s){t.hotTopics=s.data.list}).catch(function(t){console.log(t)})}}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"aw-container-wrap"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"aw-content-wrap clearfix"},[a("div",{staticClass:"col-sm-12 col-md-9 aw-main-content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"aw-mod aw-explore-list"},[a("div",{staticClass:"mod-body"},[a("div",{staticClass:"aw-common-list"},[t._l(t.questions,function(s){return[a("div",{key:s.question_id,staticClass:"aw-item ",attrs:{"data-topic-id":"78,2078,3851,3792,"}},[a("a",{staticClass:"aw-user-name hidden-xs",attrs:{href:"/people/45510",rel:"nofollow"}},[a("img",{attrs:{src:"http://wenda.wecenter.com"+s.user_info.avatar}}),t._v(" "),"enterprise"===s.user_info.verified?[a("i",{staticClass:"icon icon-v i-ve"})]:[a("i",{staticClass:"icon icon-v"})]],2),t._v(" "),a("div",{staticClass:"aw-question-content"},[a("h4",[a("a",{attrs:{href:"/question/"+s.question_id}},[t._v(t._s(s.question_content))])]),t._v(" "),a("div",{staticClass:"pull-right hidden-xs contribute"},[a("span",{staticClass:"pull-right text-color-999"},[t._v("贡献")]),t._v(" "),t._l(s.answer_users,function(t){return[a("a",{key:t.uid,staticClass:"aw-user-name",attrs:{href:"/people/"+t.uid,rel:"nofollow"}},[a("img",{attrs:{src:"http://wenda.wecenter.com"+t.avatar,alt:""}})])]})],2),t._v(" "),a("p",[a("a",{staticClass:"aw-question-tags",attrs:{href:"http://wenda.wecenter.com/explore/category-2"}},[t._v("WeCenter\n                          程序")]),t._v(" "),a("a",{staticClass:"aw-user-name",attrs:{href:"/people/50813"}},[t._v(t._s(s.user_info.user_name))]),t._v(" "),a("span",{staticClass:"text-color-999"},[t._v("\n                          回复了问题 14 人关注 • "+t._s(s.comments)+" 个回复  "+t._s(s.views)+" 次浏览  "+t._s(s.add_time)+"\n                        ")]),t._v(" "),a("span",{staticClass:"text-color-999 related-topic collapse"},[t._v(" 来自相关话题")])])])])]})],2)]),t._v(" "),t._m(2)])]),t._v(" "),a("div",{staticClass:"col-sm-12 col-md-3 aw-side-bar hidden-xs hidden-sm"},[a("div",{staticClass:"aw-mod aw-text-align-justify"},[t._m(3),t._v(" "),a("div",{staticClass:"mod-body"},[t._l(t.hotTopics,function(s){return[a("dl",{key:s.topic_id},[a("dt",{staticClass:"pull-left aw-border-radius-5"},[a("a",{attrs:{href:"/topic/"+s.topic_id}},[a("img",{attrs:{src:"http://wenda.wecenter.com"+s.topic_pic}})])]),t._v(" "),a("dd",{staticClass:"pull-left"},[a("p",{staticClass:"clearfix"},[a("span",{staticClass:"topic-tag"},[a("a",{staticClass:"text",attrs:{href:"/topic/"+s.topic_id,"data-id":"2078"}},[t._v(t._s(s.topic_title))])])]),t._v(" "),a("p",[a("b",[t._v(t._s(s.discuss_count))]),t._v(" 个问题, "),a("b",[t._v(t._s(s.focus_count))]),t._v(" 人关注")])])])]})],2)]),t._v(" "),a("div",{staticClass:"aw-mod aw-text-align-justify"},[t._m(4),t._v(" "),a("div",{staticClass:"mod-body"},[t._l(t.hotUsers,function(s){return[a("dl",{key:s.userId},[a("dt",{staticClass:"pull-left aw-border-radius-5"},[a("a",{attrs:{href:"/people/15613"+s.userId}},[a("img",{attrs:{src:"http://wenda.wecenter.com"+s.avatar}})])]),t._v(" "),a("dd",{staticClass:"pull-left"},[a("a",{staticClass:"aw-user-name",attrs:{href:"/people/15613"+s.userId}},[t._v(t._s(s.user_name)+"\n                      "),"enterprise"===s.verified?[a("i",{staticClass:"icon-v i-ve",attrs:{title:"企业认证"}})]:[a("i",{staticClass:"icon-v",attrs:{title:"个人认证"}})]],2),t._v(" "),a("p",{staticClass:"signature"}),t._v(" "),a("p",[a("b",[t._v(t._s(s.answer_count))]),t._v(" 个问题,\n                      "),a("b",[t._v(t._s(s.agree_count))]),t._v(" 次赞同\n                    ")])])])]})],2)])])])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"aw-mod aw-notification-box collapse",attrs:{id:"index_notification"}},[a("div",{staticClass:"mod-head common-head"},[a("h2",[a("span",{staticClass:"pull-right"},[a("a",{staticClass:"text-color-999",attrs:{href:"/setting/privacy/#notifications"}},[a("i",{staticClass:"icon icon-setting"}),t._v(" 通知设置\n                  ")])]),t._v(" "),a("i",{staticClass:"icon icon-bell"}),t._v("新通知\n                "),a("em",{staticClass:"badge badge-important",attrs:{name:"notification_unread_num"}})])]),t._v(" "),a("div",{staticClass:"mod-body"},[a("ul",{attrs:{id:"notification_list"}})]),t._v(" "),a("div",{staticClass:"mod-footer clearfix"},[a("a",{staticClass:"pull-left btn btn-mini btn-gray",attrs:{href:"javascript:;",onclick:"AWS.Message.read_notification(false, 0, false);"}},[t._v("我知道了")]),t._v(" "),a("a",{staticClass:"pull-right btn btn-mini btn-success",attrs:{href:"/notifications/"}},[t._v("查看所有")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"nav nav-tabs aw-nav-tabs active hidden-xs"},[a("li",[a("a",{attrs:{href:"/sort_type-unresponsive"}},[t._v("等待回复")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/is_recommend-1"}},[t._v("推荐")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/sort_type-hot__day-7",id:"sort_control_hot"}},[t._v("热门")])]),t._v(" "),a("li",{staticClass:"active"},[a("a",{attrs:{href:"/"}},[t._v("最新")])]),t._v(" "),a("li",[a("a",{attrs:{href:"/is_reward-1"}},[t._v("悬赏")])]),t._v(" "),a("h2",{staticClass:"hidden-xs"},[a("i",{staticClass:"icon icon-list"}),t._v(" 发现")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mod-footer"},[a("div",{staticClass:"page-control"},[a("ul",{staticClass:"pagination pull-right"},[a("li",{staticClass:"active"},[a("a",{attrs:{href:"javascript:;"}},[t._v("1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-2"}},[t._v("2")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-3"}},[t._v("3")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-4"}},[t._v("4")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-2"}},[t._v(">")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-2762"}},[t._v(">>")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mod-head"},[s("a",{staticClass:"pull-right",attrs:{href:"/topic/channel-hot"}},[this._v("更多 >")]),this._v(" "),s("h3",[this._v("热门话题")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mod-head"},[s("a",{staticClass:"pull-right",attrs:{href:"http://wenda.wecenter.com/people/"}},[this._v("更多 >")]),this._v(" "),s("h3",[this._v("热门用户")])])}]};var l=a("VU/8")(r,o,!1,function(t){a("A7cf")},"data-v-8187fcc4",null);s.default=l.exports},A7cf:function(t,s){},C5iE:function(t,s,a){"use strict";var e=a("vLgD");s.a={getHotUsers:function(t){return Object(e.a)({url:"/api/v1/users/hot",method:"post",data:t})},getUsersLists:function(t){return Object(e.a)({url:"/api/v1/users/lists",method:"post",data:t})}}}});
//# sourceMappingURL=1.04265cc50f0479f1a6df.js.map