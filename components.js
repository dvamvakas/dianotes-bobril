/// <reference path="libs/bobril.d.ts"/>
/// <reference path="libs/bobril.router.d.ts"/>
/// <reference path="libs/bobril.onchange.d.ts"/>
var Dianotes;
(function (Dianotes) {
    function h(tag) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return { tag: tag, children: args };
    }
    function hs(tag, style) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return { tag: tag, style: style, children: args };
    }
    function hc(tag, className) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return { tag: tag, className: className, children: args };
    }
    Dianotes.App = {
        render: function (ctx, me) {
            me.tag = "div";
            me.attrs = { id: "loginFrame" };
            me.children = [{ component: LoginBar }];
        }
    };
    var LoginBar = {
        render: function (ctx, me) {
            me.tag = "div";
            me.attrs = { id: "loginBar" };
            me.children = [
                h("h1", this.getLoginBarHeader())
            ];
        },
        getLoginBarHeader: function () {
            var loginBarHeader = [];
            loginBarHeader.push(hc("span", "hideText", "DiaNotes"));
            return loginBarHeader;
        }
    };
})(Dianotes || (Dianotes = {}));
