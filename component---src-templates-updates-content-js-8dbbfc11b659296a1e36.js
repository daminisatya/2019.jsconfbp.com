(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{410:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(0),r=a.n(n),c=a(450),s=a.n(c),i=a(440),o=a(442),l=a(385),m=a.n(l);t.default=function(e){var t=e.data.mdx;return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:t.frontmatter.title,description:t.frontmatter.lead,image:t.frontmatter.socialCard||"social-card.png"}),r.a.createElement("div",{className:m.a.simpleText},r.a.createElement(s.a,null,t.code.body)))};var u="3226476921"},434:function(e,t,a){"use strict";a(437)("link",function(e){return function(t){return e(this,"a","href",t)}})},436:function(e,t,a){"use strict";a(434);var n=a(0),r=a.n(n),c=a(55),s=a(379),i=a.n(s);t.a=function(){return r.a.createElement("div",null,r.a.createElement("p",{className:i.a.text},"JSConf Budapest welcomes everybody, please"," ",r.a.createElement("em",{className:i.a.emphasize},"be nice to each other"),"."),r.a.createElement("ul",{className:i.a.list},r.a.createElement("li",{className:i.a.item},r.a.createElement(c.a,{className:i.a.link,to:"/about"},"About")),r.a.createElement("li",{className:i.a.item},r.a.createElement(c.a,{className:i.a.link,to:"/code-of-conduct"},"Code Of Conduct")),r.a.createElement("li",{className:i.a.item},r.a.createElement(c.a,{className:i.a.link,to:"/privacy-policy"},"Privacy Policy")),r.a.createElement("li",{className:i.a.item},r.a.createElement(c.a,{className:i.a.link,to:"/impressum"},"Impressum"))))}},437:function(e,t,a){var n=a(25),r=a(56),c=a(46),s=/"/g,i=function(e,t,a,n){var r=String(c(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},438:function(e,t,a){"use strict";var n=a(17),r=a.n(n),c=a(0),s=a.n(c),i=a(55),o=a(380),l=a.n(o),m=a(439),u=a(107),p=a.n(u),d=function(e){return s.a.createElement(i.b,{query:"3370271720",render:function(e){return s.a.createElement(p.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:m})},f=function(e){var t=e.menuOpen;return s.a.createElement(i.a,{className:[l.a.logo,t?l.a.logo_menu_open:""].join(" "),to:"/"},s.a.createElement(d,{className:l.a.inner}))},h=(a(434),a(381)),b=a.n(h),E=a(382),g=a.n(E),v=function(){return s.a.createElement("div",{className:g.a.buy},s.a.createElement("a",{className:g.a.ticket,href:"https://ti.to/jsconf-bp/jsconf-budapest-2019"},s.a.createElement("div",{className:g.a.inner},s.a.createElement("span",{className:g.a.label},"Tickets"))))},A=function(e){var t=e.open,a=[b.a.nav];return t&&a.push(b.a.nav__open),s.a.createElement("nav",{className:a.join(" ")},s.a.createElement("ul",null,s.a.createElement("li",{className:b.a.item},s.a.createElement(i.a,{className:b.a.link,to:"/scholarship-program"},"Scholarship")),s.a.createElement("li",{className:b.a.item},s.a.createElement(i.a,{className:b.a.link,to:"/schedule"},"Schedule")),s.a.createElement("li",{className:b.a.item},s.a.createElement("a",{className:b.a.link,href:"/sponsorship"},"Sponsorship")),s.a.createElement("li",{className:b.a.item},s.a.createElement(i.a,{className:b.a.link,to:"/venue"},"Venue")),s.a.createElement("li",{className:b.a.item},s.a.createElement(i.a,{className:b.a.link,to:"/workshops"},"Workshops")),s.a.createElement("li",{className:b.a.item},s.a.createElement(i.a,{className:b.a.link,to:"/code-of-conduct"},"Code of Conduct")),s.a.createElement("li",{className:[b.a.item,b.a.item_ticketButton].join(" ")},s.a.createElement(v,null))))},N=a(383),w=a.n(N),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuOpen:!1},a}r()(t,e);var a=t.prototype;return a.menuButtonClick=function(e){var t=this.state.menuOpen;this.setState({menuOpen:!t})},a.render=function(){var e=this,t=this.state.menuOpen,a=this.props,n=a.transparent,r=a.classNames,c=void 0===r?[]:r,i=[w.a.header].concat(c),o=[w.a.menu_button];return n&&(i.push(w.a.header_transparent),o.push(w.a.menu_button_transparent)),t&&(i.push(w.a.header__nav__open),o.push(w.a.menu_button_open)),s.a.createElement("header",{className:i.join(" ")},s.a.createElement("svg",{onClick:function(t){return e.menuButtonClick(t)},className:o.join(" "),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 283.426 283.426"},s.a.createElement("path",{d:"M0 40.84h283.426v47.735H0zM0 117.282h283.426v47.735H0zM0 194.851h283.426v47.735H0z"})),s.a.createElement(f,{menuOpen:t}),s.a.createElement("span",{className:w.a.date},"2019 September 26-27"),s.a.createElement(A,{open:t}))},t}(s.a.Component);t.a=y},439:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEMUlEQVQ4y3VTa1CUZRj9fnSZfqRpaRdgga0BZrkIu4Iksuyy7X67kDiVmk5T+UebqZmmX2UFgxYXk3QaRVJBBASS2CjH0RjM2YFuBtVUgi7M7rKssCALLCwsrCCcnvf9WAKrb+b58b2X85znnPMKI+VlCH4nrrpxuOEQ5lwG3Ok1wty+E0dabiAptxXJ+e0wlh3AqKdq6XzAW48JuwE+x/NU2byEm1EhCJR/jvMdNqhym6HKb0PtlQOo+DkTuvoXMI9pnLZ4EH+4AFsbtHBb1Zgbb0RgvAkTNjUBiitKcMXIUfFGBrqclXB3GuGyb4M1V4vCPYnINOdgcm4B8JtRalEjs9YId48RfocO4zYdB/A5jCtK+GRvAvRNL2Jmbha424iJk2lwquLhUipQnbcDY2OV8Ns0mOkVUfU9NbQSIMkxYZcA7gUVTvxRDs05Aw22gFtV51FTYyFx/MBUAFWWkyi9mo47TunwdK+4AuA/GTJxv3ZcQP+xg+iKi8LG9y6j/FcfLjm+gqZOC+05EXU/SGBe+/8DrQCs+GUMhTlvwqaKQUqeBXl73sdAexoGbKRZtxF91uXCG/9lRLABN6WhpRNJ736LTfmtKNr+Dkqz9qEv9Rn4Ow3wu0xkgIgZGnmy9x92XpvI//190tq4bRlg3q796FZG4zdFNGyVpfAU6dCTIIf3OnV2SodHug28gkzm3CaM9ohwX9dzYPYf3BMSC66heOtbmPzsKA0/D9/gTrhLkuH9XY+pWyaMWA3Ylh0Dkz4awzcp8P0mnD6aAmWiHGFhMr5+xZyOaZfUXIjL7UBJUzE5a+bp9/Vuh8+lp9AaMUUMPQS4IT4S0VERmCI2lm/UWLM2FBuVcux9LQ5rHw3F67tjOSAf+eOGIjqowXB3BoaHzsDn3E1gOi4+A2CAyaqnERcbiVkarawkBfc9+CSOH0qmgXJwrTkD/X/qeXMOWP/jcxDrROhrDahuy6R4EPVF54IMVUlyDuin/5bGdM4wcYMcx4qTcfuGAbidtWSMECCAI9+J+JQq4DTRohQNdoAzJN2YXgk09jBdniFdP9qvxONPhOGBh55CrCISZ49vQoDWuYbSC5Bq0mFcAmORYA4OdUmAjBEzhV3ESDZ+upyBt/clQCaT4bF1oWhu2IK7gyYIKwMq6TA7YIK9Q8cvs+KAFCUWncFOPVovqIHRbGAhB6fI8ftJ04PEmjUSgoEMBpZlqv7UswgPl6HwQyWPyLr1odBporiGr+xQcGcLPlDiYl0aXn1ZwQGZWfBkSYBBUDZqgHLWdlHNY/Hw6hBeERHh+PLMZn7h0hdbuOuraH3VIyFYvSYEu15ScOZMc+Hexz2+yJK9AvPZzagpS8VfrVoeaLbHdGKXGbvq0lQeakZmum8xNssZBp8Pd5jGW6A4YDhrycHle/ND0h5rwNcX7/4NQRZa/Gk/sbsAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/9b2311e55234671d5594d0954be3b213/fdbb0/logo2.png",srcSet:"/static/9b2311e55234671d5594d0954be3b213/e22c9/logo2.png 75w,\n/static/9b2311e55234671d5594d0954be3b213/d3809/logo2.png 150w,\n/static/9b2311e55234671d5594d0954be3b213/fdbb0/logo2.png 300w,\n/static/9b2311e55234671d5594d0954be3b213/647de/logo2.png 400w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},440:function(e,t,a){"use strict";var n=a(441),r=a(0),c=a.n(r),s=a(2),i=a.n(s),o=a(435),l=a.n(o),m=a(55),u=a(384),p=a.n(u),d=a(436),f=a(438),h=function(e){return c.a.createElement(m.b,{query:"724794514",render:function(t){return c.a.createElement("div",{className:p.a.grid2},c.a.createElement(l.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:t.site.siteMetadata.description},{name:"keywords",content:t.site.siteMetadata.keywords}]},c.a.createElement("html",{lang:"en"})),c.a.createElement(f.a,null),c.a.createElement("main",{className:[p.a.main].concat(e.mainClassNames).join(" ")},e.children),c.a.createElement("footer",{className:p.a.footer},c.a.createElement(d.a,null)))},data:n})};h.propTypes={children:i.a.node.isRequired,mainClassNames:i.a.array},h.defaultProps={mainClassNames:[]},t.a=h},441:function(e){e.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",keywords:"jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest, diversity, inclusivity, community",description:"JSConf Budapest 2019, September 26-27, Budapest, Hungary. Tickets from €311, including free workshops, inclusive catering and barista coffee!"}}}}},442:function(e,t,a){"use strict";var n=a(443),r=a(0),c=a.n(r),s=a(55),i=a(435),o=a.n(i);t.a=function(e){return c.a.createElement(s.b,{query:"3814168137",render:function(t){var a=t.site.siteMetadata,n=a.title,r=a.twitter,s=a.siteUrl,i=a.description;return c.a.createElement(o.a,{meta:[{name:"og:type",content:"website"},{name:"og:title",content:e.title||n},{name:"og:description",content:e.description||i},{name:"og:site_name",content:n},{name:"og:url",content:s},{name:"og:image",content:s+"/social-cards/"+e.image},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:r},{name:"twitter:creator",content:r},{name:"twitter:title",content:e.title||n},{name:"twitter:description",content:e.description||i},{name:"twitter:url",content:s},{name:"twitter:image",content:s+"/social-cards/"+e.image}]})},data:n})}},443:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://jsconfbp.com",title:"JSConf Budapest 2019",description:"JSConf Budapest 2019, September 26-27, Budapest, Hungary. Tickets from €311, including free workshops, inclusive catering and barista coffee!",twitter:"@jsconfbp"}}}}},444:function(e,t,a){var n=a(57),r=a(59);a(445)("keys",function(){return function(e){return r(n(e))}})},445:function(e,t,a){var n=a(25),r=a(48),c=a(56);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],s={};s[e]=t(a),n(n.S+n.F*c(function(){a(1)}),"Object",s)}},450:function(e,t,a){var n=a(451);a(75),a(58),a(47),a(444);var r=a(21),c=a(77),s=a(0),i=a(78),o=i.useMDXComponents,l=i.mdx,m=a(111).useMDXScope;e.exports=function(e){var t=e.scope,a=e.components,i=e.children,u=c(e,["scope","components","children"]),p=o(a),d=m(t),f=s.useMemo(function(){if(!i)return null;var e=r({React:s,mdx:l},d),t=Object.keys(e),a=t.map(function(t){return e[t]});return n(Function,["_fn"].concat(t,[""+i])).apply(void 0,[{}].concat(a))},[i,t]);return s.createElement(f,r({components:p},u))}},451:function(e,t,a){var n=a(173);function r(t,a,c){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=r=function(e,t,a){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return a&&n(c,a.prototype),c}:e.exports=r=Reflect.construct,r.apply(null,arguments)}e.exports=r}}]);
//# sourceMappingURL=component---src-templates-updates-content-js-8dbbfc11b659296a1e36.js.map