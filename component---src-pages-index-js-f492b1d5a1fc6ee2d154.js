(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{431:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),A=t(109),c=t(453),r=t(442),l=t(456),i=(t(108),t(447),t(55)),o=t(455),m=t(418),d=t.n(m),p=function(e){return n.a.createElement("ul",{className:d.a.speaker_list},e.data.allMdx.edges.filter(function(e){return"speakers"===e.node.parent.sourceInstanceName}).sort(function(e,a){var t=e.node.frontmatter.order,s=a.node.frontmatter.order;return t?s?t-s:-1:1}).map(function(e){var a=e.node;return n.a.createElement("li",{key:a.id,className:d.a.updates_list_item},n.a.createElement(i.a,{className:d.a.speaker_link,to:"/"+a.parent.sourceInstanceName+"/"+a.parent.name},n.a.createElement(o.a,{className:d.a.speaker_list_image,image:a.frontmatter.image,color:a.frontmatter.color}),n.a.createElement("span",{className:d.a.name},a.frontmatter.name),n.a.createElement("span",{className:d.a.title},a.frontmatter.title)))}),n.a.createElement("li",{key:"the-mc",className:d.a.updates_list_item},n.a.createElement("a",{className:d.a.speaker_link,href:"https://twitter.com/paul_v_m"},n.a.createElement(o.a,{className:d.a.speaker_list_image,image:"paul_vm",color:"blue"}),n.a.createElement("span",{className:d.a.name},"Paul Verbeek-Mast"),n.a.createElement("span",{className:d.a.title},"Master of Ceremony"))))},u=t(471),f=(t(76),t(110),t(484),t(8),t(107),t(474),t(473),t(388)),g=t.n(f);t.d(a,"query",function(){return b});a.default=function(e){return n.a.createElement(c.a,null,n.a.createElement(r.a,{image:"social_card_home2.jpg"}),n.a.createElement("div",null,n.a.createElement("div",{className:g.a.home},n.a.createElement("div",{className:g.a.homeContent},n.a.createElement("h1",{className:g.a.title},"JSConf Budapest 2019"),n.a.createElement("span",{className:g.a.date},"26-27th September"),n.a.createElement(A.a,{block:!0,fill:!0,href:"https://ti.to/jsconf-bp/jsconf-budapest-2019"},"Tickets from €311"))),n.a.createElement("div",{className:g.a.updates},n.a.createElement("div",{className:g.a.updates_content},n.a.createElement("h1",{className:g.a.home_heading},"Speakers"),n.a.createElement(p,{data:e.data}))),n.a.createElement("div",{className:g.a.updates},n.a.createElement("div",{className:g.a.updates_content},n.a.createElement("h1",{className:g.a.home_heading},"Updates"),n.a.createElement(l.a,{data:e.data}))),n.a.createElement("div",{className:g.a.updates},n.a.createElement("div",{className:g.a.updates_content},n.a.createElement(u.a,null)))))};var b="3865816901"},447:function(e,a,t){"use strict";var s=t(25),n=t(60),A=t(57),c=t(56),r=[].sort,l=[1,2,3];s(s.P+s.F*(c(function(){l.sort(void 0)})||!c(function(){l.sort(null)})||!t(448)(r)),"Array",{sort:function(e){return void 0===e?r.call(A(this)):r.call(A(this),n(e))}})},448:function(e,a,t){"use strict";var s=t(56);e.exports=function(e,a){return!!e&&s(function(){a?e.call(null,function(){},1):e.call(null)})}},453:function(e,a,t){"use strict";var s=t(454),n=t(0),A=t.n(n),c=t(2),r=t.n(c),l=t(435),i=t.n(l),o=t(55),m=t(387),d=t.n(m),p=t(436),u=t(438),f=function(e){return A.a.createElement(o.b,{query:"1024188509",render:function(a){return A.a.createElement("div",{className:d.a.grid2},A.a.createElement(i.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:a.site.siteMetadata.description},{name:"keywords",content:a.site.siteMetadata.keywords}]},A.a.createElement("html",{lang:"en"})),A.a.createElement(u.a,{transparent:!0,classNames:e.headerClassNames}),A.a.createElement("main",{className:[d.a.main].concat(e.mainClassNames).join(" ")},e.children),A.a.createElement("footer",{className:d.a.footer},A.a.createElement(p.a,null)))},data:s})};f.propTypes={children:r.a.node.isRequired,mainClassNames:r.a.array},f.defaultProps={mainClassNames:[]},a.a=f},454:function(e){e.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",keywords:"jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest, diversity, inclusivity, community",description:"JSConf Budapest 2019, September 26-27, Budapest, Hungary. Tickets from €311, including free workshops, inclusive catering and barista coffee!"}}}}},456:function(e,a,t){"use strict";t(108),t(447);var s=t(0),n=t.n(s),A=t(55),c=t(389),r=t.n(c);a.a=function(e){return n.a.createElement("ul",{className:r.a.updates_list},e.data.allMdx.edges.filter(function(e){return"updates"===e.node.parent.sourceInstanceName}).sort(function(e,a){var t=new Date(e.node.frontmatter.date),s=new Date(a.node.frontmatter.date);return t>s?-1:t<s?1:0}).slice(0,3).map(function(e){var a=e.node;return n.a.createElement("li",{key:a.id,className:r.a.updates_list_item},n.a.createElement("span",{className:r.a.date},a.frontmatter.date),n.a.createElement(A.a,{className:r.a.title,to:"/"+a.parent.sourceInstanceName+"/"+a.parent.name},a.frontmatter.title),n.a.createElement("p",{className:r.a.lead},a.frontmatter.lead," "),n.a.createElement(A.a,{to:"/"+a.parent.sourceInstanceName+"/"+a.parent.name},"Read more →"))}))}},457:function(e,a,t){"use strict";t(437)("big",function(e){return function(){return e(this,"big","","")}})},458:function(e){e.exports={data:{source:{edges:[{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAq0lEQVQoz7XQwQoBURTG8TEKo5QtWYwZE5kRC3kD63kTbMaCWIhkocTKRvKk/re+qbtgx6lfc+ac07e4jvPHKqOCIlz1nuY1VDUv6d7TjZkX7KD8J8UVT1xwwAY7ZJjhjDUW2pvdHhNluHbgFC889DWhS4WdMMcNK9wVfsQWYzswrxgJAnQxQIghRtr56Ok21k0f9U9v2FBAC0200UGkPlKgr5BQffIt8Cf1BnoEFLA/Sq0wAAAAAElFTkSuQmCC",aspectRatio:2.67,src:"/static/1a93510d544630a07bcc960c629d9759/af144/S2_Black_RGB.png",srcSet:"/static/1a93510d544630a07bcc960c629d9759/7c0ed/S2_Black_RGB.png 200w,\n/static/1a93510d544630a07bcc960c629d9759/647de/S2_Black_RGB.png 400w,\n/static/1a93510d544630a07bcc960c629d9759/af144/S2_Black_RGB.png 800w,\n/static/1a93510d544630a07bcc960c629d9759/2c1c1/S2_Black_RGB.png 801w",srcWebp:"/static/1a93510d544630a07bcc960c629d9759/c6096/S2_Black_RGB.webp",srcSetWebp:"/static/1a93510d544630a07bcc960c629d9759/1932c/S2_Black_RGB.webp 200w,\n/static/1a93510d544630a07bcc960c629d9759/f4957/S2_Black_RGB.webp 400w,\n/static/1a93510d544630a07bcc960c629d9759/c6096/S2_Black_RGB.webp 800w,\n/static/1a93510d544630a07bcc960c629d9759/dfdc4/S2_Black_RGB.webp 801w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAxUlEQVQY023RTwsBQRjH8XlfXoKX4OLgQCiFKAf//6Q4ObmyRe1VKa+Aq3JxUQ5yJ2J3+T71bE3bHj7NzPPM/GabNcaYXwzPmvsxfamdccPFqgVGD3909KyAlxX8wFf3yfqKAvpYaC3Q0UyRRhFldHBCBjVskUcKO7jYoI0G1qiiFwYOMUYFS2Q1bI46JmipIw5oYqQf4OqFCTwlsIsSBnB0k9ya08A9krqWC2dqpWGO9sTdfkPfesfoz5D3e0fqgdUP5/4fzP5aygLnIk0AAAAASUVORK5CYII=",aspectRatio:3.495145631067961,src:"/static/6d1283260b3372159ea283e496204671/83f67/mozilla.png",srcSet:"/static/6d1283260b3372159ea283e496204671/7c0ed/mozilla.png 200w,\n/static/6d1283260b3372159ea283e496204671/83f67/mozilla.png 360w",srcWebp:"/static/6d1283260b3372159ea283e496204671/eb696/mozilla.webp",srcSetWebp:"/static/6d1283260b3372159ea283e496204671/1932c/mozilla.webp 200w,\n/static/6d1283260b3372159ea283e496204671/eb696/mozilla.webp 360w",sizes:"(max-width: 360px) 100vw, 360px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABZ0lEQVQoz2NgAAJFBXM+G0urCbZW1mtMjW2VQGIeLjZM5iaWDEBxRmtLMA3DjNYWlow2lpYgcUYQ3wZCg+UZdLXNRZ3srW4BDftvaWbx387a4geQbc1ALpg7yTmlosDxv72N008vD7/vxTne/6f32M8CyQX5WosAbZUBYqAPLNmBLuMGssWBLuMH0iJQLAqUEwbSgiB1DGvmuyxLiHL8393Z//vk8ZN/Z0zp/t/XbHbbxtJmLVDBFCCeDMQbgYatt7awWmtjYbUEyN4MNHQ3FM+yAYlbWq0E4jkMC6ZY9U/qTvrfWN/6s6Wp/fesqXX/Z/ZZH9HVsU6wt7FKBCpKA+IooCuSgQZlAtlZQJwCNCgFSJcCcYi1pVUOSAyIcxhqiu2tU+Md/pubmP83MTT7Hxvh8L+iwD6fgRKgrWWRYWtl9QSIPxkbWnUwMBhygcQ1NSyYILEMj0kmaOwyWUNoBkgKgMW2FSMAxAyC0a1fKbwAAAAASUVORK5CYII=",aspectRatio:2.682897862232779,src:"/static/7b9424652dd7f6638b3091c6768a5a43/af144/js-kongress-munich-logo.png",srcSet:"/static/7b9424652dd7f6638b3091c6768a5a43/7c0ed/js-kongress-munich-logo.png 200w,\n/static/7b9424652dd7f6638b3091c6768a5a43/647de/js-kongress-munich-logo.png 400w,\n/static/7b9424652dd7f6638b3091c6768a5a43/af144/js-kongress-munich-logo.png 800w,\n/static/7b9424652dd7f6638b3091c6768a5a43/ba299/js-kongress-munich-logo.png 1200w,\n/static/7b9424652dd7f6638b3091c6768a5a43/9ecf6/js-kongress-munich-logo.png 1600w,\n/static/7b9424652dd7f6638b3091c6768a5a43/87342/js-kongress-munich-logo.png 2259w",srcWebp:"/static/7b9424652dd7f6638b3091c6768a5a43/c6096/js-kongress-munich-logo.webp",srcSetWebp:"/static/7b9424652dd7f6638b3091c6768a5a43/1932c/js-kongress-munich-logo.webp 200w,\n/static/7b9424652dd7f6638b3091c6768a5a43/f4957/js-kongress-munich-logo.webp 400w,\n/static/7b9424652dd7f6638b3091c6768a5a43/c6096/js-kongress-munich-logo.webp 800w,\n/static/7b9424652dd7f6638b3091c6768a5a43/b6424/js-kongress-munich-logo.webp 1200w,\n/static/7b9424652dd7f6638b3091c6768a5a43/7a72d/js-kongress-munich-logo.webp 1600w,\n/static/7b9424652dd7f6638b3091c6768a5a43/6bd92/js-kongress-munich-logo.webp 2259w",sizes:"(max-width: 800px) 100vw, 800px"}}}}]}}}},471:function(e,a,t){"use strict";t(457),t(108),t(434);var s=t(0),n=t.n(s),A=t(55),c=(t(76),t(110),t(458)),r=t(107),l=t.n(r),i=function(e){var a=e.image,t=e.className,s=void 0===t?"":t;return n.a.createElement(A.b,{query:"1666836110",render:function(e){return e.source.edges.filter(function(e){return e.node.childImageSharp.fluid.src.includes(a)}).map(function(e,t){var A=e.node;return n.a.createElement(l.a,{className:s,fluid:A.childImageSharp.fluid,key:a})})},data:c})},o={big:[{name:"Mozilla",level:"big",link:"https://mozilla.com",image:"mozilla"}],scholarship:[{name:"SinnerSchrader",level:"scholarship",link:"https://sinnerschrader.com",image:"S2_Black_RGB"}],partners:[{name:"JSKongress",link:"https://js-kongress.com/",image:"js-kongress-munich-logo"}]},m=t(390),d=t.n(m),p=function(e){var a=e.link,t=e.image,s=e.name;return n.a.createElement("a",{href:a},n.a.createElement(i,{className:d.a.image,image:t,title:s}))};a.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:d.a.sponsor_subtitle},"Sponsors"),n.a.createElement("ul",{className:d.a.sponsor_list},o.big.map(function(e){return n.a.createElement("li",{className:d.a.sponsor_big,key:e.name},n.a.createElement(p,e))})),n.a.createElement("h1",{className:d.a.sponsor_subtitle},"Scholarship Sponsors"),n.a.createElement("ul",{className:d.a.sponsor_list},o.scholarship.map(function(e){return n.a.createElement("li",{className:d.a.sponsor_scholarship,key:e.name},n.a.createElement(p,e))})),n.a.createElement("h1",{className:d.a.sponsor_subtitle},"Partners"),n.a.createElement("ul",{className:d.a.sponsor_list},o.partners.map(function(e){return n.a.createElement("li",{className:d.a.sponsor_partner,key:e.name},n.a.createElement(p,e))})))}},484:function(e){e.exports={data:{source:{edges:[{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDAv/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAGma+ErheR0iItBT//EABwQAAICAgMAAAAAAAAAAAAAAAABAgMSEzEzQf/aAAgBAQABBQLWa3k6ifEHlYz2Paz/xAAXEQEBAQEAAAAAAAAAAAAAAAABECEx/9oACAEDAQE/AQyHJ//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAICAwAAAAAAAAAAAAAAAAABIUEQESD/2gAIAQEABj8CKeJeiHfP/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERITFRsf/aAAgBAQABPyF5xKk9tLyeCbwhcg6Bfgij2GYaDaf/2gAMAwEAAgADAAAAEGwHPP/EABYRAQEBAAAAAAAAAAAAAAAAABARMf/aAAgBAwEBPxClGh//xAAXEQEBAQEAAAAAAAAAAAAAAAABECEx/9oACAECAQE/EF2PZ//EABwQAQADAAMBAQAAAAAAAAAAAAEAESFBUWExsf/aAAgBAQABPxA6rF3x7MJzsrH0EvaoeMvFOwYnIN1zl+RW5MWgsA4B9It5/9k=",aspectRatio:1,src:"/static/8fee1c2c9fce13db043fc6053b07dc5f/8539d/paul_vm.jpg",srcSet:"/static/8fee1c2c9fce13db043fc6053b07dc5f/d278e/paul_vm.jpg 200w,\n/static/8fee1c2c9fce13db043fc6053b07dc5f/8539d/paul_vm.jpg 400w",sizes:"(max-width: 400px) 100vw, 400px"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-f492b1d5a1fc6ee2d154.js.map