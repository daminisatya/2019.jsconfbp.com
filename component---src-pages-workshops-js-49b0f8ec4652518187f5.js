(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{425:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});var n=a(0),r=a.n(n),o=a(437),s=a(398),c=a.n(s),l=a(439),i=a(466),u="1609993543";t.default=function(e){return r.a.createElement(o.a,null,r.a.createElement(l.a,{image:"social_card_workshops.jpg"}),r.a.createElement("div",{className:c.a.workshops},r.a.createElement("h1",{className:c.a.typo},"Workshops"),r.a.createElement("p",{className:c.a.typo},r.a.createElement("strong",null,"These workshops are FREE for every ticket holder of JSConf Budapest or a Combo ticket with CSSConf Budapest.")),r.a.createElement("p",{className:c.a.typo},"The workshops have limited seats, so be sure to"," ",r.a.createElement("a",{href:"https://ti.to/jsconf-bp/jsconf-budapest-2019"},"get your ticket"),"before they fill up! We'll open them slowly, so everyone has a chance to pick a workshop they like."),r.a.createElement("p",{className:c.a.typo},"You will be able to register to a workshop using the ID on your ticket. If will be possible to switch the workshop you've picked later, if there is a free seat available on another workshop."),r.a.createElement(i.a,{data:e.data})))}},441:function(e,t,a){"use strict";a.r(t),t.default=function(e,t){return t=t||{},new Promise(function(a,n){var r=new XMLHttpRequest;for(var o in r.open(t.method||"get",e,!0),t.headers)r.setRequestHeader(o,t.headers[o]);function s(){var e,t=[],a=[],n={};return r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(r,o,s){t.push(o=o.toLowerCase()),a.push([o,s]),n[o]=(e=n[o])?e+","+s:s}),{ok:2==(r.status/100|0),status:r.status,statusText:r.statusText,url:r.responseURL,clone:s,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},headers:{keys:function(){return t},entries:function(){return a},get:function(e){return n[e.toLowerCase()]},has:function(e){return e.toLowerCase()in n}}}}r.withCredentials="include"==t.credentials,r.onload=function(){a(s())},r.onerror=n,r.send(t.body||null)})}},442:function(e,t,a){"use strict";var n=a(25),r=a(58),o=a(57),s=a(55),c=[].sort,l=[1,2,3];n(n.P+n.F*(s(function(){l.sort(void 0)})||!s(function(){l.sort(null)})||!a(443)(c)),"Array",{sort:function(e){return void 0===e?c.call(o(this)):c.call(o(this),r(e))}})},443:function(e,t,a){"use strict";var n=a(55);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},445:function(e,t,a){e.exports=window.fetch||(window.fetch=a(441).default||a(441))},448:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(107),s=a(382),c=a.n(s);t.a=function(e){e.id;var t=e.disabled,a=void 0!==t&&t;return r.a.createElement(o.a,{block:!0,fill:!0,color:"red",disabled:a,href:"https://workshop-registration.herokuapp.com/",className:c.a.ticket_button},a?"Open Soon":"Register Now")}},466:function(e,t,a){"use strict";a(106),a(442),a(74),a(56),a(47),a(444);var n=a(0),r=a.n(n),o=a(104),s=a(445),c=a.n(s),l=a(448),i=a(399),u=a.n(i),p=function(e){return"workshops"===e.node.parent.sourceInstanceName},m=function(e,t){var a=new Date(e.node.frontmatter.date),n=new Date(t.node.frontmatter.date);return a>n?-1:a<n?1:0};t.a=function(e){var t=Object(n.useState)({}),a=t[0],s=t[1];Object(n.useEffect)(function(){Object.keys(a).length>0||c()("https://workshop-registration.herokuapp.com/api/seats").then(function(e){return e.json()}).then(function(e){return s(e)}).catch(function(e){return console.error(e)})});return r.a.createElement("ul",{className:u.a.workshop_list},e.data.allMdx.edges.filter(p).sort(m).map(function(e){var t,n=e.node;return r.a.createElement("li",{key:n.id,className:u.a.workshop_list_item},r.a.createElement("h3",{className:u.a.workshop_title},r.a.createElement(o.a,{to:"/"+n.parent.sourceInstanceName+"/"+n.parent.name},n.frontmatter.title," by ",n.frontmatter.company)),r.a.createElement("span",{className:u.a.workshop_date},r.a.createElement("span",{className:u.a.workshop_date_day},"24",r.a.createElement("sup",null,"th")),r.a.createElement("span",{className:u.a.workshop_date_month},"Sep"),r.a.createElement("span",{className:u.a.seats},"Available Seats",r.a.createElement("span",{className:u.a.seats_count},(t=n.frontmatter.workshop_id,a[t]?a[t].seats-a[t].taken:"N/A")))),r.a.createElement("p",{className:u.a.workshop_lead},n.frontmatter.short_description," "),r.a.createElement("div",{className:u.a.workshop_link},r.a.createElement(o.a,{to:"/"+n.parent.sourceInstanceName+"/"+n.parent.name},"Read more →")),r.a.createElement("div",{className:u.a.workshop_register},r.a.createElement(l.a,{id:n.frontmatter.workshop_id,disabled:n.frontmatter.disabled})))}))}}}]);
//# sourceMappingURL=component---src-pages-workshops-js-49b0f8ec4652518187f5.js.map