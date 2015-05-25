/// <reference path="libs/bobril.d.ts"/>
/// <reference path="libs/bobril.router.d.ts"/>
/// <reference path="libs/bobril.onchange.d.ts"/>

module Dianotes{
  function h(tag: string, ...args: any[]): IBobrilNode {
    return { tag: tag, children: args };
}

function hs(tag: string, style: any, ...args: any[]): IBobrilNode {
    return { tag: tag, style: style, children: args };
}

function hc(tag: string, className: any, ...args: any[]): IBobrilNode {
    return { tag: tag, className: className, children: args }
}

 export  var App: IBobrilComponent = {
     render(ctx: any, me: IBobrilNode) {
             me.tag = "div";
             me.attrs = {id:"loginFrame"};
             me.children = [{component: LoginBar} ];

         }
   };
   var LoginBar: IBobrilComponent = {
     render(ctx: any, me: IBobrilNode){
       me.tag = "div";
       me.attrs = {id:"loginBar"};
       me.children = [
         h("h1",this.getLoginBarHeader())
       ];
     },
     getLoginBarHeader():IBobrilNode[]{
       var loginBarHeader = [];
       loginBarHeader.push(hc("span","hideText","DiaNotes"));
       return loginBarHeader;
     }
   }
}
