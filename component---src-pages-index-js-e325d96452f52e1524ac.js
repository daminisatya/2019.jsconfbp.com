(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{144:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return m});var n=a(0),o=a.n(n),r=a(170),s=a(162),i=a(174),l=a(169),c=a.n(l),u=a(160);e.default=function(t){return o.a.createElement(s.a,null,o.a.createElement(u.a,{image:"social_card_earlybird.jpg"}),o.a.createElement("div",null,o.a.createElement("div",{className:c.a.home},o.a.createElement("div",{className:c.a.homeContent},o.a.createElement("h1",{className:c.a.title},"JSConf Budapest 2019"),o.a.createElement("span",{className:c.a.date},"26-27th September"),o.a.createElement("p",null,"Not sure what to expect next year? ",o.a.createElement("br",null),"Check out our past events in"," ",o.a.createElement("a",{href:"http://2017.jsconfbp.com"},"2017"),","," ",o.a.createElement("a",{href:"http://2016.jsconfbp.com"},"2016")," or"," ",o.a.createElement("a",{href:"http://2015.jsconfbp.com"},"2015"),"!"),o.a.createElement(r.a,{block:!0,to:"/call-for-speakers"},"Submit your Talk!"),o.a.createElement(r.a,{block:!0,fill:!0,href:"https://ti.to/jsconf-bp/jsconf-budapest-2019"},"Buy tickets"))),o.a.createElement("div",{className:c.a.updates},o.a.createElement("div",{className:c.a.updates_content},o.a.createElement("h1",null,"Updates"),o.a.createElement(i.a,{data:t.data})))))};var m="3237216831"},160:function(t,e,a){"use strict";var n=a(161),o=a(0),r=a.n(o),s=a(151),i=a(152),l=a.n(i);e.a=function(t){return r.a.createElement(s.StaticQuery,{query:"2797394368",render:function(e){return r.a.createElement(l.a,{meta:[{name:"og:type",content:"website"},{name:"og:title",content:t.title||e.site.siteMetadata.title},{name:"og:description",content:t.description||e.site.siteMetadata.description},{name:"og:site_name",content:e.site.siteMetadata.title},{name:"og:url",content:"https://jsconfbp.com/"},{name:"og:image",content:"https://jsconfbp.com/social-cards/"+t.image},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:e.site.siteMetadata.twitter},{name:"twitter:creator",content:e.site.siteMetadata.twitter},{name:"twitter:title",content:t.title||e.site.siteMetadata.title},{name:"twitter:description",content:t.description||e.site.siteMetadata.description},{name:"twitter:url",content:"https://jsconfbp.com/"},{name:"twitter:image",content:"https://jsconfbp.com/social-cards/"+t.image}]})},data:n})}},161:function(t){t.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary",twitter:"@jsconfbp"}}}}},162:function(t,e,a){"use strict";var n=a(163),o=a(0),r=a.n(o),s=a(4),i=a.n(s),l=a(152),c=a.n(l),u=a(151),m=a(164),d=a.n(m),p=a(157),_=a(158),f=function(t){return r.a.createElement(u.StaticQuery,{query:"1024188509",render:function(e){return r.a.createElement("div",{className:d.a.grid2},r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(_.a,{transparent:!0,classNames:t.headerClassNames}),r.a.createElement("main",{className:[d.a.main].concat(t.mainClassNames).join(" ")},t.children),r.a.createElement("footer",{className:d.a.footer},r.a.createElement(p.a,null)))},data:n})};f.propTypes={children:i.a.node.isRequired,mainClassNames:i.a.array},f.defaultProps={mainClassNames:[]},e.a=f},163:function(t){t.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",keywords:"jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary"}}}}},164:function(t,e,a){t.exports={main:"mainlayout-module--main--b36n4",footer:"mainlayout-module--footer--1qhsv"}},166:function(t,e,a){var n=a(23).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||a(16)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},169:function(t,e,a){t.exports={home:"index-module--home--2VtbF",homeContent:"index-module--homeContent--RJKN9",title:"index-module--title--1LAhw",date:"index-module--date--3Z4hB",venue:"index-module--venue--1P6IS",updates:"index-module--updates--2tr4m",updates_content:"index-module--updates_content--A-5uZ",updates_list:"index-module--updates_list--1ptQb",updates_list_item:"index-module--updates_list_item--2rJxZ"}},170:function(t,e,a){"use strict";a.d(e,"a",function(){return u});a(171);var n=a(6),o=a.n(n),r=a(0),s=a.n(r),i=a(151),l=a(173),c=a.n(l),u=function(t){function e(){return t.apply(this,arguments)||this}o()(e,t);var a=e.prototype;return a.getButtonClass=function(){var t=this.props,e=t.color,a=void 0===e?"yellow":e,n=t.block,o=void 0!==n&&n,r=t.fill,s=void 0!==r&&r,i=t.className,l=void 0===i?[]:i,u=[c.a.button];return o&&u.push(c.a.button__block),s?a?u.push(c.a["button__fill__color__"+a]):u.push(c.a.button__fill):a&&u.push(c.a["button__color__"+a]),u.concat(l).join(" ")},a.render=function(){var t=this.props,e=t.to,a=t.href,n=t.children,o=!!e,r=this.getButtonClass();return o?s.a.createElement(i.Link,{to:e,className:r},n):s.a.createElement("a",{href:a,className:r},n)},e}(s.a.Component)},171:function(t,e,a){var n=a(22);n(n.P,"Array",{fill:a(172)}),a(48)("fill")},172:function(t,e,a){"use strict";var n=a(30),o=a(73),r=a(31);t.exports=function(t){for(var e=n(this),a=r(e.length),s=arguments.length,i=o(s>1?arguments[1]:void 0,a),l=s>2?arguments[2]:void 0,c=void 0===l?a:o(l,a);c>i;)e[i++]=t;return e}},173:function(t,e,a){t.exports={button:"button-module--button--1Tg9s",button__block:"button-module--button__block--2Gjtd",button__fill:"button-module--button__fill--S37Ec",button__fill__color__red:"button-module--button__fill__color__red--Q2shi",button__fill__color__yellow:"button-module--button__fill__color__yellow--3SHC6",button__color__red:"button-module--button__color__red--1Fnoh",button__color__yellow:"button-module--button__color__yellow--3mKfr"}},174:function(t,e,a){"use strict";a(166);var n=a(0),o=a.n(n),r=a(151),s=a(175),i=a.n(s);e.a=function(t){return o.a.createElement("ul",{className:i.a.updates_list},t.data.allMdx.edges.map(function(t){var e=t.node;return o.a.createElement("li",{key:e.id,className:i.a.updates_list_item},o.a.createElement("span",{className:i.a.date},e.frontmatter.date),o.a.createElement(r.Link,{className:i.a.title,to:"/"+e.parent.sourceInstanceName+"/"+e.parent.name},e.frontmatter.title),o.a.createElement("p",{className:i.a.lead},e.frontmatter.lead," "),o.a.createElement(r.Link,{to:"/"+e.parent.sourceInstanceName+"/"+e.parent.name},"Read more →"))}))}},175:function(t,e,a){t.exports={updates_list:"updateslist-module--updates_list--1440v",date:"updateslist-module--date--75VoB",title:"updateslist-module--title--1jl80",updates_list_item:"updateslist-module--updates_list_item--2o3JM"}}}]);
//# sourceMappingURL=component---src-pages-index-js-e325d96452f52e1524ac.js.map