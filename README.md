----------


本期六篇文章目录(可点击跳转)
--

[**一. 阿里Weex框架快速体验与环境搭建**](http://blog.csdn.net/dfskhgalshgkajghljgh/article/details/52712293)

[**二. weex sdk集成到Android工程**](http://blog.csdn.net/dfskhgalshgkajghljgh/article/details/52757849)

[**三. weex服务项目搭建**](http://blog.csdn.net/dfskhgalshgkajghljgh/article/details/52776277)

[**四. Weex优雅的“降级”到 HTML5**](http://blog.csdn.net/dfskhgalshgkajghljgh/article/details/52797939)

[**五. weex项目实战篇（一）**](http://blog.csdn.net/dfskhgalshgkajghljgh/article/details/54731173)

[**六. weex项目实战篇（二）**](http://blog.csdn.net/dfskhgalshgkajghljgh/article/details/54732559)


----------
1. 前言
-----
经过前面的准备，我们终于可以开始上手weex项目了。本篇博客主要基于最近两周项目中用到的关于weex的知识点的整理。

2.新建weex项目
----------
1）新建一个名为hongkong的项目，如图所示：
![这里写图片描述](http://img.blog.csdn.net/20170125230554903?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

2）输入项目名称，如图所示：
![项目名称](http://img.blog.csdn.net/20170125230625392?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

3）点击【create】则项目则创建成功，如图所示：
![创建成功](http://img.blog.csdn.net/20170125230654403?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

4）新建一个.we文件
![这里写图片描述](http://img.blog.csdn.net/20170125230721737?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

5）新建一个home.we文件后，项目目录如下所示：
![这里写图片描述](http://img.blog.csdn.net/20170125230732403?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

6）为了方便参考阿里playground中的例子源码，我们把playground源码中的examples文件夹也拷贝到项目中，如下所示：
![这里写图片描述](http://img.blog.csdn.net/20170125231225073?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

7）可能你会发现我上图还有几个文件目录
image---存放图片
include---存放公共文件，类似做原生项目，比如title标题，每个xml都一样，这样我们做一个公共的，其他页面去include进去，这个文件夹下面就是放的公共页面。
node_modules---用到weex扩展组件的时候，在terminal中输入指令，则会自动生成，后面会介绍。
weex_tmp---编译weex文件后，生成的文件夹，可以想象成原生的build文件夹。

3.项目需求
------
需要实现如下所示界面：
![这里写图片描述](http://img.blog.csdn.net/20170125224849619?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
其实很多电商公司的首页面都是这样的楼层布局，我们实现出这个界面也就可以算大概会使用weex了。

刚刚拿到这个界面用weex实现的时候，很多人觉得无从下手，不是难，而是不熟悉，没有参考demo，我这篇文章就算抛砖引玉，带大家入门。

首先，如果让你用原生去实现首页，如何去做？
很简单，用listview或者recycleview，再配合itemType，用多套itemView即可实现，那语言其实都是想通的，既然原生可以用listview去实现，那weex里面是不是有listview控件，并且还有item的概念，我们通过查官方文档，果然是有的。
官方文档地址：https://weex-project.io/cn/v-0.10/references/components/list.html
这份官方文档，希望大家做项目前，可以逛一遍，不用全部记住，至少有个大概印象，知道有哪些控件，如何使用，等项目中需要具体用到，再去当做工具书去查。
比如：
官方文档里面说明，Weex 代码由 < template>、< style>、< script> 三个部分构成。
```
 <template>：必须的，使用 HTML 语法描述页面结构，内容由多个标签组成，不同的标签代表不同的组件。
 <style>：可选的，使用 CSS 语法描述页面的具体展现形式。
 <script>：可选的，使用 JavaScript 描述页面中的数据和页面的行为，Weex 中的数据定义也在 <script> 中进行。
```
像上述的基本概念，必须要掌握，不然项目是进行不下去的。

4.项目实战
------
下面的讲解，默认官方文档粗略的浏览了一遍。
1）官方list例子如下所示：

```
<template>
  <list class="list">
    <cell class="row" repeat="item in rows" index="{{$index}}">
      <text class="item-title">row {{item.id}}</text>
    </cell>
  </list>
</template>
<style></style>
<script>
module.exports = {
  data: {
    rows:[
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5}
    ]
  }
}
</script>
```
在webstorm的terminal中输入weex test.we后
![这里写图片描述](http://img.blog.csdn.net/20170125232128425?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

几秒后，则自动打开浏览器，并展现上面的效果。
![这里写图片描述](http://img.blog.csdn.net/20170125232235057?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
可见一个简单的list已经展示出来了，接下来我们就要改造实现我们需要的效果。

2）这边我讲下我当时的思路：
1.从上向下布局，可以看到第一行就是一个搜索框，用到的知识点就是< text>< div>< image>,有些属性不熟悉，可以查官方文档，布局位置通过style慢慢调整，https://weex-project.io/cn/v-0.10/references/common-style.html这个目录主要讲解位置调整，可以详细阅读。
2.尽量用官方的示例来改，比如用到< img>控件，我们不用自己去写，直接从官方文档，粘贴下来，再做修改，避免自己书写出现错误，从而真的是从入门到放弃。
3.下面的楼层布局，就是几个循环，再加上简单的控件使用

3）首页源码
```
<template>
    <div>
        <div class="header">
            <div style="flex-direction: row;align-items: center;margin-top: 18;">
                <div class="title-background" onclick="queryShops">
                    <img style="width: 30;height: 30;" src={{query}}></img>
                    <text class="title-query">搜索商品</text>
                </div>
                <div style=" height: 36;margin-left: 30">
                    <img style="width: 36;height: 36;" src={{scan}} onclick="scanClick"></img>
                </div>
            </div>
        </div>
        <list onloadmore="onloadmore" loadmoreoffset="80">
            <refresh onpullingdown="onpullingdown" onrefresh="onrefresh" display="{{refreshDisplay}}"
                     style="width:750;flex-direction: row;justify-content: center;">
                <loading-indicator style="height:80;width:80;color:#3192e1"></loading-indicator>
            </refresh>
            <cell id="item-0" onappear="hideTop">
                <div>
                    <slider class="slider" interval="3000" auto-play="true">
                        <div class="slider-pages" repeat="item in sliderContent" onclick="sliderClick">
                            <image class="img" src="{{item.pictureUrl}}"></image>
                        </div>
                        <indicator class="indicator"></indicator>
                    </slider>
                </div>
            </cell>
            <cell repeat={{iconList}} index="{{$index}}" style="flex-direction: row;">
                <div repeat={{data}} style="flex:1;align-items:center;justify-content:center;margin-top: 37"
                     onclick="sliderClick">
                    <img style="width: 100;height: 100;" src={{icon}}></img>
                    <text class="icon-name">{{name}}</text>
                </div>
            </cell>
            <cell>
                <div style="height: 26;background-color: #ececec;margin-top: 37">
                </div>
                <div style="height: 80;">
                    <div class="wrapper">
                        <div class="countdown">
                            <img style="width:730;height: 80 " src={{countDownBackgroundUrl}}></img>
                        </div>
                        <div class="time">
                            <img style="width:40;height: 30 " src={{timeUrl}}></img>
                        </div>
                        <div class="hour">
                            <text class="time_text">{{hour_time}}</text>
                        </div>
                        <div class="hour-colon">
                            <img style="width:4;height: 18 " src={{timeIconUrl}}></img>
                        </div>
                        <div class="minute_background">
                            <img style="width:40;height: 30 " src={{timeUrl}}></img>
                        </div>
                        <div class="minute">
                            <text class="time_text">{{minute_time}}</text>
                        </div>
                        <div class="minuter-colon">
                            <img style="width:4;height: 18 " src={{timeIconUrl}}></img>
                        </div>
                        <div class="second_background">
                            <img style="width:40;height: 30 " src={{timeUrl}}></img>
                        </div>
                        <div class="second">
                            <text class="time_text">{{second_time}}</text>
                        </div>
                        <div class="arrow">
                            <img style="width:27;height:30" src={{arrowUrl}}></img>
                        </div>
                    </div>
                </div>
                <scroller scroll-direction="horizontal" style="flex-direction: row;">
                    <div repeat={{sliderhorizontal}} style="justify-content:center;margin-top:20;margin-left:30;"
                         onclick="sliderClick">
                        <img class="slider-horizontal" src={{pictureUrl}}></img>
                        <text style="margin-top: 10;font-size:24px;font-family:PingFangSC-Light;color:#000000;">{{name}}
                        </text>
                        <text style="margin-top: 7;font-size:28px;font-family:PingFangSC-Semibold;color:#ff8000;">
                            {{price}}
                        </text>
                        <text style="margin-top: 10;font-size:20px;font-family:PingFangSC-Light;color:#999999;text-decoration: line-through">
                            {{oldPrice}}
                        </text>
                    </div>
                </scroller>
                <div style="height: 20;background-color: #ececec;margin-top: 26">
                </div>
            </cell>
            <cell>
                <div style="height: 80;background-color: #ffffff;justify-content:center; align-items: center;">
                    <img style="width: 750;height: 80;" src={{list_title}}></img>
                </div>
                <div>
                    <text style="background-color:#d8d8d8;height: 1 "></text>
                </div>
            </cell>
            <cell repeat={{shops}} index="{{$index}}" style="flex-direction: row;" onclick="sliderClick">
                <div repeat={{data}}
                     style="justify-content:center;flex:1;border-bottom-width:1px;border-bottom-color: #d8d8d8;">
                    <div style="flex-direction: row;">
                        <div style="margin-bottom:32;flex:1">
                            <div style="align-items: center;justify-content:center;margin-top: 25">
                                <img class="shop-icon" src={{icon}}></img>
                            </div>
                            <text style="margin-top: 37;margin-left:20;font-size:24px;font-family:PingFangSC-Light;color:#000000;letter-spacing: 0;height: 64">
                                {{name}}
                            </text>
                            <text style="margin-top: 4;margin-left:20;font-size:32px;font-family:PingFangSC-Semibold;color:#ff8000;">
                                {{price}}
                            </text>
                        </div>
                        <div>
                            <text style="background-color:#d8d8d8;width: 1;height: 490px"></text>
                        </div>
                    </div>
                </div>
            </cell>
        </list>
        <div class="upTop" onclick="goTopClick" if={{isShowTop}}>
            <img class="gotoTop" src={{gotoTopUrl}}></img>
        </div>
    </div>
</template>

<style>
    .header {
        height: 86;
        align-items: center;
        position: sticky;
    }

    .title-background {
        align-items: center;
        justify-content: center;
        background-color: #ececec;
        border-radius: 4px;
        width: 614px;
        height: 50px;
        border-radius: 4px;
        flex-direction: row;
    }

    .title-query {
        font-size: 28;
        font-family: PingFangSC-Light;
        font-size: 28px;
        color: #333333;
        text-align: center;
    }

    .img {
        width: 750;
        height: 528;
    }

    .slider {
        flex-direction: row;
        width: 750;
        height: 528;
    }

    .slider-pages {
        flex-direction: row;
        width: 750;
        height: 528;
    }

    .indicator {
        width: 750;
        height: 528;
        position: absolute;
        top: 236;
        left: 1;
        item-color: white;
        item-selectedColor: #ffa400;
        item-size: 20;
    }

    .icon-name {
        font-family: PingFangSC-Light;
        font-size: 24px;
        color: #333333;
        text-align: center;
        margin-top: 23;
    }

    .slider-horizontal {
        background-color: #ececec;
        border-radius: 4px;
        width: 240px;
        height: 240px;
    }

    .shop-icon {
        width: 286px;
        height: 286px;
    }

    .countdown {
        align-items: center
    }

    .time {
        position: absolute;;
        top: 28;
        left: 368;
    }

    .hour {
        position: absolute;;
        top: 28;
        left: 375;
        justify-content: center;
    }

    .time_text {
        font-family: PingFangSC-Medium;
        font-size: 22px;
        color: #ffffff;
        text-align: left;
    }

    .hour-colon {
        position: absolute;;
        top: 34;
        left: 414;
        justify-content: center;
    }

    .minute_background {
        position: absolute;;
        top: 28;
        left: 426;
        justify-content: center;
    }

    .minute {
        position: absolute;;
        top: 28;
        left: 433;
        justify-content: center;
    }

    .minuter-colon {
        position: absolute;;
        top: 34;
        left: 474;
        justify-content: center;
    }

    .second_background {
        position: absolute;;
        top: 28;
        left: 486;
        justify-content: center;
    }

    .second {
        position: absolute;;
        top: 28;
        left: 493;
        justify-content: center;
    }

    .arrow {
        position: absolute;;
        top: 28;
        left: 526;
        justify-content: center;
    }

    .wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .gotoTop {
        width: 80;
        height: 80;
    }

    .upTop {
        width: 80;
        height: 80;
        position: fixed;
        right: 20;
        bottom: 20;
    }
</style>

<script>
    var baseUrl = require('./url.js');
    var dom = require('@weex-module/dom')
    var navigator = require('@weex-module/navigator')
    var nextUrl = baseUrl.apiurl.resurl + 'search_first.js'
    var shopDetailUrl = baseUrl.apiurl.resurl + 'prodetail.js'
    var weexZxing = require('@weex-module/weex_zxing')
    module.exports = {
        data: {
            query: baseUrl.apiurl.resurl + "query.png",
            scan: baseUrl.apiurl.resurl + "scan.png",
            list_title: baseUrl.apiurl.resurl + "list_title.png",
            countDownBackgroundUrl: baseUrl.apiurl.resurl + "time_background.png",
            timeUrl: baseUrl.apiurl.resurl + "time.png",
            timeIconUrl: baseUrl.apiurl.resurl + "time_icon.png",
            arrowUrl: baseUrl.apiurl.resurl + "arrow.png",
            gotoTopUrl: baseUrl.apiurl.resurl + "goto_top.png",
            time: 0,
            hour_time: 30,
            minute_time: 40,
            second_time: 60,
            refreshDisplay: 'show',
            isShowTop: false,
            sliderContent: [
                {itemId: '520421163634', title: 'item1', pictureUrl: baseUrl.apiurl.resurl + 'slider1.png'},
                {itemId: '522076777462', title: 'item2', pictureUrl: baseUrl.apiurl.resurl + 'silder2.png'},
                {itemId: '522076777462', title: 'iten3', pictureUrl: baseUrl.apiurl.resurl + 'slider1.png'},
                {itemId: '522076777462', title: 'iten3', pictureUrl: baseUrl.apiurl.resurl + 'slider1.png'},
                {itemId: '522076777462', title: 'iten3', pictureUrl: baseUrl.apiurl.resurl + 'slider1.png'}
            ],
            iconList: [{
                data: [{name: "電視優惠", icon: baseUrl.apiurl.resurl + 'icon1.png'}, {
                    name: "冷氣優惠",
                    icon: baseUrl.apiurl.resurl + 'icon2.png'
                }, {name: "相機優惠", icon: baseUrl.apiurl.resurl + 'icon3.png'}, {
                    name: "手機優惠",
                    icon: baseUrl.apiurl.resurl + 'icon4.png'
                }]
            },
                {
                    data: [{name: "Microsoft專區", icon: baseUrl.apiurl.resurl + 'icon5.png'}, {
                        name: "Apple專區",
                        icon: baseUrl.apiurl.resurl + 'icon6.png'
                    }, {name: "促銷頻道", icon: baseUrl.apiurl.resurl + 'icon7.png'}, {
                        name: "促銷頻道",
                        icon: baseUrl.apiurl.resurl + 'icon8.png'
                    }],
                }],
            sliderhorizontal: [
                {
                    name: '華碩 (ASUS) UX1',
                    price: 'HK$2,999',
                    oldPrice: 'HK$1,999',
                    pictureUrl: baseUrl.apiurl.resurl + 'computer.png'
                },
                {
                    name: '華碩 (ASUS) UX2',
                    price: 'HK$2,999',
                    oldPrice: 'HK$1,999',
                    pictureUrl: baseUrl.apiurl.resurl + 'pad.png'
                },
                {
                    name: '華碩 (ASUS) UX3',
                    price: 'HK$2,999',
                    oldPrice: 'HK$1,999',
                    pictureUrl: baseUrl.apiurl.resurl + 'print.png'
                },
                {
                    name: '華碩 (ASUS) UX4',
                    price: 'HK$2,999',
                    oldPrice: 'HK$1,999',
                    pictureUrl: baseUrl.apiurl.resurl + 'computer.png'
                },
                {
                    name: '華碩 (ASUS) UX5',
                    price: 'HK$2,999',
                    oldPrice: 'HK$1,999',
                    pictureUrl: baseUrl.apiurl.resurl + 'pad.png'
                }
            ],
            shops: [{
                data: [{
                    name: "Apple iPhone 7 128GB",
                    icon: baseUrl.apiurl.resurl + 'nikon.png',
                    price: "HK$3,998.00"
                }, {
                    name: "三星 Galaxy J3 Pro（J3110）2+16G 皓月銀",
                    icon: baseUrl.apiurl.resurl + 'computer.png',
                    price: "HK$19,999.00"
                }]
            },
                {
                    data: [{
                        name: "Apple iPhone 7 128GB 玫瑰金色",
                        icon: baseUrl.apiurl.resurl + 'headset.png',
                        price: "HK$3,998.00"
                    }, {name: "Apple iPhone 7 128GB", icon: baseUrl.apiurl.resurl + 'pad.png', price: "HK$3,998.00"}],
                }]
        },
        created: function () {
            this.refreshDisplay = 'show'
        },
        methods: {
            queryShops: function (e) {
                var params = {'url': nextUrl, 'animated': 'true'}
                navigator.push(params, function (e) {
                    console.log('i am the callback.')
                });
            },
            scanClick: function (e) {
                weexZxing.assistant();
            },
            sliderClick: function (e) {
                var params = {'url': shopDetailUrl, 'animated': 'true'}
                navigator.push(params, function (e) {
                    console.log('i am the callback.')
                });
            },
            onrefresh: function (e) {
                this.refreshDisplay = 'show';
                this.$call('modal', 'toast', {
                    'message': '刷新成功 ',
                    'duration': 2.0
                });
                this.refreshDisplay = 'hide'
            },
            onpullingdown: function (e) {
            },
            goTopClick: function () {
                var el = this.$el('item-0')
                dom.scrollToElement(el, {
                    offset: 0
                })
            },
            onloadmore: function (e) {
                this.isShowTop = true;
            },
            hideTop: function (e) {
                this.isShowTop = false;
            }
        },
        ready: function () {
            setInterval(function () {
                this.second_time--;
                this._app.updateActions();
            }.bind(this), 1000);
        },
    }
</script>
```
通过上面的布局，则跨越实现出需求的效果。下面稍微分析下上述代码。

4）源码分析
布局就不做过多解释了，都是用的官方控件，不清楚的可以看官方介绍。主要讲下一些技巧，心得跟当时遇到的一些坑。
**1.公共url的抽取**
最后图片，js都部署在远程服务器，原生开发的时候，相信大家都会新建一个UrlUtil类来管理url，当然该类里面肯定有个baseUrl为服务器地址，理所应当，weex项目也可以这样，方便维护。

如图所示：
![这里写图片描述](http://img.blog.csdn.net/20170125234846250?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
在.we文件中使用到图片地址时，则可以用如下方式：

```
<script>
var baseUrl = require('./url.js');
 module.exports = {
        data: {
            query: baseUrl.apiurl.resurl + "query.png",
            scan: baseUrl.apiurl.resurl + "scan.png",
            }
          }
</script>
```
2.多页面跳转。
当点击列表中一个商品，跳转到商品详情页时，原生是通过intent意图，weex中可以通过内建模块navigator来实现。
官方地址：https://weex-project.io/cn/v-0.10/references/modules/navigator.html
但是如果一个手机装了两个weex项目的话，跳转会弹出选择框，问你跳转到哪个项目，就像你手机里面有多个浏览器，打开网页时，询问你一样，这种效果显然不好。可以修改，但是要改源码，如下所示：
![这里写图片描述](http://img.blog.csdn.net/20170126000916072?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
在SDK中找到WXNavigatorModule类，然后修改WEEX的值为自己项目特有，再在隐式意图跳转的地方，修改成刚刚修改的值即可。
![这里写图片描述](http://img.blog.csdn.net/20170126001152998?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

3.weex通过网络请求获取数据。
官方地址：https://weex-project.io/cn/v-0.10/references/modules/stream.html

4.weex如何调用android原生功能。
既然weex项目要调用android原生功能，很明显，我们需要再创建一个android项目来集成weex项目，从而实现weex调用android原生功能。
集成可以参考:http://blog.csdn.net/dfskhgalshgkajghljgh/article/details/52757849
Weex 为我们提供了扩展机制，共提供了三类扩展：Module扩展、Component扩展和Adapter扩展。
![这里写图片描述](http://img.blog.csdn.net/20170126001405674?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

1）Module扩展
第一步，继承WXModule类，实现扩展：
```
public class WXZxingModule extends WXModule {
    @WXModuleAnno(runOnUIThread = true)
    public void assistant() {
        IntentIntegrator integrator = new IntentIntegrator((Activity)mWXSDKInstance.getContext());
        integrator.initiateScan();
    }
}
```
第二步，注册扩展：

```
public class WXApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this, config);

        try {
            WXSDKEngine.registerModule("weex_zxing", WXZxingModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }
}
```
第三步，we文件中调用module中方法：
1.点击相应事件

```
<div style=" height: 36;margin-left: 30">
                    <img style="width: 36;height: 36;" src={{scan}} onclick="scanClick"></img>
                </div>
```
2.调用原生方法
```               
<script>
var weexZxing = require('@weex-module/weex_zxing')
module.exports = {
methods: {
            scanClick: function (e) {
                weexZxing.assistant();
            }
         }
     }
</script>            
```

2）Component扩展
比如一些特殊view，weex无法实现，则可以自定义Component来实现，让后weex中引用。
第一步，继承WXComponent< TextView> 类，实现扩展：

```
public class RichText extends WXComponent<TextView> {

  public RichText(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
    super(instance, dom, parent, isLazy);
  }

  @Override
  protected TextView initComponentHostView(Context context) {
    TextView view = new TextView(context);
    view.setMovementMethod(LinkMovementMethod.getInstance());
    return view;
  }

  @WXComponentProp(name = "tel")//该注解，则为weex中调用的方法名
  public void setTelLink(String tel){
    SpannableString spannable=new SpannableString(tel);
    spannable.setSpan(new URLSpan("tel:"+tel),0,tel.length(), Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
    ((TextView)mHost).setText(spannable);
  }
}
```
第二步，注册扩展：

```
WXSDKEngine.registerComponent("richtext", RichText.class);
```
第三步，we文件中调用：

```
<template>
<div>
    <richtext tel="1391486934">点击跳转到拨打电话</richtext>
</div>

</template>
```

3）Adapter 扩展：
前面已经介绍过：
http://blog.csdn.net/dfskhgalshgkajghljgh/article/details/52757849

5.项目成果
------

目前项目全部都是用weex实现的，效果图如下图所示：
首页：
![首页](http://img.blog.csdn.net/20170126003952726?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


----------


登录页：
![登录页](http://img.blog.csdn.net/20170126004012430?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


----------


商品为空：
![商品为空](http://img.blog.csdn.net/20170126004944310?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


----------


商品详情页：
![商品详情页](http://img.blog.csdn.net/20170126004954227?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGZza2hnYWxzaGdrYWpnaGxqZ2g=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

6.项目源码：
github下载地址：https://github.com/cyforever123/weex-hongkong


----------
如有错误欢迎指出来，一起学习。

交流讨论群
群号：469890293
