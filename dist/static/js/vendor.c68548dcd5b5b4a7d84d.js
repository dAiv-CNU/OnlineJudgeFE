webpackJsonp([6], {
  "+E39": function (t, e, r) {
    t.exports = !r("S82l")(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, "+ZMJ": function (t, e, r) {
    var n = r("lOnJ");
    t.exports = function (t, e, r) {
      if (n(t), void 0 === e) return t;
      switch (r) {
        case 1:
          return function (r) {
            return t.call(e, r)
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n)
          };
        case 3:
          return function (r, n, o) {
            return t.call(e, r, n, o)
          }
      }
      return function () {
        return t.apply(e, arguments)
      }
    }
  }, "+tPU": function (t, e, r) {
    r("xGkn");
    for (var n = r("7KvD"), o = r("hJx8"), i = r("/bQp"), a = r("dSzd")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
      var c = s[u], l = n[c], h = l && l.prototype;
      h && !h[a] && o(h, a, c), i[c] = i.Array
    }
  }, "+vXH": function (t, e, r) {
    r("77Ug")("Float64", 8, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n)
      }
    })
  }, "+yjc": function (t, e, r) {
    var n = r("UKM+");
    r("3i66")("isSealed", function (t) {
      return function (e) {
        return !n(e) || !!t && t(e)
      }
    })
  }, "//Fk": function (t, e, r) {
    t.exports = {default: r("U5ju"), __esModule: !0}
  }, "/Hyb": function (t, e, r) {
    t.exports = r("uomd")(40)
  }, "/bQp": function (t, e) {
    t.exports = {}
  }, "/ocq": function (t, e, r) {
    t.exports = r("uomd")(17)
  }, "/whu": function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t
    }
  }, "07k+": function (t, e, r) {
    for (var n, o = r("OzIq"), i = r("2p1q"), a = r("ulTY"), s = a("typed_array"), u = a("view"), c = !(!o.ArrayBuffer || !o.DataView), l = c, h = 0, m = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); h < 9;) (n = o[m[h++]]) ? (i(n.prototype, s, !0), i(n.prototype, u, !0)) : l = !1;
    t.exports = {ABV: c, CONSTR: l, TYPED: s, VIEW: u}
  }, "0Rih": function (t, e, r) {
    "use strict";
    var n = r("OzIq"), o = r("Ds5P"), i = r("R3AP"), a = r("A16L"), s = r("1aA0"), u = r("vmSO"), c = r("9GpA"),
      l = r("UKM+"), h = r("zgIt"), m = r("qkyc"), f = r("yYvK"), p = r("kic5");
    t.exports = function (t, e, r, d, g, v) {
      var y = n[t], b = y, _ = g ? "set" : "add", x = b && b.prototype, w = {}, S = function (t) {
        var e = x[t];
        i(x, t, "delete" == t ? function (t) {
          return !(v && !l(t)) && e.call(this, 0 === t ? 0 : t)
        } : "has" == t ? function (t) {
          return !(v && !l(t)) && e.call(this, 0 === t ? 0 : t)
        } : "get" == t ? function (t) {
          return v && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
        } : "add" == t ? function (t) {
          return e.call(this, 0 === t ? 0 : t), this
        } : function (t, r) {
          return e.call(this, 0 === t ? 0 : t, r), this
        })
      };
      if ("function" == typeof b && (v || x.forEach && !h(function () {
        (new b).entries().next()
      }))) {
        var k = new b, T = k[_](v ? {} : -0, 1) != k, M = h(function () {
          k.has(1)
        }), A = m(function (t) {
          new b(t)
        }), C = !v && h(function () {
          for (var t = new b, e = 5; e--;) t[_](e, e);
          return !t.has(-0)
        });
        A || ((b = e(function (e, r) {
          c(e, b, t);
          var n = p(new y, e, b);
          return void 0 != r && u(r, g, n[_], n), n
        })).prototype = x, x.constructor = b), (M || C) && (S("delete"), S("has"), g && S("get")), (C || T) && S(_), v && x.clear && delete x.clear
      } else b = d.getConstructor(e, t, g, _), a(b.prototype, r), s.NEED = !0;
      return f(b, t), w[t] = b, o(o.G + o.W + o.F * (b != y), w), v || d.setStrong(b, t, g), b
    }
  }, "0pGU": function (t, e, r) {
    "use strict";
    var n = r("DIVP");
    t.exports = function () {
      var t = n(this), e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
  }, "1ETD": function (t, e, r) {
    var n = r("kkCw")("match");
    t.exports = function (t) {
      var e = /./;
      try {
        "/./"[t](e)
      } catch (r) {
        try {
          return e[n] = !1, !"/./"[t](e)
        } catch (t) {
        }
      }
      return !0
    }
  }, "1aA0": function (t, e, r) {
    var n = r("ulTY")("meta"), o = r("UKM+"), i = r("WBcL"), a = r("lDLk").f, s = 0,
      u = Object.isExtensible || function () {
        return !0
      }, c = !r("zgIt")(function () {
        return u(Object.preventExtensions({}))
      }), l = function (t) {
        a(t, n, {value: {i: "O" + ++s, w: {}}})
      }, h = t.exports = {
        KEY: n, NEED: !1, fastKey: function (t, e) {
          if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
          if (!i(t, n)) {
            if (!u(t)) return "F";
            if (!e) return "E";
            l(t)
          }
          return t[n].i
        }, getWeak: function (t, e) {
          if (!i(t, n)) {
            if (!u(t)) return !0;
            if (!e) return !1;
            l(t)
          }
          return t[n].w
        }, onFreeze: function (t) {
          return c && h.NEED && u(t) && !i(t, n) && l(t), t
        }
      }
  }, "1dNP": function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), r.d(e, "m", function () {
      return n
    });
    var n = {
      Dashboard: "仪表盘",
      General: "常用设置",
      User: "用户管理",
      Announcement: "公告管理",
      System_Config: "系统配置",
      Judge_Server: "判题服务器",
      Prune_Test_Case: "测试用例",
      Problem: "问题",
      FromFile: "读取文件",
      ToFile: "写入文件",
      ShareSubmission: "分享提交",
      Problem_List: "问题列表",
      Create_Problem: "增加题目",
      Export_Import_Problem: "导入导出题目",
      Contest: "比赛&练习",
      Contest_List: "比赛列表",
      Create_Contest: "创建比赛",
      User_User: "用户",
      Import_User: "导入用户",
      Generate_User: "生成用户",
      User_Info: "用户信息",
      User_Username: "用户名",
      User_Real_Name: "真实姓名",
      User_Email: "用户邮箱",
      User_New_Password: "用户密码",
      User_Type: "用户类型",
      Problem_Permission: "问题权限",
      Two_Factor_Auth: "双因素认证",
      Is_Disabled: "是否禁用",
      General_Announcement: "公告",
      Announcement_Title: "标题",
      Announcement_Content: "内容",
      Announcement_visible: "是否可见",
      SMTP_Config: "SMTP 设置",
      Server: "服务器",
      Port: "端口",
      Email: "邮箱",
      Password: "授权码",
      Website_Config: "网站设置",
      Base_Url: "基础 Url",
      Name: "名称",
      Shortcut: "简称",
      Footer: "页脚",
      Allow_Register: "是否允许注册",
      Submission_List_Show_All: "显示全部题目的提交",
      Judge_Server_Token: "判题服务器接口",
      Judge_Server_Info: "判题服务器",
      IP: "IP",
      Judger_Version: "判题机版本",
      Service_URL: "服务器 URL",
      Last_Heartbeat: "上一次心跳",
      Create_Time: "创建时间",
      Test_Case_Prune_Test_Case: "精简测试用例",
      Display_ID: "显示 ID",
      Title: "题目",
      Description: "描述",
      Input_Description: "输入描述",
      Output_Description: "输出描述",
      Time_Limit: "时间限制",
      Memory_limit: "内存限制",
      Difficulty: "难度",
      Visible: "是否可见",
      Languages: "可选编程语言",
      Input_Samples: "输入样例",
      Output_Samples: "输出样例",
      Add_Sample: "添加样例",
      Code_Template: "代码模板",
      Special_Judge: "Special Judge",
      Use_Special_Judge: "使用 Special Judge",
      Special_Judge_Code: "Special Judge 代码",
      SPJ_language: "SPJ 语言",
      Compile: "编译",
      TestCase: "测试用例",
      IOMode: "IO 类型",
      InputFileName: "输入文件名",
      OutputFileName: "输出文件名",
      Type: "测试类型",
      Input: "输入",
      Output: "输出",
      Score: "分数",
      Hint: "提示",
      Source: "来源",
      Edit_Problem: "编辑问题",
      Add_Problem: "添加问题",
      High: "高",
      Mid: "中",
      Low: "低",
      Tag: "标签",
      New_Tag: "新增标签",
      Contest_Problem_List: "比赛问题列表",
      ContestTitle: "标题",
      ContestDescription: "描述",
      Contest_Start_Time: "开始时间",
      Contest_End_Time: "结束时间",
      Contest_Password: "密码",
      Contest_Rule_Type: "规则",
      Real_Time_Rank: "实时排名",
      Contest_Status: "状态",
      Allowed_IP_Ranges: "允许的 IP 范围",
      CIDR_Network: "CIDR 网络",
      Last_Login: "最后登录状态",
      System_Overview: "系统状况",
      DashBoardJudge_Server: "判题服务器",
      HTTPS_Status: "HTTPS 状态",
      Force_HTTPS: "强制使用 HTTPS",
      CDN_HOST: "CDN 主机",
      Welcome_to_Login: "欢迎登录 OnlineJudge 后台管理系统",
      GO: "登录",
      username: "用户名",
      password: "密码"
    }
  }, "1ip3": function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Math", {
      log10: function (t) {
        return Math.log(t) * Math.LOG10E
      }
    })
  }, "1kS7": function (t, e) {
    e.f = Object.getOwnPropertySymbols
  }, "2KxR": function (t, e) {
    t.exports = function (t, e, r, n) {
      if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(r + ": incorrect invocation!");
      return t
    }
  }, "2VSL": function (t, e, r) {
    var n = r("BbyF"), o = r("xAdt"), i = r("/whu");
    t.exports = function (t, e, r, a) {
      var s = String(i(t)), u = s.length, c = void 0 === r ? " " : String(r), l = n(e);
      if (l <= u || "" == c) return s;
      var h = l - u, m = o.call(c, Math.ceil(h / c.length));
      return m.length > h && (m = m.slice(0, h)), a ? m + s : s + m
    }
  }, "2hfY": function (t, e, r) {
    "use strict";
    var n = r("PJh5"), o = r.n(n);
    e.a = {
      utcToLocal: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-M-D  HH:mm:ss";
        return o.a.utc(t).local().format(e)
      }, duration: function (t, e) {
        var r = o()(t), n = o()(e), i = o.a.duration(r.diff(n, "seconds"), "seconds");
        return 0 !== i.days() ? i.humanize() : Math.abs(i.asHours().toFixed(1)) + " hours"
      }, secondFormat: function (t) {
        var e = o.a.duration(t, "seconds");
        return Math.floor(e.asHours()) + ":" + e.minutes() + ":" + e.seconds()
      }
    }
  }, "2p1q": function (t, e, r) {
    var n = r("lDLk"), o = r("fU25");
    t.exports = r("bUqO") ? function (t, e, r) {
      return n.f(t, e, o(1, r))
    } : function (t, e, r) {
      return t[e] = r, t
    }
  }, "3Eo+": function (t, e) {
    var r = 0, n = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + n).toString(36))
    }
  }, "3SsF": function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), r.d(e, "m", function () {
      return n
    });
    var n = {
      Dashboard: "Dashboard",
      General: "General",
      User: "User",
      Announcement: "Announcement",
      System_Config: "System Config",
      Judge_Server: "Judge Server",
      Prune_Test_Case: "Prune Test Case",
      Problem: "Problem",
      FromFile: "From File",
      ToFile: "To File",
      ShareSubmission: "Share Submission",
      Problem_List: "Problem List",
      Create_Problem: "Create Problem",
      Export_Import_Problem: "Export Or Import Problem",
      Contest: "Contest",
      Contest_List: "Contest List",
      Create_Contest: "Create Contest",
      User_User: "User",
      Import_User: "Import User",
      Generate_User: "Generate User",
      User_Info: "User",
      User_Username: "Username",
      User_Real_Name: "Real Name",
      User_Email: "Email",
      User_New_Password: "New Password",
      User_Type: "User Type",
      Problem_Permission: "Problem Permission",
      Two_Factor_Auth: "Two Factor Auth",
      Is_Disabled: "Is Disabled",
      General_Announcement: "Announcement",
      Announcement_Title: "Title",
      Announcement_Content: "Content",
      Announcement_visible: "Visible",
      SMTP_Config: "SMTP Config",
      Server: "Server",
      Port: "Port",
      Email: "Email",
      Password: "Password",
      Website_Config: "Web Config",
      Base_Url: "Base Url",
      Name: "Name",
      Shortcut: "Shortcut",
      Footer: "Footer",
      Allow_Register: "Allow Register",
      Submission_List_Show_All: "Submission List Show All",
      Judge_Server_Token: "Judge Server Token",
      Judge_Server_Info: "Judge Server",
      IP: "IP",
      Judger_Version: "Judger Version",
      Service_URL: "Service URL",
      Last_Heartbeat: "Last Heartbeat",
      Create_Time: "Create Time",
      Test_Case_Prune_Test_Case: "Prune Test Case",
      Display_ID: "Display ID",
      Title: "Title",
      Description: "Description",
      Input_Description: "Input Description",
      Output_Description: "Output Description",
      Time_Limit: "Time Limit",
      Memory_limit: "Memory limit",
      Difficulty: "Difficulty",
      Visible: "Visible",
      Languages: "Languages",
      Input_Samples: "Input Samples",
      Output_Samples: "Output Samples",
      Add_Sample: "Add Sample",
      Code_Template: "Code_Template",
      Special_Judge: "Special Judge",
      Use_Special_Judge: "Use Special Judge",
      Special_Judge_Code: "Special Judge Code",
      SPJ_language: "SPJ language",
      Compile: "Compile",
      TestCase: "TestCase",
      IOMode: "IO Mode",
      InputFileName: "Input File Name",
      OutputFileName: "Output File Name",
      Type: "Type",
      Input: "Input",
      Output: "Output",
      Score: "Score",
      Hint: "Hint",
      Source: "Source",
      Edit_Problem: "Edit Problme",
      Add_Problme: "Add Problem",
      High: "High",
      Mid: "Mid",
      Low: "Low",
      Tag: "Tag",
      New_Tag: "New Tag",
      Contest_Problem_List: "Contest Problem List",
      ContestTitle: "Title",
      ContestDescription: "Description",
      Contest_Start_Time: "Start Time",
      Contest_End_Time: "End Time",
      Contest_Password: "Password",
      Contest_Rule_Type: "Contest Rule Type",
      Real_Time_Rank: "Real Time Rank",
      Contest_Status: "Status",
      Allowed_IP_Ranges: "Allowed IP Ranges",
      CIDR_Network: "CIDR Network",
      Last_Login: "Last Login",
      System_Overview: "System Overview",
      DashBoardJudge_Server: "Judge Server",
      HTTPS_Status: "HTTPS Status",
      Force_HTTPS: "Force HTTPS",
      CDN_HOST: "CDN HOST",
      Welcome_to_Login: "Welcome to Login",
      GO: "GO",
      username: "username",
      password: "password"
    }
  }, "3fs2": function (t, e, r) {
    var n = r("RY/4"), o = r("dSzd")("iterator"), i = r("/bQp");
    t.exports = r("FeBl").getIteratorMethod = function (t) {
      if (void 0 != t) return t[o] || t["@@iterator"] || i[n(t)]
    }
  }, "3g/S": function (t, e, r) {
    var n = r("OzIq"), o = r("7gX0"), i = r("V3l/"), a = r("M8WE"), s = r("lDLk").f;
    t.exports = function (t) {
      var e = o.Symbol || (o.Symbol = i ? {} : n.Symbol || {});
      "_" == t.charAt(0) || t in e || s(e, t, {value: a.f(t)})
    }
  }, "3i66": function (t, e, r) {
    var n = r("Ds5P"), o = r("7gX0"), i = r("zgIt");
    t.exports = function (t, e) {
      var r = (o.Object || {})[t] || Object[t], a = {};
      a[t] = e(r), n(n.S + n.F * i(function () {
        r(1)
      }), "Object", a)
    }
  }, "41xE": function (t, e, r) {
    var n = r("OzIq").navigator;
    t.exports = n && n.userAgent || ""
  }, "49qz": function (t, e, r) {
    var n = r("oeih"), o = r("/whu");
    t.exports = function (t) {
      return function (e, r) {
        var i, a, s = String(o(e)), u = n(r), c = s.length;
        return u < 0 || u >= c ? t ? "" : void 0 : (i = s.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : i : t ? s.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536
      }
    }
  }, "4IZP": function (t, e) {
    t.exports = Object.is || function (t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
  }, "4ZU1": function (t, e, r) {
    var n = r("lDLk"), o = r("Ds5P"), i = r("DIVP"), a = r("s4j0");
    o(o.S + o.F * r("zgIt")(function () {
      Reflect.defineProperty(n.f({}, 1, {value: 1}), 1, {value: 2})
    }), "Reflect", {
      defineProperty: function (t, e, r) {
        i(t), e = a(e, !0), i(r);
        try {
          return n.f(t, e, r), !0
        } catch (t) {
          return !1
        }
      }
    })
  }, "4mcu": function (t, e) {
    t.exports = function () {
    }
  }, "52Wt": function (t, e, r) {
    r("77Ug")("Int8", 1, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n)
      }
    })
  }, "52gC": function (t, e) {
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);
      return t
    }
  }, "6fN7": function (t, e) {
    t.exports = function (t, e) {
      if ((e = e || window.Vue) && e.config) {
        var r = e.config.errorHandler;
        e.config.errorHandler = function (e, n, o) {
          var i = {};
          "[object Object]" === Object.prototype.toString.call(n) && (i.componentName = function (t) {
            if (t.$root === t) return "root instance";
            var e = t._isVue ? t.$options.name || t.$options._componentTag : t.name;
            return (e ? "component <" + e + ">" : "anonymous component") + (t._isVue && t.$options.__file ? " at " + t.$options.__file : "")
          }(n), i.propsData = n.$options.propsData), void 0 !== o && (i.lifecycleHook = o), t.captureException(e, {extra: i}), "function" == typeof r && r.call(this, e, n, o)
        }
      }
    }
  }, "7+uW": function (t, e, r) {
    t.exports = r("uomd")(14)
  }, "77Pl": function (t, e, r) {
    var n = r("EqjI");
    t.exports = function (t) {
      if (!n(t)) throw TypeError(t + " is not an object!");
      return t
    }
  }, "77Ug": function (t, e, r) {
    "use strict";
    if (r("bUqO")) {
      var n = r("V3l/"), o = r("OzIq"), i = r("zgIt"), a = r("Ds5P"), s = r("07k+"), u = r("LrcN"), c = r("rFzY"),
        l = r("9GpA"), h = r("fU25"), m = r("2p1q"), f = r("A16L"), p = r("oeih"), d = r("BbyF"), g = r("8D8H"),
        v = r("zo/l"), y = r("s4j0"), b = r("WBcL"), _ = r("wC1N"), x = r("UKM+"), w = r("FryR"), S = r("9vb1"),
        k = r("7ylX"), T = r("KOrd"), M = r("WcO1").f, A = r("SHe9"), C = r("ulTY"), P = r("kkCw"), O = r("LhTa"),
        E = r("ot5s"), z = r("7O1s"), I = r("WgSQ"), N = r("bN1p"), D = r("qkyc"), L = r("CEne"), R = r("zCYm"),
        F = r("DPsE"), B = r("lDLk"), U = r("x9zv"), j = B.f, q = U.f, H = o.RangeError, W = o.TypeError,
        V = o.Uint8Array, G = Array.prototype, Y = u.ArrayBuffer, J = u.DataView, K = O(0), $ = O(2), X = O(3),
        Q = O(4), Z = O(5), tt = O(6), et = E(!0), rt = E(!1), nt = I.values, ot = I.keys, it = I.entries,
        at = G.lastIndexOf, st = G.reduce, ut = G.reduceRight, ct = G.join, lt = G.sort, ht = G.slice, mt = G.toString,
        ft = G.toLocaleString, pt = P("iterator"), dt = P("toStringTag"), gt = C("typed_constructor"),
        vt = C("def_constructor"), yt = s.CONSTR, bt = s.TYPED, _t = s.VIEW, xt = O(1, function (t, e) {
          return Mt(z(t, t[vt]), e)
        }), wt = i(function () {
          return 1 === new V(new Uint16Array([1]).buffer)[0]
        }), St = !!V && !!V.prototype.set && i(function () {
          new V(1).set({})
        }), kt = function (t, e) {
          var r = p(t);
          if (r < 0 || r % e) throw H("Wrong offset!");
          return r
        }, Tt = function (t) {
          if (x(t) && bt in t) return t;
          throw W(t + " is not a typed array!")
        }, Mt = function (t, e) {
          if (!(x(t) && gt in t)) throw W("It is not a typed array constructor!");
          return new t(e)
        }, At = function (t, e) {
          return Ct(z(t, t[vt]), e)
        }, Ct = function (t, e) {
          for (var r = 0, n = e.length, o = Mt(t, n); n > r;) o[r] = e[r++];
          return o
        }, Pt = function (t, e, r) {
          j(t, e, {
            get: function () {
              return this._d[r]
            }
          })
        }, Ot = function (t) {
          var e, r, n, o, i, a, s = w(t), u = arguments.length, l = u > 1 ? arguments[1] : void 0, h = void 0 !== l,
            m = A(s);
          if (void 0 != m && !S(m)) {
            for (a = m.call(s), n = [], e = 0; !(i = a.next()).done; e++) n.push(i.value);
            s = n
          }
          for (h && u > 2 && (l = c(l, arguments[2], 2)), e = 0, r = d(s.length), o = Mt(this, r); r > e; e++) o[e] = h ? l(s[e], e) : s[e];
          return o
        }, Et = function () {
          for (var t = 0, e = arguments.length, r = Mt(this, e); e > t;) r[t] = arguments[t++];
          return r
        }, zt = !!V && i(function () {
          ft.call(new V(1))
        }), It = function () {
          return ft.apply(zt ? ht.call(Tt(this)) : Tt(this), arguments)
        }, Nt = {
          copyWithin: function (t, e) {
            return F.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
          }, every: function (t) {
            return Q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          }, fill: function (t) {
            return R.apply(Tt(this), arguments)
          }, filter: function (t) {
            return At(this, $(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0))
          }, find: function (t) {
            return Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          }, findIndex: function (t) {
            return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          }, forEach: function (t) {
            K(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          }, indexOf: function (t) {
            return rt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          }, includes: function (t) {
            return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          }, join: function (t) {
            return ct.apply(Tt(this), arguments)
          }, lastIndexOf: function (t) {
            return at.apply(Tt(this), arguments)
          }, map: function (t) {
            return xt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          }, reduce: function (t) {
            return st.apply(Tt(this), arguments)
          }, reduceRight: function (t) {
            return ut.apply(Tt(this), arguments)
          }, reverse: function () {
            for (var t, e = Tt(this).length, r = Math.floor(e / 2), n = 0; n < r;) t = this[n], this[n++] = this[--e], this[e] = t;
            return this
          }, some: function (t) {
            return X(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
          }, sort: function (t) {
            return lt.call(Tt(this), t)
          }, subarray: function (t, e) {
            var r = Tt(this), n = r.length, o = v(t, n);
            return new (z(r, r[vt]))(r.buffer, r.byteOffset + o * r.BYTES_PER_ELEMENT, d((void 0 === e ? n : v(e, n)) - o))
          }
        }, Dt = function (t, e) {
          return At(this, ht.call(Tt(this), t, e))
        }, Lt = function (t) {
          Tt(this);
          var e = kt(arguments[1], 1), r = this.length, n = w(t), o = d(n.length), i = 0;
          if (o + e > r) throw H("Wrong length!");
          for (; i < o;) this[e + i] = n[i++]
        }, Rt = {
          entries: function () {
            return it.call(Tt(this))
          }, keys: function () {
            return ot.call(Tt(this))
          }, values: function () {
            return nt.call(Tt(this))
          }
        }, Ft = function (t, e) {
          return x(t) && t[bt] && "symbol" != typeof e && e in t && String(+e) == String(e)
        }, Bt = function (t, e) {
          return Ft(t, e = y(e, !0)) ? h(2, t[e]) : q(t, e)
        }, Ut = function (t, e, r) {
          return !(Ft(t, e = y(e, !0)) && x(r) && b(r, "value")) || b(r, "get") || b(r, "set") || r.configurable || b(r, "writable") && !r.writable || b(r, "enumerable") && !r.enumerable ? j(t, e, r) : (t[e] = r.value, t)
        };
      yt || (U.f = Bt, B.f = Ut), a(a.S + a.F * !yt, "Object", {
        getOwnPropertyDescriptor: Bt,
        defineProperty: Ut
      }), i(function () {
        mt.call({})
      }) && (mt = ft = function () {
        return ct.call(this)
      });
      var jt = f({}, Nt);
      f(jt, Rt), m(jt, pt, Rt.values), f(jt, {
        slice: Dt, set: Lt, constructor: function () {
        }, toString: mt, toLocaleString: It
      }), Pt(jt, "buffer", "b"), Pt(jt, "byteOffset", "o"), Pt(jt, "byteLength", "l"), Pt(jt, "length", "e"), j(jt, dt, {
        get: function () {
          return this[bt]
        }
      }), t.exports = function (t, e, r, u) {
        var c = t + ((u = !!u) ? "Clamped" : "") + "Array", h = "get" + t, f = "set" + t, p = o[c], v = p || {},
          y = p && T(p), b = !p || !s.ABV, w = {}, S = p && p.prototype, A = function (t, r) {
            j(t, r, {
              get: function () {
                return function (t, r) {
                  var n = t._d;
                  return n.v[h](r * e + n.o, wt)
                }(this, r)
              }, set: function (t) {
                return function (t, r, n) {
                  var o = t._d;
                  u && (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), o.v[f](r * e + o.o, n, wt)
                }(this, r, t)
              }, enumerable: !0
            })
          };
        b ? (p = r(function (t, r, n, o) {
          l(t, p, c, "_d");
          var i, a, s, u, h = 0, f = 0;
          if (x(r)) {
            if (!(r instanceof Y || "ArrayBuffer" == (u = _(r)) || "SharedArrayBuffer" == u)) return bt in r ? Ct(p, r) : Ot.call(p, r);
            i = r, f = kt(n, e);
            var v = r.byteLength;
            if (void 0 === o) {
              if (v % e) throw H("Wrong length!");
              if ((a = v - f) < 0) throw H("Wrong length!")
            } else if ((a = d(o) * e) + f > v) throw H("Wrong length!");
            s = a / e
          } else s = g(r), i = new Y(a = s * e);
          for (m(t, "_d", {b: i, o: f, l: a, e: s, v: new J(i)}); h < s;) A(t, h++)
        }), S = p.prototype = k(jt), m(S, "constructor", p)) : i(function () {
          p(1)
        }) && i(function () {
          new p(-1)
        }) && D(function (t) {
          new p, new p(null), new p(1.5), new p(t)
        }, !0) || (p = r(function (t, r, n, o) {
          var i;
          return l(t, p, c), x(r) ? r instanceof Y || "ArrayBuffer" == (i = _(r)) || "SharedArrayBuffer" == i ? void 0 !== o ? new v(r, kt(n, e), o) : void 0 !== n ? new v(r, kt(n, e)) : new v(r) : bt in r ? Ct(p, r) : Ot.call(p, r) : new v(g(r))
        }), K(y !== Function.prototype ? M(v).concat(M(y)) : M(v), function (t) {
          t in p || m(p, t, v[t])
        }), p.prototype = S, n || (S.constructor = p));
        var C = S[pt], P = !!C && ("values" == C.name || void 0 == C.name), O = Rt.values;
        m(p, gt, !0), m(S, bt, c), m(S, _t, !0), m(S, vt, p), (u ? new p(1)[dt] == c : dt in S) || j(S, dt, {
          get: function () {
            return c
          }
        }), w[c] = p, a(a.G + a.W + a.F * (p != v), w), a(a.S, c, {BYTES_PER_ELEMENT: e}), a(a.S + a.F * i(function () {
          v.of.call(p, 1)
        }), c, {
          from: Ot,
          of: Et
        }), "BYTES_PER_ELEMENT" in S || m(S, "BYTES_PER_ELEMENT", e), a(a.P, c, Nt), L(c), a(a.P + a.F * St, c, {set: Lt}), a(a.P + a.F * !P, c, Rt), n || S.toString == mt || (S.toString = mt), a(a.P + a.F * i(function () {
          new p(1).slice()
        }), c, {slice: Dt}), a(a.P + a.F * (i(function () {
          return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
        }) || !i(function () {
          S.toLocaleString.call([1, 2])
        })), c, {toLocaleString: It}), N[c] = P ? C : O, n || P || m(S, pt, O)
      }
    } else t.exports = function () {
    }
  }, "78Tf": function (t, e, r) {
    var n = {
      "./en-US": "Jp91",
      "./en-US.js": "Jp91",
      "./zh-CN": "YiIK",
      "./zh-CN.js": "YiIK",
      "./zh-TW": "XaqQ",
      "./zh-TW.js": "XaqQ"
    };

    function o(t) {
      return r(i(t))
    }

    function i(t) {
      var e = n[t];
      if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
      return e
    }

    o.keys = function () {
      return Object.keys(n)
    }, o.resolve = i, t.exports = o, o.id = "78Tf"
  }, "7Jvp": function (t, e, r) {
    var n = r("Ds5P"), o = Math.asinh;
    n(n.S + n.F * !(o && 1 / o(0) > 0), "Math", {
      asinh: function t(e) {
        return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
      }
    })
  }, "7KvD": function (t, e) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
  }, "7O1s": function (t, e, r) {
    var n = r("DIVP"), o = r("XSOZ"), i = r("kkCw")("species");
    t.exports = function (t, e) {
      var r, a = n(t).constructor;
      return void 0 === a || void 0 == (r = n(a)[i]) ? e : o(r)
    }
  }, "7gX0": function (t, e) {
    var r = t.exports = {version: "2.5.7"};
    "number" == typeof __e && (__e = r)
  }, "7ylX": function (t, e, r) {
    var n = r("DIVP"), o = r("twxM"), i = r("QKXm"), a = r("mZON")("IE_PROTO"), s = function () {
    }, u = function () {
      var t, e = r("jhxf")("iframe"), n = i.length;
      for (e.style.display = "none", r("d075").appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; n--;) delete u.prototype[i[n]];
      return u()
    };
    t.exports = Object.create || function (t, e) {
      var r;
      return null !== t ? (s.prototype = n(t), r = new s, s.prototype = null, r[a] = t) : r = u(), void 0 === e ? r : o(r, e)
    }
  }, "82Mu": function (t, e, r) {
    var n = r("7KvD"), o = r("L42u").set, i = n.MutationObserver || n.WebKitMutationObserver, a = n.process,
      s = n.Promise, u = "process" == r("R9M2")(a);
    t.exports = function () {
      var t, e, r, c = function () {
        var n, o;
        for (u && (n = a.domain) && n.exit(); t;) {
          o = t.fn, t = t.next;
          try {
            o()
          } catch (n) {
            throw t ? r() : e = void 0, n
          }
        }
        e = void 0, n && n.enter()
      };
      if (u) r = function () {
        a.nextTick(c)
      }; else if (!i || n.navigator && n.navigator.standalone) if (s && s.resolve) {
        var l = s.resolve(void 0);
        r = function () {
          l.then(c)
        }
      } else r = function () {
        o.call(n, c)
      }; else {
        var h = !0, m = document.createTextNode("");
        new i(c).observe(m, {characterData: !0}), r = function () {
          m.data = h = !h
        }
      }
      return function (n) {
        var o = {fn: n, next: void 0};
        e && (e.next = o), t || (t = o, r()), e = o
      }
    }
  }, "880/": function (t, e, r) {
    t.exports = r("hJx8")
  }, "8D8H": function (t, e, r) {
    var n = r("oeih"), o = r("BbyF");
    t.exports = function (t) {
      if (void 0 === t) return 0;
      var e = n(t), r = o(e);
      if (e !== r) throw RangeError("Wrong length!");
      return r
    }
  }, "8Q2T": function (t, e, r) {
    "use strict";
    var n = r("//Fk"), o = r.n(n), i = r("fZjL"), a = r.n(i), s = r("7+uW"), u = r("IcnI"), c = r("mtWM"), l = r.n(c);

    function h(t, e, r) {
      if (void 0 !== r) var n = r.params, i = void 0 === n ? {} : n, a = r.data,
        c = void 0 === a ? {} : a; else i = c = {};
      return new o.a(function (r, n) {
        l()({url: t, method: e, params: i, data: c}).then(function (t) {
          null !== t.data.error ? (s.default.prototype.$error(t.data.data), n(t), t.data.data.startsWith("Please login") && u.a.dispatch("changeModalStatus", {
            mode: "login",
            visible: !0
          })) : r(t)
        }, function (t) {
          n(t), s.default.prototype.$error(t.data.data)
        })
      })
    }

    s.default.prototype.$http = l.a, l.a.defaults.baseURL = "/api", l.a.defaults.xsrfHeaderName = "X-CSRFToken", l.a.defaults.xsrfCookieName = "csrftoken", e.a = {
      getWebsiteConf: function (t) {
        return h("website", "get", {params: t})
      }, getAnnouncementList: function (t, e) {
        return h("announcement", "get", {params: {offset: t, limit: e}})
      }, login: function (t) {
        return h("login", "post", {data: t})
      }, checkUsernameOrEmail: function (t, e) {
        return h("check_username_or_email", "post", {data: {username: t, email: e}})
      }, register: function (t) {
        return h("register", "post", {data: t})
      }, logout: function () {
        return h("logout", "get")
      }, getCaptcha: function () {
        return h("captcha", "get")
      }, getUserInfo: function () {
        return h("profile", "get", {params: {username: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0}})
      }, updateProfile: function (t) {
        return h("profile", "put", {data: t})
      }, freshDisplayID: function (t) {
        return h("profile/fresh_display_id", "get", {params: {user_id: t}})
      }, twoFactorAuth: function (t, e) {
        return h("two_factor_auth", t, {data: e})
      }, tfaRequiredCheck: function (t) {
        return h("tfa_required", "post", {data: {username: t}})
      }, getSessions: function () {
        return h("sessions", "get")
      }, deleteSession: function (t) {
        return h("sessions", "delete", {params: {session_key: t}})
      }, applyResetPassword: function (t) {
        return h("apply_reset_password", "post", {data: t})
      }, resetPassword: function (t) {
        return h("reset_password", "post", {data: t})
      }, changePassword: function (t) {
        return h("change_password", "post", {data: t})
      }, changeEmail: function (t) {
        return h("change_email", "post", {data: t})
      }, getLanguages: function () {
        return h("languages", "get")
      }, getProblemTagList: function () {
        return h("problem/tags", "get")
      }, getProblemList: function (t, e, r) {
        var n = {paging: !0, offset: t, limit: e};
        return a()(r).forEach(function (t) {
          r[t] && (n[t] = r[t])
        }), h("problem", "get", {params: n})
      }, pickone: function () {
        return h("pickone", "get")
      }, getProblem: function (t) {
        return h("problem", "get", {params: {problem_id: t}})
      }, getContestList: function (t, e, r) {
        var n = {offset: t, limit: e};
        return void 0 !== r && a()(r).forEach(function (t) {
          r[t] && (n[t] = r[t])
        }), h("contests", "get", {params: n})
      }, getContest: function (t) {
        return h("contest", "get", {params: {id: t}})
      }, getContestAccess: function (t) {
        return h("contest/access", "get", {params: {contest_id: t}})
      }, checkContestPassword: function (t, e) {
        return h("contest/password", "post", {data: {contest_id: t, password: e}})
      }, getContestAnnouncementList: function (t) {
        return h("contest/announcement", "get", {params: {contest_id: t}})
      }, getContestProblemList: function (t) {
        return h("contest/problem", "get", {params: {contest_id: t}})
      }, getContestProblem: function (t, e) {
        return h("contest/problem", "get", {params: {contest_id: e, problem_id: t}})
      }, submitCode: function (t) {
        return h("submission", "post", {data: t})
      }, getSubmissionList: function (t, e, r) {
        return r.limit = e, r.offset = t, h("submissions", "get", {params: r})
      }, getContestSubmissionList: function (t, e, r) {
        return r.limit = e, r.offset = t, h("contest_submissions", "get", {params: r})
      }, getSubmission: function (t) {
        return h("submission", "get", {params: {id: t}})
      }, submissionExists: function (t) {
        return h("submission_exists", "get", {params: {problem_id: t}})
      }, submissionRejudge: function (t) {
        return h("admin/submission/rejudge", "get", {params: {id: t}})
      }, updateSubmission: function (t) {
        return h("submission", "put", {data: t})
      }, getUserRank: function (t, e) {
        return h("user_rank", "get", {
          params: {
            offset: t,
            limit: e,
            rule: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "acm"
          }
        })
      }, getContestRank: function (t) {
        return h("contest_rank", "get", {params: t})
      }, getACMACInfo: function (t) {
        return h("admin/contest/acm_helper", "get", {params: t})
      }, updateACInfoCheckedStatus: function (t) {
        return h("admin/contest/acm_helper", "put", {data: t})
      }
    }
  }, "94VQ": function (t, e, r) {
    "use strict";
    var n = r("Yobk"), o = r("X8DO"), i = r("e6n0"), a = {};
    r("hJx8")(a, r("dSzd")("iterator"), function () {
      return this
    }), t.exports = function (t, e, r) {
      t.prototype = n(a, {next: o(1, r)}), i(t, e + " Iterator")
    }
  }, "9GpA": function (t, e) {
    t.exports = function (t, e, r, n) {
      if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(r + ": incorrect invocation!");
      return t
    }
  }, "9bBU": function (t, e, r) {
    r("mClu");
    var n = r("FeBl").Object;
    t.exports = function (t, e, r) {
      return n.defineProperty(t, e, r)
    }
  }, "9m+V": function (t, e, r) {
    var n = {
      "./en-US": "3SsF",
      "./en-US.js": "3SsF",
      "./zh-CN": "1dNP",
      "./zh-CN.js": "1dNP",
      "./zh-TW": "wSRH",
      "./zh-TW.js": "wSRH"
    };

    function o(t) {
      return r(i(t))
    }

    function i(t) {
      var e = n[t];
      if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
      return e
    }

    o.keys = function () {
      return Object.keys(n)
    }, o.resolve = i, t.exports = o, o.id = "9m+V"
  }, "9mGU": function (t, e, r) {
    var n = r("Ds5P"), o = r("DIVP"), i = Object.preventExtensions;
    n(n.S, "Reflect", {
      preventExtensions: function (t) {
        o(t);
        try {
          return i && i(t), !0
        } catch (t) {
          return !1
        }
      }
    })
  }, "9mmO": function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("07k+"), i = r("LrcN"), a = r("DIVP"), s = r("zo/l"), u = r("BbyF"), c = r("UKM+"),
      l = r("OzIq").ArrayBuffer, h = r("7O1s"), m = i.ArrayBuffer, f = i.DataView, p = o.ABV && l.isView,
      d = m.prototype.slice, g = o.VIEW;
    n(n.G + n.W + n.F * (l !== m), {ArrayBuffer: m}), n(n.S + n.F * !o.CONSTR, "ArrayBuffer", {
      isView: function (t) {
        return p && p(t) || c(t) && g in t
      }
    }), n(n.P + n.U + n.F * r("zgIt")(function () {
      return !new m(2).slice(1, void 0).byteLength
    }), "ArrayBuffer", {
      slice: function (t, e) {
        if (void 0 !== d && void 0 === e) return d.call(a(this), t);
        for (var r = a(this).byteLength, n = s(t, r), o = s(void 0 === e ? r : e, r), i = new (h(this, m))(u(o - n)), c = new f(this), l = new f(i), p = 0; n < o;) l.setUint8(p++, c.getUint8(n++));
        return i
      }
    }), r("CEne")("ArrayBuffer")
  }, "9vb1": function (t, e, r) {
    var n = r("bN1p"), o = r("kkCw")("iterator"), i = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (n.Array === t || i[o] === t)
    }
  }, "9vc3": function (t, e, r) {
    var n = r("Ds5P");
    n(n.P, "Array", {copyWithin: r("DPsE")}), r("RhFG")("copyWithin")
  }, "9xIj": function (t, e, r) {
    var n = r("Ds5P"), o = r("x78i");
    n(n.S + n.F * (o != Math.expm1), "Math", {expm1: o})
  }, "A0n/": function (t, e, r) {
    "use strict";
    var n = r("OzIq"), o = r("WBcL"), i = r("bUqO"), a = r("Ds5P"), s = r("R3AP"), u = r("1aA0").KEY, c = r("zgIt"),
      l = r("VWgF"), h = r("yYvK"), m = r("ulTY"), f = r("kkCw"), p = r("M8WE"), d = r("3g/S"), g = r("C+Ps"),
      v = r("XO1R"), y = r("DIVP"), b = r("UKM+"), _ = r("PHqh"), x = r("s4j0"), w = r("fU25"), S = r("7ylX"),
      k = r("bG/2"), T = r("x9zv"), M = r("lDLk"), A = r("Qh14"), C = T.f, P = M.f, O = k.f, E = n.Symbol, z = n.JSON,
      I = z && z.stringify, N = f("_hidden"), D = f("toPrimitive"), L = {}.propertyIsEnumerable,
      R = l("symbol-registry"), F = l("symbols"), B = l("op-symbols"), U = Object.prototype, j = "function" == typeof E,
      q = n.QObject, H = !q || !q.prototype || !q.prototype.findChild, W = i && c(function () {
        return 7 != S(P({}, "a", {
          get: function () {
            return P(this, "a", {value: 7}).a
          }
        })).a
      }) ? function (t, e, r) {
        var n = C(U, e);
        n && delete U[e], P(t, e, r), n && t !== U && P(U, e, n)
      } : P, V = function (t) {
        var e = F[t] = S(E.prototype);
        return e._k = t, e
      }, G = j && "symbol" == typeof E.iterator ? function (t) {
        return "symbol" == typeof t
      } : function (t) {
        return t instanceof E
      }, Y = function (t, e, r) {
        return t === U && Y(B, e, r), y(t), e = x(e, !0), y(r), o(F, e) ? (r.enumerable ? (o(t, N) && t[N][e] && (t[N][e] = !1), r = S(r, {enumerable: w(0, !1)})) : (o(t, N) || P(t, N, w(1, {})), t[N][e] = !0), W(t, e, r)) : P(t, e, r)
      }, J = function (t, e) {
        y(t);
        for (var r, n = g(e = _(e)), o = 0, i = n.length; i > o;) Y(t, r = n[o++], e[r]);
        return t
      }, K = function (t) {
        var e = L.call(this, t = x(t, !0));
        return !(this === U && o(F, t) && !o(B, t)) && (!(e || !o(this, t) || !o(F, t) || o(this, N) && this[N][t]) || e)
      }, $ = function (t, e) {
        if (t = _(t), e = x(e, !0), t !== U || !o(F, e) || o(B, e)) {
          var r = C(t, e);
          return !r || !o(F, e) || o(t, N) && t[N][e] || (r.enumerable = !0), r
        }
      }, X = function (t) {
        for (var e, r = O(_(t)), n = [], i = 0; r.length > i;) o(F, e = r[i++]) || e == N || e == u || n.push(e);
        return n
      }, Q = function (t) {
        for (var e, r = t === U, n = O(r ? B : _(t)), i = [], a = 0; n.length > a;) !o(F, e = n[a++]) || r && !o(U, e) || i.push(F[e]);
        return i
      };
    j || (s((E = function () {
      if (this instanceof E) throw TypeError("Symbol is not a constructor!");
      var t = m(arguments.length > 0 ? arguments[0] : void 0), e = function (r) {
        this === U && e.call(B, r), o(this, N) && o(this[N], t) && (this[N][t] = !1), W(this, t, w(1, r))
      };
      return i && H && W(U, t, {configurable: !0, set: e}), V(t)
    }).prototype, "toString", function () {
      return this._k
    }), T.f = $, M.f = Y, r("WcO1").f = k.f = X, r("Y1aA").f = K, r("Y1N3").f = Q, i && !r("V3l/") && s(U, "propertyIsEnumerable", K, !0), p.f = function (t) {
      return V(f(t))
    }), a(a.G + a.W + a.F * !j, {Symbol: E});
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) f(Z[tt++]);
    for (var et = A(f.store), rt = 0; et.length > rt;) d(et[rt++]);
    a(a.S + a.F * !j, "Symbol", {
      for: function (t) {
        return o(R, t += "") ? R[t] : R[t] = E(t)
      }, keyFor: function (t) {
        if (!G(t)) throw TypeError(t + " is not a symbol!");
        for (var e in R) if (R[e] === t) return e
      }, useSetter: function () {
        H = !0
      }, useSimple: function () {
        H = !1
      }
    }), a(a.S + a.F * !j, "Object", {
      create: function (t, e) {
        return void 0 === e ? S(t) : J(S(t), e)
      },
      defineProperty: Y,
      defineProperties: J,
      getOwnPropertyDescriptor: $,
      getOwnPropertyNames: X,
      getOwnPropertySymbols: Q
    }), z && a(a.S + a.F * (!j || c(function () {
      var t = E();
      return "[null]" != I([t]) || "{}" != I({a: t}) || "{}" != I(Object(t))
    })), "JSON", {
      stringify: function (t) {
        for (var e, r, n = [t], o = 1; arguments.length > o;) n.push(arguments[o++]);
        if (r = e = n[1], (b(e) || void 0 !== t) && !G(t)) return v(e) || (e = function (t, e) {
          if ("function" == typeof r && (e = r.call(this, t, e)), !G(e)) return e
        }), n[1] = e, I.apply(z, n)
      }
    }), E.prototype[D] || r("2p1q")(E.prototype, D, E.prototype.valueOf), h(E, "Symbol"), h(Math, "Math", !0), h(n.JSON, "JSON", !0)
  }, A16L: function (t, e, r) {
    var n = r("R3AP");
    t.exports = function (t, e, r) {
      for (var o in e) n(t, o, e[o], r);
      return t
    }
  }, A1ng: function (t, e, r) {
    var n = r("Ds5P"), o = r("n982"), i = Math.abs;
    n(n.S, "Number", {
      isSafeInteger: function (t) {
        return o(t) && i(t) <= 9007199254740991
      }
    })
  }, A52B: function (t, e, r) {
    var n = r("x9zv"), o = r("Ds5P"), i = r("DIVP");
    o(o.S, "Reflect", {
      getOwnPropertyDescriptor: function (t, e) {
        return n.f(i(t), e)
      }
    })
  }, AYPi: function (t, e, r) {
    !function (e, r) {
      t.exports = r()
    }(0, function () {
      return function (t) {
        function e(n) {
          if (r[n]) return r[n].exports;
          var o = r[n] = {i: n, l: !1, exports: {}};
          return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }

        var r = {};
        return e.m = t, e.c = r, e.d = function (t, r, n) {
          e.o(t, r) || Object.defineProperty(t, r, {configurable: !1, enumerable: !0, get: n})
        }, e.n = function (t) {
          var r = t && t.__esModule ? function () {
            return t.default
          } : function () {
            return t
          };
          return e.d(r, "a", r), r
        }, e.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 0)
      }([function (t, e, r) {
        "use strict";

        function n(t) {
          !function t(e, r) {
            return Object.keys(r).forEach(function (n) {
              e[n] && "object" == typeof e[n] ? t(e[n], r[n]) : e[n] = r[n]
            }), e
          }(g, t)
        }

        function o() {
          return g.id ? [].concat(g.id) : []
        }

        function i() {
        }

        function a() {
          return !(v.checkDuplicatedScript && Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function (t) {
            return -1 !== t.src.indexOf("analytics") || -1 !== t.src.indexOf("gtag")
          }).length > 0)
        }

        function s(t) {
          return t.name || t.replace(/-/gi, "")
        }

        function u(t, e) {
          return o().length > 1 ? s(e) + "." + t : t
        }

        function c(t) {
          for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
          "undefined" != typeof window && o().forEach(function (e) {
            var n, o = {m: u(t, e), a: r};
            window.ga ? v.batch.enabled ? (_.push(o), b || (b = setInterval(function () {
              _.length ? _.splice(0, v.batch.amount).forEach(function (t) {
                var e;
                (e = window).ga.apply(e, [t.m].concat(function (t) {
                  if (Array.isArray(t)) {
                    for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
                    return r
                  }
                  return Array.from(t)
                }(t.a)))
              }) : (clearInterval(b), b = null)
            }, v.batch.delay))) : (n = window).ga.apply(n, [u(t, e)].concat(r)) : v.untracked.push(o)
          })
        }

        function l() {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          "object" != typeof e[0] || e[0].constructor !== Object ? c("set", e[0], e[1]) : c("set", e[0])
        }

        function h() {
          var t = o();
          v.debug.enabled && (window.ga_debug = {trace: v.debug.trace}), t.forEach(function (e) {
            var r = s(e), n = v.customIdFields[e] || {}, o = t.length > 1 ? x({}, v.fields, n, {name: r}) : v.fields;
            window.ga("create", e.id || e, "auto", o)
          }), v.beforeFirstHit();
          var e = v.ecommerce;
          if (e.enabled) {
            var r = e.enhanced ? "ec" : "ecommerce";
            e.options ? c("require", r, e.options) : c("require", r)
          }
          v.linkers.length > 0 && (c("require", "linker"), c("linker:autoLink", v.linkers)), v.debug.sendHitTask || l("sendHitTask", null)
        }

        function m() {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          var n = e[0];
          if (1 === e.length && "string" == typeof n) return c("send", "screenview", {screenName: n});
          c.apply(void 0, ["send", "screenview"].concat(e))
        }

        function f() {
          for (var t = void 0, e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          r.length && function (t) {
            return t.currentRoute
          }(r[0]) && (t = r[0].currentRoute), r.length && function (t) {
            return t.query && t.params
          }(r[0]) && (t = r[0]), t ? p(t) : (l("page", "object" == typeof r[0] ? r[0].page : r[0]), c.apply(void 0, ["send", "pageview"].concat(r)))
        }

        function p(t) {
          if (!function (t) {
            return [t.name, t.path].filter(Boolean).find(function (t) {
              return -1 !== v.ignoreRoutes.indexOf(t)
            })
          }(t)) {
            var e = v.autoTracking, r = t.meta.analytics,
              n = (void 0 === r ? {} : r).pageviewTemplate || e.pageviewTemplate;
            if (e.screenview && !t.name) throw new Error("[vue-analytics] Route name is mandatory when using screenview.");
            if (e.screenview) return void m(t.name);
            if (n) f(n(t)); else {
              var o = v.router, i = v.autoTracking, a = i.transformQueryString, s = i.prependBase, u = function (t) {
                var e = Object.keys(t).reduce(function (e, r, n, o) {
                  var i = n === o.length - 1;
                  return e + (r + "=") + t[r] + (i ? "" : "&")
                }, "");
                return "" !== e ? "?" + e : ""
              }(t.query), c = o && o.options.base, l = s && c, h = t.path + (a ? u : "");
              f(h = l ? function (t, e) {
                var r = e.split("/"), n = t.split("/");
                return "" === r[0] && "/" === t[t.length - 1] && r.shift(), n.join("/") + r.join("/")
              }(c, h) : h)
            }
          }
        }

        function d(t) {
          if (Array.isArray(t)) {
            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
            return r
          }
          return Array.from(t)
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var g = (Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          })({}, {
            $vue: null,
            id: null,
            router: null,
            fields: {},
            customIdFields: {},
            ignoreRoutes: [],
            linkers: [],
            commands: {},
            disabled: !1,
            customResourceURL: null,
            set: [],
            require: [],
            ecommerce: {enabled: !1, options: null, enhanced: !1},
            autoTracking: {
              screenview: !1,
              shouldRouterUpdate: null,
              skipSamePath: !1,
              exception: !1,
              exceptionLogs: !0,
              page: !0,
              transformQueryString: !0,
              pageviewOnLoad: !0,
              pageviewTemplate: null,
              untracked: !0,
              prependBase: !0
            },
            debug: {enabled: !1, trace: !1, sendHitTask: !0},
            batch: {enabled: !1, delay: 500, amount: 2},
            checkDuplicatedScript: !1,
            disableScriptLoader: !1,
            beforeFirstHit: i,
            ready: i,
            untracked: []
          }), v = g, y = function (t) {
            if (t.then) return t;
            if ("function" == typeof t) {
              var e = t();
              return e.then ? e : Promise.resolve(e)
            }
            return Promise.resolve(t)
          }, b = void 0, _ = [], x = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          }, w = function () {
            2 != arguments.length ? c("require", arguments.length <= 0 ? void 0 : arguments[0]) : c("require", arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1])
          }, S = function () {
            v.set.forEach(function (t) {
              var e = t.field, r = t.value;
              if (void 0 === e || void 0 === r) throw new Error('[vue-analytics] Wrong configuration in the plugin options.\nThe "set" array requires each item to have a "field" and a "value" property.');
              l(e, r)
            }), function () {
              var t = ["ec", "ecommerce"];
              v.require.forEach(function (e) {
                if (-1 !== t.indexOf(e) || -1 !== t.indexOf(e.name)) throw new Error("[vue-analytics] The ecommerce features are built-in in the plugin. \nFollow the ecommerce instructions available in the documentation.");
                if ("string" != typeof e && "object" != typeof e) throw new Error('[vue-analytics] Wrong configuration in the plugin options. \nThe "require" array requires each item to be a string or to have a "name" and an "options" property.');
                var r = e.name || e;
                e.options ? w(r, e.options) : w(r)
              })
            }()
          }, k = function () {
            v.untracked.forEach(function (t) {
              c.apply(void 0, [t.m].concat(function (t) {
                if (Array.isArray(t)) {
                  for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
                  return r
                }
                return Array.from(t)
              }(t.a)))
            })
          }, T = function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            "undefined" != typeof window && o().forEach(function (e) {
              window["ga-disable-" + e] = t
            })
          }, M = function () {
            if ("undefined" != typeof document && "undefined" != typeof window) {
              var t = v.disableScriptLoader, e = v.debug.enabled ? "analytics_debug" : "analytics",
                r = v.customResourceURL || "https://www.google-analytics.com/" + e + ".js";
              if (!v.id) throw new Error('[vue-analytics] Missing the "id" parameter. Add at least one tracking domain ID');
              var o = [y(v.id), y(v.disabled)];
              return !a() || window.ga && t || o.push(function (t) {
                return new Promise(function (e, r) {
                  var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("script");
                  o.async = !0, o.src = t, o.charset = "utf8", n.appendChild(o), o.onload = e, o.onerror = r
                })
              }(r).catch(function () {
                throw new Error("[vue-analytics] An error occured! Please check your connection, if you have any Google Analytics blocker installed in your browser or check your custom resource URL if you have added any.")
              })), Promise.all(o).then(function (t) {
                n({id: t[0], disabled: t[1]}), T(v.disabled), h(), k(), S(), function () {
                  var t = v.router, e = v.autoTracking;
                  e.page && t && (e.pageviewOnLoad && p(t.currentRoute), v.router.afterEach(function (r, n) {
                    var o = e.skipSamePath, i = e.shouldRouterUpdate;
                    o && r.path === n.path || ("function" != typeof i || i(r, n)) && v.$vue.nextTick().then(function () {
                      p(t.currentRoute)
                    })
                  }))
                }()
              }).catch(function (t) {
                console.error(t.message)
              })
            }
          }, A = this, C = function (t) {
            c("send", "exception", {
              exDescription: t,
              exFatal: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            })
          }, P = function (t) {
            if (v.autoTracking.exception) {
              window.addEventListener("error", function (t) {
                C(t.message)
              });
              var e = t.config.errorHandler;
              t.config.errorHandler = function (t, r, n) {
                C(t.message), v.autoTracking.exceptionLogs && (console.error("[vue-analytics] Error in " + n + ": " + t.message), console.error(t)), "function" == typeof e && e.call(A, t, r, n)
              }
            }
          }, O = C, E = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          },
          z = ["addItem", "addTransaction", "addProduct", "addImpression", "setAction", "addPromo", "send"].reduce(function (t, e) {
            return E({}, t, function (t, e, r) {
              return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = r, t
            }({}, e, function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
              c.apply(void 0, [function (t) {
                return (v.ecommerce.enhanced ? "ec" : "ecommerce") + ":" + t
              }(e)].concat(r))
            }))
          }, {}), I = {
            event: function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
              c.apply(void 0, ["send", "event"].concat(e))
            }, exception: O, page: f, query: c, require: w, set: l, social: function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
              c.apply(void 0, ["send", "social"].concat(e))
            }, time: function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
              c.apply(void 0, ["send", "timing"].concat(e))
            }, screenview: m, ecommerce: z, disable: function () {
              return T(!0)
            }, enable: function () {
              return T(!1)
            }, commands: v.commands
          }, N = {
            inserted: function (t, e, r) {
              var n = Object.keys(e.modifiers);
              0 === n.length && n.push("click"), n.forEach(function (n) {
                t.addEventListener(n, function () {
                  var t = "string" == typeof e.value ? v.commands[e.value] : e.value;
                  if (!t) throw new Error("[vue-analytics] The value passed to v-ga is not defined in the commands list.");
                  t.apply(r.context)
                })
              })
            }
          }, D = function () {
            return function (t, e) {
              if (Array.isArray(t)) return t;
              if (Symbol.iterator in Object(t)) return function (t, e) {
                var r = [], n = !0, o = !1, i = void 0;
                try {
                  for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0) ;
                } catch (t) {
                  o = !0, i = t
                } finally {
                  try {
                    !n && s.return && s.return()
                  } finally {
                    if (o) throw i
                  }
                }
                return r
              }(t, e);
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
          }();
        e.default = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          n(L({}, e, {$vue: t})), t.directive("ga", N), t.prototype.$ga = t.$ga = I, P(t), M()
        }, r.d(e, "analyticsMiddleware", function () {
          return R
        }), r.d(e, "onAnalyticsReady", function () {
          return F
        }), r.d(e, "event", function () {
          return B
        }), r.d(e, "ecommerce", function () {
          return U
        }), r.d(e, "set", function () {
          return j
        }), r.d(e, "page", function () {
          return q
        }), r.d(e, "query", function () {
          return H
        }), r.d(e, "screenview", function () {
          return W
        }), r.d(e, "time", function () {
          return V
        }), r.d(e, "require", function () {
          return G
        }), r.d(e, "exception", function () {
          return Y
        }), r.d(e, "social", function () {
          return J
        });
        var L = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          }, R = function (t) {
            t.subscribe(function (t) {
              var e = t.payload;
              if (e && e.meta && e.meta.analytics) {
                var r = e.meta.analytics;
                if (!Array.isArray(r)) throw new Error('The "analytics" property needs to be an array');
                r.forEach(function (t) {
                  var e, r = void 0, n = t.shift(), o = t;
                  if (n.includes(":")) {
                    var i = n.split(":"), a = D(i, 2);
                    n = a[0], r = a[1]
                  }
                  if (!(n in I)) throw new Error('[vue-analytics:vuex] The type "' + n + "\" doesn't exist.");
                  if (r && !(r in I[n])) throw new Error('[vue-analytics:vuex] The type "' + n + '" has not method "' + r + '".');
                  if ("ecommerce" === n && !r) throw new Error('[vue-analytics:vuex] The type "' + n + '" needs to call a method. Check documentation.');
                  r ? (e = I[n])[r].apply(e, d(o)) : I[n].apply(I, d(o))
                })
              }
            })
          }, F = function () {
            return new Promise(function (t, e) {
              var r = setInterval(function () {
                "undefined" != typeof window && window.ga && (t(), clearInterval(r))
              }, 10)
            })
          }, B = I.event, U = I.ecommerce, j = I.set, q = I.page, H = I.query, W = I.screenview, V = I.time,
          G = I.require, Y = I.exception, J = I.social
      }])
    })
  }, BO1k: function (t, e, r) {
    t.exports = {default: r("fxRn"), __esModule: !0}
  }, BbyF: function (t, e, r) {
    var n = r("oeih"), o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(n(t), 9007199254740991) : 0
    }
  }, "C+4B": function (t, e, r) {
    var n = r("PHqh"), o = r("x9zv").f;
    r("3i66")("getOwnPropertyDescriptor", function () {
      return function (t, e) {
        return o(n(t), e)
      }
    })
  }, "C+Ps": function (t, e, r) {
    var n = r("Qh14"), o = r("Y1N3"), i = r("Y1aA");
    t.exports = function (t) {
      var e = n(t), r = o.f;
      if (r) for (var a, s = r(t), u = i.f, c = 0; s.length > c;) u.call(t, a = s[c++]) && e.push(a);
      return e
    }
  }, C4MV: function (t, e, r) {
    t.exports = {default: r("9bBU"), __esModule: !0}
  }, CEne: function (t, e, r) {
    "use strict";
    var n = r("OzIq"), o = r("lDLk"), i = r("bUqO"), a = r("kkCw")("species");
    t.exports = function (t) {
      var e = n[t];
      i && e && !e[a] && o.f(e, a, {
        configurable: !0, get: function () {
          return this
        }
      })
    }
  }, "CVR+": function (t, e, r) {
    var n = r("Ds5P"), o = r("XSOZ"), i = r("DIVP"), a = (r("OzIq").Reflect || {}).apply, s = Function.apply;
    n(n.S + n.F * !r("zgIt")(function () {
      a(function () {
      })
    }), "Reflect", {
      apply: function (t, e, r) {
        var n = o(t), u = i(r);
        return a ? a(n, e, u) : s.call(n, e, u)
      }
    })
  }, CXw9: function (t, e, r) {
    "use strict";
    var n, o, i, a, s = r("O4g8"), u = r("7KvD"), c = r("+ZMJ"), l = r("RY/4"), h = r("kM2E"), m = r("EqjI"),
      f = r("lOnJ"), p = r("2KxR"), d = r("NWt+"), g = r("t8x9"), v = r("L42u").set, y = r("82Mu")(), b = r("qARP"),
      _ = r("dNDb"), x = r("iUbK"), w = r("fJUb"), S = u.TypeError, k = u.process, T = k && k.versions,
      M = T && T.v8 || "", A = u.Promise, C = "process" == l(k), P = function () {
      }, O = o = b.f, E = !!function () {
        try {
          var t = A.resolve(1), e = (t.constructor = {})[r("dSzd")("species")] = function (t) {
            t(P, P)
          };
          return (C || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof e && 0 !== M.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
        } catch (t) {
        }
      }(), z = function (t) {
        var e;
        return !(!m(t) || "function" != typeof (e = t.then)) && e
      }, I = function (t, e) {
        if (!t._n) {
          t._n = !0;
          var r = t._c;
          y(function () {
            for (var n = t._v, o = 1 == t._s, i = 0, a = function (e) {
              var r, i, a, s = o ? e.ok : e.fail, u = e.resolve, c = e.reject, l = e.domain;
              try {
                s ? (o || (2 == t._h && L(t), t._h = 1), !0 === s ? r = n : (l && l.enter(), r = s(n), l && (l.exit(), a = !0)), r === e.promise ? c(S("Promise-chain cycle")) : (i = z(r)) ? i.call(r, u, c) : u(r)) : c(n)
              } catch (t) {
                l && !a && l.exit(), c(t)
              }
            }; r.length > i;) a(r[i++]);
            t._c = [], t._n = !1, e && !t._h && N(t)
          })
        }
      }, N = function (t) {
        v.call(u, function () {
          var e, r, n, o = t._v, i = D(t);
          if (i && (e = _(function () {
            C ? k.emit("unhandledRejection", o, t) : (r = u.onunhandledrejection) ? r({
              promise: t,
              reason: o
            }) : (n = u.console) && n.error && n.error("Unhandled promise rejection", o)
          }), t._h = C || D(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
        })
      }, D = function (t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
      }, L = function (t) {
        v.call(u, function () {
          var e;
          C ? k.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({promise: t, reason: t._v})
        })
      }, R = function (t) {
        var e = this;
        e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
      }, F = function (t) {
        var e, r = this;
        if (!r._d) {
          r._d = !0, r = r._w || r;
          try {
            if (r === t) throw S("Promise can't be resolved itself");
            (e = z(t)) ? y(function () {
              var n = {_w: r, _d: !1};
              try {
                e.call(t, c(F, n, 1), c(R, n, 1))
              } catch (t) {
                R.call(n, t)
              }
            }) : (r._v = t, r._s = 1, I(r, !1))
          } catch (t) {
            R.call({_w: r, _d: !1}, t)
          }
        }
      };
    E || (A = function (t) {
      p(this, A, "Promise", "_h"), f(t), n.call(this);
      try {
        t(c(F, this, 1), c(R, this, 1))
      } catch (t) {
        R.call(this, t)
      }
    }, (n = function (t) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = r("xH/j")(A.prototype, {
      then: function (t, e) {
        var r = O(g(this, A));
        return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = C ? k.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && I(this, !1), r.promise
      }, catch: function (t) {
        return this.then(void 0, t)
      }
    }), i = function () {
      var t = new n;
      this.promise = t, this.resolve = c(F, t, 1), this.reject = c(R, t, 1)
    }, b.f = O = function (t) {
      return t === A || t === a ? new i(t) : o(t)
    }), h(h.G + h.W + h.F * !E, {Promise: A}), r("e6n0")(A, "Promise"), r("bRrM")("Promise"), a = r("FeBl").Promise, h(h.S + h.F * !E, "Promise", {
      reject: function (t) {
        var e = O(this);
        return (0, e.reject)(t), e.promise
      }
    }), h(h.S + h.F * (s || !E), "Promise", {
      resolve: function (t) {
        return w(s && this === a ? A : this, t)
      }
    }), h(h.S + h.F * !(E && r("dY0y")(function (t) {
      A.all(t).catch(P)
    })), "Promise", {
      all: function (t) {
        var e = this, r = O(e), n = r.resolve, o = r.reject, i = _(function () {
          var r = [], i = 0, a = 1;
          d(t, !1, function (t) {
            var s = i++, u = !1;
            r.push(void 0), a++, e.resolve(t).then(function (t) {
              u || (u = !0, r[s] = t, --a || n(r))
            }, o)
          }), --a || n(r)
        });
        return i.e && o(i.v), r.promise
      }, race: function (t) {
        var e = this, r = O(e), n = r.reject, o = _(function () {
          d(t, !1, function (t) {
            e.resolve(t).then(r.resolve, n)
          })
        });
        return o.e && n(o.v), r.promise
      }
    })
  }, Cdx3: function (t, e, r) {
    var n = r("sB3e"), o = r("lktj");
    r("uqUo")("keys", function () {
      return function (t) {
        return o(n(t))
      }
    })
  }, CvWX: function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("BbyF"), i = r("kqpo"), a = "".startsWith;
    n(n.P + n.F * r("1ETD")("startsWith"), "String", {
      startsWith: function (t) {
        var e = i(this, t, "startsWith"), r = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
          n = String(t);
        return a ? a.call(e, n, r) : e.slice(r, r + n.length) === n
      }
    })
  }, D2L2: function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e)
    }
  }, DIVP: function (t, e, r) {
    var n = r("UKM+");
    t.exports = function (t) {
      if (!n(t)) throw TypeError(t + " is not an object!");
      return t
    }
  }, DPsE: function (t, e, r) {
    "use strict";
    var n = r("FryR"), o = r("zo/l"), i = r("BbyF");
    t.exports = [].copyWithin || function (t, e) {
      var r = n(this), a = i(r.length), s = o(t, a), u = o(e, a), c = arguments.length > 2 ? arguments[2] : void 0,
        l = Math.min((void 0 === c ? a : o(c, a)) - u, a - s), h = 1;
      for (u < s && s < u + l && (h = -1, u += l - 1, s += l - 1); l-- > 0;) u in r ? r[s] = r[u] : delete r[s], s += h, u += h;
      return r
    }
  }, Dd8w: function (t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function (t) {
      return t && t.__esModule ? t : {default: t}
    }(r("woOf"));
    e.default = n.default || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
      }
      return t
    }
  }, Dgii: function (t, e, r) {
    "use strict";
    var n = r("lDLk").f, o = r("7ylX"), i = r("A16L"), a = r("rFzY"), s = r("9GpA"), u = r("vmSO"), c = r("uc2A"),
      l = r("KB1o"), h = r("CEne"), m = r("bUqO"), f = r("1aA0").fastKey, p = r("zq/X"), d = m ? "_s" : "size",
      g = function (t, e) {
        var r, n = f(e);
        if ("F" !== n) return t._i[n];
        for (r = t._f; r; r = r.n) if (r.k == e) return r
      };
    t.exports = {
      getConstructor: function (t, e, r, c) {
        var l = t(function (t, n) {
          s(t, l, e, "_i"), t._t = e, t._i = o(null), t._f = void 0, t._l = void 0, t[d] = 0, void 0 != n && u(n, r, t[c], t)
        });
        return i(l.prototype, {
          clear: function () {
            for (var t = p(this, e), r = t._i, n = t._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete r[n.i];
            t._f = t._l = void 0, t[d] = 0
          }, delete: function (t) {
            var r = p(this, e), n = g(r, t);
            if (n) {
              var o = n.n, i = n.p;
              delete r._i[n.i], n.r = !0, i && (i.n = o), o && (o.p = i), r._f == n && (r._f = o), r._l == n && (r._l = i), r[d]--
            }
            return !!n
          }, forEach: function (t) {
            p(this, e);
            for (var r, n = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); r = r ? r.n : this._f;) for (n(r.v, r.k, this); r && r.r;) r = r.p
          }, has: function (t) {
            return !!g(p(this, e), t)
          }
        }), m && n(l.prototype, "size", {
          get: function () {
            return p(this, e)[d]
          }
        }), l
      }, def: function (t, e, r) {
        var n, o, i = g(t, e);
        return i ? i.v = r : (t._l = i = {
          i: o = f(e, !0),
          k: e,
          v: r,
          p: n = t._l,
          n: void 0,
          r: !1
        }, t._f || (t._f = i), n && (n.n = i), t[d]++, "F" !== o && (t._i[o] = i)), t
      }, getEntry: g, setStrong: function (t, e, r) {
        c(t, e, function (t, r) {
          this._t = p(t, e), this._k = r, this._l = void 0
        }, function () {
          for (var t = this._k, e = this._l; e && e.r;) e = e.p;
          return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, l(1))
        }, r ? "entries" : "values", !r, !0), h(e)
      }
    }
  }, Ds5P: function (t, e, r) {
    var n = r("OzIq"), o = r("7gX0"), i = r("2p1q"), a = r("R3AP"), s = r("rFzY"), u = function (t, e, r) {
      var c, l, h, m, f = t & u.F, p = t & u.G, d = t & u.S, g = t & u.P, v = t & u.B,
        y = p ? n : d ? n[e] || (n[e] = {}) : (n[e] || {}).prototype, b = p ? o : o[e] || (o[e] = {}),
        _ = b.prototype || (b.prototype = {});
      for (c in p && (r = e), r) h = ((l = !f && y && void 0 !== y[c]) ? y : r)[c], m = v && l ? s(h, n) : g && "function" == typeof h ? s(Function.call, h) : h, y && a(y, c, h, t & u.U), b[c] != h && i(b, c, m), g && _[c] != h && (_[c] = h)
    };
    n.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
  }, DuR2: function (t, e, r) {
    t.exports = r("uomd")(1)
  }, EGZi: function (t, e) {
    t.exports = function (t, e) {
      return {value: e, done: !!t}
    }
  }, EqBC: function (t, e, r) {
    "use strict";
    var n = r("kM2E"), o = r("FeBl"), i = r("7KvD"), a = r("t8x9"), s = r("fJUb");
    n(n.P + n.R, "Promise", {
      finally: function (t) {
        var e = a(this, o.Promise || i.Promise), r = "function" == typeof t;
        return this.then(r ? function (r) {
          return s(e, t()).then(function () {
            return r
          })
        } : t, r ? function (r) {
          return s(e, t()).then(function () {
            throw r
          })
        } : t)
      }
    })
  }, EqjI: function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }, EuXz: function (t, e, r) {
    var n = r("lDLk").f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
    "name" in o || r("bUqO") && n(o, "name", {
      configurable: !0, get: function () {
        try {
          return ("" + this).match(i)[1]
        } catch (t) {
          return ""
        }
      }
    })
  }, F3sI: function (t, e, r) {
    var n = r("Ds5P"), o = r("PHqh"), i = r("BbyF");
    n(n.S, "String", {
      raw: function (t) {
        for (var e = o(t.raw), r = i(e.length), n = arguments.length, a = [], s = 0; r > s;) a.push(String(e[s++])), s < n && a.push(String(arguments[s]));
        return a.join("")
      }
    })
  }, FKfb: function (t, e, r) {
    var n = r("Ds5P"), o = r("lKE8")(!0);
    n(n.S, "Object", {
      entries: function (t) {
        return o(t)
      }
    })
  }, FN8c: function (t, e, r) {
    "use strict";
    r.d(e, "e", function () {
      return n
    }), r.d(e, "a", function () {
      return o
    }), r.d(e, "b", function () {
      return i
    }), r.d(e, "g", function () {
      return a
    }), r.d(e, "c", function () {
      return s
    }), r.d(e, "i", function () {
      return u
    }), r.d(e, "f", function () {
      return c
    }), r.d(e, "h", function () {
      return l
    }), e.j = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (e) return l.PROBLEM_CODE + "_" + e + "_" + t;
      return l.PROBLEM_CODE + "_NaN_" + t
    }, r.d(e, "d", function () {
      return h
    });
    var n = {
        "-2": {name: "Compile Error", short: "CE", color: "yellow", type: "warning"},
        "-1": {name: "Wrong Answer", short: "WA", color: "red", type: "error"},
        0: {name: "Accepted", short: "AC", color: "green", type: "success"},
        1: {name: "Time Limit Exceeded", short: "TLE", color: "red", type: "error"},
        2: {name: "Time Limit Exceeded", short: "TLE", color: "red", type: "error"},
        3: {name: "Memory Limit Exceeded", short: "MLE", color: "red", type: "error"},
        4: {name: "Runtime Error", short: "RE", color: "red", type: "error"},
        5: {name: "System Error", short: "SE", color: "red", type: "error"},
        6: {name: "Pending", color: "yellow", type: "warning"},
        7: {name: "Judging", color: "blue", type: "info"},
        8: {name: "Partial Accepted", short: "PAC", color: "blue", type: "info"},
        9: {name: "Submitting", color: "yellow", type: "warning"}
      }, o = {NOT_START: "1", UNDERWAY: "0", ENDED: "-1"}, i = {
        1: {name: "Not Started", color: "yellow"},
        0: {name: "Underway", color: "green"},
        "-1": {name: "Ended", color: "red"}
      }, a = {ACM: "ACM", OI: "OI"}, s = {PUBLIC: "Public", PRIVATE: "Password Protected"},
      u = {REGULAR_USER: "Regular User", ADMIN: "Admin", SUPER_ADMIN: "Super Admin"},
      c = {NONE: "None", OWN: "Own", ALL: "All"},
      l = {AUTHED: "authed", PROBLEM_CODE: "problemCode", languages: "languages"};
    var h = "UA-111499601-1"
  }, FeBl: function (t, e) {
    var r = t.exports = {version: "2.5.7"};
    "number" == typeof __e && (__e = r)
  }, FryR: function (t, e, r) {
    var n = r("/whu");
    t.exports = function (t) {
      return Object(n(t))
    }
  }, Gh7F: function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("kqpo");
    n(n.P + n.F * r("1ETD")("includes"), "String", {
      includes: function (t) {
        return !!~o(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  }, H0mh: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Math", {
      trunc: function (t) {
        return (t > 0 ? Math.floor : Math.ceil)(t)
      }
    })
  }, "Hl+4": function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Math", {sign: r("cwmK")})
  }, IRJ3: function (t, e, r) {
    "use strict";
    var n = r("7ylX"), o = r("fU25"), i = r("yYvK"), a = {};
    r("2p1q")(a, r("kkCw")("iterator"), function () {
      return this
    }), t.exports = function (t, e, r) {
      t.prototype = n(a, {next: o(1, r)}), i(t, e + " Iterator")
    }
  }, Ibhu: function (t, e, r) {
    var n = r("D2L2"), o = r("TcQ7"), i = r("vFc/")(!1), a = r("ax3d")("IE_PROTO");
    t.exports = function (t, e) {
      var r, s = o(t), u = 0, c = [];
      for (r in s) r != a && n(s, r) && c.push(r);
      for (; e.length > u;) n(s, r = e[u++]) && (~i(c, r) || c.push(r));
      return c
    }
  }, IcnI: function (t, e, r) {
    "use strict";
    var n = r("bOdI"), o = r.n(n), i = r("7+uW"), a = r("NYxO"), s = r("fZjL"), u = r.n(s), c = r("woOf"), l = r.n(c);
    var h, m, f = function (t) {
      if (t instanceof Object) {
        var e = l()({}, t);
        return u()(t).forEach(function (t) {
          e[t] = t
        }), e
      }
    }({
      CHANGE_PROFILE: null,
      CHANGE_MODAL_STATUS: null,
      UPDATE_WEBSITE_CONF: null,
      NOW: null,
      NOW_ADD_1S: null,
      CHANGE_CONTEST: null,
      CHANGE_CONTEST_PROBLEMS: null,
      CHANGE_CONTEST_ITEM_VISIBLE: null,
      CHANGE_RANK_FORCE_UPDATE: null,
      CHANGE_CONTEST_RANK_LIMIT: null,
      CONTEST_ACCESS: null,
      CLEAR_CONTEST: null
    }), p = r("8Q2T"), d = r("VKKs"), g = r("mWYR"), v = r("FN8c"), y = {
      state: {profile: {}}, getters: {
        user: function (t) {
          return t.profile.user || {}
        }, profile: function (t) {
          return t.profile
        }, isAuthenticated: function (t, e) {
          return !!e.user.id
        }, isAdminRole: function (t, e) {
          return e.user.admin_type === v.i.ADMIN || e.user.admin_type === v.i.SUPER_ADMIN
        }, isSuperAdmin: function (t, e) {
          return e.user.admin_type === v.i.SUPER_ADMIN
        }, hasProblemPermission: function (t, e) {
          return e.user.problem_permission !== v.f.NONE
        }
      }, actions: {
        getProfile: function (t) {
          var e = t.commit;
          p.a.getUserInfo().then(function (t) {
            e(f.CHANGE_PROFILE, {profile: t.data.data || {}})
          })
        }, clearProfile: function (t) {
          (0, t.commit)(f.CHANGE_PROFILE, {profile: {}}), d.a.clear()
        }
      }, mutations: o()({}, f.CHANGE_PROFILE, function (t, e) {
        var r = e.profile;
        t.profile = r, r.language && (g.a.locale = r.language), d.a.set(v.h.AUTHED, !!r.user)
      })
    }, b = r("//Fk"), _ = r.n(b), x = r("Dd8w"), w = r.n(x), S = r("PJh5"), k = r.n(S), T = {
      contestLoaded: function (t) {
        return !!t.contest.status
      }, contestStatus: function (t, e) {
        if (!e.contestLoaded) return null;
        var r = k()(t.contest.start_time), n = k()(t.contest.end_time), o = t.now;
        return r > o ? v.a.NOT_START : n < o ? v.a.ENDED : v.a.UNDERWAY
      }, contestRuleType: function (t) {
        return t.contest.rule_type || null
      }, isContestAdmin: function (t, e, r, n) {
        return n.isAuthenticated && (t.contest.created_by.id === n.user.id || n.user.admin_type === v.i.SUPER_ADMIN)
      }, contestMenuDisabled: function (t, e) {
        return !e.isContestAdmin && (t.contest.contest_type === v.c.PUBLIC ? e.contestStatus === v.a.NOT_START : !t.access)
      }, OIContestRealTimePermission: function (t, e, r, n) {
        return "ACM" === e.contestRuleType || e.contestStatus === v.a.ENDED || (!0 === t.contest.real_time_rank || e.isContestAdmin)
      }, problemSubmitDisabled: function (t, e, r, n) {
        return e.contestStatus === v.a.ENDED || (e.contestStatus === v.a.NOT_START ? !e.isContestAdmin : !n.isAuthenticated)
      }, passwordFormVisible: function (t, e) {
        return t.contest.contest_type !== v.c.PUBLIC && !t.access && !e.isContestAdmin
      }, contestStartTime: function (t) {
        return k()(t.contest.start_time)
      }, contestEndTime: function (t) {
        return k()(t.contest.end_time)
      }, countdown: function (t, e) {
        if (e.contestStatus === v.a.NOT_START) {
          var r = k.a.duration(e.contestStartTime.diff(t.now, "seconds"), "seconds");
          return r.weeks() > 0 ? "Start At " + r.humanize() : "-" + [Math.floor(r.asHours()), r.minutes(), r.seconds()].join(":")
        }
        if (e.contestStatus === v.a.UNDERWAY) {
          var n = k.a.duration(e.contestEndTime.diff(t.now, "seconds"), "seconds");
          return "-" + [Math.floor(n.asHours()), n.minutes(), n.seconds()].join(":")
        }
        return "Ended"
      }
    }, M = {
      state: {
        now: k()(),
        access: !1,
        rankLimit: 30,
        forceUpdate: !1,
        contest: {created_by: {}, contest_type: v.c.PUBLIC},
        contestProblems: [],
        itemVisible: {menu: !0, chart: !0, realName: !1}
      }, mutations: (h = {}, o()(h, f.CHANGE_CONTEST, function (t, e) {
        t.contest = e.contest
      }), o()(h, f.CHANGE_CONTEST_ITEM_VISIBLE, function (t, e) {
        t.itemVisible = w()({}, t.itemVisible, e)
      }), o()(h, f.CHANGE_RANK_FORCE_UPDATE, function (t, e) {
        t.forceUpdate = e.value
      }), o()(h, f.CHANGE_CONTEST_PROBLEMS, function (t, e) {
        t.contestProblems = e.contestProblems
      }), o()(h, f.CHANGE_CONTEST_RANK_LIMIT, function (t, e) {
        t.rankLimit = e.rankLimit
      }), o()(h, f.CONTEST_ACCESS, function (t, e) {
        t.access = e.access
      }), o()(h, f.CLEAR_CONTEST, function (t) {
        t.contest = {created_by: {}}, t.contestProblems = [], t.access = !1, t.itemVisible = {
          menu: !0,
          chart: !0,
          realName: !1
        }, t.forceUpdate = !1
      }), o()(h, f.NOW, function (t, e) {
        t.now = e.now
      }), o()(h, f.NOW_ADD_1S, function (t) {
        t.now = k()(t.now.add(1, "s"))
      }), h), getters: T, actions: {
        getContest: function (t) {
          var e = t.commit, r = t.rootState, n = t.dispatch;
          return new _.a(function (t, o) {
            p.a.getContest(r.route.params.contestID).then(function (r) {
              t(r);
              var o = r.data.data;
              e(f.CHANGE_CONTEST, {contest: o}), e(f.NOW, {now: k()(o.now)}), o.contest_type === v.c.PRIVATE && n("getContestAccess")
            }, function (t) {
              o(t)
            })
          })
        }, getContestProblems: function (t) {
          var e = t.commit, r = t.rootState;
          return new _.a(function (t, n) {
            p.a.getContestProblemList(r.route.params.contestID).then(function (r) {
              r.data.data.sort(function (t, e) {
                return t._id === e._id ? 0 : t._id > e._id ? 1 : -1
              }), e(f.CHANGE_CONTEST_PROBLEMS, {contestProblems: r.data.data}), t(r)
            }, function () {
              e(f.CHANGE_CONTEST_PROBLEMS, {contestProblems: []})
            })
          })
        }, getContestAccess: function (t) {
          var e = t.commit, r = t.rootState;
          return new _.a(function (t, n) {
            p.a.getContestAccess(r.route.params.contestID).then(function (r) {
              e(f.CONTEST_ACCESS, {access: r.data.data.access}), t(r)
            }).catch()
          })
        }
      }
    };
    r.d(e, "b", function () {
      return f
    }), i.default.use(a.default);
    var A = (m = {}, o()(m, f.UPDATE_WEBSITE_CONF, function (t, e) {
      t.website = e.websiteConfig
    }), o()(m, f.CHANGE_MODAL_STATUS, function (t, e) {
      var r = e.mode, n = e.visible;
      void 0 !== r && (t.modalStatus.mode = r), void 0 !== n && (t.modalStatus.visible = n)
    }), m), C = {
      getWebsiteConfig: function (t) {
        var e = t.commit;
        p.a.getWebsiteConf().then(function (t) {
          e(f.UPDATE_WEBSITE_CONF, {websiteConfig: t.data.data})
        })
      }, changeModalStatus: function (t, e) {
        (0, t.commit)(f.CHANGE_MODAL_STATUS, e)
      }, changeDomTitle: function (t, e) {
        t.commit;
        var r = t.state;
        e && e.title ? window.document.title = r.website.website_name_shortcut?.replace("oj", "OnlineJudge") + " | " + e.title : window.document.title = r.website.website_name_shortcut?.replace("oj", "OnlineJudge") + " | " + r.route.meta.title
      }
    };
    e.a = new a.default.Store({
      modules: {user: y, contest: M},
      state: {website: {}, modalStatus: {mode: "login", visible: !1}},
      getters: {
        website: function (t) {
          return t.website
        }, modalStatus: function (t) {
          return t.modalStatus
        }
      },
      mutations: A,
      actions: C,
      strict: !1
    })
  }, JG34: function (t, e, r) {
    var n = r("Ds5P"), o = r("DIVP"), i = Object.isExtensible;
    n(n.S, "Reflect", {
      isExtensible: function (t) {
        return o(t), !i || i(t)
      }
    })
  }, Jp91: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), r.d(e, "m", function () {
      return n
    });
    var n = {
      Go_Home: "Go Home",
      Description: "Description",
      Input: "Input",
      Output: "Output",
      Sample_Input: "Sample Input",
      Sample_Output: "Sample Output",
      Hint: "Hint",
      Source: "Source",
      Status: "Status",
      Information: "Information",
      Time_Limit: "Time Limit",
      Memory_Limit: "Memory Limit",
      Created: "Created By",
      Level: "Level",
      Score: "Score",
      Tags: "Tags",
      Show: "Show",
      Submit: "Submit",
      Submitting: "Submitting",
      Judging: "Judging",
      Wrong_Answer: "Wrong Answer",
      Statistic: "Statistic",
      Close: "Close",
      View_Contest: "View Contest",
      Are_you_sure_you_want_to_reset_your_code: "Are you sure you want to reset your code?",
      Code_can_not_be_empty: "Code can not be empty",
      Submit_code_successfully: "Submit code successfully",
      You_have_solved_the_problem: "You have solved the problem",
      Submitted_successfully: "Submitted successfully",
      You_have_submitted_a_solution: "You have submitted a solution.",
      Contest_has_ended: "Contest has ended",
      You_have_submission_in_this_problem_sure_to_cover_it: "You have submission in this problem, sure to cover it?",
      Compiler: "Compiler",
      Result_Explanation: "Result Explanation",
      Pending_Judging_Description: "You solution will be judged soon, please wait for result.",
      Compile_Error_Description: "Failed to compile your source code. Click on the link to see compiler's output.",
      Accepted_Description: "Congratulations. Your solution is correct.",
      Wrong_Answer_Description: "Your program's output doesn't match judger's answer.",
      Runtime_Error_Description: "Your program terminated abnormally. Possible reasons are: segment fault, divided by zero or exited with code other than 0.",
      Time_Limit_Exceeded_Description: "The CPU time your program used has exceeded limit.",
      Memory_Limit_Exceeded_Description: "The memory your program actually used has exceeded limit.",
      System_Error_Description: "Oops, something has gone wrong with the judger. Please report this to administrator.",
      Menu: "Menu",
      Chart: "Chart",
      Auto_Refresh: "Auto Refresh",
      RealName: "RealName",
      Force_Update: "Force Update",
      download_csv: "download csv",
      TotalTime: "TotalTime",
      Top_10_Teams: "Top 10 Teams",
      save_as_image: "save as image",
      ACM_Helper: "ACM Helper",
      AC_Time: "AC Time",
      ProblemID: "ProblemID",
      First_Blood: "First Blood",
      Username: "Username",
      Checked: "Checked",
      Not_Checked: "Not Checked",
      Check_It: "Check It",
      ACM_Ranklist: "ACM Ranklist",
      mood: "mood",
      AC: "AC",
      Rating: "Rating",
      Contest_Announcements: "Contest Announcements",
      By: "By",
      The_email_doesnt_exist: "The email doesn't exist",
      Success: "Success",
      Password_reset_mail_sent: "Password reset mail has been sent to your email，",
      Frequently_Asked_Questions: "Frequently Asked Questions",
      Where_is_the_input_and_the_output: "Where is the input and the output?",
      Where_is_the_input_and_the_output_answer_part_1: "Your program shall read input from",
      Standard_Input: "Standard Input",
      Where_is_the_input_and_the_output_answer_part_3: "and write output to",
      Standard_Output: "Standard Output",
      Where_is_the_input_and_the_output_answer_part_5: "For example,you can use",
      Where_is_the_input_and_the_output_answer_part_6: "in C or",
      Where_is_the_input_and_the_output_answer_part_7: "in C++ to read from stdin,and use",
      Where_is_the_input_and_the_output_answer_part_8: "in C or",
      Where_is_the_input_and_the_output_answer_part_9: "in C++ to write to stdout.  User programs are not allowed to read or write files, or you will get a",
      What_is_the_meaning_of_submission_execution_time: "What's the meaning of the submission execution time?",
      What_is_the_meaning_of_submission_execution_time_answer: "The onlinejudge might test your code multiple times with different input files. If your code gives the correct answer within the time limit for each input file, the execution time displayed is the max of the time spent for each test case. Otherwise, the execution time will have no sense.",
      How_Can_I_use_CPP_Int64: "How can I use C++ Int64?",
      How_Can_I_use_CPP_Int64_answer_part_1: "You should declare as",
      How_Can_I_use_CPP_Int64_answer_part_2: "and use with",
      or: "or",
      using: "using",
      How_Can_I_use_CPP_Int64_answer_part_3: "will result in",
      Java_specifications: "Java specifications?",
      Java_specifications_answer_part_1: "All programs must begin in a static main method in a",
      Java_specifications_answer_part_2: "class. Do not use public classes: even",
      Java_specifications_answer_part_3: "must be non public to avoid compile error.Use buffered I/O to avoid time limit exceeded due to excesive flushing.",
      About_presentation_error: "About presentation error?",
      About_presentation_error_answer_part_1: "There is no presentation error in this oj.The judger will trim the blacks and wraps in your ouput's",
      last: "last",
      About_presentation_error_answer_part_2: "line.  if it's still different with the correct output, the result will be",
      How_to_report_bugs: "How to report bugs about this oj?",
      How_to_report_bugs_answer_part_1: "The onlinejudge is open source, you can open an issue in",
      How_to_report_bugs_answer_part_2: "The details(like env, version..) about a bug is required, which will help us a lot to solve the bug. Certainly, we are very pleased to merge your pull requests.",
      Cancel: "Cancel",
      Problems: "Problems",
      Announcements: "Announcements",
      Submissions: "Submissions",
      Rankings: "Rankings",
      Overview: "Overview",
      Admin_Helper: "Admin Helper",
      StartAt: "StartAt",
      EndAt: "EndAt",
      ContestType: "ContestType",
      Creator: "Creator",
      Public: "Public",
      Password_Protected: "Password Protected",
      Rule: "Rule",
      OI: "OI",
      ACM: "ACM",
      Underway: "Underway",
      Not_Started: "Not_Started",
      Ended: "Ended",
      No_contest: "No contest",
      Please_login_first: "Please login first!",
      Problems_List: "Problems List",
      No_Problems: "No Problems",
      Language: "Language",
      Theme: "Theme",
      Reset_to_default_code_definition: "Reset to default code definition",
      Upload_file: "Upload file",
      Monokai: "Monokai",
      Solarized_Light: "Solarized Light",
      Material: "Material",
      Latex_Editor: "Latex Editor",
      Home: "Home",
      NavProblems: "Problems",
      Contests: "Contests",
      NavStatus: "Status",
      Rank: "Rank",
      ACM_Rank: "ACM Rank",
      OI_Rank: "OI Rank",
      About: "About",
      Judger: "Judger",
      FAQ: "FAQ",
      Login: "Login",
      Register: "Register",
      MyHome: "Home",
      MySubmissions: "Submissions",
      Settings: "Settings",
      Management: "Management",
      Logout: "Logout",
      Welcome_to: "Welcome to",
      Refresh: "Refresh",
      Back: "Back",
      No_Announcements: "No Announcements",
      Profile: "Profile",
      Account: "Account",
      Security: "Security",
      ChangePassword: "Change Password",
      ChangeEmail: "Change Email",
      Update_Password: "Update Password",
      Avatar_Setting: "Avatar Setting",
      Profile_Setting: "Profile Setting",
      Sessions: "Sessions",
      Two_Factor_Authentication: "Two Factor Authentication",
      LoginUsername: "Username",
      LoginPassword: "Password",
      TFA_Code: "Code from your TFA app",
      No_Account: "No account? Register now!",
      Forget_Password: "Forget Password",
      UserLogin: "Login",
      Welcome_back: "Welcome back to OJ",
      OI_Ranklist: "OI Ranklist",
      Total_Score: "Total Score",
      Problem_List: "Problem List",
      High: "High",
      Mid: "Mid",
      Low: "Low",
      All: "All",
      Reset: "Reset",
      Pick_One: "Pick one",
      Difficulty: "Difficulty",
      Total: "Total",
      AC_Rate: "AC Rate",
      RegisterUsername: "Username",
      Email_Address: "Email Address",
      RegisterPassword: "Password",
      Password_Again: "Password Again",
      Captcha: "Captcha",
      UserRegister: "Register",
      Already_Registed: "Already registed? Login now!",
      The_username_already_exists: "The username already exists.",
      The_email_already_exists: "The email already exists",
      password_does_not_match: "password does not match",
      Thanks_for_registering: "Thanks for your registering, you can login now",
      Reset_Password: "Lost Password",
      RPassword: "Password",
      RPassword_Again: "Password Again",
      RCaptcha: "Captcha",
      ApplyEmail: "Your Email Address",
      Send_Password_Reset_Email: "Send Password Reset Email",
      Your_password_has_been_reset: "Your password has been reset.",
      Save: "Save",
      Uploading_is_in_progress: "Uploading is in progress, are you sure to leave this page?",
      Lang: "Lang",
      Share: "Share",
      UnShare: "UnShare",
      Succeeded: "Succeeded",
      Real_Time: "Real Time",
      Signal: "Signal",
      When: "When",
      ID: "ID",
      Time: "Time",
      Memory: "Memory",
      Author: "Author",
      Option: "Option",
      Mine: "Mine",
      Search_Author: "Search Author",
      Accepted: "Accepted",
      Time_Limit_Exceeded: "Time Limit Exceeded",
      Memory_Limit_Exceeded: "Memory Limit Exceeded",
      Runtime_Error: "Runtime Error",
      System_Error: "System Error",
      Pending: "Pending",
      Partial_Accepted: "Partial Accepted",
      Compile_Error: "Compile Error",
      Rejudge: "Rejudge",
      UserHomeSolved: "Solved",
      UserHomeserSubmissions: "Submissions",
      UserHomeScore: "Score",
      List_Solved_Problems: "List of solved problems",
      UserHomeIntro: "The guy is so lazy that has not solved any problem yet."
    }
  }, K0JP: function (t, e, r) {
    r("77Ug")("Int32", 4, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n)
      }
    })
  }, KB1o: function (t, e) {
    t.exports = function (t, e) {
      return {value: e, done: !!t}
    }
  }, KOrd: function (t, e, r) {
    var n = r("WBcL"), o = r("FryR"), i = r("mZON")("IE_PROTO"), a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
      return t = o(t), n(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
  }, KUde: function (t, e, r) {
    !function (e, r) {
      t.exports = r()
    }("undefined" != typeof self && self, function () {
      return function (t) {
        var e = {};

        function r(n) {
          if (e[n]) return e[n].exports;
          var o = e[n] = {i: n, l: !1, exports: {}};
          return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        return r.m = t, r.c = e, r.d = function (t, e, n) {
          r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
        }, r.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, r.t = function (t, e) {
          if (1 & e && (t = r(t)), 8 & e) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
          }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) {
            return t[e]
          }.bind(null, o));
          return n
        }, r.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default
          } : function () {
            return t
          };
          return r.d(e, "a", e), e
        }, r.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "", r(r.s = 2)
      }([function (t, e, r) {
      }, , function (t, e, r) {
        "use strict";
        r.r(e);
        r(0);
        var n = function () {
          function t(t, e, r) {
            this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = t, this.start = e, this.end = r
          }

          return t.prototype.getSource = function () {
            return this.lexer.input.slice(this.start, this.end)
          }, t.range = function (e, r) {
            return r ? e && e.loc && r.loc && e.loc.lexer === r.loc.lexer ? new t(e.loc.lexer, e.loc.start, r.loc.end) : null : e && e.loc
          }, t
        }(), o = function () {
          function t(t, e) {
            this.text = void 0, this.loc = void 0, this.text = t, this.loc = e
          }

          return t.prototype.range = function (e, r) {
            return new t(r, n.range(this, e))
          }, t
        }(), i = function t(e, r) {
          this.position = void 0;
          var n, o = "KaTeX parse error: " + e, i = r && r.loc;
          if (i && i.start <= i.end) {
            var a = i.lexer.input;
            n = i.start;
            var s = i.end;
            n === a.length ? o += " at end of input: " : o += " at position " + (n + 1) + ": ";
            var u = a.slice(n, s).replace(/[^]/g, "$&̲");
            o += (n > 15 ? "…" + a.slice(n - 15, n) : a.slice(0, n)) + u + (s + 15 < a.length ? a.slice(s, s + 15) + "…" : a.slice(s))
          }
          var c = new Error(o);
          return c.name = "ParseError", c.__proto__ = t.prototype, c.position = n, c
        };
        i.prototype.__proto__ = Error.prototype;
        var a = i, s = /([A-Z])/g, u = {"&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#x27;"},
          c = /[&><"']/g;
        var l = function t(e) {
            return "ordgroup" === e.type ? 1 === e.body.length ? t(e.body[0]) : e : "color" === e.type ? 1 === e.body.length ? t(e.body[0]) : e : "font" === e.type ? t(e.body) : e
          }, h = function (t) {
            if (!t) throw new Error("Expected non-null, but got " + String(t));
            return t
          }, m = {
            contains: function (t, e) {
              return -1 !== t.indexOf(e)
            }, deflt: function (t, e) {
              return void 0 === t ? e : t
            }, escape: function (t) {
              return String(t).replace(c, function (t) {
                return u[t]
              })
            }, hyphenate: function (t) {
              return t.replace(s, "-$1").toLowerCase()
            }, getBaseElem: l, isCharacterBox: function (t) {
              var e = l(t);
              return "mathord" === e.type || "textord" === e.type || "atom" === e.type
            }
          }, f = function () {
            function t(t) {
              this.displayMode = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.allowedProtocols = void 0, t = t || {}, this.displayMode = m.deflt(t.displayMode, !1), this.throwOnError = m.deflt(t.throwOnError, !0), this.errorColor = m.deflt(t.errorColor, "#cc0000"), this.macros = t.macros || {}, this.colorIsTextColor = m.deflt(t.colorIsTextColor, !1), this.strict = m.deflt(t.strict, "warn"), this.maxSize = Math.max(0, m.deflt(t.maxSize, 1 / 0)), this.maxExpand = Math.max(0, m.deflt(t.maxExpand, 1e3)), this.allowedProtocols = m.deflt(t.allowedProtocols, ["http", "https", "mailto", "_relative"])
            }

            var e = t.prototype;
            return e.reportNonstrict = function (t, e, r) {
              var n = this.strict;
              if ("function" == typeof n && (n = n(t, e, r)), n && "ignore" !== n) {
                if (!0 === n || "error" === n) throw new a("LaTeX-incompatible input and strict mode is set to 'error': " + e + " [" + t + "]", r);
                "warn" === n ? "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + e + " [" + t + "]") : "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + e + " [" + t + "]")
              }
            }, e.useStrictBehavior = function (t, e, r) {
              var n = this.strict;
              if ("function" == typeof n) try {
                n = n(t, e, r)
              } catch (t) {
                n = "error"
              }
              return !(!n || "ignore" === n) && (!0 === n || "error" === n || ("warn" === n ? ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + e + " [" + t + "]"), !1) : ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + e + " [" + t + "]"), !1)))
            }, t
          }(), p = function () {
            function t(t, e, r) {
              this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = t, this.size = e, this.cramped = r
            }

            var e = t.prototype;
            return e.sup = function () {
              return d[g[this.id]]
            }, e.sub = function () {
              return d[v[this.id]]
            }, e.fracNum = function () {
              return d[y[this.id]]
            }, e.fracDen = function () {
              return d[b[this.id]]
            }, e.cramp = function () {
              return d[_[this.id]]
            }, e.text = function () {
              return d[x[this.id]]
            }, e.isTight = function () {
              return this.size >= 2
            }, t
          }(),
          d = [new p(0, 0, !1), new p(1, 0, !0), new p(2, 1, !1), new p(3, 1, !0), new p(4, 2, !1), new p(5, 2, !0), new p(6, 3, !1), new p(7, 3, !0)],
          g = [4, 5, 4, 5, 6, 7, 6, 7], v = [5, 5, 5, 5, 7, 7, 7, 7], y = [2, 3, 4, 5, 6, 7, 6, 7],
          b = [3, 3, 5, 5, 7, 7, 7, 7], _ = [1, 1, 3, 3, 5, 5, 7, 7], x = [0, 1, 2, 3, 2, 3, 2, 3],
          w = {DISPLAY: d[0], TEXT: d[2], SCRIPT: d[4], SCRIPTSCRIPT: d[6]},
          S = [{name: "latin", blocks: [[256, 591], [768, 879]]}, {
            name: "cyrillic",
            blocks: [[1024, 1279]]
          }, {name: "brahmic", blocks: [[2304, 4255]]}, {name: "georgian", blocks: [[4256, 4351]]}, {
            name: "cjk",
            blocks: [[12288, 12543], [19968, 40879], [65280, 65376]]
          }, {name: "hangul", blocks: [[44032, 55215]]}];
        var k = [];

        function T(t) {
          for (var e = 0; e < k.length; e += 2) if (t >= k[e] && t <= k[e + 1]) return !0;
          return !1
        }

        S.forEach(function (t) {
          return t.blocks.forEach(function (t) {
            return k.push.apply(k, t)
          })
        });
        var M = {
          path: {
            sqrtMain: "M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\ns-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\ns-65,47,-65,47z M834 80H400000v40H845z",
            sqrtSize1: "M263,681c0.7,0,18,39.7,52,119c34,79.3,68.167,\n158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120c340,-704.7,510.7,-1060.3,512,-1067\nc4.7,-7.3,11,-11,19,-11H40000v40H1012.3s-271.3,567,-271.3,567c-38.7,80.7,-84,\n175,-136,283c-52,108,-89.167,185.3,-111.5,232c-22.3,46.7,-33.8,70.3,-34.5,71\nc-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1s-109,-253,-109,-253c-72.7,-168,-109.3,\n-252,-110,-252c-10.7,8,-22,16.7,-34,26c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26\ns76,-59,76,-59s76,-60,76,-60z M1001 80H40000v40H1012z",
            sqrtSize2: "M1001,80H400000v40H1013.1s-83.4,268,-264.1,840c-180.7,\n572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,\n-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744c-10,12,-21,25,-33,39s-32,39,-32,39\nc-6,-5.3,-15,-14,-27,-26s25,-30,25,-30c26.7,-32.7,52,-63,76,-91s52,-60,52,-60\ns208,722,208,722c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,\n-658.5c53.7,-170.3,84.5,-266.8,92.5,-289.5c4,-6.7,10,-10,18,-10z\nM1001 80H400000v40H1013z",
            sqrtSize3: "M424,2478c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,\n-342,-109.8,-513.3,-110.5,-514c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,\n25c-5.7,9.3,-9.8,16,-12.5,20s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,\n-13s76,-122,76,-122s77,-121,77,-121s209,968,209,968c0,-2,84.7,-361.7,254,-1079\nc169.3,-717.3,254.7,-1077.7,256,-1081c4,-6.7,10,-10,18,-10H400000v40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80H400000v40H1014z",
            sqrtSize4: "M473,2793c339.3,-1799.3,509.3,-2700,510,-2702\nc3.3,-7.3,9.3,-11,18,-11H400000v40H1017.7s-90.5,478,-276.2,1466c-185.7,988,\n-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,\n-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200c0,-1.3,-5.3,8.7,-16,30c-10.7,\n21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26s76,-153,76,-153s77,-151,\n77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,606z\nM1001 80H400000v40H1017z",
            doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
            doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
            leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
            leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
            leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
            leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
            leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
            leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
            leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
            leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
            leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
            lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
            leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
            leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
            leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
            longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
            midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
            midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
            oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
            oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
            oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
            oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
            rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
            rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
            rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
            rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
            rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
            rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
            rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
            rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
            rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
            righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
            rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
            rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
            twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
            twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
            tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
            tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
            tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
            tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
            vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
            widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
            widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
            widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
            widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
            widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
            widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
            widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
            widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
            baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 241v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
            rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
            baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
            rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
            shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
            shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
          }
        }, A = function () {
          function t(t) {
            this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = t, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}
          }

          var e = t.prototype;
          return e.hasClass = function (t) {
            return m.contains(this.classes, t)
          }, e.toNode = function () {
            for (var t = document.createDocumentFragment(), e = 0; e < this.children.length; e++) t.appendChild(this.children[e].toNode());
            return t
          }, e.toMarkup = function () {
            for (var t = "", e = 0; e < this.children.length; e++) t += this.children[e].toMarkup();
            return t
          }, e.toText = function () {
            var t = function (t) {
              return t.toText()
            };
            return this.children.map(t).join("")
          }, t
        }(), C = function (t) {
          return t.filter(function (t) {
            return t
          }).join(" ")
        }, P = function (t, e, r) {
          if (this.classes = t || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, e) {
            e.style.isTight() && this.classes.push("mtight");
            var n = e.getColor();
            n && (this.style.color = n)
          }
        }, O = function (t) {
          var e = document.createElement(t);
          for (var r in e.className = C(this.classes), this.style) this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
          for (var n in this.attributes) this.attributes.hasOwnProperty(n) && e.setAttribute(n, this.attributes[n]);
          for (var o = 0; o < this.children.length; o++) e.appendChild(this.children[o].toNode());
          return e
        }, E = function (t) {
          var e = "<" + t;
          this.classes.length && (e += ' class="' + m.escape(C(this.classes)) + '"');
          var r = "";
          for (var n in this.style) this.style.hasOwnProperty(n) && (r += m.hyphenate(n) + ":" + this.style[n] + ";");
          for (var o in r && (e += ' style="' + m.escape(r) + '"'), this.attributes) this.attributes.hasOwnProperty(o) && (e += " " + o + '="' + m.escape(this.attributes[o]) + '"');
          e += ">";
          for (var i = 0; i < this.children.length; i++) e += this.children[i].toMarkup();
          return e += "</" + t + ">"
        }, z = function () {
          function t(t, e, r, n) {
            this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, P.call(this, t, r, n), this.children = e || []
          }

          var e = t.prototype;
          return e.setAttribute = function (t, e) {
            this.attributes[t] = e
          }, e.hasClass = function (t) {
            return m.contains(this.classes, t)
          }, e.toNode = function () {
            return O.call(this, "span")
          }, e.toMarkup = function () {
            return E.call(this, "span")
          }, t
        }(), I = function () {
          function t(t, e, r, n) {
            this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, P.call(this, e, n), this.children = r || [], this.setAttribute("href", t)
          }

          var e = t.prototype;
          return e.setAttribute = function (t, e) {
            this.attributes[t] = e
          }, e.hasClass = function (t) {
            return m.contains(this.classes, t)
          }, e.toNode = function () {
            return O.call(this, "a")
          }, e.toMarkup = function () {
            return E.call(this, "a")
          }, t
        }(), N = {"î": "ı̂", "ï": "ı̈", "í": "ı́", "ì": "ı̀"}, D = function () {
          function t(t, e, r, n, o, i, a, s) {
            this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = t, this.height = e || 0, this.depth = r || 0, this.italic = n || 0, this.skew = o || 0, this.width = i || 0, this.classes = a || [], this.style = s || {}, this.maxFontSize = 0;
            var u = function (t) {
              for (var e = 0; e < S.length; e++) for (var r = S[e], n = 0; n < r.blocks.length; n++) {
                var o = r.blocks[n];
                if (t >= o[0] && t <= o[1]) return r.name
              }
              return null
            }(this.text.charCodeAt(0));
            u && this.classes.push(u + "_fallback"), /[îïíì]/.test(this.text) && (this.text = N[this.text])
          }

          var e = t.prototype;
          return e.hasClass = function (t) {
            return m.contains(this.classes, t)
          }, e.toNode = function () {
            var t = document.createTextNode(this.text), e = null;
            for (var r in this.italic > 0 && ((e = document.createElement("span")).style.marginRight = this.italic + "em"), this.classes.length > 0 && ((e = e || document.createElement("span")).className = C(this.classes)), this.style) this.style.hasOwnProperty(r) && ((e = e || document.createElement("span")).style[r] = this.style[r]);
            return e ? (e.appendChild(t), e) : t
          }, e.toMarkup = function () {
            var t = !1, e = "<span";
            this.classes.length && (t = !0, e += ' class="', e += m.escape(C(this.classes)), e += '"');
            var r = "";
            for (var n in this.italic > 0 && (r += "margin-right:" + this.italic + "em;"), this.style) this.style.hasOwnProperty(n) && (r += m.hyphenate(n) + ":" + this.style[n] + ";");
            r && (t = !0, e += ' style="' + m.escape(r) + '"');
            var o = m.escape(this.text);
            return t ? (e += ">", e += o, e += "</span>") : o
          }, t
        }(), L = function () {
          function t(t, e) {
            this.children = void 0, this.attributes = void 0, this.children = t || [], this.attributes = e || {}
          }

          var e = t.prototype;
          return e.toNode = function () {
            var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            for (var e in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
            for (var r = 0; r < this.children.length; r++) t.appendChild(this.children[r].toNode());
            return t
          }, e.toMarkup = function () {
            var t = "<svg";
            for (var e in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + "='" + this.attributes[e] + "'");
            t += ">";
            for (var r = 0; r < this.children.length; r++) t += this.children[r].toMarkup();
            return t += "</svg>"
          }, t
        }(), R = function () {
          function t(t, e) {
            this.pathName = void 0, this.alternate = void 0, this.pathName = t, this.alternate = e
          }

          var e = t.prototype;
          return e.toNode = function () {
            var t = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", M.path[this.pathName]), t
          }, e.toMarkup = function () {
            return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + M.path[this.pathName] + "'/>"
          }, t
        }(), F = function () {
          function t(t) {
            this.attributes = void 0, this.attributes = t || {}
          }

          var e = t.prototype;
          return e.toNode = function () {
            var t = document.createElementNS("http://www.w3.org/2000/svg", "line");
            for (var e in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
            return t
          }, e.toMarkup = function () {
            var t = "<line";
            for (var e in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + "='" + this.attributes[e] + "'");
            return t += "/>"
          }, t
        }();
        var B = {
          "AMS-Regular": {
            65: [0, .68889, 0, 0, .72222],
            66: [0, .68889, 0, 0, .66667],
            67: [0, .68889, 0, 0, .72222],
            68: [0, .68889, 0, 0, .72222],
            69: [0, .68889, 0, 0, .66667],
            70: [0, .68889, 0, 0, .61111],
            71: [0, .68889, 0, 0, .77778],
            72: [0, .68889, 0, 0, .77778],
            73: [0, .68889, 0, 0, .38889],
            74: [.16667, .68889, 0, 0, .5],
            75: [0, .68889, 0, 0, .77778],
            76: [0, .68889, 0, 0, .66667],
            77: [0, .68889, 0, 0, .94445],
            78: [0, .68889, 0, 0, .72222],
            79: [.16667, .68889, 0, 0, .77778],
            80: [0, .68889, 0, 0, .61111],
            81: [.16667, .68889, 0, 0, .77778],
            82: [0, .68889, 0, 0, .72222],
            83: [0, .68889, 0, 0, .55556],
            84: [0, .68889, 0, 0, .66667],
            85: [0, .68889, 0, 0, .72222],
            86: [0, .68889, 0, 0, .72222],
            87: [0, .68889, 0, 0, 1],
            88: [0, .68889, 0, 0, .72222],
            89: [0, .68889, 0, 0, .72222],
            90: [0, .68889, 0, 0, .66667],
            107: [0, .68889, 0, 0, .55556],
            165: [0, .675, .025, 0, .75],
            174: [.15559, .69224, 0, 0, .94666],
            240: [0, .68889, 0, 0, .55556],
            295: [0, .68889, 0, 0, .54028],
            710: [0, .825, 0, 0, 2.33334],
            732: [0, .9, 0, 0, 2.33334],
            770: [0, .825, 0, 0, 2.33334],
            771: [0, .9, 0, 0, 2.33334],
            989: [.08167, .58167, 0, 0, .77778],
            1008: [0, .43056, .04028, 0, .66667],
            8245: [0, .54986, 0, 0, .275],
            8463: [0, .68889, 0, 0, .54028],
            8487: [0, .68889, 0, 0, .72222],
            8498: [0, .68889, 0, 0, .55556],
            8502: [0, .68889, 0, 0, .66667],
            8503: [0, .68889, 0, 0, .44445],
            8504: [0, .68889, 0, 0, .66667],
            8513: [0, .68889, 0, 0, .63889],
            8592: [-.03598, .46402, 0, 0, .5],
            8594: [-.03598, .46402, 0, 0, .5],
            8602: [-.13313, .36687, 0, 0, 1],
            8603: [-.13313, .36687, 0, 0, 1],
            8606: [.01354, .52239, 0, 0, 1],
            8608: [.01354, .52239, 0, 0, 1],
            8610: [.01354, .52239, 0, 0, 1.11111],
            8611: [.01354, .52239, 0, 0, 1.11111],
            8619: [0, .54986, 0, 0, 1],
            8620: [0, .54986, 0, 0, 1],
            8621: [-.13313, .37788, 0, 0, 1.38889],
            8622: [-.13313, .36687, 0, 0, 1],
            8624: [0, .69224, 0, 0, .5],
            8625: [0, .69224, 0, 0, .5],
            8630: [0, .43056, 0, 0, 1],
            8631: [0, .43056, 0, 0, 1],
            8634: [.08198, .58198, 0, 0, .77778],
            8635: [.08198, .58198, 0, 0, .77778],
            8638: [.19444, .69224, 0, 0, .41667],
            8639: [.19444, .69224, 0, 0, .41667],
            8642: [.19444, .69224, 0, 0, .41667],
            8643: [.19444, .69224, 0, 0, .41667],
            8644: [.1808, .675, 0, 0, 1],
            8646: [.1808, .675, 0, 0, 1],
            8647: [.1808, .675, 0, 0, 1],
            8648: [.19444, .69224, 0, 0, .83334],
            8649: [.1808, .675, 0, 0, 1],
            8650: [.19444, .69224, 0, 0, .83334],
            8651: [.01354, .52239, 0, 0, 1],
            8652: [.01354, .52239, 0, 0, 1],
            8653: [-.13313, .36687, 0, 0, 1],
            8654: [-.13313, .36687, 0, 0, 1],
            8655: [-.13313, .36687, 0, 0, 1],
            8666: [.13667, .63667, 0, 0, 1],
            8667: [.13667, .63667, 0, 0, 1],
            8669: [-.13313, .37788, 0, 0, 1],
            8672: [-.064, .437, 0, 0, 1.334],
            8674: [-.064, .437, 0, 0, 1.334],
            8705: [0, .825, 0, 0, .5],
            8708: [0, .68889, 0, 0, .55556],
            8709: [.08167, .58167, 0, 0, .77778],
            8717: [0, .43056, 0, 0, .42917],
            8722: [-.03598, .46402, 0, 0, .5],
            8724: [.08198, .69224, 0, 0, .77778],
            8726: [.08167, .58167, 0, 0, .77778],
            8733: [0, .69224, 0, 0, .77778],
            8736: [0, .69224, 0, 0, .72222],
            8737: [0, .69224, 0, 0, .72222],
            8738: [.03517, .52239, 0, 0, .72222],
            8739: [.08167, .58167, 0, 0, .22222],
            8740: [.25142, .74111, 0, 0, .27778],
            8741: [.08167, .58167, 0, 0, .38889],
            8742: [.25142, .74111, 0, 0, .5],
            8756: [0, .69224, 0, 0, .66667],
            8757: [0, .69224, 0, 0, .66667],
            8764: [-.13313, .36687, 0, 0, .77778],
            8765: [-.13313, .37788, 0, 0, .77778],
            8769: [-.13313, .36687, 0, 0, .77778],
            8770: [-.03625, .46375, 0, 0, .77778],
            8774: [.30274, .79383, 0, 0, .77778],
            8776: [-.01688, .48312, 0, 0, .77778],
            8778: [.08167, .58167, 0, 0, .77778],
            8782: [.06062, .54986, 0, 0, .77778],
            8783: [.06062, .54986, 0, 0, .77778],
            8785: [.08198, .58198, 0, 0, .77778],
            8786: [.08198, .58198, 0, 0, .77778],
            8787: [.08198, .58198, 0, 0, .77778],
            8790: [0, .69224, 0, 0, .77778],
            8791: [.22958, .72958, 0, 0, .77778],
            8796: [.08198, .91667, 0, 0, .77778],
            8806: [.25583, .75583, 0, 0, .77778],
            8807: [.25583, .75583, 0, 0, .77778],
            8808: [.25142, .75726, 0, 0, .77778],
            8809: [.25142, .75726, 0, 0, .77778],
            8812: [.25583, .75583, 0, 0, .5],
            8814: [.20576, .70576, 0, 0, .77778],
            8815: [.20576, .70576, 0, 0, .77778],
            8816: [.30274, .79383, 0, 0, .77778],
            8817: [.30274, .79383, 0, 0, .77778],
            8818: [.22958, .72958, 0, 0, .77778],
            8819: [.22958, .72958, 0, 0, .77778],
            8822: [.1808, .675, 0, 0, .77778],
            8823: [.1808, .675, 0, 0, .77778],
            8828: [.13667, .63667, 0, 0, .77778],
            8829: [.13667, .63667, 0, 0, .77778],
            8830: [.22958, .72958, 0, 0, .77778],
            8831: [.22958, .72958, 0, 0, .77778],
            8832: [.20576, .70576, 0, 0, .77778],
            8833: [.20576, .70576, 0, 0, .77778],
            8840: [.30274, .79383, 0, 0, .77778],
            8841: [.30274, .79383, 0, 0, .77778],
            8842: [.13597, .63597, 0, 0, .77778],
            8843: [.13597, .63597, 0, 0, .77778],
            8847: [.03517, .54986, 0, 0, .77778],
            8848: [.03517, .54986, 0, 0, .77778],
            8858: [.08198, .58198, 0, 0, .77778],
            8859: [.08198, .58198, 0, 0, .77778],
            8861: [.08198, .58198, 0, 0, .77778],
            8862: [0, .675, 0, 0, .77778],
            8863: [0, .675, 0, 0, .77778],
            8864: [0, .675, 0, 0, .77778],
            8865: [0, .675, 0, 0, .77778],
            8872: [0, .69224, 0, 0, .61111],
            8873: [0, .69224, 0, 0, .72222],
            8874: [0, .69224, 0, 0, .88889],
            8876: [0, .68889, 0, 0, .61111],
            8877: [0, .68889, 0, 0, .61111],
            8878: [0, .68889, 0, 0, .72222],
            8879: [0, .68889, 0, 0, .72222],
            8882: [.03517, .54986, 0, 0, .77778],
            8883: [.03517, .54986, 0, 0, .77778],
            8884: [.13667, .63667, 0, 0, .77778],
            8885: [.13667, .63667, 0, 0, .77778],
            8888: [0, .54986, 0, 0, 1.11111],
            8890: [.19444, .43056, 0, 0, .55556],
            8891: [.19444, .69224, 0, 0, .61111],
            8892: [.19444, .69224, 0, 0, .61111],
            8901: [0, .54986, 0, 0, .27778],
            8903: [.08167, .58167, 0, 0, .77778],
            8905: [.08167, .58167, 0, 0, .77778],
            8906: [.08167, .58167, 0, 0, .77778],
            8907: [0, .69224, 0, 0, .77778],
            8908: [0, .69224, 0, 0, .77778],
            8909: [-.03598, .46402, 0, 0, .77778],
            8910: [0, .54986, 0, 0, .76042],
            8911: [0, .54986, 0, 0, .76042],
            8912: [.03517, .54986, 0, 0, .77778],
            8913: [.03517, .54986, 0, 0, .77778],
            8914: [0, .54986, 0, 0, .66667],
            8915: [0, .54986, 0, 0, .66667],
            8916: [0, .69224, 0, 0, .66667],
            8918: [.0391, .5391, 0, 0, .77778],
            8919: [.0391, .5391, 0, 0, .77778],
            8920: [.03517, .54986, 0, 0, 1.33334],
            8921: [.03517, .54986, 0, 0, 1.33334],
            8922: [.38569, .88569, 0, 0, .77778],
            8923: [.38569, .88569, 0, 0, .77778],
            8926: [.13667, .63667, 0, 0, .77778],
            8927: [.13667, .63667, 0, 0, .77778],
            8928: [.30274, .79383, 0, 0, .77778],
            8929: [.30274, .79383, 0, 0, .77778],
            8934: [.23222, .74111, 0, 0, .77778],
            8935: [.23222, .74111, 0, 0, .77778],
            8936: [.23222, .74111, 0, 0, .77778],
            8937: [.23222, .74111, 0, 0, .77778],
            8938: [.20576, .70576, 0, 0, .77778],
            8939: [.20576, .70576, 0, 0, .77778],
            8940: [.30274, .79383, 0, 0, .77778],
            8941: [.30274, .79383, 0, 0, .77778],
            8994: [.19444, .69224, 0, 0, .77778],
            8995: [.19444, .69224, 0, 0, .77778],
            9416: [.15559, .69224, 0, 0, .90222],
            9484: [0, .69224, 0, 0, .5],
            9488: [0, .69224, 0, 0, .5],
            9492: [0, .37788, 0, 0, .5],
            9496: [0, .37788, 0, 0, .5],
            9585: [.19444, .68889, 0, 0, .88889],
            9586: [.19444, .74111, 0, 0, .88889],
            9632: [0, .675, 0, 0, .77778],
            9633: [0, .675, 0, 0, .77778],
            9650: [0, .54986, 0, 0, .72222],
            9651: [0, .54986, 0, 0, .72222],
            9654: [.03517, .54986, 0, 0, .77778],
            9660: [0, .54986, 0, 0, .72222],
            9661: [0, .54986, 0, 0, .72222],
            9664: [.03517, .54986, 0, 0, .77778],
            9674: [.11111, .69224, 0, 0, .66667],
            9733: [.19444, .69224, 0, 0, .94445],
            10003: [0, .69224, 0, 0, .83334],
            10016: [0, .69224, 0, 0, .83334],
            10731: [.11111, .69224, 0, 0, .66667],
            10846: [.19444, .75583, 0, 0, .61111],
            10877: [.13667, .63667, 0, 0, .77778],
            10878: [.13667, .63667, 0, 0, .77778],
            10885: [.25583, .75583, 0, 0, .77778],
            10886: [.25583, .75583, 0, 0, .77778],
            10887: [.13597, .63597, 0, 0, .77778],
            10888: [.13597, .63597, 0, 0, .77778],
            10889: [.26167, .75726, 0, 0, .77778],
            10890: [.26167, .75726, 0, 0, .77778],
            10891: [.48256, .98256, 0, 0, .77778],
            10892: [.48256, .98256, 0, 0, .77778],
            10901: [.13667, .63667, 0, 0, .77778],
            10902: [.13667, .63667, 0, 0, .77778],
            10933: [.25142, .75726, 0, 0, .77778],
            10934: [.25142, .75726, 0, 0, .77778],
            10935: [.26167, .75726, 0, 0, .77778],
            10936: [.26167, .75726, 0, 0, .77778],
            10937: [.26167, .75726, 0, 0, .77778],
            10938: [.26167, .75726, 0, 0, .77778],
            10949: [.25583, .75583, 0, 0, .77778],
            10950: [.25583, .75583, 0, 0, .77778],
            10955: [.28481, .79383, 0, 0, .77778],
            10956: [.28481, .79383, 0, 0, .77778],
            57350: [.08167, .58167, 0, 0, .22222],
            57351: [.08167, .58167, 0, 0, .38889],
            57352: [.08167, .58167, 0, 0, .77778],
            57353: [0, .43056, .04028, 0, .66667],
            57356: [.25142, .75726, 0, 0, .77778],
            57357: [.25142, .75726, 0, 0, .77778],
            57358: [.41951, .91951, 0, 0, .77778],
            57359: [.30274, .79383, 0, 0, .77778],
            57360: [.30274, .79383, 0, 0, .77778],
            57361: [.41951, .91951, 0, 0, .77778],
            57366: [.25142, .75726, 0, 0, .77778],
            57367: [.25142, .75726, 0, 0, .77778],
            57368: [.25142, .75726, 0, 0, .77778],
            57369: [.25142, .75726, 0, 0, .77778],
            57370: [.13597, .63597, 0, 0, .77778],
            57371: [.13597, .63597, 0, 0, .77778]
          },
          "Caligraphic-Regular": {
            48: [0, .43056, 0, 0, .5],
            49: [0, .43056, 0, 0, .5],
            50: [0, .43056, 0, 0, .5],
            51: [.19444, .43056, 0, 0, .5],
            52: [.19444, .43056, 0, 0, .5],
            53: [.19444, .43056, 0, 0, .5],
            54: [0, .64444, 0, 0, .5],
            55: [.19444, .43056, 0, 0, .5],
            56: [0, .64444, 0, 0, .5],
            57: [.19444, .43056, 0, 0, .5],
            65: [0, .68333, 0, .19445, .79847],
            66: [0, .68333, .03041, .13889, .65681],
            67: [0, .68333, .05834, .13889, .52653],
            68: [0, .68333, .02778, .08334, .77139],
            69: [0, .68333, .08944, .11111, .52778],
            70: [0, .68333, .09931, .11111, .71875],
            71: [.09722, .68333, .0593, .11111, .59487],
            72: [0, .68333, .00965, .11111, .84452],
            73: [0, .68333, .07382, 0, .54452],
            74: [.09722, .68333, .18472, .16667, .67778],
            75: [0, .68333, .01445, .05556, .76195],
            76: [0, .68333, 0, .13889, .68972],
            77: [0, .68333, 0, .13889, 1.2009],
            78: [0, .68333, .14736, .08334, .82049],
            79: [0, .68333, .02778, .11111, .79611],
            80: [0, .68333, .08222, .08334, .69556],
            81: [.09722, .68333, 0, .11111, .81667],
            82: [0, .68333, 0, .08334, .8475],
            83: [0, .68333, .075, .13889, .60556],
            84: [0, .68333, .25417, 0, .54464],
            85: [0, .68333, .09931, .08334, .62583],
            86: [0, .68333, .08222, 0, .61278],
            87: [0, .68333, .08222, .08334, .98778],
            88: [0, .68333, .14643, .13889, .7133],
            89: [.09722, .68333, .08222, .08334, .66834],
            90: [0, .68333, .07944, .13889, .72473]
          },
          "Fraktur-Regular": {
            33: [0, .69141, 0, 0, .29574],
            34: [0, .69141, 0, 0, .21471],
            38: [0, .69141, 0, 0, .73786],
            39: [0, .69141, 0, 0, .21201],
            40: [.24982, .74947, 0, 0, .38865],
            41: [.24982, .74947, 0, 0, .38865],
            42: [0, .62119, 0, 0, .27764],
            43: [.08319, .58283, 0, 0, .75623],
            44: [0, .10803, 0, 0, .27764],
            45: [.08319, .58283, 0, 0, .75623],
            46: [0, .10803, 0, 0, .27764],
            47: [.24982, .74947, 0, 0, .50181],
            48: [0, .47534, 0, 0, .50181],
            49: [0, .47534, 0, 0, .50181],
            50: [0, .47534, 0, 0, .50181],
            51: [.18906, .47534, 0, 0, .50181],
            52: [.18906, .47534, 0, 0, .50181],
            53: [.18906, .47534, 0, 0, .50181],
            54: [0, .69141, 0, 0, .50181],
            55: [.18906, .47534, 0, 0, .50181],
            56: [0, .69141, 0, 0, .50181],
            57: [.18906, .47534, 0, 0, .50181],
            58: [0, .47534, 0, 0, .21606],
            59: [.12604, .47534, 0, 0, .21606],
            61: [-.13099, .36866, 0, 0, .75623],
            63: [0, .69141, 0, 0, .36245],
            65: [0, .69141, 0, 0, .7176],
            66: [0, .69141, 0, 0, .88397],
            67: [0, .69141, 0, 0, .61254],
            68: [0, .69141, 0, 0, .83158],
            69: [0, .69141, 0, 0, .66278],
            70: [.12604, .69141, 0, 0, .61119],
            71: [0, .69141, 0, 0, .78539],
            72: [.06302, .69141, 0, 0, .7203],
            73: [0, .69141, 0, 0, .55448],
            74: [.12604, .69141, 0, 0, .55231],
            75: [0, .69141, 0, 0, .66845],
            76: [0, .69141, 0, 0, .66602],
            77: [0, .69141, 0, 0, 1.04953],
            78: [0, .69141, 0, 0, .83212],
            79: [0, .69141, 0, 0, .82699],
            80: [.18906, .69141, 0, 0, .82753],
            81: [.03781, .69141, 0, 0, .82699],
            82: [0, .69141, 0, 0, .82807],
            83: [0, .69141, 0, 0, .82861],
            84: [0, .69141, 0, 0, .66899],
            85: [0, .69141, 0, 0, .64576],
            86: [0, .69141, 0, 0, .83131],
            87: [0, .69141, 0, 0, 1.04602],
            88: [0, .69141, 0, 0, .71922],
            89: [.18906, .69141, 0, 0, .83293],
            90: [.12604, .69141, 0, 0, .60201],
            91: [.24982, .74947, 0, 0, .27764],
            93: [.24982, .74947, 0, 0, .27764],
            94: [0, .69141, 0, 0, .49965],
            97: [0, .47534, 0, 0, .50046],
            98: [0, .69141, 0, 0, .51315],
            99: [0, .47534, 0, 0, .38946],
            100: [0, .62119, 0, 0, .49857],
            101: [0, .47534, 0, 0, .40053],
            102: [.18906, .69141, 0, 0, .32626],
            103: [.18906, .47534, 0, 0, .5037],
            104: [.18906, .69141, 0, 0, .52126],
            105: [0, .69141, 0, 0, .27899],
            106: [0, .69141, 0, 0, .28088],
            107: [0, .69141, 0, 0, .38946],
            108: [0, .69141, 0, 0, .27953],
            109: [0, .47534, 0, 0, .76676],
            110: [0, .47534, 0, 0, .52666],
            111: [0, .47534, 0, 0, .48885],
            112: [.18906, .52396, 0, 0, .50046],
            113: [.18906, .47534, 0, 0, .48912],
            114: [0, .47534, 0, 0, .38919],
            115: [0, .47534, 0, 0, .44266],
            116: [0, .62119, 0, 0, .33301],
            117: [0, .47534, 0, 0, .5172],
            118: [0, .52396, 0, 0, .5118],
            119: [0, .52396, 0, 0, .77351],
            120: [.18906, .47534, 0, 0, .38865],
            121: [.18906, .47534, 0, 0, .49884],
            122: [.18906, .47534, 0, 0, .39054],
            8216: [0, .69141, 0, 0, .21471],
            8217: [0, .69141, 0, 0, .21471],
            58112: [0, .62119, 0, 0, .49749],
            58113: [0, .62119, 0, 0, .4983],
            58114: [.18906, .69141, 0, 0, .33328],
            58115: [.18906, .69141, 0, 0, .32923],
            58116: [.18906, .47534, 0, 0, .50343],
            58117: [0, .69141, 0, 0, .33301],
            58118: [0, .62119, 0, 0, .33409],
            58119: [0, .47534, 0, 0, .50073]
          },
          "Main-Bold": {
            33: [0, .69444, 0, 0, .35],
            34: [0, .69444, 0, 0, .60278],
            35: [.19444, .69444, 0, 0, .95833],
            36: [.05556, .75, 0, 0, .575],
            37: [.05556, .75, 0, 0, .95833],
            38: [0, .69444, 0, 0, .89444],
            39: [0, .69444, 0, 0, .31944],
            40: [.25, .75, 0, 0, .44722],
            41: [.25, .75, 0, 0, .44722],
            42: [0, .75, 0, 0, .575],
            43: [.13333, .63333, 0, 0, .89444],
            44: [.19444, .15556, 0, 0, .31944],
            45: [0, .44444, 0, 0, .38333],
            46: [0, .15556, 0, 0, .31944],
            47: [.25, .75, 0, 0, .575],
            48: [0, .64444, 0, 0, .575],
            49: [0, .64444, 0, 0, .575],
            50: [0, .64444, 0, 0, .575],
            51: [0, .64444, 0, 0, .575],
            52: [0, .64444, 0, 0, .575],
            53: [0, .64444, 0, 0, .575],
            54: [0, .64444, 0, 0, .575],
            55: [0, .64444, 0, 0, .575],
            56: [0, .64444, 0, 0, .575],
            57: [0, .64444, 0, 0, .575],
            58: [0, .44444, 0, 0, .31944],
            59: [.19444, .44444, 0, 0, .31944],
            60: [.08556, .58556, 0, 0, .89444],
            61: [-.10889, .39111, 0, 0, .89444],
            62: [.08556, .58556, 0, 0, .89444],
            63: [0, .69444, 0, 0, .54305],
            64: [0, .69444, 0, 0, .89444],
            65: [0, .68611, 0, 0, .86944],
            66: [0, .68611, 0, 0, .81805],
            67: [0, .68611, 0, 0, .83055],
            68: [0, .68611, 0, 0, .88194],
            69: [0, .68611, 0, 0, .75555],
            70: [0, .68611, 0, 0, .72361],
            71: [0, .68611, 0, 0, .90416],
            72: [0, .68611, 0, 0, .9],
            73: [0, .68611, 0, 0, .43611],
            74: [0, .68611, 0, 0, .59444],
            75: [0, .68611, 0, 0, .90138],
            76: [0, .68611, 0, 0, .69166],
            77: [0, .68611, 0, 0, 1.09166],
            78: [0, .68611, 0, 0, .9],
            79: [0, .68611, 0, 0, .86388],
            80: [0, .68611, 0, 0, .78611],
            81: [.19444, .68611, 0, 0, .86388],
            82: [0, .68611, 0, 0, .8625],
            83: [0, .68611, 0, 0, .63889],
            84: [0, .68611, 0, 0, .8],
            85: [0, .68611, 0, 0, .88472],
            86: [0, .68611, .01597, 0, .86944],
            87: [0, .68611, .01597, 0, 1.18888],
            88: [0, .68611, 0, 0, .86944],
            89: [0, .68611, .02875, 0, .86944],
            90: [0, .68611, 0, 0, .70277],
            91: [.25, .75, 0, 0, .31944],
            92: [.25, .75, 0, 0, .575],
            93: [.25, .75, 0, 0, .31944],
            94: [0, .69444, 0, 0, .575],
            95: [.31, .13444, .03194, 0, .575],
            97: [0, .44444, 0, 0, .55902],
            98: [0, .69444, 0, 0, .63889],
            99: [0, .44444, 0, 0, .51111],
            100: [0, .69444, 0, 0, .63889],
            101: [0, .44444, 0, 0, .52708],
            102: [0, .69444, .10903, 0, .35139],
            103: [.19444, .44444, .01597, 0, .575],
            104: [0, .69444, 0, 0, .63889],
            105: [0, .69444, 0, 0, .31944],
            106: [.19444, .69444, 0, 0, .35139],
            107: [0, .69444, 0, 0, .60694],
            108: [0, .69444, 0, 0, .31944],
            109: [0, .44444, 0, 0, .95833],
            110: [0, .44444, 0, 0, .63889],
            111: [0, .44444, 0, 0, .575],
            112: [.19444, .44444, 0, 0, .63889],
            113: [.19444, .44444, 0, 0, .60694],
            114: [0, .44444, 0, 0, .47361],
            115: [0, .44444, 0, 0, .45361],
            116: [0, .63492, 0, 0, .44722],
            117: [0, .44444, 0, 0, .63889],
            118: [0, .44444, .01597, 0, .60694],
            119: [0, .44444, .01597, 0, .83055],
            120: [0, .44444, 0, 0, .60694],
            121: [.19444, .44444, .01597, 0, .60694],
            122: [0, .44444, 0, 0, .51111],
            123: [.25, .75, 0, 0, .575],
            124: [.25, .75, 0, 0, .31944],
            125: [.25, .75, 0, 0, .575],
            126: [.35, .34444, 0, 0, .575],
            168: [0, .69444, 0, 0, .575],
            172: [0, .44444, 0, 0, .76666],
            176: [0, .69444, 0, 0, .86944],
            177: [.13333, .63333, 0, 0, .89444],
            184: [.17014, 0, 0, 0, .51111],
            198: [0, .68611, 0, 0, 1.04166],
            215: [.13333, .63333, 0, 0, .89444],
            216: [.04861, .73472, 0, 0, .89444],
            223: [0, .69444, 0, 0, .59722],
            230: [0, .44444, 0, 0, .83055],
            247: [.13333, .63333, 0, 0, .89444],
            248: [.09722, .54167, 0, 0, .575],
            305: [0, .44444, 0, 0, .31944],
            338: [0, .68611, 0, 0, 1.16944],
            339: [0, .44444, 0, 0, .89444],
            567: [.19444, .44444, 0, 0, .35139],
            710: [0, .69444, 0, 0, .575],
            711: [0, .63194, 0, 0, .575],
            713: [0, .59611, 0, 0, .575],
            714: [0, .69444, 0, 0, .575],
            715: [0, .69444, 0, 0, .575],
            728: [0, .69444, 0, 0, .575],
            729: [0, .69444, 0, 0, .31944],
            730: [0, .69444, 0, 0, .86944],
            732: [0, .69444, 0, 0, .575],
            733: [0, .69444, 0, 0, .575],
            824: [.19444, .69444, 0, 0, 0],
            915: [0, .68611, 0, 0, .69166],
            916: [0, .68611, 0, 0, .95833],
            920: [0, .68611, 0, 0, .89444],
            923: [0, .68611, 0, 0, .80555],
            926: [0, .68611, 0, 0, .76666],
            928: [0, .68611, 0, 0, .9],
            931: [0, .68611, 0, 0, .83055],
            933: [0, .68611, 0, 0, .89444],
            934: [0, .68611, 0, 0, .83055],
            936: [0, .68611, 0, 0, .89444],
            937: [0, .68611, 0, 0, .83055],
            8211: [0, .44444, .03194, 0, .575],
            8212: [0, .44444, .03194, 0, 1.14999],
            8216: [0, .69444, 0, 0, .31944],
            8217: [0, .69444, 0, 0, .31944],
            8220: [0, .69444, 0, 0, .60278],
            8221: [0, .69444, 0, 0, .60278],
            8224: [.19444, .69444, 0, 0, .51111],
            8225: [.19444, .69444, 0, 0, .51111],
            8242: [0, .55556, 0, 0, .34444],
            8407: [0, .72444, .15486, 0, .575],
            8463: [0, .69444, 0, 0, .66759],
            8465: [0, .69444, 0, 0, .83055],
            8467: [0, .69444, 0, 0, .47361],
            8472: [.19444, .44444, 0, 0, .74027],
            8476: [0, .69444, 0, 0, .83055],
            8501: [0, .69444, 0, 0, .70277],
            8592: [-.10889, .39111, 0, 0, 1.14999],
            8593: [.19444, .69444, 0, 0, .575],
            8594: [-.10889, .39111, 0, 0, 1.14999],
            8595: [.19444, .69444, 0, 0, .575],
            8596: [-.10889, .39111, 0, 0, 1.14999],
            8597: [.25, .75, 0, 0, .575],
            8598: [.19444, .69444, 0, 0, 1.14999],
            8599: [.19444, .69444, 0, 0, 1.14999],
            8600: [.19444, .69444, 0, 0, 1.14999],
            8601: [.19444, .69444, 0, 0, 1.14999],
            8636: [-.10889, .39111, 0, 0, 1.14999],
            8637: [-.10889, .39111, 0, 0, 1.14999],
            8640: [-.10889, .39111, 0, 0, 1.14999],
            8641: [-.10889, .39111, 0, 0, 1.14999],
            8656: [-.10889, .39111, 0, 0, 1.14999],
            8657: [.19444, .69444, 0, 0, .70277],
            8658: [-.10889, .39111, 0, 0, 1.14999],
            8659: [.19444, .69444, 0, 0, .70277],
            8660: [-.10889, .39111, 0, 0, 1.14999],
            8661: [.25, .75, 0, 0, .70277],
            8704: [0, .69444, 0, 0, .63889],
            8706: [0, .69444, .06389, 0, .62847],
            8707: [0, .69444, 0, 0, .63889],
            8709: [.05556, .75, 0, 0, .575],
            8711: [0, .68611, 0, 0, .95833],
            8712: [.08556, .58556, 0, 0, .76666],
            8715: [.08556, .58556, 0, 0, .76666],
            8722: [.13333, .63333, 0, 0, .89444],
            8723: [.13333, .63333, 0, 0, .89444],
            8725: [.25, .75, 0, 0, .575],
            8726: [.25, .75, 0, 0, .575],
            8727: [-.02778, .47222, 0, 0, .575],
            8728: [-.02639, .47361, 0, 0, .575],
            8729: [-.02639, .47361, 0, 0, .575],
            8730: [.18, .82, 0, 0, .95833],
            8733: [0, .44444, 0, 0, .89444],
            8734: [0, .44444, 0, 0, 1.14999],
            8736: [0, .69224, 0, 0, .72222],
            8739: [.25, .75, 0, 0, .31944],
            8741: [.25, .75, 0, 0, .575],
            8743: [0, .55556, 0, 0, .76666],
            8744: [0, .55556, 0, 0, .76666],
            8745: [0, .55556, 0, 0, .76666],
            8746: [0, .55556, 0, 0, .76666],
            8747: [.19444, .69444, .12778, 0, .56875],
            8764: [-.10889, .39111, 0, 0, .89444],
            8768: [.19444, .69444, 0, 0, .31944],
            8771: [.00222, .50222, 0, 0, .89444],
            8776: [.02444, .52444, 0, 0, .89444],
            8781: [.00222, .50222, 0, 0, .89444],
            8801: [.00222, .50222, 0, 0, .89444],
            8804: [.19667, .69667, 0, 0, .89444],
            8805: [.19667, .69667, 0, 0, .89444],
            8810: [.08556, .58556, 0, 0, 1.14999],
            8811: [.08556, .58556, 0, 0, 1.14999],
            8826: [.08556, .58556, 0, 0, .89444],
            8827: [.08556, .58556, 0, 0, .89444],
            8834: [.08556, .58556, 0, 0, .89444],
            8835: [.08556, .58556, 0, 0, .89444],
            8838: [.19667, .69667, 0, 0, .89444],
            8839: [.19667, .69667, 0, 0, .89444],
            8846: [0, .55556, 0, 0, .76666],
            8849: [.19667, .69667, 0, 0, .89444],
            8850: [.19667, .69667, 0, 0, .89444],
            8851: [0, .55556, 0, 0, .76666],
            8852: [0, .55556, 0, 0, .76666],
            8853: [.13333, .63333, 0, 0, .89444],
            8854: [.13333, .63333, 0, 0, .89444],
            8855: [.13333, .63333, 0, 0, .89444],
            8856: [.13333, .63333, 0, 0, .89444],
            8857: [.13333, .63333, 0, 0, .89444],
            8866: [0, .69444, 0, 0, .70277],
            8867: [0, .69444, 0, 0, .70277],
            8868: [0, .69444, 0, 0, .89444],
            8869: [0, .69444, 0, 0, .89444],
            8900: [-.02639, .47361, 0, 0, .575],
            8901: [-.02639, .47361, 0, 0, .31944],
            8902: [-.02778, .47222, 0, 0, .575],
            8968: [.25, .75, 0, 0, .51111],
            8969: [.25, .75, 0, 0, .51111],
            8970: [.25, .75, 0, 0, .51111],
            8971: [.25, .75, 0, 0, .51111],
            8994: [-.13889, .36111, 0, 0, 1.14999],
            8995: [-.13889, .36111, 0, 0, 1.14999],
            9651: [.19444, .69444, 0, 0, 1.02222],
            9657: [-.02778, .47222, 0, 0, .575],
            9661: [.19444, .69444, 0, 0, 1.02222],
            9667: [-.02778, .47222, 0, 0, .575],
            9711: [.19444, .69444, 0, 0, 1.14999],
            9824: [.12963, .69444, 0, 0, .89444],
            9825: [.12963, .69444, 0, 0, .89444],
            9826: [.12963, .69444, 0, 0, .89444],
            9827: [.12963, .69444, 0, 0, .89444],
            9837: [0, .75, 0, 0, .44722],
            9838: [.19444, .69444, 0, 0, .44722],
            9839: [.19444, .69444, 0, 0, .44722],
            10216: [.25, .75, 0, 0, .44722],
            10217: [.25, .75, 0, 0, .44722],
            10815: [0, .68611, 0, 0, .9],
            10927: [.19667, .69667, 0, 0, .89444],
            10928: [.19667, .69667, 0, 0, .89444]
          },
          "Main-BoldItalic": {
            33: [0, .69444, .11417, 0, .38611],
            34: [0, .69444, .07939, 0, .62055],
            35: [.19444, .69444, .06833, 0, .94444],
            37: [.05556, .75, .12861, 0, .94444],
            38: [0, .69444, .08528, 0, .88555],
            39: [0, .69444, .12945, 0, .35555],
            40: [.25, .75, .15806, 0, .47333],
            41: [.25, .75, .03306, 0, .47333],
            42: [0, .75, .14333, 0, .59111],
            43: [.10333, .60333, .03306, 0, .88555],
            44: [.19444, .14722, 0, 0, .35555],
            45: [0, .44444, .02611, 0, .41444],
            46: [0, .14722, 0, 0, .35555],
            47: [.25, .75, .15806, 0, .59111],
            48: [0, .64444, .13167, 0, .59111],
            49: [0, .64444, .13167, 0, .59111],
            50: [0, .64444, .13167, 0, .59111],
            51: [0, .64444, .13167, 0, .59111],
            52: [.19444, .64444, .13167, 0, .59111],
            53: [0, .64444, .13167, 0, .59111],
            54: [0, .64444, .13167, 0, .59111],
            55: [.19444, .64444, .13167, 0, .59111],
            56: [0, .64444, .13167, 0, .59111],
            57: [0, .64444, .13167, 0, .59111],
            58: [0, .44444, .06695, 0, .35555],
            59: [.19444, .44444, .06695, 0, .35555],
            61: [-.10889, .39111, .06833, 0, .88555],
            63: [0, .69444, .11472, 0, .59111],
            64: [0, .69444, .09208, 0, .88555],
            65: [0, .68611, 0, 0, .86555],
            66: [0, .68611, .0992, 0, .81666],
            67: [0, .68611, .14208, 0, .82666],
            68: [0, .68611, .09062, 0, .87555],
            69: [0, .68611, .11431, 0, .75666],
            70: [0, .68611, .12903, 0, .72722],
            71: [0, .68611, .07347, 0, .89527],
            72: [0, .68611, .17208, 0, .8961],
            73: [0, .68611, .15681, 0, .47166],
            74: [0, .68611, .145, 0, .61055],
            75: [0, .68611, .14208, 0, .89499],
            76: [0, .68611, 0, 0, .69777],
            77: [0, .68611, .17208, 0, 1.07277],
            78: [0, .68611, .17208, 0, .8961],
            79: [0, .68611, .09062, 0, .85499],
            80: [0, .68611, .0992, 0, .78721],
            81: [.19444, .68611, .09062, 0, .85499],
            82: [0, .68611, .02559, 0, .85944],
            83: [0, .68611, .11264, 0, .64999],
            84: [0, .68611, .12903, 0, .7961],
            85: [0, .68611, .17208, 0, .88083],
            86: [0, .68611, .18625, 0, .86555],
            87: [0, .68611, .18625, 0, 1.15999],
            88: [0, .68611, .15681, 0, .86555],
            89: [0, .68611, .19803, 0, .86555],
            90: [0, .68611, .14208, 0, .70888],
            91: [.25, .75, .1875, 0, .35611],
            93: [.25, .75, .09972, 0, .35611],
            94: [0, .69444, .06709, 0, .59111],
            95: [.31, .13444, .09811, 0, .59111],
            97: [0, .44444, .09426, 0, .59111],
            98: [0, .69444, .07861, 0, .53222],
            99: [0, .44444, .05222, 0, .53222],
            100: [0, .69444, .10861, 0, .59111],
            101: [0, .44444, .085, 0, .53222],
            102: [.19444, .69444, .21778, 0, .4],
            103: [.19444, .44444, .105, 0, .53222],
            104: [0, .69444, .09426, 0, .59111],
            105: [0, .69326, .11387, 0, .35555],
            106: [.19444, .69326, .1672, 0, .35555],
            107: [0, .69444, .11111, 0, .53222],
            108: [0, .69444, .10861, 0, .29666],
            109: [0, .44444, .09426, 0, .94444],
            110: [0, .44444, .09426, 0, .64999],
            111: [0, .44444, .07861, 0, .59111],
            112: [.19444, .44444, .07861, 0, .59111],
            113: [.19444, .44444, .105, 0, .53222],
            114: [0, .44444, .11111, 0, .50167],
            115: [0, .44444, .08167, 0, .48694],
            116: [0, .63492, .09639, 0, .385],
            117: [0, .44444, .09426, 0, .62055],
            118: [0, .44444, .11111, 0, .53222],
            119: [0, .44444, .11111, 0, .76777],
            120: [0, .44444, .12583, 0, .56055],
            121: [.19444, .44444, .105, 0, .56166],
            122: [0, .44444, .13889, 0, .49055],
            126: [.35, .34444, .11472, 0, .59111],
            163: [0, .69444, 0, 0, .86853],
            168: [0, .69444, .11473, 0, .59111],
            176: [0, .69444, 0, 0, .94888],
            184: [.17014, 0, 0, 0, .53222],
            198: [0, .68611, .11431, 0, 1.02277],
            216: [.04861, .73472, .09062, 0, .88555],
            223: [.19444, .69444, .09736, 0, .665],
            230: [0, .44444, .085, 0, .82666],
            248: [.09722, .54167, .09458, 0, .59111],
            305: [0, .44444, .09426, 0, .35555],
            338: [0, .68611, .11431, 0, 1.14054],
            339: [0, .44444, .085, 0, .82666],
            567: [.19444, .44444, .04611, 0, .385],
            710: [0, .69444, .06709, 0, .59111],
            711: [0, .63194, .08271, 0, .59111],
            713: [0, .59444, .10444, 0, .59111],
            714: [0, .69444, .08528, 0, .59111],
            715: [0, .69444, 0, 0, .59111],
            728: [0, .69444, .10333, 0, .59111],
            729: [0, .69444, .12945, 0, .35555],
            730: [0, .69444, 0, 0, .94888],
            732: [0, .69444, .11472, 0, .59111],
            733: [0, .69444, .11472, 0, .59111],
            915: [0, .68611, .12903, 0, .69777],
            916: [0, .68611, 0, 0, .94444],
            920: [0, .68611, .09062, 0, .88555],
            923: [0, .68611, 0, 0, .80666],
            926: [0, .68611, .15092, 0, .76777],
            928: [0, .68611, .17208, 0, .8961],
            931: [0, .68611, .11431, 0, .82666],
            933: [0, .68611, .10778, 0, .88555],
            934: [0, .68611, .05632, 0, .82666],
            936: [0, .68611, .10778, 0, .88555],
            937: [0, .68611, .0992, 0, .82666],
            8211: [0, .44444, .09811, 0, .59111],
            8212: [0, .44444, .09811, 0, 1.18221],
            8216: [0, .69444, .12945, 0, .35555],
            8217: [0, .69444, .12945, 0, .35555],
            8220: [0, .69444, .16772, 0, .62055],
            8221: [0, .69444, .07939, 0, .62055]
          },
          "Main-Italic": {
            33: [0, .69444, .12417, 0, .30667],
            34: [0, .69444, .06961, 0, .51444],
            35: [.19444, .69444, .06616, 0, .81777],
            37: [.05556, .75, .13639, 0, .81777],
            38: [0, .69444, .09694, 0, .76666],
            39: [0, .69444, .12417, 0, .30667],
            40: [.25, .75, .16194, 0, .40889],
            41: [.25, .75, .03694, 0, .40889],
            42: [0, .75, .14917, 0, .51111],
            43: [.05667, .56167, .03694, 0, .76666],
            44: [.19444, .10556, 0, 0, .30667],
            45: [0, .43056, .02826, 0, .35778],
            46: [0, .10556, 0, 0, .30667],
            47: [.25, .75, .16194, 0, .51111],
            48: [0, .64444, .13556, 0, .51111],
            49: [0, .64444, .13556, 0, .51111],
            50: [0, .64444, .13556, 0, .51111],
            51: [0, .64444, .13556, 0, .51111],
            52: [.19444, .64444, .13556, 0, .51111],
            53: [0, .64444, .13556, 0, .51111],
            54: [0, .64444, .13556, 0, .51111],
            55: [.19444, .64444, .13556, 0, .51111],
            56: [0, .64444, .13556, 0, .51111],
            57: [0, .64444, .13556, 0, .51111],
            58: [0, .43056, .0582, 0, .30667],
            59: [.19444, .43056, .0582, 0, .30667],
            61: [-.13313, .36687, .06616, 0, .76666],
            63: [0, .69444, .1225, 0, .51111],
            64: [0, .69444, .09597, 0, .76666],
            65: [0, .68333, 0, 0, .74333],
            66: [0, .68333, .10257, 0, .70389],
            67: [0, .68333, .14528, 0, .71555],
            68: [0, .68333, .09403, 0, .755],
            69: [0, .68333, .12028, 0, .67833],
            70: [0, .68333, .13305, 0, .65277],
            71: [0, .68333, .08722, 0, .77361],
            72: [0, .68333, .16389, 0, .74333],
            73: [0, .68333, .15806, 0, .38555],
            74: [0, .68333, .14028, 0, .525],
            75: [0, .68333, .14528, 0, .76888],
            76: [0, .68333, 0, 0, .62722],
            77: [0, .68333, .16389, 0, .89666],
            78: [0, .68333, .16389, 0, .74333],
            79: [0, .68333, .09403, 0, .76666],
            80: [0, .68333, .10257, 0, .67833],
            81: [.19444, .68333, .09403, 0, .76666],
            82: [0, .68333, .03868, 0, .72944],
            83: [0, .68333, .11972, 0, .56222],
            84: [0, .68333, .13305, 0, .71555],
            85: [0, .68333, .16389, 0, .74333],
            86: [0, .68333, .18361, 0, .74333],
            87: [0, .68333, .18361, 0, .99888],
            88: [0, .68333, .15806, 0, .74333],
            89: [0, .68333, .19383, 0, .74333],
            90: [0, .68333, .14528, 0, .61333],
            91: [.25, .75, .1875, 0, .30667],
            93: [.25, .75, .10528, 0, .30667],
            94: [0, .69444, .06646, 0, .51111],
            95: [.31, .12056, .09208, 0, .51111],
            97: [0, .43056, .07671, 0, .51111],
            98: [0, .69444, .06312, 0, .46],
            99: [0, .43056, .05653, 0, .46],
            100: [0, .69444, .10333, 0, .51111],
            101: [0, .43056, .07514, 0, .46],
            102: [.19444, .69444, .21194, 0, .30667],
            103: [.19444, .43056, .08847, 0, .46],
            104: [0, .69444, .07671, 0, .51111],
            105: [0, .65536, .1019, 0, .30667],
            106: [.19444, .65536, .14467, 0, .30667],
            107: [0, .69444, .10764, 0, .46],
            108: [0, .69444, .10333, 0, .25555],
            109: [0, .43056, .07671, 0, .81777],
            110: [0, .43056, .07671, 0, .56222],
            111: [0, .43056, .06312, 0, .51111],
            112: [.19444, .43056, .06312, 0, .51111],
            113: [.19444, .43056, .08847, 0, .46],
            114: [0, .43056, .10764, 0, .42166],
            115: [0, .43056, .08208, 0, .40889],
            116: [0, .61508, .09486, 0, .33222],
            117: [0, .43056, .07671, 0, .53666],
            118: [0, .43056, .10764, 0, .46],
            119: [0, .43056, .10764, 0, .66444],
            120: [0, .43056, .12042, 0, .46389],
            121: [.19444, .43056, .08847, 0, .48555],
            122: [0, .43056, .12292, 0, .40889],
            126: [.35, .31786, .11585, 0, .51111],
            163: [0, .69444, 0, 0, .76909],
            168: [0, .66786, .10474, 0, .51111],
            176: [0, .69444, 0, 0, .83129],
            184: [.17014, 0, 0, 0, .46],
            198: [0, .68333, .12028, 0, .88277],
            216: [.04861, .73194, .09403, 0, .76666],
            223: [.19444, .69444, .10514, 0, .53666],
            230: [0, .43056, .07514, 0, .71555],
            248: [.09722, .52778, .09194, 0, .51111],
            305: [0, .43056, 0, .02778, .32246],
            338: [0, .68333, .12028, 0, .98499],
            339: [0, .43056, .07514, 0, .71555],
            567: [.19444, .43056, 0, .08334, .38403],
            710: [0, .69444, .06646, 0, .51111],
            711: [0, .62847, .08295, 0, .51111],
            713: [0, .56167, .10333, 0, .51111],
            714: [0, .69444, .09694, 0, .51111],
            715: [0, .69444, 0, 0, .51111],
            728: [0, .69444, .10806, 0, .51111],
            729: [0, .66786, .11752, 0, .30667],
            730: [0, .69444, 0, 0, .83129],
            732: [0, .66786, .11585, 0, .51111],
            733: [0, .69444, .1225, 0, .51111],
            915: [0, .68333, .13305, 0, .62722],
            916: [0, .68333, 0, 0, .81777],
            920: [0, .68333, .09403, 0, .76666],
            923: [0, .68333, 0, 0, .69222],
            926: [0, .68333, .15294, 0, .66444],
            928: [0, .68333, .16389, 0, .74333],
            931: [0, .68333, .12028, 0, .71555],
            933: [0, .68333, .11111, 0, .76666],
            934: [0, .68333, .05986, 0, .71555],
            936: [0, .68333, .11111, 0, .76666],
            937: [0, .68333, .10257, 0, .71555],
            8211: [0, .43056, .09208, 0, .51111],
            8212: [0, .43056, .09208, 0, 1.02222],
            8216: [0, .69444, .12417, 0, .30667],
            8217: [0, .69444, .12417, 0, .30667],
            8220: [0, .69444, .1685, 0, .51444],
            8221: [0, .69444, .06961, 0, .51444],
            8463: [0, .68889, 0, 0, .54028]
          },
          "Main-Regular": {
            32: [0, 0, 0, 0, .25],
            33: [0, .69444, 0, 0, .27778],
            34: [0, .69444, 0, 0, .5],
            35: [.19444, .69444, 0, 0, .83334],
            36: [.05556, .75, 0, 0, .5],
            37: [.05556, .75, 0, 0, .83334],
            38: [0, .69444, 0, 0, .77778],
            39: [0, .69444, 0, 0, .27778],
            40: [.25, .75, 0, 0, .38889],
            41: [.25, .75, 0, 0, .38889],
            42: [0, .75, 0, 0, .5],
            43: [.08333, .58333, 0, 0, .77778],
            44: [.19444, .10556, 0, 0, .27778],
            45: [0, .43056, 0, 0, .33333],
            46: [0, .10556, 0, 0, .27778],
            47: [.25, .75, 0, 0, .5],
            48: [0, .64444, 0, 0, .5],
            49: [0, .64444, 0, 0, .5],
            50: [0, .64444, 0, 0, .5],
            51: [0, .64444, 0, 0, .5],
            52: [0, .64444, 0, 0, .5],
            53: [0, .64444, 0, 0, .5],
            54: [0, .64444, 0, 0, .5],
            55: [0, .64444, 0, 0, .5],
            56: [0, .64444, 0, 0, .5],
            57: [0, .64444, 0, 0, .5],
            58: [0, .43056, 0, 0, .27778],
            59: [.19444, .43056, 0, 0, .27778],
            60: [.0391, .5391, 0, 0, .77778],
            61: [-.13313, .36687, 0, 0, .77778],
            62: [.0391, .5391, 0, 0, .77778],
            63: [0, .69444, 0, 0, .47222],
            64: [0, .69444, 0, 0, .77778],
            65: [0, .68333, 0, 0, .75],
            66: [0, .68333, 0, 0, .70834],
            67: [0, .68333, 0, 0, .72222],
            68: [0, .68333, 0, 0, .76389],
            69: [0, .68333, 0, 0, .68056],
            70: [0, .68333, 0, 0, .65278],
            71: [0, .68333, 0, 0, .78472],
            72: [0, .68333, 0, 0, .75],
            73: [0, .68333, 0, 0, .36111],
            74: [0, .68333, 0, 0, .51389],
            75: [0, .68333, 0, 0, .77778],
            76: [0, .68333, 0, 0, .625],
            77: [0, .68333, 0, 0, .91667],
            78: [0, .68333, 0, 0, .75],
            79: [0, .68333, 0, 0, .77778],
            80: [0, .68333, 0, 0, .68056],
            81: [.19444, .68333, 0, 0, .77778],
            82: [0, .68333, 0, 0, .73611],
            83: [0, .68333, 0, 0, .55556],
            84: [0, .68333, 0, 0, .72222],
            85: [0, .68333, 0, 0, .75],
            86: [0, .68333, .01389, 0, .75],
            87: [0, .68333, .01389, 0, 1.02778],
            88: [0, .68333, 0, 0, .75],
            89: [0, .68333, .025, 0, .75],
            90: [0, .68333, 0, 0, .61111],
            91: [.25, .75, 0, 0, .27778],
            92: [.25, .75, 0, 0, .5],
            93: [.25, .75, 0, 0, .27778],
            94: [0, .69444, 0, 0, .5],
            95: [.31, .12056, .02778, 0, .5],
            97: [0, .43056, 0, 0, .5],
            98: [0, .69444, 0, 0, .55556],
            99: [0, .43056, 0, 0, .44445],
            100: [0, .69444, 0, 0, .55556],
            101: [0, .43056, 0, 0, .44445],
            102: [0, .69444, .07778, 0, .30556],
            103: [.19444, .43056, .01389, 0, .5],
            104: [0, .69444, 0, 0, .55556],
            105: [0, .66786, 0, 0, .27778],
            106: [.19444, .66786, 0, 0, .30556],
            107: [0, .69444, 0, 0, .52778],
            108: [0, .69444, 0, 0, .27778],
            109: [0, .43056, 0, 0, .83334],
            110: [0, .43056, 0, 0, .55556],
            111: [0, .43056, 0, 0, .5],
            112: [.19444, .43056, 0, 0, .55556],
            113: [.19444, .43056, 0, 0, .52778],
            114: [0, .43056, 0, 0, .39167],
            115: [0, .43056, 0, 0, .39445],
            116: [0, .61508, 0, 0, .38889],
            117: [0, .43056, 0, 0, .55556],
            118: [0, .43056, .01389, 0, .52778],
            119: [0, .43056, .01389, 0, .72222],
            120: [0, .43056, 0, 0, .52778],
            121: [.19444, .43056, .01389, 0, .52778],
            122: [0, .43056, 0, 0, .44445],
            123: [.25, .75, 0, 0, .5],
            124: [.25, .75, 0, 0, .27778],
            125: [.25, .75, 0, 0, .5],
            126: [.35, .31786, 0, 0, .5],
            160: [0, 0, 0, 0, .25],
            167: [.19444, .69444, 0, 0, .44445],
            168: [0, .66786, 0, 0, .5],
            172: [0, .43056, 0, 0, .66667],
            176: [0, .69444, 0, 0, .75],
            177: [.08333, .58333, 0, 0, .77778],
            182: [.19444, .69444, 0, 0, .61111],
            184: [.17014, 0, 0, 0, .44445],
            198: [0, .68333, 0, 0, .90278],
            215: [.08333, .58333, 0, 0, .77778],
            216: [.04861, .73194, 0, 0, .77778],
            223: [0, .69444, 0, 0, .5],
            230: [0, .43056, 0, 0, .72222],
            247: [.08333, .58333, 0, 0, .77778],
            248: [.09722, .52778, 0, 0, .5],
            305: [0, .43056, 0, 0, .27778],
            338: [0, .68333, 0, 0, 1.01389],
            339: [0, .43056, 0, 0, .77778],
            567: [.19444, .43056, 0, 0, .30556],
            710: [0, .69444, 0, 0, .5],
            711: [0, .62847, 0, 0, .5],
            713: [0, .56778, 0, 0, .5],
            714: [0, .69444, 0, 0, .5],
            715: [0, .69444, 0, 0, .5],
            728: [0, .69444, 0, 0, .5],
            729: [0, .66786, 0, 0, .27778],
            730: [0, .69444, 0, 0, .75],
            732: [0, .66786, 0, 0, .5],
            733: [0, .69444, 0, 0, .5],
            824: [.19444, .69444, 0, 0, 0],
            915: [0, .68333, 0, 0, .625],
            916: [0, .68333, 0, 0, .83334],
            920: [0, .68333, 0, 0, .77778],
            923: [0, .68333, 0, 0, .69445],
            926: [0, .68333, 0, 0, .66667],
            928: [0, .68333, 0, 0, .75],
            931: [0, .68333, 0, 0, .72222],
            933: [0, .68333, 0, 0, .77778],
            934: [0, .68333, 0, 0, .72222],
            936: [0, .68333, 0, 0, .77778],
            937: [0, .68333, 0, 0, .72222],
            8211: [0, .43056, .02778, 0, .5],
            8212: [0, .43056, .02778, 0, 1],
            8216: [0, .69444, 0, 0, .27778],
            8217: [0, .69444, 0, 0, .27778],
            8220: [0, .69444, 0, 0, .5],
            8221: [0, .69444, 0, 0, .5],
            8224: [.19444, .69444, 0, 0, .44445],
            8225: [.19444, .69444, 0, 0, .44445],
            8230: [0, .12, 0, 0, 1.172],
            8242: [0, .55556, 0, 0, .275],
            8407: [0, .71444, .15382, 0, .5],
            8463: [0, .68889, 0, 0, .54028],
            8465: [0, .69444, 0, 0, .72222],
            8467: [0, .69444, 0, .11111, .41667],
            8472: [.19444, .43056, 0, .11111, .63646],
            8476: [0, .69444, 0, 0, .72222],
            8501: [0, .69444, 0, 0, .61111],
            8592: [-.13313, .36687, 0, 0, 1],
            8593: [.19444, .69444, 0, 0, .5],
            8594: [-.13313, .36687, 0, 0, 1],
            8595: [.19444, .69444, 0, 0, .5],
            8596: [-.13313, .36687, 0, 0, 1],
            8597: [.25, .75, 0, 0, .5],
            8598: [.19444, .69444, 0, 0, 1],
            8599: [.19444, .69444, 0, 0, 1],
            8600: [.19444, .69444, 0, 0, 1],
            8601: [.19444, .69444, 0, 0, 1],
            8614: [.011, .511, 0, 0, 1],
            8617: [.011, .511, 0, 0, 1.126],
            8618: [.011, .511, 0, 0, 1.126],
            8636: [-.13313, .36687, 0, 0, 1],
            8637: [-.13313, .36687, 0, 0, 1],
            8640: [-.13313, .36687, 0, 0, 1],
            8641: [-.13313, .36687, 0, 0, 1],
            8652: [.011, .671, 0, 0, 1],
            8656: [-.13313, .36687, 0, 0, 1],
            8657: [.19444, .69444, 0, 0, .61111],
            8658: [-.13313, .36687, 0, 0, 1],
            8659: [.19444, .69444, 0, 0, .61111],
            8660: [-.13313, .36687, 0, 0, 1],
            8661: [.25, .75, 0, 0, .61111],
            8704: [0, .69444, 0, 0, .55556],
            8706: [0, .69444, .05556, .08334, .5309],
            8707: [0, .69444, 0, 0, .55556],
            8709: [.05556, .75, 0, 0, .5],
            8711: [0, .68333, 0, 0, .83334],
            8712: [.0391, .5391, 0, 0, .66667],
            8715: [.0391, .5391, 0, 0, .66667],
            8722: [.08333, .58333, 0, 0, .77778],
            8723: [.08333, .58333, 0, 0, .77778],
            8725: [.25, .75, 0, 0, .5],
            8726: [.25, .75, 0, 0, .5],
            8727: [-.03472, .46528, 0, 0, .5],
            8728: [-.05555, .44445, 0, 0, .5],
            8729: [-.05555, .44445, 0, 0, .5],
            8730: [.2, .8, 0, 0, .83334],
            8733: [0, .43056, 0, 0, .77778],
            8734: [0, .43056, 0, 0, 1],
            8736: [0, .69224, 0, 0, .72222],
            8739: [.25, .75, 0, 0, .27778],
            8741: [.25, .75, 0, 0, .5],
            8743: [0, .55556, 0, 0, .66667],
            8744: [0, .55556, 0, 0, .66667],
            8745: [0, .55556, 0, 0, .66667],
            8746: [0, .55556, 0, 0, .66667],
            8747: [.19444, .69444, .11111, 0, .41667],
            8764: [-.13313, .36687, 0, 0, .77778],
            8768: [.19444, .69444, 0, 0, .27778],
            8771: [-.03625, .46375, 0, 0, .77778],
            8773: [-.022, .589, 0, 0, 1],
            8776: [-.01688, .48312, 0, 0, .77778],
            8781: [-.03625, .46375, 0, 0, .77778],
            8784: [-.133, .67, 0, 0, .778],
            8800: [.215, .716, 0, 0, .778],
            8801: [-.03625, .46375, 0, 0, .77778],
            8804: [.13597, .63597, 0, 0, .77778],
            8805: [.13597, .63597, 0, 0, .77778],
            8810: [.0391, .5391, 0, 0, 1],
            8811: [.0391, .5391, 0, 0, 1],
            8826: [.0391, .5391, 0, 0, .77778],
            8827: [.0391, .5391, 0, 0, .77778],
            8834: [.0391, .5391, 0, 0, .77778],
            8835: [.0391, .5391, 0, 0, .77778],
            8838: [.13597, .63597, 0, 0, .77778],
            8839: [.13597, .63597, 0, 0, .77778],
            8846: [0, .55556, 0, 0, .66667],
            8849: [.13597, .63597, 0, 0, .77778],
            8850: [.13597, .63597, 0, 0, .77778],
            8851: [0, .55556, 0, 0, .66667],
            8852: [0, .55556, 0, 0, .66667],
            8853: [.08333, .58333, 0, 0, .77778],
            8854: [.08333, .58333, 0, 0, .77778],
            8855: [.08333, .58333, 0, 0, .77778],
            8856: [.08333, .58333, 0, 0, .77778],
            8857: [.08333, .58333, 0, 0, .77778],
            8866: [0, .69444, 0, 0, .61111],
            8867: [0, .69444, 0, 0, .61111],
            8868: [0, .69444, 0, 0, .77778],
            8869: [0, .69444, 0, 0, .77778],
            8872: [.249, .75, 0, 0, .867],
            8900: [-.05555, .44445, 0, 0, .5],
            8901: [-.05555, .44445, 0, 0, .27778],
            8902: [-.03472, .46528, 0, 0, .5],
            8904: [.005, .505, 0, 0, .9],
            8942: [.03, .9, 0, 0, .278],
            8943: [-.19, .31, 0, 0, 1.172],
            8945: [-.1, .82, 0, 0, 1.282],
            8968: [.25, .75, 0, 0, .44445],
            8969: [.25, .75, 0, 0, .44445],
            8970: [.25, .75, 0, 0, .44445],
            8971: [.25, .75, 0, 0, .44445],
            8994: [-.14236, .35764, 0, 0, 1],
            8995: [-.14236, .35764, 0, 0, 1],
            9136: [.244, .744, 0, 0, .412],
            9137: [.244, .744, 0, 0, .412],
            9651: [.19444, .69444, 0, 0, .88889],
            9657: [-.03472, .46528, 0, 0, .5],
            9661: [.19444, .69444, 0, 0, .88889],
            9667: [-.03472, .46528, 0, 0, .5],
            9711: [.19444, .69444, 0, 0, 1],
            9824: [.12963, .69444, 0, 0, .77778],
            9825: [.12963, .69444, 0, 0, .77778],
            9826: [.12963, .69444, 0, 0, .77778],
            9827: [.12963, .69444, 0, 0, .77778],
            9837: [0, .75, 0, 0, .38889],
            9838: [.19444, .69444, 0, 0, .38889],
            9839: [.19444, .69444, 0, 0, .38889],
            10216: [.25, .75, 0, 0, .38889],
            10217: [.25, .75, 0, 0, .38889],
            10222: [.244, .744, 0, 0, .412],
            10223: [.244, .744, 0, 0, .412],
            10229: [.011, .511, 0, 0, 1.609],
            10230: [.011, .511, 0, 0, 1.638],
            10231: [.011, .511, 0, 0, 1.859],
            10232: [.024, .525, 0, 0, 1.609],
            10233: [.024, .525, 0, 0, 1.638],
            10234: [.024, .525, 0, 0, 1.858],
            10236: [.011, .511, 0, 0, 1.638],
            10815: [0, .68333, 0, 0, .75],
            10927: [.13597, .63597, 0, 0, .77778],
            10928: [.13597, .63597, 0, 0, .77778]
          },
          "Math-BoldItalic": {
            47: [.19444, .69444, 0, 0, 0],
            65: [0, .68611, 0, 0, .86944],
            66: [0, .68611, .04835, 0, .8664],
            67: [0, .68611, .06979, 0, .81694],
            68: [0, .68611, .03194, 0, .93812],
            69: [0, .68611, .05451, 0, .81007],
            70: [0, .68611, .15972, 0, .68889],
            71: [0, .68611, 0, 0, .88673],
            72: [0, .68611, .08229, 0, .98229],
            73: [0, .68611, .07778, 0, .51111],
            74: [0, .68611, .10069, 0, .63125],
            75: [0, .68611, .06979, 0, .97118],
            76: [0, .68611, 0, 0, .75555],
            77: [0, .68611, .11424, 0, 1.14201],
            78: [0, .68611, .11424, 0, .95034],
            79: [0, .68611, .03194, 0, .83666],
            80: [0, .68611, .15972, 0, .72309],
            81: [.19444, .68611, 0, 0, .86861],
            82: [0, .68611, .00421, 0, .87235],
            83: [0, .68611, .05382, 0, .69271],
            84: [0, .68611, .15972, 0, .63663],
            85: [0, .68611, .11424, 0, .80027],
            86: [0, .68611, .25555, 0, .67778],
            87: [0, .68611, .15972, 0, 1.09305],
            88: [0, .68611, .07778, 0, .94722],
            89: [0, .68611, .25555, 0, .67458],
            90: [0, .68611, .06979, 0, .77257],
            97: [0, .44444, 0, 0, .63287],
            98: [0, .69444, 0, 0, .52083],
            99: [0, .44444, 0, 0, .51342],
            100: [0, .69444, 0, 0, .60972],
            101: [0, .44444, 0, 0, .55361],
            102: [.19444, .69444, .11042, 0, .56806],
            103: [.19444, .44444, .03704, 0, .5449],
            104: [0, .69444, 0, 0, .66759],
            105: [0, .69326, 0, 0, .4048],
            106: [.19444, .69326, .0622, 0, .47083],
            107: [0, .69444, .01852, 0, .6037],
            108: [0, .69444, .0088, 0, .34815],
            109: [0, .44444, 0, 0, 1.0324],
            110: [0, .44444, 0, 0, .71296],
            111: [0, .44444, 0, 0, .58472],
            112: [.19444, .44444, 0, 0, .60092],
            113: [.19444, .44444, .03704, 0, .54213],
            114: [0, .44444, .03194, 0, .5287],
            115: [0, .44444, 0, 0, .53125],
            116: [0, .63492, 0, 0, .41528],
            117: [0, .44444, 0, 0, .68102],
            118: [0, .44444, .03704, 0, .56666],
            119: [0, .44444, .02778, 0, .83148],
            120: [0, .44444, 0, 0, .65903],
            121: [.19444, .44444, .03704, 0, .59028],
            122: [0, .44444, .04213, 0, .55509],
            915: [0, .68611, .15972, 0, .65694],
            916: [0, .68611, 0, 0, .95833],
            920: [0, .68611, .03194, 0, .86722],
            923: [0, .68611, 0, 0, .80555],
            926: [0, .68611, .07458, 0, .84125],
            928: [0, .68611, .08229, 0, .98229],
            931: [0, .68611, .05451, 0, .88507],
            933: [0, .68611, .15972, 0, .67083],
            934: [0, .68611, 0, 0, .76666],
            936: [0, .68611, .11653, 0, .71402],
            937: [0, .68611, .04835, 0, .8789],
            945: [0, .44444, 0, 0, .76064],
            946: [.19444, .69444, .03403, 0, .65972],
            947: [.19444, .44444, .06389, 0, .59003],
            948: [0, .69444, .03819, 0, .52222],
            949: [0, .44444, 0, 0, .52882],
            950: [.19444, .69444, .06215, 0, .50833],
            951: [.19444, .44444, .03704, 0, .6],
            952: [0, .69444, .03194, 0, .5618],
            953: [0, .44444, 0, 0, .41204],
            954: [0, .44444, 0, 0, .66759],
            955: [0, .69444, 0, 0, .67083],
            956: [.19444, .44444, 0, 0, .70787],
            957: [0, .44444, .06898, 0, .57685],
            958: [.19444, .69444, .03021, 0, .50833],
            959: [0, .44444, 0, 0, .58472],
            960: [0, .44444, .03704, 0, .68241],
            961: [.19444, .44444, 0, 0, .6118],
            962: [.09722, .44444, .07917, 0, .42361],
            963: [0, .44444, .03704, 0, .68588],
            964: [0, .44444, .13472, 0, .52083],
            965: [0, .44444, .03704, 0, .63055],
            966: [.19444, .44444, 0, 0, .74722],
            967: [.19444, .44444, 0, 0, .71805],
            968: [.19444, .69444, .03704, 0, .75833],
            969: [0, .44444, .03704, 0, .71782],
            977: [0, .69444, 0, 0, .69155],
            981: [.19444, .69444, 0, 0, .7125],
            982: [0, .44444, .03194, 0, .975],
            1009: [.19444, .44444, 0, 0, .6118],
            1013: [0, .44444, 0, 0, .48333]
          },
          "Math-Italic": {
            47: [.19444, .69444, 0, 0, 0],
            65: [0, .68333, 0, .13889, .75],
            66: [0, .68333, .05017, .08334, .75851],
            67: [0, .68333, .07153, .08334, .71472],
            68: [0, .68333, .02778, .05556, .82792],
            69: [0, .68333, .05764, .08334, .7382],
            70: [0, .68333, .13889, .08334, .64306],
            71: [0, .68333, 0, .08334, .78625],
            72: [0, .68333, .08125, .05556, .83125],
            73: [0, .68333, .07847, .11111, .43958],
            74: [0, .68333, .09618, .16667, .55451],
            75: [0, .68333, .07153, .05556, .84931],
            76: [0, .68333, 0, .02778, .68056],
            77: [0, .68333, .10903, .08334, .97014],
            78: [0, .68333, .10903, .08334, .80347],
            79: [0, .68333, .02778, .08334, .76278],
            80: [0, .68333, .13889, .08334, .64201],
            81: [.19444, .68333, 0, .08334, .79056],
            82: [0, .68333, .00773, .08334, .75929],
            83: [0, .68333, .05764, .08334, .6132],
            84: [0, .68333, .13889, .08334, .58438],
            85: [0, .68333, .10903, .02778, .68278],
            86: [0, .68333, .22222, 0, .58333],
            87: [0, .68333, .13889, 0, .94445],
            88: [0, .68333, .07847, .08334, .82847],
            89: [0, .68333, .22222, 0, .58056],
            90: [0, .68333, .07153, .08334, .68264],
            97: [0, .43056, 0, 0, .52859],
            98: [0, .69444, 0, 0, .42917],
            99: [0, .43056, 0, .05556, .43276],
            100: [0, .69444, 0, .16667, .52049],
            101: [0, .43056, 0, .05556, .46563],
            102: [.19444, .69444, .10764, .16667, .48959],
            103: [.19444, .43056, .03588, .02778, .47697],
            104: [0, .69444, 0, 0, .57616],
            105: [0, .65952, 0, 0, .34451],
            106: [.19444, .65952, .05724, 0, .41181],
            107: [0, .69444, .03148, 0, .5206],
            108: [0, .69444, .01968, .08334, .29838],
            109: [0, .43056, 0, 0, .87801],
            110: [0, .43056, 0, 0, .60023],
            111: [0, .43056, 0, .05556, .48472],
            112: [.19444, .43056, 0, .08334, .50313],
            113: [.19444, .43056, .03588, .08334, .44641],
            114: [0, .43056, .02778, .05556, .45116],
            115: [0, .43056, 0, .05556, .46875],
            116: [0, .61508, 0, .08334, .36111],
            117: [0, .43056, 0, .02778, .57246],
            118: [0, .43056, .03588, .02778, .48472],
            119: [0, .43056, .02691, .08334, .71592],
            120: [0, .43056, 0, .02778, .57153],
            121: [.19444, .43056, .03588, .05556, .49028],
            122: [0, .43056, .04398, .05556, .46505],
            915: [0, .68333, .13889, .08334, .61528],
            916: [0, .68333, 0, .16667, .83334],
            920: [0, .68333, .02778, .08334, .76278],
            923: [0, .68333, 0, .16667, .69445],
            926: [0, .68333, .07569, .08334, .74236],
            928: [0, .68333, .08125, .05556, .83125],
            931: [0, .68333, .05764, .08334, .77986],
            933: [0, .68333, .13889, .05556, .58333],
            934: [0, .68333, 0, .08334, .66667],
            936: [0, .68333, .11, .05556, .61222],
            937: [0, .68333, .05017, .08334, .7724],
            945: [0, .43056, .0037, .02778, .6397],
            946: [.19444, .69444, .05278, .08334, .56563],
            947: [.19444, .43056, .05556, 0, .51773],
            948: [0, .69444, .03785, .05556, .44444],
            949: [0, .43056, 0, .08334, .46632],
            950: [.19444, .69444, .07378, .08334, .4375],
            951: [.19444, .43056, .03588, .05556, .49653],
            952: [0, .69444, .02778, .08334, .46944],
            953: [0, .43056, 0, .05556, .35394],
            954: [0, .43056, 0, 0, .57616],
            955: [0, .69444, 0, 0, .58334],
            956: [.19444, .43056, 0, .02778, .60255],
            957: [0, .43056, .06366, .02778, .49398],
            958: [.19444, .69444, .04601, .11111, .4375],
            959: [0, .43056, 0, .05556, .48472],
            960: [0, .43056, .03588, 0, .57003],
            961: [.19444, .43056, 0, .08334, .51702],
            962: [.09722, .43056, .07986, .08334, .36285],
            963: [0, .43056, .03588, 0, .57141],
            964: [0, .43056, .1132, .02778, .43715],
            965: [0, .43056, .03588, .02778, .54028],
            966: [.19444, .43056, 0, .08334, .65417],
            967: [.19444, .43056, 0, .05556, .62569],
            968: [.19444, .69444, .03588, .11111, .65139],
            969: [0, .43056, .03588, 0, .62245],
            977: [0, .69444, 0, .08334, .59144],
            981: [.19444, .69444, 0, .08334, .59583],
            982: [0, .43056, .02778, 0, .82813],
            1009: [.19444, .43056, 0, .08334, .51702],
            1013: [0, .43056, 0, .05556, .4059]
          },
          "Math-Regular": {
            65: [0, .68333, 0, .13889, .75],
            66: [0, .68333, .05017, .08334, .75851],
            67: [0, .68333, .07153, .08334, .71472],
            68: [0, .68333, .02778, .05556, .82792],
            69: [0, .68333, .05764, .08334, .7382],
            70: [0, .68333, .13889, .08334, .64306],
            71: [0, .68333, 0, .08334, .78625],
            72: [0, .68333, .08125, .05556, .83125],
            73: [0, .68333, .07847, .11111, .43958],
            74: [0, .68333, .09618, .16667, .55451],
            75: [0, .68333, .07153, .05556, .84931],
            76: [0, .68333, 0, .02778, .68056],
            77: [0, .68333, .10903, .08334, .97014],
            78: [0, .68333, .10903, .08334, .80347],
            79: [0, .68333, .02778, .08334, .76278],
            80: [0, .68333, .13889, .08334, .64201],
            81: [.19444, .68333, 0, .08334, .79056],
            82: [0, .68333, .00773, .08334, .75929],
            83: [0, .68333, .05764, .08334, .6132],
            84: [0, .68333, .13889, .08334, .58438],
            85: [0, .68333, .10903, .02778, .68278],
            86: [0, .68333, .22222, 0, .58333],
            87: [0, .68333, .13889, 0, .94445],
            88: [0, .68333, .07847, .08334, .82847],
            89: [0, .68333, .22222, 0, .58056],
            90: [0, .68333, .07153, .08334, .68264],
            97: [0, .43056, 0, 0, .52859],
            98: [0, .69444, 0, 0, .42917],
            99: [0, .43056, 0, .05556, .43276],
            100: [0, .69444, 0, .16667, .52049],
            101: [0, .43056, 0, .05556, .46563],
            102: [.19444, .69444, .10764, .16667, .48959],
            103: [.19444, .43056, .03588, .02778, .47697],
            104: [0, .69444, 0, 0, .57616],
            105: [0, .65952, 0, 0, .34451],
            106: [.19444, .65952, .05724, 0, .41181],
            107: [0, .69444, .03148, 0, .5206],
            108: [0, .69444, .01968, .08334, .29838],
            109: [0, .43056, 0, 0, .87801],
            110: [0, .43056, 0, 0, .60023],
            111: [0, .43056, 0, .05556, .48472],
            112: [.19444, .43056, 0, .08334, .50313],
            113: [.19444, .43056, .03588, .08334, .44641],
            114: [0, .43056, .02778, .05556, .45116],
            115: [0, .43056, 0, .05556, .46875],
            116: [0, .61508, 0, .08334, .36111],
            117: [0, .43056, 0, .02778, .57246],
            118: [0, .43056, .03588, .02778, .48472],
            119: [0, .43056, .02691, .08334, .71592],
            120: [0, .43056, 0, .02778, .57153],
            121: [.19444, .43056, .03588, .05556, .49028],
            122: [0, .43056, .04398, .05556, .46505],
            915: [0, .68333, .13889, .08334, .61528],
            916: [0, .68333, 0, .16667, .83334],
            920: [0, .68333, .02778, .08334, .76278],
            923: [0, .68333, 0, .16667, .69445],
            926: [0, .68333, .07569, .08334, .74236],
            928: [0, .68333, .08125, .05556, .83125],
            931: [0, .68333, .05764, .08334, .77986],
            933: [0, .68333, .13889, .05556, .58333],
            934: [0, .68333, 0, .08334, .66667],
            936: [0, .68333, .11, .05556, .61222],
            937: [0, .68333, .05017, .08334, .7724],
            945: [0, .43056, .0037, .02778, .6397],
            946: [.19444, .69444, .05278, .08334, .56563],
            947: [.19444, .43056, .05556, 0, .51773],
            948: [0, .69444, .03785, .05556, .44444],
            949: [0, .43056, 0, .08334, .46632],
            950: [.19444, .69444, .07378, .08334, .4375],
            951: [.19444, .43056, .03588, .05556, .49653],
            952: [0, .69444, .02778, .08334, .46944],
            953: [0, .43056, 0, .05556, .35394],
            954: [0, .43056, 0, 0, .57616],
            955: [0, .69444, 0, 0, .58334],
            956: [.19444, .43056, 0, .02778, .60255],
            957: [0, .43056, .06366, .02778, .49398],
            958: [.19444, .69444, .04601, .11111, .4375],
            959: [0, .43056, 0, .05556, .48472],
            960: [0, .43056, .03588, 0, .57003],
            961: [.19444, .43056, 0, .08334, .51702],
            962: [.09722, .43056, .07986, .08334, .36285],
            963: [0, .43056, .03588, 0, .57141],
            964: [0, .43056, .1132, .02778, .43715],
            965: [0, .43056, .03588, .02778, .54028],
            966: [.19444, .43056, 0, .08334, .65417],
            967: [.19444, .43056, 0, .05556, .62569],
            968: [.19444, .69444, .03588, .11111, .65139],
            969: [0, .43056, .03588, 0, .62245],
            977: [0, .69444, 0, .08334, .59144],
            981: [.19444, .69444, 0, .08334, .59583],
            982: [0, .43056, .02778, 0, .82813],
            1009: [.19444, .43056, 0, .08334, .51702],
            1013: [0, .43056, 0, .05556, .4059]
          },
          "SansSerif-Bold": {
            33: [0, .69444, 0, 0, .36667],
            34: [0, .69444, 0, 0, .55834],
            35: [.19444, .69444, 0, 0, .91667],
            36: [.05556, .75, 0, 0, .55],
            37: [.05556, .75, 0, 0, 1.02912],
            38: [0, .69444, 0, 0, .83056],
            39: [0, .69444, 0, 0, .30556],
            40: [.25, .75, 0, 0, .42778],
            41: [.25, .75, 0, 0, .42778],
            42: [0, .75, 0, 0, .55],
            43: [.11667, .61667, 0, 0, .85556],
            44: [.10556, .13056, 0, 0, .30556],
            45: [0, .45833, 0, 0, .36667],
            46: [0, .13056, 0, 0, .30556],
            47: [.25, .75, 0, 0, .55],
            48: [0, .69444, 0, 0, .55],
            49: [0, .69444, 0, 0, .55],
            50: [0, .69444, 0, 0, .55],
            51: [0, .69444, 0, 0, .55],
            52: [0, .69444, 0, 0, .55],
            53: [0, .69444, 0, 0, .55],
            54: [0, .69444, 0, 0, .55],
            55: [0, .69444, 0, 0, .55],
            56: [0, .69444, 0, 0, .55],
            57: [0, .69444, 0, 0, .55],
            58: [0, .45833, 0, 0, .30556],
            59: [.10556, .45833, 0, 0, .30556],
            61: [-.09375, .40625, 0, 0, .85556],
            63: [0, .69444, 0, 0, .51945],
            64: [0, .69444, 0, 0, .73334],
            65: [0, .69444, 0, 0, .73334],
            66: [0, .69444, 0, 0, .73334],
            67: [0, .69444, 0, 0, .70278],
            68: [0, .69444, 0, 0, .79445],
            69: [0, .69444, 0, 0, .64167],
            70: [0, .69444, 0, 0, .61111],
            71: [0, .69444, 0, 0, .73334],
            72: [0, .69444, 0, 0, .79445],
            73: [0, .69444, 0, 0, .33056],
            74: [0, .69444, 0, 0, .51945],
            75: [0, .69444, 0, 0, .76389],
            76: [0, .69444, 0, 0, .58056],
            77: [0, .69444, 0, 0, .97778],
            78: [0, .69444, 0, 0, .79445],
            79: [0, .69444, 0, 0, .79445],
            80: [0, .69444, 0, 0, .70278],
            81: [.10556, .69444, 0, 0, .79445],
            82: [0, .69444, 0, 0, .70278],
            83: [0, .69444, 0, 0, .61111],
            84: [0, .69444, 0, 0, .73334],
            85: [0, .69444, 0, 0, .76389],
            86: [0, .69444, .01528, 0, .73334],
            87: [0, .69444, .01528, 0, 1.03889],
            88: [0, .69444, 0, 0, .73334],
            89: [0, .69444, .0275, 0, .73334],
            90: [0, .69444, 0, 0, .67223],
            91: [.25, .75, 0, 0, .34306],
            93: [.25, .75, 0, 0, .34306],
            94: [0, .69444, 0, 0, .55],
            95: [.35, .10833, .03056, 0, .55],
            97: [0, .45833, 0, 0, .525],
            98: [0, .69444, 0, 0, .56111],
            99: [0, .45833, 0, 0, .48889],
            100: [0, .69444, 0, 0, .56111],
            101: [0, .45833, 0, 0, .51111],
            102: [0, .69444, .07639, 0, .33611],
            103: [.19444, .45833, .01528, 0, .55],
            104: [0, .69444, 0, 0, .56111],
            105: [0, .69444, 0, 0, .25556],
            106: [.19444, .69444, 0, 0, .28611],
            107: [0, .69444, 0, 0, .53056],
            108: [0, .69444, 0, 0, .25556],
            109: [0, .45833, 0, 0, .86667],
            110: [0, .45833, 0, 0, .56111],
            111: [0, .45833, 0, 0, .55],
            112: [.19444, .45833, 0, 0, .56111],
            113: [.19444, .45833, 0, 0, .56111],
            114: [0, .45833, .01528, 0, .37222],
            115: [0, .45833, 0, 0, .42167],
            116: [0, .58929, 0, 0, .40417],
            117: [0, .45833, 0, 0, .56111],
            118: [0, .45833, .01528, 0, .5],
            119: [0, .45833, .01528, 0, .74445],
            120: [0, .45833, 0, 0, .5],
            121: [.19444, .45833, .01528, 0, .5],
            122: [0, .45833, 0, 0, .47639],
            126: [.35, .34444, 0, 0, .55],
            168: [0, .69444, 0, 0, .55],
            176: [0, .69444, 0, 0, .73334],
            180: [0, .69444, 0, 0, .55],
            184: [.17014, 0, 0, 0, .48889],
            305: [0, .45833, 0, 0, .25556],
            567: [.19444, .45833, 0, 0, .28611],
            710: [0, .69444, 0, 0, .55],
            711: [0, .63542, 0, 0, .55],
            713: [0, .63778, 0, 0, .55],
            728: [0, .69444, 0, 0, .55],
            729: [0, .69444, 0, 0, .30556],
            730: [0, .69444, 0, 0, .73334],
            732: [0, .69444, 0, 0, .55],
            733: [0, .69444, 0, 0, .55],
            915: [0, .69444, 0, 0, .58056],
            916: [0, .69444, 0, 0, .91667],
            920: [0, .69444, 0, 0, .85556],
            923: [0, .69444, 0, 0, .67223],
            926: [0, .69444, 0, 0, .73334],
            928: [0, .69444, 0, 0, .79445],
            931: [0, .69444, 0, 0, .79445],
            933: [0, .69444, 0, 0, .85556],
            934: [0, .69444, 0, 0, .79445],
            936: [0, .69444, 0, 0, .85556],
            937: [0, .69444, 0, 0, .79445],
            8211: [0, .45833, .03056, 0, .55],
            8212: [0, .45833, .03056, 0, 1.10001],
            8216: [0, .69444, 0, 0, .30556],
            8217: [0, .69444, 0, 0, .30556],
            8220: [0, .69444, 0, 0, .55834],
            8221: [0, .69444, 0, 0, .55834]
          },
          "SansSerif-Italic": {
            33: [0, .69444, .05733, 0, .31945],
            34: [0, .69444, .00316, 0, .5],
            35: [.19444, .69444, .05087, 0, .83334],
            36: [.05556, .75, .11156, 0, .5],
            37: [.05556, .75, .03126, 0, .83334],
            38: [0, .69444, .03058, 0, .75834],
            39: [0, .69444, .07816, 0, .27778],
            40: [.25, .75, .13164, 0, .38889],
            41: [.25, .75, .02536, 0, .38889],
            42: [0, .75, .11775, 0, .5],
            43: [.08333, .58333, .02536, 0, .77778],
            44: [.125, .08333, 0, 0, .27778],
            45: [0, .44444, .01946, 0, .33333],
            46: [0, .08333, 0, 0, .27778],
            47: [.25, .75, .13164, 0, .5],
            48: [0, .65556, .11156, 0, .5],
            49: [0, .65556, .11156, 0, .5],
            50: [0, .65556, .11156, 0, .5],
            51: [0, .65556, .11156, 0, .5],
            52: [0, .65556, .11156, 0, .5],
            53: [0, .65556, .11156, 0, .5],
            54: [0, .65556, .11156, 0, .5],
            55: [0, .65556, .11156, 0, .5],
            56: [0, .65556, .11156, 0, .5],
            57: [0, .65556, .11156, 0, .5],
            58: [0, .44444, .02502, 0, .27778],
            59: [.125, .44444, .02502, 0, .27778],
            61: [-.13, .37, .05087, 0, .77778],
            63: [0, .69444, .11809, 0, .47222],
            64: [0, .69444, .07555, 0, .66667],
            65: [0, .69444, 0, 0, .66667],
            66: [0, .69444, .08293, 0, .66667],
            67: [0, .69444, .11983, 0, .63889],
            68: [0, .69444, .07555, 0, .72223],
            69: [0, .69444, .11983, 0, .59722],
            70: [0, .69444, .13372, 0, .56945],
            71: [0, .69444, .11983, 0, .66667],
            72: [0, .69444, .08094, 0, .70834],
            73: [0, .69444, .13372, 0, .27778],
            74: [0, .69444, .08094, 0, .47222],
            75: [0, .69444, .11983, 0, .69445],
            76: [0, .69444, 0, 0, .54167],
            77: [0, .69444, .08094, 0, .875],
            78: [0, .69444, .08094, 0, .70834],
            79: [0, .69444, .07555, 0, .73611],
            80: [0, .69444, .08293, 0, .63889],
            81: [.125, .69444, .07555, 0, .73611],
            82: [0, .69444, .08293, 0, .64584],
            83: [0, .69444, .09205, 0, .55556],
            84: [0, .69444, .13372, 0, .68056],
            85: [0, .69444, .08094, 0, .6875],
            86: [0, .69444, .1615, 0, .66667],
            87: [0, .69444, .1615, 0, .94445],
            88: [0, .69444, .13372, 0, .66667],
            89: [0, .69444, .17261, 0, .66667],
            90: [0, .69444, .11983, 0, .61111],
            91: [.25, .75, .15942, 0, .28889],
            93: [.25, .75, .08719, 0, .28889],
            94: [0, .69444, .0799, 0, .5],
            95: [.35, .09444, .08616, 0, .5],
            97: [0, .44444, .00981, 0, .48056],
            98: [0, .69444, .03057, 0, .51667],
            99: [0, .44444, .08336, 0, .44445],
            100: [0, .69444, .09483, 0, .51667],
            101: [0, .44444, .06778, 0, .44445],
            102: [0, .69444, .21705, 0, .30556],
            103: [.19444, .44444, .10836, 0, .5],
            104: [0, .69444, .01778, 0, .51667],
            105: [0, .67937, .09718, 0, .23889],
            106: [.19444, .67937, .09162, 0, .26667],
            107: [0, .69444, .08336, 0, .48889],
            108: [0, .69444, .09483, 0, .23889],
            109: [0, .44444, .01778, 0, .79445],
            110: [0, .44444, .01778, 0, .51667],
            111: [0, .44444, .06613, 0, .5],
            112: [.19444, .44444, .0389, 0, .51667],
            113: [.19444, .44444, .04169, 0, .51667],
            114: [0, .44444, .10836, 0, .34167],
            115: [0, .44444, .0778, 0, .38333],
            116: [0, .57143, .07225, 0, .36111],
            117: [0, .44444, .04169, 0, .51667],
            118: [0, .44444, .10836, 0, .46111],
            119: [0, .44444, .10836, 0, .68334],
            120: [0, .44444, .09169, 0, .46111],
            121: [.19444, .44444, .10836, 0, .46111],
            122: [0, .44444, .08752, 0, .43472],
            126: [.35, .32659, .08826, 0, .5],
            168: [0, .67937, .06385, 0, .5],
            176: [0, .69444, 0, 0, .73752],
            184: [.17014, 0, 0, 0, .44445],
            305: [0, .44444, .04169, 0, .23889],
            567: [.19444, .44444, .04169, 0, .26667],
            710: [0, .69444, .0799, 0, .5],
            711: [0, .63194, .08432, 0, .5],
            713: [0, .60889, .08776, 0, .5],
            714: [0, .69444, .09205, 0, .5],
            715: [0, .69444, 0, 0, .5],
            728: [0, .69444, .09483, 0, .5],
            729: [0, .67937, .07774, 0, .27778],
            730: [0, .69444, 0, 0, .73752],
            732: [0, .67659, .08826, 0, .5],
            733: [0, .69444, .09205, 0, .5],
            915: [0, .69444, .13372, 0, .54167],
            916: [0, .69444, 0, 0, .83334],
            920: [0, .69444, .07555, 0, .77778],
            923: [0, .69444, 0, 0, .61111],
            926: [0, .69444, .12816, 0, .66667],
            928: [0, .69444, .08094, 0, .70834],
            931: [0, .69444, .11983, 0, .72222],
            933: [0, .69444, .09031, 0, .77778],
            934: [0, .69444, .04603, 0, .72222],
            936: [0, .69444, .09031, 0, .77778],
            937: [0, .69444, .08293, 0, .72222],
            8211: [0, .44444, .08616, 0, .5],
            8212: [0, .44444, .08616, 0, 1],
            8216: [0, .69444, .07816, 0, .27778],
            8217: [0, .69444, .07816, 0, .27778],
            8220: [0, .69444, .14205, 0, .5],
            8221: [0, .69444, .00316, 0, .5]
          },
          "SansSerif-Regular": {
            33: [0, .69444, 0, 0, .31945],
            34: [0, .69444, 0, 0, .5],
            35: [.19444, .69444, 0, 0, .83334],
            36: [.05556, .75, 0, 0, .5],
            37: [.05556, .75, 0, 0, .83334],
            38: [0, .69444, 0, 0, .75834],
            39: [0, .69444, 0, 0, .27778],
            40: [.25, .75, 0, 0, .38889],
            41: [.25, .75, 0, 0, .38889],
            42: [0, .75, 0, 0, .5],
            43: [.08333, .58333, 0, 0, .77778],
            44: [.125, .08333, 0, 0, .27778],
            45: [0, .44444, 0, 0, .33333],
            46: [0, .08333, 0, 0, .27778],
            47: [.25, .75, 0, 0, .5],
            48: [0, .65556, 0, 0, .5],
            49: [0, .65556, 0, 0, .5],
            50: [0, .65556, 0, 0, .5],
            51: [0, .65556, 0, 0, .5],
            52: [0, .65556, 0, 0, .5],
            53: [0, .65556, 0, 0, .5],
            54: [0, .65556, 0, 0, .5],
            55: [0, .65556, 0, 0, .5],
            56: [0, .65556, 0, 0, .5],
            57: [0, .65556, 0, 0, .5],
            58: [0, .44444, 0, 0, .27778],
            59: [.125, .44444, 0, 0, .27778],
            61: [-.13, .37, 0, 0, .77778],
            63: [0, .69444, 0, 0, .47222],
            64: [0, .69444, 0, 0, .66667],
            65: [0, .69444, 0, 0, .66667],
            66: [0, .69444, 0, 0, .66667],
            67: [0, .69444, 0, 0, .63889],
            68: [0, .69444, 0, 0, .72223],
            69: [0, .69444, 0, 0, .59722],
            70: [0, .69444, 0, 0, .56945],
            71: [0, .69444, 0, 0, .66667],
            72: [0, .69444, 0, 0, .70834],
            73: [0, .69444, 0, 0, .27778],
            74: [0, .69444, 0, 0, .47222],
            75: [0, .69444, 0, 0, .69445],
            76: [0, .69444, 0, 0, .54167],
            77: [0, .69444, 0, 0, .875],
            78: [0, .69444, 0, 0, .70834],
            79: [0, .69444, 0, 0, .73611],
            80: [0, .69444, 0, 0, .63889],
            81: [.125, .69444, 0, 0, .73611],
            82: [0, .69444, 0, 0, .64584],
            83: [0, .69444, 0, 0, .55556],
            84: [0, .69444, 0, 0, .68056],
            85: [0, .69444, 0, 0, .6875],
            86: [0, .69444, .01389, 0, .66667],
            87: [0, .69444, .01389, 0, .94445],
            88: [0, .69444, 0, 0, .66667],
            89: [0, .69444, .025, 0, .66667],
            90: [0, .69444, 0, 0, .61111],
            91: [.25, .75, 0, 0, .28889],
            93: [.25, .75, 0, 0, .28889],
            94: [0, .69444, 0, 0, .5],
            95: [.35, .09444, .02778, 0, .5],
            97: [0, .44444, 0, 0, .48056],
            98: [0, .69444, 0, 0, .51667],
            99: [0, .44444, 0, 0, .44445],
            100: [0, .69444, 0, 0, .51667],
            101: [0, .44444, 0, 0, .44445],
            102: [0, .69444, .06944, 0, .30556],
            103: [.19444, .44444, .01389, 0, .5],
            104: [0, .69444, 0, 0, .51667],
            105: [0, .67937, 0, 0, .23889],
            106: [.19444, .67937, 0, 0, .26667],
            107: [0, .69444, 0, 0, .48889],
            108: [0, .69444, 0, 0, .23889],
            109: [0, .44444, 0, 0, .79445],
            110: [0, .44444, 0, 0, .51667],
            111: [0, .44444, 0, 0, .5],
            112: [.19444, .44444, 0, 0, .51667],
            113: [.19444, .44444, 0, 0, .51667],
            114: [0, .44444, .01389, 0, .34167],
            115: [0, .44444, 0, 0, .38333],
            116: [0, .57143, 0, 0, .36111],
            117: [0, .44444, 0, 0, .51667],
            118: [0, .44444, .01389, 0, .46111],
            119: [0, .44444, .01389, 0, .68334],
            120: [0, .44444, 0, 0, .46111],
            121: [.19444, .44444, .01389, 0, .46111],
            122: [0, .44444, 0, 0, .43472],
            126: [.35, .32659, 0, 0, .5],
            168: [0, .67937, 0, 0, .5],
            176: [0, .69444, 0, 0, .66667],
            184: [.17014, 0, 0, 0, .44445],
            305: [0, .44444, 0, 0, .23889],
            567: [.19444, .44444, 0, 0, .26667],
            710: [0, .69444, 0, 0, .5],
            711: [0, .63194, 0, 0, .5],
            713: [0, .60889, 0, 0, .5],
            714: [0, .69444, 0, 0, .5],
            715: [0, .69444, 0, 0, .5],
            728: [0, .69444, 0, 0, .5],
            729: [0, .67937, 0, 0, .27778],
            730: [0, .69444, 0, 0, .66667],
            732: [0, .67659, 0, 0, .5],
            733: [0, .69444, 0, 0, .5],
            915: [0, .69444, 0, 0, .54167],
            916: [0, .69444, 0, 0, .83334],
            920: [0, .69444, 0, 0, .77778],
            923: [0, .69444, 0, 0, .61111],
            926: [0, .69444, 0, 0, .66667],
            928: [0, .69444, 0, 0, .70834],
            931: [0, .69444, 0, 0, .72222],
            933: [0, .69444, 0, 0, .77778],
            934: [0, .69444, 0, 0, .72222],
            936: [0, .69444, 0, 0, .77778],
            937: [0, .69444, 0, 0, .72222],
            8211: [0, .44444, .02778, 0, .5],
            8212: [0, .44444, .02778, 0, 1],
            8216: [0, .69444, 0, 0, .27778],
            8217: [0, .69444, 0, 0, .27778],
            8220: [0, .69444, 0, 0, .5],
            8221: [0, .69444, 0, 0, .5]
          },
          "Script-Regular": {
            65: [0, .7, .22925, 0, .80253],
            66: [0, .7, .04087, 0, .90757],
            67: [0, .7, .1689, 0, .66619],
            68: [0, .7, .09371, 0, .77443],
            69: [0, .7, .18583, 0, .56162],
            70: [0, .7, .13634, 0, .89544],
            71: [0, .7, .17322, 0, .60961],
            72: [0, .7, .29694, 0, .96919],
            73: [0, .7, .19189, 0, .80907],
            74: [.27778, .7, .19189, 0, 1.05159],
            75: [0, .7, .31259, 0, .91364],
            76: [0, .7, .19189, 0, .87373],
            77: [0, .7, .15981, 0, 1.08031],
            78: [0, .7, .3525, 0, .9015],
            79: [0, .7, .08078, 0, .73787],
            80: [0, .7, .08078, 0, 1.01262],
            81: [0, .7, .03305, 0, .88282],
            82: [0, .7, .06259, 0, .85],
            83: [0, .7, .19189, 0, .86767],
            84: [0, .7, .29087, 0, .74697],
            85: [0, .7, .25815, 0, .79996],
            86: [0, .7, .27523, 0, .62204],
            87: [0, .7, .27523, 0, .80532],
            88: [0, .7, .26006, 0, .94445],
            89: [0, .7, .2939, 0, .70961],
            90: [0, .7, .24037, 0, .8212]
          },
          "Size1-Regular": {
            40: [.35001, .85, 0, 0, .45834],
            41: [.35001, .85, 0, 0, .45834],
            47: [.35001, .85, 0, 0, .57778],
            91: [.35001, .85, 0, 0, .41667],
            92: [.35001, .85, 0, 0, .57778],
            93: [.35001, .85, 0, 0, .41667],
            123: [.35001, .85, 0, 0, .58334],
            125: [.35001, .85, 0, 0, .58334],
            710: [0, .72222, 0, 0, .55556],
            732: [0, .72222, 0, 0, .55556],
            770: [0, .72222, 0, 0, .55556],
            771: [0, .72222, 0, 0, .55556],
            8214: [-99e-5, .601, 0, 0, .77778],
            8593: [1e-5, .6, 0, 0, .66667],
            8595: [1e-5, .6, 0, 0, .66667],
            8657: [1e-5, .6, 0, 0, .77778],
            8659: [1e-5, .6, 0, 0, .77778],
            8719: [.25001, .75, 0, 0, .94445],
            8720: [.25001, .75, 0, 0, .94445],
            8721: [.25001, .75, 0, 0, 1.05556],
            8730: [.35001, .85, 0, 0, 1],
            8739: [-.00599, .606, 0, 0, .33333],
            8741: [-.00599, .606, 0, 0, .55556],
            8747: [.30612, .805, .19445, 0, .47222],
            8748: [.306, .805, .19445, 0, .47222],
            8749: [.306, .805, .19445, 0, .47222],
            8750: [.30612, .805, .19445, 0, .47222],
            8896: [.25001, .75, 0, 0, .83334],
            8897: [.25001, .75, 0, 0, .83334],
            8898: [.25001, .75, 0, 0, .83334],
            8899: [.25001, .75, 0, 0, .83334],
            8968: [.35001, .85, 0, 0, .47222],
            8969: [.35001, .85, 0, 0, .47222],
            8970: [.35001, .85, 0, 0, .47222],
            8971: [.35001, .85, 0, 0, .47222],
            9168: [-99e-5, .601, 0, 0, .66667],
            10216: [.35001, .85, 0, 0, .47222],
            10217: [.35001, .85, 0, 0, .47222],
            10752: [.25001, .75, 0, 0, 1.11111],
            10753: [.25001, .75, 0, 0, 1.11111],
            10754: [.25001, .75, 0, 0, 1.11111],
            10756: [.25001, .75, 0, 0, .83334],
            10758: [.25001, .75, 0, 0, .83334]
          },
          "Size2-Regular": {
            40: [.65002, 1.15, 0, 0, .59722],
            41: [.65002, 1.15, 0, 0, .59722],
            47: [.65002, 1.15, 0, 0, .81111],
            91: [.65002, 1.15, 0, 0, .47222],
            92: [.65002, 1.15, 0, 0, .81111],
            93: [.65002, 1.15, 0, 0, .47222],
            123: [.65002, 1.15, 0, 0, .66667],
            125: [.65002, 1.15, 0, 0, .66667],
            710: [0, .75, 0, 0, 1],
            732: [0, .75, 0, 0, 1],
            770: [0, .75, 0, 0, 1],
            771: [0, .75, 0, 0, 1],
            8719: [.55001, 1.05, 0, 0, 1.27778],
            8720: [.55001, 1.05, 0, 0, 1.27778],
            8721: [.55001, 1.05, 0, 0, 1.44445],
            8730: [.65002, 1.15, 0, 0, 1],
            8747: [.86225, 1.36, .44445, 0, .55556],
            8748: [.862, 1.36, .44445, 0, .55556],
            8749: [.862, 1.36, .44445, 0, .55556],
            8750: [.86225, 1.36, .44445, 0, .55556],
            8896: [.55001, 1.05, 0, 0, 1.11111],
            8897: [.55001, 1.05, 0, 0, 1.11111],
            8898: [.55001, 1.05, 0, 0, 1.11111],
            8899: [.55001, 1.05, 0, 0, 1.11111],
            8968: [.65002, 1.15, 0, 0, .52778],
            8969: [.65002, 1.15, 0, 0, .52778],
            8970: [.65002, 1.15, 0, 0, .52778],
            8971: [.65002, 1.15, 0, 0, .52778],
            10216: [.65002, 1.15, 0, 0, .61111],
            10217: [.65002, 1.15, 0, 0, .61111],
            10752: [.55001, 1.05, 0, 0, 1.51112],
            10753: [.55001, 1.05, 0, 0, 1.51112],
            10754: [.55001, 1.05, 0, 0, 1.51112],
            10756: [.55001, 1.05, 0, 0, 1.11111],
            10758: [.55001, 1.05, 0, 0, 1.11111]
          },
          "Size3-Regular": {
            40: [.95003, 1.45, 0, 0, .73611],
            41: [.95003, 1.45, 0, 0, .73611],
            47: [.95003, 1.45, 0, 0, 1.04445],
            91: [.95003, 1.45, 0, 0, .52778],
            92: [.95003, 1.45, 0, 0, 1.04445],
            93: [.95003, 1.45, 0, 0, .52778],
            123: [.95003, 1.45, 0, 0, .75],
            125: [.95003, 1.45, 0, 0, .75],
            710: [0, .75, 0, 0, 1.44445],
            732: [0, .75, 0, 0, 1.44445],
            770: [0, .75, 0, 0, 1.44445],
            771: [0, .75, 0, 0, 1.44445],
            8730: [.95003, 1.45, 0, 0, 1],
            8968: [.95003, 1.45, 0, 0, .58334],
            8969: [.95003, 1.45, 0, 0, .58334],
            8970: [.95003, 1.45, 0, 0, .58334],
            8971: [.95003, 1.45, 0, 0, .58334],
            10216: [.95003, 1.45, 0, 0, .75],
            10217: [.95003, 1.45, 0, 0, .75]
          },
          "Size4-Regular": {
            40: [1.25003, 1.75, 0, 0, .79167],
            41: [1.25003, 1.75, 0, 0, .79167],
            47: [1.25003, 1.75, 0, 0, 1.27778],
            91: [1.25003, 1.75, 0, 0, .58334],
            92: [1.25003, 1.75, 0, 0, 1.27778],
            93: [1.25003, 1.75, 0, 0, .58334],
            123: [1.25003, 1.75, 0, 0, .80556],
            125: [1.25003, 1.75, 0, 0, .80556],
            710: [0, .825, 0, 0, 1.8889],
            732: [0, .825, 0, 0, 1.8889],
            770: [0, .825, 0, 0, 1.8889],
            771: [0, .825, 0, 0, 1.8889],
            8730: [1.25003, 1.75, 0, 0, 1],
            8968: [1.25003, 1.75, 0, 0, .63889],
            8969: [1.25003, 1.75, 0, 0, .63889],
            8970: [1.25003, 1.75, 0, 0, .63889],
            8971: [1.25003, 1.75, 0, 0, .63889],
            9115: [.64502, 1.155, 0, 0, .875],
            9116: [1e-5, .6, 0, 0, .875],
            9117: [.64502, 1.155, 0, 0, .875],
            9118: [.64502, 1.155, 0, 0, .875],
            9119: [1e-5, .6, 0, 0, .875],
            9120: [.64502, 1.155, 0, 0, .875],
            9121: [.64502, 1.155, 0, 0, .66667],
            9122: [-99e-5, .601, 0, 0, .66667],
            9123: [.64502, 1.155, 0, 0, .66667],
            9124: [.64502, 1.155, 0, 0, .66667],
            9125: [-99e-5, .601, 0, 0, .66667],
            9126: [.64502, 1.155, 0, 0, .66667],
            9127: [1e-5, .9, 0, 0, .88889],
            9128: [.65002, 1.15, 0, 0, .88889],
            9129: [.90001, 0, 0, 0, .88889],
            9130: [0, .3, 0, 0, .88889],
            9131: [1e-5, .9, 0, 0, .88889],
            9132: [.65002, 1.15, 0, 0, .88889],
            9133: [.90001, 0, 0, 0, .88889],
            9143: [.88502, .915, 0, 0, 1.05556],
            10216: [1.25003, 1.75, 0, 0, .80556],
            10217: [1.25003, 1.75, 0, 0, .80556],
            57344: [-.00499, .605, 0, 0, 1.05556],
            57345: [-.00499, .605, 0, 0, 1.05556],
            57680: [0, .12, 0, 0, .45],
            57681: [0, .12, 0, 0, .45],
            57682: [0, .12, 0, 0, .45],
            57683: [0, .12, 0, 0, .45]
          },
          "Typewriter-Regular": {
            32: [0, 0, 0, 0, .525],
            33: [0, .61111, 0, 0, .525],
            34: [0, .61111, 0, 0, .525],
            35: [0, .61111, 0, 0, .525],
            36: [.08333, .69444, 0, 0, .525],
            37: [.08333, .69444, 0, 0, .525],
            38: [0, .61111, 0, 0, .525],
            39: [0, .61111, 0, 0, .525],
            40: [.08333, .69444, 0, 0, .525],
            41: [.08333, .69444, 0, 0, .525],
            42: [0, .52083, 0, 0, .525],
            43: [-.08056, .53055, 0, 0, .525],
            44: [.13889, .125, 0, 0, .525],
            45: [-.08056, .53055, 0, 0, .525],
            46: [0, .125, 0, 0, .525],
            47: [.08333, .69444, 0, 0, .525],
            48: [0, .61111, 0, 0, .525],
            49: [0, .61111, 0, 0, .525],
            50: [0, .61111, 0, 0, .525],
            51: [0, .61111, 0, 0, .525],
            52: [0, .61111, 0, 0, .525],
            53: [0, .61111, 0, 0, .525],
            54: [0, .61111, 0, 0, .525],
            55: [0, .61111, 0, 0, .525],
            56: [0, .61111, 0, 0, .525],
            57: [0, .61111, 0, 0, .525],
            58: [0, .43056, 0, 0, .525],
            59: [.13889, .43056, 0, 0, .525],
            60: [-.05556, .55556, 0, 0, .525],
            61: [-.19549, .41562, 0, 0, .525],
            62: [-.05556, .55556, 0, 0, .525],
            63: [0, .61111, 0, 0, .525],
            64: [0, .61111, 0, 0, .525],
            65: [0, .61111, 0, 0, .525],
            66: [0, .61111, 0, 0, .525],
            67: [0, .61111, 0, 0, .525],
            68: [0, .61111, 0, 0, .525],
            69: [0, .61111, 0, 0, .525],
            70: [0, .61111, 0, 0, .525],
            71: [0, .61111, 0, 0, .525],
            72: [0, .61111, 0, 0, .525],
            73: [0, .61111, 0, 0, .525],
            74: [0, .61111, 0, 0, .525],
            75: [0, .61111, 0, 0, .525],
            76: [0, .61111, 0, 0, .525],
            77: [0, .61111, 0, 0, .525],
            78: [0, .61111, 0, 0, .525],
            79: [0, .61111, 0, 0, .525],
            80: [0, .61111, 0, 0, .525],
            81: [.13889, .61111, 0, 0, .525],
            82: [0, .61111, 0, 0, .525],
            83: [0, .61111, 0, 0, .525],
            84: [0, .61111, 0, 0, .525],
            85: [0, .61111, 0, 0, .525],
            86: [0, .61111, 0, 0, .525],
            87: [0, .61111, 0, 0, .525],
            88: [0, .61111, 0, 0, .525],
            89: [0, .61111, 0, 0, .525],
            90: [0, .61111, 0, 0, .525],
            91: [.08333, .69444, 0, 0, .525],
            92: [.08333, .69444, 0, 0, .525],
            93: [.08333, .69444, 0, 0, .525],
            94: [0, .61111, 0, 0, .525],
            95: [.09514, 0, 0, 0, .525],
            96: [0, .61111, 0, 0, .525],
            97: [0, .43056, 0, 0, .525],
            98: [0, .61111, 0, 0, .525],
            99: [0, .43056, 0, 0, .525],
            100: [0, .61111, 0, 0, .525],
            101: [0, .43056, 0, 0, .525],
            102: [0, .61111, 0, 0, .525],
            103: [.22222, .43056, 0, 0, .525],
            104: [0, .61111, 0, 0, .525],
            105: [0, .61111, 0, 0, .525],
            106: [.22222, .61111, 0, 0, .525],
            107: [0, .61111, 0, 0, .525],
            108: [0, .61111, 0, 0, .525],
            109: [0, .43056, 0, 0, .525],
            110: [0, .43056, 0, 0, .525],
            111: [0, .43056, 0, 0, .525],
            112: [.22222, .43056, 0, 0, .525],
            113: [.22222, .43056, 0, 0, .525],
            114: [0, .43056, 0, 0, .525],
            115: [0, .43056, 0, 0, .525],
            116: [0, .55358, 0, 0, .525],
            117: [0, .43056, 0, 0, .525],
            118: [0, .43056, 0, 0, .525],
            119: [0, .43056, 0, 0, .525],
            120: [0, .43056, 0, 0, .525],
            121: [.22222, .43056, 0, 0, .525],
            122: [0, .43056, 0, 0, .525],
            123: [.08333, .69444, 0, 0, .525],
            124: [.08333, .69444, 0, 0, .525],
            125: [.08333, .69444, 0, 0, .525],
            126: [0, .61111, 0, 0, .525],
            127: [0, .61111, 0, 0, .525],
            160: [0, 0, 0, 0, .525],
            176: [0, .61111, 0, 0, .525],
            184: [.19445, 0, 0, 0, .525],
            305: [0, .43056, 0, 0, .525],
            567: [.22222, .43056, 0, 0, .525],
            711: [0, .56597, 0, 0, .525],
            713: [0, .56555, 0, 0, .525],
            714: [0, .61111, 0, 0, .525],
            715: [0, .61111, 0, 0, .525],
            728: [0, .61111, 0, 0, .525],
            730: [0, .61111, 0, 0, .525],
            770: [0, .61111, 0, 0, .525],
            771: [0, .61111, 0, 0, .525],
            776: [0, .61111, 0, 0, .525],
            915: [0, .61111, 0, 0, .525],
            916: [0, .61111, 0, 0, .525],
            920: [0, .61111, 0, 0, .525],
            923: [0, .61111, 0, 0, .525],
            926: [0, .61111, 0, 0, .525],
            928: [0, .61111, 0, 0, .525],
            931: [0, .61111, 0, 0, .525],
            933: [0, .61111, 0, 0, .525],
            934: [0, .61111, 0, 0, .525],
            936: [0, .61111, 0, 0, .525],
            937: [0, .61111, 0, 0, .525],
            8216: [0, .61111, 0, 0, .525],
            8217: [0, .61111, 0, 0, .525],
            8242: [0, .61111, 0, 0, .525],
            9251: [.11111, .21944, 0, 0, .525]
          }
        }, U = {
          slant: [.25, .25, .25],
          space: [0, 0, 0],
          stretch: [0, 0, 0],
          shrink: [0, 0, 0],
          xHeight: [.431, .431, .431],
          quad: [1, 1.171, 1.472],
          extraSpace: [0, 0, 0],
          num1: [.677, .732, .925],
          num2: [.394, .384, .387],
          num3: [.444, .471, .504],
          denom1: [.686, .752, 1.025],
          denom2: [.345, .344, .532],
          sup1: [.413, .503, .504],
          sup2: [.363, .431, .404],
          sup3: [.289, .286, .294],
          sub1: [.15, .143, .2],
          sub2: [.247, .286, .4],
          supDrop: [.386, .353, .494],
          subDrop: [.05, .071, .1],
          delim1: [2.39, 1.7, 1.98],
          delim2: [1.01, 1.157, 1.42],
          axisHeight: [.25, .25, .25],
          defaultRuleThickness: [.04, .049, .049],
          bigOpSpacing1: [.111, .111, .111],
          bigOpSpacing2: [.166, .166, .166],
          bigOpSpacing3: [.2, .2, .2],
          bigOpSpacing4: [.6, .611, .611],
          bigOpSpacing5: [.1, .143, .143],
          sqrtRuleThickness: [.04, .04, .04],
          ptPerEm: [10, 10, 10],
          doubleRuleSep: [.2, .2, .2]
        }, j = {
          "Å": "A",
          "Ç": "C",
          "Ð": "D",
          "Þ": "o",
          "å": "a",
          "ç": "c",
          "ð": "d",
          "þ": "o",
          "А": "A",
          "Б": "B",
          "В": "B",
          "Г": "F",
          "Д": "A",
          "Е": "E",
          "Ж": "K",
          "З": "3",
          "И": "N",
          "Й": "N",
          "К": "K",
          "Л": "N",
          "М": "M",
          "Н": "H",
          "О": "O",
          "П": "N",
          "Р": "P",
          "С": "C",
          "Т": "T",
          "У": "y",
          "Ф": "O",
          "Х": "X",
          "Ц": "U",
          "Ч": "h",
          "Ш": "W",
          "Щ": "W",
          "Ъ": "B",
          "Ы": "X",
          "Ь": "B",
          "Э": "3",
          "Ю": "X",
          "Я": "R",
          "а": "a",
          "б": "b",
          "в": "a",
          "г": "r",
          "д": "y",
          "е": "e",
          "ж": "m",
          "з": "e",
          "и": "n",
          "й": "n",
          "к": "n",
          "л": "n",
          "м": "m",
          "н": "n",
          "о": "o",
          "п": "n",
          "р": "p",
          "с": "c",
          "т": "o",
          "у": "y",
          "ф": "b",
          "х": "x",
          "ц": "n",
          "ч": "n",
          "ш": "w",
          "щ": "w",
          "ъ": "a",
          "ы": "m",
          "ь": "a",
          "э": "e",
          "ю": "m",
          "я": "r"
        };

        function q(t, e, r) {
          if (!B[e]) throw new Error("Font metrics not found for font: " + e + ".");
          var n = t.charCodeAt(0);
          t[0] in j && (n = j[t[0]].charCodeAt(0));
          var o = B[e][n];
          if (o || "text" !== r || T(n) && (o = B[e][77]), o) return {
            depth: o[0],
            height: o[1],
            italic: o[2],
            skew: o[3],
            width: o[4]
          }
        }

        var H = {};
        var W = {bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1},
          V = {"accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1}, G = {math: {}, text: {}}, Y = G;

        function J(t, e, r, n, o, i) {
          G[t][o] = {font: e, group: r, replace: n}, i && n && (G[t][n] = G[t][o])
        }

        var K = "main", $ = "ams", X = "bin", Q = "mathord", Z = "op-token", tt = "rel", et = "spacing";
        J("math", K, tt, "≡", "\\equiv", !0), J("math", K, tt, "≺", "\\prec", !0), J("math", K, tt, "≻", "\\succ", !0), J("math", K, tt, "∼", "\\sim", !0), J("math", K, tt, "⊥", "\\perp"), J("math", K, tt, "⪯", "\\preceq", !0), J("math", K, tt, "⪰", "\\succeq", !0), J("math", K, tt, "≃", "\\simeq", !0), J("math", K, tt, "∣", "\\mid", !0), J("math", K, tt, "≪", "\\ll", !0), J("math", K, tt, "≫", "\\gg", !0), J("math", K, tt, "≍", "\\asymp", !0), J("math", K, tt, "∥", "\\parallel"), J("math", K, tt, "⋈", "\\bowtie", !0), J("math", K, tt, "⌣", "\\smile", !0), J("math", K, tt, "⊑", "\\sqsubseteq", !0), J("math", K, tt, "⊒", "\\sqsupseteq", !0), J("math", K, tt, "≐", "\\doteq", !0), J("math", K, tt, "⌢", "\\frown", !0), J("math", K, tt, "∋", "\\ni", !0), J("math", K, tt, "∝", "\\propto", !0), J("math", K, tt, "⊢", "\\vdash", !0), J("math", K, tt, "⊣", "\\dashv", !0), J("math", K, tt, "∋", "\\owns"), J("math", K, "punct", ".", "\\ldotp"), J("math", K, "punct", "⋅", "\\cdotp"), J("math", K, "textord", "#", "\\#"), J("text", K, "textord", "#", "\\#"), J("math", K, "textord", "&", "\\&"), J("text", K, "textord", "&", "\\&"), J("math", K, "textord", "ℵ", "\\aleph", !0), J("math", K, "textord", "∀", "\\forall", !0), J("math", K, "textord", "ℏ", "\\hbar", !0), J("math", K, "textord", "∃", "\\exists", !0), J("math", K, "textord", "∇", "\\nabla", !0), J("math", K, "textord", "♭", "\\flat", !0), J("math", K, "textord", "ℓ", "\\ell", !0), J("math", K, "textord", "♮", "\\natural", !0), J("math", K, "textord", "♣", "\\clubsuit", !0), J("math", K, "textord", "℘", "\\wp", !0), J("math", K, "textord", "♯", "\\sharp", !0), J("math", K, "textord", "♢", "\\diamondsuit", !0), J("math", K, "textord", "ℜ", "\\Re", !0), J("math", K, "textord", "♡", "\\heartsuit", !0), J("math", K, "textord", "ℑ", "\\Im", !0), J("math", K, "textord", "♠", "\\spadesuit", !0), J("text", K, "textord", "§", "\\S", !0), J("text", K, "textord", "¶", "\\P", !0), J("math", K, "textord", "†", "\\dag"), J("text", K, "textord", "†", "\\dag"), J("text", K, "textord", "†", "\\textdagger"), J("math", K, "textord", "‡", "\\ddag"), J("text", K, "textord", "‡", "\\ddag"), J("text", K, "textord", "‡", "\\textdaggerdbl"), J("math", K, "close", "⎱", "\\rmoustache", !0), J("math", K, "open", "⎰", "\\lmoustache", !0), J("math", K, "close", "⟯", "\\rgroup", !0), J("math", K, "open", "⟮", "\\lgroup", !0), J("math", K, X, "∓", "\\mp", !0), J("math", K, X, "⊖", "\\ominus", !0), J("math", K, X, "⊎", "\\uplus", !0), J("math", K, X, "⊓", "\\sqcap", !0), J("math", K, X, "∗", "\\ast"), J("math", K, X, "⊔", "\\sqcup", !0), J("math", K, X, "◯", "\\bigcirc"), J("math", K, X, "∙", "\\bullet"), J("math", K, X, "‡", "\\ddagger"), J("math", K, X, "≀", "\\wr", !0), J("math", K, X, "⨿", "\\amalg"), J("math", K, X, "&", "\\And"), J("math", K, tt, "⟵", "\\longleftarrow", !0), J("math", K, tt, "⇐", "\\Leftarrow", !0), J("math", K, tt, "⟸", "\\Longleftarrow", !0), J("math", K, tt, "⟶", "\\longrightarrow", !0), J("math", K, tt, "⇒", "\\Rightarrow", !0), J("math", K, tt, "⟹", "\\Longrightarrow", !0), J("math", K, tt, "↔", "\\leftrightarrow", !0), J("math", K, tt, "⟷", "\\longleftrightarrow", !0), J("math", K, tt, "⇔", "\\Leftrightarrow", !0), J("math", K, tt, "⟺", "\\Longleftrightarrow", !0), J("math", K, tt, "↦", "\\mapsto", !0), J("math", K, tt, "⟼", "\\longmapsto", !0), J("math", K, tt, "↗", "\\nearrow", !0), J("math", K, tt, "↩", "\\hookleftarrow", !0), J("math", K, tt, "↪", "\\hookrightarrow", !0), J("math", K, tt, "↘", "\\searrow", !0), J("math", K, tt, "↼", "\\leftharpoonup", !0), J("math", K, tt, "⇀", "\\rightharpoonup", !0), J("math", K, tt, "↙", "\\swarrow", !0), J("math", K, tt, "↽", "\\leftharpoondown", !0), J("math", K, tt, "⇁", "\\rightharpoondown", !0), J("math", K, tt, "↖", "\\nwarrow", !0), J("math", K, tt, "⇌", "\\rightleftharpoons", !0), J("math", $, tt, "≮", "\\nless", !0), J("math", $, tt, "", "\\nleqslant"), J("math", $, tt, "", "\\nleqq"), J("math", $, tt, "⪇", "\\lneq", !0), J("math", $, tt, "≨", "\\lneqq", !0), J("math", $, tt, "", "\\lvertneqq"), J("math", $, tt, "⋦", "\\lnsim", !0), J("math", $, tt, "⪉", "\\lnapprox", !0),J("math", $, tt, "⊀", "\\nprec", !0),J("math", $, tt, "⋠", "\\npreceq", !0),J("math", $, tt, "⋨", "\\precnsim", !0),J("math", $, tt, "⪹", "\\precnapprox", !0),J("math", $, tt, "≁", "\\nsim", !0),J("math", $, tt, "", "\\nshortmid"),J("math", $, tt, "∤", "\\nmid", !0),J("math", $, tt, "⊬", "\\nvdash", !0),J("math", $, tt, "⊭", "\\nvDash", !0),J("math", $, tt, "⋪", "\\ntriangleleft"),J("math", $, tt, "⋬", "\\ntrianglelefteq", !0),J("math", $, tt, "⊊", "\\subsetneq", !0),J("math", $, tt, "", "\\varsubsetneq"),J("math", $, tt, "⫋", "\\subsetneqq", !0),J("math", $, tt, "", "\\varsubsetneqq"),J("math", $, tt, "≯", "\\ngtr", !0),J("math", $, tt, "", "\\ngeqslant"),J("math", $, tt, "", "\\ngeqq"),J("math", $, tt, "⪈", "\\gneq", !0),J("math", $, tt, "≩", "\\gneqq", !0),J("math", $, tt, "", "\\gvertneqq"),J("math", $, tt, "⋧", "\\gnsim", !0),J("math", $, tt, "⪊", "\\gnapprox", !0),J("math", $, tt, "⊁", "\\nsucc", !0),J("math", $, tt, "⋡", "\\nsucceq", !0),J("math", $, tt, "⋩", "\\succnsim", !0),J("math", $, tt, "⪺", "\\succnapprox", !0),J("math", $, tt, "≆", "\\ncong", !0),J("math", $, tt, "", "\\nshortparallel"),J("math", $, tt, "∦", "\\nparallel", !0),J("math", $, tt, "⊯", "\\nVDash", !0),J("math", $, tt, "⋫", "\\ntriangleright"),J("math", $, tt, "⋭", "\\ntrianglerighteq", !0),J("math", $, tt, "", "\\nsupseteqq"),J("math", $, tt, "⊋", "\\supsetneq", !0),J("math", $, tt, "", "\\varsupsetneq"),J("math", $, tt, "⫌", "\\supsetneqq", !0),J("math", $, tt, "", "\\varsupsetneqq"),J("math", $, tt, "⊮", "\\nVdash", !0),J("math", $, tt, "⪵", "\\precneqq", !0),J("math", $, tt, "⪶", "\\succneqq", !0),J("math", $, tt, "", "\\nsubseteqq"),J("math", $, X, "⊴", "\\unlhd"),J("math", $, X, "⊵", "\\unrhd"),J("math", $, tt, "↚", "\\nleftarrow", !0),J("math", $, tt, "↛", "\\nrightarrow", !0),J("math", $, tt, "⇍", "\\nLeftarrow", !0),J("math", $, tt, "⇏", "\\nRightarrow", !0),J("math", $, tt, "↮", "\\nleftrightarrow", !0),J("math", $, tt, "⇎", "\\nLeftrightarrow", !0),J("math", $, tt, "△", "\\vartriangle"),J("math", $, "textord", "ℏ", "\\hslash"),J("math", $, "textord", "▽", "\\triangledown"),J("math", $, "textord", "◊", "\\lozenge"),J("math", $, "textord", "Ⓢ", "\\circledS"),J("math", $, "textord", "®", "\\circledR"),J("text", $, "textord", "®", "\\circledR"),J("math", $, "textord", "∡", "\\measuredangle", !0),J("math", $, "textord", "∄", "\\nexists"),J("math", $, "textord", "℧", "\\mho"),J("math", $, "textord", "Ⅎ", "\\Finv", !0),J("math", $, "textord", "⅁", "\\Game", !0),J("math", $, "textord", "k", "\\Bbbk"),J("math", $, "textord", "‵", "\\backprime"),J("math", $, "textord", "▲", "\\blacktriangle"),J("math", $, "textord", "▼", "\\blacktriangledown"),J("math", $, "textord", "■", "\\blacksquare"),J("math", $, "textord", "⧫", "\\blacklozenge"),J("math", $, "textord", "★", "\\bigstar"),J("math", $, "textord", "∢", "\\sphericalangle", !0),J("math", $, "textord", "∁", "\\complement", !0),J("math", $, "textord", "ð", "\\eth", !0),J("math", $, "textord", "╱", "\\diagup"),J("math", $, "textord", "╲", "\\diagdown"),J("math", $, "textord", "□", "\\square"),J("math", $, "textord", "□", "\\Box"),J("math", $, "textord", "◊", "\\Diamond"),J("math", $, "textord", "¥", "\\yen", !0),J("text", $, "textord", "¥", "\\yen", !0),J("math", $, "textord", "✓", "\\checkmark", !0),J("text", $, "textord", "✓", "\\checkmark"),J("math", $, "textord", "ℶ", "\\beth", !0),J("math", $, "textord", "ℸ", "\\daleth", !0),J("math", $, "textord", "ℷ", "\\gimel", !0),J("math", $, "textord", "ϝ", "\\digamma"),J("math", $, "textord", "ϰ", "\\varkappa"),J("math", $, "open", "┌", "\\ulcorner", !0),J("math", $, "close", "┐", "\\urcorner", !0),J("math", $, "open", "└", "\\llcorner", !0),J("math", $, "close", "┘", "\\lrcorner", !0),J("math", $, tt, "≦", "\\leqq", !0),J("math", $, tt, "⩽", "\\leqslant", !0),J("math", $, tt, "⪕", "\\eqslantless", !0),J("math", $, tt, "≲", "\\lesssim", !0),J("math", $, tt, "⪅", "\\lessapprox", !0),J("math", $, tt, "≊", "\\approxeq", !0),J("math", $, X, "⋖", "\\lessdot"),J("math", $, tt, "⋘", "\\lll", !0),J("math", $, tt, "≶", "\\lessgtr", !0),J("math", $, tt, "⋚", "\\lesseqgtr", !0),J("math", $, tt, "⪋", "\\lesseqqgtr", !0),J("math", $, tt, "≑", "\\doteqdot"),J("math", $, tt, "≓", "\\risingdotseq", !0),J("math", $, tt, "≒", "\\fallingdotseq", !0),J("math", $, tt, "∽", "\\backsim", !0),J("math", $, tt, "⋍", "\\backsimeq", !0),J("math", $, tt, "⫅", "\\subseteqq", !0),J("math", $, tt, "⋐", "\\Subset", !0),J("math", $, tt, "⊏", "\\sqsubset", !0),J("math", $, tt, "≼", "\\preccurlyeq", !0),J("math", $, tt, "⋞", "\\curlyeqprec", !0),J("math", $, tt, "≾", "\\precsim", !0),J("math", $, tt, "⪷", "\\precapprox", !0),J("math", $, tt, "⊲", "\\vartriangleleft"),J("math", $, tt, "⊴", "\\trianglelefteq"),J("math", $, tt, "⊨", "\\vDash", !0),J("math", $, tt, "⊪", "\\Vvdash", !0),J("math", $, tt, "⌣", "\\smallsmile"),J("math", $, tt, "⌢", "\\smallfrown"),J("math", $, tt, "≏", "\\bumpeq", !0),J("math", $, tt, "≎", "\\Bumpeq", !0),J("math", $, tt, "≧", "\\geqq", !0),J("math", $, tt, "⩾", "\\geqslant", !0),J("math", $, tt, "⪖", "\\eqslantgtr", !0),J("math", $, tt, "≳", "\\gtrsim", !0),J("math", $, tt, "⪆", "\\gtrapprox", !0),J("math", $, X, "⋗", "\\gtrdot"),J("math", $, tt, "⋙", "\\ggg", !0),J("math", $, tt, "≷", "\\gtrless", !0),J("math", $, tt, "⋛", "\\gtreqless", !0),J("math", $, tt, "⪌", "\\gtreqqless", !0),J("math", $, tt, "≖", "\\eqcirc", !0),J("math", $, tt, "≗", "\\circeq", !0),J("math", $, tt, "≜", "\\triangleq", !0),J("math", $, tt, "∼", "\\thicksim"),J("math", $, tt, "≈", "\\thickapprox"),J("math", $, tt, "⫆", "\\supseteqq", !0),J("math", $, tt, "⋑", "\\Supset", !0),J("math", $, tt, "⊐", "\\sqsupset", !0),J("math", $, tt, "≽", "\\succcurlyeq", !0),J("math", $, tt, "⋟", "\\curlyeqsucc", !0),J("math", $, tt, "≿", "\\succsim", !0),J("math", $, tt, "⪸", "\\succapprox", !0),J("math", $, tt, "⊳", "\\vartriangleright"),J("math", $, tt, "⊵", "\\trianglerighteq"),J("math", $, tt, "⊩", "\\Vdash", !0),J("math", $, tt, "∣", "\\shortmid"),J("math", $, tt, "∥", "\\shortparallel"),J("math", $, tt, "≬", "\\between", !0),J("math", $, tt, "⋔", "\\pitchfork", !0),J("math", $, tt, "∝", "\\varpropto"),J("math", $, tt, "◀", "\\blacktriangleleft"),J("math", $, tt, "∴", "\\therefore", !0),J("math", $, tt, "∍", "\\backepsilon"),J("math", $, tt, "▶", "\\blacktriangleright"),J("math", $, tt, "∵", "\\because", !0),J("math", $, tt, "⋘", "\\llless"),J("math", $, tt, "⋙", "\\gggtr"),J("math", $, X, "⊲", "\\lhd"),J("math", $, X, "⊳", "\\rhd"),J("math", $, tt, "≂", "\\eqsim", !0),J("math", K, tt, "⋈", "\\Join"),J("math", $, tt, "≑", "\\Doteq", !0),J("math", $, X, "∔", "\\dotplus", !0),J("math", $, X, "∖", "\\smallsetminus"),J("math", $, X, "⋒", "\\Cap", !0),J("math", $, X, "⋓", "\\Cup", !0),J("math", $, X, "⩞", "\\doublebarwedge", !0),J("math", $, X, "⊟", "\\boxminus", !0),J("math", $, X, "⊞", "\\boxplus", !0),J("math", $, X, "⋇", "\\divideontimes", !0),J("math", $, X, "⋉", "\\ltimes", !0),J("math", $, X, "⋊", "\\rtimes", !0),J("math", $, X, "⋋", "\\leftthreetimes", !0),J("math", $, X, "⋌", "\\rightthreetimes", !0),J("math", $, X, "⋏", "\\curlywedge", !0),J("math", $, X, "⋎", "\\curlyvee", !0),J("math", $, X, "⊝", "\\circleddash", !0),J("math", $, X, "⊛", "\\circledast", !0),J("math", $, X, "⋅", "\\centerdot"),J("math", $, X, "⊺", "\\intercal", !0),J("math", $, X, "⋒", "\\doublecap"),J("math", $, X, "⋓", "\\doublecup"),J("math", $, X, "⊠", "\\boxtimes", !0),J("math", $, tt, "⇢", "\\dashrightarrow", !0),J("math", $, tt, "⇠", "\\dashleftarrow", !0),J("math", $, tt, "⇇", "\\leftleftarrows", !0),J("math", $, tt, "⇆", "\\leftrightarrows", !0),J("math", $, tt, "⇚", "\\Lleftarrow", !0),J("math", $, tt, "↞", "\\twoheadleftarrow", !0),J("math", $, tt, "↢", "\\leftarrowtail", !0),J("math", $, tt, "↫", "\\looparrowleft", !0),J("math", $, tt, "⇋", "\\leftrightharpoons", !0),J("math", $, tt, "↶", "\\curvearrowleft", !0),J("math", $, tt, "↺", "\\circlearrowleft", !0),J("math", $, tt, "↰", "\\Lsh", !0),J("math", $, tt, "⇈", "\\upuparrows", !0),J("math", $, tt, "↿", "\\upharpoonleft", !0),J("math", $, tt, "⇃", "\\downharpoonleft", !0),J("math", $, tt, "⊸", "\\multimap", !0),J("math", $, tt, "↭", "\\leftrightsquigarrow", !0),J("math", $, tt, "⇉", "\\rightrightarrows", !0),J("math", $, tt, "⇄", "\\rightleftarrows", !0),J("math", $, tt, "↠", "\\twoheadrightarrow", !0),J("math", $, tt, "↣", "\\rightarrowtail", !0),J("math", $, tt, "↬", "\\looparrowright", !0),J("math", $, tt, "↷", "\\curvearrowright", !0),J("math", $, tt, "↻", "\\circlearrowright", !0),J("math", $, tt, "↱", "\\Rsh", !0),J("math", $, tt, "⇊", "\\downdownarrows", !0),J("math", $, tt, "↾", "\\upharpoonright", !0),J("math", $, tt, "⇂", "\\downharpoonright", !0),J("math", $, tt, "⇝", "\\rightsquigarrow", !0),J("math", $, tt, "⇝", "\\leadsto"),J("math", $, tt, "⇛", "\\Rrightarrow", !0),J("math", $, tt, "↾", "\\restriction"),J("math", K, "textord", "‘", "`"),J("math", K, "textord", "$", "\\$"),J("text", K, "textord", "$", "\\$"),J("text", K, "textord", "$", "\\textdollar"),J("math", K, "textord", "%", "\\%"),J("text", K, "textord", "%", "\\%"),J("math", K, "textord", "_", "\\_"),J("text", K, "textord", "_", "\\_"),J("text", K, "textord", "_", "\\textunderscore"),J("math", K, "textord", "∠", "\\angle", !0),J("math", K, "textord", "∞", "\\infty", !0),J("math", K, "textord", "′", "\\prime"),J("math", K, "textord", "△", "\\triangle"),J("math", K, "textord", "Γ", "\\Gamma", !0),J("math", K, "textord", "Δ", "\\Delta", !0),J("math", K, "textord", "Θ", "\\Theta", !0),J("math", K, "textord", "Λ", "\\Lambda", !0),J("math", K, "textord", "Ξ", "\\Xi", !0),J("math", K, "textord", "Π", "\\Pi", !0),J("math", K, "textord", "Σ", "\\Sigma", !0),J("math", K, "textord", "Υ", "\\Upsilon", !0),J("math", K, "textord", "Φ", "\\Phi", !0),J("math", K, "textord", "Ψ", "\\Psi", !0),J("math", K, "textord", "Ω", "\\Omega", !0),J("math", K, "textord", "A", "Α"),J("math", K, "textord", "B", "Β"),J("math", K, "textord", "E", "Ε"),J("math", K, "textord", "Z", "Ζ"),J("math", K, "textord", "H", "Η"),J("math", K, "textord", "I", "Ι"),J("math", K, "textord", "K", "Κ"),J("math", K, "textord", "M", "Μ"),J("math", K, "textord", "N", "Ν"),J("math", K, "textord", "O", "Ο"),J("math", K, "textord", "P", "Ρ"),J("math", K, "textord", "T", "Τ"),J("math", K, "textord", "X", "Χ"),J("math", K, "textord", "¬", "\\neg", !0),J("math", K, "textord", "¬", "\\lnot"),J("math", K, "textord", "⊤", "\\top"),J("math", K, "textord", "⊥", "\\bot"),J("math", K, "textord", "∅", "\\emptyset"),J("math", $, "textord", "∅", "\\varnothing"),J("math", K, Q, "α", "\\alpha", !0),J("math", K, Q, "β", "\\beta", !0),J("math", K, Q, "γ", "\\gamma", !0),J("math", K, Q, "δ", "\\delta", !0),J("math", K, Q, "ϵ", "\\epsilon", !0),J("math", K, Q, "ζ", "\\zeta", !0),J("math", K, Q, "η", "\\eta", !0),J("math", K, Q, "θ", "\\theta", !0),J("math", K, Q, "ι", "\\iota", !0),J("math", K, Q, "κ", "\\kappa", !0),J("math", K, Q, "λ", "\\lambda", !0),J("math", K, Q, "μ", "\\mu", !0),J("math", K, Q, "ν", "\\nu", !0),J("math", K, Q, "ξ", "\\xi", !0),J("math", K, Q, "ο", "\\omicron", !0),J("math", K, Q, "π", "\\pi", !0),J("math", K, Q, "ρ", "\\rho", !0),J("math", K, Q, "σ", "\\sigma", !0),J("math", K, Q, "τ", "\\tau", !0),J("math", K, Q, "υ", "\\upsilon", !0),J("math", K, Q, "ϕ", "\\phi", !0),J("math", K, Q, "χ", "\\chi", !0),J("math", K, Q, "ψ", "\\psi", !0),J("math", K, Q, "ω", "\\omega", !0),J("math", K, Q, "ε", "\\varepsilon", !0),J("math", K, Q, "ϑ", "\\vartheta", !0),J("math", K, Q, "ϖ", "\\varpi", !0),J("math", K, Q, "ϱ", "\\varrho", !0),J("math", K, Q, "ς", "\\varsigma", !0),J("math", K, Q, "φ", "\\varphi", !0),J("math", K, X, "∗", "*"),J("math", K, X, "+", "+"),J("math", K, X, "−", "-"),J("math", K, X, "⋅", "\\cdot", !0),J("math", K, X, "∘", "\\circ"),J("math", K, X, "÷", "\\div", !0),J("math", K, X, "±", "\\pm", !0),J("math", K, X, "×", "\\times", !0),J("math", K, X, "∩", "\\cap", !0),J("math", K, X, "∪", "\\cup", !0),J("math", K, X, "∖", "\\setminus"),J("math", K, X, "∧", "\\land"),J("math", K, X, "∨", "\\lor"),J("math", K, X, "∧", "\\wedge", !0),J("math", K, X, "∨", "\\vee", !0),J("math", K, "textord", "√", "\\surd"),J("math", K, "open", "(", "("),J("math", K, "open", "[", "["),J("math", K, "open", "⟨", "\\langle", !0),J("math", K, "open", "∣", "\\lvert"),J("math", K, "open", "∥", "\\lVert"),J("math", K, "close", ")", ")"),J("math", K, "close", "]", "]"),J("math", K, "close", "?", "?"),J("math", K, "close", "!", "!"),J("math", K, "close", "⟩", "\\rangle", !0),J("math", K, "close", "∣", "\\rvert"),J("math", K, "close", "∥", "\\rVert"),J("math", K, tt, "=", "="),J("math", K, tt, "<", "<"),J("math", K, tt, ">", ">"),J("math", K, tt, ":", ":"),J("math", K, tt, "≈", "\\approx", !0),J("math", K, tt, "≅", "\\cong", !0),J("math", K, tt, "≥", "\\ge"),J("math", K, tt, "≥", "\\geq", !0),J("math", K, tt, "←", "\\gets"),J("math", K, tt, ">", "\\gt"),J("math", K, tt, "∈", "\\in", !0),J("math", K, tt, "̸", "\\@not"),J("math", K, tt, "⊂", "\\subset", !0),J("math", K, tt, "⊃", "\\supset", !0),J("math", K, tt, "⊆", "\\subseteq", !0),J("math", K, tt, "⊇", "\\supseteq", !0),J("math", $, tt, "⊈", "\\nsubseteq", !0),J("math", $, tt, "⊉", "\\nsupseteq", !0),J("math", K, tt, "⊨", "\\models"),J("math", K, tt, "←", "\\leftarrow", !0),J("math", K, tt, "≤", "\\le"),J("math", K, tt, "≤", "\\leq", !0),J("math", K, tt, "<", "\\lt"),J("math", K, tt, "→", "\\rightarrow", !0),J("math", K, tt, "→", "\\to"),J("math", $, tt, "≱", "\\ngeq", !0),J("math", $, tt, "≰", "\\nleq", !0),J("math", K, et, " ", "\\ "),J("math", K, et, " ", "~"),J("math", K, et, " ", "\\space"),J("math", K, et, " ", "\\nobreakspace"),J("text", K, et, " ", "\\ "),J("text", K, et, " ", "~"),J("text", K, et, " ", "\\space"),J("text", K, et, " ", "\\nobreakspace"),J("math", K, et, null, "\\nobreak"),J("math", K, et, null, "\\allowbreak"),J("math", K, "punct", ",", ","),J("math", K, "punct", ";", ";"),J("math", $, X, "⊼", "\\barwedge", !0),J("math", $, X, "⊻", "\\veebar", !0),J("math", K, X, "⊙", "\\odot", !0),J("math", K, X, "⊕", "\\oplus", !0),J("math", K, X, "⊗", "\\otimes", !0),J("math", K, "textord", "∂", "\\partial", !0),J("math", K, X, "⊘", "\\oslash", !0),J("math", $, X, "⊚", "\\circledcirc", !0),J("math", $, X, "⊡", "\\boxdot", !0),J("math", K, X, "△", "\\bigtriangleup"),J("math", K, X, "▽", "\\bigtriangledown"),J("math", K, X, "†", "\\dagger"),J("math", K, X, "⋄", "\\diamond"),J("math", K, X, "⋆", "\\star"),J("math", K, X, "◃", "\\triangleleft"),J("math", K, X, "▹", "\\triangleright"),J("math", K, "open", "{", "\\{"),J("text", K, "textord", "{", "\\{"),J("text", K, "textord", "{", "\\textbraceleft"),J("math", K, "close", "}", "\\}"),J("text", K, "textord", "}", "\\}"),J("text", K, "textord", "}", "\\textbraceright"),J("math", K, "open", "{", "\\lbrace"),J("math", K, "close", "}", "\\rbrace"),J("math", K, "open", "[", "\\lbrack"),J("text", K, "textord", "[", "\\lbrack"),J("math", K, "close", "]", "\\rbrack"),J("text", K, "textord", "]", "\\rbrack"),J("math", K, "open", "(", "\\lparen"),J("math", K, "close", ")", "\\rparen"),J("text", K, "textord", "<", "\\textless"),J("text", K, "textord", ">", "\\textgreater"),J("math", K, "open", "⌊", "\\lfloor", !0),J("math", K, "close", "⌋", "\\rfloor", !0),J("math", K, "open", "⌈", "\\lceil", !0),J("math", K, "close", "⌉", "\\rceil", !0),J("math", K, "textord", "\\", "\\backslash"),J("math", K, "textord", "∣", "|"),J("math", K, "textord", "∣", "\\vert"),J("text", K, "textord", "|", "\\textbar"),J("math", K, "textord", "∥", "\\|"),J("math", K, "textord", "∥", "\\Vert"),J("text", K, "textord", "∥", "\\textbardbl"),J("text", K, "textord", "~", "\\textasciitilde"),J("math", K, tt, "↑", "\\uparrow", !0),J("math", K, tt, "⇑", "\\Uparrow", !0),J("math", K, tt, "↓", "\\downarrow", !0),J("math", K, tt, "⇓", "\\Downarrow", !0),J("math", K, tt, "↕", "\\updownarrow", !0),J("math", K, tt, "⇕", "\\Updownarrow", !0),J("math", K, Z, "∐", "\\coprod"),J("math", K, Z, "⋁", "\\bigvee"),J("math", K, Z, "⋀", "\\bigwedge"),J("math", K, Z, "⨄", "\\biguplus"),J("math", K, Z, "⋂", "\\bigcap"),J("math", K, Z, "⋃", "\\bigcup"),J("math", K, Z, "∫", "\\int"),J("math", K, Z, "∫", "\\intop"),J("math", K, Z, "∬", "\\iint"),J("math", K, Z, "∭", "\\iiint"),J("math", K, Z, "∏", "\\prod"),J("math", K, Z, "∑", "\\sum"),J("math", K, Z, "⨂", "\\bigotimes"),J("math", K, Z, "⨁", "\\bigoplus"),J("math", K, Z, "⨀", "\\bigodot"),J("math", K, Z, "∮", "\\oint"),J("math", K, Z, "∯", "\\oiint"),J("math", K, Z, "∰", "\\oiiint"),J("math", K, Z, "⨆", "\\bigsqcup"),J("math", K, Z, "∫", "\\smallint"),J("text", K, "inner", "…", "\\textellipsis"),J("math", K, "inner", "…", "\\mathellipsis"),J("text", K, "inner", "…", "\\ldots", !0),J("math", K, "inner", "…", "\\ldots", !0),J("math", K, "inner", "⋯", "\\@cdots", !0),J("math", K, "inner", "⋱", "\\ddots", !0),J("math", K, "textord", "⋮", "\\varvdots"),J("math", K, "accent-token", "ˊ", "\\acute"),J("math", K, "accent-token", "ˋ", "\\grave"),J("math", K, "accent-token", "¨", "\\ddot"),J("math", K, "accent-token", "~", "\\tilde"),J("math", K, "accent-token", "ˉ", "\\bar"),J("math", K, "accent-token", "˘", "\\breve"),J("math", K, "accent-token", "ˇ", "\\check"),J("math", K, "accent-token", "^", "\\hat"),J("math", K, "accent-token", "⃗", "\\vec"),J("math", K, "accent-token", "˙", "\\dot"),J("math", K, "accent-token", "˚", "\\mathring"),J("math", K, Q, "ı", "\\imath", !0),J("math", K, Q, "ȷ", "\\jmath", !0),J("text", K, "textord", "ı", "\\i", !0),J("text", K, "textord", "ȷ", "\\j", !0),J("text", K, "textord", "ß", "\\ss", !0),J("text", K, "textord", "æ", "\\ae", !0),J("text", K, "textord", "æ", "\\ae", !0),J("text", K, "textord", "œ", "\\oe", !0),J("text", K, "textord", "ø", "\\o", !0),J("text", K, "textord", "Æ", "\\AE", !0),J("text", K, "textord", "Œ", "\\OE", !0),J("text", K, "textord", "Ø", "\\O", !0),J("text", K, "accent-token", "ˊ", "\\'"),J("text", K, "accent-token", "ˋ", "\\`"),J("text", K, "accent-token", "ˆ", "\\^"),J("text", K, "accent-token", "˜", "\\~"),J("text", K, "accent-token", "ˉ", "\\="),J("text", K, "accent-token", "˘", "\\u"),J("text", K, "accent-token", "˙", "\\."),J("text", K, "accent-token", "˚", "\\r"),J("text", K, "accent-token", "ˇ", "\\v"),J("text", K, "accent-token", "¨", '\\"'),J("text", K, "accent-token", "˝", "\\H"),J("text", K, "accent-token", "◯", "\\textcircled");
        var rt = {"--": !0, "---": !0, "``": !0, "''": !0};
        J("text", K, "textord", "–", "--"), J("text", K, "textord", "–", "\\textendash"), J("text", K, "textord", "—", "---"), J("text", K, "textord", "—", "\\textemdash"), J("text", K, "textord", "‘", "`"), J("text", K, "textord", "‘", "\\textquoteleft"), J("text", K, "textord", "’", "'"), J("text", K, "textord", "’", "\\textquoteright"), J("text", K, "textord", "“", "``"), J("text", K, "textord", "“", "\\textquotedblleft"), J("text", K, "textord", "”", "''"), J("text", K, "textord", "”", "\\textquotedblright"), J("math", K, "textord", "°", "\\degree", !0), J("text", K, "textord", "°", "\\degree"), J("text", K, "textord", "°", "\\textdegree", !0), J("math", K, Q, "£", "\\pounds"), J("math", K, Q, "£", "\\mathsterling", !0), J("text", K, Q, "£", "\\pounds"), J("text", K, Q, "£", "\\textsterling", !0), J("math", $, "textord", "✠", "\\maltese"), J("text", $, "textord", "✠", "\\maltese"), J("text", K, et, " ", "\\ "), J("text", K, et, " ", " "), J("text", K, et, " ", "~");
        for (var nt = 0; nt < '0123456789/@."'.length; nt++) {
          var ot = '0123456789/@."'.charAt(nt);
          J("math", K, "textord", ot, ot)
        }
        for (var it = 0; it < '0123456789!@*()-=+[]<>|";:?/.,'.length; it++) {
          var at = '0123456789!@*()-=+[]<>|";:?/.,'.charAt(it);
          J("text", K, "textord", at, at)
        }
        for (var st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", ut = 0; ut < st.length; ut++) {
          var ct = st.charAt(ut);
          J("math", K, Q, ct, ct), J("text", K, "textord", ct, ct)
        }
        for (var lt = "", ht = 0; ht < st.length; ht++) {
          var mt = st.charAt(ht);
          J("math", K, Q, mt, lt = String.fromCharCode(55349, 56320 + ht)), J("text", K, "textord", mt, lt), J("math", K, Q, mt, lt = String.fromCharCode(55349, 56372 + ht)), J("text", K, "textord", mt, lt), J("math", K, Q, mt, lt = String.fromCharCode(55349, 56424 + ht)), J("text", K, "textord", mt, lt), J("math", K, Q, mt, lt = String.fromCharCode(55349, 56580 + ht)), J("text", K, "textord", mt, lt), J("math", K, Q, mt, lt = String.fromCharCode(55349, 56736 + ht)), J("text", K, "textord", mt, lt), J("math", K, Q, mt, lt = String.fromCharCode(55349, 56788 + ht)), J("text", K, "textord", mt, lt), J("math", K, Q, mt, lt = String.fromCharCode(55349, 56840 + ht)), J("text", K, "textord", mt, lt), J("math", K, Q, mt, lt = String.fromCharCode(55349, 56944 + ht)), J("text", K, "textord", mt, lt), ht < 26 && (J("math", K, Q, mt, lt = String.fromCharCode(55349, 56632 + ht)), J("text", K, "textord", mt, lt), J("math", K, Q, mt, lt = String.fromCharCode(55349, 56476 + ht)), J("text", K, "textord", mt, lt))
        }
        J("math", K, Q, "k", lt = String.fromCharCode(55349, 56668)), J("text", K, "textord", "k", lt);
        for (var ft = 0; ft < 10; ft++) {
          var pt = ft.toString();
          J("math", K, Q, pt, lt = String.fromCharCode(55349, 57294 + ft)), J("text", K, "textord", pt, lt), J("math", K, Q, pt, lt = String.fromCharCode(55349, 57314 + ft)), J("text", K, "textord", pt, lt), J("math", K, Q, pt, lt = String.fromCharCode(55349, 57324 + ft)), J("text", K, "textord", pt, lt), J("math", K, Q, pt, lt = String.fromCharCode(55349, 57334 + ft)), J("text", K, "textord", pt, lt)
        }
        for (var dt = 0; dt < "ÇÐÞçþ".length; dt++) {
          var gt = "ÇÐÞçþ".charAt(dt);
          J("math", K, Q, gt, gt), J("text", K, "textord", gt, gt)
        }
        J("text", K, "textord", "ð", "ð"), J("text", K, "textord", "–", "–"), J("text", K, "textord", "—", "—"), J("text", K, "textord", "‘", "‘"), J("text", K, "textord", "’", "’"), J("text", K, "textord", "“", "“"), J("text", K, "textord", "”", "”");
        var vt = [["mathbf", "textbf", "Main-Bold"], ["mathbf", "textbf", "Main-Bold"], ["mathdefault", "textit", "Math-Italic"], ["mathdefault", "textit", "Math-Italic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["boldsymbol", "boldsymbol", "Main-BoldItalic"], ["mathscr", "textscr", "Script-Regular"], ["", "", ""], ["", "", ""], ["", "", ""], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathfrak", "textfrak", "Fraktur-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["mathbb", "textbb", "AMS-Regular"], ["", "", ""], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["mathitsf", "textitsf", "SansSerif-Italic"], ["", "", ""], ["", "", ""], ["mathtt", "texttt", "Typewriter-Regular"], ["mathtt", "texttt", "Typewriter-Regular"]],
          yt = [["mathbf", "textbf", "Main-Bold"], ["", "", ""], ["mathsf", "textsf", "SansSerif-Regular"], ["mathboldsf", "textboldsf", "SansSerif-Bold"], ["mathtt", "texttt", "Typewriter-Regular"]],
          bt = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]],
          _t = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], xt = function (t, e) {
            return e.size < 2 ? t : bt[t - 1][e.size - 1]
          }, wt = function () {
            function t(e) {
              this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || t.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = _t[this.size - 1], this.maxSize = e.maxSize, this._fontMetrics = void 0
            }

            var e = t.prototype;
            return e.extend = function (e) {
              var r = {
                style: this.style,
                size: this.size,
                textSize: this.textSize,
                color: this.color,
                phantom: this.phantom,
                font: this.font,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontShape: this.fontShape,
                maxSize: this.maxSize
              };
              for (var n in e) e.hasOwnProperty(n) && (r[n] = e[n]);
              return new t(r)
            }, e.havingStyle = function (t) {
              return this.style === t ? this : this.extend({style: t, size: xt(this.textSize, t)})
            }, e.havingCrampedStyle = function () {
              return this.havingStyle(this.style.cramp())
            }, e.havingSize = function (t) {
              return this.size === t && this.textSize === t ? this : this.extend({
                style: this.style.text(),
                size: t,
                textSize: t,
                sizeMultiplier: _t[t - 1]
              })
            }, e.havingBaseStyle = function (e) {
              e = e || this.style.text();
              var r = xt(t.BASESIZE, e);
              return this.size === r && this.textSize === t.BASESIZE && this.style === e ? this : this.extend({
                style: e,
                size: r
              })
            }, e.havingBaseSizing = function () {
              var t;
              switch (this.style.id) {
                case 4:
                case 5:
                  t = 3;
                  break;
                case 6:
                case 7:
                  t = 1;
                  break;
                default:
                  t = 6
              }
              return this.extend({style: this.style.text(), size: t})
            }, e.withColor = function (t) {
              return this.extend({color: t})
            }, e.withPhantom = function () {
              return this.extend({phantom: !0})
            }, e.withFont = function (t) {
              return this.extend({font: t})
            }, e.withTextFontFamily = function (t) {
              return this.extend({fontFamily: t, font: ""})
            }, e.withTextFontWeight = function (t) {
              return this.extend({fontWeight: t, font: ""})
            }, e.withTextFontShape = function (t) {
              return this.extend({fontShape: t, font: ""})
            }, e.sizingClasses = function (t) {
              return t.size !== this.size ? ["sizing", "reset-size" + t.size, "size" + this.size] : []
            }, e.baseSizingClasses = function () {
              return this.size !== t.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + t.BASESIZE] : []
            }, e.fontMetrics = function () {
              return this._fontMetrics || (this._fontMetrics = function (t) {
                var e;
                if (!H[e = t >= 5 ? 0 : t >= 3 ? 1 : 2]) {
                  var r = H[e] = {cssEmPerMu: U.quad[e] / 18};
                  for (var n in U) U.hasOwnProperty(n) && (r[n] = U[n][e])
                }
                return H[e]
              }(this.size)), this._fontMetrics
            }, e.getColor = function () {
              return this.phantom ? "transparent" : null != this.color && t.colorMap.hasOwnProperty(this.color) ? t.colorMap[this.color] : this.color
            }, t
          }();
        wt.BASESIZE = 6, wt.colorMap = {
          "katex-blue": "#6495ed",
          "katex-orange": "#ffa500",
          "katex-pink": "#ff00af",
          "katex-red": "#df0030",
          "katex-green": "#28ae7b",
          "katex-gray": "gray",
          "katex-purple": "#9d38bd",
          "katex-blueA": "#ccfaff",
          "katex-blueB": "#80f6ff",
          "katex-blueC": "#63d9ea",
          "katex-blueD": "#11accd",
          "katex-blueE": "#0c7f99",
          "katex-tealA": "#94fff5",
          "katex-tealB": "#26edd5",
          "katex-tealC": "#01d1c1",
          "katex-tealD": "#01a995",
          "katex-tealE": "#208170",
          "katex-greenA": "#b6ffb0",
          "katex-greenB": "#8af281",
          "katex-greenC": "#74cf70",
          "katex-greenD": "#1fab54",
          "katex-greenE": "#0d923f",
          "katex-goldA": "#ffd0a9",
          "katex-goldB": "#ffbb71",
          "katex-goldC": "#ff9c39",
          "katex-goldD": "#e07d10",
          "katex-goldE": "#a75a05",
          "katex-redA": "#fca9a9",
          "katex-redB": "#ff8482",
          "katex-redC": "#f9685d",
          "katex-redD": "#e84d39",
          "katex-redE": "#bc2612",
          "katex-maroonA": "#ffbde0",
          "katex-maroonB": "#ff92c6",
          "katex-maroonC": "#ed5fa6",
          "katex-maroonD": "#ca337c",
          "katex-maroonE": "#9e034e",
          "katex-purpleA": "#ddd7ff",
          "katex-purpleB": "#c6b9fc",
          "katex-purpleC": "#aa87ff",
          "katex-purpleD": "#7854ab",
          "katex-purpleE": "#543b78",
          "katex-mintA": "#f5f9e8",
          "katex-mintB": "#edf2df",
          "katex-mintC": "#e0e5cc",
          "katex-grayA": "#f6f7f7",
          "katex-grayB": "#f0f1f2",
          "katex-grayC": "#e3e5e6",
          "katex-grayD": "#d6d8da",
          "katex-grayE": "#babec2",
          "katex-grayF": "#888d93",
          "katex-grayG": "#626569",
          "katex-grayH": "#3b3e40",
          "katex-grayI": "#21242c",
          "katex-kaBlue": "#314453",
          "katex-kaGreen": "#71B307"
        };
        var St = wt, kt = {
            pt: 1,
            mm: 7227 / 2540,
            cm: 7227 / 254,
            in: 72.27,
            bp: 1.00375,
            pc: 12,
            dd: 1238 / 1157,
            cc: 14856 / 1157,
            nd: 685 / 642,
            nc: 1370 / 107,
            sp: 1 / 65536,
            px: 1.00375
          }, Tt = {ex: !0, em: !0, mu: !0}, Mt = function (t, e) {
            var r;
            if (t.unit in kt) r = kt[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier; else if ("mu" === t.unit) r = e.fontMetrics().cssEmPerMu; else {
              var n;
              if (n = e.style.isTight() ? e.havingStyle(e.style.text()) : e, "ex" === t.unit) r = n.fontMetrics().xHeight; else {
                if ("em" !== t.unit) throw new a("Invalid unit: '" + t.unit + "'");
                r = n.fontMetrics().quad
              }
              n !== e && (r *= n.sizeMultiplier / e.sizeMultiplier)
            }
            return Math.min(t.number * r, e.maxSize)
          }, At = ["\\imath", "ı", "\\jmath", "ȷ", "\\pounds", "\\mathsterling", "\\textsterling", "£"],
          Ct = function (t, e, r) {
            return Y[r][t] && Y[r][t].replace && (t = Y[r][t].replace), {value: t, metrics: q(t, e, r)}
          }, Pt = function (t, e, r, n, o) {
            var i, a = Ct(t, e, r), s = a.metrics;
            if (t = a.value, s) {
              var u = s.italic;
              ("text" === r || n && "mathit" === n.font) && (u = 0), i = new D(t, s.height, s.depth, u, s.skew, s.width, o)
            } else "undefined" != typeof console && console.warn("No character metrics for '" + t + "' in style '" + e + "'"), i = new D(t, 0, 0, 0, 0, 0, o);
            if (n) {
              i.maxFontSize = n.sizeMultiplier, n.style.isTight() && i.classes.push("mtight");
              var c = n.getColor();
              c && (i.style.color = c)
            }
            return i
          }, Ot = function (t, e) {
            if (C(t.classes) !== C(e.classes) || t.skew !== e.skew || t.maxFontSize !== e.maxFontSize) return !1;
            for (var r in t.style) if (t.style.hasOwnProperty(r) && t.style[r] !== e.style[r]) return !1;
            for (var n in e.style) if (e.style.hasOwnProperty(n) && t.style[n] !== e.style[n]) return !1;
            return !0
          }, Et = function (t) {
            for (var e = 0, r = 0, n = 0, o = 0; o < t.children.length; o++) {
              var i = t.children[o];
              i.height > e && (e = i.height), i.depth > r && (r = i.depth), i.maxFontSize > n && (n = i.maxFontSize)
            }
            t.height = e, t.depth = r, t.maxFontSize = n
          }, zt = function (t, e, r, n) {
            var o = new z(t, e, r, n);
            return Et(o), o
          }, It = function (t, e, r, n) {
            return new z(t, e, r, n)
          }, Nt = function (t) {
            var e = new A(t);
            return Et(e), e
          }, Dt = function (t, e, r) {
            var n = "";
            switch (t) {
              case"amsrm":
                n = "AMS";
                break;
              case"textrm":
                n = "Main";
                break;
              case"textsf":
                n = "SansSerif";
                break;
              case"texttt":
                n = "Typewriter";
                break;
              default:
                n = t
            }
            return n + "-" + ("textbf" === e && "textit" === r ? "BoldItalic" : "textbf" === e ? "Bold" : "textit" === e ? "Italic" : "Regular")
          }, Lt = {
            mathbf: {variant: "bold", fontName: "Main-Bold"},
            mathrm: {variant: "normal", fontName: "Main-Regular"},
            textit: {variant: "italic", fontName: "Main-Italic"},
            mathit: {variant: "italic", fontName: "Main-Italic"},
            mathbb: {variant: "double-struck", fontName: "AMS-Regular"},
            mathcal: {variant: "script", fontName: "Caligraphic-Regular"},
            mathfrak: {variant: "fraktur", fontName: "Fraktur-Regular"},
            mathscr: {variant: "script", fontName: "Script-Regular"},
            mathsf: {variant: "sans-serif", fontName: "SansSerif-Regular"},
            mathtt: {variant: "monospace", fontName: "Typewriter-Regular"}
          }, Rt = {
            vec: ["vec", .471, .714],
            oiintSize1: ["oiintSize1", .957, .499],
            oiintSize2: ["oiintSize2", 1.472, .659],
            oiiintSize1: ["oiiintSize1", 1.304, .499],
            oiiintSize2: ["oiiintSize2", 1.98, .659]
          }, Ft = {
            fontMap: Lt, makeSymbol: Pt, mathsym: function (t, e, r, n) {
              return void 0 === n && (n = []), r && r.font && "boldsymbol" === r.font && Ct(t, "Main-Bold", e).metrics ? Pt(t, "Main-Bold", e, r, n.concat(["mathbf"])) : "\\" === t || "main" === Y[e][t].font ? Pt(t, "Main-Regular", e, r, n) : Pt(t, "AMS-Regular", e, r, n.concat(["amsrm"]))
            }, makeSpan: zt, makeSvgSpan: It, makeLineSpan: function (t, e, r) {
              var n = zt([t], [], e);
              return n.height = r || e.fontMetrics().defaultRuleThickness, n.style.borderBottomWidth = n.height + "em", n.maxFontSize = 1, n
            }, makeAnchor: function (t, e, r, n) {
              var o = new I(t, e, r, n);
              return Et(o), o
            }, makeFragment: Nt, wrapFragment: function (t, e) {
              return t instanceof A ? zt([], [t], e) : t
            }, makeVList: function (t, e) {
              for (var r = function (t) {
                if ("individualShift" === t.positionType) {
                  for (var e = t.children, r = [e[0]], n = -e[0].shift - e[0].elem.depth, o = n, i = 1; i < e.length; i++) {
                    var a = -e[i].shift - o - e[i].elem.depth, s = a - (e[i - 1].elem.height + e[i - 1].elem.depth);
                    o += a, r.push({type: "kern", size: s}), r.push(e[i])
                  }
                  return {children: r, depth: n}
                }
                var u;
                if ("top" === t.positionType) {
                  for (var c = t.positionData, l = 0; l < t.children.length; l++) {
                    var h = t.children[l];
                    c -= "kern" === h.type ? h.size : h.elem.height + h.elem.depth
                  }
                  u = c
                } else if ("bottom" === t.positionType) u = -t.positionData; else {
                  var m = t.children[0];
                  if ("elem" !== m.type) throw new Error('First child must have type "elem".');
                  if ("shift" === t.positionType) u = -m.elem.depth - t.positionData; else {
                    if ("firstBaseline" !== t.positionType) throw new Error("Invalid positionType " + t.positionType + ".");
                    u = -m.elem.depth
                  }
                }
                return {children: t.children, depth: u}
              }(t), n = r.children, o = r.depth, i = 0, a = 0; a < n.length; a++) {
                var s = n[a];
                if ("elem" === s.type) {
                  var u = s.elem;
                  i = Math.max(i, u.maxFontSize, u.height)
                }
              }
              i += 2;
              var c = zt(["pstrut"], []);
              c.style.height = i + "em";
              for (var l = [], h = o, m = o, f = o, p = 0; p < n.length; p++) {
                var d = n[p];
                if ("kern" === d.type) f += d.size; else {
                  var g = d.elem, v = d.wrapperClasses || [], y = d.wrapperStyle || {}, b = zt(v, [c, g], void 0, y);
                  b.style.top = -i - f - g.depth + "em", d.marginLeft && (b.style.marginLeft = d.marginLeft), d.marginRight && (b.style.marginRight = d.marginRight), l.push(b), f += g.height + g.depth
                }
                h = Math.min(h, f), m = Math.max(m, f)
              }
              var _, x = zt(["vlist"], l);
              if (x.style.height = m + "em", h < 0) {
                var w = zt([], []), S = zt(["vlist"], [w]);
                S.style.height = -h + "em";
                var k = zt(["vlist-s"], [new D("​")]);
                _ = [zt(["vlist-r"], [x, k]), zt(["vlist-r"], [S])]
              } else _ = [zt(["vlist-r"], [x])];
              var T = zt(["vlist-t"], _);
              return 2 === _.length && T.classes.push("vlist-t2"), T.height = m, T.depth = -h, T
            }, makeOrd: function (t, e, r) {
              var n = t.mode, o = t.text, i = ["mord"], s = "math" === n || "text" === n && e.font,
                u = s ? e.font : e.fontFamily;
              if (55349 === o.charCodeAt(0)) {
                var c = function (t, e) {
                  var r = 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536, n = "math" === e ? 0 : 1;
                  if (119808 <= r && r < 120484) {
                    var o = Math.floor((r - 119808) / 26);
                    return [vt[o][2], vt[o][n]]
                  }
                  if (120782 <= r && r <= 120831) {
                    var i = Math.floor((r - 120782) / 10);
                    return [yt[i][2], yt[i][n]]
                  }
                  if (120485 === r || 120486 === r) return [vt[0][2], vt[0][n]];
                  if (120486 < r && r < 120782) return ["", ""];
                  throw new a("Unsupported character: " + t)
                }(o, n), l = c[0], h = c[1];
                return Pt(o, l, n, e, i.concat(h))
              }
              if (u) {
                var f, p;
                if ("boldsymbol" === u || "mathnormal" === u) {
                  var d = "boldsymbol" === u ? function (t, e, r, n) {
                    return Ct(t, "Math-BoldItalic", e).metrics ? {
                      fontName: "Math-BoldItalic",
                      fontClass: "boldsymbol"
                    } : {fontName: "Main-Bold", fontClass: "mathbf"}
                  }(o, n) : function (t, e, r, n) {
                    return m.contains(At, t) ? {
                      fontName: "Main-Italic",
                      fontClass: "mathit"
                    } : /[0-9]/.test(t.charAt(0)) ? {
                      fontName: "Caligraphic-Regular",
                      fontClass: "mathcal"
                    } : {fontName: "Math-Italic", fontClass: "mathdefault"}
                  }(o);
                  f = d.fontName, p = [d.fontClass]
                } else m.contains(At, o) ? (f = "Main-Italic", p = ["mathit"]) : s ? (f = Lt[u].fontName, p = [u]) : (f = Dt(u, e.fontWeight, e.fontShape), p = [u, e.fontWeight, e.fontShape]);
                if (Ct(o, f, n).metrics) return Pt(o, f, n, e, i.concat(p));
                if (rt.hasOwnProperty(o) && "Typewriter" === f.substr(0, 10)) {
                  for (var g = [], v = 0; v < o.length; v++) g.push(Pt(o[v], f, n, e, i.concat(p)));
                  return Nt(g)
                }
              }
              if ("mathord" === r) {
                var y = function (t, e, r, n) {
                  return /[0-9]/.test(t.charAt(0)) || m.contains(At, t) ? {
                    fontName: "Main-Italic",
                    fontClass: "mathit"
                  } : {fontName: "Math-Italic", fontClass: "mathdefault"}
                }(o);
                return Pt(o, y.fontName, n, e, i.concat([y.fontClass]))
              }
              if ("textord" === r) {
                var b = Y[n][o] && Y[n][o].font;
                if ("ams" === b) {
                  var _ = Dt("amsrm", e.fontWeight, e.fontShape);
                  return Pt(o, _, n, e, i.concat("amsrm", e.fontWeight, e.fontShape))
                }
                if ("main" !== b && b) {
                  var x = Dt(b, e.fontWeight, e.fontShape);
                  return Pt(o, x, n, e, i.concat(x, e.fontWeight, e.fontShape))
                }
                var w = Dt("textrm", e.fontWeight, e.fontShape);
                return Pt(o, w, n, e, i.concat(e.fontWeight, e.fontShape))
              }
              throw new Error("unexpected type: " + r + " in makeOrd")
            }, makeGlue: function (t, e) {
              var r = zt(["mspace"], [], e), n = Mt(t, e);
              return r.style.marginRight = n + "em", r
            }, staticSvg: function (t, e) {
              var r = Rt[t], n = r[0], o = r[1], i = r[2], a = new R(n), s = new L([a], {
                width: o + "em",
                height: i + "em",
                style: "width:" + o + "em",
                viewBox: "0 0 " + 1e3 * o + " " + 1e3 * i,
                preserveAspectRatio: "xMinYMin"
              }), u = It(["overlay"], [s], e);
              return u.height = i, u.style.height = i + "em", u.style.width = o + "em", u
            }, svgData: Rt, tryCombineChars: function (t) {
              for (var e = 0; e < t.length - 1; e++) {
                var r = t[e], n = t[e + 1];
                r instanceof D && n instanceof D && Ot(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, t.splice(e + 1, 1), e--)
              }
              return t
            }
          };

        function Bt(t, e) {
          var r = Ut(t, e);
          if (!r) throw new Error("Expected node of type " + e + ", but got " + (t ? "node of type " + t.type : String(t)));
          return r
        }

        function Ut(t, e) {
          return t && t.type === e ? t : null
        }

        function jt(t, e) {
          var r = function (t, e) {
            return t && "atom" === t.type && t.family === e ? t : null
          }(t, e);
          if (!r) throw new Error('Expected node of type "atom" and family "' + e + '", but got ' + (t ? "atom" === t.type ? "atom of family " + t.family : "node of type " + t.type : String(t)));
          return r
        }

        function qt(t) {
          return t && ("atom" === t.type || V.hasOwnProperty(t.type)) ? t : null
        }

        var Ht = {number: 3, unit: "mu"}, Wt = {number: 4, unit: "mu"}, Vt = {number: 5, unit: "mu"}, Gt = {
          mord: {mop: Ht, mbin: Wt, mrel: Vt, minner: Ht},
          mop: {mord: Ht, mop: Ht, mrel: Vt, minner: Ht},
          mbin: {mord: Wt, mop: Wt, mopen: Wt, minner: Wt},
          mrel: {mord: Vt, mop: Vt, mopen: Vt, minner: Vt},
          mopen: {},
          mclose: {mop: Ht, mbin: Wt, mrel: Vt, minner: Ht},
          mpunct: {mord: Ht, mop: Ht, mrel: Vt, mopen: Ht, mclose: Ht, mpunct: Ht, minner: Ht},
          minner: {mord: Ht, mop: Ht, mbin: Wt, mrel: Vt, mopen: Ht, mpunct: Ht, minner: Ht}
        }, Yt = {
          mord: {mop: Ht},
          mop: {mord: Ht, mop: Ht},
          mbin: {},
          mrel: {},
          mopen: {},
          mclose: {mop: Ht},
          mpunct: {},
          minner: {mop: Ht}
        }, Jt = {}, Kt = {}, $t = {};

        function Xt(t) {
          for (var e = t.type, r = (t.nodeType, t.names), n = t.props, o = t.handler, i = t.htmlBuilder, a = t.mathmlBuilder, s = {
            type: e,
            numArgs: n.numArgs,
            argTypes: n.argTypes,
            greediness: void 0 === n.greediness ? 1 : n.greediness,
            allowedInText: !!n.allowedInText,
            allowedInMath: void 0 === n.allowedInMath || n.allowedInMath,
            numOptionalArgs: n.numOptionalArgs || 0,
            infix: !!n.infix,
            consumeMode: n.consumeMode,
            handler: o
          }, u = 0; u < r.length; ++u) Jt[r[u]] = s;
          e && (i && (Kt[e] = i), a && ($t[e] = a))
        }

        function Qt(t) {
          Xt({
            type: t.type, names: [], props: {numArgs: 0}, handler: function () {
              throw new Error("Should never be called.")
            }, htmlBuilder: t.htmlBuilder, mathmlBuilder: t.mathmlBuilder
          })
        }

        var Zt = function (t) {
          var e = Ut(t, "ordgroup");
          return e ? e.body : [t]
        }, te = Ft.makeSpan, ee = function (t, e) {
          return t ? m.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], se(t, "right")) : e
        }, re = function (t, e) {
          return t ? m.contains(["mrel", "mclose", "mpunct"], se(t, "left")) : e
        }, ne = {display: w.DISPLAY, text: w.TEXT, script: w.SCRIPT, scriptscript: w.SCRIPTSCRIPT}, oe = {
          mord: "mord",
          mop: "mop",
          mbin: "mbin",
          mrel: "mrel",
          mopen: "mopen",
          mclose: "mclose",
          mpunct: "mpunct",
          minner: "minner"
        }, ie = function (t, e, r, n) {
          void 0 === n && (n = [null, null]);
          for (var o = [], i = 0; i < t.length; i++) {
            var a = le(t[i], e);
            if (a instanceof A) {
              var s = a.children;
              o.push.apply(o, s)
            } else o.push(a)
          }
          for (var u = [n[0] ? te([n[0]], [], e) : null].concat(o.filter(function (t) {
            return t && "mspace" !== t.classes[0]
          }), [n[1] ? te([n[1]], [], e) : null]), c = 1; c < u.length - 1; c++) {
            var l = h(u[c]), m = ae(l, "left");
            "mbin" === m.classes[0] && ee(u[c - 1], r) && (m.classes[0] = "mord");
            var f = ae(l, "right");
            "mbin" === f.classes[0] && re(u[c + 1], r) && (f.classes[0] = "mord")
          }
          for (var p = [], d = 0, g = 0; g < o.length; g++) if (p.push(o[g]), "mspace" !== o[g].classes[0] && d < u.length - 1) {
            0 === d && (p.pop(), g--);
            var v = se(u[d], "right"), y = se(u[d + 1], "left");
            if (v && y && r) {
              var b = h(u[d + 1]), _ = ue(b) ? Yt[v][y] : Gt[v][y];
              if (_) {
                var x = e;
                if (1 === t.length) {
                  var w = Ut(t[0], "sizing") || Ut(t[0], "styling");
                  w && ("sizing" === w.type ? x = e.havingSize(w.size) : "styling" === w.type && (x = e.havingStyle(ne[w.style])))
                }
                p.push(Ft.makeGlue(_, x))
              }
            }
            d++
          }
          return p
        }, ae = function t(e, r) {
          if (e instanceof A || e instanceof I) {
            var n = e.children;
            if (n.length) {
              if ("right" === r) return t(n[n.length - 1], "right");
              if ("left" === r) return t(n[0], "right")
            }
          }
          return e
        }, se = function (t, e) {
          return t ? (t = ae(t, e), oe[t.classes[0]] || null) : null
        }, ue = function (t) {
          return (t = ae(t, "left")).hasClass("mtight")
        }, ce = function (t, e) {
          var r = ["nulldelimiter"].concat(t.baseSizingClasses());
          return te(e.concat(r))
        }, le = function (t, e, r) {
          if (!t) return te();
          if (Kt[t.type]) {
            var n = Kt[t.type](t, e);
            if (r && e.size !== r.size) {
              n = te(e.sizingClasses(r), [n], e);
              var o = e.sizeMultiplier / r.sizeMultiplier;
              n.height *= o, n.depth *= o
            }
            return n
          }
          throw new a("Got group of unknown type: '" + t.type + "'")
        };

        function he(t, e) {
          var r = te(["base"], t, e), n = te(["strut"]);
          return n.style.height = r.height + r.depth + "em", n.style.verticalAlign = -r.depth + "em", r.children.unshift(n), r
        }

        function me(t, e) {
          var r = null;
          1 === t.length && "tag" === t[0].type && (r = t[0].tag, t = t[0].body);
          for (var n, o = ie(t, e, !0), i = [], a = [], s = 0; s < o.length; s++) if (a.push(o[s]), o[s].hasClass("mbin") || o[s].hasClass("mrel") || o[s].hasClass("allowbreak")) {
            for (var u = !1; s < o.length - 1 && o[s + 1].hasClass("mspace");) s++, a.push(o[s]), o[s].hasClass("nobreak") && (u = !0);
            u || (i.push(he(a, e)), a = [])
          } else o[s].hasClass("newline") && (a.pop(), a.length > 0 && (i.push(he(a, e)), a = []), i.push(o[s]));
          a.length > 0 && i.push(he(a, e)), r && ((n = he(ie(r, e, !0))).classes = ["tag"], i.push(n));
          var c = te(["katex-html"], i);
          if (c.setAttribute("aria-hidden", "true"), n) {
            var l = n.children[0];
            l.style.height = c.height + c.depth + "em", l.style.verticalAlign = -c.depth + "em"
          }
          return c
        }

        function fe(t) {
          return new A(t)
        }

        var pe = function () {
          function t(t, e) {
            this.type = void 0, this.attributes = void 0, this.children = void 0, this.type = t, this.attributes = {}, this.children = e || []
          }

          var e = t.prototype;
          return e.setAttribute = function (t, e) {
            this.attributes[t] = e
          }, e.getAttribute = function (t) {
            return this.attributes[t]
          }, e.toNode = function () {
            var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
            for (var e in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, e) && t.setAttribute(e, this.attributes[e]);
            for (var r = 0; r < this.children.length; r++) t.appendChild(this.children[r].toNode());
            return t
          }, e.toMarkup = function () {
            var t = "<" + this.type;
            for (var e in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, e) && (t += " " + e + '="', t += m.escape(this.attributes[e]), t += '"');
            t += ">";
            for (var r = 0; r < this.children.length; r++) t += this.children[r].toMarkup();
            return t += "</" + this.type + ">"
          }, e.toText = function () {
            return this.children.map(function (t) {
              return t.toText()
            }).join("")
          }, t
        }(), de = function () {
          function t(t, e) {
            void 0 === e && (e = !0), this.text = void 0, this.needsEscape = void 0, this.text = t, this.needsEscape = e
          }

          var e = t.prototype;
          return e.toNode = function () {
            return document.createTextNode(this.toText())
          }, e.toMarkup = function () {
            return this.toText()
          }, e.toText = function () {
            return this.needsEscape ? m.escape(this.text) : this.text
          }, t
        }(), ge = {
          MathNode: pe, TextNode: de, SpaceNode: function () {
            function t(t) {
              this.width = void 0, this.character = void 0, this.width = t, this.character = t >= .05555 && t <= .05556 ? "&VeryThinSpace;" : t >= .1666 && t <= .1667 ? "&ThinSpace;" : t >= .2222 && t <= .2223 ? "&MediumSpace;" : t >= .2777 && t <= .2778 ? "&ThickSpace;" : t >= -.05556 && t <= -.05555 ? "&NegativeVeryThinSpace;" : t >= -.1667 && t <= -.1666 ? "&NegativeThinSpace;" : t >= -.2223 && t <= -.2222 ? "&NegativeMediumSpace;" : t >= -.2778 && t <= -.2777 ? "&NegativeThickSpace;" : null
            }

            var e = t.prototype;
            return e.toNode = function () {
              if (this.character) return document.createTextNode(this.character);
              var t = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
              return t.setAttribute("width", this.width + "em"), t
            }, e.toMarkup = function () {
              return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + this.width + 'em"/>'
            }, e.toText = function () {
              return this.character ? this.character : " "
            }, t
          }(), newDocumentFragment: fe
        }, ve = function (t, e, r) {
          return !Y[e][t] || !Y[e][t].replace || 55349 === t.charCodeAt(0) || rt.hasOwnProperty(t) && r && (r.fontFamily && "tt" === r.fontFamily.substr(4, 2) || r.font && "tt" === r.font.substr(4, 2)) || (t = Y[e][t].replace), new ge.TextNode(t)
        }, ye = function (t) {
          return 1 === t.length ? t[0] : new ge.MathNode("mrow", t)
        }, be = function (t, e) {
          if ("texttt" === e.fontFamily) return "monospace";
          if ("textsf" === e.fontFamily) return "textit" === e.fontShape && "textbf" === e.fontWeight ? "sans-serif-bold-italic" : "textit" === e.fontShape ? "sans-serif-italic" : "textbf" === e.fontWeight ? "bold-sans-serif" : "sans-serif";
          if ("textit" === e.fontShape && "textbf" === e.fontWeight) return "bold-italic";
          if ("textit" === e.fontShape) return "italic";
          if ("textbf" === e.fontWeight) return "bold";
          var r = e.font;
          if (!r || "mathnormal" === r) return null;
          var n = t.mode;
          if ("mathit" === r) return "italic";
          if ("boldsymbol" === r) return "bold-italic";
          var o = t.text;
          return m.contains(["\\imath", "\\jmath"], o) ? null : (Y[n][o] && Y[n][o].replace && (o = Y[n][o].replace), q(o, Ft.fontMap[r].fontName, n) ? Ft.fontMap[r].variant : null)
        }, _e = function (t, e) {
          for (var r, n = [], o = 0; o < t.length; o++) {
            var i = we(t[o], e);
            if (i instanceof pe && r instanceof pe) {
              if ("mtext" === i.type && "mtext" === r.type && i.getAttribute("mathvariant") === r.getAttribute("mathvariant")) {
                var a;
                (a = r.children).push.apply(a, i.children);
                continue
              }
              if ("mn" === i.type && "mn" === r.type) {
                var s;
                (s = r.children).push.apply(s, i.children);
                continue
              }
              if ("mi" === i.type && 1 === i.children.length && "mn" === r.type) {
                var u = i.children[0];
                if (u instanceof de && "." === u.text) {
                  var c;
                  (c = r.children).push.apply(c, i.children);
                  continue
                }
              }
            }
            n.push(i), r = i
          }
          return n
        }, xe = function (t, e) {
          return ye(_e(t, e))
        }, we = function (t, e) {
          if (!t) return new ge.MathNode("mrow");
          if ($t[t.type]) return $t[t.type](t, e);
          throw new a("Got group of unknown type: '" + t.type + "'")
        };
        var Se = function (t) {
            return new St({style: t.displayMode ? w.DISPLAY : w.TEXT, maxSize: t.maxSize})
          }, ke = function (t, e, r) {
            var n = Se(r), o = function (t, e, r) {
              var n, o = _e(t, r);
              n = 1 === o.length && o[0] instanceof pe && m.contains(["mrow", "mtable"], o[0].type) ? o[0] : new ge.MathNode("mrow", o);
              var i = new ge.MathNode("annotation", [new ge.TextNode(e)]);
              i.setAttribute("encoding", "application/x-tex");
              var a = new ge.MathNode("semantics", [n, i]), s = new ge.MathNode("math", [a]);
              return Ft.makeSpan(["katex-mathml"], [s])
            }(t, e, n), i = me(t, n), a = Ft.makeSpan(["katex"], [o, i]);
            return r.displayMode ? Ft.makeSpan(["katex-display"], [a]) : a
          }, Te = {
            widehat: "^",
            widecheck: "ˇ",
            widetilde: "~",
            utilde: "~",
            overleftarrow: "←",
            underleftarrow: "←",
            xleftarrow: "←",
            overrightarrow: "→",
            underrightarrow: "→",
            xrightarrow: "→",
            underbrace: "⎵",
            overbrace: "⏞",
            overleftrightarrow: "↔",
            underleftrightarrow: "↔",
            xleftrightarrow: "↔",
            Overrightarrow: "⇒",
            xRightarrow: "⇒",
            overleftharpoon: "↼",
            xleftharpoonup: "↼",
            overrightharpoon: "⇀",
            xrightharpoonup: "⇀",
            xLeftarrow: "⇐",
            xLeftrightarrow: "⇔",
            xhookleftarrow: "↩",
            xhookrightarrow: "↪",
            xmapsto: "↦",
            xrightharpoondown: "⇁",
            xleftharpoondown: "↽",
            xrightleftharpoons: "⇌",
            xleftrightharpoons: "⇋",
            xtwoheadleftarrow: "↞",
            xtwoheadrightarrow: "↠",
            xlongequal: "=",
            xtofrom: "⇄",
            xrightleftarrows: "⇄",
            xrightequilibrium: "⇌",
            xleftequilibrium: "⇋"
          }, Me = {
            overrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
            overleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
            underrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
            underleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
            xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
            xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
            Overrightarrow: [["doublerightarrow"], .888, 560, "xMaxYMin"],
            xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
            xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
            overleftharpoon: [["leftharpoon"], .888, 522, "xMinYMin"],
            xleftharpoonup: [["leftharpoon"], .888, 522, "xMinYMin"],
            xleftharpoondown: [["leftharpoondown"], .888, 522, "xMinYMin"],
            overrightharpoon: [["rightharpoon"], .888, 522, "xMaxYMin"],
            xrightharpoonup: [["rightharpoon"], .888, 522, "xMaxYMin"],
            xrightharpoondown: [["rightharpoondown"], .888, 522, "xMaxYMin"],
            xlongequal: [["longequal"], .888, 334, "xMinYMin"],
            xtwoheadleftarrow: [["twoheadleftarrow"], .888, 334, "xMinYMin"],
            xtwoheadrightarrow: [["twoheadrightarrow"], .888, 334, "xMaxYMin"],
            overleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
            overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
            underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
            underleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
            xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
            xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
            xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
            xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
            xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
            xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
            overlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
            underlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
            overgroup: [["leftgroup", "rightgroup"], .888, 342],
            undergroup: [["leftgroupunder", "rightgroupunder"], .888, 342],
            xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
            xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
            xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
            xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
            xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
          }, Ae = function (t) {
            return "ordgroup" === t.type ? t.body.length : 1
          }, Ce = function (t, e, r, n) {
            var o, i = t.height + t.depth + 2 * r;
            if (/fbox|color/.test(e)) {
              if (o = Ft.makeSpan(["stretchy", e], [], n), "fbox" === e) {
                var a = n.color && n.getColor();
                a && (o.style.borderColor = a)
              }
            } else {
              var s = [];
              /^[bx]cancel$/.test(e) && s.push(new F({
                x1: "0",
                y1: "0",
                x2: "100%",
                y2: "100%",
                "stroke-width": "0.046em"
              })), /^x?cancel$/.test(e) && s.push(new F({
                x1: "0",
                y1: "100%",
                x2: "100%",
                y2: "0",
                "stroke-width": "0.046em"
              }));
              var u = new L(s, {width: "100%", height: i + "em"});
              o = Ft.makeSvgSpan([], [u], n)
            }
            return o.height = i, o.style.height = i + "em", o
          }, Pe = function (t) {
            var e = new ge.MathNode("mo", [new ge.TextNode(Te[t.substr(1)])]);
            return e.setAttribute("stretchy", "true"), e
          }, Oe = function (t, e) {
            var r = function () {
              var r = 4e5, n = t.label.substr(1);
              if (m.contains(["widehat", "widecheck", "widetilde", "utilde"], n)) {
                var o, i, a, s = Ae(t.base);
                if (s > 5) "widehat" === n || "widecheck" === n ? (o = 420, r = 2364, a = .42, i = n + "4") : (o = 312, r = 2340, a = .34, i = "tilde4"); else {
                  var u = [1, 1, 2, 2, 3, 3][s];
                  "widehat" === n || "widecheck" === n ? (r = [0, 1062, 2364, 2364, 2364][u], o = [0, 239, 300, 360, 420][u], a = [0, .24, .3, .3, .36, .42][u], i = n + u) : (r = [0, 600, 1033, 2339, 2340][u], o = [0, 260, 286, 306, 312][u], a = [0, .26, .286, .3, .306, .34][u], i = "tilde" + u)
                }
                var c = new R(i), l = new L([c], {
                  width: "100%",
                  height: a + "em",
                  viewBox: "0 0 " + r + " " + o,
                  preserveAspectRatio: "none"
                });
                return {span: Ft.makeSvgSpan([], [l], e), minWidth: 0, height: a}
              }
              var h, f, p = [], d = Me[n], g = d[0], v = d[1], y = d[2], b = y / 1e3, _ = g.length;
              if (1 === _) h = ["hide-tail"], f = [d[3]]; else if (2 === _) h = ["halfarrow-left", "halfarrow-right"], f = ["xMinYMin", "xMaxYMin"]; else {
                if (3 !== _) throw new Error("Correct katexImagesData or update code here to support\n                    " + _ + " children.");
                h = ["brace-left", "brace-center", "brace-right"], f = ["xMinYMin", "xMidYMin", "xMaxYMin"]
              }
              for (var x = 0; x < _; x++) {
                var w = new R(g[x]), S = new L([w], {
                  width: "400em",
                  height: b + "em",
                  viewBox: "0 0 " + r + " " + y,
                  preserveAspectRatio: f[x] + " slice"
                }), k = Ft.makeSvgSpan([h[x]], [S], e);
                if (1 === _) return {span: k, minWidth: v, height: b};
                k.style.height = b + "em", p.push(k)
              }
              return {span: Ft.makeSpan(["stretchy"], p, e), minWidth: v, height: b}
            }(), n = r.span, o = r.minWidth, i = r.height;
            return n.height = i, n.style.height = i + "em", o > 0 && (n.style.minWidth = o + "em"), n
          }, Ee = function (t, e) {
            var r, n, o, i = Ut(t, "supsub");
            i ? (r = (n = Bt(i.base, "accent")).base, i.base = r, o = function (t) {
              if (t instanceof z) return t;
              throw new Error("Expected span<HtmlDomNode> but got " + String(t) + ".")
            }(le(i, e)), i.base = n) : r = (n = Bt(t, "accent")).base;
            var a = le(r, e.havingCrampedStyle()), s = 0;
            if (n.isShifty && m.isCharacterBox(r)) {
              var u = m.getBaseElem(r);
              s = function (t) {
                if (t instanceof D) return t;
                throw new Error("Expected symbolNode but got " + String(t) + ".")
              }(le(u, e.havingCrampedStyle())).skew
            }
            var c, l = Math.min(a.height, e.fontMetrics().xHeight);
            if (n.isStretchy) c = Oe(n, e), c = Ft.makeVList({
              positionType: "firstBaseline",
              children: [{type: "elem", elem: a}, {
                type: "elem",
                elem: c,
                wrapperClasses: ["svg-align"],
                wrapperStyle: s > 0 ? {width: "calc(100% - " + 2 * s + "em)", marginLeft: 2 * s + "em"} : void 0
              }]
            }, e); else {
              var h, f;
              "\\vec" === n.label ? (h = Ft.staticSvg("vec", e), f = Ft.svgData.vec[1]) : ((h = Ft.makeSymbol(n.label, "Main-Regular", n.mode, e)).italic = 0, f = h.width), c = Ft.makeSpan(["accent-body"], [h]);
              var p = "\\textcircled" === n.label;
              p && (c.classes.push("accent-full"), l = a.height);
              var d = s;
              p || (d -= f / 2), c.style.left = d + "em", "\\textcircled" === n.label && (c.style.top = ".2em"), c = Ft.makeVList({
                positionType: "firstBaseline",
                children: [{type: "elem", elem: a}, {type: "kern", size: -l}, {type: "elem", elem: c}]
              }, e)
            }
            var g = Ft.makeSpan(["mord", "accent"], [c], e);
            return o ? (o.children[0] = g, o.height = Math.max(g.height, o.height), o.classes[0] = "mord", o) : g
          }, ze = function (t, e) {
            var r = t.isStretchy ? Pe(t.label) : new ge.MathNode("mo", [ve(t.label, t.mode)]),
              n = new ge.MathNode("mover", [we(t.base, e), r]);
            return n.setAttribute("accent", "true"), n
          },
          Ie = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function (t) {
            return "\\" + t
          }).join("|"));
        Xt({
          type: "accent",
          names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
          props: {numArgs: 1},
          handler: function (t, e) {
            var r = e[0], n = !Ie.test(t.funcName),
              o = !n || "\\widehat" === t.funcName || "\\widetilde" === t.funcName || "\\widecheck" === t.funcName;
            return {type: "accent", mode: t.parser.mode, label: t.funcName, isStretchy: n, isShifty: o, base: r}
          },
          htmlBuilder: Ee,
          mathmlBuilder: ze
        }), Xt({
          type: "accent",
          names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v", "\\textcircled"],
          props: {numArgs: 1, allowedInText: !0, allowedInMath: !1},
          handler: function (t, e) {
            var r = e[0];
            return {type: "accent", mode: t.parser.mode, label: t.funcName, isStretchy: !1, isShifty: !0, base: r}
          },
          htmlBuilder: Ee,
          mathmlBuilder: ze
        }), Xt({
          type: "accentUnder",
          names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
          props: {numArgs: 1},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName, o = e[0];
            return {type: "accentUnder", mode: r.mode, label: n, base: o}
          },
          htmlBuilder: function (t, e) {
            var r = le(t.base, e), n = Oe(t, e), o = "\\utilde" === t.label ? .12 : 0, i = Ft.makeVList({
              positionType: "bottom",
              positionData: n.height + o,
              children: [{type: "elem", elem: n, wrapperClasses: ["svg-align"]}, {type: "kern", size: o}, {
                type: "elem",
                elem: r
              }]
            }, e);
            return Ft.makeSpan(["mord", "accentunder"], [i], e)
          },
          mathmlBuilder: function (t, e) {
            var r = Pe(t.label), n = new ge.MathNode("munder", [we(t.base, e), r]);
            return n.setAttribute("accentunder", "true"), n
          }
        }), Xt({
          type: "xArrow",
          names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium"],
          props: {numArgs: 1, numOptionalArgs: 1},
          handler: function (t, e, r) {
            var n = t.parser, o = t.funcName;
            return {type: "xArrow", mode: n.mode, label: o, body: e[0], below: r[0]}
          },
          htmlBuilder: function (t, e) {
            var r, n = e.style, o = e.havingStyle(n.sup()), i = Ft.wrapFragment(le(t.body, o, e), e);
            i.classes.push("x-arrow-pad"), t.below && (o = e.havingStyle(n.sub()), (r = Ft.wrapFragment(le(t.below, o, e), e)).classes.push("x-arrow-pad"));
            var a, s = Oe(t, e), u = -e.fontMetrics().axisHeight + .5 * s.height,
              c = -e.fontMetrics().axisHeight - .5 * s.height - .111;
            if ((i.depth > .25 || "\\xleftequilibrium" === t.label) && (c -= i.depth), r) {
              var l = -e.fontMetrics().axisHeight + r.height + .5 * s.height + .111;
              a = Ft.makeVList({
                positionType: "individualShift",
                children: [{type: "elem", elem: i, shift: c}, {type: "elem", elem: s, shift: u}, {
                  type: "elem",
                  elem: r,
                  shift: l
                }]
              }, e)
            } else a = Ft.makeVList({
              positionType: "individualShift",
              children: [{type: "elem", elem: i, shift: c}, {type: "elem", elem: s, shift: u}]
            }, e);
            return a.children[0].children[0].children[1].classes.push("svg-align"), Ft.makeSpan(["mrel", "x-arrow"], [a], e)
          },
          mathmlBuilder: function (t, e) {
            var r, n, o = Pe(t.label);
            if (t.body) {
              var i = we(t.body, e);
              t.below ? (n = we(t.below, e), r = new ge.MathNode("munderover", [o, n, i])) : r = new ge.MathNode("mover", [o, i])
            } else t.below ? (n = we(t.below, e), r = new ge.MathNode("munder", [o, n])) : r = new ge.MathNode("mover", [o]);
            return r
          }
        }), Xt({
          type: "textord", names: ["\\@char"], props: {numArgs: 1, allowedInText: !0}, handler: function (t, e) {
            for (var r = t.parser, n = Bt(e[0], "ordgroup").body, o = "", i = 0; i < n.length; i++) {
              o += Bt(n[i], "textord").text
            }
            var s = parseInt(o);
            if (isNaN(s)) throw new a("\\@char has non-numeric argument " + o);
            return {type: "textord", mode: r.mode, text: String.fromCharCode(s)}
          }
        });
        var Ne = function (t, e) {
          var r = ie(t.body, e.withColor(t.color), !1);
          return Ft.makeFragment(r)
        }, De = function (t, e) {
          var r = _e(t.body, e), n = new ge.MathNode("mstyle", r);
          return n.setAttribute("mathcolor", t.color), n
        };
        Xt({
          type: "color",
          names: ["\\textcolor"],
          props: {numArgs: 2, allowedInText: !0, greediness: 3, argTypes: ["color", "original"]},
          handler: function (t, e) {
            var r = t.parser, n = Bt(e[0], "color-token").color, o = e[1];
            return {type: "color", mode: r.mode, color: n, body: Zt(o)}
          },
          htmlBuilder: Ne,
          mathmlBuilder: De
        }), Xt({
          type: "color",
          names: ["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"],
          props: {numArgs: 1, allowedInText: !0, greediness: 3},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName, o = e[0];
            return {type: "color", mode: r.mode, color: "katex-" + n.slice(1), body: Zt(o)}
          },
          htmlBuilder: Ne,
          mathmlBuilder: De
        }), Xt({
          type: "color",
          names: ["\\color"],
          props: {numArgs: 1, allowedInText: !0, greediness: 3, argTypes: ["color"]},
          handler: function (t, e) {
            var r = t.parser, n = t.breakOnTokenText, o = Bt(e[0], "color-token").color, i = r.parseExpression(!0, n);
            return {type: "color", mode: r.mode, color: o, body: i}
          },
          htmlBuilder: Ne,
          mathmlBuilder: De
        }), Xt({
          type: "cr",
          names: ["\\cr", "\\newline"],
          props: {numArgs: 0, numOptionalArgs: 1, argTypes: ["size"], allowedInText: !0},
          handler: function (t, e, r) {
            var n = t.parser, o = t.funcName, i = r[0], a = "\\cr" === o, s = !1;
            return a || (s = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode")), {
              type: "cr",
              mode: n.mode,
              newLine: s,
              newRow: a,
              size: i && Bt(i, "size").value
            }
          },
          htmlBuilder: function (t, e) {
            if (t.newRow) throw new a("\\cr valid only within a tabular/array environment");
            var r = Ft.makeSpan(["mspace"], [], e);
            return t.newLine && (r.classes.push("newline"), t.size && (r.style.marginTop = Mt(t.size, e) + "em")), r
          },
          mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mspace");
            return t.newLine && (r.setAttribute("linebreak", "newline"), t.size && r.setAttribute("height", Mt(t.size, e) + "em")), r
          }
        });
        var Le = function (t, e, r) {
            var n = q(Y.math[t] && Y.math[t].replace || t, e, r);
            if (!n) throw new Error("Unsupported symbol " + t + " and font size " + e + ".");
            return n
          }, Re = function (t, e, r, n) {
            var o = r.havingBaseStyle(e), i = Ft.makeSpan(n.concat(o.sizingClasses(r)), [t], r),
              a = o.sizeMultiplier / r.sizeMultiplier;
            return i.height *= a, i.depth *= a, i.maxFontSize = o.sizeMultiplier, i
          }, Fe = function (t, e, r) {
            var n = e.havingBaseStyle(r), o = (1 - e.sizeMultiplier / n.sizeMultiplier) * e.fontMetrics().axisHeight;
            t.classes.push("delimcenter"), t.style.top = o + "em", t.height -= o, t.depth += o
          }, Be = function (t, e, r, n, o, i) {
            var a = function (t, e, r, n) {
              return Ft.makeSymbol(t, "Size" + e + "-Regular", r, n)
            }(t, e, o, n), s = Re(Ft.makeSpan(["delimsizing", "size" + e], [a], n), w.TEXT, n, i);
            return r && Fe(s, n, w.TEXT), s
          }, Ue = function (t, e, r) {
            var n;
            return n = "Size1-Regular" === e ? "delim-size1" : "delim-size4", {
              type: "elem",
              elem: Ft.makeSpan(["delimsizinginner", n], [Ft.makeSpan([], [Ft.makeSymbol(t, e, r)])])
            }
          }, je = function (t, e, r, n, o, i) {
            var a, s, u, c;
            a = u = c = t, s = null;
            var l = "Size1-Regular";
            "\\uparrow" === t ? u = c = "⏐" : "\\Uparrow" === t ? u = c = "‖" : "\\downarrow" === t ? a = u = "⏐" : "\\Downarrow" === t ? a = u = "‖" : "\\updownarrow" === t ? (a = "\\uparrow", u = "⏐", c = "\\downarrow") : "\\Updownarrow" === t ? (a = "\\Uparrow", u = "‖", c = "\\Downarrow") : "[" === t || "\\lbrack" === t ? (a = "⎡", u = "⎢", c = "⎣", l = "Size4-Regular") : "]" === t || "\\rbrack" === t ? (a = "⎤", u = "⎥", c = "⎦", l = "Size4-Regular") : "\\lfloor" === t || "⌊" === t ? (u = a = "⎢", c = "⎣", l = "Size4-Regular") : "\\lceil" === t || "⌈" === t ? (a = "⎡", u = c = "⎢", l = "Size4-Regular") : "\\rfloor" === t || "⌋" === t ? (u = a = "⎥", c = "⎦", l = "Size4-Regular") : "\\rceil" === t || "⌉" === t ? (a = "⎤", u = c = "⎥", l = "Size4-Regular") : "(" === t || "\\lparen" === t ? (a = "⎛", u = "⎜", c = "⎝", l = "Size4-Regular") : ")" === t || "\\rparen" === t ? (a = "⎞", u = "⎟", c = "⎠", l = "Size4-Regular") : "\\{" === t || "\\lbrace" === t ? (a = "⎧", s = "⎨", c = "⎩", u = "⎪", l = "Size4-Regular") : "\\}" === t || "\\rbrace" === t ? (a = "⎫", s = "⎬", c = "⎭", u = "⎪", l = "Size4-Regular") : "\\lgroup" === t || "⟮" === t ? (a = "⎧", c = "⎩", u = "⎪", l = "Size4-Regular") : "\\rgroup" === t || "⟯" === t ? (a = "⎫", c = "⎭", u = "⎪", l = "Size4-Regular") : "\\lmoustache" === t || "⎰" === t ? (a = "⎧", c = "⎭", u = "⎪", l = "Size4-Regular") : "\\rmoustache" !== t && "⎱" !== t || (a = "⎫", c = "⎩", u = "⎪", l = "Size4-Regular");
            var h = Le(a, l, o), m = h.height + h.depth, f = Le(u, l, o), p = f.height + f.depth, d = Le(c, l, o),
              g = d.height + d.depth, v = 0, y = 1;
            if (null !== s) {
              var b = Le(s, l, o);
              v = b.height + b.depth, y = 2
            }
            var _ = m + g + v, x = Math.ceil((e - _) / (y * p)), S = _ + x * y * p, k = n.fontMetrics().axisHeight;
            r && (k *= n.sizeMultiplier);
            var T = S / 2 - k, M = [];
            if (M.push(Ue(c, l, o)), null === s) for (var A = 0; A < x; A++) M.push(Ue(u, l, o)); else {
              for (var C = 0; C < x; C++) M.push(Ue(u, l, o));
              M.push(Ue(s, l, o));
              for (var P = 0; P < x; P++) M.push(Ue(u, l, o))
            }
            M.push(Ue(a, l, o));
            var O = n.havingBaseStyle(w.TEXT),
              E = Ft.makeVList({positionType: "bottom", positionData: T, children: M}, O);
            return Re(Ft.makeSpan(["delimsizing", "mult"], [E], O), w.TEXT, n, i)
          }, qe = function (t, e, r, n) {
            var o;
            "sqrtTall" === t && (o = "M702 80H400000v40H742v" + (r - 54 - 80) + "l-4 4-4 4c-.667.7\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 80H400000v40H742z");
            var i = new R(t, o), a = new L([i], {
              width: "400em",
              height: e + "em",
              viewBox: "0 0 400000 " + r,
              preserveAspectRatio: "xMinYMin slice"
            });
            return Ft.makeSvgSpan(["hide-tail"], [a], n)
          },
          He = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"],
          We = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"],
          Ve = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], Ge = [0, 1.2, 1.8, 2.4, 3],
          Ye = [{type: "small", style: w.SCRIPTSCRIPT}, {type: "small", style: w.SCRIPT}, {
            type: "small",
            style: w.TEXT
          }, {type: "large", size: 1}, {type: "large", size: 2}, {type: "large", size: 3}, {type: "large", size: 4}],
          Je = [{type: "small", style: w.SCRIPTSCRIPT}, {type: "small", style: w.SCRIPT}, {
            type: "small",
            style: w.TEXT
          }, {type: "stack"}], Ke = [{type: "small", style: w.SCRIPTSCRIPT}, {type: "small", style: w.SCRIPT}, {
            type: "small",
            style: w.TEXT
          }, {type: "large", size: 1}, {type: "large", size: 2}, {type: "large", size: 3}, {
            type: "large",
            size: 4
          }, {type: "stack"}], $e = function (t) {
            if ("small" === t.type) return "Main-Regular";
            if ("large" === t.type) return "Size" + t.size + "-Regular";
            if ("stack" === t.type) return "Size4-Regular";
            throw new Error("Add support for delim type '" + t.type + "' here.")
          }, Xe = function (t, e, r, n) {
            for (var o = Math.min(2, 3 - n.style.size); o < r.length && "stack" !== r[o].type; o++) {
              var i = Le(t, $e(r[o]), "math"), a = i.height + i.depth;
              if ("small" === r[o].type && (a *= n.havingBaseStyle(r[o].style).sizeMultiplier), a > e) return r[o]
            }
            return r[r.length - 1]
          }, Qe = function (t, e, r, n, o, i) {
            var a;
            "<" === t || "\\lt" === t || "⟨" === t ? t = "\\langle" : ">" !== t && "\\gt" !== t && "⟩" !== t || (t = "\\rangle"), a = m.contains(Ve, t) ? Ye : m.contains(He, t) ? Ke : Je;
            var s = Xe(t, e, a, n);
            return "small" === s.type ? function (t, e, r, n, o, i) {
              var a = Ft.makeSymbol(t, "Main-Regular", o, n), s = Re(a, e, n, i);
              return r && Fe(s, n, e), s
            }(t, s.style, r, n, o, i) : "large" === s.type ? Be(t, s.size, r, n, o, i) : je(t, e, r, n, o, i)
          }, Ze = function (t, e) {
            var r, n, o = e.havingBaseSizing(), i = Xe("\\surd", t * o.sizeMultiplier, Ke, o), a = o.sizeMultiplier,
              s = 0, u = 0, c = 0;
            return "small" === i.type ? (c = 1080, t < 1 ? a = 1 : t < 1.4 && (a = .7), u = 1 / a, (r = qe("sqrtMain", s = 1.08 / a, c, e)).style.minWidth = "0.853em", n = .833 / a) : "large" === i.type ? (c = 1080 * Ge[i.size], u = Ge[i.size] / a, s = (Ge[i.size] + .08) / a, (r = qe("sqrtSize" + i.size, s, c, e)).style.minWidth = "1.02em", n = 1 / a) : (s = t + .08, u = t, c = Math.floor(1e3 * t) + 80, (r = qe("sqrtTall", s, c, e)).style.minWidth = "0.742em", n = 1.056), r.height = u, r.style.height = s + "em", {
              span: r,
              advanceWidth: n,
              ruleWidth: e.fontMetrics().sqrtRuleThickness * a
            }
          }, tr = function (t, e, r, n, o) {
            if ("<" === t || "\\lt" === t || "⟨" === t ? t = "\\langle" : ">" !== t && "\\gt" !== t && "⟩" !== t || (t = "\\rangle"), m.contains(He, t) || m.contains(Ve, t)) return Be(t, e, !1, r, n, o);
            if (m.contains(We, t)) return je(t, Ge[e], !1, r, n, o);
            throw new a("Illegal delimiter: '" + t + "'")
          }, er = Qe, rr = function (t, e, r, n, o, i) {
            var a = n.fontMetrics().axisHeight * n.sizeMultiplier, s = 5 / n.fontMetrics().ptPerEm,
              u = Math.max(e - a, r + a), c = Math.max(u / 500 * 901, 2 * u - s);
            return Qe(t, c, !0, n, o, i)
          }, nr = {
            "\\bigl": {mclass: "mopen", size: 1},
            "\\Bigl": {mclass: "mopen", size: 2},
            "\\biggl": {mclass: "mopen", size: 3},
            "\\Biggl": {mclass: "mopen", size: 4},
            "\\bigr": {mclass: "mclose", size: 1},
            "\\Bigr": {mclass: "mclose", size: 2},
            "\\biggr": {mclass: "mclose", size: 3},
            "\\Biggr": {mclass: "mclose", size: 4},
            "\\bigm": {mclass: "mrel", size: 1},
            "\\Bigm": {mclass: "mrel", size: 2},
            "\\biggm": {mclass: "mrel", size: 3},
            "\\Biggm": {mclass: "mrel", size: 4},
            "\\big": {mclass: "mord", size: 1},
            "\\Big": {mclass: "mord", size: 2},
            "\\bigg": {mclass: "mord", size: 3},
            "\\Bigg": {mclass: "mord", size: 4}
          },
          or = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];

        function ir(t, e) {
          var r = qt(t);
          if (r && m.contains(or, r.text)) return r;
          throw new a("Invalid delimiter: '" + (r ? r.text : JSON.stringify(t)) + "' after '" + e.funcName + "'", t)
        }

        function ar(t) {
          if (!t.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")
        }

        Xt({
          type: "delimsizing",
          names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
          props: {numArgs: 1},
          handler: function (t, e) {
            var r = ir(e[0], t);
            return {
              type: "delimsizing",
              mode: t.parser.mode,
              size: nr[t.funcName].size,
              mclass: nr[t.funcName].mclass,
              delim: r.text
            }
          },
          htmlBuilder: function (t, e) {
            return "." === t.delim ? Ft.makeSpan([t.mclass]) : tr(t.delim, t.size, e, t.mode, [t.mclass])
          },
          mathmlBuilder: function (t) {
            var e = [];
            "." !== t.delim && e.push(ve(t.delim, t.mode));
            var r = new ge.MathNode("mo", e);
            return "mopen" === t.mclass || "mclose" === t.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r
          }
        }), Xt({
          type: "leftright-right", names: ["\\right"], props: {numArgs: 1}, handler: function (t, e) {
            return {type: "leftright-right", mode: t.parser.mode, delim: ir(e[0], t).text}
          }
        }), Xt({
          type: "leftright", names: ["\\left"], props: {numArgs: 1}, handler: function (t, e) {
            var r = ir(e[0], t), n = t.parser;
            ++n.leftrightDepth;
            var o = n.parseExpression(!1);
            --n.leftrightDepth, n.expect("\\right", !1);
            var i = Bt(n.parseFunction(), "leftright-right");
            return {type: "leftright", mode: n.mode, body: o, left: r.text, right: i.delim}
          }, htmlBuilder: function (t, e) {
            ar(t);
            for (var r, n, o = ie(t.body, e, !0, [null, "mclose"]), i = 0, a = 0, s = !1, u = 0; u < o.length; u++) o[u].isMiddle ? s = !0 : (i = Math.max(o[u].height, i), a = Math.max(o[u].depth, a));
            if (i *= e.sizeMultiplier, a *= e.sizeMultiplier, r = "." === t.left ? ce(e, ["mopen"]) : rr(t.left, i, a, e, t.mode, ["mopen"]), o.unshift(r), s) for (var c = 1; c < o.length; c++) {
              var l = o[c].isMiddle;
              l && (o[c] = rr(l.delim, i, a, l.options, t.mode, []))
            }
            return n = "." === t.right ? ce(e, ["mclose"]) : rr(t.right, i, a, e, t.mode, ["mclose"]), o.push(n), Ft.makeSpan(["minner"], o, e)
          }, mathmlBuilder: function (t, e) {
            ar(t);
            var r = _e(t.body, e);
            if ("." !== t.left) {
              var n = new ge.MathNode("mo", [ve(t.left, t.mode)]);
              n.setAttribute("fence", "true"), r.unshift(n)
            }
            if ("." !== t.right) {
              var o = new ge.MathNode("mo", [ve(t.right, t.mode)]);
              o.setAttribute("fence", "true"), r.push(o)
            }
            return ye(r)
          }
        }), Xt({
          type: "middle", names: ["\\middle"], props: {numArgs: 1}, handler: function (t, e) {
            var r = ir(e[0], t);
            if (!t.parser.leftrightDepth) throw new a("\\middle without preceding \\left", r);
            return {type: "middle", mode: t.parser.mode, delim: r.text}
          }, htmlBuilder: function (t, e) {
            var r;
            if ("." === t.delim) r = ce(e, []); else {
              r = tr(t.delim, 1, e, t.mode, []);
              var n = {delim: t.delim, options: e};
              r.isMiddle = n
            }
            return r
          }, mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mo", [ve(t.delim, t.mode)]);
            return r.setAttribute("fence", "true"), r
          }
        });
        var sr = function (t, e) {
          var r, n, o = Ft.wrapFragment(le(t.body, e), e), i = t.label.substr(1), a = e.sizeMultiplier, s = 0,
            u = m.isCharacterBox(t.body);
          if ("sout" === i) (r = Ft.makeSpan(["stretchy", "sout"])).height = e.fontMetrics().defaultRuleThickness / a, s = -.5 * e.fontMetrics().xHeight; else {
            /cancel/.test(i) ? u || o.classes.push("cancel-pad") : o.classes.push("boxpad");
            var c = 0;
            c = /box/.test(i) ? "colorbox" === i ? .3 : .34 : u ? .2 : 0, r = Ce(o, i, c, e), s = o.depth + c, t.backgroundColor && (r.style.backgroundColor = t.backgroundColor, t.borderColor && (r.style.borderColor = t.borderColor))
          }
          return n = t.backgroundColor ? Ft.makeVList({
            positionType: "individualShift",
            children: [{type: "elem", elem: r, shift: s}, {type: "elem", elem: o, shift: 0}]
          }, e) : Ft.makeVList({
            positionType: "individualShift",
            children: [{type: "elem", elem: o, shift: 0}, {
              type: "elem",
              elem: r,
              shift: s,
              wrapperClasses: /cancel/.test(i) ? ["svg-align"] : []
            }]
          }, e), /cancel/.test(i) && (n.height = o.height, n.depth = o.depth), /cancel/.test(i) && !u ? Ft.makeSpan(["mord", "cancel-lap"], [n], e) : Ft.makeSpan(["mord"], [n], e)
        }, ur = function (t, e) {
          var r = new ge.MathNode("menclose", [we(t.body, e)]);
          switch (t.label) {
            case"\\cancel":
              r.setAttribute("notation", "updiagonalstrike");
              break;
            case"\\bcancel":
              r.setAttribute("notation", "downdiagonalstrike");
              break;
            case"\\sout":
              r.setAttribute("notation", "horizontalstrike");
              break;
            case"\\fbox":
            case"\\fcolorbox":
              r.setAttribute("notation", "box");
              break;
            case"\\xcancel":
              r.setAttribute("notation", "updiagonalstrike downdiagonalstrike")
          }
          return t.backgroundColor && r.setAttribute("mathbackground", t.backgroundColor), r
        };
        Xt({
          type: "enclose",
          names: ["\\colorbox"],
          props: {numArgs: 2, allowedInText: !0, greediness: 3, argTypes: ["color", "text"]},
          handler: function (t, e, r) {
            var n = t.parser, o = t.funcName, i = Bt(e[0], "color-token").color, a = e[1];
            return {type: "enclose", mode: n.mode, label: o, backgroundColor: i, body: a}
          },
          htmlBuilder: sr,
          mathmlBuilder: ur
        }), Xt({
          type: "enclose",
          names: ["\\fcolorbox"],
          props: {numArgs: 3, allowedInText: !0, greediness: 3, argTypes: ["color", "color", "text"]},
          handler: function (t, e, r) {
            var n = t.parser, o = t.funcName, i = Bt(e[0], "color-token").color, a = Bt(e[1], "color-token").color,
              s = e[2];
            return {type: "enclose", mode: n.mode, label: o, backgroundColor: a, borderColor: i, body: s}
          },
          htmlBuilder: sr,
          mathmlBuilder: ur
        }), Xt({
          type: "enclose",
          names: ["\\fbox"],
          props: {numArgs: 1, argTypes: ["text"], allowedInText: !0},
          handler: function (t, e) {
            return {type: "enclose", mode: t.parser.mode, label: "\\fbox", body: e[0]}
          }
        }), Xt({
          type: "enclose",
          names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout"],
          props: {numArgs: 1},
          handler: function (t, e, r) {
            var n = t.parser, o = t.funcName, i = e[0];
            return {type: "enclose", mode: n.mode, label: o, body: i}
          },
          htmlBuilder: sr,
          mathmlBuilder: ur
        });
        var cr = {};

        function lr(t) {
          for (var e = t.type, r = t.names, n = t.props, o = t.handler, i = t.htmlBuilder, a = t.mathmlBuilder, s = {
            type: e,
            numArgs: n.numArgs || 0,
            greediness: 1,
            allowedInText: !1,
            numOptionalArgs: 0,
            handler: o
          }, u = 0; u < r.length; ++u) cr[r[u]] = s;
          i && (Kt[e] = i), a && ($t[e] = a)
        }

        function hr(t) {
          var e = [];
          t.consumeSpaces();
          for (var r = t.nextToken.text; "\\hline" === r || "\\hdashline" === r;) t.consume(), e.push("\\hdashline" === r), t.consumeSpaces(), r = t.nextToken.text;
          return e
        }

        function mr(t, e, r) {
          var n = e.hskipBeforeAndAfter, o = e.addJot, i = e.cols, s = e.arraystretch;
          if (t.gullet.beginGroup(), t.gullet.macros.set("\\\\", "\\cr"), !s) {
            var u = t.gullet.expandMacroAsText("\\arraystretch");
            if (null == u) s = 1; else if (!(s = parseFloat(u)) || s < 0) throw new a("Invalid \\arraystretch: " + u)
          }
          var c = [], l = [c], h = [], m = [];
          for (m.push(hr(t)); ;) {
            var f = t.parseExpression(!1, "\\cr");
            f = {type: "ordgroup", mode: t.mode, body: f}, r && (f = {
              type: "styling",
              mode: t.mode,
              style: r,
              body: [f]
            }), c.push(f);
            var p = t.nextToken.text;
            if ("&" === p) t.consume(); else {
              if ("\\end" === p) {
                1 === c.length && "styling" === f.type && 0 === f.body[0].body.length && l.pop(), m.length < l.length + 1 && m.push([]);
                break
              }
              if ("\\cr" !== p) throw new a("Expected & or \\\\ or \\cr or \\end", t.nextToken);
              var d = Bt(t.parseFunction(), "cr");
              h.push(d.size), m.push(hr(t)), c = [], l.push(c)
            }
          }
          return t.gullet.endGroup(), {
            type: "array",
            mode: t.mode,
            addJot: o,
            arraystretch: s,
            body: l,
            cols: i,
            rowGaps: h,
            hskipBeforeAndAfter: n,
            hLinesBeforeRow: m
          }
        }

        function fr(t) {
          return "d" === t.substr(0, 1) ? "display" : "text"
        }

        var pr = function (t, e) {
          var r, n, o = t.body.length, i = t.hLinesBeforeRow, s = 0, u = new Array(o), c = [],
            l = 1 / e.fontMetrics().ptPerEm, h = 5 * l, f = 12 * l, p = 3 * l, d = t.arraystretch * f, g = .7 * d,
            v = .3 * d, y = 0;

          function b(t) {
            for (var e = 0; e < t.length; ++e) e > 0 && (y += .25), c.push({pos: y, isDashed: t[e]})
          }

          for (b(i[0]), r = 0; r < t.body.length; ++r) {
            var _ = t.body[r], x = g, w = v;
            s < _.length && (s = _.length);
            var S = new Array(_.length);
            for (n = 0; n < _.length; ++n) {
              var k = le(_[n], e);
              w < k.depth && (w = k.depth), x < k.height && (x = k.height), S[n] = k
            }
            var T = t.rowGaps[r], M = 0;
            T && (M = Mt(T, e)) > 0 && (w < (M += v) && (w = M), M = 0), t.addJot && (w += p), S.height = x, S.depth = w, y += x, S.pos = y, y += w + M, u[r] = S, b(i[r + 1])
          }
          var A, C, P = y / 2 + e.fontMetrics().axisHeight, O = t.cols || [], E = [];
          for (n = 0, C = 0; n < s || C < O.length; ++n, ++C) {
            for (var z = O[C] || {}, I = !0; "separator" === z.type;) {
              if (I || ((A = Ft.makeSpan(["arraycolsep"], [])).style.width = e.fontMetrics().doubleRuleSep + "em", E.push(A)), "|" === z.separator) {
                var N = Ft.makeSpan(["vertical-separator"], [], e);
                N.style.height = y + "em", N.style.verticalAlign = -(y - P) + "em", E.push(N)
              } else {
                if (":" !== z.separator) throw new a("Invalid separator type: " + z.separator);
                var D = Ft.makeSpan(["vertical-separator", "vs-dashed"], [], e);
                D.style.height = y + "em", D.style.verticalAlign = -(y - P) + "em", E.push(D)
              }
              z = O[++C] || {}, I = !1
            }
            if (!(n >= s)) {
              var L = void 0;
              (n > 0 || t.hskipBeforeAndAfter) && 0 !== (L = m.deflt(z.pregap, h)) && ((A = Ft.makeSpan(["arraycolsep"], [])).style.width = L + "em", E.push(A));
              var R = [];
              for (r = 0; r < o; ++r) {
                var F = u[r], B = F[n];
                if (B) {
                  var U = F.pos - P;
                  B.depth = F.depth, B.height = F.height, R.push({type: "elem", elem: B, shift: U})
                }
              }
              R = Ft.makeVList({
                positionType: "individualShift",
                children: R
              }, e), R = Ft.makeSpan(["col-align-" + (z.align || "c")], [R]), E.push(R), (n < s - 1 || t.hskipBeforeAndAfter) && 0 !== (L = m.deflt(z.postgap, h)) && ((A = Ft.makeSpan(["arraycolsep"], [])).style.width = L + "em", E.push(A))
            }
          }
          if (u = Ft.makeSpan(["mtable"], E), c.length > 0) {
            for (var j = Ft.makeLineSpan("hline", e, .05), q = Ft.makeLineSpan("hdashline", e, .05), H = [{
              type: "elem",
              elem: u,
              shift: 0
            }]; c.length > 0;) {
              var W = c.pop(), V = W.pos - P;
              W.isDashed ? H.push({type: "elem", elem: q, shift: V}) : H.push({type: "elem", elem: j, shift: V})
            }
            u = Ft.makeVList({positionType: "individualShift", children: H}, e)
          }
          return Ft.makeSpan(["mord"], [u], e)
        }, dr = function (t, e) {
          return new ge.MathNode("mtable", t.body.map(function (t) {
            return new ge.MathNode("mtr", t.map(function (t) {
              return new ge.MathNode("mtd", [we(t, e)])
            }))
          }))
        }, gr = function (t, e) {
          var r, n = [], o = mr(t.parser, {cols: n, addJot: !0}, "display"), i = 0,
            s = {type: "ordgroup", mode: t.mode, body: []}, u = Ut(e[0], "ordgroup");
          if (u) {
            for (var c = "", l = 0; l < u.body.length; l++) {
              c += Bt(u.body[l], "textord").text
            }
            r = Number(c), i = 2 * r
          }
          var h = !i;
          o.body.forEach(function (t) {
            for (var e = 1; e < t.length; e += 2) {
              Bt(Bt(t[e], "styling").body[0], "ordgroup").body.unshift(s)
            }
            if (h) i < t.length && (i = t.length); else {
              var n = t.length / 2;
              if (r < n) throw new a("Too many math in a row: expected " + r + ", but got " + n, t[0])
            }
          });
          for (var m = 0; m < i; ++m) {
            var f = "r", p = 0;
            m % 2 == 1 ? f = "l" : m > 0 && h && (p = 1), n[m] = {type: "align", align: f, pregap: p, postgap: 0}
          }
          return o
        };
        lr({
          type: "array", names: ["array", "darray"], props: {numArgs: 1}, handler: function (t, e) {
            var r = {
              cols: (qt(e[0]) ? [e[0]] : Bt(e[0], "ordgroup").body).map(function (t) {
                var e = function (t) {
                  var e = qt(t);
                  if (!e) throw new Error("Expected node of symbol group type, but got " + (t ? "node of type " + t.type : String(t)));
                  return e
                }(t).text;
                if (-1 !== "lcr".indexOf(e)) return {type: "align", align: e};
                if ("|" === e) return {type: "separator", separator: "|"};
                if (":" === e) return {type: "separator", separator: ":"};
                throw new a("Unknown column alignment: " + e, t)
              }), hskipBeforeAndAfter: !0
            };
            return mr(t.parser, r, fr(t.envName))
          }, htmlBuilder: pr, mathmlBuilder: dr
        }), lr({
          type: "array",
          names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"],
          props: {numArgs: 0},
          handler: function (t) {
            var e = {
              matrix: null,
              pmatrix: ["(", ")"],
              bmatrix: ["[", "]"],
              Bmatrix: ["\\{", "\\}"],
              vmatrix: ["|", "|"],
              Vmatrix: ["\\Vert", "\\Vert"]
            }[t.envName], r = mr(t.parser, {hskipBeforeAndAfter: !1}, fr(t.envName));
            return e ? {type: "leftright", mode: t.mode, body: [r], left: e[0], right: e[1]} : r
          },
          htmlBuilder: pr,
          mathmlBuilder: dr
        }), lr({
          type: "array", names: ["cases", "dcases"], props: {numArgs: 0}, handler: function (t) {
            var e = mr(t.parser, {
              arraystretch: 1.2,
              cols: [{type: "align", align: "l", pregap: 0, postgap: 1}, {
                type: "align",
                align: "l",
                pregap: 0,
                postgap: 0
              }]
            }, fr(t.envName));
            return {type: "leftright", mode: t.mode, body: [e], left: "\\{", right: "."}
          }, htmlBuilder: pr, mathmlBuilder: dr
        }), lr({
          type: "array",
          names: ["aligned"],
          props: {numArgs: 0},
          handler: gr,
          htmlBuilder: pr,
          mathmlBuilder: dr
        }), lr({
          type: "array", names: ["gathered"], props: {numArgs: 0}, handler: function (t) {
            return mr(t.parser, {cols: [{type: "align", align: "c"}], addJot: !0}, "display")
          }, htmlBuilder: pr, mathmlBuilder: dr
        }), lr({
          type: "array",
          names: ["alignedat"],
          props: {numArgs: 1},
          handler: gr,
          htmlBuilder: pr,
          mathmlBuilder: dr
        }), Xt({
          type: "text",
          names: ["\\hline", "\\hdashline"],
          props: {numArgs: 0, allowedInText: !0, allowedInMath: !0},
          handler: function (t, e) {
            throw new a(t.funcName + " valid only within array environment")
          }
        });
        var vr = cr;
        Xt({
          type: "environment",
          names: ["\\begin", "\\end"],
          props: {numArgs: 1, argTypes: ["text"]},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName, o = e[0];
            if ("ordgroup" !== o.type) throw new a("Invalid environment name", o);
            for (var i = "", s = 0; s < o.body.length; ++s) i += Bt(o.body[s], "textord").text;
            if ("\\begin" === n) {
              if (!vr.hasOwnProperty(i)) throw new a("No such environment: " + i, o);
              var u = vr[i], c = r.parseArguments("\\begin{" + i + "}", u), l = c.args, h = c.optArgs,
                m = {mode: r.mode, envName: i, parser: r}, f = u.handler(m, l, h);
              r.expect("\\end", !1);
              var p = r.nextToken, d = Bt(r.parseFunction(), "environment");
              if (d.name !== i) throw new a("Mismatch: \\begin{" + i + "} matched by \\end{" + d.name + "}", p);
              return f
            }
            return {type: "environment", mode: r.mode, name: i, nameGroup: o}
          }
        });
        var yr = Ft.makeSpan;

        function br(t, e) {
          var r = ie(t.body, e, !0);
          return yr([t.mclass], r, e)
        }

        function _r(t, e) {
          var r = _e(t.body, e);
          return ge.newDocumentFragment(r)
        }

        Xt({
          type: "mclass",
          names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
          props: {numArgs: 1},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName, o = e[0];
            return {type: "mclass", mode: r.mode, mclass: "m" + n.substr(5), body: Zt(o)}
          },
          htmlBuilder: br,
          mathmlBuilder: _r
        });
        var xr = function (t) {
          var e = "ordgroup" === t.type && t.body.length ? t.body[0] : t;
          return "atom" !== e.type || "bin" !== e.family && "rel" !== e.family ? "mord" : "m" + e.family
        };
        Xt({
          type: "mclass", names: ["\\@binrel"], props: {numArgs: 2}, handler: function (t, e) {
            return {type: "mclass", mode: t.parser.mode, mclass: xr(e[0]), body: [e[1]]}
          }
        }), Xt({
          type: "mclass",
          names: ["\\stackrel", "\\overset", "\\underset"],
          props: {numArgs: 2},
          handler: function (t, e) {
            var r, n = t.parser, o = t.funcName, i = e[1], a = e[0];
            r = "\\stackrel" !== o ? xr(i) : "mrel";
            var s = {
              type: "op",
              mode: i.mode,
              limits: !0,
              alwaysHandleSupSub: !0,
              symbol: !1,
              suppressBaseShift: "\\stackrel" !== o,
              body: Zt(i)
            }, u = {
              type: "supsub",
              mode: a.mode,
              base: s,
              sup: "\\underset" === o ? null : a,
              sub: "\\underset" === o ? a : null
            };
            return {type: "mclass", mode: n.mode, mclass: r, body: [u]}
          },
          htmlBuilder: br,
          mathmlBuilder: _r
        });
        var wr = function (t, e) {
          var r = t.font, n = e.withFont(r);
          return le(t.body, n)
        }, Sr = function (t, e) {
          var r = t.font, n = e.withFont(r);
          return we(t.body, n)
        }, kr = {"\\Bbb": "\\mathbb", "\\bold": "\\mathbf", "\\frak": "\\mathfrak", "\\bm": "\\boldsymbol"};
        Xt({
          type: "font",
          names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
          props: {numArgs: 1, greediness: 2},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName, o = e[0], i = n;
            return i in kr && (i = kr[i]), {type: "font", mode: r.mode, font: i.slice(1), body: o}
          },
          htmlBuilder: wr,
          mathmlBuilder: Sr
        }), Xt({
          type: "mclass",
          names: ["\\boldsymbol", "\\bm"],
          props: {numArgs: 1, greediness: 2},
          handler: function (t, e) {
            var r = t.parser, n = e[0];
            return {
              type: "mclass",
              mode: r.mode,
              mclass: xr(n),
              body: [{type: "font", mode: r.mode, font: "boldsymbol", body: n}]
            }
          }
        }), Xt({
          type: "font",
          names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it"],
          props: {numArgs: 0, allowedInText: !0},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName, o = t.breakOnTokenText, i = r.mode;
            r.consumeSpaces();
            var a = r.parseExpression(!0, o);
            return {type: "font", mode: i, font: "math" + n.slice(1), body: {type: "ordgroup", mode: r.mode, body: a}}
          },
          htmlBuilder: wr,
          mathmlBuilder: Sr
        });
        var Tr = function (t, e) {
          var r = e.style;
          "display" === t.size ? r = w.DISPLAY : "text" === t.size && r.size === w.DISPLAY.size ? r = w.TEXT : "script" === t.size ? r = w.SCRIPT : "scriptscript" === t.size && (r = w.SCRIPTSCRIPT);
          var n, o = r.fracNum(), i = r.fracDen();
          n = e.havingStyle(o);
          var a = le(t.numer, n, e);
          if (t.continued) {
            var s = 8.5 / e.fontMetrics().ptPerEm, u = 3.5 / e.fontMetrics().ptPerEm;
            a.height = a.height < s ? s : a.height, a.depth = a.depth < u ? u : a.depth
          }
          n = e.havingStyle(i);
          var c, l, h, m, f, p, d, g, v, y, b = le(t.denom, n, e);
          if (t.hasBarLine ? (t.barSize ? (l = Mt(t.barSize, e), c = Ft.makeLineSpan("frac-line", e, l)) : c = Ft.makeLineSpan("frac-line", e), l = c.height, h = c.height) : (c = null, l = 0, h = e.fontMetrics().defaultRuleThickness), r.size === w.DISPLAY.size ? (m = e.fontMetrics().num1, f = l > 0 ? 3 * h : 7 * h, p = e.fontMetrics().denom1) : (l > 0 ? (m = e.fontMetrics().num2, f = h) : (m = e.fontMetrics().num3, f = 3 * h), p = e.fontMetrics().denom2), c) {
            var _ = e.fontMetrics().axisHeight;
            m - a.depth - (_ + .5 * l) < f && (m += f - (m - a.depth - (_ + .5 * l))), _ - .5 * l - (b.height - p) < f && (p += f - (_ - .5 * l - (b.height - p)));
            var x = -(_ - .5 * l);
            d = Ft.makeVList({
              positionType: "individualShift",
              children: [{type: "elem", elem: b, shift: p}, {type: "elem", elem: c, shift: x}, {
                type: "elem",
                elem: a,
                shift: -m
              }]
            }, e)
          } else {
            var S = m - a.depth - (b.height - p);
            S < f && (m += .5 * (f - S), p += .5 * (f - S)), d = Ft.makeVList({
              positionType: "individualShift",
              children: [{type: "elem", elem: b, shift: p}, {type: "elem", elem: a, shift: -m}]
            }, e)
          }
          return n = e.havingStyle(r), d.height *= n.sizeMultiplier / e.sizeMultiplier, d.depth *= n.sizeMultiplier / e.sizeMultiplier, g = r.size === w.DISPLAY.size ? e.fontMetrics().delim1 : e.fontMetrics().delim2, v = null == t.leftDelim ? ce(e, ["mopen"]) : er(t.leftDelim, g, !0, e.havingStyle(r), t.mode, ["mopen"]), y = t.continued ? Ft.makeSpan([]) : null == t.rightDelim ? ce(e, ["mclose"]) : er(t.rightDelim, g, !0, e.havingStyle(r), t.mode, ["mclose"]), Ft.makeSpan(["mord"].concat(n.sizingClasses(e)), [v, Ft.makeSpan(["mfrac"], [d]), y], e)
        }, Mr = function (t, e) {
          var r = new ge.MathNode("mfrac", [we(t.numer, e), we(t.denom, e)]);
          if (t.hasBarLine) {
            if (t.barSize) {
              var n = Mt(t.barSize, e);
              r.setAttribute("linethickness", n + "em")
            }
          } else r.setAttribute("linethickness", "0px");
          if (null != t.leftDelim || null != t.rightDelim) {
            var o = [];
            if (null != t.leftDelim) {
              var i = new ge.MathNode("mo", [new ge.TextNode(t.leftDelim)]);
              i.setAttribute("fence", "true"), o.push(i)
            }
            if (o.push(r), null != t.rightDelim) {
              var a = new ge.MathNode("mo", [new ge.TextNode(t.rightDelim)]);
              a.setAttribute("fence", "true"), o.push(a)
            }
            return ye(o)
          }
          return r
        };
        Xt({
          type: "genfrac",
          names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
          props: {numArgs: 2, greediness: 2},
          handler: function (t, e) {
            var r, n = t.parser, o = t.funcName, i = e[0], a = e[1], s = null, u = null, c = "auto";
            switch (o) {
              case"\\cfrac":
              case"\\dfrac":
              case"\\frac":
              case"\\tfrac":
                r = !0;
                break;
              case"\\\\atopfrac":
                r = !1;
                break;
              case"\\dbinom":
              case"\\binom":
              case"\\tbinom":
                r = !1, s = "(", u = ")";
                break;
              case"\\\\bracefrac":
                r = !1, s = "\\{", u = "\\}";
                break;
              case"\\\\brackfrac":
                r = !1, s = "[", u = "]";
                break;
              default:
                throw new Error("Unrecognized genfrac command")
            }
            switch (o) {
              case"\\cfrac":
              case"\\dfrac":
              case"\\dbinom":
                c = "display";
                break;
              case"\\tfrac":
              case"\\tbinom":
                c = "text"
            }
            return {
              type: "genfrac",
              mode: n.mode,
              continued: "\\cfrac" === o,
              numer: i,
              denom: a,
              hasBarLine: r,
              leftDelim: s,
              rightDelim: u,
              size: c,
              barSize: null
            }
          },
          htmlBuilder: Tr,
          mathmlBuilder: Mr
        }), Xt({
          type: "infix",
          names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
          props: {numArgs: 0, infix: !0},
          handler: function (t) {
            var e, r = t.parser, n = t.funcName, o = t.token;
            switch (n) {
              case"\\over":
                e = "\\frac";
                break;
              case"\\choose":
                e = "\\binom";
                break;
              case"\\atop":
                e = "\\\\atopfrac";
                break;
              case"\\brace":
                e = "\\\\bracefrac";
                break;
              case"\\brack":
                e = "\\\\brackfrac";
                break;
              default:
                throw new Error("Unrecognized infix genfrac command")
            }
            return {type: "infix", mode: r.mode, replaceWith: e, token: o}
          }
        });
        var Ar = ["display", "text", "script", "scriptscript"], Cr = function (t) {
          var e = null;
          return t.length > 0 && (e = "." === (e = t) ? null : e), e
        };
        Xt({
          type: "genfrac",
          names: ["\\genfrac"],
          props: {numArgs: 6, greediness: 6, argTypes: ["math", "math", "size", "text", "math", "math"]},
          handler: function (t, e) {
            var r = t.parser, n = e[4], o = e[5], i = Ut(e[0], "ordgroup");
            i = jt(i ? i.body[0] : e[0], "open");
            var a = Cr(i.text), s = Ut(e[1], "ordgroup");
            s = jt(s ? s.body[0] : e[1], "close");
            var u, c = Cr(s.text), l = Bt(e[2], "size"), h = null;
            u = !!l.isBlank || (h = l.value).number > 0;
            var m = "auto", f = Ut(e[3], "ordgroup");
            if (f) {
              if (f.body.length > 0) {
                var p = Bt(f.body[0], "textord");
                m = Ar[Number(p.text)]
              }
            } else f = Bt(e[3], "textord"), m = Ar[Number(f.text)];
            return {
              type: "genfrac",
              mode: r.mode,
              numer: n,
              denom: o,
              continued: !1,
              hasBarLine: u,
              barSize: h,
              leftDelim: a,
              rightDelim: c,
              size: m
            }
          },
          htmlBuilder: Tr,
          mathmlBuilder: Mr
        }), Xt({
          type: "infix",
          names: ["\\above"],
          props: {numArgs: 1, argTypes: ["size"], infix: !0},
          handler: function (t, e) {
            var r = t.parser, n = (t.funcName, t.token);
            return {type: "infix", mode: r.mode, replaceWith: "\\\\abovefrac", size: Bt(e[0], "size").value, token: n}
          }
        }), Xt({
          type: "genfrac",
          names: ["\\\\abovefrac"],
          props: {numArgs: 3, argTypes: ["math", "size", "math"]},
          handler: function (t, e) {
            var r = t.parser, n = (t.funcName, e[0]), o = h(Bt(e[1], "infix").size), i = e[2], a = o.number > 0;
            return {
              type: "genfrac",
              mode: r.mode,
              numer: n,
              denom: i,
              continued: !1,
              hasBarLine: a,
              barSize: o,
              leftDelim: null,
              rightDelim: null,
              size: "auto"
            }
          },
          htmlBuilder: Tr,
          mathmlBuilder: Mr
        });
        var Pr = function (t, e) {
          var r, n, o = e.style, i = Ut(t, "supsub");
          i ? (r = i.sup ? le(i.sup, e.havingStyle(o.sup()), e) : le(i.sub, e.havingStyle(o.sub()), e), n = Bt(i.base, "horizBrace")) : n = Bt(t, "horizBrace");
          var a, s = le(n.base, e.havingBaseStyle(w.DISPLAY)), u = Oe(n, e);
          if (n.isOver ? (a = Ft.makeVList({
            positionType: "firstBaseline",
            children: [{type: "elem", elem: s}, {type: "kern", size: .1}, {type: "elem", elem: u}]
          }, e)).children[0].children[0].children[1].classes.push("svg-align") : (a = Ft.makeVList({
            positionType: "bottom",
            positionData: s.depth + .1 + u.height,
            children: [{type: "elem", elem: u}, {type: "kern", size: .1}, {type: "elem", elem: s}]
          }, e)).children[0].children[0].children[0].classes.push("svg-align"), r) {
            var c = Ft.makeSpan(["mord", n.isOver ? "mover" : "munder"], [a], e);
            a = n.isOver ? Ft.makeVList({
              positionType: "firstBaseline",
              children: [{type: "elem", elem: c}, {type: "kern", size: .2}, {type: "elem", elem: r}]
            }, e) : Ft.makeVList({
              positionType: "bottom",
              positionData: c.depth + .2 + r.height + r.depth,
              children: [{type: "elem", elem: r}, {type: "kern", size: .2}, {type: "elem", elem: c}]
            }, e)
          }
          return Ft.makeSpan(["mord", n.isOver ? "mover" : "munder"], [a], e)
        };
        Xt({
          type: "horizBrace", names: ["\\overbrace", "\\underbrace"], props: {numArgs: 1}, handler: function (t, e) {
            var r = t.parser, n = t.funcName;
            return {type: "horizBrace", mode: r.mode, label: n, isOver: /^\\over/.test(n), base: e[0]}
          }, htmlBuilder: Pr, mathmlBuilder: function (t, e) {
            var r = Pe(t.label);
            return new ge.MathNode(t.isOver ? "mover" : "munder", [we(t.base, e), r])
          }
        }), Xt({
          type: "href",
          names: ["\\href"],
          props: {numArgs: 2, argTypes: ["url", "original"], allowedInText: !0},
          handler: function (t, e) {
            var r = t.parser, n = e[1], o = Bt(e[0], "url").url;
            return {type: "href", mode: r.mode, href: o, body: Zt(n)}
          },
          htmlBuilder: function (t, e) {
            var r = ie(t.body, e, !1);
            return Ft.makeAnchor(t.href, [], r, e)
          },
          mathmlBuilder: function (t, e) {
            var r = xe(t.body, e);
            return r instanceof pe || (r = new pe("mrow", [r])), r.setAttribute("href", t.href), r
          }
        }), Xt({
          type: "href",
          names: ["\\url"],
          props: {numArgs: 1, argTypes: ["url"], allowedInText: !0},
          handler: function (t, e) {
            for (var r = t.parser, n = Bt(e[0], "url").url, o = [], i = 0; i < n.length; i++) {
              var a = n[i];
              "~" === a && (a = "\\textasciitilde"), o.push({type: "textord", mode: "text", text: a})
            }
            var s = {type: "text", mode: r.mode, font: "\\texttt", body: o};
            return {type: "href", mode: r.mode, href: n, body: Zt(s)}
          }
        }), Xt({
          type: "htmlmathml",
          names: ["\\html@mathml"],
          props: {numArgs: 2, allowedInText: !0},
          handler: function (t, e) {
            return {type: "htmlmathml", mode: t.parser.mode, html: Zt(e[0]), mathml: Zt(e[1])}
          },
          htmlBuilder: function (t, e) {
            var r = ie(t.html, e, !1);
            return Ft.makeFragment(r)
          },
          mathmlBuilder: function (t, e) {
            return xe(t.mathml, e)
          }
        }), Xt({
          type: "kern",
          names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
          props: {numArgs: 1, argTypes: ["size"], allowedInText: !0},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName, o = Bt(e[0], "size");
            if (r.settings.strict) {
              var i = "m" === n[1], a = "mu" === o.value.unit;
              i ? (a || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, not " + o.value.unit + " units"), "math" !== r.mode && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : a && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units")
            }
            return {type: "kern", mode: r.mode, dimension: o.value}
          },
          htmlBuilder: function (t, e) {
            return Ft.makeGlue(t.dimension, e)
          },
          mathmlBuilder: function (t, e) {
            var r = Mt(t.dimension, e);
            return new ge.SpaceNode(r)
          }
        }), Xt({
          type: "lap",
          names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
          props: {numArgs: 1, allowedInText: !0},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName, o = e[0];
            return {type: "lap", mode: r.mode, alignment: n.slice(5), body: o}
          },
          htmlBuilder: function (t, e) {
            var r;
            "clap" === t.alignment ? (r = Ft.makeSpan([], [le(t.body, e)]), r = Ft.makeSpan(["inner"], [r], e)) : r = Ft.makeSpan(["inner"], [le(t.body, e)]);
            var n = Ft.makeSpan(["fix"], []), o = Ft.makeSpan([t.alignment], [r, n], e), i = Ft.makeSpan(["strut"]);
            return i.style.height = o.height + o.depth + "em", i.style.verticalAlign = -o.depth + "em", o.children.unshift(i), o = Ft.makeVList({
              positionType: "firstBaseline",
              children: [{type: "elem", elem: o}]
            }, e), Ft.makeSpan(["mord"], [o], e)
          },
          mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mpadded", [we(t.body, e)]);
            if ("rlap" !== t.alignment) {
              var n = "llap" === t.alignment ? "-1" : "-0.5";
              r.setAttribute("lspace", n + "width")
            }
            return r.setAttribute("width", "0px"), r
          }
        }), Xt({
          type: "styling",
          names: ["\\(", "$"],
          props: {numArgs: 0, allowedInText: !0, allowedInMath: !1, consumeMode: "math"},
          handler: function (t, e) {
            var r = t.funcName, n = t.parser, o = n.mode;
            n.switchMode("math");
            var i = "\\(" === r ? "\\)" : "$", a = n.parseExpression(!1, i);
            return n.expect(i, !1), n.switchMode(o), n.consume(), {
              type: "styling",
              mode: n.mode,
              style: "text",
              body: a
            }
          }
        }), Xt({
          type: "text",
          names: ["\\)", "\\]"],
          props: {numArgs: 0, allowedInText: !0, allowedInMath: !1},
          handler: function (t, e) {
            throw new a("Mismatched " + t.funcName)
          }
        });
        var Or = function (t, e) {
          switch (e.style.size) {
            case w.DISPLAY.size:
              return t.display;
            case w.TEXT.size:
              return t.text;
            case w.SCRIPT.size:
              return t.script;
            case w.SCRIPTSCRIPT.size:
              return t.scriptscript;
            default:
              return t.text
          }
        };
        Xt({
          type: "mathchoice", names: ["\\mathchoice"], props: {numArgs: 4}, handler: function (t, e) {
            return {
              type: "mathchoice",
              mode: t.parser.mode,
              display: Zt(e[0]),
              text: Zt(e[1]),
              script: Zt(e[2]),
              scriptscript: Zt(e[3])
            }
          }, htmlBuilder: function (t, e) {
            var r = Or(t, e), n = ie(r, e, !1);
            return Ft.makeFragment(n)
          }, mathmlBuilder: function (t, e) {
            var r = Or(t, e);
            return xe(r, e)
          }
        });
        var Er = function (t, e) {
          var r, n, o, i = !1, a = Ut(t, "supsub");
          a ? (r = a.sup, n = a.sub, o = Bt(a.base, "op"), i = !0) : o = Bt(t, "op");
          var s, u = e.style, c = !1;
          if (u.size === w.DISPLAY.size && o.symbol && !m.contains(["\\smallint"], o.name) && (c = !0), o.symbol) {
            var l = c ? "Size2-Regular" : "Size1-Regular", h = "";
            if ("\\oiint" !== o.name && "\\oiiint" !== o.name || (h = o.name.substr(1), o.name = "oiint" === h ? "\\iint" : "\\iiint"), s = Ft.makeSymbol(o.name, l, "math", e, ["mop", "op-symbol", c ? "large-op" : "small-op"]), h.length > 0) {
              var f = s.italic, p = Ft.staticSvg(h + "Size" + (c ? "2" : "1"), e);
              s = Ft.makeVList({
                positionType: "individualShift",
                children: [{type: "elem", elem: s, shift: 0}, {type: "elem", elem: p, shift: c ? .08 : 0}]
              }, e), o.name = "\\" + h, s.classes.unshift("mop"), s.italic = f
            }
          } else if (o.body) {
            var d = ie(o.body, e, !0);
            1 === d.length && d[0] instanceof D ? (s = d[0]).classes[0] = "mop" : s = Ft.makeSpan(["mop"], Ft.tryCombineChars(d), e)
          } else {
            for (var g = [], v = 1; v < o.name.length; v++) g.push(Ft.mathsym(o.name[v], o.mode));
            s = Ft.makeSpan(["mop"], g, e)
          }
          var y = 0, b = 0;
          if ((s instanceof D || "\\oiint" === o.name || "\\oiiint" === o.name) && !o.suppressBaseShift && (y = (s.height - s.depth) / 2 - e.fontMetrics().axisHeight, b = s.italic), i) {
            var _, x, S;
            if (s = Ft.makeSpan([], [s]), r) {
              var k = le(r, e.havingStyle(u.sup()), e);
              x = {elem: k, kern: Math.max(e.fontMetrics().bigOpSpacing1, e.fontMetrics().bigOpSpacing3 - k.depth)}
            }
            if (n) {
              var T = le(n, e.havingStyle(u.sub()), e);
              _ = {elem: T, kern: Math.max(e.fontMetrics().bigOpSpacing2, e.fontMetrics().bigOpSpacing4 - T.height)}
            }
            if (x && _) {
              var M = e.fontMetrics().bigOpSpacing5 + _.elem.height + _.elem.depth + _.kern + s.depth + y;
              S = Ft.makeVList({
                positionType: "bottom",
                positionData: M,
                children: [{type: "kern", size: e.fontMetrics().bigOpSpacing5}, {
                  type: "elem",
                  elem: _.elem,
                  marginLeft: -b + "em"
                }, {type: "kern", size: _.kern}, {type: "elem", elem: s}, {type: "kern", size: x.kern}, {
                  type: "elem",
                  elem: x.elem,
                  marginLeft: b + "em"
                }, {type: "kern", size: e.fontMetrics().bigOpSpacing5}]
              }, e)
            } else if (_) {
              var A = s.height - y;
              S = Ft.makeVList({
                positionType: "top",
                positionData: A,
                children: [{type: "kern", size: e.fontMetrics().bigOpSpacing5}, {
                  type: "elem",
                  elem: _.elem,
                  marginLeft: -b + "em"
                }, {type: "kern", size: _.kern}, {type: "elem", elem: s}]
              }, e)
            } else {
              if (!x) return s;
              var C = s.depth + y;
              S = Ft.makeVList({
                positionType: "bottom",
                positionData: C,
                children: [{type: "elem", elem: s}, {type: "kern", size: x.kern}, {
                  type: "elem",
                  elem: x.elem,
                  marginLeft: b + "em"
                }, {type: "kern", size: e.fontMetrics().bigOpSpacing5}]
              }, e)
            }
            return Ft.makeSpan(["mop", "op-limits"], [S], e)
          }
          return y && (s.style.position = "relative", s.style.top = y + "em"), s
        }, zr = function (t, e) {
          var r;
          if (t.symbol) r = new pe("mo", [ve(t.name, t.mode)]); else {
            if (!t.body) return fe([r = new pe("mi", [new de(t.name.slice(1))]), new pe("mo", [ve("⁡", "text")])]);
            r = new pe("mo", _e(t.body, e))
          }
          return r
        }, Ir = {
          "∏": "\\prod",
          "∐": "\\coprod",
          "∑": "\\sum",
          "⋀": "\\bigwedge",
          "⋁": "\\bigvee",
          "⋂": "\\bigcap",
          "⋃": "\\bigcap",
          "⨀": "\\bigodot",
          "⨁": "\\bigoplus",
          "⨂": "\\bigotimes",
          "⨄": "\\biguplus",
          "⨆": "\\bigsqcup"
        };
        Xt({
          type: "op",
          names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
          props: {numArgs: 0},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName;
            return 1 === n.length && (n = Ir[n]), {type: "op", mode: r.mode, limits: !0, symbol: !0, name: n}
          },
          htmlBuilder: Er,
          mathmlBuilder: zr
        }), Xt({
          type: "op", names: ["\\mathop"], props: {numArgs: 1}, handler: function (t, e) {
            var r = t.parser, n = e[0];
            return {type: "op", mode: r.mode, limits: !1, symbol: !1, body: Zt(n)}
          }, htmlBuilder: Er, mathmlBuilder: zr
        });
        var Nr = {"∫": "\\int", "∬": "\\iint", "∭": "\\iiint", "∮": "\\oint", "∯": "\\oiint", "∰": "\\oiiint"};

        function Dr(t, e, r) {
          for (var n = ie(t, e, !1), o = e.sizeMultiplier / r.sizeMultiplier, i = 0; i < n.length; i++) {
            var a = n[i].classes.indexOf("sizing");
            a < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(r)) : n[i].classes[a + 1] === "reset-size" + e.size && (n[i].classes[a + 1] = "reset-size" + r.size), n[i].height *= o, n[i].depth *= o
          }
          return Ft.makeFragment(n)
        }

        Xt({
          type: "op",
          names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
          props: {numArgs: 0},
          handler: function (t) {
            var e = t.parser, r = t.funcName;
            return {type: "op", mode: e.mode, limits: !1, symbol: !1, name: r}
          },
          htmlBuilder: Er,
          mathmlBuilder: zr
        }), Xt({
          type: "op",
          names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
          props: {numArgs: 0},
          handler: function (t) {
            var e = t.parser, r = t.funcName;
            return {type: "op", mode: e.mode, limits: !0, symbol: !1, name: r}
          },
          htmlBuilder: Er,
          mathmlBuilder: zr
        }), Xt({
          type: "op",
          names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
          props: {numArgs: 0},
          handler: function (t) {
            var e = t.parser, r = t.funcName;
            return 1 === r.length && (r = Nr[r]), {type: "op", mode: e.mode, limits: !1, symbol: !0, name: r}
          },
          htmlBuilder: Er,
          mathmlBuilder: zr
        }), Xt({
          type: "operatorname", names: ["\\operatorname"], props: {numArgs: 1}, handler: function (t, e) {
            var r = t.parser, n = e[0];
            return {type: "operatorname", mode: r.mode, body: Zt(n)}
          }, htmlBuilder: function (t, e) {
            if (t.body.length > 0) {
              for (var r = t.body.map(function (t) {
                var e = t.text;
                return "string" == typeof e ? {type: "textord", mode: t.mode, text: e} : t
              }), n = ie(r, e.withFont("mathrm"), !0), o = 0; o < n.length; o++) {
                var i = n[o];
                i instanceof D && (i.text = i.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
              }
              return Ft.makeSpan(["mop"], n, e)
            }
            return Ft.makeSpan(["mop"], [], e)
          }, mathmlBuilder: function (t, e) {
            for (var r = _e(t.body, e.withFont("mathrm")), n = !0, o = 0; o < r.length; o++) {
              var i = r[o];
              if (i instanceof ge.SpaceNode) ; else if (i instanceof ge.MathNode) switch (i.type) {
                case"mi":
                case"mn":
                case"ms":
                case"mspace":
                case"mtext":
                  break;
                case"mo":
                  var a = i.children[0];
                  1 === i.children.length && a instanceof ge.TextNode ? a.text = a.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
                  break;
                default:
                  n = !1
              } else n = !1
            }
            if (n) {
              var s = r.map(function (t) {
                return t.toText()
              }).join("");
              r = [new ge.TextNode(s, !1)]
            }
            var u = new ge.MathNode("mi", r);
            u.setAttribute("mathvariant", "normal");
            var c = new ge.MathNode("mo", [ve("⁡", "text")]);
            return ge.newDocumentFragment([u, c])
          }
        }), Qt({
          type: "ordgroup", htmlBuilder: function (t, e) {
            return Ft.makeSpan(["mord"], ie(t.body, e, !0), e)
          }, mathmlBuilder: function (t, e) {
            return xe(t.body, e)
          }
        }), Xt({
          type: "overline", names: ["\\overline"], props: {numArgs: 1}, handler: function (t, e) {
            var r = t.parser, n = e[0];
            return {type: "overline", mode: r.mode, body: n}
          }, htmlBuilder: function (t, e) {
            var r = le(t.body, e.havingCrampedStyle()), n = Ft.makeLineSpan("overline-line", e), o = Ft.makeVList({
              positionType: "firstBaseline",
              children: [{type: "elem", elem: r}, {type: "kern", size: 3 * n.height}, {
                type: "elem",
                elem: n
              }, {type: "kern", size: n.height}]
            }, e);
            return Ft.makeSpan(["mord", "overline"], [o], e)
          }, mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mo", [new ge.TextNode("‾")]);
            r.setAttribute("stretchy", "true");
            var n = new ge.MathNode("mover", [we(t.body, e), r]);
            return n.setAttribute("accent", "true"), n
          }
        }), Xt({
          type: "phantom",
          names: ["\\phantom"],
          props: {numArgs: 1, allowedInText: !0},
          handler: function (t, e) {
            var r = t.parser, n = e[0];
            return {type: "phantom", mode: r.mode, body: Zt(n)}
          },
          htmlBuilder: function (t, e) {
            var r = ie(t.body, e.withPhantom(), !1);
            return Ft.makeFragment(r)
          },
          mathmlBuilder: function (t, e) {
            var r = _e(t.body, e);
            return new ge.MathNode("mphantom", r)
          }
        }), Xt({
          type: "hphantom",
          names: ["\\hphantom"],
          props: {numArgs: 1, allowedInText: !0},
          handler: function (t, e) {
            var r = t.parser, n = e[0];
            return {type: "hphantom", mode: r.mode, body: n}
          },
          htmlBuilder: function (t, e) {
            var r = Ft.makeSpan([], [le(t.body, e.withPhantom())]);
            if (r.height = 0, r.depth = 0, r.children) for (var n = 0; n < r.children.length; n++) r.children[n].height = 0, r.children[n].depth = 0;
            return r = Ft.makeVList({positionType: "firstBaseline", children: [{type: "elem", elem: r}]}, e)
          },
          mathmlBuilder: function (t, e) {
            var r = _e(Zt(t.body), e), n = new ge.MathNode("mphantom", r);
            return n.setAttribute("height", "0px"), n
          }
        }), Xt({
          type: "vphantom",
          names: ["\\vphantom"],
          props: {numArgs: 1, allowedInText: !0},
          handler: function (t, e) {
            var r = t.parser, n = e[0];
            return {type: "vphantom", mode: r.mode, body: n}
          },
          htmlBuilder: function (t, e) {
            var r = Ft.makeSpan(["inner"], [le(t.body, e.withPhantom())]), n = Ft.makeSpan(["fix"], []);
            return Ft.makeSpan(["mord", "rlap"], [r, n], e)
          },
          mathmlBuilder: function (t, e) {
            var r = _e(Zt(t.body), e), n = new ge.MathNode("mphantom", r);
            return n.setAttribute("width", "0px"), n
          }
        });
        var Lr = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"],
          Rr = function (t, e) {
            var r = e.havingSize(t.size);
            return Dr(t.body, r, e)
          };
        Xt({
          type: "sizing", names: Lr, props: {numArgs: 0, allowedInText: !0}, handler: function (t, e) {
            var r = t.breakOnTokenText, n = t.funcName, o = t.parser;
            o.consumeSpaces();
            var i = o.parseExpression(!1, r);
            return {type: "sizing", mode: o.mode, size: Lr.indexOf(n) + 1, body: i}
          }, htmlBuilder: Rr, mathmlBuilder: function (t, e) {
            var r = e.havingSize(t.size), n = _e(t.body, r), o = new ge.MathNode("mstyle", n);
            return o.setAttribute("mathsize", r.sizeMultiplier + "em"), o
          }
        }), Xt({
          type: "raisebox",
          names: ["\\raisebox"],
          props: {numArgs: 2, argTypes: ["size", "text"], allowedInText: !0},
          handler: function (t, e) {
            var r = t.parser, n = Bt(e[0], "size").value, o = e[1];
            return {type: "raisebox", mode: r.mode, dy: n, body: o}
          },
          htmlBuilder: function (t, e) {
            var r = {type: "text", mode: t.mode, body: Zt(t.body), font: "mathrm"},
              n = {type: "sizing", mode: t.mode, body: [r], size: 6}, o = Rr(n, e), i = Mt(t.dy, e);
            return Ft.makeVList({positionType: "shift", positionData: -i, children: [{type: "elem", elem: o}]}, e)
          },
          mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mpadded", [we(t.body, e)]), n = t.dy.number + t.dy.unit;
            return r.setAttribute("voffset", n), r
          }
        }), Xt({
          type: "rule",
          names: ["\\rule"],
          props: {numArgs: 2, numOptionalArgs: 1, argTypes: ["size", "size", "size"]},
          handler: function (t, e, r) {
            var n = t.parser, o = r[0], i = Bt(e[0], "size"), a = Bt(e[1], "size");
            return {type: "rule", mode: n.mode, shift: o && Bt(o, "size").value, width: i.value, height: a.value}
          },
          htmlBuilder: function (t, e) {
            var r = Ft.makeSpan(["mord", "rule"], [], e), n = 0;
            t.shift && (n = Mt(t.shift, e));
            var o = Mt(t.width, e), i = Mt(t.height, e);
            return r.style.borderRightWidth = o + "em", r.style.borderTopWidth = i + "em", r.style.bottom = n + "em", r.width = o, r.height = i + n, r.depth = -n, r.maxFontSize = 1.125 * i * e.sizeMultiplier, r
          },
          mathmlBuilder: function (t, e) {
            return new ge.MathNode("mrow")
          }
        }), Xt({
          type: "smash",
          names: ["\\smash"],
          props: {numArgs: 1, numOptionalArgs: 1, allowedInText: !0},
          handler: function (t, e, r) {
            var n = t.parser, o = !1, i = !1, a = r[0] && Bt(r[0], "ordgroup");
            if (a) for (var s = "", u = 0; u < a.body.length; ++u) {
              if ("t" === (s = a.body[u].text)) o = !0; else {
                if ("b" !== s) {
                  o = !1, i = !1;
                  break
                }
                i = !0
              }
            } else o = !0, i = !0;
            var c = e[0];
            return {type: "smash", mode: n.mode, body: c, smashHeight: o, smashDepth: i}
          },
          htmlBuilder: function (t, e) {
            var r = Ft.makeSpan(["mord"], [le(t.body, e)]);
            if (!t.smashHeight && !t.smashDepth) return r;
            if (t.smashHeight && (r.height = 0, r.children)) for (var n = 0; n < r.children.length; n++) r.children[n].height = 0;
            if (t.smashDepth && (r.depth = 0, r.children)) for (var o = 0; o < r.children.length; o++) r.children[o].depth = 0;
            return Ft.makeVList({positionType: "firstBaseline", children: [{type: "elem", elem: r}]}, e)
          },
          mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mpadded", [we(t.body, e)]);
            return t.smashHeight && r.setAttribute("height", "0px"), t.smashDepth && r.setAttribute("depth", "0px"), r
          }
        }), Xt({
          type: "sqrt", names: ["\\sqrt"], props: {numArgs: 1, numOptionalArgs: 1}, handler: function (t, e, r) {
            var n = t.parser, o = r[0], i = e[0];
            return {type: "sqrt", mode: n.mode, body: i, index: o}
          }, htmlBuilder: function (t, e) {
            var r = le(t.body, e.havingCrampedStyle());
            0 === r.height && (r.height = e.fontMetrics().xHeight), r = Ft.wrapFragment(r, e);
            var n = e.fontMetrics().defaultRuleThickness, o = n;
            e.style.id < w.TEXT.id && (o = e.fontMetrics().xHeight);
            var i = n + o / 4, a = r.height + r.depth + i + n, s = Ze(a, e), u = s.span, c = s.ruleWidth,
              l = s.advanceWidth, h = u.height - c;
            h > r.height + r.depth + i && (i = (i + h - r.height - r.depth) / 2);
            var m = u.height - r.height - i - c;
            r.style.paddingLeft = l + "em";
            var f = Ft.makeVList({
              positionType: "firstBaseline",
              children: [{type: "elem", elem: r, wrapperClasses: ["svg-align"]}, {
                type: "kern",
                size: -(r.height + m)
              }, {type: "elem", elem: u}, {type: "kern", size: c}]
            }, e);
            if (t.index) {
              var p = e.havingStyle(w.SCRIPTSCRIPT), d = le(t.index, p, e), g = .6 * (f.height - f.depth),
                v = Ft.makeVList({positionType: "shift", positionData: -g, children: [{type: "elem", elem: d}]}, e),
                y = Ft.makeSpan(["root"], [v]);
              return Ft.makeSpan(["mord", "sqrt"], [y, f], e)
            }
            return Ft.makeSpan(["mord", "sqrt"], [f], e)
          }, mathmlBuilder: function (t, e) {
            var r = t.body, n = t.index;
            return n ? new ge.MathNode("mroot", [we(r, e), we(n, e)]) : new ge.MathNode("msqrt", [we(r, e)])
          }
        });
        var Fr = {display: w.DISPLAY, text: w.TEXT, script: w.SCRIPT, scriptscript: w.SCRIPTSCRIPT};
        Xt({
          type: "styling",
          names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
          props: {numArgs: 0, allowedInText: !0},
          handler: function (t, e) {
            var r = t.breakOnTokenText, n = t.funcName, o = t.parser;
            o.consumeSpaces();
            var i = o.parseExpression(!0, r), a = n.slice(1, n.length - 5);
            return {type: "styling", mode: o.mode, style: a, body: i}
          },
          htmlBuilder: function (t, e) {
            var r = Fr[t.style], n = e.havingStyle(r).withFont("");
            return Dr(t.body, n, e)
          },
          mathmlBuilder: function (t, e) {
            var r = {display: w.DISPLAY, text: w.TEXT, script: w.SCRIPT, scriptscript: w.SCRIPTSCRIPT}[t.style],
              n = e.havingStyle(r), o = _e(t.body, n), i = new ge.MathNode("mstyle", o), a = {
                display: ["0", "true"],
                text: ["0", "false"],
                script: ["1", "false"],
                scriptscript: ["2", "false"]
              }[t.style];
            return i.setAttribute("scriptlevel", a[0]), i.setAttribute("displaystyle", a[1]), i
          }
        });
        Qt({
          type: "supsub", htmlBuilder: function (t, e) {
            var r = function (t, e) {
              var r = t.base;
              return r ? "op" === r.type ? r.limits && (e.style.size === w.DISPLAY.size || r.alwaysHandleSupSub) ? Er : null : "accent" === r.type ? m.isCharacterBox(r.base) ? Ee : null : "horizBrace" === r.type && !t.sub === r.isOver ? Pr : null : null
            }(t, e);
            if (r) return r(t, e);
            var n, o, i, a = t.base, s = t.sup, u = t.sub, c = le(a, e), l = e.fontMetrics(), h = 0, f = 0,
              p = a && m.isCharacterBox(a);
            if (s) {
              var d = e.havingStyle(e.style.sup());
              n = le(s, d, e), p || (h = c.height - d.fontMetrics().supDrop * d.sizeMultiplier / e.sizeMultiplier)
            }
            if (u) {
              var g = e.havingStyle(e.style.sub());
              o = le(u, g, e), p || (f = c.depth + g.fontMetrics().subDrop * g.sizeMultiplier / e.sizeMultiplier)
            }
            i = e.style === w.DISPLAY ? l.sup1 : e.style.cramped ? l.sup3 : l.sup2;
            var v, y = e.sizeMultiplier, b = .5 / l.ptPerEm / y + "em", _ = null;
            if (o) {
              var x = t.base && "op" === t.base.type && t.base.name && ("\\oiint" === t.base.name || "\\oiiint" === t.base.name);
              (c instanceof D || x) && (_ = -c.italic + "em")
            }
            if (n && o) {
              h = Math.max(h, i, n.depth + .25 * l.xHeight), f = Math.max(f, l.sub2);
              var S = 4 * l.defaultRuleThickness;
              if (h - n.depth - (o.height - f) < S) {
                f = S - (h - n.depth) + o.height;
                var k = .8 * l.xHeight - (h - n.depth);
                k > 0 && (h += k, f -= k)
              }
              var T = [{type: "elem", elem: o, shift: f, marginRight: b, marginLeft: _}, {
                type: "elem",
                elem: n,
                shift: -h,
                marginRight: b
              }];
              v = Ft.makeVList({positionType: "individualShift", children: T}, e)
            } else if (o) {
              f = Math.max(f, l.sub1, o.height - .8 * l.xHeight);
              var M = [{type: "elem", elem: o, marginLeft: _, marginRight: b}];
              v = Ft.makeVList({positionType: "shift", positionData: f, children: M}, e)
            } else {
              if (!n) throw new Error("supsub must have either sup or sub.");
              h = Math.max(h, i, n.depth + .25 * l.xHeight), v = Ft.makeVList({
                positionType: "shift",
                positionData: -h,
                children: [{type: "elem", elem: n, marginRight: b}]
              }, e)
            }
            var A = se(c, "right") || "mord";
            return Ft.makeSpan([A], [c, Ft.makeSpan(["msupsub"], [v])], e)
          }, mathmlBuilder: function (t, e) {
            var r, n = !1, o = Ut(t.base, "horizBrace");
            o && !!t.sup === o.isOver && (n = !0, r = o.isOver);
            var i, a = [we(t.base, e)];
            if (t.sub && a.push(we(t.sub, e)), t.sup && a.push(we(t.sup, e)), n) i = r ? "mover" : "munder"; else if (t.sub) if (t.sup) {
              var s = t.base;
              i = s && "op" === s.type && s.limits && e.style === w.DISPLAY ? "munderover" : "msubsup"
            } else {
              var u = t.base;
              i = u && "op" === u.type && u.limits && e.style === w.DISPLAY ? "munder" : "msub"
            } else {
              var c = t.base;
              i = c && "op" === c.type && c.limits && e.style === w.DISPLAY ? "mover" : "msup"
            }
            return new ge.MathNode(i, a)
          }
        }), Qt({
          type: "atom", htmlBuilder: function (t, e) {
            return Ft.mathsym(t.text, t.mode, e, ["m" + t.family])
          }, mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mo", [ve(t.text, t.mode)]);
            if ("bin" === t.family) {
              var n = be(t, e);
              "bold-italic" === n && r.setAttribute("mathvariant", n)
            } else "punct" === t.family && r.setAttribute("separator", "true");
            return r
          }
        });
        var Br = {mi: "italic", mn: "normal", mtext: "normal"};
        Qt({
          type: "mathord", htmlBuilder: function (t, e) {
            return Ft.makeOrd(t, e, "mathord")
          }, mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mi", [ve(t.text, t.mode, e)]), n = be(t, e) || "italic";
            return n !== Br[r.type] && r.setAttribute("mathvariant", n), r
          }
        }), Qt({
          type: "textord", htmlBuilder: function (t, e) {
            return Ft.makeOrd(t, e, "textord")
          }, mathmlBuilder: function (t, e) {
            var r, n = ve(t.text, t.mode, e), o = be(t, e) || "normal";
            return r = "text" === t.mode ? new ge.MathNode("mtext", [n]) : /[0-9]/.test(t.text) ? new ge.MathNode("mn", [n]) : "\\prime" === t.text ? new ge.MathNode("mo", [n]) : new ge.MathNode("mi", [n]), o !== Br[r.type] && r.setAttribute("mathvariant", o), r
          }
        });
        var Ur = {"\\nobreak": "nobreak", "\\allowbreak": "allowbreak"}, jr = {
          " ": {},
          "\\ ": {},
          "~": {className: "nobreak"},
          "\\space": {},
          "\\nobreakspace": {className: "nobreak"}
        };
        Qt({
          type: "spacing", htmlBuilder: function (t, e) {
            if (jr.hasOwnProperty(t.text)) {
              var r = jr[t.text].className || "";
              if ("text" === t.mode) {
                var n = Ft.makeOrd(t, e, "textord");
                return n.classes.push(r), n
              }
              return Ft.makeSpan(["mspace", r], [Ft.mathsym(t.text, t.mode, e)], e)
            }
            if (Ur.hasOwnProperty(t.text)) return Ft.makeSpan(["mspace", Ur[t.text]], [], e);
            throw new a('Unknown type of space "' + t.text + '"')
          }, mathmlBuilder: function (t, e) {
            if (!jr.hasOwnProperty(t.text)) {
              if (Ur.hasOwnProperty(t.text)) return new ge.MathNode("mspace");
              throw new a('Unknown type of space "' + t.text + '"')
            }
            return new ge.MathNode("mtext", [new ge.TextNode(" ")])
          }
        }), Qt({
          type: "tag", mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mtable", [new ge.MathNode("mlabeledtr", [new ge.MathNode("mtd", [xe(t.tag, e)]), new ge.MathNode("mtd", [xe(t.body, e)])])]);
            return r.setAttribute("side", "right"), r
          }
        });
        var qr = {
          "\\text": void 0,
          "\\textrm": "textrm",
          "\\textsf": "textsf",
          "\\texttt": "texttt",
          "\\textnormal": "textrm"
        }, Hr = {"\\textbf": "textbf"}, Wr = {"\\textit": "textit"}, Vr = function (t, e) {
          var r = t.font;
          return r ? qr[r] ? e.withTextFontFamily(qr[r]) : Hr[r] ? e.withTextFontWeight(Hr[r]) : e.withTextFontShape(Wr[r]) : e
        };
        Xt({
          type: "text",
          names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"],
          props: {numArgs: 1, argTypes: ["text"], greediness: 2, allowedInText: !0, consumeMode: "text"},
          handler: function (t, e) {
            var r = t.parser, n = t.funcName, o = e[0];
            return {type: "text", mode: r.mode, body: Zt(o), font: n}
          },
          htmlBuilder: function (t, e) {
            var r = Vr(t, e), n = ie(t.body, r, !0);
            return Ft.makeSpan(["mord", "text"], Ft.tryCombineChars(n), r)
          },
          mathmlBuilder: function (t, e) {
            var r = Vr(t, e);
            return xe(t.body, r)
          }
        }), Xt({
          type: "underline",
          names: ["\\underline"],
          props: {numArgs: 1, allowedInText: !0},
          handler: function (t, e) {
            return {type: "underline", mode: t.parser.mode, body: e[0]}
          },
          htmlBuilder: function (t, e) {
            var r = le(t.body, e), n = Ft.makeLineSpan("underline-line", e), o = Ft.makeVList({
              positionType: "top",
              positionData: r.height,
              children: [{type: "kern", size: n.height}, {type: "elem", elem: n}, {
                type: "kern",
                size: 3 * n.height
              }, {type: "elem", elem: r}]
            }, e);
            return Ft.makeSpan(["mord", "underline"], [o], e)
          },
          mathmlBuilder: function (t, e) {
            var r = new ge.MathNode("mo", [new ge.TextNode("‾")]);
            r.setAttribute("stretchy", "true");
            var n = new ge.MathNode("munder", [we(t.body, e), r]);
            return n.setAttribute("accentunder", "true"), n
          }
        }), Xt({
          type: "verb", names: ["\\verb"], props: {numArgs: 0, allowedInText: !0}, handler: function (t, e, r) {
            throw new a("\\verb ended by end of line instead of matching delimiter")
          }, htmlBuilder: function (t, e) {
            for (var r = Gr(t), n = [], o = e.havingStyle(e.style.text()), i = 0; i < r.length; i++) {
              var a = r[i];
              "~" === a && (a = "\\textasciitilde"), n.push(Ft.makeSymbol(a, "Typewriter-Regular", t.mode, o, ["mord", "texttt"]))
            }
            return Ft.makeSpan(["mord", "text"].concat(o.sizingClasses(e)), Ft.tryCombineChars(n), o)
          }, mathmlBuilder: function (t, e) {
            var r = new ge.TextNode(Gr(t)), n = new ge.MathNode("mtext", [r]);
            return n.setAttribute("mathvariant", "monospace"), n
          }
        });
        var Gr = function (t) {
            return t.body.replace(/ /g, t.star ? "␣" : " ")
          }, Yr = Jt, Jr = new RegExp("^(\\\\[a-zA-Z@]+)[ \r\n\t]*$"), Kr = new RegExp("[̀-ͯ]+$"),
          $r = "([ \r\n\t]+)|([!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\ud800-\udbff][\udc00-\udfff][̀-ͯ]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])",
          Xr = (new RegExp("^\\\\[a-zA-Z@]+"), function () {
            function t(t) {
              this.input = void 0, this.tokenRegex = void 0, this.input = t, this.tokenRegex = new RegExp($r, "g")
            }

            return t.prototype.lex = function () {
              var t = this.input, e = this.tokenRegex.lastIndex;
              if (e === t.length) return new o("EOF", new n(this, e, e));
              var r = this.tokenRegex.exec(t);
              if (null === r || r.index !== e) throw new a("Unexpected character: '" + t[e] + "'", new o(t[e], new n(this, e, e + 1)));
              var i = r[2] || " ", s = i.match(Jr);
              return s && (i = s[1]), new o(i, new n(this, e, this.tokenRegex.lastIndex))
            }, t
          }()), Qr = function () {
            function t(t, e) {
              void 0 === t && (t = {}), void 0 === e && (e = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = e, this.builtins = t, this.undefStack = []
            }

            var e = t.prototype;
            return e.beginGroup = function () {
              this.undefStack.push({})
            }, e.endGroup = function () {
              if (0 === this.undefStack.length) throw new a("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
              var t = this.undefStack.pop();
              for (var e in t) t.hasOwnProperty(e) && (void 0 === t[e] ? delete this.current[e] : this.current[e] = t[e])
            }, e.has = function (t) {
              return this.current.hasOwnProperty(t) || this.builtins.hasOwnProperty(t)
            }, e.get = function (t) {
              return this.current.hasOwnProperty(t) ? this.current[t] : this.builtins[t]
            }, e.set = function (t, e, r) {
              if (void 0 === r && (r = !1), r) {
                for (var n = 0; n < this.undefStack.length; n++) delete this.undefStack[n][t];
                this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][t] = e)
              } else {
                var o = this.undefStack[this.undefStack.length - 1];
                o && !o.hasOwnProperty(t) && (o[t] = this.current[t])
              }
              this.current[t] = e
            }, t
          }(), Zr = {}, tn = Zr;

        function en(t, e) {
          Zr[t] = e
        }

        en("\\@firstoftwo", function (t) {
          return {tokens: t.consumeArgs(2)[0], numArgs: 0}
        }), en("\\@secondoftwo", function (t) {
          return {tokens: t.consumeArgs(2)[1], numArgs: 0}
        }), en("\\@ifnextchar", function (t) {
          var e = t.consumeArgs(3), r = t.future();
          return 1 === e[0].length && e[0][0].text === r.text ? {tokens: e[1], numArgs: 0} : {tokens: e[2], numArgs: 0}
        }), en("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), en("\\TextOrMath", function (t) {
          var e = t.consumeArgs(2);
          return "text" === t.mode ? {tokens: e[0], numArgs: 0} : {tokens: e[1], numArgs: 0}
        });
        var rn = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          a: 10,
          A: 10,
          b: 11,
          B: 11,
          c: 12,
          C: 12,
          d: 13,
          D: 13,
          e: 14,
          E: 14,
          f: 15,
          F: 15
        };
        en("\\char", function (t) {
          var e, r = t.popToken(), n = "";
          if ("'" === r.text) e = 8, r = t.popToken(); else if ('"' === r.text) e = 16, r = t.popToken(); else if ("`" === r.text) if ("\\" === (r = t.popToken()).text[0]) n = r.text.charCodeAt(1); else {
            if ("EOF" === r.text) throw new a("\\char` missing argument");
            n = r.text.charCodeAt(0)
          } else e = 10;
          if (e) {
            if (null == (n = rn[r.text]) || n >= e) throw new a("Invalid base-" + e + " digit " + r.text);
            for (var o; null != (o = rn[t.future().text]) && o < e;) n *= e, n += o, t.popToken()
          }
          return "\\@char{" + n + "}"
        });
        var nn = function (t, e) {
          var r = t.consumeArgs(1)[0];
          if (1 !== r.length) throw new a("\\gdef's first argument must be a macro name");
          var n = r[0].text, o = 0;
          for (r = t.consumeArgs(1)[0]; 1 === r.length && "#" === r[0].text;) {
            if (1 !== (r = t.consumeArgs(1)[0]).length) throw new a('Invalid argument number length "' + r.length + '"');
            if (!/^[1-9]$/.test(r[0].text)) throw new a('Invalid argument number "' + r[0].text + '"');
            if (o++, parseInt(r[0].text) !== o) throw new a('Argument number "' + r[0].text + '" out of order');
            r = t.consumeArgs(1)[0]
          }
          return t.macros.set(n, {tokens: r, numArgs: o}, e), ""
        };
        en("\\gdef", function (t) {
          return nn(t, !0)
        }), en("\\def", function (t) {
          return nn(t, !1)
        }), en("\\global", function (t) {
          var e = t.consumeArgs(1)[0];
          if (1 !== e.length) throw new a("Invalid command after \\global");
          var r = e[0].text;
          if ("\\def" === r) return nn(t, !0);
          throw new a("Invalid command '" + r + "' after \\global")
        });
        var on = function (t, e, r) {
          var n = t.consumeArgs(1)[0];
          if (1 !== n.length) throw new a("\\newcommand's first argument must be a macro name");
          var o = n[0].text, i = t.isDefined(o);
          if (i && !e) throw new a("\\newcommand{" + o + "} attempting to redefine " + o + "; use \\renewcommand");
          if (!i && !r) throw new a("\\renewcommand{" + o + "} when command " + o + " does not yet exist; use \\newcommand");
          var s = 0;
          if (1 === (n = t.consumeArgs(1)[0]).length && "[" === n[0].text) {
            for (var u = "", c = t.expandNextToken(); "]" !== c.text && "EOF" !== c.text;) u += c.text, c = t.expandNextToken();
            if (!u.match(/^\s*[0-9]+\s*$/)) throw new a("Invalid number of arguments: " + u);
            s = parseInt(u), n = t.consumeArgs(1)[0]
          }
          return t.macros.set(o, {tokens: n, numArgs: s}), ""
        };
        en("\\newcommand", function (t) {
          return on(t, !1, !0)
        }), en("\\renewcommand", function (t) {
          return on(t, !0, !1)
        }), en("\\providecommand", function (t) {
          return on(t, !0, !0)
        }), en("\\bgroup", "{"), en("\\egroup", "}"), en("\\begingroup", "{"), en("\\endgroup", "}"), en("\\lq", "`"), en("\\rq", "'"), en("\\aa", "\\r a"), en("\\AA", "\\r A"), en("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"), en("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), en("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"), en("ℂ", "\\mathbb{C}"), en("ℍ", "\\mathbb{H}"), en("ℕ", "\\mathbb{N}"), en("ℙ", "\\mathbb{P}"), en("ℚ", "\\mathbb{Q}"), en("ℝ", "\\mathbb{R}"), en("ℤ", "\\mathbb{Z}"), en("ℎ", "\\mathit{h}"), en("ℬ", "\\mathscr{B}"), en("ℰ", "\\mathscr{E}"), en("ℱ", "\\mathscr{F}"), en("ℋ", "\\mathscr{H}"), en("ℐ", "\\mathscr{I}"), en("ℒ", "\\mathscr{L}"), en("ℳ", "\\mathscr{M}"), en("ℛ", "\\mathscr{R}"), en("ℭ", "\\mathfrak{C}"), en("ℌ", "\\mathfrak{H}"), en("ℨ", "\\mathfrak{Z}"), en("·", "\\cdotp"), en("\\llap", "\\mathllap{\\textrm{#1}}"), en("\\rlap", "\\mathrlap{\\textrm{#1}}"), en("\\clap", "\\mathclap{\\textrm{#1}}"), en("\\not", "\\mathrel{\\mathrlap\\@not}"), en("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"), en("\\ne", "\\neq"), en("≠", "\\neq"), en("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"), en("∉", "\\notin"), en("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"), en("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"), en("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"), en("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"), en("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"), en("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"), en("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"), en("⟂", "\\perp"), en("‼", "\\mathclose{!\\mkern-0.8mu!}"), en("∌", "\\notni"), en("⌜", "\\ulcorner"), en("⌝", "\\urcorner"), en("⌞", "\\llcorner"), en("⌟", "\\lrcorner"), en("©", "\\copyright"), en("®", "\\textregistered"), en("️", "\\textregistered"), en("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), en("⋮", "\\vdots"), en("\\varGamma", "\\mathit{\\Gamma}"), en("\\varDelta", "\\mathit{\\Delta}"), en("\\varTheta", "\\mathit{\\Theta}"), en("\\varLambda", "\\mathit{\\Lambda}"), en("\\varXi", "\\mathit{\\Xi}"), en("\\varPi", "\\mathit{\\Pi}"), en("\\varSigma", "\\mathit{\\Sigma}"), en("\\varUpsilon", "\\mathit{\\Upsilon}"), en("\\varPhi", "\\mathit{\\Phi}"), en("\\varPsi", "\\mathit{\\Psi}"), en("\\varOmega", "\\mathit{\\Omega}"), en("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"), en("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), en("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), en("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), en("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
        var an = {
          ",": "\\dotsc",
          "\\not": "\\dotsb",
          "+": "\\dotsb",
          "=": "\\dotsb",
          "<": "\\dotsb",
          ">": "\\dotsb",
          "-": "\\dotsb",
          "*": "\\dotsb",
          ":": "\\dotsb",
          "\\DOTSB": "\\dotsb",
          "\\coprod": "\\dotsb",
          "\\bigvee": "\\dotsb",
          "\\bigwedge": "\\dotsb",
          "\\biguplus": "\\dotsb",
          "\\bigcap": "\\dotsb",
          "\\bigcup": "\\dotsb",
          "\\prod": "\\dotsb",
          "\\sum": "\\dotsb",
          "\\bigotimes": "\\dotsb",
          "\\bigoplus": "\\dotsb",
          "\\bigodot": "\\dotsb",
          "\\bigsqcup": "\\dotsb",
          "\\And": "\\dotsb",
          "\\longrightarrow": "\\dotsb",
          "\\Longrightarrow": "\\dotsb",
          "\\longleftarrow": "\\dotsb",
          "\\Longleftarrow": "\\dotsb",
          "\\longleftrightarrow": "\\dotsb",
          "\\Longleftrightarrow": "\\dotsb",
          "\\mapsto": "\\dotsb",
          "\\longmapsto": "\\dotsb",
          "\\hookrightarrow": "\\dotsb",
          "\\doteq": "\\dotsb",
          "\\mathbin": "\\dotsb",
          "\\mathrel": "\\dotsb",
          "\\relbar": "\\dotsb",
          "\\Relbar": "\\dotsb",
          "\\xrightarrow": "\\dotsb",
          "\\xleftarrow": "\\dotsb",
          "\\DOTSI": "\\dotsi",
          "\\int": "\\dotsi",
          "\\oint": "\\dotsi",
          "\\iint": "\\dotsi",
          "\\iiint": "\\dotsi",
          "\\iiiint": "\\dotsi",
          "\\idotsint": "\\dotsi",
          "\\DOTSX": "\\dotsx"
        };
        en("\\dots", function (t) {
          var e = "\\dotso", r = t.expandAfterFuture().text;
          return r in an ? e = an[r] : "\\not" === r.substr(0, 4) ? e = "\\dotsb" : r in Y.math && m.contains(["bin", "rel"], Y.math[r].group) && (e = "\\dotsb"), e
        });
        var sn = {
          ")": !0,
          "]": !0,
          "\\rbrack": !0,
          "\\}": !0,
          "\\rbrace": !0,
          "\\rangle": !0,
          "\\rceil": !0,
          "\\rfloor": !0,
          "\\rgroup": !0,
          "\\rmoustache": !0,
          "\\right": !0,
          "\\bigr": !0,
          "\\biggr": !0,
          "\\Bigr": !0,
          "\\Biggr": !0,
          $: !0,
          ";": !0,
          ".": !0,
          ",": !0
        };
        en("\\dotso", function (t) {
          return t.future().text in sn ? "\\ldots\\," : "\\ldots"
        }), en("\\dotsc", function (t) {
          var e = t.future().text;
          return e in sn && "," !== e ? "\\ldots\\," : "\\ldots"
        }), en("\\cdots", function (t) {
          return t.future().text in sn ? "\\@cdots\\," : "\\@cdots"
        }), en("\\dotsb", "\\cdots"), en("\\dotsm", "\\cdots"), en("\\dotsi", "\\!\\cdots"), en("\\dotsx", "\\ldots\\,"), en("\\DOTSI", "\\relax"), en("\\DOTSB", "\\relax"), en("\\DOTSX", "\\relax"), en("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), en("\\,", "\\tmspace+{3mu}{.1667em}"), en("\\thinspace", "\\,"), en("\\>", "\\mskip{4mu}"), en("\\:", "\\tmspace+{4mu}{.2222em}"), en("\\medspace", "\\:"), en("\\;", "\\tmspace+{5mu}{.2777em}"), en("\\thickspace", "\\;"), en("\\!", "\\tmspace-{3mu}{.1667em}"), en("\\negthinspace", "\\!"), en("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), en("\\negthickspace", "\\tmspace-{5mu}{.277em}"), en("\\enspace", "\\kern.5em "), en("\\enskip", "\\hskip.5em\\relax"), en("\\quad", "\\hskip1em\\relax"), en("\\qquad", "\\hskip2em\\relax"), en("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), en("\\tag@paren", "\\tag@literal{({#1})}"), en("\\tag@literal", function (t) {
          if (t.macros.get("\\df@tag")) throw new a("Multiple \\tag");
          return "\\gdef\\df@tag{\\text{#1}}"
        }), en("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), en("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), en("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), en("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), en("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\mathrlap{\\mkern0.4mu\\raisebox{0.4mu}{$#1$}}{\\mkern0.8mu#1}}}{\\mathbf{#1}}"), en("\\\\", "\\newline"), en("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
        var un = B["Main-Regular"]["T".charCodeAt(0)][1] - .7 * B["Main-Regular"]["A".charCodeAt(0)][1] + "em";
        en("\\LaTeX", "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" + un + "}{\\scriptsize A}\\kern-.15em\\TeX}{LaTeX}}"), en("\\KaTeX", "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" + un + "}{\\scriptsize A}\\kern-.15em\\TeX}{KaTeX}}"), en("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), en("\\@hspace", "\\hskip #1\\relax"), en("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), en("\\ordinarycolon", ":"), en("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), en("\\dblcolon", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}"), en("\\coloneqq", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}"), en("\\Coloneqq", "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}"), en("\\coloneq", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}"), en("\\Coloneq", "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}"), en("\\eqqcolon", "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), en("\\Eqqcolon", "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}"), en("\\eqcolon", "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), en("\\Eqcolon", "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}"), en("\\colonapprox", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}"), en("\\Colonapprox", "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}"), en("\\colonsim", "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}"), en("\\Colonsim", "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}"), en("≔", "\\coloneqq"), en("≕", "\\eqqcolon"), en("⩴", "\\Coloneqq"), en("\\ratio", "\\vcentcolon"), en("\\coloncolon", "\\dblcolon"), en("\\colonequals", "\\coloneqq"), en("\\coloncolonequals", "\\Coloneqq"), en("\\equalscolon", "\\eqqcolon"), en("\\equalscoloncolon", "\\Eqqcolon"), en("\\colonminus", "\\coloneq"), en("\\coloncolonminus", "\\Coloneq"), en("\\minuscolon", "\\eqcolon"), en("\\minuscoloncolon", "\\Eqcolon"), en("\\coloncolonapprox", "\\Colonapprox"), en("\\coloncolonsim", "\\Colonsim"), en("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), en("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), en("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), en("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), en("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"), en("\\limsup", "\\DOTSB\\mathop{\\operatorname{lim\\,sup}}\\limits"), en("\\liminf", "\\DOTSB\\mathop{\\operatorname{lim\\,inf}}\\limits"), en("⟦", "\\mathopen{[\\mkern-3.2mu[}"), en("⟧", "\\mathclose{]\\mkern-3.2mu]}"), en("\\darr", "\\downarrow"), en("\\dArr", "\\Downarrow"), en("\\Darr", "\\Downarrow"), en("\\lang", "\\langle"), en("\\rang", "\\rangle"), en("\\uarr", "\\uparrow"), en("\\uArr", "\\Uparrow"), en("\\Uarr", "\\Uparrow"), en("\\N", "\\mathbb{N}"), en("\\R", "\\mathbb{R}"), en("\\Z", "\\mathbb{Z}"), en("\\alef", "\\aleph"), en("\\alefsym", "\\aleph"), en("\\Alpha", "\\mathrm{A}"), en("\\Beta", "\\mathrm{B}"), en("\\bull", "\\bullet"), en("\\Chi", "\\mathrm{X}"), en("\\clubs", "\\clubsuit"), en("\\cnums", "\\mathbb{C}"), en("\\Complex", "\\mathbb{C}"), en("\\Dagger", "\\ddagger"), en("\\diamonds", "\\diamondsuit"), en("\\empty", "\\emptyset"), en("\\Epsilon", "\\mathrm{E}"), en("\\Eta", "\\mathrm{H}"), en("\\exist", "\\exists"), en("\\harr", "\\leftrightarrow"), en("\\hArr", "\\Leftrightarrow"), en("\\Harr", "\\Leftrightarrow"), en("\\hearts", "\\heartsuit"), en("\\image", "\\Im"), en("\\infin", "\\infty"), en("\\Iota", "\\mathrm{I}"), en("\\isin", "\\in"), en("\\Kappa", "\\mathrm{K}"), en("\\larr", "\\leftarrow"), en("\\lArr", "\\Leftarrow"), en("\\Larr", "\\Leftarrow"), en("\\lrarr", "\\leftrightarrow"), en("\\lrArr", "\\Leftrightarrow"), en("\\Lrarr", "\\Leftrightarrow"), en("\\Mu", "\\mathrm{M}"), en("\\natnums", "\\mathbb{N}"), en("\\Nu", "\\mathrm{N}"), en("\\Omicron", "\\mathrm{O}"), en("\\plusmn", "\\pm"), en("\\rarr", "\\rightarrow"), en("\\rArr", "\\Rightarrow"), en("\\Rarr", "\\Rightarrow"), en("\\real", "\\Re"), en("\\reals", "\\mathbb{R}"), en("\\Reals", "\\mathbb{R}"), en("\\Rho", "\\mathrm{R}"), en("\\sdot", "\\cdot"), en("\\sect", "\\S"), en("\\spades", "\\spadesuit"), en("\\sub", "\\subset"),en("\\sube", "\\subseteq"),en("\\supe", "\\supseteq"),en("\\Tau", "\\mathrm{T}"),en("\\thetasym", "\\vartheta"),en("\\weierp", "\\wp"),en("\\Zeta", "\\mathrm{Z}");
        var cn = {"\\relax": !0, "^": !0, _: !0, "\\limits": !0, "\\nolimits": !0}, ln = function () {
          function t(t, e, r) {
            this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = e, this.expansionCount = 0, this.feed(t), this.macros = new Qr(tn, e.macros), this.mode = r, this.stack = []
          }

          var e = t.prototype;
          return e.feed = function (t) {
            this.lexer = new Xr(t)
          }, e.switchMode = function (t) {
            this.mode = t
          }, e.beginGroup = function () {
            this.macros.beginGroup()
          }, e.endGroup = function () {
            this.macros.endGroup()
          }, e.future = function () {
            return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1]
          }, e.popToken = function () {
            return this.future(), this.stack.pop()
          }, e.pushToken = function (t) {
            this.stack.push(t)
          }, e.pushTokens = function (t) {
            var e;
            (e = this.stack).push.apply(e, t)
          }, e.consumeSpaces = function () {
            for (; ;) {
              if (" " !== this.future().text) break;
              this.stack.pop()
            }
          }, e.consumeArgs = function (t) {
            for (var e = [], r = 0; r < t; ++r) {
              this.consumeSpaces();
              var n = this.popToken();
              if ("{" === n.text) {
                for (var o = [], i = 1; 0 !== i;) {
                  var s = this.popToken();
                  if (o.push(s), "{" === s.text) ++i; else if ("}" === s.text) --i; else if ("EOF" === s.text) throw new a("End of input in macro argument", n)
                }
                o.pop(), o.reverse(), e[r] = o
              } else {
                if ("EOF" === n.text) throw new a("End of input expecting macro argument");
                e[r] = [n]
              }
            }
            return e
          }, e.expandOnce = function () {
            var t = this.popToken(), e = t.text, r = this._getExpansion(e);
            if (null == r) return this.pushToken(t), t;
            if (this.expansionCount++, this.expansionCount > this.settings.maxExpand) throw new a("Too many expansions: infinite loop or need to increase maxExpand setting");
            var n = r.tokens;
            if (r.numArgs) for (var o = this.consumeArgs(r.numArgs), i = (n = n.slice()).length - 1; i >= 0; --i) {
              var s = n[i];
              if ("#" === s.text) {
                if (0 === i) throw new a("Incomplete placeholder at end of macro body", s);
                if ("#" === (s = n[--i]).text) n.splice(i + 1, 1); else {
                  if (!/^[1-9]$/.test(s.text)) throw new a("Not a valid argument number", s);
                  var u;
                  (u = n).splice.apply(u, [i, 2].concat(o[+s.text - 1]))
                }
              }
            }
            return this.pushTokens(n), n
          }, e.expandAfterFuture = function () {
            return this.expandOnce(), this.future()
          }, e.expandNextToken = function () {
            for (; ;) {
              var t = this.expandOnce();
              if (t instanceof o) {
                if ("\\relax" !== t.text) return this.stack.pop();
                this.stack.pop()
              }
            }
            throw new Error
          }, e.expandMacro = function (t) {
            if (this.macros.get(t)) {
              var e = [], r = this.stack.length;
              for (this.pushToken(new o(t)); this.stack.length > r;) {
                this.expandOnce() instanceof o && e.push(this.stack.pop())
              }
              return e
            }
          }, e.expandMacroAsText = function (t) {
            var e = this.expandMacro(t);
            return e ? e.map(function (t) {
              return t.text
            }).join("") : e
          }, e._getExpansion = function (t) {
            var e = this.macros.get(t);
            if (null == e) return e;
            var r = "function" == typeof e ? e(this) : e;
            if ("string" == typeof r) {
              var n = 0;
              if (-1 !== r.indexOf("#")) for (var o = r.replace(/##/g, ""); -1 !== o.indexOf("#" + (n + 1));) ++n;
              for (var i = new Xr(r), a = [], s = i.lex(); "EOF" !== s.text;) a.push(s), s = i.lex();
              return a.reverse(), {tokens: a, numArgs: n}
            }
            return r
          }, e.isDefined = function (t) {
            return this.macros.has(t) || Yr.hasOwnProperty(t) || Y.math.hasOwnProperty(t) || Y.text.hasOwnProperty(t) || cn.hasOwnProperty(t)
          }, t
        }(), hn = {
          "́": {text: "\\'", math: "\\acute"},
          "̀": {text: "\\`", math: "\\grave"},
          "̈": {text: '\\"', math: "\\ddot"},
          "̃": {text: "\\~", math: "\\tilde"},
          "̄": {text: "\\=", math: "\\bar"},
          "̆": {text: "\\u", math: "\\breve"},
          "̌": {text: "\\v", math: "\\check"},
          "̂": {text: "\\^", math: "\\hat"},
          "̇": {text: "\\.", math: "\\dot"},
          "̊": {text: "\\r", math: "\\mathring"},
          "̋": {text: "\\H"}
        }, mn = {
          "á": "á",
          "à": "à",
          "ä": "ä",
          "ǟ": "ǟ",
          "ã": "ã",
          "ā": "ā",
          "ă": "ă",
          "ắ": "ắ",
          "ằ": "ằ",
          "ẵ": "ẵ",
          "ǎ": "ǎ",
          "â": "â",
          "ấ": "ấ",
          "ầ": "ầ",
          "ẫ": "ẫ",
          "ȧ": "ȧ",
          "ǡ": "ǡ",
          "å": "å",
          "ǻ": "ǻ",
          "ḃ": "ḃ",
          "ć": "ć",
          "č": "č",
          "ĉ": "ĉ",
          "ċ": "ċ",
          "ď": "ď",
          "ḋ": "ḋ",
          "é": "é",
          "è": "è",
          "ë": "ë",
          "ẽ": "ẽ",
          "ē": "ē",
          "ḗ": "ḗ",
          "ḕ": "ḕ",
          "ĕ": "ĕ",
          "ě": "ě",
          "ê": "ê",
          "ế": "ế",
          "ề": "ề",
          "ễ": "ễ",
          "ė": "ė",
          "ḟ": "ḟ",
          "ǵ": "ǵ",
          "ḡ": "ḡ",
          "ğ": "ğ",
          "ǧ": "ǧ",
          "ĝ": "ĝ",
          "ġ": "ġ",
          "ḧ": "ḧ",
          "ȟ": "ȟ",
          "ĥ": "ĥ",
          "ḣ": "ḣ",
          "í": "í",
          "ì": "ì",
          "ï": "ï",
          "ḯ": "ḯ",
          "ĩ": "ĩ",
          "ī": "ī",
          "ĭ": "ĭ",
          "ǐ": "ǐ",
          "î": "î",
          "ǰ": "ǰ",
          "ĵ": "ĵ",
          "ḱ": "ḱ",
          "ǩ": "ǩ",
          "ĺ": "ĺ",
          "ľ": "ľ",
          "ḿ": "ḿ",
          "ṁ": "ṁ",
          "ń": "ń",
          "ǹ": "ǹ",
          "ñ": "ñ",
          "ň": "ň",
          "ṅ": "ṅ",
          "ó": "ó",
          "ò": "ò",
          "ö": "ö",
          "ȫ": "ȫ",
          "õ": "õ",
          "ṍ": "ṍ",
          "ṏ": "ṏ",
          "ȭ": "ȭ",
          "ō": "ō",
          "ṓ": "ṓ",
          "ṑ": "ṑ",
          "ŏ": "ŏ",
          "ǒ": "ǒ",
          "ô": "ô",
          "ố": "ố",
          "ồ": "ồ",
          "ỗ": "ỗ",
          "ȯ": "ȯ",
          "ȱ": "ȱ",
          "ő": "ő",
          "ṕ": "ṕ",
          "ṗ": "ṗ",
          "ŕ": "ŕ",
          "ř": "ř",
          "ṙ": "ṙ",
          "ś": "ś",
          "ṥ": "ṥ",
          "š": "š",
          "ṧ": "ṧ",
          "ŝ": "ŝ",
          "ṡ": "ṡ",
          "ẗ": "ẗ",
          "ť": "ť",
          "ṫ": "ṫ",
          "ú": "ú",
          "ù": "ù",
          "ü": "ü",
          "ǘ": "ǘ",
          "ǜ": "ǜ",
          "ǖ": "ǖ",
          "ǚ": "ǚ",
          "ũ": "ũ",
          "ṹ": "ṹ",
          "ū": "ū",
          "ṻ": "ṻ",
          "ŭ": "ŭ",
          "ǔ": "ǔ",
          "û": "û",
          "ů": "ů",
          "ű": "ű",
          "ṽ": "ṽ",
          "ẃ": "ẃ",
          "ẁ": "ẁ",
          "ẅ": "ẅ",
          "ŵ": "ŵ",
          "ẇ": "ẇ",
          "ẘ": "ẘ",
          "ẍ": "ẍ",
          "ẋ": "ẋ",
          "ý": "ý",
          "ỳ": "ỳ",
          "ÿ": "ÿ",
          "ỹ": "ỹ",
          "ȳ": "ȳ",
          "ŷ": "ŷ",
          "ẏ": "ẏ",
          "ẙ": "ẙ",
          "ź": "ź",
          "ž": "ž",
          "ẑ": "ẑ",
          "ż": "ż",
          "Á": "Á",
          "À": "À",
          "Ä": "Ä",
          "Ǟ": "Ǟ",
          "Ã": "Ã",
          "Ā": "Ā",
          "Ă": "Ă",
          "Ắ": "Ắ",
          "Ằ": "Ằ",
          "Ẵ": "Ẵ",
          "Ǎ": "Ǎ",
          "Â": "Â",
          "Ấ": "Ấ",
          "Ầ": "Ầ",
          "Ẫ": "Ẫ",
          "Ȧ": "Ȧ",
          "Ǡ": "Ǡ",
          "Å": "Å",
          "Ǻ": "Ǻ",
          "Ḃ": "Ḃ",
          "Ć": "Ć",
          "Č": "Č",
          "Ĉ": "Ĉ",
          "Ċ": "Ċ",
          "Ď": "Ď",
          "Ḋ": "Ḋ",
          "É": "É",
          "È": "È",
          "Ë": "Ë",
          "Ẽ": "Ẽ",
          "Ē": "Ē",
          "Ḗ": "Ḗ",
          "Ḕ": "Ḕ",
          "Ĕ": "Ĕ",
          "Ě": "Ě",
          "Ê": "Ê",
          "Ế": "Ế",
          "Ề": "Ề",
          "Ễ": "Ễ",
          "Ė": "Ė",
          "Ḟ": "Ḟ",
          "Ǵ": "Ǵ",
          "Ḡ": "Ḡ",
          "Ğ": "Ğ",
          "Ǧ": "Ǧ",
          "Ĝ": "Ĝ",
          "Ġ": "Ġ",
          "Ḧ": "Ḧ",
          "Ȟ": "Ȟ",
          "Ĥ": "Ĥ",
          "Ḣ": "Ḣ",
          "Í": "Í",
          "Ì": "Ì",
          "Ï": "Ï",
          "Ḯ": "Ḯ",
          "Ĩ": "Ĩ",
          "Ī": "Ī",
          "Ĭ": "Ĭ",
          "Ǐ": "Ǐ",
          "Î": "Î",
          "İ": "İ",
          "Ĵ": "Ĵ",
          "Ḱ": "Ḱ",
          "Ǩ": "Ǩ",
          "Ĺ": "Ĺ",
          "Ľ": "Ľ",
          "Ḿ": "Ḿ",
          "Ṁ": "Ṁ",
          "Ń": "Ń",
          "Ǹ": "Ǹ",
          "Ñ": "Ñ",
          "Ň": "Ň",
          "Ṅ": "Ṅ",
          "Ó": "Ó",
          "Ò": "Ò",
          "Ö": "Ö",
          "Ȫ": "Ȫ",
          "Õ": "Õ",
          "Ṍ": "Ṍ",
          "Ṏ": "Ṏ",
          "Ȭ": "Ȭ",
          "Ō": "Ō",
          "Ṓ": "Ṓ",
          "Ṑ": "Ṑ",
          "Ŏ": "Ŏ",
          "Ǒ": "Ǒ",
          "Ô": "Ô",
          "Ố": "Ố",
          "Ồ": "Ồ",
          "Ỗ": "Ỗ",
          "Ȯ": "Ȯ",
          "Ȱ": "Ȱ",
          "Ő": "Ő",
          "Ṕ": "Ṕ",
          "Ṗ": "Ṗ",
          "Ŕ": "Ŕ",
          "Ř": "Ř",
          "Ṙ": "Ṙ",
          "Ś": "Ś",
          "Ṥ": "Ṥ",
          "Š": "Š",
          "Ṧ": "Ṧ",
          "Ŝ": "Ŝ",
          "Ṡ": "Ṡ",
          "Ť": "Ť",
          "Ṫ": "Ṫ",
          "Ú": "Ú",
          "Ù": "Ù",
          "Ü": "Ü",
          "Ǘ": "Ǘ",
          "Ǜ": "Ǜ",
          "Ǖ": "Ǖ",
          "Ǚ": "Ǚ",
          "Ũ": "Ũ",
          "Ṹ": "Ṹ",
          "Ū": "Ū",
          "Ṻ": "Ṻ",
          "Ŭ": "Ŭ",
          "Ǔ": "Ǔ",
          "Û": "Û",
          "Ů": "Ů",
          "Ű": "Ű",
          "Ṽ": "Ṽ",
          "Ẃ": "Ẃ",
          "Ẁ": "Ẁ",
          "Ẅ": "Ẅ",
          "Ŵ": "Ŵ",
          "Ẇ": "Ẇ",
          "Ẍ": "Ẍ",
          "Ẋ": "Ẋ",
          "Ý": "Ý",
          "Ỳ": "Ỳ",
          "Ÿ": "Ÿ",
          "Ỹ": "Ỹ",
          "Ȳ": "Ȳ",
          "Ŷ": "Ŷ",
          "Ẏ": "Ẏ",
          "Ź": "Ź",
          "Ž": "Ž",
          "Ẑ": "Ẑ",
          "Ż": "Ż",
          "ά": "ά",
          "ὰ": "ὰ",
          "ᾱ": "ᾱ",
          "ᾰ": "ᾰ",
          "έ": "έ",
          "ὲ": "ὲ",
          "ή": "ή",
          "ὴ": "ὴ",
          "ί": "ί",
          "ὶ": "ὶ",
          "ϊ": "ϊ",
          "ΐ": "ΐ",
          "ῒ": "ῒ",
          "ῑ": "ῑ",
          "ῐ": "ῐ",
          "ό": "ό",
          "ὸ": "ὸ",
          "ύ": "ύ",
          "ὺ": "ὺ",
          "ϋ": "ϋ",
          "ΰ": "ΰ",
          "ῢ": "ῢ",
          "ῡ": "ῡ",
          "ῠ": "ῠ",
          "ώ": "ώ",
          "ὼ": "ὼ",
          "Ύ": "Ύ",
          "Ὺ": "Ὺ",
          "Ϋ": "Ϋ",
          "Ῡ": "Ῡ",
          "Ῠ": "Ῠ",
          "Ώ": "Ώ",
          "Ὼ": "Ὼ"
        }, fn = function () {
          function t(t, e) {
            this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new ln(t, e, this.mode), this.settings = e, this.leftrightDepth = 0
          }

          var e = t.prototype;
          return e.expect = function (t, e) {
            if (void 0 === e && (e = !0), this.nextToken.text !== t) throw new a("Expected '" + t + "', got '" + this.nextToken.text + "'", this.nextToken);
            e && this.consume()
          }, e.consume = function () {
            this.nextToken = this.gullet.expandNextToken()
          }, e.switchMode = function (t) {
            this.mode = t, this.gullet.switchMode(t)
          }, e.parse = function () {
            this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor"), this.consume();
            var t = this.parseExpression(!1);
            return this.expect("EOF", !1), this.gullet.endGroup(), t
          }, e.parseExpression = function (e, r) {
            for (var n = []; ;) {
              "math" === this.mode && this.consumeSpaces();
              var o = this.nextToken;
              if (-1 !== t.endOfExpression.indexOf(o.text)) break;
              if (r && o.text === r) break;
              if (e && Yr[o.text] && Yr[o.text].infix) break;
              var i = this.parseAtom(r);
              if (!i) break;
              n.push(i)
            }
            return "text" === this.mode && this.formLigatures(n), this.handleInfixNodes(n)
          }, e.handleInfixNodes = function (t) {
            for (var e, r = -1, n = 0; n < t.length; n++) {
              var o = Ut(t[n], "infix");
              if (o) {
                if (-1 !== r) throw new a("only one infix operator per group", o.token);
                r = n, e = o.replaceWith
              }
            }
            if (-1 !== r && e) {
              var i, s, u = t.slice(0, r), c = t.slice(r + 1);
              return i = 1 === u.length && "ordgroup" === u[0].type ? u[0] : {
                type: "ordgroup",
                mode: this.mode,
                body: u
              }, s = 1 === c.length && "ordgroup" === c[0].type ? c[0] : {
                type: "ordgroup",
                mode: this.mode,
                body: c
              }, ["\\\\abovefrac" === e ? this.callFunction(e, [i, t[r], s], []) : this.callFunction(e, [i, s], [])]
            }
            return t
          }, e.handleSupSubscript = function (e) {
            var r = this.nextToken, n = r.text;
            this.consume(), this.consumeSpaces();
            var o = this.parseGroup(e, !1, t.SUPSUB_GREEDINESS);
            if (!o) throw new a("Expected group after '" + n + "'", r);
            return o
          }, e.handleUnsupportedCmd = function () {
            for (var t = this.nextToken.text, e = [], r = 0; r < t.length; r++) e.push({
              type: "textord",
              mode: "text",
              text: t[r]
            });
            var n = {type: "text", mode: this.mode, body: e},
              o = {type: "color", mode: this.mode, color: this.settings.errorColor, body: [n]};
            return this.consume(), o
          }, e.parseAtom = function (t) {
            var e, r, n = this.parseGroup("atom", !1, null, t);
            if ("text" === this.mode) return n;
            for (; ;) {
              this.consumeSpaces();
              var o = this.nextToken;
              if ("\\limits" === o.text || "\\nolimits" === o.text) {
                var i = Ut(n, "op");
                if (!i) throw new a("Limit controls must follow a math operator", o);
                var s = "\\limits" === o.text;
                i.limits = s, i.alwaysHandleSupSub = !0, this.consume()
              } else if ("^" === o.text) {
                if (e) throw new a("Double superscript", o);
                e = this.handleSupSubscript("superscript")
              } else if ("_" === o.text) {
                if (r) throw new a("Double subscript", o);
                r = this.handleSupSubscript("subscript")
              } else if ("'" === o.text) {
                if (e) throw new a("Double superscript", o);
                var u = {type: "textord", mode: this.mode, text: "\\prime"}, c = [u];
                for (this.consume(); "'" === this.nextToken.text;) c.push(u), this.consume();
                "^" === this.nextToken.text && c.push(this.handleSupSubscript("superscript")), e = {
                  type: "ordgroup",
                  mode: this.mode,
                  body: c
                }
              } else {
                if ("%" !== o.text) break;
                this.consumeComment()
              }
            }
            return e || r ? {type: "supsub", mode: this.mode, base: n, sup: e, sub: r} : n
          }, e.parseFunction = function (t, e, r) {
            var n = this.nextToken, o = n.text, i = Yr[o];
            if (!i) return null;
            if (null != r && i.greediness <= r) throw new a("Got function '" + o + "' with no arguments" + (e ? " as " + e : ""), n);
            if ("text" === this.mode && !i.allowedInText) throw new a("Can't use function '" + o + "' in text mode", n);
            if ("math" === this.mode && !1 === i.allowedInMath) throw new a("Can't use function '" + o + "' in math mode", n);
            if (i.consumeMode) {
              var s = this.mode;
              this.switchMode(i.consumeMode), this.consume(), this.switchMode(s)
            } else this.consume();
            var u = this.parseArguments(o, i), c = u.args, l = u.optArgs;
            return this.callFunction(o, c, l, n, t)
          }, e.callFunction = function (t, e, r, n, o) {
            var i = {funcName: t, parser: this, token: n, breakOnTokenText: o}, s = Yr[t];
            if (s && s.handler) return s.handler(i, e, r);
            throw new a("No function handler for " + t)
          }, e.parseArguments = function (t, e) {
            var r = e.numArgs + e.numOptionalArgs;
            if (0 === r) return {args: [], optArgs: []};
            for (var n = e.greediness, o = [], i = [], s = 0; s < r; s++) {
              var u = e.argTypes && e.argTypes[s], c = s < e.numOptionalArgs;
              s > 0 && !c && this.consumeSpaces(), 0 !== s || c || "math" !== this.mode || this.consumeSpaces();
              var l = this.nextToken, h = this.parseGroupOfType("argument to '" + t + "'", u, c, n);
              if (!h) {
                if (c) {
                  i.push(null);
                  continue
                }
                throw new a("Expected group after '" + t + "'", l)
              }
              (c ? i : o).push(h)
            }
            return {args: o, optArgs: i}
          }, e.parseGroupOfType = function (t, e, r, n) {
            switch (e) {
              case"color":
                return this.parseColorGroup(r);
              case"size":
                return this.parseSizeGroup(r);
              case"url":
                return this.parseUrlGroup(r);
              case"math":
              case"text":
                return this.parseGroup(t, r, n, void 0, e);
              case"original":
              case null:
              case void 0:
                return this.parseGroup(t, r, n);
              default:
                throw new a("Unknown group type as " + t, this.nextToken)
            }
          }, e.consumeSpaces = function () {
            for (; " " === this.nextToken.text;) this.consume()
          }, e.consumeComment = function () {
            for (; "EOF" !== this.nextToken.text && this.nextToken.loc && -1 === this.nextToken.loc.getSource().indexOf("\n");) this.consume();
            if ("EOF" === this.nextToken.text && this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)"), "math" === this.mode) this.consumeSpaces(); else if (this.nextToken.loc) {
              var t = this.nextToken.loc.getSource();
              t.indexOf("\n") === t.length - 1 && this.consumeSpaces()
            }
          }, e.parseStringGroup = function (t, e, r) {
            var n = e ? "[" : "{", o = e ? "]" : "}", i = this.nextToken;
            if (i.text !== n) {
              if (e) return null;
              if (r && "EOF" !== i.text && /[^{}[\]]/.test(i.text)) return this.consume(), i
            }
            var s = this.mode;
            this.mode = "text", this.expect(n);
            for (var u = "", c = this.nextToken, l = 0, h = c; r && l > 0 || this.nextToken.text !== o;) {
              switch (this.nextToken.text) {
                case"EOF":
                  throw new a("Unexpected end of input in " + t, c.range(h, u));
                case"%":
                  if (!r) {
                    this.consumeComment();
                    continue
                  }
                  break;
                case n:
                  l++;
                  break;
                case o:
                  l--
              }
              u += (h = this.nextToken).text, this.consume()
            }
            return this.mode = s, this.expect(o), c.range(h, u)
          }, e.parseRegexGroup = function (t, e) {
            var r = this.mode;
            this.mode = "text";
            for (var n = this.nextToken, o = n, i = ""; "EOF" !== this.nextToken.text && (t.test(i + this.nextToken.text) || "%" === this.nextToken.text);) "%" !== this.nextToken.text ? (i += (o = this.nextToken).text, this.consume()) : this.consumeComment();
            if ("" === i) throw new a("Invalid " + e + ": '" + n.text + "'", n);
            return this.mode = r, n.range(o, i)
          }, e.parseColorGroup = function (t) {
            var e = this.parseStringGroup("color", t);
            if (!e) return null;
            var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(e.text);
            if (!r) throw new a("Invalid color: '" + e.text + "'", e);
            var n = r[0];
            return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), {type: "color-token", mode: this.mode, color: n}
          }, e.parseSizeGroup = function (t) {
            var e, r = !1;
            if (!(e = t || "{" === this.nextToken.text ? this.parseStringGroup("size", t) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))) return null;
            t || 0 !== e.text.length || (e.text = "0pt", r = !0);
            var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e.text);
            if (!n) throw new a("Invalid size: '" + e.text + "'", e);
            var o = {number: +(n[1] + n[2]), unit: n[3]};
            if (!function (t) {
              return "string" != typeof t && (t = t.unit), t in kt || t in Tt || "ex" === t
            }(o)) throw new a("Invalid unit: '" + o.unit + "'", e);
            return {type: "size", mode: this.mode, value: o, isBlank: r}
          }, e.parseUrlGroup = function (t) {
            var e = this.parseStringGroup("url", t, !0);
            if (!e) return null;
            var r = e.text.replace(/\\([#$%&~_^{}])/g, "$1"), n = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(r);
            n = null != n ? n[1] : "_relative";
            var o = this.settings.allowedProtocols;
            if (!m.contains(o, "*") && !m.contains(o, n)) throw new a("Forbidden protocol '" + n + "'", e);
            return {type: "url", mode: this.mode, url: r}
          }, e.parseGroup = function (t, e, r, o, i) {
            var s, u = this.mode, c = this.nextToken, l = c.text;
            if (i && this.switchMode(i), l === (e ? "[" : "{")) {
              this.gullet.beginGroup(), this.consume();
              var h = this.parseExpression(!1, e ? "]" : "}"), m = this.nextToken;
              return i && this.switchMode(u), this.gullet.endGroup(), this.expect(e ? "]" : "}"), {
                type: "ordgroup",
                mode: this.mode,
                loc: n.range(c, m),
                body: h
              }
            }
            if (e) s = null; else if (null == (s = this.parseFunction(o, t, r) || this.parseSymbol()) && "\\" === l[0] && !cn.hasOwnProperty(l)) {
              if (this.settings.throwOnError) throw new a("Undefined control sequence: " + l, c);
              s = this.handleUnsupportedCmd()
            }
            return i && this.switchMode(u), s
          }, e.formLigatures = function (t) {
            for (var e = t.length - 1, r = 0; r < e; ++r) {
              var o = t[r], i = o.text;
              "-" === i && "-" === t[r + 1].text && (r + 1 < e && "-" === t[r + 2].text ? (t.splice(r, 3, {
                type: "textord",
                mode: "text",
                loc: n.range(o, t[r + 2]),
                text: "---"
              }), e -= 2) : (t.splice(r, 2, {
                type: "textord",
                mode: "text",
                loc: n.range(o, t[r + 1]),
                text: "--"
              }), e -= 1)), "'" !== i && "`" !== i || t[r + 1].text !== i || (t.splice(r, 2, {
                type: "textord",
                mode: "text",
                loc: n.range(o, t[r + 1]),
                text: i + i
              }), e -= 1)
            }
          }, e.parseSymbol = function () {
            var t = this.nextToken, e = t.text;
            if (/^\\verb[^a-zA-Z]/.test(e)) {
              this.consume();
              var r = e.slice(5), o = "*" === r.charAt(0);
              if (o && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1)) throw new a("\\verb assertion failed --\n                    please report what input caused this bug");
              return {type: "verb", mode: "text", body: r = r.slice(1, -1), star: o}
            }
            if ("%" === e) return this.consumeComment(), this.parseSymbol();
            mn.hasOwnProperty(e[0]) && !Y[this.mode][e[0]] && (this.settings.strict && "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + e[0] + '" used in math mode', t), e = mn[e[0]] + e.substr(1));
            var i, s = Kr.exec(e);
            if (s && ("i" === (e = e.substring(0, s.index)) ? e = "ı" : "j" === e && (e = "ȷ")), Y[this.mode][e]) {
              this.settings.strict && "math" === this.mode && "ÇÐÞçþ".indexOf(e) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + e[0] + '" used in math mode', t);
              var u, c = Y[this.mode][e].group, l = n.range(t);
              if (W.hasOwnProperty(c)) {
                var h = c;
                u = {type: "atom", mode: this.mode, family: h, loc: l, text: e}
              } else u = {type: c, mode: this.mode, loc: l, text: e};
              i = u
            } else {
              if (!(e.charCodeAt(0) >= 128)) return null;
              this.settings.strict && (T(e.charCodeAt(0)) ? "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + e[0] + '" used in math mode', t) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + e[0] + '" (' + e.charCodeAt(0) + ")", t)), i = {
                type: "textord",
                mode: this.mode,
                loc: n.range(t),
                text: e
              }
            }
            if (this.consume(), s) for (var m = 0; m < s[0].length; m++) {
              var f = s[0][m];
              if (!hn[f]) throw new a("Unknown accent ' " + f + "'", t);
              var p = hn[f][this.mode];
              if (!p) throw new a("Accent " + f + " unsupported in " + this.mode + " mode", t);
              i = {type: "accent", mode: this.mode, loc: n.range(t), label: p, isStretchy: !1, isShifty: !0, base: i}
            }
            return i
          }, t
        }();
        fn.endOfExpression = ["}", "\\end", "\\right", "&"], fn.SUPSUB_GREEDINESS = 1;
        var pn = function (t, e) {
          if (!("string" == typeof t || t instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
          var r = new fn(t, e);
          delete r.gullet.macros.current["\\df@tag"];
          var n = r.parse();
          if (r.gullet.macros.get("\\df@tag")) {
            if (!e.displayMode) throw new a("\\tag works only in display equations");
            r.gullet.feed("\\df@tag"), n = [{type: "tag", mode: "text", body: n, tag: r.parse()}]
          }
          return n
        }, dn = function (t, e, r) {
          e.textContent = "";
          var n = vn(t, r).toNode();
          e.appendChild(n)
        };
        "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), dn = function () {
          throw new a("KaTeX doesn't work in quirks mode.")
        });
        var gn = function (t, e, r) {
          if (r.throwOnError || !(t instanceof a)) throw t;
          var n = Ft.makeSpan(["katex-error"], [new D(e)]);
          return n.setAttribute("title", t.toString()), n.setAttribute("style", "color:" + r.errorColor), n
        }, vn = function (t, e) {
          var r = new f(e);
          try {
            var n = pn(t, r);
            return ke(n, t, r)
          } catch (e) {
            return gn(e, t, r)
          }
        }, yn = {
          version: "0.10.0",
          render: dn,
          renderToString: function (t, e) {
            return vn(t, e).toMarkup()
          },
          ParseError: a,
          __parse: function (t, e) {
            var r = new f(e);
            return pn(t, r)
          },
          __renderToDomTree: vn,
          __renderToHTMLTree: function (t, e) {
            var r = new f(e);
            try {
              return function (t, e, r) {
                var n = me(t, Se(r)), o = Ft.makeSpan(["katex"], [n]);
                return r.displayMode ? Ft.makeSpan(["katex-display"], [o]) : o
              }(pn(t, r), 0, r)
            } catch (e) {
              return gn(e, t, r)
            }
          },
          __setFontMetrics: function (t, e) {
            B[t] = e
          },
          __defineSymbol: J,
          __defineMacro: en,
          __domTree: {Span: z, Anchor: I, SymbolNode: D, SvgNode: L, PathNode: R, LineNode: F}
        };
        e.default = yn
      }]).default
    })
  }, L42u: function (t, e, r) {
    var n, o, i, a = r("+ZMJ"), s = r("knuC"), u = r("RPLV"), c = r("ON07"), l = r("7KvD"), h = l.process,
      m = l.setImmediate, f = l.clearImmediate, p = l.MessageChannel, d = l.Dispatch, g = 0, v = {}, y = function () {
        var t = +this;
        if (v.hasOwnProperty(t)) {
          var e = v[t];
          delete v[t], e()
        }
      }, b = function (t) {
        y.call(t.data)
      };
    m && f || (m = function (t) {
      for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
      return v[++g] = function () {
        s("function" == typeof t ? t : Function(t), e)
      }, n(g), g
    }, f = function (t) {
      delete v[t]
    }, "process" == r("R9M2")(h) ? n = function (t) {
      h.nextTick(a(y, t, 1))
    } : d && d.now ? n = function (t) {
      d.now(a(y, t, 1))
    } : p ? (i = (o = new p).port2, o.port1.onmessage = b, n = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function (t) {
      l.postMessage(t + "", "*")
    }, l.addEventListener("message", b, !1)) : n = "onreadystatechange" in c("script") ? function (t) {
      u.appendChild(c("script")).onreadystatechange = function () {
        u.removeChild(this), y.call(t)
      }
    } : function (t) {
      setTimeout(a(y, t, 1), 0)
    }), t.exports = {set: m, clear: f}
  }, LG56: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Number", {
      isNaN: function (t) {
        return t != t
      }
    })
  }, LhTa: function (t, e, r) {
    var n = r("rFzY"), o = r("Q6Nf"), i = r("FryR"), a = r("BbyF"), s = r("plSV");
    t.exports = function (t, e) {
      var r = 1 == t, u = 2 == t, c = 3 == t, l = 4 == t, h = 6 == t, m = 5 == t || h, f = e || s;
      return function (e, s, p) {
        for (var d, g, v = i(e), y = o(v), b = n(s, p, 3), _ = a(y.length), x = 0, w = r ? f(e, _) : u ? f(e, 0) : void 0; _ > x; x++) if ((m || x in y) && (g = b(d = y[x], x, v), t)) if (r) w[x] = g; else if (g) switch (t) {
          case 3:
            return !0;
          case 5:
            return d;
          case 6:
            return x;
          case 2:
            w.push(d)
        } else if (l) return !1;
        return h ? -1 : c || l ? l : w
      }
    }
  }, LlNE: function (t, e, r) {
    var n = r("Ds5P"), o = Math.exp;
    n(n.S, "Math", {
      cosh: function (t) {
        return (o(t = +t) + o(-t)) / 2
      }
    })
  }, Lqg1: function (t, e, r) {
    var n = r("Ds5P"), o = Math.imul;
    n(n.S + n.F * r("zgIt")(function () {
      return -5 != o(4294967295, 5) || 2 != o.length
    }), "Math", {
      imul: function (t, e) {
        var r = +t, n = +e, o = 65535 & r, i = 65535 & n;
        return 0 | o * i + ((65535 & r >>> 16) * i + o * (65535 & n >>> 16) << 16 >>> 0)
      }
    })
  }, LrcN: function (t, e, r) {
    "use strict";
    var n = r("OzIq"), o = r("bUqO"), i = r("V3l/"), a = r("07k+"), s = r("2p1q"), u = r("A16L"), c = r("zgIt"),
      l = r("9GpA"), h = r("oeih"), m = r("BbyF"), f = r("8D8H"), p = r("WcO1").f, d = r("lDLk").f, g = r("zCYm"),
      v = r("yYvK"), y = "prototype", b = "Wrong index!", _ = n.ArrayBuffer, x = n.DataView, w = n.Math,
      S = n.RangeError, k = n.Infinity, T = _, M = w.abs, A = w.pow, C = w.floor, P = w.log, O = w.LN2,
      E = o ? "_b" : "buffer", z = o ? "_l" : "byteLength", I = o ? "_o" : "byteOffset";

    function N(t, e, r) {
      var n, o, i, a = new Array(r), s = 8 * r - e - 1, u = (1 << s) - 1, c = u >> 1,
        l = 23 === e ? A(2, -24) - A(2, -77) : 0, h = 0, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
      for ((t = M(t)) != t || t === k ? (o = t != t ? 1 : 0, n = u) : (n = C(P(t) / O), t * (i = A(2, -n)) < 1 && (n--, i *= 2), (t += n + c >= 1 ? l / i : l * A(2, 1 - c)) * i >= 2 && (n++, i /= 2), n + c >= u ? (o = 0, n = u) : n + c >= 1 ? (o = (t * i - 1) * A(2, e), n += c) : (o = t * A(2, c - 1) * A(2, e), n = 0)); e >= 8; a[h++] = 255 & o, o /= 256, e -= 8) ;
      for (n = n << e | o, s += e; s > 0; a[h++] = 255 & n, n /= 256, s -= 8) ;
      return a[--h] |= 128 * m, a
    }

    function D(t, e, r) {
      var n, o = 8 * r - e - 1, i = (1 << o) - 1, a = i >> 1, s = o - 7, u = r - 1, c = t[u--], l = 127 & c;
      for (c >>= 7; s > 0; l = 256 * l + t[u], u--, s -= 8) ;
      for (n = l & (1 << -s) - 1, l >>= -s, s += e; s > 0; n = 256 * n + t[u], u--, s -= 8) ;
      if (0 === l) l = 1 - a; else {
        if (l === i) return n ? NaN : c ? -k : k;
        n += A(2, e), l -= a
      }
      return (c ? -1 : 1) * n * A(2, l - e)
    }

    function L(t) {
      return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function R(t) {
      return [255 & t]
    }

    function F(t) {
      return [255 & t, t >> 8 & 255]
    }

    function B(t) {
      return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function U(t) {
      return N(t, 52, 8)
    }

    function j(t) {
      return N(t, 23, 4)
    }

    function q(t, e, r) {
      d(t[y], e, {
        get: function () {
          return this[r]
        }
      })
    }

    function H(t, e, r, n) {
      var o = f(+r);
      if (o + e > t[z]) throw S(b);
      var i = t[E]._b, a = o + t[I], s = i.slice(a, a + e);
      return n ? s : s.reverse()
    }

    function W(t, e, r, n, o, i) {
      var a = f(+r);
      if (a + e > t[z]) throw S(b);
      for (var s = t[E]._b, u = a + t[I], c = n(+o), l = 0; l < e; l++) s[u + l] = c[i ? l : e - l - 1]
    }

    if (a.ABV) {
      if (!c(function () {
        _(1)
      }) || !c(function () {
        new _(-1)
      }) || c(function () {
        return new _, new _(1.5), new _(NaN), "ArrayBuffer" != _.name
      })) {
        for (var V, G = (_ = function (t) {
          return l(this, _), new T(f(t))
        })[y] = T[y], Y = p(T), J = 0; Y.length > J;) (V = Y[J++]) in _ || s(_, V, T[V]);
        i || (G.constructor = _)
      }
      var K = new x(new _(2)), $ = x[y].setInt8;
      K.setInt8(0, 2147483648), K.setInt8(1, 2147483649), !K.getInt8(0) && K.getInt8(1) || u(x[y], {
        setInt8: function (t, e) {
          $.call(this, t, e << 24 >> 24)
        }, setUint8: function (t, e) {
          $.call(this, t, e << 24 >> 24)
        }
      }, !0)
    } else _ = function (t) {
      l(this, _, "ArrayBuffer");
      var e = f(t);
      this._b = g.call(new Array(e), 0), this[z] = e
    }, x = function (t, e, r) {
      l(this, x, "DataView"), l(t, _, "DataView");
      var n = t[z], o = h(e);
      if (o < 0 || o > n) throw S("Wrong offset!");
      if (o + (r = void 0 === r ? n - o : m(r)) > n) throw S("Wrong length!");
      this[E] = t, this[I] = o, this[z] = r
    }, o && (q(_, "byteLength", "_l"), q(x, "buffer", "_b"), q(x, "byteLength", "_l"), q(x, "byteOffset", "_o")), u(x[y], {
      getInt8: function (t) {
        return H(this, 1, t)[0] << 24 >> 24
      }, getUint8: function (t) {
        return H(this, 1, t)[0]
      }, getInt16: function (t) {
        var e = H(this, 2, t, arguments[1]);
        return (e[1] << 8 | e[0]) << 16 >> 16
      }, getUint16: function (t) {
        var e = H(this, 2, t, arguments[1]);
        return e[1] << 8 | e[0]
      }, getInt32: function (t) {
        return L(H(this, 4, t, arguments[1]))
      }, getUint32: function (t) {
        return L(H(this, 4, t, arguments[1])) >>> 0
      }, getFloat32: function (t) {
        return D(H(this, 4, t, arguments[1]), 23, 4)
      }, getFloat64: function (t) {
        return D(H(this, 8, t, arguments[1]), 52, 8)
      }, setInt8: function (t, e) {
        W(this, 1, t, R, e)
      }, setUint8: function (t, e) {
        W(this, 1, t, R, e)
      }, setInt16: function (t, e) {
        W(this, 2, t, F, e, arguments[2])
      }, setUint16: function (t, e) {
        W(this, 2, t, F, e, arguments[2])
      }, setInt32: function (t, e) {
        W(this, 4, t, B, e, arguments[2])
      }, setUint32: function (t, e) {
        W(this, 4, t, B, e, arguments[2])
      }, setFloat32: function (t, e) {
        W(this, 4, t, j, e, arguments[2])
      }, setFloat64: function (t, e) {
        W(this, 8, t, U, e, arguments[2])
      }
    });
    v(_, "ArrayBuffer"), v(x, "DataView"), s(x[y], a.VIEW, !0), e.ArrayBuffer = _, e.DataView = x
  }, M6a0: function (t, e) {
  }, M8WE: function (t, e, r) {
    e.f = r("kkCw")
  }, MU5D: function (t, e, r) {
    var n = r("R9M2");
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == n(t) ? t.split("") : Object(t)
    }
  }, MfeA: function (t, e, r) {
    r("Vg1y")("match", 1, function (t, e, r) {
      return [function (r) {
        "use strict";
        var n = t(this), o = void 0 == r ? void 0 : r[e];
        return void 0 !== o ? o.call(r, n) : new RegExp(r)[e](String(n))
      }, r]
    })
  }, Mhyx: function (t, e, r) {
    var n = r("/bQp"), o = r("dSzd")("iterator"), i = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (n.Array === t || i[o] === t)
    }
  }, MjHD: function (t, e, r) {
    var n = r("Ds5P"), o = r("x78i"), i = Math.exp;
    n(n.S + n.F * r("zgIt")(function () {
      return -2e-17 != !Math.sinh(-2e-17)
    }), "Math", {
      sinh: function (t) {
        return Math.abs(t = +t) < 1 ? (o(t) - o(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2)
      }
    })
  }, MmMw: function (t, e, r) {
    var n = r("EqjI");
    t.exports = function (t, e) {
      if (!n(t)) return t;
      var r, o;
      if (e && "function" == typeof (r = t.toString) && !n(o = r.call(t))) return o;
      if ("function" == typeof (r = t.valueOf) && !n(o = r.call(t))) return o;
      if (!e && "function" == typeof (r = t.toString) && !n(o = r.call(t))) return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }, MsuQ: function (t, e, r) {
    "use strict";
    var n = r("Dgii"), o = r("zq/X");
    t.exports = r("0Rih")("Map", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      get: function (t) {
        var e = n.getEntry(o(this, "Map"), t);
        return e && e.v
      }, set: function (t, e) {
        return n.def(o(this, "Map"), 0 === t ? 0 : t, e)
      }
    }, n, !0)
  }, MyjO: function (t, e, r) {
    r("77Ug")("Uint8", 1, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n)
      }
    }, !0)
  }, N4KQ: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Math", {
      log2: function (t) {
        return Math.log(t) / Math.LN2
      }
    })
  }, "NWt+": function (t, e, r) {
    var n = r("+ZMJ"), o = r("msXi"), i = r("Mhyx"), a = r("77Pl"), s = r("QRG4"), u = r("3fs2"), c = {}, l = {};
    (e = t.exports = function (t, e, r, h, m) {
      var f, p, d, g, v = m ? function () {
        return t
      } : u(t), y = n(r, h, e ? 2 : 1), b = 0;
      if ("function" != typeof v) throw TypeError(t + " is not iterable!");
      if (i(v)) {
        for (f = s(t.length); f > b; b++) if ((g = e ? y(a(p = t[b])[0], p[1]) : y(t[b])) === c || g === l) return g
      } else for (d = v.call(t); !(p = d.next()).done;) if ((g = o(d, y, p.value, e)) === c || g === l) return g
    }).BREAK = c, e.RETURN = l
  }, NYxO: function (t, e, r) {
    t.exports = r("uomd")(18)
  }, NfZy: function (t, e, r) {
    r("77Ug")("Uint32", 4, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n)
      }
    })
  }, No4x: function (t, e, r) {
    var n = r("Ds5P");
    n(n.P, "Array", {fill: r("zCYm")}), r("RhFG")("fill")
  }, NpIQ: function (t, e) {
    e.f = {}.propertyIsEnumerable
  }, O4g8: function (t, e) {
    t.exports = !0
  }, ON07: function (t, e, r) {
    var n = r("EqjI"), o = r("7KvD").document, i = n(o) && n(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {}
    }
  }, OzIq: function (t, e) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
  }, PHCx: function (t, e) {
    t.exports = function (t, e, r) {
      var n = void 0 === r;
      switch (e.length) {
        case 0:
          return n ? t() : t.call(r);
        case 1:
          return n ? t(e[0]) : t.call(r, e[0]);
        case 2:
          return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
        case 3:
          return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
        case 4:
          return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
      }
      return t.apply(r, e)
    }
  }, PHqh: function (t, e, r) {
    var n = r("Q6Nf"), o = r("/whu");
    t.exports = function (t) {
      return n(o(t))
    }
  }, PJh5: function (t, e, r) {
    t.exports = r("uomd")(10)
  }, PuTd: function (t, e, r) {
    var n = r("Ds5P"), o = r("KOrd"), i = r("DIVP");
    n(n.S, "Reflect", {
      getPrototypeOf: function (t) {
        return o(i(t))
      }
    })
  }, PzxK: function (t, e, r) {
    var n = r("D2L2"), o = r("sB3e"), i = r("ax3d")("IE_PROTO"), a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
      return t = o(t), n(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
  }, Q6Nf: function (t, e, r) {
    var n = r("ydD5");
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == n(t) ? t.split("") : Object(t)
    }
  }, QKXm: function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, QRG4: function (t, e, r) {
    var n = r("UuGF"), o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(n(t), 9007199254740991) : 0
    }
  }, Qh14: function (t, e, r) {
    var n = r("ReGu"), o = r("QKXm");
    t.exports = Object.keys || function (t) {
      return n(t, o)
    }
  }, R3AP: function (t, e, r) {
    var n = r("OzIq"), o = r("2p1q"), i = r("WBcL"), a = r("ulTY")("src"), s = Function.toString,
      u = ("" + s).split("toString");
    r("7gX0").inspectSource = function (t) {
      return s.call(t)
    }, (t.exports = function (t, e, r, s) {
      var c = "function" == typeof r;
      c && (i(r, "name") || o(r, "name", e)), t[e] !== r && (c && (i(r, a) || o(r, a, t[e] ? "" + t[e] : u.join(String(e)))), t === n ? t[e] = r : s ? t[e] ? t[e] = r : o(t, e, r) : (delete t[e], o(t, e, r)))
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[a] || s.call(this)
    })
  }, R4wc: function (t, e, r) {
    var n = r("kM2E");
    n(n.S + n.F, "Object", {assign: r("To3L")})
  }, R9M2: function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1)
    }
  }, RPLV: function (t, e, r) {
    var n = r("7KvD").document;
    t.exports = n && n.documentElement
  }, "RY/4": function (t, e, r) {
    var n = r("R9M2"), o = r("dSzd")("toStringTag"), i = "Arguments" == n(function () {
      return arguments
    }());
    t.exports = function (t) {
      var e, r, a;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
        try {
          return t[e]
        } catch (t) {
        }
      }(e = Object(t), o)) ? r : i ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
  }, Racj: function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("49qz")(!1);
    n(n.P, "String", {
      codePointAt: function (t) {
        return o(this, t)
      }
    })
  }, ReGu: function (t, e, r) {
    var n = r("WBcL"), o = r("PHqh"), i = r("ot5s")(!1), a = r("mZON")("IE_PROTO");
    t.exports = function (t, e) {
      var r, s = o(t), u = 0, c = [];
      for (r in s) r != a && n(s, r) && c.push(r);
      for (; e.length > u;) n(s, r = e[u++]) && (~i(c, r) || c.push(r));
      return c
    }
  }, RhFG: function (t, e, r) {
    var n = r("kkCw")("unscopables"), o = Array.prototype;
    void 0 == o[n] && r("2p1q")(o, n, {}), t.exports = function (t) {
      o[n][t] = !0
    }
  }, Rw4K: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Reflect", {ownKeys: r("YUr7")})
  }, Rz2z: function (t, e) {
    t.exports = Math.log1p || function (t) {
      return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
  }, S82l: function (t, e) {
    t.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }, SDXa: function (t, e) {
    t.exports = function (t) {
      try {
        return {e: !1, v: t()}
      } catch (t) {
        return {e: !0, v: t}
      }
    }
  }, SHe9: function (t, e, r) {
    var n = r("wC1N"), o = r("kkCw")("iterator"), i = r("bN1p");
    t.exports = r("7gX0").getIteratorMethod = function (t) {
      if (void 0 != t) return t[o] || t["@@iterator"] || i[n(t)]
    }
  }, SPtU: function (t, e, r) {
    var n = r("x9zv"), o = r("KOrd"), i = r("WBcL"), a = r("Ds5P"), s = r("UKM+"), u = r("DIVP");
    a(a.S, "Reflect", {
      get: function t(e, r) {
        var a, c, l = arguments.length < 3 ? e : arguments[2];
        return u(e) === l ? e[r] : (a = n.f(e, r)) ? i(a, "value") ? a.value : void 0 !== a.get ? a.get.call(l) : void 0 : s(c = o(e)) ? t(c, r, l) : void 0
      }
    })
  }, SRCy: function (t, e, r) {
    var n = r("Ds5P"), o = r("x78i"), i = Math.exp;
    n(n.S, "Math", {
      tanh: function (t) {
        var e = o(t = +t), r = o(-t);
        return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (i(t) + i(-t))
      }
    })
  }, Sejc: function (t, e, r) {
    var n, o, i, a = r("rFzY"), s = r("PHCx"), u = r("d075"), c = r("jhxf"), l = r("OzIq"), h = l.process,
      m = l.setImmediate, f = l.clearImmediate, p = l.MessageChannel, d = l.Dispatch, g = 0, v = {}, y = function () {
        var t = +this;
        if (v.hasOwnProperty(t)) {
          var e = v[t];
          delete v[t], e()
        }
      }, b = function (t) {
        y.call(t.data)
      };
    m && f || (m = function (t) {
      for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
      return v[++g] = function () {
        s("function" == typeof t ? t : Function(t), e)
      }, n(g), g
    }, f = function (t) {
      delete v[t]
    }, "process" == r("ydD5")(h) ? n = function (t) {
      h.nextTick(a(y, t, 1))
    } : d && d.now ? n = function (t) {
      d.now(a(y, t, 1))
    } : p ? (i = (o = new p).port2, o.port1.onmessage = b, n = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function (t) {
      l.postMessage(t + "", "*")
    }, l.addEventListener("message", b, !1)) : n = "onreadystatechange" in c("script") ? function (t) {
      u.appendChild(c("script")).onreadystatechange = function () {
        u.removeChild(this), y.call(t)
      }
    } : function (t) {
      setTimeout(a(y, t, 1), 0)
    }), t.exports = {set: m, clear: f}
  }, SfB7: function (t, e, r) {
    t.exports = !r("+E39") && !r("S82l")(function () {
      return 7 != Object.defineProperty(r("ON07")("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, SldL: function (t, e, r) {
    (function (e) {
      !function (e) {
        "use strict";
        var r, n = Object.prototype, o = n.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag", c = "object" == typeof t, l = e.regeneratorRuntime;
        if (l) c && (t.exports = l); else {
          (l = e.regeneratorRuntime = c ? t.exports : {}).wrap = _;
          var h = "suspendedStart", m = "suspendedYield", f = "executing", p = "completed", d = {}, g = {};
          g[a] = function () {
            return this
          };
          var v = Object.getPrototypeOf, y = v && v(v(E([])));
          y && y !== n && o.call(y, a) && (g = y);
          var b = k.prototype = w.prototype = Object.create(g);
          S.prototype = b.constructor = k, k.constructor = S, k[u] = S.displayName = "GeneratorFunction", l.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === S || "GeneratorFunction" === (e.displayName || e.name))
          }, l.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, k) : (t.__proto__ = k, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(b), t
          }, l.awrap = function (t) {
            return {__await: t}
          }, T(M.prototype), M.prototype[s] = function () {
            return this
          }, l.AsyncIterator = M, l.async = function (t, e, r, n) {
            var o = new M(_(t, e, r, n));
            return l.isGeneratorFunction(e) ? o : o.next().then(function (t) {
              return t.done ? t.value : o.next()
            })
          }, T(b), b[u] = "Generator", b[a] = function () {
            return this
          }, b.toString = function () {
            return "[object Generator]"
          }, l.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(), function r() {
              for (; e.length;) {
                var n = e.pop();
                if (n in t) return r.value = n, r.done = !1, r
              }
              return r.done = !0, r
            }
          }, l.values = E, O.prototype = {
            constructor: O, reset: function (t) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(P), !t) for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
            }, stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval
            }, dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;

              function n(n, o) {
                return s.type = "throw", s.arg = t, e.next = n, o && (e.method = "next", e.arg = r), !!o
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i], s = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var u = o.call(a, "catchLoc"), c = o.call(a, "finallyLoc");
                  if (u && c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                  } else if (u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                  } else {
                    if (!c) throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                  }
                }
              }
            }, abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                  var i = n;
                  break
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
            }, complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
            }, finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), d
              }
            }, catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    P(r)
                  }
                  return o
                }
              }
              throw new Error("illegal catch attempt")
            }, delegateYield: function (t, e, n) {
              return this.delegate = {
                iterator: E(t),
                resultName: e,
                nextLoc: n
              }, "next" === this.method && (this.arg = r), d
            }
          }
        }

        function _(t, e, r, n) {
          var o = e && e.prototype instanceof w ? e : w, i = Object.create(o.prototype), a = new O(n || []);
          return i._invoke = function (t, e, r) {
            var n = h;
            return function (o, i) {
              if (n === f) throw new Error("Generator is already running");
              if (n === p) {
                if ("throw" === o) throw i;
                return z()
              }
              for (r.method = o, r.arg = i; ;) {
                var a = r.delegate;
                if (a) {
                  var s = A(a, r);
                  if (s) {
                    if (s === d) continue;
                    return s
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                  if (n === h) throw n = p, r.arg;
                  r.dispatchException(r.arg)
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = f;
                var u = x(t, e, r);
                if ("normal" === u.type) {
                  if (n = r.done ? p : m, u.arg === d) continue;
                  return {value: u.arg, done: r.done}
                }
                "throw" === u.type && (n = p, r.method = "throw", r.arg = u.arg)
              }
            }
          }(t, r, a), i
        }

        function x(t, e, r) {
          try {
            return {type: "normal", arg: t.call(e, r)}
          } catch (t) {
            return {type: "throw", arg: t}
          }
        }

        function w() {
        }

        function S() {
        }

        function k() {
        }

        function T(t) {
          ["next", "throw", "return"].forEach(function (e) {
            t[e] = function (t) {
              return this._invoke(e, t)
            }
          })
        }

        function M(t) {
          function r(e, n, i, a) {
            var s = x(t[e], t, n);
            if ("throw" !== s.type) {
              var u = s.arg, c = u.value;
              return c && "object" == typeof c && o.call(c, "__await") ? Promise.resolve(c.__await).then(function (t) {
                r("next", t, i, a)
              }, function (t) {
                r("throw", t, i, a)
              }) : Promise.resolve(c).then(function (t) {
                u.value = t, i(u)
              }, a)
            }
            a(s.arg)
          }

          var n;
          "object" == typeof e.process && e.process.domain && (r = e.process.domain.bind(r)), this._invoke = function (t, e) {
            function o() {
              return new Promise(function (n, o) {
                r(t, e, n, o)
              })
            }

            return n = n ? n.then(o, o) : o()
          }
        }

        function A(t, e) {
          var n = t.iterator[e.method];
          if (n === r) {
            if (e.delegate = null, "throw" === e.method) {
              if (t.iterator.return && (e.method = "return", e.arg = r, A(t, e), "throw" === e.method)) return d;
              e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return d
          }
          var o = x(n, t.iterator, e.arg);
          if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, d;
          var i = o.arg;
          return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, d) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, d)
        }

        function C(t) {
          var e = {tryLoc: t[0]};
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function P(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e
        }

        function O(t) {
          this.tryEntries = [{tryLoc: "root"}], t.forEach(C, this), this.reset(!0)
        }

        function E(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1, i = function e() {
                for (; ++n < t.length;) if (o.call(t, n)) return e.value = t[n], e.done = !1, e;
                return e.value = r, e.done = !0, e
              };
              return i.next = i
            }
          }
          return {next: z}
        }

        function z() {
          return {value: r, done: !0}
        }
      }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(e, r("DuR2"))
  }, Stuz: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Number", {EPSILON: Math.pow(2, -52)})
  }, TFWu: function (t, e, r) {
    r("77Ug")("Uint8", 1, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n)
      }
    })
  }, THnP: function (t, e, r) {
    r("77Ug")("Uint16", 2, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n)
      }
    })
  }, TcQ7: function (t, e, r) {
    var n = r("MU5D"), o = r("52gC");
    t.exports = function (t) {
      return n(o(t))
    }
  }, To3L: function (t, e, r) {
    "use strict";
    var n = r("lktj"), o = r("1kS7"), i = r("NpIQ"), a = r("sB3e"), s = r("MU5D"), u = Object.assign;
    t.exports = !u || r("S82l")(function () {
      var t = {}, e = {}, r = Symbol(), n = "abcdefghijklmnopqrst";
      return t[r] = 7, n.split("").forEach(function (t) {
        e[t] = t
      }), 7 != u({}, t)[r] || Object.keys(u({}, e)).join("") != n
    }) ? function (t, e) {
      for (var r = a(t), u = arguments.length, c = 1, l = o.f, h = i.f; u > c;) for (var m, f = s(arguments[c++]), p = l ? n(f).concat(l(f)) : n(f), d = p.length, g = 0; d > g;) h.call(f, m = p[g++]) && (r[m] = f[m]);
      return r
    } : u
  }, U5ju: function (t, e, r) {
    r("M6a0"), r("zQR9"), r("+tPU"), r("CXw9"), r("EqBC"), r("jKW+"), t.exports = r("FeBl").Promise
  }, U6qc: function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("LhTa")(6), i = "findIndex", a = !0;
    i in [] && Array(1)[i](function () {
      a = !1
    }), n(n.P + n.F * a, "Array", {
      findIndex: function (t) {
        return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    }), r("RhFG")(i)
  }, "UKM+": function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }, UuGF: function (t, e) {
    var r = Math.ceil, n = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t)
    }
  }, "V/H1": function (t, e, r) {
    "use strict";
    var n = r("fJSx"), o = r("zq/X");
    r("0Rih")("WeakSet", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      add: function (t) {
        return n.def(o(this, "WeakSet"), t, !0)
      }
    }, n, !1, !0)
  }, "V3l/": function (t, e) {
    t.exports = !1
  }, V3tA: function (t, e, r) {
    r("R4wc"), t.exports = r("FeBl").Object.assign
  }, VKKs: function (t, e, r) {
    "use strict";
    var n = r("mvHQ"), o = r.n(n), i = window.localStorage;
    e.a = {
      name: "storage", set: function (t, e) {
        i.setItem(t, o()(e))
      }, get: function (t) {
        return JSON.parse(i.getItem(t)) || null
      }, remove: function (t) {
        i.removeItem(t)
      }, clear: function () {
        i.clear()
      }
    }
  }, VTn2: function (t, e, r) {
    var n = r("UKM+"), o = r("1aA0").onFreeze;
    r("3i66")("freeze", function (t) {
      return function (e) {
        return t && n(e) ? t(o(e)) : e
      }
    })
  }, "VU/8": function (t, e) {
    t.exports = function (t, e, r, n, o, i) {
      var a, s = t = t || {}, u = typeof t.default;
      "object" !== u && "function" !== u || (a = t, s = t.default);
      var c, l = "function" == typeof s ? s.options : s;
      if (e && (l.render = e.render, l.staticRenderFns = e.staticRenderFns, l._compiled = !0), r && (l.functional = !0), o && (l._scopeId = o), i ? (c = function (t) {
        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), n && n.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i)
      }, l._ssrRegister = c) : n && (c = n), c) {
        var h = l.functional, m = h ? l.render : l.beforeCreate;
        h ? (l._injectStyles = c, l.render = function (t, e) {
          return c.call(e), m(t, e)
        }) : l.beforeCreate = m ? [].concat(m, c) : [c]
      }
      return {esModule: a, exports: s, options: l}
    }
  }, VWgF: function (t, e, r) {
    var n = r("7gX0"), o = r("OzIq"), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
      version: n.version,
      mode: r("V3l/") ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
  }, Vg1y: function (t, e, r) {
    "use strict";
    var n = r("2p1q"), o = r("R3AP"), i = r("zgIt"), a = r("/whu"), s = r("kkCw");
    t.exports = function (t, e, r) {
      var u = s(t), c = r(a, u, ""[t]), l = c[0], h = c[1];
      i(function () {
        var e = {};
        return e[u] = function () {
          return 7
        }, 7 != ""[t](e)
      }) && (o(String.prototype, t, l), n(RegExp.prototype, u, 2 == e ? function (t, e) {
        return h.call(t, this, e)
      } : function (t) {
        return h.call(t, this)
      }))
    }
  }, Vi3T: function (t, e, r) {
    "use strict";
    e.__esModule = !0, e.default = {
      el: {
        colorpicker: {confirm: "确定", clear: "清空"},
        datepicker: {
          now: "此刻",
          today: "今天",
          cancel: "取消",
          clear: "清空",
          confirm: "确定",
          selectDate: "选择日期",
          selectTime: "选择时间",
          startDate: "开始日期",
          startTime: "开始时间",
          endDate: "结束日期",
          endTime: "结束时间",
          prevYear: "前一年",
          nextYear: "后一年",
          prevMonth: "上个月",
          nextMonth: "下个月",
          year: "年",
          month1: "1 月",
          month2: "2 月",
          month3: "3 月",
          month4: "4 月",
          month5: "5 月",
          month6: "6 月",
          month7: "7 月",
          month8: "8 月",
          month9: "9 月",
          month10: "10 月",
          month11: "11 月",
          month12: "12 月",
          weeks: {sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六"},
          months: {
            jan: "一月",
            feb: "二月",
            mar: "三月",
            apr: "四月",
            may: "五月",
            jun: "六月",
            jul: "七月",
            aug: "八月",
            sep: "九月",
            oct: "十月",
            nov: "十一月",
            dec: "十二月"
          }
        },
        select: {loading: "加载中", noMatch: "无匹配数据", noData: "无数据", placeholder: "请选择"},
        cascader: {noMatch: "无匹配数据", loading: "加载中", placeholder: "请选择"},
        pagination: {goto: "前往", pagesize: "条/页", total: "共 {total} 条", pageClassifier: "页"},
        messagebox: {title: "提示", confirm: "确定", cancel: "取消", error: "输入的数据不合法!"},
        upload: {deleteTip: "按 delete 键可删除", delete: "删除", preview: "查看图片", continue: "继续上传"},
        table: {
          emptyText: "暂无数据",
          confirmFilter: "筛选",
          resetFilter: "重置",
          clearFilter: "全部",
          sumText: "合计"
        },
        tree: {emptyText: "暂无数据"},
        transfer: {
          noMatch: "无匹配数据",
          noData: "无数据",
          titles: ["列表 1", "列表 2"],
          filterPlaceholder: "请输入搜索内容",
          noCheckedFormat: "共 {total} 项",
          hasCheckedFormat: "已选 {checked}/{total} 项"
        }
      }
    }
  }, VjuZ: function (t, e, r) {
    r("Vg1y")("replace", 2, function (t, e, r) {
      return [function (n, o) {
        "use strict";
        var i = t(this), a = void 0 == n ? void 0 : n[e];
        return void 0 !== a ? a.call(n, i, o) : r.call(String(i), n, o)
      }, r]
    })
  }, "W/IU": function (t, e, r) {
    var n = r("UKM+"), o = r("1aA0").onFreeze;
    r("3i66")("seal", function (t) {
      return function (e) {
        return t && n(e) ? t(o(e)) : e
      }
    })
  }, W4Z6: function (t, e, r) {
    var n = r("FryR"), o = r("KOrd");
    r("3i66")("getPrototypeOf", function () {
      return function (t) {
        return o(n(t))
      }
    })
  }, WBcL: function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e)
    }
  }, WD3H: function (t, e, r) {
    !function (e, n) {
      t.exports = n(r("7+uW"))
    }("undefined" != typeof self && self, function (t) {
      return function (t) {
        var e = {};

        function r(n) {
          if (e[n]) return e[n].exports;
          var o = e[n] = {i: n, l: !1, exports: {}};
          return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        return r.m = t, r.c = e, r.d = function (t, e, n) {
          r.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: n})
        }, r.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default
          } : function () {
            return t
          };
          return r.d(e, "a", e), e
        }, r.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "/dist/locale/", r(r.s = 25)
      }({
        0: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
            o || void 0 !== window.iview && ("langs" in iview || (iview.langs = {}), iview.langs[t.i.locale] = t)
          };
          var n, o = ((n = r(1)) && n.__esModule ? n : {default: n}).default.prototype.$isServer
        }, 1: function (e, r) {
          e.exports = t
        }, 25: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {value: !0});
          var n, o = {
            i: {
              locale: "zh-TW",
              select: {placeholder: "請選擇", noMatch: "無匹配資料", loading: "加載中"},
              table: {
                noDataText: "暫無資料",
                noFilteredDataText: "暫無篩選結果",
                confirmFilter: "篩選",
                resetFilter: "重置",
                clearFilter: "全部"
              },
              datepicker: {
                selectDate: "選擇日期",
                selectTime: "選擇時間",
                startTime: "開始時間",
                endTime: "結束時間",
                clear: "清空",
                ok: "確定",
                datePanelLabel: "[yyyy年] [m月]",
                month: "月",
                month1: "1 月",
                month2: "2 月",
                month3: "3 月",
                month4: "4 月",
                month5: "5 月",
                month6: "6 月",
                month7: "7 月",
                month8: "8 月",
                month9: "9 月",
                month10: "10 月",
                month11: "11 月",
                month12: "12 月",
                year: "年",
                weekStartDay: "0",
                weeks: {sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六"},
                months: {
                  m1: "1月",
                  m2: "2月",
                  m3: "3月",
                  m4: "4月",
                  m5: "5月",
                  m6: "6月",
                  m7: "7月",
                  m8: "8月",
                  m9: "9月",
                  m10: "10月",
                  m11: "11月",
                  m12: "12月"
                }
              },
              transfer: {
                titles: {source: "來源列表", target: "目標列表"},
                filterPlaceholder: "請輸入搜尋內容",
                notFoundText: "列表爲空"
              },
              modal: {okText: "確定", cancelText: "取消"},
              poptip: {okText: "確定", cancelText: "取消"},
              page: {
                prev: "上一頁",
                next: "下一頁",
                total: "共",
                item: "條",
                items: "條",
                prev5: "向前 5 頁",
                next5: "向後 5 頁",
                page: "條/頁",
                goto: "跳至",
                p: "頁"
              },
              rate: {star: "星", stars: "星"},
              tree: {emptyText: "暫無資料"}
            }
          };
          (0, ((n = r(0)) && n.__esModule ? n : {default: n}).default)(o), e.default = o
        }
      })
    })
  }, WcO1: function (t, e, r) {
    var n = r("ReGu"), o = r("QKXm").concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
      return n(t, o)
    }
  }, WgSQ: function (t, e, r) {
    "use strict";
    var n = r("RhFG"), o = r("KB1o"), i = r("bN1p"), a = r("PHqh");
    t.exports = r("uc2A")(Array, "Array", function (t, e) {
      this._t = a(t), this._i = 0, this._k = e
    }, function () {
      var t = this._t, e = this._k, r = this._i++;
      return !t || r >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
    }, "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries")
  }, WiIn: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Number", {MAX_SAFE_INTEGER: 9007199254740991})
  }, WpPb: function (t, e, r) {
    var n = r("UKM+");
    r("3i66")("isFrozen", function (t) {
      return function (e) {
        return !n(e) || !!t && t(e)
      }
    })
  }, WpTh: function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("LhTa")(5), i = !0;
    "find" in [] && Array(1).find(function () {
      i = !1
    }), n(n.P + n.F * i, "Array", {
      find: function (t) {
        return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    }), r("RhFG")("find")
  }, X8DO: function (t, e) {
    t.exports = function (t, e) {
      return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
  }, XO1R: function (t, e, r) {
    var n = r("ydD5");
    t.exports = Array.isArray || function (t) {
      return "Array" == n(t)
    }
  }, XSOZ: function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t
    }
  }, XaqQ: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), r.d(e, "m", function () {
      return n
    });
    var n = {
      Go_Home: "回到首頁",
      Description: "題目描述",
      Input: "輸入",
      Output: "輸出",
      Sample_Input: "輸入範例",
      Sample_Output: "輸出範例",
      Hint: "提示",
      Source: "題目來源",
      Status: "狀態",
      Information: "題目資訊",
      Time_Limit: "時間限制",
      Memory_Limit: "記憶體限制",
      Created: "出題者",
      Level: "難度",
      Score: "分數",
      Tags: "標籤",
      Show: "顯示",
      Submit: "提交",
      Submitting: "提交中",
      Judging: "評分中",
      Wrong_Answer: "答案錯誤",
      Statistic: "統計",
      Close: "關閉",
      View_Contest: "查看比賽",
      Are_you_sure_you_want_to_reset_your_code: "你確定要重置你的程式碼嗎?",
      Code_can_not_be_empty: "你不能提交空的程式碼",
      Submit_code_successfully: "成功提交程式碼",
      You_have_solved_the_problem: "你已經解決了該試題",
      Submitted_successfully: "成功提交",
      You_have_submitted_a_solution: "你已經提交了解答.",
      Contest_has_ended: "比賽已經結束",
      You_have_submission_in_this_problem_sure_to_cover_it: "你已經提交了解答，確定要覆蓋嗎?",
      Compiler: "編譯器",
      Result_Explanation: "結果說明",
      Pending_Judging_Description: "您的答案即將進行評分，請等待結果。",
      Compile_Error_Description: "無法編譯您的原始碼，請點選連結以檢視編譯器的輸出。",
      Accepted_Description: "您的解題方法是正確的。",
      Wrong_Answer_Description: "您程式的輸出結果與標準程式的答案不符。",
      Runtime_Error_Description: "您的程式異常終止，可能的原因是: 記憶體區段錯誤、被零除或結束程式時傳回非 0 的值。",
      Time_Limit_Exceeded_Description: "您的程式使用的 CPU 時間已超出限制。",
      Memory_Limit_Exceeded_Description: "程式實際使用的記憶體已超出限制。",
      System_Error_Description: "Judge 系統發生錯誤。請回報系統管理員。",
      Menu: "選單",
      Chart: "圖表",
      Auto_Refresh: "自動重新載入",
      RealName: "真實名稱",
      Force_Update: "強制重新載入",
      download_csv: "下載csv檔",
      TotalTime: "總時間",
      Top_10_Teams: "前10名隊伍",
      save_as_image: "保存圖片",
      ACM_Helper: "ACM助手",
      AC_Time: "AC 時間",
      ProblemID: "題目ID",
      First_Blood: "頭香",
      Username: "使用者名稱",
      Checked: "已檢查",
      Not_Checked: "還未檢查",
      Check_It: "現在檢查",
      ACM_Ranklist: "ACM 排名",
      mood: "個人狀態",
      AC: "AC",
      Rating: "評分",
      Contest_Announcements: "比賽公告",
      By: "創建者",
      The_email_doesnt_exist: "此電子郵件並不存在",
      Success: "成功",
      Password_reset_mail_sent: "已發送重置密碼之電子郵件",
      Frequently_Asked_Questions: "常見問題",
      Where_is_the_input_and_the_output: "輸入與輸出在哪邊?",
      Where_is_the_input_and_the_output_answer_part_1: "你的程式會從",
      Standard_Input: "標準輸入",
      Where_is_the_input_and_the_output_answer_part_3: "讀取輸入，並且將結果輸出到",
      Standard_Output: "標準輸出",
      Where_is_the_input_and_the_output_answer_part_5: "例如，你可以在 C 中使用",
      Where_is_the_input_and_the_output_answer_part_6: "或在 C++ 中使用",
      Where_is_the_input_and_the_output_answer_part_7: "讀取輸入，並在 C 中使用",
      Where_is_the_input_and_the_output_answer_part_8: "或在 C++ 中使用",
      Where_is_the_input_and_the_output_answer_part_9: "來輸出到stdout。你的程式不被允許讀取或著是寫入檔案，否則你將獲得",
      What_is_the_meaning_of_submission_execution_time: "提交執行時間是什麼意思?",
      What_is_the_meaning_of_submission_execution_time_answer: "線上解題系統可能會使用不同的輸入檔案來多次測試你的程式碼。如果你的程式碼在每個輸入檔案的時間限制內給出正確的答案，則顯示的執行時間是每個測資所花費的最大時間。否則，執行時間將毫無意義",
      How_Can_I_use_CPP_Int64: "我要如何使用 C++ Int64?",
      How_Can_I_use_CPP_Int64_answer_part_1: "你應該宣告為",
      How_Can_I_use_CPP_Int64_answer_part_2: "並且與",
      or: "或",
      using: "一起使用，使用",
      How_Can_I_use_CPP_Int64_answer_part_3: "將導致",
      Java_specifications: "Java 規範?",
      Java_specifications_answer_part_1: "所有的程式都必須以",
      Java_specifications_answer_part_2: "類別的靜態main方法開始執行。不要使用public類別：即使",
      Java_specifications_answer_part_3: "也必須是非public類別以避免編譯錯誤使用緩衝I/O以避免過度重載而導致超出時間限制",
      About_presentation_error: "關於輸出格式錯誤?",
      About_presentation_error_answer_part_1: "此OJ中沒有輸出格式錯誤。Judge系統將自動整理輸出然後包裹在輸出的",
      last: "最後",
      About_presentation_error_answer_part_2: "一行中。如果仍然與正確的輸出不同，則結果將是",
      How_to_report_bugs: "如何回報關於此OJ的錯誤?",
      How_to_report_bugs_answer_part_1: "此線上解題系統是開源的，你可以到",
      How_to_report_bugs_answer_part_2: "提交問題。請提供有關錯誤的詳細訊息(如env，版本...)，這將極大地幫助我們解決該錯誤。當然，我們十分樂意合併你的請求",
      Cancel: "取消",
      Problems: "題目",
      Announcements: "公告",
      Submissions: "提交資訊",
      Rankings: "排名",
      Overview: "概要",
      Admin_Helper: "管理員助手",
      StartAt: "開始時間",
      EndAt: "結束時間",
      ContestType: "比賽類型",
      Creator: "發起人",
      Public: "公開",
      Password_Protected: "密碼保護",
      Rule: "賽制",
      OI: "OI",
      ACM: "ACM",
      Underway: "進行中",
      Not_Started: "準備中",
      Ended: "已結束",
      No_contest: "目前無任何比賽",
      Please_login_first: "請先登入!",
      Problems_List: "試題列表",
      No_Problems: "暫無試題",
      Language: "語言",
      Theme: "主題",
      Reset_to_default_code_definition: "使用預設程式碼設定",
      Upload_file: "上傳文件",
      Monokai: "Monokai",
      Solarized_Light: "日光燈",
      Material: "材料",
      Latex_Editor: "Latex 編輯器",
      Home: "首頁",
      NavProblems: "試題",
      Contests: "比賽",
      NavStatus: "狀態",
      Rank: "排名",
      ACM_Rank: "ACM 排名",
      OI_Rank: "OI 排名",
      About: "關於",
      Judger: "Judge 說明",
      FAQ: "常見問題",
      Login: "登入",
      Register: "註冊",
      MyHome: "我的首頁",
      MySubmissions: "我的提交",
      Settings: "我的設定",
      Management: "後台管理",
      Logout: "登出",
      Welcome_to: "歡迎來到",
      Refresh: "重新整理",
      Back: "返回",
      No_Announcements: "暫無公告",
      Profile: "個人資訊設定",
      Account: "帳號設定",
      Security: "安全設定",
      ChangePassword: "更改密碼",
      ChangeEmail: "更改 E-mail",
      Update_Password: "更新密碼",
      Avatar_Setting: "大頭貼設定",
      Profile_Setting: "個人資訊設定",
      Sessions: "登入記錄",
      Two_Factor_Authentication: "兩步驟驗證",
      LoginUsername: "使用者名稱",
      LoginPassword: "密碼",
      TFA_Code: "兩步驟驗證碼",
      No_Account: "沒有帳號，立即註冊!",
      Forget_Password: "忘記密碼",
      UserLogin: "登入",
      Welcome_back: "歡迎回來",
      OI_Ranklist: "OI 排名",
      Total_Score: "總分",
      Problem_List: "試題列表",
      High: "高級",
      Mid: "中級",
      Low: "初級",
      All: "全部",
      Reset: "重置",
      Pick_One: "選擇",
      Difficulty: "難度",
      Total: "總數",
      AC_Rate: "通過率",
      RegisterUsername: "使用者名稱",
      Email_Address: "E-mail",
      RegisterPassword: "密碼",
      Password_Again: "確認密碼",
      Captcha: "驗證碼",
      UserRegister: "註冊",
      Already_Registed: "已經註冊? 現在登入!",
      The_username_already_exists: "此使用者名稱已經存在.",
      The_email_already_exists: "此電子郵件地址已被註冊",
      password_does_not_match: "無密碼相符",
      Thanks_for_registering: "感謝你的註冊，現在你可以登入了",
      Reset_Password: "重設密碼",
      RPassword: "密碼",
      RPassword_Again: "確認密碼",
      RCaptcha: "驗證碼",
      ApplyEmail: "E-mail",
      Send_Password_Reset_Email: "傳送密碼重設 E-mail",
      Your_password_has_been_reset: "你的密碼已重置",
      Save: "存檔",
      Uploading_is_in_progress: "上傳作業正在執行，你確定要離開當前頁面嗎??",
      Lang: "語言",
      Share: "分享",
      UnShare: "不分享",
      Succeeded: "成功",
      Real_Time: "真實時間",
      Signal: "訊號",
      When: "時間",
      ID: "ID",
      Time: "時間",
      Memory: "記憶體空間",
      Author: "作者",
      Option: "選項",
      Mine: "我的",
      Search_Author: "搜尋作者",
      Accepted: "答案正確",
      Time_Limit_Exceeded: "超出時間限制",
      Memory_Limit_Exceeded: "超出記憶體空間限制",
      Runtime_Error: "Runtime Error",
      System_Error: "System Error",
      Pending: "Pending",
      Partial_Accepted: "Partial Accepted",
      Compile_Error: "Compile Error",
      Rejudge: "Rejudge",
      UserHomeSolved: "已解題數量",
      UserHomeserSubmissions: "提交次數",
      UserHomeScore: "分數",
      List_Solved_Problems: "已完成題目的列表",
      UserHomeIntro: "這個使用者尚未解題..."
    }
  }, XtiL: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Number", {isInteger: r("n982")})
  }, XvUs: function (t, e, r) {
    var n = r("DIVP");
    t.exports = function (t, e, r, o) {
      try {
        return o ? e(n(r)[0], r[1]) : e(r)
      } catch (e) {
        var i = t.return;
        throw void 0 !== i && n(i.call(t)), e
      }
    }
  }, Y1N3: function (t, e) {
    e.f = Object.getOwnPropertySymbols
  }, Y1S0: function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("BbyF"), i = r("kqpo"), a = "".endsWith;
    n(n.P + n.F * r("1ETD")("endsWith"), "String", {
      endsWith: function (t) {
        var e = i(this, t, "endsWith"), r = arguments.length > 1 ? arguments[1] : void 0, n = o(e.length),
          s = void 0 === r ? n : Math.min(o(r), n), u = String(t);
        return a ? a.call(e, u, s) : e.slice(s - u.length, s) === u
      }
    })
  }, Y1aA: function (t, e) {
    e.f = {}.propertyIsEnumerable
  }, Y5ex: function (t, e, r) {
    var n = r("UKM+"), o = r("1aA0").onFreeze;
    r("3i66")("preventExtensions", function (t) {
      return function (e) {
        return t && n(e) ? t(o(e)) : e
      }
    })
  }, YUr7: function (t, e, r) {
    var n = r("WcO1"), o = r("Y1N3"), i = r("DIVP"), a = r("OzIq").Reflect;
    t.exports = a && a.ownKeys || function (t) {
      var e = n.f(i(t)), r = o.f;
      return r ? e.concat(r(t)) : e
    }
  }, "YVn/": function (t, e, r) {
    var n = r("Ds5P"), o = r("lKE8")(!1);
    n(n.S, "Object", {
      values: function (t) {
        return o(t)
      }
    })
  }, YiIK: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), r.d(e, "m", function () {
      return n
    });
    var n = {
      Go_Home: "返回主页",
      Description: "题目描述",
      Input: "输入",
      Output: "输出",
      Sample_Input: "输入样例",
      Sample_Output: "输出样例",
      Hint: "提示",
      Source: "题目来源",
      Status: "状态",
      Information: "题目信息",
      Time_Limit: "时间限制",
      Memory_Limit: "内存限制",
      Created: "出题人",
      Level: "难度",
      Score: "分数",
      Tags: "标签",
      Show: "显示",
      Submit: "提交",
      Submitting: "正在提交",
      Judging: "正在评分",
      Wrong_Answer: "答案错误",
      Statistic: "统计",
      Close: "关闭",
      View_Contest: "查看比赛",
      Are_you_sure_you_want_to_reset_your_code: "确定要重置代码吗？",
      Code_can_not_be_empty: "不能提交空代码",
      Submit_code_successfully: "成功提交代码",
      You_have_solved_the_problem: "你已经解决了该问题",
      Submitted_successfully: "成功提交",
      You_have_submitted_a_solution: "你已经提交了解答",
      Contest_has_ended: "比赛已结束",
      You_have_submission_in_this_problem_sure_to_cover_it: "你已经提交了解答，确定要覆盖吗？",
      Compiler: "编译器",
      Result_Explanation: "结果解释",
      Pending_Judging_Description: "您的解答将很快被测评，请等待结果。",
      Compile_Error_Description: "无法编译您的源代码，点击链接查看编译器的输出。",
      Accepted_Description: "你的解题方法是正确的。",
      Wrong_Answer_Description: "你的程序输出结果与判题程序的答案不符。",
      Runtime_Error_Description: "您的程序异常终止，可能的原因是：段错误，被零除或用非0的代码退出程序。",
      Time_Limit_Exceeded_Description: "您的程序使用的 CPU 时间已超出限制。",
      Memory_Limit_Exceeded_Description: "程序实际使用的内存已超出限制。",
      System_Error_Description: "糟糕，判题程序出了问题。请报告给管理员。",
      Menu: "菜单",
      Chart: "图表",
      Auto_Refresh: "自动刷新",
      RealName: "真名",
      Force_Update: "强制刷新",
      download_csv: "下载 csv",
      TotalTime: "总时间",
      Top_10_Teams: "前 10 强队伍",
      save_as_image: "保存图片",
      ACM_Helper: "ACM 助手",
      AC_Time: "AC 时间",
      ProblemID: "问题 ID",
      First_Blood: "一血",
      Username: "用户名",
      Checked: "已检查",
      Not_Checked: "未检查",
      Check_It: "现在检查",
      ACM_Ranklist: "ACM 排名",
      mood: "格言",
      AC: "AC",
      Rating: "评分",
      Contest_Announcements: "比赛公告",
      By: "创建人",
      The_email_doesnt_exist: "该电子邮件地址不存在",
      Success: "成功",
      Password_reset_mail_sent: "密码重置邮件已发送。",
      Frequently_Asked_Questions: "常见问题",
      Where_is_the_input_and_the_output: "输入和输出在哪里？",
      Where_is_the_input_and_the_output_answer_part_1: "您的程序应从",
      Standard_Input: "标准输入",
      Where_is_the_input_and_the_output_answer_part_3: "读取输入，并将输出写入",
      Standard_Output: "标准输出",
      Where_is_the_input_and_the_output_answer_part_5: "例如，您可以在 C 中使用",
      Where_is_the_input_and_the_output_answer_part_6: "或在 C ++ 中使用",
      Where_is_the_input_and_the_output_answer_part_7: "读取，并在 C 中使用",
      Where_is_the_input_and_the_output_answer_part_8: "或在 C ++ 中使用",
      Where_is_the_input_and_the_output_answer_part_9: "写入 stdout。用户程序不允许读取或写入文件，否则您将收到",
      What_is_the_meaning_of_submission_execution_time: "提交执行时间是什么意思？",
      What_is_the_meaning_of_submission_execution_time_answer: "OnlineJudge 可能会使用不同的输入文件多次测试您的代码。如果您的代码在每个输入文件的时间限制内给出正确的答案，则显示的执行时间是每个测试用例所花费的最大时间。否则，执行时间将毫无意义。",
      How_Can_I_use_CPP_Int64: "如何使用 C ++ Int64？",
      How_Can_I_use_CPP_Int64_answer_part_1: "您应该声明",
      How_Can_I_use_CPP_Int64_answer_part_2: "并与",
      or: "或",
      using: "一起使用，使用",
      How_Can_I_use_CPP_Int64_answer_part_3: " 将导致",
      Java_specifications: "Java 规范？",
      Java_specifications_answer_part_1: "所有程序都必须以",
      Java_specifications_answer_part_2: "类的静态 main 方法开始。不要使用公共类：即使",
      Java_specifications_answer_part_3: "也必须是非公共类以避免编译错误使用缓冲I / O以避免由于过度刷新而导致超出时间限制",
      About_presentation_error: "关于输出格式错误？",
      About_presentation_error_answer_part_1: "该 OJ 中没有输出格式错误。Judger将对自动对输出修整然后包裹在输出的",
      last: "最后",
      About_presentation_error_answer_part_2: "一行中。如果仍然与正确的输出不同，则结果将是",
      How_to_report_bugs: "如何报告有关此 OJ 的错误？",
      How_to_report_bugs_answer_part_1: "onlinejudge 是开源的，您可以到",
      How_to_report_bugs_answer_part_2: "提交问题。需要有关错误的详细信息（例如env，版本..），这将帮助我们极大地解决该错误。当然，我们很高兴合并您的请求。",
      Cancel: "取消",
      Problems: "题目",
      Announcements: "公告",
      Submissions: "提交信息",
      Rankings: "排名",
      Overview: "概要",
      Admin_Helper: "管理员助手",
      StartAt: "开始时间",
      EndAt: "结束时间",
      ContestType: "比赛类型",
      Creator: "发起人",
      Public: "公开",
      Password_Protected: "密码保护",
      Rule: "赛制",
      OI: "OI",
      ACM: "ACM",
      Underway: "进行中",
      Not_Started: "筹备中",
      Ended: "已结束",
      No_contest: "尚无练习或比赛",
      Please_login_first: "请先登录！",
      Problems_List: "问题列表",
      No_Problems: "尚无问题",
      Language: "语言",
      Theme: "主题",
      Reset_to_default_code_definition: "重设返回默认代码设置",
      Upload_file: "上传文件",
      Monokai: "物界",
      Solarized_Light: "日光灯",
      Material: "材料",
      Latex_Editor: "Latex 编辑器",
      Home: "首页",
      NavProblems: "问题",
      Contests: "练习&比赛",
      NavStatus: "状态",
      Rank: "排名",
      ACM_Rank: "ACM 排名",
      OI_Rank: "OI 排名",
      About: "关于",
      Judger: "评分器",
      FAQ: "常见问题",
      Login: "登录",
      Register: "注册",
      MyHome: "我的主页",
      MySubmissions: "我的提交",
      Settings: "我的设置",
      Management: "后台管理",
      Logout: "退出",
      Welcome_to: "欢迎来到",
      Refresh: "刷新",
      Back: "返回",
      No_Announcements: "暂无公告",
      Profile: "个人信息设置",
      Account: "账号设置",
      Security: "安全设置",
      ChangePassword: "更改密码",
      ChangeEmail: "更改邮箱",
      Update_Password: "更新密码",
      Avatar_Setting: "头像设置",
      Profile_Setting: "个人信息设置",
      Sessions: "登录记录",
      Two_Factor_Authentication: "双因素认证",
      LoginUsername: "用户名",
      LoginPassword: "密码",
      TFA_Code: "TFA App 双因素认证码",
      No_Account: "还没账号，立即注册!",
      Forget_Password: "忘记密码",
      UserLogin: "登录",
      Welcome_back: "欢迎回来",
      OI_Ranklist: "OI 排名",
      Total_Score: "总分",
      Problem_List: "问题列表",
      High: "高",
      Mid: "中",
      Low: "低",
      All: "全部",
      Reset: "重置",
      Pick_One: "选择",
      Difficulty: "难度",
      Total: "总数",
      AC_Rate: "通过率",
      RegisterUsername: "用户名",
      Email_Address: "电子邮箱",
      RegisterPassword: "密码",
      Password_Again: "确认密码",
      Captcha: "验证码",
      UserRegister: "注册",
      Already_Registed: "已经注册？现在登录!",
      The_username_already_exists: "该用户名已存在",
      The_email_already_exists: "该电子邮件地址已存在",
      password_does_not_match: "密码不匹配",
      Thanks_for_registering: "感谢注册，您现在可以登录了",
      Reset_Password: "重置密码",
      RPassword: "密码",
      RPassword_Again: "确认密码",
      RCaptcha: "验证码",
      ApplyEmail: "电子邮箱",
      Send_Password_Reset_Email: "发送重置密码到邮箱",
      Your_password_has_been_reset: "您的密码已重置",
      Save: "保存",
      Uploading_is_in_progress: "正在上传，您确定要离开当前页面吗？",
      Lang: "语言",
      Share: "分享",
      UnShare: "不分享",
      Succeeded: "成功",
      Real_Time: "真实时间",
      Signal: "信号",
      When: "时间",
      ID: "ID",
      Time: "时间",
      Memory: "内存",
      Author: "作者",
      Option: "选项",
      Mine: "我的",
      Search_Author: "搜索作者",
      Accepted: "答案正确",
      Time_Limit_Exceeded: "运行超时",
      Memory_Limit_Exceeded: "内存超限",
      Runtime_Error: "运行时错误",
      System_Error: "系统错误",
      Pending: "等待评分",
      Partial_Accepted: "部分正确",
      Compile_Error: "编译失败",
      Rejudge: "重新评分",
      UserHomeSolved: "已解决问题的数量",
      UserHomeserSubmissions: "提交次数",
      UserHomeScore: "分数",
      List_Solved_Problems: "已解决问题的列表",
      UserHomeIntro: "这个家伙太懒了，还没有做题呢..."
    }
  }, Yobk: function (t, e, r) {
    var n = r("77Pl"), o = r("qio6"), i = r("xnc9"), a = r("ax3d")("IE_PROTO"), s = function () {
    }, u = function () {
      var t, e = r("ON07")("iframe"), n = i.length;
      for (e.style.display = "none", r("RPLV").appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; n--;) delete u.prototype[i[n]];
      return u()
    };
    t.exports = Object.create || function (t, e) {
      var r;
      return null !== t ? (s.prototype = n(t), r = new s, s.prototype = null, r[a] = t) : r = u(), void 0 === e ? r : o(r, e)
    }
  }, ZDXm: function (t, e, r) {
    "use strict";
    var n, o = r("LhTa")(0), i = r("R3AP"), a = r("1aA0"), s = r("oYd7"), u = r("fJSx"), c = r("UKM+"), l = r("zgIt"),
      h = r("zq/X"), m = a.getWeak, f = Object.isExtensible, p = u.ufstore, d = {}, g = function (t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      }, v = {
        get: function (t) {
          if (c(t)) {
            var e = m(t);
            return !0 === e ? p(h(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
          }
        }, set: function (t, e) {
          return u.def(h(this, "WeakMap"), t, e)
        }
      }, y = t.exports = r("0Rih")("WeakMap", g, v, u, !0, !0);
    l(function () {
      return 7 != (new y).set((Object.freeze || Object)(d), 7).get(d)
    }) && (s((n = u.getConstructor(g, "WeakMap")).prototype, v), a.NEED = !0, o(["delete", "has", "get", "set"], function (t) {
      var e = y.prototype, r = e[t];
      i(e, t, function (e, o) {
        if (c(e) && !f(e)) {
          this._f || (this._f = new n);
          var i = this._f[t](e, o);
          return "set" == t ? this : i
        }
        return r.call(this, e, o)
      })
    }))
  }, ZtwE: function (t, e, r) {
    "use strict";
    var n = r("XSOZ"), o = r("UKM+"), i = r("PHCx"), a = [].slice, s = {};
    t.exports = Function.bind || function (t) {
      var e = n(this), r = a.call(arguments, 1), u = function () {
        var n = r.concat(a.call(arguments));
        return this instanceof u ? function (t, e, r) {
          if (!(e in s)) {
            for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
            s[e] = Function("F,a", "return new F(" + n.join(",") + ")")
          }
          return s[e](t, r)
        }(e, n.length, n) : i(e, n, t)
      };
      return o(e.prototype) && (u.prototype = e.prototype), u
    }
  }, aJ2J: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Number", {MIN_SAFE_INTEGER: -9007199254740991})
  }, ax3d: function (t, e, r) {
    var n = r("e8AB")("keys"), o = r("3Eo+");
    t.exports = function (t) {
      return n[t] || (n[t] = o(t))
    }
  }, "bG/2": function (t, e, r) {
    var n = r("PHqh"), o = r("WcO1").f, i = {}.toString,
      a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
      return a && "[object Window]" == i.call(t) ? function (t) {
        try {
          return o(t)
        } catch (t) {
          return a.slice()
        }
      }(t) : o(n(t))
    }
  }, bN1p: function (t, e) {
    t.exports = {}
  }, bOdI: function (t, e, r) {
    "use strict";
    e.__esModule = !0;
    var n = function (t) {
      return t && t.__esModule ? t : {default: t}
    }(r("C4MV"));
    e.default = function (t, e, r) {
      return e in t ? (0, n.default)(t, e, {value: r, enumerable: !0, configurable: !0, writable: !0}) : t[e] = r, t
    }
  }, bRrM: function (t, e, r) {
    "use strict";
    var n = r("7KvD"), o = r("FeBl"), i = r("evD5"), a = r("+E39"), s = r("dSzd")("species");
    t.exports = function (t) {
      var e = "function" == typeof o[t] ? o[t] : n[t];
      a && e && !e[s] && i.f(e, s, {
        configurable: !0, get: function () {
          return this
        }
      })
    }
  }, bSML: function (t, e, r) {
    "use strict";
    var n = r("lDLk"), o = r("fU25");
    t.exports = function (t, e, r) {
      e in t ? n.f(t, e, o(0, r)) : t[e] = r
    }
  }, bUY0: function (t, e, r) {
    var n = r("lDLk"), o = r("x9zv"), i = r("KOrd"), a = r("WBcL"), s = r("Ds5P"), u = r("fU25"), c = r("DIVP"),
      l = r("UKM+");
    s(s.S, "Reflect", {
      set: function t(e, r, s) {
        var h, m, f = arguments.length < 4 ? e : arguments[3], p = o.f(c(e), r);
        if (!p) {
          if (l(m = i(e))) return t(m, r, s, f);
          p = u(0)
        }
        if (a(p, "value")) {
          if (!1 === p.writable || !l(f)) return !1;
          if (h = o.f(f, r)) {
            if (h.get || h.set || !1 === h.writable) return !1;
            h.value = s, n.f(f, r, h)
          } else n.f(f, r, u(0, s));
          return !0
        }
        return void 0 !== p.set && (p.set.call(f, s), !0)
      }
    })
  }, bUqO: function (t, e, r) {
    t.exports = !r("zgIt")(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, bYhl: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = r("7+uW"), o = r("/Hyb"), i = r.n(o), a = r("6fN7"), s = r.n(a);
    i.a.config("https://6234a51e61a743b089ed64c51d2f6ea9@sentry.io/258234", {
      release: "20210928-acce7",
      ignoreUrls: [/extensions\//i, /^chrome:\/\//i, /^resource:\/\//i, /\/(gtm|ga|analytics)\.js/i]
    }).addPlugin(s.a, n.default).install(), i.a.setUserContext({version: "20210928-acce7", location: window.location})
  }, beEN: function (t, e, r) {
    "use strict";
    var n = r("rFzY"), o = r("Ds5P"), i = r("FryR"), a = r("XvUs"), s = r("9vb1"), u = r("BbyF"), c = r("bSML"),
      l = r("SHe9");
    o(o.S + o.F * !r("qkyc")(function (t) {
      Array.from(t)
    }), "Array", {
      from: function (t) {
        var e, r, o, h, m = i(t), f = "function" == typeof this ? this : Array, p = arguments.length,
          d = p > 1 ? arguments[1] : void 0, g = void 0 !== d, v = 0, y = l(m);
        if (g && (d = n(d, p > 2 ? arguments[2] : void 0, 2)), void 0 == y || f == Array && s(y)) for (r = new f(e = u(m.length)); e > v; v++) c(r, v, g ? d(m[v], v) : m[v]); else for (h = y.call(m), r = new f; !(o = h.next()).done; v++) c(r, v, g ? a(h, d, [o.value, v], !0) : o.value);
        return r.length = v, r
      }
    })
  }, boo2: function (t, e, r) {
    var n = r("UKM+"), o = r("XO1R"), i = r("kkCw")("species");
    t.exports = function (t) {
      var e;
      return o(t) && ("function" != typeof (e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), n(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
    }
  }, bqOW: function (t, e, r) {
    var n = r("Ds5P"), o = r("zo/l"), i = String.fromCharCode, a = String.fromCodePoint;
    n(n.S + n.F * (!!a && 1 != a.length), "String", {
      fromCodePoint: function (t) {
        for (var e, r = [], n = arguments.length, a = 0; n > a;) {
          if (e = +arguments[a++], o(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
          r.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
        }
        return r.join("")
      }
    })
  }, cwmK: function (t, e) {
    t.exports = Math.sign || function (t) {
      return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
  }, d075: function (t, e, r) {
    var n = r("OzIq").document;
    t.exports = n && n.documentElement
  }, dNDb: function (t, e) {
    t.exports = function (t) {
      try {
        return {e: !1, v: t()}
      } catch (t) {
        return {e: !0, v: t}
      }
    }
  }, dSUw: function (t, e, r) {
    "use strict";
    var n = r("Dgii"), o = r("zq/X");
    t.exports = r("0Rih")("Set", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      add: function (t) {
        return n.def(o(this, "Set"), t = 0 === t ? 0 : t, t)
      }
    }, n)
  }, dSzd: function (t, e, r) {
    var n = r("e8AB")("wks"), o = r("3Eo+"), i = r("7KvD").Symbol, a = "function" == typeof i;
    (t.exports = function (t) {
      return n[t] || (n[t] = a && i[t] || (a ? i : o)("Symbol." + t))
    }).store = n
  }, dTzs: function (t, e, r) {
    r("77Ug")("Float32", 4, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n)
      }
    })
  }, dY0y: function (t, e, r) {
    var n = r("dSzd")("iterator"), o = !1;
    try {
      var i = [7][n]();
      i.return = function () {
        o = !0
      }, Array.from(i, function () {
        throw 2
      })
    } catch (t) {
    }
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var r = !1;
      try {
        var i = [7], a = i[n]();
        a.next = function () {
          return {done: r = !0}
        }, i[n] = function () {
          return a
        }, t(i)
      } catch (t) {
      }
      return r
    }
  }, dich: function (t, e, r) {
    var n = r("Ds5P"), o = r("Sejc");
    n(n.G + n.B, {setImmediate: o.set, clearImmediate: o.clear})
  }, "dm+7": function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Reflect", {
      has: function (t, e) {
        return e in t
      }
    })
  }, e6n0: function (t, e, r) {
    var n = r("evD5").f, o = r("D2L2"), i = r("dSzd")("toStringTag");
    t.exports = function (t, e, r) {
      t && !o(t = r ? t : t.prototype, i) && n(t, i, {configurable: !0, value: e})
    }
  }, e8AB: function (t, e, r) {
    var n = r("FeBl"), o = r("7KvD"), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
      version: n.version,
      mode: r("O4g8") ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
  }, eC2H: function (t, e, r) {
    r("3i66")("getOwnPropertyNames", function () {
      return r("bG/2").f
    })
  }, evD5: function (t, e, r) {
    var n = r("77Pl"), o = r("SfB7"), i = r("MmMw"), a = Object.defineProperty;
    e.f = r("+E39") ? Object.defineProperty : function (t, e, r) {
      if (n(t), e = i(e, !0), n(r), o) try {
        return a(t, e, r)
      } catch (t) {
      }
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
      return "value" in r && (t[e] = r.value), t
    }
  }, fJSx: function (t, e, r) {
    "use strict";
    var n = r("A16L"), o = r("1aA0").getWeak, i = r("DIVP"), a = r("UKM+"), s = r("9GpA"), u = r("vmSO"), c = r("LhTa"),
      l = r("WBcL"), h = r("zq/X"), m = c(5), f = c(6), p = 0, d = function (t) {
        return t._l || (t._l = new g)
      }, g = function () {
        this.a = []
      }, v = function (t, e) {
        return m(t.a, function (t) {
          return t[0] === e
        })
      };
    g.prototype = {
      get: function (t) {
        var e = v(this, t);
        if (e) return e[1]
      }, has: function (t) {
        return !!v(this, t)
      }, set: function (t, e) {
        var r = v(this, t);
        r ? r[1] = e : this.a.push([t, e])
      }, delete: function (t) {
        var e = f(this.a, function (e) {
          return e[0] === t
        });
        return ~e && this.a.splice(e, 1), !!~e
      }
    }, t.exports = {
      getConstructor: function (t, e, r, i) {
        var c = t(function (t, n) {
          s(t, c, e, "_i"), t._t = e, t._i = p++, t._l = void 0, void 0 != n && u(n, r, t[i], t)
        });
        return n(c.prototype, {
          delete: function (t) {
            if (!a(t)) return !1;
            var r = o(t);
            return !0 === r ? d(h(this, e)).delete(t) : r && l(r, this._i) && delete r[this._i]
          }, has: function (t) {
            if (!a(t)) return !1;
            var r = o(t);
            return !0 === r ? d(h(this, e)).has(t) : r && l(r, this._i)
          }
        }), c
      }, def: function (t, e, r) {
        var n = o(i(e), !0);
        return !0 === n ? d(t).set(e, r) : n[t._i] = r, t
      }, ufstore: d
    }
  }, fJUb: function (t, e, r) {
    var n = r("77Pl"), o = r("EqjI"), i = r("qARP");
    t.exports = function (t, e) {
      if (n(t), o(e) && e.constructor === t) return e;
      var r = i.f(t);
      return (0, r.resolve)(e), r.promise
    }
  }, fU25: function (t, e) {
    t.exports = function (t, e) {
      return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
  }, fZjL: function (t, e, r) {
    t.exports = {default: r("jFbC"), __esModule: !0}
  }, fkB2: function (t, e, r) {
    var n = r("UuGF"), o = Math.max, i = Math.min;
    t.exports = function (t, e) {
      return (t = n(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
  }, fx22: function (t, e, r) {
    for (var n = r("WgSQ"), o = r("Qh14"), i = r("R3AP"), a = r("OzIq"), s = r("2p1q"), u = r("bN1p"), c = r("kkCw"), l = c("iterator"), h = c("toStringTag"), m = u.Array, f = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, p = o(f), d = 0; d < p.length; d++) {
      var g, v = p[d], y = f[v], b = a[v], _ = b && b.prototype;
      if (_ && (_[l] || s(_, l, m), _[h] || s(_, h, v), u[v] = m, y)) for (g in n) _[g] || i(_, g, n[g], !0)
    }
  }, fxRn: function (t, e, r) {
    r("+tPU"), r("zQR9"), t.exports = r("g8Ux")
  }, "g/m8": function (t, e, r) {
    var n = r("cwmK"), o = Math.pow, i = o(2, -52), a = o(2, -23), s = o(2, 127) * (2 - a), u = o(2, -126);
    t.exports = Math.fround || function (t) {
      var e, r, o = Math.abs(t), c = n(t);
      return o < u ? c * function (t) {
        return t + 1 / i - 1 / i
      }(o / u / a) * u * a : (r = (e = (1 + a / i) * o) - (e - o)) > s || r != r ? c * (1 / 0) : c * r
    }
  }, g36u: function (t, e, r) {
    var n = r("OzIq"), o = r("Sejc").set, i = n.MutationObserver || n.WebKitMutationObserver, a = n.process,
      s = n.Promise, u = "process" == r("ydD5")(a);
    t.exports = function () {
      var t, e, r, c = function () {
        var n, o;
        for (u && (n = a.domain) && n.exit(); t;) {
          o = t.fn, t = t.next;
          try {
            o()
          } catch (n) {
            throw t ? r() : e = void 0, n
          }
        }
        e = void 0, n && n.enter()
      };
      if (u) r = function () {
        a.nextTick(c)
      }; else if (!i || n.navigator && n.navigator.standalone) if (s && s.resolve) {
        var l = s.resolve(void 0);
        r = function () {
          l.then(c)
        }
      } else r = function () {
        o.call(n, c)
      }; else {
        var h = !0, m = document.createTextNode("");
        new i(c).observe(m, {characterData: !0}), r = function () {
          m.data = h = !h
        }
      }
      return function (n) {
        var o = {fn: n, next: void 0};
        e && (e.next = o), t || (t = o, r()), e = o
      }
    }
  }, g8Ux: function (t, e, r) {
    var n = r("77Pl"), o = r("3fs2");
    t.exports = r("FeBl").getIterator = function (t) {
      var e = o(t);
      if ("function" != typeof e) throw TypeError(t + " is not iterable!");
      return n(e.call(t))
    }
  }, gPva: function (t, e, r) {
    var n = r("UKM+");
    r("3i66")("isExtensible", function (t) {
      return function (e) {
        return !!n(e) && (!t || t(e))
      }
    })
  }, gbyG: function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("ot5s")(!0);
    n(n.P, "Array", {
      includes: function (t) {
        return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
    }), r("RhFG")("includes")
  }, gvDt: function (t, e, r) {
    var n = r("UKM+"), o = r("DIVP"), i = function (t, e) {
      if (o(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
        try {
          (n = r("rFzY")(Function.call, r("x9zv").f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
        } catch (t) {
          e = !0
        }
        return function (t, r) {
          return i(t, r), e ? t.__proto__ = r : n(t, r), t
        }
      }({}, !1) : void 0), check: i
    }
  }, gwsl: function (t, e, r) {
    "use strict";
    e.__esModule = !0, e.default = {
      el: {
        colorpicker: {confirm: "確認", clear: "清空"},
        datepicker: {
          now: "現在",
          today: "今天",
          cancel: "取消",
          clear: "清空",
          confirm: "確認",
          selectDate: "選擇日期",
          selectTime: "選擇時間",
          startDate: "開始日期",
          startTime: "開始時間",
          endDate: "結束日期",
          endTime: "結束時間",
          prevYear: "前一年",
          nextYear: "後一年",
          prevMonth: "上個月",
          nextMonth: "下個月",
          year: "年",
          month1: "1 月",
          month2: "2 月",
          month3: "3 月",
          month4: "4 月",
          month5: "5 月",
          month6: "6 月",
          month7: "7 月",
          month8: "8 月",
          month9: "9 月",
          month10: "10 月",
          month11: "11 月",
          month12: "12 月",
          weeks: {sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六"},
          months: {
            jan: "一月",
            feb: "二月",
            mar: "三月",
            apr: "四月",
            may: "五月",
            jun: "六月",
            jul: "七月",
            aug: "八月",
            sep: "九月",
            oct: "十月",
            nov: "十一月",
            dec: "十二月"
          }
        },
        select: {loading: "加載中", noMatch: "無匹配資料", noData: "無資料", placeholder: "請選擇"},
        cascader: {noMatch: "無匹配資料", loading: "加載中", placeholder: "請選擇"},
        pagination: {goto: "前往", pagesize: "項/頁", total: "共 {total} 項", pageClassifier: "頁"},
        messagebox: {title: "提示", confirm: "確定", cancel: "取消", error: "輸入的資料不符規定!"},
        upload: {deleteTip: "按 delete 鍵可刪除", delete: "刪除", preview: "查看圖片", continue: "繼續上傳"},
        table: {emptyText: "暫無資料", confirmFilter: "篩選", resetFilter: "重置", clearFilter: "全部", sumText: "Sum"},
        tree: {emptyText: "暫無資料"},
        transfer: {
          noMatch: "無匹配資料",
          noData: "無資料",
          titles: ["List 1", "List 2"],
          filterPlaceholder: "Enter keyword",
          noCheckedFormat: "{total} items",
          hasCheckedFormat: "{checked}/{total} checked"
        }
      }
    }
  }, h65t: function (t, e, r) {
    var n = r("UuGF"), o = r("52gC");
    t.exports = function (t) {
      return function (e, r) {
        var i, a, s = String(o(e)), u = n(r), c = s.length;
        return u < 0 || u >= c ? t ? "" : void 0 : (i = s.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : i : t ? s.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536
      }
    }
  }, hJx8: function (t, e, r) {
    var n = r("evD5"), o = r("X8DO");
    t.exports = r("+E39") ? function (t, e, r) {
      return n.f(t, e, o(1, r))
    } : function (t, e, r) {
      return t[e] = r, t
    }
  }, hyJX: function (t, e, r) {
    !function (e, n) {
      t.exports = n(r("7+uW"))
    }("undefined" != typeof self && self, function (t) {
      return function (t) {
        var e = {};

        function r(n) {
          if (e[n]) return e[n].exports;
          var o = e[n] = {i: n, l: !1, exports: {}};
          return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        return r.m = t, r.c = e, r.d = function (t, e, n) {
          r.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: n})
        }, r.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default
          } : function () {
            return t
          };
          return r.d(e, "a", e), e
        }, r.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "/dist/locale/", r(r.s = 5)
      }([function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
          o || void 0 !== window.iview && ("langs" in iview || (iview.langs = {}), iview.langs[t.i.locale] = t)
        };
        var n, o = ((n = r(1)) && n.__esModule ? n : {default: n}).default.prototype.$isServer
      }, function (e, r) {
        e.exports = t
      }, , , , function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var n, o = {
          i: {
            locale: "en-US",
            select: {placeholder: "Select", noMatch: "No matching data", loading: "Loading"},
            table: {
              noDataText: "No Data",
              noFilteredDataText: "No filter data",
              confirmFilter: "Confirm",
              resetFilter: "Reset",
              clearFilter: "All"
            },
            datepicker: {
              selectDate: "Select date",
              selectTime: "Select time",
              startTime: "Start Time",
              endTime: "End Time",
              clear: "Clear",
              ok: "OK",
              datePanelLabel: "[mmmm] [yyyy]",
              month: "Month",
              month1: "January",
              month2: "February",
              month3: "March",
              month4: "April",
              month5: "May",
              month6: "June",
              month7: "July",
              month8: "August",
              month9: "September",
              month10: "October",
              month11: "November",
              month12: "December",
              year: "Year",
              weekStartDay: "0",
              weeks: {sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat"},
              months: {
                m1: "Jan",
                m2: "Feb",
                m3: "Mar",
                m4: "Apr",
                m5: "May",
                m6: "Jun",
                m7: "Jul",
                m8: "Aug",
                m9: "Sep",
                m10: "Oct",
                m11: "Nov",
                m12: "Dec"
              }
            },
            transfer: {
              titles: {source: "Source", target: "Target"},
              filterPlaceholder: "Search here",
              notFoundText: "Not Found"
            },
            modal: {okText: "OK", cancelText: "Cancel"},
            poptip: {okText: "OK", cancelText: "Cancel"},
            page: {
              prev: "Previous Page",
              next: "Next Page",
              total: "Total",
              item: "item",
              items: "items",
              prev5: "Previous 5 Pages",
              next5: "Next 5 Pages",
              page: "/page",
              goto: "Goto",
              p: ""
            },
            rate: {star: "Star", stars: "Stars"},
            tree: {emptyText: "No Data"}
          }
        };
        (0, ((n = r(0)) && n.__esModule ? n : {default: n}).default)(o), e.default = o
      }])
    })
  }, iClD: function (t, e, r) {
    "use strict";
    var n = r("PJh5"), o = r.n(n), i = r("oAV5"), a = r("2hfY");
    e.a = {
      submissionMemory: i.a.submissionMemoryFormat,
      submissionTime: i.a.submissionTimeFormat,
      localtime: a.a.utcToLocal,
      fromNow: function (t) {
        return o()(3 * t).fromNow()
      }
    }
  }, iUbK: function (t, e, r) {
    var n = r("7KvD").navigator;
    t.exports = n && n.userAgent || ""
  }, jFbC: function (t, e, r) {
    r("Cdx3"), t.exports = r("FeBl").Object.keys
  }, jIWC: function (t, e, r) {
    !function (e, n) {
      t.exports = n(r("7+uW"))
    }("undefined" != typeof self && self, function (t) {
      return function (t) {
        var e = {};

        function r(n) {
          if (e[n]) return e[n].exports;
          var o = e[n] = {i: n, l: !1, exports: {}};
          return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        return r.m = t, r.c = e, r.d = function (t, e, n) {
          r.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: n})
        }, r.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default
          } : function () {
            return t
          };
          return r.d(e, "a", e), e
        }, r.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "/dist/locale/", r(r.s = 24)
      }({
        0: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {value: !0}), e.default = function (t) {
            o || void 0 !== window.iview && ("langs" in iview || (iview.langs = {}), iview.langs[t.i.locale] = t)
          };
          var n, o = ((n = r(1)) && n.__esModule ? n : {default: n}).default.prototype.$isServer
        }, 1: function (e, r) {
          e.exports = t
        }, 24: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {value: !0});
          var n, o = {
            i: {
              locale: "zh-CN",
              select: {placeholder: "请选择", noMatch: "无匹配数据", loading: "加载中"},
              table: {
                noDataText: "暂无数据",
                noFilteredDataText: "暂无筛选结果",
                confirmFilter: "筛选",
                resetFilter: "重置",
                clearFilter: "全部"
              },
              datepicker: {
                selectDate: "选择日期",
                selectTime: "选择时间",
                startTime: "开始时间",
                endTime: "结束时间",
                clear: "清空",
                ok: "确定",
                datePanelLabel: "[yyyy年] [m月]",
                month: "月",
                month1: "1 月",
                month2: "2 月",
                month3: "3 月",
                month4: "4 月",
                month5: "5 月",
                month6: "6 月",
                month7: "7 月",
                month8: "8 月",
                month9: "9 月",
                month10: "10 月",
                month11: "11 月",
                month12: "12 月",
                year: "年",
                weekStartDay: "0",
                weeks: {sun: "日", mon: "一", tue: "二", wed: "三", thu: "四", fri: "五", sat: "六"},
                months: {
                  m1: "1月",
                  m2: "2月",
                  m3: "3月",
                  m4: "4月",
                  m5: "5月",
                  m6: "6月",
                  m7: "7月",
                  m8: "8月",
                  m9: "9月",
                  m10: "10月",
                  m11: "11月",
                  m12: "12月"
                }
              },
              transfer: {
                titles: {source: "源列表", target: "目的列表"},
                filterPlaceholder: "请输入搜索内容",
                notFoundText: "列表为空"
              },
              modal: {okText: "确定", cancelText: "取消"},
              poptip: {okText: "确定", cancelText: "取消"},
              page: {
                prev: "上一页",
                next: "下一页",
                total: "共",
                item: "条",
                items: "条",
                prev5: "向前 5 页",
                next5: "向后 5 页",
                page: "条/页",
                goto: "跳至",
                p: "页"
              },
              rate: {star: "星", stars: "星"},
              tree: {emptyText: "暂无数据"}
            }
          };
          (0, ((n = r(0)) && n.__esModule ? n : {default: n}).default)(o), e.default = o
        }
      })
    })
  }, "jKW+": function (t, e, r) {
    "use strict";
    var n = r("kM2E"), o = r("qARP"), i = r("dNDb");
    n(n.S, "Promise", {
      try: function (t) {
        var e = o.f(this), r = i(t);
        return (r.e ? e.reject : e.resolve)(r.v), e.promise
      }
    })
  }, jhxf: function (t, e, r) {
    var n = r("UKM+"), o = r("OzIq").document, i = n(o) && n(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {}
    }
  }, jrHM: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Object", {setPrototypeOf: r("gvDt").set})
  }, kBOG: function (t, e, r) {
    var n = r("Ds5P"), o = r("cwmK");
    n(n.S, "Math", {
      cbrt: function (t) {
        return o(t = +t) * Math.pow(Math.abs(t), 1 / 3)
      }
    })
  }, kM2E: function (t, e, r) {
    var n = r("7KvD"), o = r("FeBl"), i = r("+ZMJ"), a = r("hJx8"), s = r("D2L2"), u = function (t, e, r) {
      var c, l, h, m = t & u.F, f = t & u.G, p = t & u.S, d = t & u.P, g = t & u.B, v = t & u.W,
        y = f ? o : o[e] || (o[e] = {}), b = y.prototype, _ = f ? n : p ? n[e] : (n[e] || {}).prototype;
      for (c in f && (r = e), r) (l = !m && _ && void 0 !== _[c]) && s(y, c) || (h = l ? _[c] : r[c], y[c] = f && "function" != typeof _[c] ? r[c] : g && l ? i(h, n) : v && _[c] == h ? function (t) {
        var e = function (e, r, n) {
          if (this instanceof t) {
            switch (arguments.length) {
              case 0:
                return new t;
              case 1:
                return new t(e);
              case 2:
                return new t(e, r)
            }
            return new t(e, r, n)
          }
          return t.apply(this, arguments)
        };
        return e.prototype = t.prototype, e
      }(h) : d && "function" == typeof h ? i(Function.call, h) : h, d && ((y.virtual || (y.virtual = {}))[c] = h, t & u.R && b && !b[c] && a(b, c, h)))
    };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
  }, kic5: function (t, e, r) {
    var n = r("UKM+"), o = r("gvDt").set;
    t.exports = function (t, e, r) {
      var i, a = e.constructor;
      return a !== r && "function" == typeof a && (i = a.prototype) !== r.prototype && n(i) && o && o(t, i), t
    }
  }, kkCw: function (t, e, r) {
    var n = r("VWgF")("wks"), o = r("ulTY"), i = r("OzIq").Symbol, a = "function" == typeof i;
    (t.exports = function (t) {
      return n[t] || (n[t] = a && i[t] || (a ? i : o)("Symbol." + t))
    }).store = n
  }, knuC: function (t, e) {
    t.exports = function (t, e, r) {
      var n = void 0 === r;
      switch (e.length) {
        case 0:
          return n ? t() : t.call(r);
        case 1:
          return n ? t(e[0]) : t.call(r, e[0]);
        case 2:
          return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
        case 3:
          return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
        case 4:
          return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
      }
      return t.apply(r, e)
    }
  }, kqpo: function (t, e, r) {
    var n = r("u0PK"), o = r("/whu");
    t.exports = function (t, e, r) {
      if (n(e)) throw TypeError("String#" + r + " doesn't accept regex!");
      return String(o(t))
    }
  }, lDLk: function (t, e, r) {
    var n = r("DIVP"), o = r("xZa+"), i = r("s4j0"), a = Object.defineProperty;
    e.f = r("bUqO") ? Object.defineProperty : function (t, e, r) {
      if (n(t), e = i(e, !0), n(r), o) try {
        return a(t, e, r)
      } catch (t) {
      }
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
      return "value" in r && (t[e] = r.value), t
    }
  }, lKE8: function (t, e, r) {
    var n = r("Qh14"), o = r("PHqh"), i = r("Y1aA").f;
    t.exports = function (t) {
      return function (e) {
        for (var r, a = o(e), s = n(a), u = s.length, c = 0, l = []; u > c;) i.call(a, r = s[c++]) && l.push(t ? [r, a[r]] : a[r]);
        return l
      }
    }
  }, lOnJ: function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t
    }
  }, lktj: function (t, e, r) {
    var n = r("Ibhu"), o = r("xnc9");
    t.exports = Object.keys || function (t) {
      return n(t, o)
    }
  }, lyhN: function (t, e, r) {
    var n = r("Ds5P"), o = Math.atanh;
    n(n.S + n.F * !(o && 1 / o(-0) < 0), "Math", {
      atanh: function (t) {
        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
      }
    })
  }, m6Yj: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Math", {fround: r("g/m8")})
  }, m8F4: function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("2VSL"), i = r("41xE");
    n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(i), "String", {
      padEnd: function (t) {
        return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
      }
    })
  }, mClu: function (t, e, r) {
    var n = r("kM2E");
    n(n.S + n.F * !r("+E39"), "Object", {defineProperty: r("evD5").f})
  }, mJx5: function (t, e, r) {
    r("Vg1y")("split", 2, function (t, e, n) {
      "use strict";
      var o = r("u0PK"), i = n, a = [].push;
      if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
        var s = void 0 === /()??/.exec("")[1];
        n = function (t, e) {
          var r = String(this);
          if (void 0 === t && 0 === e) return [];
          if (!o(t)) return i.call(r, t, e);
          var n, u, c, l, h, m = [],
            f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
            p = 0, d = void 0 === e ? 4294967295 : e >>> 0, g = new RegExp(t.source, f + "g");
          for (s || (n = new RegExp("^" + g.source + "$(?!\\s)", f)); (u = g.exec(r)) && !((c = u.index + u[0].length) > p && (m.push(r.slice(p, u.index)), !s && u.length > 1 && u[0].replace(n, function () {
            for (h = 1; h < arguments.length - 2; h++) void 0 === arguments[h] && (u[h] = void 0)
          }), u.length > 1 && u.index < r.length && a.apply(m, u.slice(1)), l = u[0].length, p = c, m.length >= d));) g.lastIndex === u.index && g.lastIndex++;
          return p === r.length ? !l && g.test("") || m.push("") : m.push(r.slice(p)), m.length > d ? m.slice(0, d) : m
        }
      } else "0".split(void 0, 0).length && (n = function (t, e) {
        return void 0 === t && 0 === e ? [] : i.call(this, t, e)
      });
      return [function (r, o) {
        var i = t(this), a = void 0 == r ? void 0 : r[e];
        return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o)
      }, n]
    })
  }, mTp7: function (t, e, r) {
    var n = r("Ds5P"), o = r("gvDt");
    o && n(n.S, "Reflect", {
      setPrototypeOf: function (t, e) {
        o.check(t, e);
        try {
          return o.set(t, e), !0
        } catch (t) {
          return !1
        }
      }
    })
  }, mWYR: function (t, e, r) {
    "use strict";
    var n = r("woOf"), o = r.n(n), i = r("BO1k"), a = r.n(i), s = r("7+uW");

    /*!
 * vue-i18n v7.8.1
 * (c) 2018 kazuya kawaguchi
 * Released under the MIT License.
 */
    function u(t, e) {
      "undefined" != typeof console && (console.warn("[vue-i18n] " + t), e && console.warn(e.stack))
    }

    function c(t) {
      return null !== t && "object" == typeof t
    }

    var l = Object.prototype.toString, h = "[object Object]";

    function m(t) {
      return l.call(t) === h
    }

    function f(t) {
      return null === t || void 0 === t
    }

    function p() {
      for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
      var r = null, n = null;
      return 1 === t.length ? c(t[0]) || Array.isArray(t[0]) ? n = t[0] : "string" == typeof t[0] && (r = t[0]) : 2 === t.length && ("string" == typeof t[0] && (r = t[0]), (c(t[1]) || Array.isArray(t[1])) && (n = t[1])), {
        locale: r,
        params: n
      }
    }

    function d(t, e) {
      if (!t && "string" != typeof t) return null;
      var r = t.split("|");
      return r[e = function (t, e) {
        return t = Math.abs(t), 2 === e ? function (t) {
          return t ? t > 1 ? 1 : 0 : 1
        }(t) : t ? Math.min(t, 2) : 0
      }(e, r.length)] ? r[e].trim() : t
    }

    function g(t) {
      return JSON.parse(JSON.stringify(t))
    }

    var v = Object.prototype.hasOwnProperty;

    function y(t, e) {
      return v.call(t, e)
    }

    function b(t) {
      for (var e = arguments, r = Object(t), n = 1; n < arguments.length; n++) {
        var o = e[n];
        if (void 0 !== o && null !== o) {
          var i = void 0;
          for (i in o) y(o, i) && (c(o[i]) ? r[i] = b(r[i], o[i]) : r[i] = o[i])
        }
      }
      return r
    }

    var _ = "undefined" != typeof Intl && void 0 !== Intl.DateTimeFormat,
      x = "undefined" != typeof Intl && void 0 !== Intl.NumberFormat;
    var w, S = {
      beforeCreate: function () {
        var t = this.$options;
        if (t.i18n = t.i18n || (t.__i18n ? {} : null), t.i18n) if (t.i18n instanceof X) {
          if (t.__i18n) try {
            var e = {};
            t.__i18n.forEach(function (t) {
              e = b(e, JSON.parse(t))
            }), Object.keys(e).forEach(function (r) {
              t.i18n.mergeLocaleMessage(r, e[r])
            })
          } catch (t) {
            0
          }
          this._i18n = t.i18n, this._i18nWatcher = this._i18n.watchI18nData(), this._i18n.subscribeDataChanging(this), this._subscribing = !0
        } else if (m(t.i18n)) {
          if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof X && (t.i18n.root = this.$root.$i18n, t.i18n.formatter = this.$root.$i18n.formatter, t.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale, t.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn), t.__i18n) try {
            var r = {};
            t.__i18n.forEach(function (t) {
              r = b(r, JSON.parse(t))
            }), t.i18n.messages = r
          } catch (t) {
            0
          }
          this._i18n = new X(t.i18n), this._i18nWatcher = this._i18n.watchI18nData(), this._i18n.subscribeDataChanging(this), this._subscribing = !0, (void 0 === t.i18n.sync || t.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale())
        } else 0; else this.$root && this.$root.$i18n && this.$root.$i18n instanceof X ? (this._i18n = this.$root.$i18n, this._i18n.subscribeDataChanging(this), this._subscribing = !0) : t.parent && t.parent.$i18n && t.parent.$i18n instanceof X && (this._i18n = t.parent.$i18n, this._i18n.subscribeDataChanging(this), this._subscribing = !0)
      }, beforeDestroy: function () {
        this._i18n && (this._subscribing && (this._i18n.unsubscribeDataChanging(this), delete this._subscribing), this._i18nWatcher && (this._i18nWatcher(), delete this._i18nWatcher), this._localeWatcher && (this._localeWatcher(), delete this._localeWatcher), this._i18n = null)
      }
    }, k = {
      name: "i18n",
      functional: !0,
      props: {
        tag: {type: String, default: "span"},
        path: {type: String, required: !0},
        locale: {type: String},
        places: {type: [Array, Object]}
      },
      render: function (t, e) {
        var r = e.props, n = e.data, o = e.children, i = e.parent.$i18n;
        if (o = (o || []).filter(function (t) {
          return t.tag || (t.text = t.text.trim())
        }), !i) return o;
        var a = r.path, s = r.locale, c = {}, l = r.places || {},
          h = Array.isArray(l) ? l.length > 0 : Object.keys(l).length > 0, m = o.every(function (t) {
            if (t.data && t.data.attrs) {
              var e = t.data.attrs.place;
              return void 0 !== e && "" !== e
            }
          });
        return h && o.length > 0 && !m && u("If places prop is set, all child elements must have place prop set."), Array.isArray(l) ? l.forEach(function (t, e) {
          c[e] = t
        }) : Object.keys(l).forEach(function (t) {
          c[t] = l[t]
        }), o.forEach(function (t, e) {
          var r = m ? "" + t.data.attrs.place : "" + e;
          c[r] = t
        }), t(r.tag, n, i.i(a, s, c))
      }
    };

    function T(t, e, r) {
      C(t, r) && P(t, e, r)
    }

    function M(t, e, r, n) {
      C(t, r) && (function (t, e) {
        var r = e.context;
        return t._locale === r.$i18n.locale
      }(t, r) && function t(e, r) {
        if (e === r) return !0;
        var n = c(e), o = c(r);
        if (!n || !o) return !n && !o && String(e) === String(r);
        try {
          var i = Array.isArray(e), a = Array.isArray(r);
          if (i && a) return e.length === r.length && e.every(function (e, n) {
            return t(e, r[n])
          });
          if (i || a) return !1;
          var s = Object.keys(e), u = Object.keys(r);
          return s.length === u.length && s.every(function (n) {
            return t(e[n], r[n])
          })
        } catch (t) {
          return !1
        }
      }(e.value, e.oldValue) || P(t, e, r))
    }

    function A(t, e, r, n) {
      C(t, r) && (t.textContent = "", t._vt = void 0, delete t._vt, t._locale = void 0, delete t._locale)
    }

    function C(t, e) {
      var r = e.context;
      return r ? !!r.$i18n || (u("not exist VueI18n instance in Vue instance"), !1) : (u("not exist Vue instance in VNode context"), !1)
    }

    function P(t, e, r) {
      var n, o, i = function (t) {
        var e, r, n, o;
        "string" == typeof t ? e = t : m(t) && (e = t.path, r = t.locale, n = t.args, o = t.choice);
        return {path: e, locale: r, args: n, choice: o}
      }(e.value), a = i.path, s = i.locale, c = i.args, l = i.choice;
      if (a || s || c) if (a) {
        var h = r.context;
        t._vt = t.textContent = l ? (n = h.$i18n).tc.apply(n, [a, l].concat(O(s, c))) : (o = h.$i18n).t.apply(o, [a].concat(O(s, c))), t._locale = h.$i18n.locale
      } else u("required `path` in v-t directive"); else u("not support value type")
    }

    function O(t, e) {
      var r = [];
      return t && r.push(t), e && (Array.isArray(e) || m(e)) && r.push(e), r
    }

    function E(t) {
      (w = t).version && Number(w.version.split(".")[0]);
      E.installed = !0, Object.defineProperty(w.prototype, "$i18n", {
        get: function () {
          return this._i18n
        }
      }), function (t) {
        Object.defineProperty(t.prototype, "$t", {
          get: function () {
            var t = this;
            return function (e) {
              for (var r = [], n = arguments.length - 1; n-- > 0;) r[n] = arguments[n + 1];
              var o = t.$i18n;
              return o._t.apply(o, [e, o.locale, o._getMessages(), t].concat(r))
            }
          }
        }), Object.defineProperty(t.prototype, "$tc", {
          get: function () {
            var t = this;
            return function (e, r) {
              for (var n = [], o = arguments.length - 2; o-- > 0;) n[o] = arguments[o + 2];
              var i = t.$i18n;
              return i._tc.apply(i, [e, i.locale, i._getMessages(), t, r].concat(n))
            }
          }
        }), Object.defineProperty(t.prototype, "$te", {
          get: function () {
            var t = this;
            return function (e, r) {
              var n = t.$i18n;
              return n._te(e, n.locale, n._getMessages(), r)
            }
          }
        }), Object.defineProperty(t.prototype, "$d", {
          get: function () {
            var t = this;
            return function (e) {
              for (var r, n = [], o = arguments.length - 1; o-- > 0;) n[o] = arguments[o + 1];
              return (r = t.$i18n).d.apply(r, [e].concat(n))
            }
          }
        }), Object.defineProperty(t.prototype, "$n", {
          get: function () {
            var t = this;
            return function (e) {
              for (var r, n = [], o = arguments.length - 1; o-- > 0;) n[o] = arguments[o + 1];
              return (r = t.$i18n).n.apply(r, [e].concat(n))
            }
          }
        })
      }(w), w.mixin(S), w.directive("t", {bind: T, update: M, unbind: A}), w.component(k.name, k);
      var e = w.config.optionMergeStrategies;
      e.i18n = e.methods
    }

    var z = function () {
      this._caches = Object.create(null)
    };
    z.prototype.interpolate = function (t, e) {
      if (!e) return [t];
      var r = this._caches[t];
      return r || (r = function (t) {
        var e = [], r = 0, n = "";
        for (; r < t.length;) {
          var o = t[r++];
          if ("{" === o) {
            n && e.push({type: "text", value: n}), n = "";
            var i = "";
            for (o = t[r++]; "}" !== o;) i += o, o = t[r++];
            var a = I.test(i) ? "list" : N.test(i) ? "named" : "unknown";
            e.push({value: i, type: a})
          } else "%" === o ? "{" !== t[r] && (n += o) : n += o
        }
        return n && e.push({type: "text", value: n}), e
      }(t), this._caches[t] = r), function (t, e) {
        var r = [], n = 0, o = Array.isArray(e) ? "list" : c(e) ? "named" : "unknown";
        if ("unknown" === o) return r;
        for (; n < t.length;) {
          var i = t[n];
          switch (i.type) {
            case"text":
              r.push(i.value);
              break;
            case"list":
              r.push(e[parseInt(i.value, 10)]);
              break;
            case"named":
              "named" === o && r.push(e[i.value]);
              break;
            case"unknown":
              0
          }
          n++
        }
        return r
      }(r, e)
    };
    var I = /^(\d)+/, N = /^(\w)+/;
    var D = 0, L = 1, R = 2, F = 3, B = 0, U = 4, j = 5, q = 6, H = 7, W = 8, V = [];
    V[B] = {ws: [B], ident: [3, D], "[": [U], eof: [H]}, V[1] = {
      ws: [1],
      ".": [2],
      "[": [U],
      eof: [H]
    }, V[2] = {ws: [2], ident: [3, D], 0: [3, D], number: [3, D]}, V[3] = {
      ident: [3, D],
      0: [3, D],
      number: [3, D],
      ws: [1, L],
      ".": [2, L],
      "[": [U, L],
      eof: [H, L]
    }, V[U] = {"'": [j, D], '"': [q, D], "[": [U, R], "]": [1, F], eof: W, else: [U, D]}, V[j] = {
      "'": [U, D],
      eof: W,
      else: [j, D]
    }, V[q] = {'"': [U, D], eof: W, else: [q, D]};
    var G = /^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

    function Y(t) {
      if (void 0 === t || null === t) return "eof";
      var e = t.charCodeAt(0);
      switch (e) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
        case 48:
          return t;
        case 95:
        case 36:
        case 45:
          return "ident";
        case 32:
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
          return "ws"
      }
      return e >= 97 && e <= 122 || e >= 65 && e <= 90 ? "ident" : e >= 49 && e <= 57 ? "number" : "else"
    }

    function J(t) {
      var e = t.trim();
      return ("0" !== t.charAt(0) || !isNaN(t)) && (function (t) {
        return G.test(t)
      }(e) ? function (t) {
        var e = t.charCodeAt(0);
        return e !== t.charCodeAt(t.length - 1) || 34 !== e && 39 !== e ? t : t.slice(1, -1)
      }(e) : "*" + e)
    }

    var K = function () {
      this._cache = Object.create(null)
    };
    K.prototype.parsePath = function (t) {
      var e = this._cache[t];
      return e || (e = function (t) {
        var e, r, n, o, i, a, s, u = [], c = -1, l = B, h = 0, m = [];

        function f() {
          var e = t[c + 1];
          if (l === j && "'" === e || l === q && '"' === e) return c++, n = "\\" + e, m[D](), !0
        }

        for (m[L] = function () {
          void 0 !== r && (u.push(r), r = void 0)
        }, m[D] = function () {
          void 0 === r ? r = n : r += n
        }, m[R] = function () {
          m[D](), h++
        }, m[F] = function () {
          if (h > 0) h--, l = U, m[D](); else {
            if (h = 0, !1 === (r = J(r))) return !1;
            m[L]()
          }
        }; null !== l;) if ("\\" !== (e = t[++c]) || !f()) {
          if (o = Y(e), (i = (s = V[l])[o] || s.else || W) === W) return;
          if (l = i[0], (a = m[i[1]]) && (n = void 0 === (n = i[2]) ? e : n, !1 === a())) return;
          if (l === H) return u
        }
      }(t)) && (this._cache[t] = e), e || []
    }, K.prototype.getPathValue = function (t, e) {
      if (!c(t)) return null;
      var r = this.parsePath(e);
      if (function (t) {
        return !!Array.isArray(t) && 0 === t.length
      }(r)) return null;
      for (var n = r.length, o = t, i = 0; i < n;) {
        var a = o[r[i]];
        if (void 0 === a) {
          o = null;
          break
        }
        o = a, i++
      }
      return o
    };
    var $ = ["style", "currency", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "localeMatcher", "formatMatcher"],
      X = function (t) {
        var e = this;
        void 0 === t && (t = {}), !w && "undefined" != typeof window && window.Vue && E(window.Vue);
        var r = t.locale || "en-US", n = t.fallbackLocale || "en-US", o = t.messages || {}, i = t.dateTimeFormats || {},
          a = t.numberFormats || {};
        this._vm = null, this._formatter = t.formatter || new z, this._missing = t.missing || null, this._root = t.root || null, this._sync = void 0 === t.sync || !!t.sync, this._fallbackRoot = void 0 === t.fallbackRoot || !!t.fallbackRoot, this._silentTranslationWarn = void 0 !== t.silentTranslationWarn && !!t.silentTranslationWarn, this._dateTimeFormatters = {}, this._numberFormatters = {}, this._path = new K, this._dataListeners = [], this._exist = function (t, r) {
          return !(!t || !r) && !f(e._path.getPathValue(t, r))
        }, this._initVM({locale: r, fallbackLocale: n, messages: o, dateTimeFormats: i, numberFormats: a})
      }, Q = {
        vm: {configurable: !0},
        messages: {configurable: !0},
        dateTimeFormats: {configurable: !0},
        numberFormats: {configurable: !0},
        locale: {configurable: !0},
        fallbackLocale: {configurable: !0},
        missing: {configurable: !0},
        formatter: {configurable: !0},
        silentTranslationWarn: {configurable: !0}
      };
    X.prototype._initVM = function (t) {
      var e = w.config.silent;
      w.config.silent = !0, this._vm = new w({data: t}), w.config.silent = e
    }, X.prototype.subscribeDataChanging = function (t) {
      this._dataListeners.push(t)
    }, X.prototype.unsubscribeDataChanging = function (t) {
      !function (t, e) {
        if (t.length) {
          var r = t.indexOf(e);
          if (r > -1) t.splice(r, 1)
        }
      }(this._dataListeners, t)
    }, X.prototype.watchI18nData = function () {
      var t = this;
      return this._vm.$watch("$data", function () {
        for (var e = t._dataListeners.length; e--;) w.nextTick(function () {
          t._dataListeners[e] && t._dataListeners[e].$forceUpdate()
        })
      }, {deep: !0})
    }, X.prototype.watchLocale = function () {
      if (!this._sync || !this._root) return null;
      var t = this._vm;
      return this._root.vm.$watch("locale", function (e) {
        t.$set(t, "locale", e), t.$forceUpdate()
      }, {immediate: !0})
    }, Q.vm.get = function () {
      return this._vm
    }, Q.messages.get = function () {
      return g(this._getMessages())
    }, Q.dateTimeFormats.get = function () {
      return g(this._getDateTimeFormats())
    }, Q.numberFormats.get = function () {
      return g(this._getNumberFormats())
    }, Q.locale.get = function () {
      return this._vm.locale
    }, Q.locale.set = function (t) {
      this._vm.$set(this._vm, "locale", t)
    }, Q.fallbackLocale.get = function () {
      return this._vm.fallbackLocale
    }, Q.fallbackLocale.set = function (t) {
      this._vm.$set(this._vm, "fallbackLocale", t)
    }, Q.missing.get = function () {
      return this._missing
    }, Q.missing.set = function (t) {
      this._missing = t
    }, Q.formatter.get = function () {
      return this._formatter
    }, Q.formatter.set = function (t) {
      this._formatter = t
    }, Q.silentTranslationWarn.get = function () {
      return this._silentTranslationWarn
    }, Q.silentTranslationWarn.set = function (t) {
      this._silentTranslationWarn = t
    }, X.prototype._getMessages = function () {
      return this._vm.messages
    }, X.prototype._getDateTimeFormats = function () {
      return this._vm.dateTimeFormats
    }, X.prototype._getNumberFormats = function () {
      return this._vm.numberFormats
    }, X.prototype._warnDefault = function (t, e, r, n, o) {
      if (!f(r)) return r;
      if (this._missing) {
        var i = this._missing.apply(null, [t, e, n, o]);
        if ("string" == typeof i) return i
      } else 0;
      return e
    }, X.prototype._isFallbackRoot = function (t) {
      return !t && !f(this._root) && this._fallbackRoot
    }, X.prototype._interpolate = function (t, e, r, n, o, i) {
      if (!e) return null;
      var a, s = this._path.getPathValue(e, r);
      if (Array.isArray(s) || m(s)) return s;
      if (f(s)) {
        if (!m(e)) return null;
        if ("string" != typeof (a = e[r])) return null
      } else {
        if ("string" != typeof s) return null;
        a = s
      }
      return a.indexOf("@:") >= 0 && (a = this._link(t, e, a, n, o, i)), this._render(a, o, i)
    }, X.prototype._link = function (t, e, r, n, o, i) {
      var a = r, s = a.match(/(@:[\w\-_|.]+)/g);
      for (var u in s) if (s.hasOwnProperty(u)) {
        var c = s[u], l = c.substr(2),
          h = this._interpolate(t, e, l, n, "raw" === o ? "string" : o, "raw" === o ? void 0 : i);
        if (this._isFallbackRoot(h)) {
          if (!this._root) throw Error("unexpected error");
          var m = this._root;
          h = m._translate(m._getMessages(), m.locale, m.fallbackLocale, l, n, o, i)
        }
        a = (h = this._warnDefault(t, l, h, n, Array.isArray(i) ? i : [i])) ? a.replace(c, h) : a
      }
      return a
    }, X.prototype._render = function (t, e, r) {
      var n = this._formatter.interpolate(t, r);
      return "string" === e ? n.join("") : n
    }, X.prototype._translate = function (t, e, r, n, o, i, a) {
      var s = this._interpolate(e, t[e], n, o, i, a);
      return f(s) && f(s = this._interpolate(r, t[r], n, o, i, a)) ? null : s
    }, X.prototype._t = function (t, e, r, n) {
      for (var o, i = [], a = arguments.length - 4; a-- > 0;) i[a] = arguments[a + 4];
      if (!t) return "";
      var s = p.apply(void 0, i), u = s.locale || e,
        c = this._translate(r, u, this.fallbackLocale, t, n, "string", s.params);
      if (this._isFallbackRoot(c)) {
        if (!this._root) throw Error("unexpected error");
        return (o = this._root).t.apply(o, [t].concat(i))
      }
      return this._warnDefault(u, t, c, n, i)
    }, X.prototype.t = function (t) {
      for (var e, r = [], n = arguments.length - 1; n-- > 0;) r[n] = arguments[n + 1];
      return (e = this)._t.apply(e, [t, this.locale, this._getMessages(), null].concat(r))
    }, X.prototype._i = function (t, e, r, n, o) {
      var i = this._translate(r, e, this.fallbackLocale, t, n, "raw", o);
      if (this._isFallbackRoot(i)) {
        if (!this._root) throw Error("unexpected error");
        return this._root.i(t, e, o)
      }
      return this._warnDefault(e, t, i, n, [o])
    }, X.prototype.i = function (t, e, r) {
      return t ? ("string" != typeof e && (e = this.locale), this._i(t, e, this._getMessages(), null, r)) : ""
    }, X.prototype._tc = function (t, e, r, n, o) {
      for (var i, a = [], s = arguments.length - 5; s-- > 0;) a[s] = arguments[s + 5];
      return t ? (void 0 === o && (o = 1), d((i = this)._t.apply(i, [t, e, r, n].concat(a)), o)) : ""
    }, X.prototype.tc = function (t, e) {
      for (var r, n = [], o = arguments.length - 2; o-- > 0;) n[o] = arguments[o + 2];
      return (r = this)._tc.apply(r, [t, this.locale, this._getMessages(), null, e].concat(n))
    }, X.prototype._te = function (t, e, r) {
      for (var n = [], o = arguments.length - 3; o-- > 0;) n[o] = arguments[o + 3];
      var i = p.apply(void 0, n).locale || e;
      return this._exist(r[i], t)
    }, X.prototype.te = function (t, e) {
      return this._te(t, this.locale, this._getMessages(), e)
    }, X.prototype.getLocaleMessage = function (t) {
      return g(this._vm.messages[t] || {})
    }, X.prototype.setLocaleMessage = function (t, e) {
      this._vm.$set(this._vm.messages, t, e)
    }, X.prototype.mergeLocaleMessage = function (t, e) {
      this._vm.$set(this._vm.messages, t, w.util.extend(this._vm.messages[t] || {}, e))
    }, X.prototype.getDateTimeFormat = function (t) {
      return g(this._vm.dateTimeFormats[t] || {})
    }, X.prototype.setDateTimeFormat = function (t, e) {
      this._vm.$set(this._vm.dateTimeFormats, t, e)
    }, X.prototype.mergeDateTimeFormat = function (t, e) {
      this._vm.$set(this._vm.dateTimeFormats, t, w.util.extend(this._vm.dateTimeFormats[t] || {}, e))
    }, X.prototype._localizeDateTime = function (t, e, r, n, o) {
      var i = e, a = n[i];
      if ((f(a) || f(a[o])) && (a = n[i = r]), f(a) || f(a[o])) return null;
      var s = a[o], u = i + "__" + o, c = this._dateTimeFormatters[u];
      return c || (c = this._dateTimeFormatters[u] = new Intl.DateTimeFormat(i, s)), c.format(t)
    }, X.prototype._d = function (t, e, r) {
      if (!r) return new Intl.DateTimeFormat(e).format(t);
      var n = this._localizeDateTime(t, e, this.fallbackLocale, this._getDateTimeFormats(), r);
      if (this._isFallbackRoot(n)) {
        if (!this._root) throw Error("unexpected error");
        return this._root.d(t, r, e)
      }
      return n || ""
    }, X.prototype.d = function (t) {
      for (var e = [], r = arguments.length - 1; r-- > 0;) e[r] = arguments[r + 1];
      var n = this.locale, o = null;
      return 1 === e.length ? "string" == typeof e[0] ? o = e[0] : c(e[0]) && (e[0].locale && (n = e[0].locale), e[0].key && (o = e[0].key)) : 2 === e.length && ("string" == typeof e[0] && (o = e[0]), "string" == typeof e[1] && (n = e[1])), this._d(t, n, o)
    }, X.prototype.getNumberFormat = function (t) {
      return g(this._vm.numberFormats[t] || {})
    }, X.prototype.setNumberFormat = function (t, e) {
      this._vm.$set(this._vm.numberFormats, t, e)
    }, X.prototype.mergeNumberFormat = function (t, e) {
      this._vm.$set(this._vm.numberFormats, t, w.util.extend(this._vm.numberFormats[t] || {}, e))
    }, X.prototype._localizeNumber = function (t, e, r, n, o, i) {
      var a = e, s = n[a];
      if ((f(s) || f(s[o])) && (s = n[a = r]), f(s) || f(s[o])) return null;
      var u, c = s[o];
      if (i) u = new Intl.NumberFormat(a, Object.assign({}, c, i)); else {
        var l = a + "__" + o;
        (u = this._numberFormatters[l]) || (u = this._numberFormatters[l] = new Intl.NumberFormat(a, c))
      }
      return u.format(t)
    }, X.prototype._n = function (t, e, r, n) {
      if (!r) return (n ? new Intl.NumberFormat(e, n) : new Intl.NumberFormat(e)).format(t);
      var o = this._localizeNumber(t, e, this.fallbackLocale, this._getNumberFormats(), r, n);
      if (this._isFallbackRoot(o)) {
        if (!this._root) throw Error("unexpected error");
        return this._root.n(t, Object.assign({}, {key: r, locale: e}, n))
      }
      return o || ""
    }, X.prototype.n = function (t) {
      for (var e = [], r = arguments.length - 1; r-- > 0;) e[r] = arguments[r + 1];
      var n = this.locale, o = null, i = null;
      return 1 === e.length ? "string" == typeof e[0] ? o = e[0] : c(e[0]) && (e[0].locale && (n = e[0].locale), e[0].key && (o = e[0].key), i = Object.keys(e[0]).reduce(function (t, r) {
        var n;
        return $.includes(r) ? Object.assign({}, t, ((n = {})[r] = e[0][r], n)) : t
      }, null)) : 2 === e.length && ("string" == typeof e[0] && (o = e[0]), "string" == typeof e[1] && (n = e[1])), this._n(t, n, o, i)
    }, Object.defineProperties(X.prototype, Q), X.availabilities = {
      dateTimeFormat: _,
      numberFormat: x
    }, X.install = E, X.version = "7.8.1";
    var Z = X, tt = r("hyJX"), et = r.n(tt), rt = r("jIWC"), nt = r.n(rt), ot = r("WD3H"), it = r.n(ot), at = r("wUZ8"),
      st = r.n(at), ut = r("Vi3T"), ct = r.n(ut), lt = r("gwsl"), ht = r.n(lt);
    r.d(e, "b", function () {
      return mt
    }), s.default.use(Z);
    var mt = [{value: "en-US", label: "English", iv: et.a, el: st.a}, {
      value: "zh-CN",
      label: "简体中文",
      iv: nt.a,
      el: ct.a
    }, {value: "zh-TW", label: "繁體中文", iv: it.a, el: ht.a}], ft = {}, pt = !0, dt = !1, gt = void 0;
    try {
      for (var vt, yt = a()(mt); !(pt = (vt = yt.next()).done); pt = !0) {
        var bt = vt.value, _t = bt.value, xt = r("78Tf")("./" + _t).m;
        o()(xt, r("9m+V")("./" + _t).m);
        var wt = o()(bt.iv, bt.el);
        ft[_t] = o()({m: xt}, wt)
      }
    } catch (t) {
      dt = !0, gt = t
    } finally {
      try {
        !pt && yt.return && yt.return()
      } finally {
        if (dt) throw gt
      }
    }
    e.a = new Z({locale: "en-US", messages: ft})
  }, mZON: function (t, e, r) {
    var n = r("VWgF")("keys"), o = r("ulTY");
    t.exports = function (t) {
      return n[t] || (n[t] = o(t))
    }
  }, msXi: function (t, e, r) {
    var n = r("77Pl");
    t.exports = function (t, e, r, o) {
      try {
        return o ? e(n(r)[0], r[1]) : e(r)
      } catch (e) {
        var i = t.return;
        throw void 0 !== i && n(i.call(t)), e
      }
    }
  }, mtWM: function (t, e, r) {
    t.exports = r("uomd")(19)
  }, mvHQ: function (t, e, r) {
    t.exports = {default: r("qkKv"), __esModule: !0}
  }, n12u: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S + n.F, "Object", {assign: r("oYd7")})
  }, n982: function (t, e, r) {
    var n = r("UKM+"), o = Math.floor;
    t.exports = function (t) {
      return !n(t) && isFinite(t) && o(t) === t
    }
  }, nRs1: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Object", {is: r("4IZP")})
  }, nYE2: function (t, e) {
  }, nphH: function (t, e, r) {
    var n = r("DIVP"), o = r("UKM+"), i = r("w6Dh");
    t.exports = function (t, e) {
      if (n(t), o(e) && e.constructor === t) return e;
      var r = i.f(t);
      return (0, r.resolve)(e), r.promise
    }
  }, oAV5: function (t, e, r) {
    "use strict";
    var n = r("//Fk"), o = r.n(n), i = r("fZjL"), a = r.n(i), s = r("7+uW"), u = r("VKKs"), c = r("FN8c"),
      l = r("8Q2T");
    e.a = {
      submissionMemoryFormat: function (t) {
        if (void 0 === t) return "--";
        var e = parseInt(t) / 1048576;
        return String(e.toFixed(0)) + "MB"
      }, submissionTimeFormat: function (t) {
        return void 0 === t ? "--" : t + "ms"
      }, getACRate: function (t, e) {
        var r = 0 === e ? 0 : (t / e * 100).toFixed(2);
        return String(r) + "%"
      }, filterEmptyValue: function (t) {
        var e = {};
        return a()(t).forEach(function (r) {
          (t[r] || 0 === t[r] || !1 === t[r]) && (e[r] = t[r])
        }), e
      }, breakLongWords: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16, r = void 0;
        return r = -1 === escape(t).indexOf("%u") ? new RegExp("(.{" + e + "})", "g") : new RegExp("(.{" + (e / 2 + 1) + "})", "g"), t.replace(r, "$1\n")
      }, downloadFile: function (t) {
        return new o.a(function (e, r) {
          s.default.prototype.$http.get(t, {responseType: "blob"}).then(function (t) {
            var r = t.headers;
            if (-1 === r["content-type"].indexOf("json")) {
              var n = document.createElement("a");
              n.href = window.URL.createObjectURL(new window.Blob([t.data], {type: r["content-type"]})), n.download = (r["content-disposition"] || "").split("filename=")[1], document.body.appendChild(n), n.click(), n.remove(), e()
            } else {
              var o = new window.FileReader;
              t.data.error ? s.default.prototype.$error(t.data.error) : s.default.prototype.$error("Invalid file format"), o.onload = function (t) {
                var e = JSON.parse(t.target.result);
                e.error ? s.default.prototype.$error(e.data) : s.default.prototype.$error("Invalid file format")
              };
              var i = new window.Blob([t.data], {type: "application/json"});
              o.readAsText(i)
            }
          }).catch(function () {
          })
        })
      }, getLanguages: function () {
        return new o.a(function (t, e) {
          var r = u.a.get(c.h.languages);
          r && t(r), l.a.getLanguages().then(function (e) {
            var r = e.data.data.languages;
            u.a.set(c.h.languages, r), t(r)
          }, function (t) {
            e(t)
          })
        })
      }
    }
  }, oYd7: function (t, e, r) {
    "use strict";
    var n = r("Qh14"), o = r("Y1N3"), i = r("Y1aA"), a = r("FryR"), s = r("Q6Nf"), u = Object.assign;
    t.exports = !u || r("zgIt")(function () {
      var t = {}, e = {}, r = Symbol(), n = "abcdefghijklmnopqrst";
      return t[r] = 7, n.split("").forEach(function (t) {
        e[t] = t
      }), 7 != u({}, t)[r] || Object.keys(u({}, e)).join("") != n
    }) ? function (t, e) {
      for (var r = a(t), u = arguments.length, c = 1, l = o.f, h = i.f; u > c;) for (var m, f = s(arguments[c++]), p = l ? n(f).concat(l(f)) : n(f), d = p.length, g = 0; d > g;) h.call(f, m = p[g++]) && (r[m] = f[m]);
      return r
    } : u
  }, oeih: function (t, e) {
    var r = Math.ceil, n = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t)
    }
  }, ot5s: function (t, e, r) {
    var n = r("PHqh"), o = r("BbyF"), i = r("zo/l");
    t.exports = function (t) {
      return function (e, r, a) {
        var s, u = n(e), c = o(u.length), l = i(a, c);
        if (t && r != r) {
          for (; c > l;) if ((s = u[l++]) != s) return !0
        } else for (; c > l; l++) if ((t || l in u) && u[l] === r) return t || l || 0;
        return !t && -1
      }
    }
  }, pWGb: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Math", {log1p: r("Rz2z")})
  }, "pd+2": function (t, e, r) {
    r("bUqO") && "g" != /./g.flags && r("lDLk").f(RegExp.prototype, "flags", {configurable: !0, get: r("0pGU")})
  }, plSV: function (t, e, r) {
    var n = r("boo2");
    t.exports = function (t, e) {
      return new (n(t))(e)
    }
  }, qARP: function (t, e, r) {
    "use strict";
    var n = r("lOnJ");
    t.exports.f = function (t) {
      return new function (t) {
        var e, r;
        this.promise = new t(function (t, n) {
          if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
          e = t, r = n
        }), this.resolve = n(e), this.reject = n(r)
      }(t)
    }
  }, qio6: function (t, e, r) {
    var n = r("evD5"), o = r("77Pl"), i = r("lktj");
    t.exports = r("+E39") ? Object.defineProperties : function (t, e) {
      o(t);
      for (var r, a = i(e), s = a.length, u = 0; s > u;) n.f(t, r = a[u++], e[r]);
      return t
    }
  }, qkKv: function (t, e, r) {
    var n = r("FeBl"), o = n.JSON || (n.JSON = {stringify: JSON.stringify});
    t.exports = function (t) {
      return o.stringify.apply(o, arguments)
    }
  }, qkyc: function (t, e, r) {
    var n = r("kkCw")("iterator"), o = !1;
    try {
      var i = [7][n]();
      i.return = function () {
        o = !0
      }, Array.from(i, function () {
        throw 2
      })
    } catch (t) {
    }
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var r = !1;
      try {
        var i = [7], a = i[n]();
        a.next = function () {
          return {done: r = !0}
        }, i[n] = function () {
          return a
        }, t(i)
      } catch (t) {
      }
      return r
    }
  }, qtRy: function (t, e, r) {
    r("77Ug")("Int16", 2, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n)
      }
    })
  }, qwQ3: function (t, e, r) {
    r("Vg1y")("search", 1, function (t, e, r) {
      return [function (r) {
        "use strict";
        var n = t(this), o = void 0 == r ? void 0 : r[e];
        return void 0 !== o ? o.call(r, n) : new RegExp(r)[e](String(n))
      }, r]
    })
  }, rFzY: function (t, e, r) {
    var n = r("XSOZ");
    t.exports = function (t, e, r) {
      if (n(t), void 0 === e) return t;
      switch (r) {
        case 1:
          return function (r) {
            return t.call(e, r)
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n)
          };
        case 3:
          return function (r, n, o) {
            return t.call(e, r, n, o)
          }
      }
      return function () {
        return t.apply(e, arguments)
      }
    }
  }, s4j0: function (t, e, r) {
    var n = r("UKM+");
    t.exports = function (t, e) {
      if (!n(t)) return t;
      var r, o;
      if (e && "function" == typeof (r = t.toString) && !n(o = r.call(t))) return o;
      if ("function" == typeof (r = t.valueOf) && !n(o = r.call(t))) return o;
      if (!e && "function" == typeof (r = t.toString) && !n(o = r.call(t))) return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }, sB3e: function (t, e, r) {
    var n = r("52gC");
    t.exports = function (t) {
      return Object(n(t))
    }
  }, "smQ+": function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("2VSL"), i = r("41xE");
    n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(i), "String", {
      padStart: function (t) {
        return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
      }
    })
  }, t8x9: function (t, e, r) {
    var n = r("77Pl"), o = r("lOnJ"), i = r("dSzd")("species");
    t.exports = function (t, e) {
      var r, a = n(t).constructor;
      return void 0 === a || void 0 == (r = n(a)[i]) ? e : o(r)
    }
  }, tJwI: function (t, e, r) {
    var n = r("FryR"), o = r("Qh14");
    r("3i66")("keys", function () {
      return function (t) {
        return o(n(t))
      }
    })
  }, tqSY: function (t, e, r) {
    var n = r("Ds5P");
    n(n.P, "String", {repeat: r("xAdt")})
  }, twxM: function (t, e, r) {
    var n = r("lDLk"), o = r("DIVP"), i = r("Qh14");
    t.exports = r("bUqO") ? Object.defineProperties : function (t, e) {
      o(t);
      for (var r, a = i(e), s = a.length, u = 0; s > u;) n.f(t, r = a[u++], e[r]);
      return t
    }
  }, u0PK: function (t, e, r) {
    var n = r("UKM+"), o = r("ydD5"), i = r("kkCw")("match");
    t.exports = function (t) {
      var e;
      return n(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
    }
  }, uc2A: function (t, e, r) {
    "use strict";
    var n = r("V3l/"), o = r("Ds5P"), i = r("R3AP"), a = r("2p1q"), s = r("bN1p"), u = r("IRJ3"), c = r("yYvK"),
      l = r("KOrd"), h = r("kkCw")("iterator"), m = !([].keys && "next" in [].keys()), f = function () {
        return this
      };
    t.exports = function (t, e, r, p, d, g, v) {
      u(r, e, p);
      var y, b, _, x = function (t) {
          if (!m && t in T) return T[t];
          switch (t) {
            case"keys":
            case"values":
              return function () {
                return new r(this, t)
              }
          }
          return function () {
            return new r(this, t)
          }
        }, w = e + " Iterator", S = "values" == d, k = !1, T = t.prototype, M = T[h] || T["@@iterator"] || d && T[d],
        A = M || x(d), C = d ? S ? x("entries") : A : void 0, P = "Array" == e && T.entries || M;
      if (P && (_ = l(P.call(new t))) !== Object.prototype && _.next && (c(_, w, !0), n || "function" == typeof _[h] || a(_, h, f)), S && M && "values" !== M.name && (k = !0, A = function () {
        return M.call(this)
      }), n && !v || !m && !k && T[h] || a(T, h, A), s[e] = A, s[w] = f, d) if (y = {
        values: S ? A : x("values"),
        keys: g ? A : x("keys"),
        entries: C
      }, v) for (b in y) b in T || i(T, b, y[b]); else o(o.P + o.F * (m || k), e, y);
      return y
    }
  }, ulTY: function (t, e) {
    var r = 0, n = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + n).toString(36))
    }
  }, uqUo: function (t, e, r) {
    var n = r("kM2E"), o = r("FeBl"), i = r("S82l");
    t.exports = function (t, e) {
      var r = (o.Object || {})[t] || Object[t], a = {};
      a[t] = e(r), n(n.S + n.F * i(function () {
        r(1)
      }), "Object", a)
    }
  }, v2lb: function (t, e, r) {
    var n = r("Ds5P"), o = r("Rz2z"), i = Math.sqrt, a = Math.acosh;
    n(n.S + n.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
      acosh: function (t) {
        return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : o(t - 1 + i(t - 1) * i(t + 1))
      }
    })
  }, v8VU: function (t, e, r) {
    var n = r("OzIq"), o = r("Ds5P"), i = r("41xE"), a = [].slice, s = /MSIE .\./.test(i), u = function (t) {
      return function (e, r) {
        var n = arguments.length > 2, o = !!n && a.call(arguments, 2);
        return t(n ? function () {
          ("function" == typeof e ? e : Function(e)).apply(this, o)
        } : e, r)
      }
    };
    o(o.G + o.B + o.F * s, {setTimeout: u(n.setTimeout), setInterval: u(n.setInterval)})
  }, "vFc/": function (t, e, r) {
    var n = r("TcQ7"), o = r("QRG4"), i = r("fkB2");
    t.exports = function (t) {
      return function (e, r, a) {
        var s, u = n(e), c = o(u.length), l = i(a, c);
        if (t && r != r) {
          for (; c > l;) if ((s = u[l++]) != s) return !0
        } else for (; c > l; l++) if ((t || l in u) && u[l] === r) return t || l || 0;
        return !t && -1
      }
    }
  }, "vIB/": function (t, e, r) {
    "use strict";
    var n = r("O4g8"), o = r("kM2E"), i = r("880/"), a = r("hJx8"), s = r("/bQp"), u = r("94VQ"), c = r("e6n0"),
      l = r("PzxK"), h = r("dSzd")("iterator"), m = !([].keys && "next" in [].keys()), f = function () {
        return this
      };
    t.exports = function (t, e, r, p, d, g, v) {
      u(r, e, p);
      var y, b, _, x = function (t) {
          if (!m && t in T) return T[t];
          switch (t) {
            case"keys":
            case"values":
              return function () {
                return new r(this, t)
              }
          }
          return function () {
            return new r(this, t)
          }
        }, w = e + " Iterator", S = "values" == d, k = !1, T = t.prototype, M = T[h] || T["@@iterator"] || d && T[d],
        A = M || x(d), C = d ? S ? x("entries") : A : void 0, P = "Array" == e && T.entries || M;
      if (P && (_ = l(P.call(new t))) !== Object.prototype && _.next && (c(_, w, !0), n || "function" == typeof _[h] || a(_, h, f)), S && M && "values" !== M.name && (k = !0, A = function () {
        return M.call(this)
      }), n && !v || !m && !k && T[h] || a(T, h, A), s[e] = A, s[w] = f, d) if (y = {
        values: S ? A : x("values"),
        keys: g ? A : x("keys"),
        entries: C
      }, v) for (b in y) b in T || i(T, b, y[b]); else o(o.P + o.F * (m || k), e, y);
      return y
    }
  }, vmSO: function (t, e, r) {
    var n = r("rFzY"), o = r("XvUs"), i = r("9vb1"), a = r("DIVP"), s = r("BbyF"), u = r("SHe9"), c = {}, l = {};
    (e = t.exports = function (t, e, r, h, m) {
      var f, p, d, g, v = m ? function () {
        return t
      } : u(t), y = n(r, h, e ? 2 : 1), b = 0;
      if ("function" != typeof v) throw TypeError(t + " is not iterable!");
      if (i(v)) {
        for (f = s(t.length); f > b; b++) if ((g = e ? y(a(p = t[b])[0], p[1]) : y(t[b])) === c || g === l) return g
      } else for (d = v.call(t); !(p = d.next()).done;) if ((g = o(d, y, p.value, e)) === c || g === l) return g
    }).BREAK = c, e.RETURN = l
  }, vmSu: function (t, e, r) {
    var n = r("Ds5P"), o = r("7ylX"), i = r("XSOZ"), a = r("DIVP"), s = r("UKM+"), u = r("zgIt"), c = r("ZtwE"),
      l = (r("OzIq").Reflect || {}).construct, h = u(function () {
        function t() {
        }

        return !(l(function () {
        }, [], t) instanceof t)
      }), m = !u(function () {
        l(function () {
        })
      });
    n(n.S + n.F * (h || m), "Reflect", {
      construct: function (t, e) {
        i(t), a(e);
        var r = arguments.length < 3 ? t : i(arguments[2]);
        if (m && !h) return l(t, e, r);
        if (t == r) {
          switch (e.length) {
            case 0:
              return new t;
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0], e[1]);
            case 3:
              return new t(e[0], e[1], e[2]);
            case 4:
              return new t(e[0], e[1], e[2], e[3])
          }
          var n = [null];
          return n.push.apply(n, e), new (c.apply(t, n))
        }
        var u = r.prototype, f = o(s(u) ? u : Object.prototype), p = Function.apply.call(t, f, e);
        return s(p) ? p : f
      }
    })
  }, w6Dh: function (t, e, r) {
    "use strict";
    var n = r("XSOZ");
    t.exports.f = function (t) {
      return new function (t) {
        var e, r;
        this.promise = new t(function (t, n) {
          if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
          e = t, r = n
        }), this.resolve = n(e), this.reject = n(r)
      }(t)
    }
  }, wC1N: function (t, e, r) {
    var n = r("ydD5"), o = r("kkCw")("toStringTag"), i = "Arguments" == n(function () {
      return arguments
    }());
    t.exports = function (t) {
      var e, r, a;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
        try {
          return t[e]
        } catch (t) {
        }
      }(e = Object(t), o)) ? r : i ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
  }, wSRH: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), r.d(e, "m", function () {
      return n
    });
    var n = {
      Dashboard: "儀表板",
      General: "基本設定",
      User: "使用者管理",
      Announcement: "公告管理",
      System_Config: "系統設定",
      Judge_Server: "Judge 伺服器",
      Prune_Test_Case: "測資",
      Problem: "試題",
      FromFile: "讀取檔案",
      ToFile: "寫入檔案",
      ShareSubmission: "分享提交",
      Problem_List: "試題列表",
      Create_Problem: "增加題目",
      Export_Import_Problem: "匯入匯出題目",
      Contest: "比賽",
      Contest_List: "比賽列表",
      Create_Contest: "建立比賽",
      User_User: "使用者",
      Import_User: "匯入使用者",
      Generate_User: "生成使用者",
      User_Info: "使用者資訊",
      User_Username: "使用者名稱",
      User_Real_Name: "真實姓名",
      User_Email: "使用者 E-mail",
      User_New_Password: "使用者密碼",
      User_Type: "帳號類型",
      Problem_Permission: "試題權限",
      Two_Factor_Auth: "兩步驟驗證",
      Is_Disabled: "是否禁用",
      General_Announcement: "公告",
      Announcement_Title: "標題",
      Announcement_Content: "內容",
      Announcement_visible: "是否可見",
      SMTP_Config: "SMTP 設定",
      Server: "伺服器",
      Port: "連接埠",
      Email: "E-mail",
      Password: "密碼",
      Website_Config: "網站設定",
      Base_Url: "Base Url",
      Name: "名稱",
      Shortcut: "簡稱",
      Footer: "頁尾",
      Allow_Register: "是否允許註冊",
      Submission_List_Show_All: "顯示全部題目的提交",
      Judge_Server_Token: "Judge 伺服器 Token",
      Judge_Server_Info: "Judge 伺服器",
      IP: "IP",
      Judger_Version: "Judge 版本",
      Service_URL: "伺服器 URL",
      Last_Heartbeat: "上一次活動訊號",
      Create_Time: "建立時間",
      Test_Case_Prune_Test_Case: "精簡測資",
      Display_ID: "顯示 ID",
      Title: "題目",
      Description: "描述",
      Input_Description: "輸入描述",
      Output_Description: "輸出描述",
      Time_Limit: "時間限制",
      Memory_limit: "記憶體限制",
      Difficulty: "難度",
      Visible: "是否可見",
      Languages: "可選程式語言",
      Input_Samples: "輸入範例",
      Output_Samples: "輸出範例",
      Add_Sample: "加入範例",
      Code_Template: "程式碼模板",
      Special_Judge: "Special Judge",
      Use_Special_Judge: "使用 Special Judge",
      Special_Judge_Code: "Special Judge Code",
      SPJ_language: "SPJ language",
      Compile: "編譯",
      TestCase: "測資",
      IOMode: "IO 類型",
      InputFileName: "輸入檔名",
      OutputFileName: "輸出檔名",
      Type: "測試類型",
      Input: "輸入",
      Output: "輸出",
      Score: "分數",
      Hint: "提示",
      Source: "來源",
      ContestTitle: "標題",
      ContestDescription: "描述",
      Contest_Start_Time: "開始時間",
      Contest_End_Time: "結束時間",
      Contest_Password: "密碼",
      Contest_Rule_Type: "規則",
      Real_Time_Rank: "即時排名",
      Contest_Status: "狀態",
      Allowed_IP_Ranges: "允許的 IP 範圍",
      CIDR_Network: "CIDR Network",
      Last_Login: "最後登入狀態",
      System_Overview: "系統狀況",
      DashBoardJudge_Server: "Judge 伺服器",
      HTTPS_Status: "HTTPS 狀態",
      Force_HTTPS: "強制 HTTPS",
      CDN_HOST: "CDN HOST"
    }
  }, wUZ8: function (t, e, r) {
    "use strict";
    e.__esModule = !0, e.default = {
      el: {
        colorpicker: {confirm: "OK", clear: "Clear"},
        datepicker: {
          now: "Now",
          today: "Today",
          cancel: "Cancel",
          clear: "Clear",
          confirm: "OK",
          selectDate: "Select date",
          selectTime: "Select time",
          startDate: "Start Date",
          startTime: "Start Time",
          endDate: "End Date",
          endTime: "End Time",
          prevYear: "Previous Year",
          nextYear: "Next Year",
          prevMonth: "Previous Month",
          nextMonth: "Next Month",
          year: "",
          month1: "January",
          month2: "February",
          month3: "March",
          month4: "April",
          month5: "May",
          month6: "June",
          month7: "July",
          month8: "August",
          month9: "September",
          month10: "October",
          month11: "November",
          month12: "December",
          weeks: {sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat"},
          months: {
            jan: "Jan",
            feb: "Feb",
            mar: "Mar",
            apr: "Apr",
            may: "May",
            jun: "Jun",
            jul: "Jul",
            aug: "Aug",
            sep: "Sep",
            oct: "Oct",
            nov: "Nov",
            dec: "Dec"
          }
        },
        select: {loading: "Loading", noMatch: "No matching data", noData: "No data", placeholder: "Select"},
        cascader: {noMatch: "No matching data", loading: "Loading", placeholder: "Select"},
        pagination: {goto: "Go to", pagesize: "/page", total: "Total {total}", pageClassifier: ""},
        messagebox: {title: "Message", confirm: "OK", cancel: "Cancel", error: "Illegal input"},
        upload: {deleteTip: "press delete to remove", delete: "Delete", preview: "Preview", continue: "Continue"},
        table: {
          emptyText: "No Data",
          confirmFilter: "Confirm",
          resetFilter: "Reset",
          clearFilter: "All",
          sumText: "Sum"
        },
        tree: {emptyText: "No Data"},
        transfer: {
          noMatch: "No matching data",
          noData: "No data",
          titles: ["List 1", "List 2"],
          filterPlaceholder: "Enter keyword",
          noCheckedFormat: "{total} items",
          hasCheckedFormat: "{checked}/{total} checked"
        }
      }
    }
  }, woOf: function (t, e, r) {
    t.exports = {default: r("V3tA"), __esModule: !0}
  }, wrs0: function (t, e, r) {
    var n = r("Ds5P"), o = Math.abs;
    n(n.S, "Math", {
      hypot: function (t, e) {
        for (var r, n, i = 0, a = 0, s = arguments.length, u = 0; a < s;) u < (r = o(arguments[a++])) ? (i = i * (n = u / r) * n + 1, u = r) : i += r > 0 ? (n = r / u) * n : r;
        return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(i)
      }
    })
  }, x78i: function (t, e) {
    var r = Math.expm1;
    t.exports = !r || r(10) > 22025.465794806718 || r(10) < 22025.465794806718 || -2e-17 != r(-2e-17) ? function (t) {
      return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : r
  }, x9zv: function (t, e, r) {
    var n = r("Y1aA"), o = r("fU25"), i = r("PHqh"), a = r("s4j0"), s = r("WBcL"), u = r("xZa+"),
      c = Object.getOwnPropertyDescriptor;
    e.f = r("bUqO") ? c : function (t, e) {
      if (t = i(t), e = a(e, !0), u) try {
        return c(t, e)
      } catch (t) {
      }
      if (s(t, e)) return o(!n.f.call(t, e), t[e])
    }
  }, xAdt: function (t, e, r) {
    "use strict";
    var n = r("oeih"), o = r("/whu");
    t.exports = function (t) {
      var e = String(o(this)), r = "", i = n(t);
      if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
      for (; i > 0; (i >>>= 1) && (e += e)) 1 & i && (r += e);
      return r
    }
  }, xGkn: function (t, e, r) {
    "use strict";
    var n = r("4mcu"), o = r("EGZi"), i = r("/bQp"), a = r("TcQ7");
    t.exports = r("vIB/")(Array, "Array", function (t, e) {
      this._t = a(t), this._i = 0, this._k = e
    }, function () {
      var t = this._t, e = this._k, r = this._i++;
      return !t || r >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
    }, "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries")
  }, "xH/j": function (t, e, r) {
    var n = r("hJx8");
    t.exports = function (t, e, r) {
      for (var o in e) r && t[o] ? t[o] = e[o] : n(t, o, e[o]);
      return t
    }
  }, xMpm: function (t, e, r) {
    "use strict";
    var n = r("Ds5P"), o = r("bSML");
    n(n.S + n.F * r("zgIt")(function () {
      function t() {
      }

      return !(Array.of.call(t) instanceof t)
    }), "Array", {
      of: function () {
        for (var t = 0, e = arguments.length, r = new ("function" == typeof this ? this : Array)(e); e > t;) o(r, t, arguments[t++]);
        return r.length = e, r
      }
    })
  }, xONB: function (t, e, r) {
    var n = r("Ds5P");
    n(n.S, "Math", {
      clz32: function (t) {
        return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
      }
    })
  }, xThQ: function (t, e, r) {
    "use strict";
    var n = r("woOf"), o = r.n(n), i = r("KUde"), a = r.n(i);
    const s = function (t, e, r) {
      let n = r, o = 0;
      const i = t.length;
      for (; n < e.length;) {
        const r = e[n];
        if (o <= 0 && e.slice(n, n + i) === t) return n;
        "\\" === r ? n++ : "{" === r ? o++ : "}" === r && o--, n++
      }
      return -1
    };
    var u = function (t, e, r, n) {
      const o = [];
      for (let i = 0; i < t.length; i++) if ("text" === t[i].type) {
        const a = t[i].data;
        let u, c = !0, l = 0;
        for (-1 !== (u = a.indexOf(e)) && (l = u, o.push({type: "text", data: a.slice(0, l)}), c = !1); ;) {
          if (c) {
            if (-1 === (u = a.indexOf(e, l))) break;
            o.push({type: "text", data: a.slice(l, u)}), l = u
          } else {
            if (-1 === (u = s(r, a, l + e.length))) break;
            o.push({
              type: "math",
              data: a.slice(l + e.length, u),
              rawData: a.slice(l, u + r.length),
              display: n
            }), l = u + r.length
          }
          c = !c
        }
        o.push({type: "text", data: a.slice(l)})
      } else o.push(t[i]);
      return o
    };
    const c = function (t, e) {
      const r = function (t, e) {
        let r = [{type: "text", data: t}];
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          r = u(r, n.left, n.right, n.display || !1)
        }
        return r
      }(t, e.delimiters), n = document.createDocumentFragment();
      for (let t = 0; t < r.length; t++) if ("text" === r[t].type) n.appendChild(document.createTextNode(r[t].data)); else {
        const o = document.createElement("span"), i = r[t].data;
        e.displayMode = r[t].display;
        try {
          a.a.render(i, o, e)
        } catch (o) {
          if (!(o instanceof a.a.ParseError)) throw o;
          e.errorCallback("KaTeX auto-render: Failed to parse `" + r[t].data + "` with ", o), n.appendChild(document.createTextNode(r[t].rawData));
          continue
        }
        n.appendChild(o)
      }
      return n
    }, l = function (t, e) {
      for (let r = 0; r < t.childNodes.length; r++) {
        const n = t.childNodes[r];
        if (3 === n.nodeType) {
          const o = c(n.textContent, e);
          r += o.childNodes.length - 1, t.replaceChild(o, n)
        } else if (1 === n.nodeType) {
          const t = " " + n.className + " ";
          -1 === e.ignoredTags.indexOf(n.nodeName.toLowerCase()) && e.ignoredClasses.every(e => -1 === t.indexOf(" " + e + " ")) && l(n, e)
        }
      }
    };
    var h = function (t, e) {
      if (!t) throw new Error("No element provided to render");
      const r = {};
      for (const t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
      r.delimiters = r.delimiters || [{left: "$$", right: "$$", display: !0}, {
        left: "\\(",
        right: "\\)",
        display: !1
      }, {
        left: "\\[",
        right: "\\]",
        display: !0
      }], r.ignoredTags = r.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code"], r.ignoredClasses = r.ignoredClasses || [], r.errorCallback = r.errorCallback || console.error, r.macros = r.macros || {}, l(t, r)
    };
    r("nYE2");
    var m = {
      errorCallback: function () {
      },
      throwOnError: !1,
      delimiters: [{left: "$$", right: "$$", display: !0}, {left: "$", right: "$", display: !1}, {
        left: "\\[",
        right: "\\]",
        display: !0
      }, {left: "\\(", right: "\\)", display: !1}]
    };

    function f(t, e) {
      var r = {};
      e.value && (r = e.value.options || {}), o()(r, m), h(t, r)
    }

    e.a = {
      install: function (t, e) {
        t.directive("katex", {bind: f, componentUpdated: f})
      }
    }
  }, "xZa+": function (t, e, r) {
    t.exports = !r("bUqO") && !r("zgIt")(function () {
      return 7 != Object.defineProperty(r("jhxf")("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, xnc9: function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, y9m4: function (t, e, r) {
    "use strict";
    var n, o, i, a, s = r("V3l/"), u = r("OzIq"), c = r("rFzY"), l = r("wC1N"), h = r("Ds5P"), m = r("UKM+"),
      f = r("XSOZ"), p = r("9GpA"), d = r("vmSO"), g = r("7O1s"), v = r("Sejc").set, y = r("g36u")(), b = r("w6Dh"),
      _ = r("SDXa"), x = r("41xE"), w = r("nphH"), S = u.TypeError, k = u.process, T = k && k.versions,
      M = T && T.v8 || "", A = u.Promise, C = "process" == l(k), P = function () {
      }, O = o = b.f, E = !!function () {
        try {
          var t = A.resolve(1), e = (t.constructor = {})[r("kkCw")("species")] = function (t) {
            t(P, P)
          };
          return (C || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof e && 0 !== M.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
        } catch (t) {
        }
      }(), z = function (t) {
        var e;
        return !(!m(t) || "function" != typeof (e = t.then)) && e
      }, I = function (t, e) {
        if (!t._n) {
          t._n = !0;
          var r = t._c;
          y(function () {
            for (var n = t._v, o = 1 == t._s, i = 0, a = function (e) {
              var r, i, a, s = o ? e.ok : e.fail, u = e.resolve, c = e.reject, l = e.domain;
              try {
                s ? (o || (2 == t._h && L(t), t._h = 1), !0 === s ? r = n : (l && l.enter(), r = s(n), l && (l.exit(), a = !0)), r === e.promise ? c(S("Promise-chain cycle")) : (i = z(r)) ? i.call(r, u, c) : u(r)) : c(n)
              } catch (t) {
                l && !a && l.exit(), c(t)
              }
            }; r.length > i;) a(r[i++]);
            t._c = [], t._n = !1, e && !t._h && N(t)
          })
        }
      }, N = function (t) {
        v.call(u, function () {
          var e, r, n, o = t._v, i = D(t);
          if (i && (e = _(function () {
            C ? k.emit("unhandledRejection", o, t) : (r = u.onunhandledrejection) ? r({
              promise: t,
              reason: o
            }) : (n = u.console) && n.error && n.error("Unhandled promise rejection", o)
          }), t._h = C || D(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
        })
      }, D = function (t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
      }, L = function (t) {
        v.call(u, function () {
          var e;
          C ? k.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({promise: t, reason: t._v})
        })
      }, R = function (t) {
        var e = this;
        e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
      }, F = function (t) {
        var e, r = this;
        if (!r._d) {
          r._d = !0, r = r._w || r;
          try {
            if (r === t) throw S("Promise can't be resolved itself");
            (e = z(t)) ? y(function () {
              var n = {_w: r, _d: !1};
              try {
                e.call(t, c(F, n, 1), c(R, n, 1))
              } catch (t) {
                R.call(n, t)
              }
            }) : (r._v = t, r._s = 1, I(r, !1))
          } catch (t) {
            R.call({_w: r, _d: !1}, t)
          }
        }
      };
    E || (A = function (t) {
      p(this, A, "Promise", "_h"), f(t), n.call(this);
      try {
        t(c(F, this, 1), c(R, this, 1))
      } catch (t) {
        R.call(this, t)
      }
    }, (n = function (t) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = r("A16L")(A.prototype, {
      then: function (t, e) {
        var r = O(g(this, A));
        return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = C ? k.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && I(this, !1), r.promise
      }, catch: function (t) {
        return this.then(void 0, t)
      }
    }), i = function () {
      var t = new n;
      this.promise = t, this.resolve = c(F, t, 1), this.reject = c(R, t, 1)
    }, b.f = O = function (t) {
      return t === A || t === a ? new i(t) : o(t)
    }), h(h.G + h.W + h.F * !E, {Promise: A}), r("yYvK")(A, "Promise"), r("CEne")("Promise"), a = r("7gX0").Promise, h(h.S + h.F * !E, "Promise", {
      reject: function (t) {
        var e = O(this);
        return (0, e.reject)(t), e.promise
      }
    }), h(h.S + h.F * (s || !E), "Promise", {
      resolve: function (t) {
        return w(s && this === a ? A : this, t)
      }
    }), h(h.S + h.F * !(E && r("qkyc")(function (t) {
      A.all(t).catch(P)
    })), "Promise", {
      all: function (t) {
        var e = this, r = O(e), n = r.resolve, o = r.reject, i = _(function () {
          var r = [], i = 0, a = 1;
          d(t, !1, function (t) {
            var s = i++, u = !1;
            r.push(void 0), a++, e.resolve(t).then(function (t) {
              u || (u = !0, r[s] = t, --a || n(r))
            }, o)
          }), --a || n(r)
        });
        return i.e && o(i.v), r.promise
      }, race: function (t) {
        var e = this, r = O(e), n = r.reject, o = _(function () {
          d(t, !1, function (t) {
            e.resolve(t).then(r.resolve, n)
          })
        });
        return o.e && n(o.v), r.promise
      }
    })
  }, yYvK: function (t, e, r) {
    var n = r("lDLk").f, o = r("WBcL"), i = r("kkCw")("toStringTag");
    t.exports = function (t, e, r) {
      t && !o(t = r ? t : t.prototype, i) && n(t, i, {configurable: !0, value: e})
    }
  }, ydD5: function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1)
    }
  }, yuXV: function (t, e, r) {
    var n = r("Ds5P"), o = r("OzIq").isFinite;
    n(n.S, "Number", {
      isFinite: function (t) {
        return "number" == typeof t && o(t)
      }
    })
  }, yx1U: function (t, e, r) {
    var n = r("Ds5P"), o = r("x9zv").f, i = r("DIVP");
    n(n.S, "Reflect", {
      deleteProperty: function (t, e) {
        var r = o(i(t), e);
        return !(r && !r.configurable) && delete t[e]
      }
    })
  }, zCYm: function (t, e, r) {
    "use strict";
    var n = r("FryR"), o = r("zo/l"), i = r("BbyF");
    t.exports = function (t) {
      for (var e = n(this), r = i(e.length), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, r), u = a > 2 ? arguments[2] : void 0, c = void 0 === u ? r : o(u, r); c > s;) e[s++] = t;
      return e
    }
  }, zQR9: function (t, e, r) {
    "use strict";
    var n = r("h65t")(!0);
    r("vIB/")(String, "String", function (t) {
      this._t = String(t), this._i = 0
    }, function () {
      var t, e = this._t, r = this._i;
      return r >= e.length ? {value: void 0, done: !0} : (t = n(e, r), this._i += t.length, {value: t, done: !1})
    })
  }, zgIt: function (t, e) {
    t.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }, zmx7: function (t, e, r) {
    var n = r("Ds5P"), o = r("YUr7"), i = r("PHqh"), a = r("x9zv"), s = r("bSML");
    n(n.S, "Object", {
      getOwnPropertyDescriptors: function (t) {
        for (var e, r, n = i(t), u = a.f, c = o(n), l = {}, h = 0; c.length > h;) void 0 !== (r = u(n, e = c[h++])) && s(l, e, r);
        return l
      }
    })
  }, "zo/l": function (t, e, r) {
    var n = r("oeih"), o = Math.max, i = Math.min;
    t.exports = function (t, e) {
      return (t = n(t)) < 0 ? o(t + e, 0) : i(t, e)
    }
  }, "zq/X": function (t, e, r) {
    var n = r("UKM+");
    t.exports = function (t, e) {
      if (!n(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
      return t
    }
  }
});
