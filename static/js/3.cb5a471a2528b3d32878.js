webpackJsonp([3],{C1pW:function(t,a,e){"use strict";var s=e("vLgD");a.a={getLatest:function(t){return Object(s.a)({url:"/api/v1/columns/latest",method:"post",data:t})},getHotColumns:function(t){return Object(s.a)({url:"/api/v1/columns/hot",method:"post",data:t})},getArticles:function(t){return Object(s.a)({url:"/api/v1/column/articles",method:"post",data:t})}}},FEQ5:function(t,a){},NhX4:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZGM4NDVkYy1kYWU1LWRhNDYtYTRmNy1kYWFiY2EyMTJhZjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTAyMDNFRUE1MzMxMTFFOEI3N0U4RjM2RTdDQjU4NDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTAyMDNFRTk1MzMxMTFFOEI3N0U4RjM2RTdDQjU4NDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwNTdmMzkzLWY5NDktYWM0Ny1iNTNjLTQ1MzRmMWE2ZDhiMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowZGM4NDVkYy1kYWU1LWRhNDYtYTRmNy1kYWFiY2EyMTJhZjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz74TurPAAABIklEQVR42nRRPYuDQBTUxdgEJBjRdGk1FkZSpbHXv2ppFbuUihBEIiFNIE1sxEQbv71JvBOO46ZYZmd335t5Sw/DQH3ged7r9ZrNZlDqupYkSdf18YiGlOf54XBYLBayLAuCACVJksvl0jSNaZosy1Jgtm2fTqfhA5Dr9Try4/HoOA4ICYKA5/ntdjtWfj6fRVGM3DAMrOfzmaRpqmka9QOGYTiOm7abzeZ+vzNwulwuJ7Xv+yiKyrJs23Y+n8P+7XZjqN9QVRWeEKXrOkLIOxpNMzCOjlMxkP1+P71BmaqqCDKHYUj9gziO1+s12e12qITkf29gBOgF79/DdF0XoRRFEUUR3h+PxzhMy7KQjJ6+xff9LMtgFgrurVaraXhfAgwAKoKsadyHwSEAAAAASUVORK5CYII="},co4G:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("C1pW"),i={name:"Index",data:function(){return{articles:[]}},created:function(){this.getArticles()},methods:{getArticles:function(){var t=this;s.a.getArticles({}).then(function(a){t.articles=a.data.list}).catch(function(t){console.log(t)})}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"aw-container-wrap"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"aw-content-wrap clearfix simpobox"},[s("div",{staticClass:"N-left clearfix"},[s("div",{staticClass:"N-myzllist"},[t._l(t.articles,function(a){return[s("dl",{key:a.id},[s("dt",[s("a",{attrs:{href:"/article/1675#!answer_form"}},[s("img",{attrs:{src:"http://wenda.wecenter.com"+a.article_img}})])]),t._v(" "),s("dd",[s("h2",[s("a",{attrs:{href:"/article/1675"}},[t._v(t._s(a.title))])]),t._v(" "),s("p",{staticStyle:{cursor:"pointer"}},[t._v("\n                    你的网站是不是也被灌水机攻击了，删问题删的手软，以下方法可以让它自动清理：\n                    1、禁止灌水发提问的用户（这是关键）\n                    2、在程序目录下的 models\\question.php 代码最下面 ...\n                  ")]),t._v(" "),s("span",[s("em",[s("img",{attrs:{src:e("NhX4")}}),t._v(t._s(a.add_time))]),t._v(" "),s("em",[s("img",{attrs:{src:e("hikZ")}}),t._v(t._s(a.views))]),t._v(" "),t._m(0,!0)])])])]}),t._v(" "),s("div",{staticClass:"mod-footer fl_none"})],2)]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("em",[a("a",{attrs:{href:"/article/1675#!answer_form"}},[a("img",{attrs:{src:e("tu9j")}}),this._v("评论\n                    ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"N-right clearfix"},[e("div",{staticClass:"author"},[e("div",{staticClass:"author-phone"},[e("p",[e("img",{attrs:{onclick:"",src:"http://wenda.wecenter.com/uploads/column/c880d3d99c04e854bd108121b0f50157.png?3750"}})]),e("span",{staticClass:"author-icon"})]),t._v(" "),e("p",{staticClass:"author-name"},[t._v("二次开发")]),t._v(" "),e("p",{staticClass:"author-profile"},[t._v("Wecenter 二次开发")]),t._v(" "),e("span",{staticClass:"author-fav"},[e("a",{staticClass:"active",attrs:{href:"javascript:;",onclick:"AWS.User.follow($(this), 'column', 6 , true);"}},[e("span",[t._v("取消关注")])]),t._v(" "),e("a",{staticClass:"author-sx",attrs:{href:"javascript:;",onclick:"AWS.dialog('inbox','Alu');"}},[t._v("私信")])]),t._v(" "),e("div",{staticClass:"author-record"},[e("p",{staticClass:"newCount"},[e("img",{attrs:{src:"http://wenda.wecenter.com/static/css/default/img/nsee.png"}}),t._v("文章总浏览量"),e("span",{staticClass:"rt"},[t._v("3.37 K")])]),t._v(" "),e("p",{staticClass:"newCount"},[e("img",{attrs:{src:"http://wenda.wecenter.com/static/css/default/img/nsan.png"}}),t._v("发表文章总数"),e("span",{staticClass:"rt"},[t._v("4")])]),t._v(" "),e("p",{staticClass:"newCount"},[e("img",{attrs:{src:"http://wenda.wecenter.com/static/css/default/img/nsvn.png"}}),t._v("被关注数"),e("span",{staticClass:"rt"},[t._v("50")])])])]),t._v(" "),e("div",{staticClass:"m-hot"},[e("div",{staticClass:"m-hot-tt"},[e("i"),t._v("TA的热门文章")]),t._v(" "),e("dl",[e("dt",[e("i",[e("img",{attrs:{src:"http://wenda.wecenter.com/static/css/default/img/nicon.png"}})]),t._v(" "),e("a",{attrs:{href:"http://wenda.wecenter.com/article/110#!answer_form"}},[e("img",{staticClass:"m-imgtop",attrs:{src:""}}),t._v(" "),e("h2",[t._v("分享一个自定义WC首页的方法(修改默认首...")])])]),t._v(" "),e("dd",{staticClass:"clearfix"},[e("a",{attrs:{href:"http://wenda.wecenter.com/article/1236#!answer_form"}},[e("img",{attrs:{src:""}}),e("i",[t._v("2")])]),t._v(" "),e("a",{staticClass:"mhottitle",attrs:{href:"http://wenda.wecenter.com/article/1236#!answer_form"}},[t._v("【分享】文章列表显示图片列表的...")])]),t._v(" "),e("dd",{staticClass:"clearfix"},[e("a",{attrs:{href:"http://wenda.wecenter.com/article/1325#!answer_form"}},[e("img",{attrs:{src:""}}),e("i",[t._v("3")])]),t._v(" "),e("a",{staticClass:"mhottitle",attrs:{href:"http://wenda.wecenter.com/article/1325#!answer_form"}},[t._v("让你网站的积分动起来，股票积分...")])]),t._v(" "),e("dd",{staticClass:"clearfix"},[e("a",{attrs:{href:"http://wenda.wecenter.com/article/1250#!answer_form"}},[e("img",{attrs:{src:""}}),e("i",[t._v("4")])]),t._v(" "),e("a",{staticClass:"mhottitle",attrs:{href:"http://wenda.wecenter.com/article/1250#!answer_form"}},[t._v("sitemap.xml文章和问...")])]),t._v(" "),e("dd",{staticClass:"clearfix"},[e("a",{attrs:{href:"http://wenda.wecenter.com/article/1237#!answer_form"}},[e("img",{attrs:{src:""}}),e("i",[t._v("5")])]),t._v(" "),e("a",{staticClass:"mhottitle",attrs:{href:"http://wenda.wecenter.com/article/1237#!answer_form"}},[t._v("附件图片结构你知道在那配置吗？")])]),t._v(" "),e("dd",{staticClass:"clearfix"},[e("a",{attrs:{href:"http://wenda.wecenter.com/article/1399#!answer_form"}},[e("img",{attrs:{src:""}}),e("i",[t._v("6")])]),t._v(" "),e("a",{staticClass:"mhottitle",attrs:{href:"http://wenda.wecenter.com/article/1399#!answer_form"}},[t._v("给您的网站注册增加一个邮箱后辍...")])]),t._v(" "),e("dd",{staticClass:"clearfix"},[e("a",{attrs:{href:"http://wenda.wecenter.com/article/1252#!answer_form"}},[e("img",{attrs:{src:""}}),e("i",[t._v("7")])]),t._v(" "),e("a",{staticClass:"mhottitle",attrs:{href:"http://wenda.wecenter.com/article/1252#!answer_form"}},[t._v("研究一个网站，大家一起探讨")])]),t._v(" "),e("dd",{staticClass:"clearfix"},[e("a",{attrs:{href:"http://wenda.wecenter.com/article/1403#!answer_form"}},[e("img",{attrs:{src:""}}),e("i",[t._v("8")])]),t._v(" "),e("a",{staticClass:"mhottitle",attrs:{href:"http://wenda.wecenter.com/article/1403#!answer_form"}},[t._v("WC文件缓存")])]),t._v(" "),e("dd",{staticClass:"clearfix"},[e("a",{attrs:{href:"http://wenda.wecenter.com/article/1571#!answer_form"}},[e("img",{attrs:{src:"http://wenda.wecenter.com/uploads/article/20180731/b616930e956ea98dd84140160bee39eb.jpg?9805"}}),e("i",[t._v("9")])]),t._v(" "),e("a",{staticClass:"mhottitle",attrs:{href:"http://wenda.wecenter.com/article/1571#!answer_form"}},[t._v("wecenter投票功能")])]),t._v(" "),e("dd",{staticClass:"clearfix"},[e("a",{attrs:{href:"http://wenda.wecenter.com/article/1261#!answer_form"}},[e("img",{attrs:{src:""}}),e("i",[t._v("10")])]),t._v(" "),e("a",{staticClass:"mhottitle",attrs:{href:"http://wenda.wecenter.com/article/1261#!answer_form"}},[t._v("IIS主机静态规则共享参考")])])])])])}]};var r=e("VU/8")(i,c,!1,function(t){e("FEQ5")},"data-v-4b3bd962",null);a.default=r.exports},hikZ:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAIAAADkharWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZGM4NDVkYy1kYWU1LWRhNDYtYTRmNy1kYWFiY2EyMTJhZjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUIzMDgwMzg1MkIzMTFFODkyMERFRTJEQTVFQkMzMzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUIzMDgwMzc1MkIzMTFFODkyMERFRTJEQTVFQkMzMzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmZkNmQyYzQ0LWE1NGYtMDM0MS05MjI2LTk3NjllNDcyMzE4NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowZGM4NDVkYy1kYWU1LWRhNDYtYTRmNy1kYWFiY2EyMTJhZjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4wejJUAAABYUlEQVR42pRRPauCYBhVr4ZYbYrZINLSEBkYOOTqmrt/LoL+hktY9EEU7TVEkVIUFQ4ilffQe6/3Y7ncM73P857n6xw6TVPqhfv9vl6vt9vt4XDI5XIIaZpWFEXTNFVVqU/QpGC3281ms9vtJkmSIAjFYjFJkjiOL5fL9XqVZdmyLCQ/CkCdz+eNRqNer4NN/cT5fB4Oh0EQOI5TKpXo5XI5Ho/b7TamE4bv+5vN5vl8NpvNWq1GkuiIvq7rslim1WplbM/z9vs9MlhpMBiwLFutVpE3DAPM6XRKpd8QRVGn0zkejyRcLBa9Xi/7xdhut8uARP0Hb7quoxo6IICap9MJ6+bzeVyJ27CbKIqE2u/38WZQMBqN8E2ytm1XKpXJZIIySEkOIEeHYWia5pes+gt/y5oZhxp4BON4ni8UCnAaxiED734bRzpB+NVqBSmgEsdxj8eDYZhyuay+kA18F2AASxPzlw/SUcgAAAAASUVORK5CYII="},tu9j:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAIAAAAWvsgoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5Y2IzMGUyNi0zYmM0LTE3NDYtYmNlNi1mNTcyZDM4ODU2YTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODFBRjdGRTg0QzM0MTFFN0I1N0ZBNDhFMTYxNkJCRTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODFBRjdGRTc0QzM0MTFFN0I1N0ZBNDhFMTYxNkJCRTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmYwNGVjZmMyLWNiZDUtYjg0ZS1iOTM0LTFiMWNiMTZkNWY5ZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Y2IzMGUyNi0zYmM0LTE3NDYtYmNlNi1mNTcyZDM4ODU2YTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6OzaoRAAAAe0lEQVR42mK8sXXmwScMhIGMPcvdJzL2MQ6yBBQ+PrDkLhMD0YAcpV/Ob1qyZNP5L1gYpJvKuHXmVuWB9BaLssyTg0uWoIQ1yD1AP224+glFmPHr169oblK2Zzh48AmfdoCfIQ+KqRj2PDl4EGhwDKZHWTDjGld4AAQYAMznOujosot+AAAAAElFTkSuQmCC"}});
//# sourceMappingURL=3.cb5a471a2528b3d32878.js.map