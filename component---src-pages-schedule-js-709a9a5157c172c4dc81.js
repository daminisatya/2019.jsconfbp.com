(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(428),i=a(381),s=a.n(i),o=a(430);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{image:"social_card.jpg"}),r.a.createElement("div",{className:s.a.simpleText},r.a.createElement("h1",null,"Schedule"),r.a.createElement("p",null,"This will be the rough schedule for September, we'll get this more and more detailed with time."),r.a.createElement("h3",null,"Tuesday, 24th September, 2019"),r.a.createElement("p",null,r.a.createElement("strong",null,"Workshop day")," - we'll annouce any details as soon as possible!"),r.a.createElement("p",null,r.a.createElement("strong",null,"Meetup night")," - We will coordinate with a couple of meetups to have a meetup night just before the"),r.a.createElement("h3",null,"Wednesday, 25th September, 2019"),r.a.createElement("p",null,r.a.createElement("strong",null,r.a.createElement("a",{href:"http://cssconfbp.rocks/"},"CSSConf Budapest 2019"))),r.a.createElement("ul",null,r.a.createElement("li",null,"Breakfast"),r.a.createElement("li",null,"Event opening"),r.a.createElement("li",null,"Coffee break"),r.a.createElement("li",null,"Lunch"),r.a.createElement("li",null,"Coffee break"),r.a.createElement("li",null,"Event closing"),r.a.createElement("li",null,"Dinner & Afterparty")),r.a.createElement("h3",null,"Thursday, 26th September, 2019"),r.a.createElement("p",null,r.a.createElement("strong",null,"JSConf Budapest 2019 Day 1")),r.a.createElement("ul",null,r.a.createElement("li",null,"Breakfast"),r.a.createElement("li",null,"Event opening"),r.a.createElement("li",null,"Coffee break"),r.a.createElement("li",null,"Lunch"),r.a.createElement("li",null,"Coffee break"),r.a.createElement("li",null,"Dinner"),r.a.createElement("li",null,"Party on Day one ")),r.a.createElement("h3",null,"Friday, 27th September, 2019"),r.a.createElement("p",null,r.a.createElement("strong",null,"JSConf Budapest 2019 Day 2")),r.a.createElement("ul",null,r.a.createElement("li",null,"Breakfast"),r.a.createElement("li",null,"Coffee break"),r.a.createElement("li",null,"Lunch"),r.a.createElement("li",null,"Coffee break"),r.a.createElement("li",null,"Event closing"),r.a.createElement("li",null,"Afterparty"))))}},421:function(e,t,a){"use strict";a(425)("link",function(e){return function(t){return e(this,"a","href",t)}})},422:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r,l=n(a(18)),i=n(a(29)),s=n(a(105)),o=n(a(3)),c=n(a(0)),u=n(a(2)),d=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m=Object.create({}),f=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+i+l+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,l=e.style,i=e.onLoad,u=e.onError,d=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:n,src:r},d,{onLoad:i,onError:u,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,l=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:l,hasNoScript:o,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)((0,i.default)(a))),a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,l=void 0===r?{}:r,i=e.imgStyle,s=void 0===i?{}:i,u=e.placeholderStyle,m=void 0===u?{}:u,f=e.placeholderClassName,p=e.fluid,h=e.fixed,E=e.backgroundColor,y=e.Tag,v=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,w=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,o.default)({opacity:S?1:0,transition:w?"opacity 0.5s":"none"},s),A="boolean"==typeof E?"lightgray":E,C={transitionDelay:"0.5s"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},w&&C,s,m),B={title:t,alt:this.state.isVisible?"":a,style:k,className:f};if(p){var I=p;return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),A&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},w&&C)}),I.base64&&c.default.createElement(b,(0,o.default)({src:I.base64},B)),I.tracedSVG&&c.default.createElement(b,(0,o.default)({src:I.tracedSVG},B)),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},I))}}))}if(h){var L=h,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},l);return"inherit"===l.display&&delete R.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},A&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:A,width:L.width,opacity:this.state.imgLoaded?0:1,height:L.height},w&&C)}),L.base64&&c.default.createElement(b,(0,o.default)({src:L.base64},B)),L.tracedSVG&&c.default.createElement(b,(0,o.default)({src:L.tracedSVG},B)),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement(b,{alt:a,title:t,width:L.width,height:L.height,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},L))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),v=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});E.propTypes={resolutions:y,sizes:v,fixed:y,fluid:v,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var S=E;t.default=S},423:function(e,t,a){"use strict";a(421);var n=a(0),r=a.n(n),l=a(104),i=a(375),s=a.n(i);t.a=function(){return r.a.createElement("div",null,r.a.createElement("p",{className:s.a.text},"JSConf Budapest welcomes everybody, please"," ",r.a.createElement("em",{className:s.a.emphasize},"be nice to each other"),"."),r.a.createElement("ul",{className:s.a.list},r.a.createElement("li",{className:s.a.item},r.a.createElement(l.a,{className:s.a.link,to:"/about"},"About")),r.a.createElement("li",{className:s.a.item},r.a.createElement(l.a,{className:s.a.link,to:"/code-of-conduct"},"Code Of Conduct")),r.a.createElement("li",{className:s.a.item},r.a.createElement(l.a,{className:s.a.link,to:"/privacy-policy"},"Privacy Policy")),r.a.createElement("li",{className:s.a.item},r.a.createElement(l.a,{className:s.a.link,to:"/impressum"},"Impressum"))))}},424:function(e,t,a){"use strict";var n=a(18),r=a.n(n),l=a(0),i=a.n(l),s=a(104),o=a(376),c=a.n(o),u=a(426),d=a(422),m=a.n(d),f=function(e){return i.a.createElement(s.b,{query:"3370271720",render:function(e){return i.a.createElement(m.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:u})},p=function(e){var t=e.menuOpen;return i.a.createElement(s.a,{className:[c.a.logo,t?c.a.logo_menu_open:""].join(" "),to:"/"},i.a.createElement(f,{className:c.a.inner}))},h=(a(421),a(377)),g=a.n(h),b=a(378),E=a.n(b),y=function(){return i.a.createElement("div",{className:E.a.buy},i.a.createElement("a",{className:E.a.ticket,href:"https://ti.to/jsconf-bp/jsconf-budapest-2019"},i.a.createElement("div",{className:E.a.inner},i.a.createElement("span",{className:E.a.label},"Tickets"))))},v=function(e){var t=e.open,a=[g.a.nav];return t&&a.push(g.a.nav__open),i.a.createElement("nav",{className:a.join(" ")},i.a.createElement("ul",null,i.a.createElement("li",{className:g.a.item},i.a.createElement(s.a,{className:g.a.link,to:"/scholarship-program"},"Scholarship")),i.a.createElement("li",{className:g.a.item},i.a.createElement(s.a,{className:g.a.link,to:"/schedule"},"Schedule")),i.a.createElement("li",{className:g.a.item},i.a.createElement("a",{className:g.a.link,href:"/sponsoration"},"Sponsoration")),i.a.createElement("li",{className:g.a.item},i.a.createElement(s.a,{className:g.a.link,to:"/venue"},"Venue")),i.a.createElement("li",{className:g.a.item},i.a.createElement(s.a,{className:g.a.link,to:"/code-of-conduct"},"Code of Conduct")),i.a.createElement("li",{className:[g.a.item,g.a.item_ticketButton].join(" ")},i.a.createElement(y,null))))},S=a(379),w=a.n(S),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuOpen:!1},a}r()(t,e);var a=t.prototype;return a.menuButtonClick=function(e){var t=this.state.menuOpen;this.setState({menuOpen:!t})},a.render=function(){var e=this,t=this.state.menuOpen,a=this.props,n=a.transparent,r=a.classNames,l=void 0===r?[]:r,s=[w.a.header].concat(l),o=[w.a.menu_button];return n&&(s.push(w.a.header_transparent),o.push(w.a.menu_button_transparent)),t&&(s.push(w.a.header__nav__open),o.push(w.a.menu_button_open)),i.a.createElement("header",{className:s.join(" ")},i.a.createElement("svg",{onClick:function(t){return e.menuButtonClick(t)},className:o.join(" "),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 283.426 283.426"},i.a.createElement("path",{d:"M0 40.84h283.426v47.735H0zM0 117.282h283.426v47.735H0zM0 194.851h283.426v47.735H0z"})),i.a.createElement(p,{menuOpen:t}),i.a.createElement("span",{className:w.a.date},"2019 September 26-27"),i.a.createElement(v,{open:t}))},t}(i.a.Component);t.a=N},425:function(e,t,a){var n=a(25),r=a(55),l=a(46),i=/"/g,s=function(e,t,a,n){var r=String(l(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},426:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEMUlEQVQ4y3VTa1CUZRj9fnSZfqRpaRdgga0BZrkIu4Iksuyy7X67kDiVmk5T+UebqZmmX2UFgxYXk3QaRVJBBASS2CjH0RjM2YFuBtVUgi7M7rKssCALLCwsrCCcnvf9WAKrb+b58b2X85znnPMKI+VlCH4nrrpxuOEQ5lwG3Ok1wty+E0dabiAptxXJ+e0wlh3AqKdq6XzAW48JuwE+x/NU2byEm1EhCJR/jvMdNqhym6HKb0PtlQOo+DkTuvoXMI9pnLZ4EH+4AFsbtHBb1Zgbb0RgvAkTNjUBiitKcMXIUfFGBrqclXB3GuGyb4M1V4vCPYnINOdgcm4B8JtRalEjs9YId48RfocO4zYdB/A5jCtK+GRvAvRNL2Jmbha424iJk2lwquLhUipQnbcDY2OV8Ns0mOkVUfU9NbQSIMkxYZcA7gUVTvxRDs05Aw22gFtV51FTYyFx/MBUAFWWkyi9mo47TunwdK+4AuA/GTJxv3ZcQP+xg+iKi8LG9y6j/FcfLjm+gqZOC+05EXU/SGBe+/8DrQCs+GUMhTlvwqaKQUqeBXl73sdAexoGbKRZtxF91uXCG/9lRLABN6WhpRNJ736LTfmtKNr+Dkqz9qEv9Rn4Ow3wu0xkgIgZGnmy9x92XpvI//190tq4bRlg3q796FZG4zdFNGyVpfAU6dCTIIf3OnV2SodHug28gkzm3CaM9ohwX9dzYPYf3BMSC66heOtbmPzsKA0/D9/gTrhLkuH9XY+pWyaMWA3Ylh0Dkz4awzcp8P0mnD6aAmWiHGFhMr5+xZyOaZfUXIjL7UBJUzE5a+bp9/Vuh8+lp9AaMUUMPQS4IT4S0VERmCI2lm/UWLM2FBuVcux9LQ5rHw3F67tjOSAf+eOGIjqowXB3BoaHzsDn3E1gOi4+A2CAyaqnERcbiVkarawkBfc9+CSOH0qmgXJwrTkD/X/qeXMOWP/jcxDrROhrDahuy6R4EPVF54IMVUlyDuin/5bGdM4wcYMcx4qTcfuGAbidtWSMECCAI9+J+JQq4DTRohQNdoAzJN2YXgk09jBdniFdP9qvxONPhOGBh55CrCISZ49vQoDWuYbSC5Bq0mFcAmORYA4OdUmAjBEzhV3ESDZ+upyBt/clQCaT4bF1oWhu2IK7gyYIKwMq6TA7YIK9Q8cvs+KAFCUWncFOPVovqIHRbGAhB6fI8ftJ04PEmjUSgoEMBpZlqv7UswgPl6HwQyWPyLr1odBporiGr+xQcGcLPlDiYl0aXn1ZwQGZWfBkSYBBUDZqgHLWdlHNY/Hw6hBeERHh+PLMZn7h0hdbuOuraH3VIyFYvSYEu15ScOZMc+Hexz2+yJK9AvPZzagpS8VfrVoeaLbHdGKXGbvq0lQeakZmum8xNssZBp8Pd5jGW6A4YDhrycHle/ND0h5rwNcX7/4NQRZa/Gk/sbsAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/9b2311e55234671d5594d0954be3b213/fdbb0/logo2.png",srcSet:"/static/9b2311e55234671d5594d0954be3b213/e22c9/logo2.png 75w,\n/static/9b2311e55234671d5594d0954be3b213/d3809/logo2.png 150w,\n/static/9b2311e55234671d5594d0954be3b213/fdbb0/logo2.png 300w,\n/static/9b2311e55234671d5594d0954be3b213/647de/logo2.png 400w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},428:function(e,t,a){"use strict";var n=a(429),r=a(0),l=a.n(r),i=a(2),s=a.n(i),o=a(427),c=a.n(o),u=a(104),d=a(380),m=a.n(d),f=a(423),p=a(424),h=function(e){return l.a.createElement(u.b,{query:"724794514",render:function(t){return l.a.createElement("div",{className:m.a.grid2},l.a.createElement(c.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:t.site.siteMetadata.description},{name:"keywords",content:t.site.siteMetadata.keywords}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(p.a,null),l.a.createElement("main",{className:[m.a.main].concat(e.mainClassNames).join(" ")},e.children),l.a.createElement("footer",{className:m.a.footer},l.a.createElement(f.a,null)))},data:n})};h.propTypes={children:s.a.node.isRequired,mainClassNames:s.a.array},h.defaultProps={mainClassNames:[]},t.a=h},429:function(e){e.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",keywords:"jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary"}}}}},430:function(e,t,a){"use strict";var n=a(431),r=a(0),l=a.n(r),i=a(104),s=a(427),o=a.n(s);t.a=function(e){return l.a.createElement(i.b,{query:"3814168137",render:function(t){var a=t.site.siteMetadata,n=a.title,r=a.twitter,i=a.siteUrl,s=a.description;return l.a.createElement(o.a,{meta:[{name:"og:type",content:"website"},{name:"og:title",content:e.title||n},{name:"og:description",content:e.description||s},{name:"og:site_name",content:n},{name:"og:url",content:i},{name:"og:image",content:i+"/social-cards/"+e.image},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:r},{name:"twitter:creator",content:r},{name:"twitter:title",content:e.title||n},{name:"twitter:description",content:e.description||s},{name:"twitter:url",content:i},{name:"twitter:image",content:i+"/social-cards/"+e.image}]})},data:n})}},431:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://jsconfbp.com",title:"JSConf Budapest 2019",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary",twitter:"@jsconfbp"}}}}}}]);
//# sourceMappingURL=component---src-pages-schedule-js-709a9a5157c172c4dc81.js.map