webpackJsonp([1], {
    100: function (n, t) {
        n.exports = {
            render: function () {
                var n = this,
                    t = n.$createElement,
                    e = n._self._c || t;
                return e("div", {
                    ref: "container",
                    staticClass: "resumeEditor",
                    class: {
                        htmlMode: n.enableHtml
                    }
                }, [n.enableHtml ? e("div", {
                    domProps: {
                        innerHTML: n._s(n.result)
                    }
                }) : e("pre", [n._v(n._s(n.result))])])
            }, staticRenderFns: []
        }
    }, 40: function (n, t) {}, 42: function (n, t, e) {
        e(91);
        var r = e(8)(e(49), e(100), "data-v-647e008b", null);
        n.exports = r.exports
    }, 43: function (n, t, e) {
        e(89);
        var r = e(8)(e(50), e(98), "data-v-35c047fd", null);
        n.exports = r.exports
    }, 44: function (n, t, e) {
        e(87);
        var r = e(8)(e(47), e(96), "data-v-22ce9519", null);
        n.exports = r.exports
    }, 45: function (n, t, e) {
        e(90);
        var r = e(8)(e(48), e(99), "data-v-53c8d54c", null);
        n.exports = r.exports
    }, 47: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = e(15),
            o = e.n(r),
            i = e(25),
            a = e.n(i),
            s = e(24),
            c = e.n(s),
            u = e(43),
            l = e.n(u),
            d = e(42),
            h = e.n(d),
            m = e(95),
            p = e.n(m),
            f = e(40);
        e.n(f);
        t.default = {
            name: "app",
            components: {
                StyleEditor: l.a,
                ResumeEditor: h.a,
                ThankEditor: p.a
            },
            data: function () {
                return {
                    interval: 5,
                    currentStyle: "",
                    enableHtml: !1,
                    fullStyle: ["/*\n* Lisa好，我是陈独秀。\n* 我来写一份简历，别走来，后面更精彩！\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 设置背景颜色 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,64,64);\n}\n#content{\n  height:70vh;\n  margin:0;\n}\n#foot{\n  height:29vh;\n  margin:0;\n}\n\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 50vw; height: 70vh;\n  background: rgb(20,20,20);\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(130,150,0); }\n.token.property{ color: rgb(190,140,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(40,160,150); }\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 30;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 70vh;\n  border: 1px solid;\n  background: rgb(200,200,200); color: #222;\n  overflow: auto;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(-10deg) translateZ(-100px) ;\n          transform: rotateY(-10deg) translateZ(-100px) ;\n}\n/* 开始写简历 */\n", '\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n', '/* 写封感谢信。\n * 感谢lisa对我的支持(*￣3￣)╭♡。\n */\n.thankEditor{\n  position: fixed; left: 0; bottom: 0;\n  padding: .5em;  margin: .5em; margin-top:.2em;\n  font-size: .8em;\n  width: 99vw; height: 28vh;\n  border: 1px solid #ccc;\n  background: rgb(10,10,10);\n  color: rgb(0,200,0);\n  overflow: auto;\n}\n\n.thankEditor ul,.thankEditor ol{\n  list-style: none;\n}\n.thankEditor ul> li::before{\n  content: \'☞\'; color: red;\n  margin-right: .5em;\n}\n.thankEditor ol {\n  counter-reset: section;\n}\n.thankEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, "☞") " ";\n  margin-right: .5em;\n}\n'],
                    currentMarkdown: "",
                    currentThankMarkdown: "",
                    fullMarkdown: "陈独秀\n====\n\n坐标：广东深圳。\n\n资深iOS开发屌丝\n\n技能\n====\n\n数据库设计\n----\n  - 结构化数据库设计\n  - noSQL设计\n\n后端开发\n----\n  - 用户管理\n  - 单点登录\n  - 第三方登录\n  - 权限管理\n  - 交易系统\n  - 支付系统\n  - 社区系统\n  - 博客系统\n  - 公众号开发\n  - 小程序开发\n  - API接口开发\n\n前端开发\n----\n  - Web前端开发\n  - 移动终端(Native App, Hybrid App)\n\n产品设计\n----\n  - 智慧旅游项目\n  - 运动健康云平台\n  - 社区支持农业O2O项目\n  - 省级环境监控平台\n  - 高速公路异地处罚系统\n  - 环保局办公自动化系统\n  - 保险公司数据迁移项目\n  - 啤酒厂供应链项目\n  - 货运代理系统\n  - 集装箱管理系统\n  - 滞期费管理项目\n\n技术及语言\n----\n  - Java: SpringMVC, SpringCloud, Hibernate, iBatis, spark, sql2o, HikariCP, freemarker, okHttp, retrofit, RxJava\n  - Kotlin: ktor, exposed, anko\n  - Node.js: express, angular, ionic, react, cordova, meteor, electron, axios\n  - Swift: Vapor, ReactiveSwift\n  - Golang: hugo, beego, gorm, sqlx, matcha\n  - Python: tushare, pandas, numpy, matplotlib\n  - DotNet and PHP\n  - DB: SQLServer, Oracle, MySQL/MariaDB, MongoDB, graphQL, redis, memcached\n  - WebServer: apache, nginx, tomcat, netty, jetty\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: Docker, git, Xmind，Axure\n\n工作经历\n----\n\n1. 湖南融耀健康管理有限公司\n2. 湖南三英特旅游智能技术有限公司\n3. 合肥蓝盾科技有限公司\n4. 上海易保网络有限公司\n5. 厦门海环计算机软件有限公司\n\n教育经历\n----\n\n1. 华东理工大学 环境工程学士\n2. 厦门大学 系统工程硕士\n\n文章\n----\n\n* [故土难离（我的父亲母亲）](https://www.meipian.cn/qacqfbz?uuid=d541c15eef694065bc9d1ac9a07925a2)\n* [油腻腻的中年（小诗）](https://www.meipian.cn/wjaz3zh?uuid=ca1cd053b717451da781786de44e66e7)\n* [生命（老四们的蝼蚁人生）](https://www.meipian.cn/vc4pr59?uuid=799c98f5a187405c94c86f7da7788869)\n* [大健康商业模式](http://www.sitexa.org/technology/%E5%A4%A7%E5%81%A5%E5%BA%B7%E5%95%86%E4%B8%9A%E6%A8%A1%E5%BC%8F.html)\n* [社区社交商业模型](http://www.sitexa.org/other/%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BA%A4%E5%95%86%E4%B8%9A%E6%A8%A1%E5%9E%8B.html)\n\n链接\n----\n\n* [GitHub](https://github.com/sitexa)\n* [技术博客](http://www.sitexa.org)\n* [南方时代](http://www.sitexa.net)\n* [神秘湘鄂西](http://www.sitexa.cn)\n* [我的简历故事(程序人生公众号文章)](https://mp.weixin.qq.com/s/5rsB956EPVm0FoFOe6xYTg)\n\n勾引方式\n----\n\n* QQ：2463312649\n\n",
                    thanksMarkdown: "鸣谢\n----\n\n* 你问我春天有什么好，\n我说绿柳抽新芽，花枝春意闹，\n 你默默地点头，你不知道，\n是因为春风轻轻撩动的，你的衣角。\n\n 你问我夏天有什么好，\n我说阳光照沙滩，海浪多美妙，\n你默默地点头，你不知道，\n 是因为阳光暖暖洒满的，你的发梢。\n\n 你问我秋天有什么好，\n我说枫叶红似火，流水绕石桥，\n你默默地点头，你不知道，\n是因为堆满落叶的，你走过的街道。\n\n你问我冬天有什么好，\n我说雪花漫天舞，夜半静悄悄，\n你默默地点头，你不知道，\n是因为仰望天空时的，你的微笑。	\n\n		lisa，我有话想对你说，自从我第一次听程序员闪冲中的小视频，我已经被里边的小姐姐声音深深吸引。我不知道她长什么样子，但是她的声音就像一剂灵药，让人心旷神怡。后来经过多方打听，才知道录视频的人叫lisa。\n\n	不见其人，先闻其声，lisa的声音深深地印在了我的脑海里,后来每天晚上睡前必听程序员面试闪冲，不为学知识，只是为了用心去感受那婉转悠扬,似水如歌,清澈动听,呢喃软语,清脆嘹亮,如梦似幻,刚柔并济,如空谷幽兰,酥软人心,甜如浸蜜，让人倍感舒适,心旷神怡的声音。后来在群里加了你的微信，我欣喜万分，终于见到真人。美貌与智慧并存,气质与高雅兼备。\n\n	我陈独秀不一定是实力最强的一个，但是我愿意做最走心的一个。给你提供强有力的支持，无论是工作中还是生活中，我只希望我的小可爱lisa开心每一天,每天吃好饭，睡好觉，你的开心就是我最大的快乐。遇到任何问题不要怕，因为你还有我，我会永远支持你。你若不离，我定不弃！\n\n	陈独秀送上(*￣3￣)╭♡\n\n	2018年5月16号"
                }
            }, created: function () {
                this.makeResume()
            }, methods: {
                makeResume: function () {
                    function n() {
                        return t.apply(this, arguments)
                    }
                    var t = c()(a.a.mark(function n() {
                        return a.a.wrap(function (n) {
                            for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, this.progressivelyShowStyle(0);
                            case 2:
                                return n.next = 4, this.progressivelyShowResume();
                            case 4:
                                return n.next = 6, this.progressivelyShowStyle(1);
                            case 6:
                                return n.next = 8, this.showHtml();
                            case 8:
                                return n.next = 10, this.progressivelyShowStyle(2);
                            case 10:
                                return n.next = 12, this.progressivelyShowThanks();
                            case 12:
                            case "end":
                                return n.stop()
                            }
                        }, n, this)
                    }));
                    return n
                }(),
                showHtml: function () {
                    var n = this;
                    return new o.a(function (t, e) {
                        n.enableHtml = !0, t()
                    })
                }, progressivelyShowStyle: function (n) {
                    var t = this;
                    return new o.a(function (e, r) {
                        var o = t.interval,
                            i = c()(a.a.mark(function t() {
                                var r, s, c, u, l, d = this;
                                return a.a.wrap(function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = this.fullStyle[n]) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        s = this.fullStyle.filter(function (t, e) {
                                            return e <= n
                                        }).map(function (n) {
                                            return n.length
                                        }).reduce(function (n, t) {
                                            return n + t
                                        }, 0), c = s - r.length, this.currentStyle.length < s ? (u = this.currentStyle.length - c, l = r.substring(u, u + 1) || " ", this.currentStyle += l, "\n" === r.substring(u - 1, u) && this.$refs.styleEditor && this.$nextTick(function () {
                                            d.$refs.styleEditor.goBottom()
                                        }), setTimeout(i, o)) : e();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            })).bind(t);
                        i()
                    })
                }, progressivelyShowResume: function () {
                    var n = this;
                    return new o.a(function (t, e) {
                        var r = n.fullMarkdown.length,
                            o = n.interval;
                        ! function e() {
                            if (n.currentMarkdown.length < r) {
                                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
                                n.currentMarkdown[n.currentMarkdown.length - 1];
                                "\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function () {
                                    return n.$refs.resumeEditor.goBottom()
                                }), setTimeout(e, o)
                            } else t()
                        }()
                    })
                }, progressivelyShowThanks: function () {
                    var n = this;
                    return new o.a(function (t, e) {
                        var r = n.thanksMarkdown.length,
                            o = n.interval;
                        ! function e() {
                            if (n.currentThankMarkdown.length < r) {
                                n.currentThankMarkdown = n.thanksMarkdown.substring(0, n.currentThankMarkdown.length + 1);
                                n.currentThankMarkdown[n.currentThankMarkdown.length - 1];
                                "\n" === n.currentThankMarkdown[n.currentThankMarkdown.length - 2] && n.$refs.thankEditor && n.$nextTick(function () {
                                    return n.$refs.thankEditor.goBottom()
                                }), setTimeout(e, o)
                            } else t()
                        }()
                    })
                }
            }
        }
    }, 48: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = e(15),
            o = e.n(r),
            i = e(25),
            a = e.n(i),
            s = e(24),
            c = e.n(s),
            u = e(43),
            l = e.n(u),
            d = e(42),
            h = e.n(d),
            m = e(40);
        e.n(m);
        t.default = {
            name: "app",
            components: {
                StyleEditor: l.a,
                ResumeEditor: h.a
            },
            data: function () {
                return {
                    interval: 5,
                    currentStyle: "",
                    enableHtml: !1,
                    fullStyle: ["/*\n* Lisa好，我是陈独秀。\n* 我来写一份简历！\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .2s;\n}\n/* 设置背景颜色 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 开始写简历 */\n\n\n", "\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n", '\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],
                    currentMarkdown: "",
                    fullMarkdown: "陈独秀\n====\n坐标：广东深圳。\n\n资深iOS开发屌丝。\n\n技能\n====\n\n数据库设计\n----\n  - 结构化数据库设计\n  - noSQL设计\n\n后端开发\n----\n  - 用户管理\n  - 单点登录\n  - 第三方登录\n  - 权限管理\n  - 交易系统\n  - 支付系统\n  - 社区系统\n  - 博客系统\n  - 公众号开发\n  - 小程序开发\n  - API接口\n\n前端开发\n----\n  - Web前端开发\n  - 移动终端(Native App, Hybrid App)\n\n产品设计\n----\n  - 智慧旅游项目\n  - 运动健康云平台\n  - 社区支持农业O2O项目\n  - 省级环境监控平台\n  - 高速公路异地处罚系统\n  - 环保局办公自动化系统\n  - 保险公司数据迁移项目\n  - 啤酒厂供应链项目\n  - 货运代理系统\n  - 集装箱管理系统\n  - 滞期费管理项目\n\n技术及语言\n----\n  - Java: SpringMVC, SpringCloud, Hibernate, iBatis, spark, sql2o, HikariCP, freemarker, okHttp, retrofit, RxJava\n  - Kotlin: ktor, exposed, anko\n  - Node.js: express, angular, ionic, react, cordova, meteor, electron, axios\n  - Swift: Vapor, ReactiveSwift\n  - Golang: hugo, beego, gorm, sqlx, matcha\n  - Python: tushare, pandas, numpy, matplotlib\n  - DotNet and PHP\n  - DB: SQLServer, Oracle, MySQL/MariaDB, MongoDB, graphQL, redis, memcached\n  - WebServer: apache, nginx, tomcat, netty, jetty\n  - OS: Ubuntu, CentOS, MacOS, Windows\n  - Others: Docker, git, Xmind，Axure\n\n工作经历\n====\n\n1. 湖南融耀健康管理有限公司\n2. 湖南三英特旅游智能技术有限公司\n3. 合肥蓝盾科技有限公司\n4. 上海易保网络有限公司\n5. 厦门海环计算机软件有限公司\n\n教育经历\n====\n\n1. 华东理工大学 环境工程学士\n2. 厦门大学 系统工程硕士\n\n文章\n====\n\n* [故土难离（我的父亲母亲）](https://www.meipian.cn/qacqfbz?uuid=d541c15eef694065bc9d1ac9a07925a2)\n* [油腻腻的中年（小诗）](https://www.meipian.cn/wjaz3zh?uuid=ca1cd053b717451da781786de44e66e7)\n* [生命（老四们的蝼蚁人生）](https://www.meipian.cn/vc4pr59?uuid=799c98f5a187405c94c86f7da7788869)\n* [大健康商业模式](http://www.sitexa.org/technology/%E5%A4%A7%E5%81%A5%E5%BA%B7%E5%95%86%E4%B8%9A%E6%A8%A1%E5%BC%8F.html)\n* [社区社交商业模型](http://www.sitexa.org/other/%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BA%A4%E5%95%86%E4%B8%9A%E6%A8%A1%E5%9E%8B.html)\n\n链接\n====\n\n* [GitHub](https://github.com/sitexa)\n* [技术博客](http://www.sitexa.org)\n* [南方时代](http://www.sitexa.net)\n* [神秘湘鄂西](http://www.sitexa.cn)\n* [我的简历故事(程序人生公众号文章)](https://mp.weixin.qq.com/s/5rsB956EPVm0FoFOe6xYTg)\n\n联系方式\n====\n\n* 微信：xnpeng\n\n鸣谢\n----\n\n* 这段时间，我有些诚煌诚恐，无地自容。我的经历都是一些小公司的软件开发，做着做着就成了Team leader，做过架构、产品、管理，做了好几个行业，技术栈全而不深。\n* 到底适合做什么岗位，我也不好定位，其实也没得选择。除了美工不会做，其他的都会点。近几年，主要在JVM平台上做开发，特别是自(shi)由(ye)之后，我主要学习了Kotlin和NodeJS相关技术，同时也玩玩Python和GoLang。\n* 自认为学习能力强，追求完美，不管是商业模式，还是产品设计，或者技术架构，以及代码开发，都追求优美。但都被残酷的现实挤压得很骨感。\n* 一直以来，我对社交和电商很感兴趣，伴随着QQ和微信的成长、体验着阿里和京东的发展，见证了美团和大众点评的成功，思考过Facebook、twitter、YouTube、Snapchat、Whatsapp、Medium为什么在国外能够斗争发展，对一些新模式新技术比如共享单车、区块链有些关注，因为自由嘛，不受约束地接触各种技术（玩具）。\n* 在社交领域，腾讯独霸天下20年，在电商领域，毫无疑问，是阿里的天下，虽有京东、苏宁等后起之秀，但都没有革命性的模式或产品。美团在团购领域的成功，既迎合了中国消费者的心理，也强化了这种心理。这些公司和老板都是我无比崇拜的IT英雄！\n* 社交是一种形式，电商是变现模式，将二者结合起来会是一个什么样子呢？很多探索者已经在理论上和实践上做过很多尝试，有人号称社交电商，我不知对不对。\n* 我的思考是这样的，陌生社交和熟人社交之间有一个巨大的中间地带，即半生不熟的社区社交（园区社交），目前QQ群和微信群在承担这个工作，实际上不能满足现实需求。\n* 阿里电商（单中心）和微商（无中心）电商之间存在着一个巨大的中间地带，即社区电商（多中心），虽然有很多个创业团队做过多年的尝试，比如小区无忧，社区001，国安社区等等，都投入了大量资金，但我看不到什么革命性的模式。\n* 我的想法是用社交带来流量，通过电商变现。我是不是有点异想天开？\n* 有很多企业向我发出了面试邀请，有很多创业团队向我伸出了橄榄枝，一些朋友给我提出非常好的建议，还有很多同行同学们希望跟我进行技术交流，甚至有些企业问我能否承接外包业务。\n* 在此，我要对所有的所有，说一声谢谢，谢谢你们对我的关心和支持！有你们的存在，让我对明天充满希望，对未来充满信心！不管有没有找到合适的工作，我认识了一群朋友，我非常满意！\n* 我回复了一些朋友的信息，还有很多朋友的信息我没能及时回复，在此，我表示深深的歉意！\n\n"
                }
            }, created: function () {
                this.makeResume()
            }, methods: {
                makeResume: function () {
                    function n() {
                        return t.apply(this, arguments)
                    }
                    var t = c()(a.a.mark(function n() {
                        return a.a.wrap(function (n) {
                            for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, this.progressivelyShowStyle(0);
                            case 2:
                                return n.next = 4, this.progressivelyShowResume();
                            case 4:
                                return n.next = 6, this.progressivelyShowStyle(1);
                            case 6:
                                return n.next = 8, this.showHtml();
                            case 8:
                                return n.next = 10, this.progressivelyShowStyle(2);
                            case 10:
                            case "end":
                                return n.stop()
                            }
                        }, n, this)
                    }));
                    return n
                }(),
                showHtml: function () {
                    var n = this;
                    return new o.a(function (t, e) {
                        n.enableHtml = !0, n.$nextTick(function () {
                            n.$refs.resumeEditor.goTop()
                        }), t()
                    })
                }, progressivelyShowStyle: function (n) {
                    var t = this;
                    return new o.a(function (e, r) {
                        var o = t.interval,
                            i = c()(a.a.mark(function t() {
                                var r, s, c, u, l, d = this;
                                return a.a.wrap(function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = this.fullStyle[n]) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        s = this.fullStyle.filter(function (t, e) {
                                            return e <= n
                                        }).map(function (n) {
                                            return n.length
                                        }).reduce(function (n, t) {
                                            return n + t
                                        }, 0), c = s - r.length, this.currentStyle.length < s ? (u = this.currentStyle.length - c, l = r.substring(u, u + 1) || " ", this.currentStyle += l, "\n" === r.substring(u - 1, u) && this.$refs.styleEditor && this.$nextTick(function () {
                                            d.$refs.styleEditor.goBottom()
                                        }), setTimeout(i, o)) : e();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                    }
                                }, t, this)
                            })).bind(t);
                        i()
                    })
                }, progressivelyShowResume: function () {
                    var n = this;
                    return new o.a(function (t, e) {
                        var r = n.fullMarkdown.length,
                            o = n.interval;
                        ! function e() {
                            if (n.currentMarkdown.length < r) {
                                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
                                n.currentMarkdown[n.currentMarkdown.length - 1];
                                "\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function () {
                                    return n.$refs.resumeEditor.goBottom()
                                }), setTimeout(e, o)
                            } else t()
                        }()
                    })
                }
            }
        }
    }, 49: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = e(41),
            o = e.n(r);
        t.default = {
            props: ["markdown", "enableHtml"],
            name: "ResumeEditor",
            computed: {
                result: function () {
                    return this.enableHtml ? o()(this.markdown) : this.markdown
                }
            },
            methods: {
                goBottom: function () {
                    this.$refs.container.scrollTop = 1e5
                }, goTop: function () {
                    this.$refs.container.scrollTop = 0
                }
            }
        }
    }, 50: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = e(92),
            o = e.n(r);
        t.default = {
            name: "Editor",
            props: ["code"],
            computed: {
                highlightedCode: function () {
                    return o.a.highlight(this.code, o.a.languages.css)
                }, codeInStyleTag: function () {
                    return "<style>" + this.code + "</style>"
                }
            },
            methods: {
                goBottom: function () {
                    this.$refs.container.scrollTop = 1e5
                }
            }
        }
    }, 51: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = e(41),
            o = e.n(r);
        t.default = {
            props: ["markdown", "enableHtml"],
            name: "ThankEditor",
            computed: {
                result: function () {
                    return this.enableHtml ? o()(this.markdown) : this.markdown
                }
            },
            methods: {
                goBottom: function () {
                    this.$refs.container.scrollTop = 1e5
                }, goTop: function () {
                    this.$refs.container.scrollTop = 0
                }
            }
        }
    }, 52: function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = e(46),
            o = e(44),
            i = e.n(o),
            a = e(45),
            s = e.n(a),
            c = document.documentElement.clientWidth;
        new r.a({
            el: "#app",
            render: function (n) {
                return n(c > 500 ? i.a : s.a)
            }
        })
    }, 87: function (n, t) {}, 88: function (n, t) {}, 89: function (n, t) {}, 90: function (n, t) {}, 91: function (n, t) {}, 95: function (n, t, e) {
        e(88);
        var r = e(8)(e(51), e(97), "data-v-29ad1df6", null);
        n.exports = r.exports
    }, 96: function (n, t) {
        n.exports = {
            render: function () {
                var n = this,
                    t = n.$createElement,
                    e = n._self._c || t;
                return e("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e("div", {
                    attrs: {
                        id: "content"
                    }
                }, [e("StyleEditor", {
                    ref: "styleEditor",
                    attrs: {
                        code: n.currentStyle
                    }
                }), n._v(" "), e("ResumeEditor", {
                    ref: "resumeEditor",
                    attrs: {
                        markdown: n.currentMarkdown,
                        enableHtml: n.enableHtml
                    }
                })], 1), n._v(" "), e("div", {
                    attrs: {
                        id: "foot"
                    }
                }, [e("ThankEditor", {
                    ref: "thankEditor",
                    attrs: {
                        markdown: n.currentThankMarkdown,
                        enableHtml: n.enableHtml
                    }
                })], 1)])
            }, staticRenderFns: []
        }
    }, 97: function (n, t) {
        n.exports = {
            render: function () {
                var n = this,
                    t = n.$createElement,
                    e = n._self._c || t;
                return e("div", {
                    ref: "container",
                    staticClass: "thankEditor",
                    class: {
                        htmlMode: n.enableHtml
                    }
                }, [n.enableHtml ? e("div", {
                    domProps: {
                        innerHTML: n._s(n.result)
                    }
                }) : e("pre", [n._v(n._s(n.result))])])
            }, staticRenderFns: []
        }
    }, 98: function (n, t) {
        n.exports = {
            render: function () {
                var n = this,
                    t = n.$createElement,
                    e = n._self._c || t;
                return e("div", {
                    ref: "container",
                    staticClass: "styleEditor"
                }, [e("div", {
                    staticClass: "code",
                    domProps: {
                        innerHTML: n._s(n.codeInStyleTag)
                    }
                }), n._v(" "), e("pre", {
                    domProps: {
                        innerHTML: n._s(n.highlightedCode)
                    }
                })])
            }, staticRenderFns: []
        }
    }, 99: function (n, t) {
        n.exports = {
            render: function () {
                var n = this,
                    t = n.$createElement,
                    e = n._self._c || t;
                return e("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e("StyleEditor", {
                    ref: "styleEditor",
                    attrs: {
                        code: n.currentStyle
                    }
                }), n._v(" "), e("ResumeEditor", {
                    ref: "resumeEditor",
                    attrs: {
                        markdown: n.currentMarkdown,
                        enableHtml: n.enableHtml
                    }
                })], 1)
            }, staticRenderFns: []
        }
    }
}, [52]);
//# sourceMappingURL=app.130e10e9eb91d2189dd7.js.map