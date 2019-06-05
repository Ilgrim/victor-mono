(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],h=0,u=[];h<i.length;h++)s=i[h],o[s]&&u.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/victor-mono/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"07dd":function(e,t,a){"use strict";var n=a("c048"),o=a.n(n);o.a},"2d69":function(e,t,a){"use strict";var n=a("4c48"),o=a.n(n);o.a},"4c48":function(e,t,a){},"4d2b":function(e,t,a){"use strict";var n=a("67c7"),o=a.n(n);o.a},"4d2d":function(e,t,a){e.exports=a.p+"img/specimen-light.9973d5e9.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar",{ref:"navbar",attrs:{show:e.showNav,"show-go-to-top":e.showGoToTop},on:{darkTheme:function(t){e.theme="dark"},lightTheme:function(t){e.theme="light"}}}),n("Header",{ref:"header",attrs:{"show-text":e.showHeaderText,theme:e.theme}}),n("div",{staticClass:"content"},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:22,sm:18,lg:18}},[n("p",{staticClass:"columns"},[e._v("\n          Victor Mono is a programming font with\n          "),n("em",[e._v("semi-connected cursive italics")]),e._v("\n          and some symbol ligatures (!=, ->>, =>, ===, && ++).\n          "),n("br"),n("br"),e._v("\n          It was drawn from scratch as a pet project / experiment\n          "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#why",expression:"'#why'"}],attrs:{href:"javascript:void(0)"}},[e._v("because I couldn’t find another")]),e._v("\n          (free or paid) typeface I was entirely satisfied with.\n          "),n("br"),n("br"),n("video",{staticClass:"specimen-loop",class:{inverted:"light"===e.theme},attrs:{autobuffer:"",autoloop:"",loop:"",controls:"",alt:"The glyphs"}},[n("source",{attrs:{src:a("ee36")}})]),e._v("\n          The typeface is quite strict in style and features a large x-height.\n          It is optimised for code and legibility at small to medium sizes on high-DPI displays where the\n          "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"= might look weird on Windoze or in Electron-based apps",placement:"top-start"}},[n("span",[e._v("OS and app")])]),e._v("\n          tries to render fonts nicely.\n        ")],1)])],1)],1),n("div",{staticClass:"content alternate-bg"},[n("div",{staticClass:"scroll-head",attrs:{id:"try"}}),n("el-row",[n("el-col",[n("h1",{staticClass:"centre"},[n("em",[e._v("Try it")])])])],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:22,sm:18,lg:18}},[n("CodeView",{attrs:{theme:e.theme}})],1)],1)],1),n("div",{staticClass:"content"},[n("div",{staticClass:"scroll-head",attrs:{id:"why"}}),n("el-row",[n("el-col",[n("h1",{staticClass:"centre"},[n("em",[e._v("Why")])])])],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:22,sm:18,lg:18}},[n("p",{staticClass:"columns"},[e._v("\n          I'm rather particular about what width, weight, style etc makes an effective and enjoyable typeface for code.\n          "),n("br"),n("br"),e._v("\n          All fonts or typeface combo mashups I tried using while coding had several of these shortcomings ("),n("em",[e._v("subjectively, of course")]),e._v("):\n          "),n("ul",[n("li",[e._v("No cursive italics")]),n("li",[e._v("Had nice italics, but regular/Roman style was not to my taste")]),n("li",[e._v("No programming symbol ligatures")]),n("li",[e._v("Too heavy and inelegant")]),n("li",[e._v("Too light and straining to read")]),n("li",[e._v("Too wide and wasted space")]),n("li",[e._v("Too narrow and hard to scan")]),n("li",[e._v("Seemed unfinished or had weird/misaligned curves/artifacts")]),n("li",[e._v("Seemed childish or unprofessional (too soft or informal appearance)")]),n("li",[e._v("Seemed imbalanced or inconsistent")]),n("li",[e._v("Combined two eye-poppingly-too-different-in-style fonts")]),n("li",[e._v("Very expensive")])]),e._v("\n          So eventually, a couple of months ago I had the idea of trying to make something on my own. Both designing it and making a website to present it has been an interesting experiment, and has resulted in a typeface which feels right to me.\n          "),n("br"),n("br"),e._v("\n          You might like it as well. That's brilliant! You might not. That's also fine: you are free to use a different font. 😛\n        ")])])],1)],1),n("div",{staticClass:"horisontal-large-image"},[n("img",{attrs:{src:e.specimenBanner}})]),n("div",{staticClass:"content"},[n("div",{staticClass:"scroll-head",attrs:{id:"download"}}),n("el-row",[n("el-col",[n("h1",{staticClass:"centre"},[n("em",[e._v("Get it")])])])],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:22,sm:18,lg:18}},[n("p",{staticClass:"columns"},[e._v("\n          The font is available in Roman and "),n("em",[e._v("Italic")]),e._v(" styles.\n          If you think the latter is a bit too much, an "),n("em",{staticClass:"alt"},[e._v("Oblique")]),e._v(" style is also included.\n          "),n("br"),n("br"),e._v("\n          If you do try it out and like it, I would be very grateful for any\n          "),n("a",{attrs:{href:"javascript:void(0)"},on:{click:e.thanks}},[e._v("donations")]),e._v(".\n          After initially pondering whether or not to sell it, I decided to give it away:\n          "),n("br"),n("br"),e._v("\n          First, I couldn't be bothered to set up hosting/payment and commit to providing support the way a commercial product should.\n          "),n("br"),n("br"),e._v("\n          Secondly, this has been an experiment to see if I could make something I wanted to use myself. As it stands, the font doesn't have a huge number of glyphs and ligatures — although I\n          "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#faq",expression:"'#faq'"}],attrs:{href:"javascript:void(0)"}},[e._v("might add more")]),e._v("\n          in the future.\n          "),n("br"),n("br"),e._v("\n          Finally, I can identify with not wanting to shell out €100++ on a font. If you are able to and want to contribute: a sincere thank you! 🙏\n        ")])])],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{staticClass:"centre"},[n("a",{attrs:{id:"donate-link"}},[n("el-button",{attrs:{icon:"el-icon-medal-1",type:"primary",round:""},on:{click:e.thanks}},[e._v("\n            Donate\n          ")])],1),e._v("\n         \n        "),n("a",{attrs:{id:"download-link",href:"Victor Mono.zip"}},[n("el-button",{attrs:{icon:"el-icon-download",round:""}},[e._v("\n            Download\n          ")])],1)])],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:22,sm:18,lg:18}},[n("p",{staticClass:"small centre"},[n("em",[e._v("If you have a nice screenshot of the font in use / used it for something cool, I'd love to\n          "),n("a",{attrs:{target:"_blank",href:"mailto:victor.mono.font@gmail.com?subject=Here's how I used the font"}},[e._v("hear from you")]),e._v(".\n        ")])])])],1),n("div",{staticClass:"content alternate-bg"},[n("div",{staticClass:"scroll-head",attrs:{id:"faq"}}),n("el-row",[n("el-col",[n("h1",{staticClass:"centre",on:{mouseenter:function(t){e.revealFaq=!0},touchstart:function(t){e.revealFaq=!0},mouseleave:function(t){e.revealFaq=!1}}},[n("em",[e._v("FAQ*")])]),n("transition",{attrs:{name:"el-zoom-in-top"}},[n("div",{staticClass:"caption centre full-width"},[e._v("\n             \n            "),n("em",{directives:[{name:"show",rawName:"v-show",value:e.revealFaq,expression:"revealFaq"}]},[e._v("Frequently Anticipated Questions")])])])],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:22,sm:18,lg:18}},[n("VueFaqAccordion",{attrs:{items:e.faqItems,"border-color":"transparent"}})],1)],1)],1),n("div",{staticClass:"content"},[n("div",{staticClass:"scroll-head",attrs:{id:"credits"}}),n("el-row",[n("el-col",[n("h1",{staticClass:"centre"},[n("em",[e._v("Credits")])])])],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:22,sm:18,lg:18}},[n("p",{staticClass:"small centre"},[e._v("\n          If making this font has been a learning experiment, the same can be said for trying out a number of frameworks/packages to make this web site. Big thanks to the following:\n          "),n("br"),n("br"),n("br"),n("em",[e._v("Lovely gradients")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://sarcadass.github.io/granim.js/"}},[e._v("\n            Granim.js")]),e._v("\n          by\n          "),n("a",{attrs:{target:"_blank",href:"https://twitter.com/Sarcadass"}},[e._v("\n            Benjamin Blonde")]),n("br"),n("br"),n("em",[e._v("Cool animated typing")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://github.com/mattboldt/typed.js/"}},[e._v("\n            Typed.js")]),e._v("\n          by\n          "),n("a",{attrs:{target:"_blank",href:"https://mattboldt.com"}},[e._v("\n            Matt Boldt")]),n("br"),n("br"),n("em",[e._v("Code editor")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://github.com/surmon-china/vue-codemirror"}},[e._v("\n            Vue-Codemirror")]),e._v("\n          by\n          "),n("a",{attrs:{target:"_blank",href:"https://github.com/surmon-china"}},[e._v("\n            Surmon")]),e._v(" and\n          "),n("a",{attrs:{target:"_blank",href:"https://codemirror.net"}},[e._v("\n            codemirror.net")]),n("br"),n("br"),n("em",[e._v("Animations here & there")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://animejs.com"}},[e._v("\n            Anime.js")]),n("br"),n("br"),n("em",[e._v("Smooth scrolling")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://vue-scrollto.netlify.com"}},[e._v("\n            vue-scrollto")]),e._v("\n          by\n          "),n("a",{attrs:{target:"_blank",href:"https://github.com/rigor789"}},[e._v("\n            Igor Randjelovic")]),n("br"),n("br"),n("em",[e._v("FAQ component")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://github.com/gerasimvol/vue-faq-accordion"}},[e._v("\n            vue-faq-accordion")]),e._v("\n          by\n          "),n("a",{attrs:{target:"_blank",href:"https://github.com/gerasimvol"}},[e._v("\n            Vladimir Gerasimenko")]),n("br"),n("br"),n("em",[e._v("Thank-you-confetti")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://www.npmjs.com/package/dom-confetti"}},[e._v("\n            dom-confetti")]),e._v("\n          by\n          "),n("a",{attrs:{target:"_blank",href:"https://twitter.com/danielundin"}},[e._v("\n            Daniel Lundin")]),n("br"),n("br"),n("em",[e._v("CSS framework / component library")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://element.eleme.io/#/en-US"}},[e._v("\n            Element")]),n("br"),n("br"),n("em",[e._v("The nice JS framework")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://vuejs.org"}},[e._v("\n            Vue.js")]),n("br"),n("br"),n("em",[e._v("Supercool scaffolding and tools for Vue.js development")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://cli.vuejs.org"}},[e._v("\n            Vue CLI")]),n("br"),n("br"),n("em",[e._v("Very nice (and rather expensive) font design software")]),n("br"),n("a",{attrs:{target:"_blank",href:"https://glyphsapp.com"}},[e._v("\n            Glyphs")]),n("br"),n("br"),n("em",[e._v("Font and web site")]),n("br"),n("a",{attrs:{target:"_blank",href:"mailto:victor.mono.font@gmail.com?subject=Thanks for making such a nice font"}},[e._v("\n            Rune B")])])])],1)],1)],1)},r=[],s=(a("ac6a"),a("f3e2"),a("78ce"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"navbar"},[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#app",expression:"'#app'"}],class:{collapsed:!e.showGoToTop},attrs:{href:"#"}},[a("i",{staticClass:"el-icon-arrow-up"})]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#try",expression:"'#try'"}],attrs:{href:"#"}},[e._v("\n      Try")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#why",expression:"'#why'"}],attrs:{href:"#"}},[e._v("\n      Why")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#download",expression:"'#download'"}],attrs:{href:"#"}},[e._v("\n      Get")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#faq",expression:"'#faq'"}],attrs:{href:"#"}},[e._v("\n      FAQ")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#credits",expression:"'#credits'"}],staticClass:"hidden-xs-only",attrs:{href:"#"}},[e._v("\n      Credits")]),a("a",{ref:"themeIcon",staticClass:"themeIcon",attrs:{href:"javascript:void(0)"},on:{click:e.toggleTheme}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"light"===e.theme,expression:"theme === 'light'"}],staticClass:"moon theme"},[a("svg",{attrs:{height:"52",width:"38",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M26.01 1A25.02 25.02 0 0 0 1 26.01a25.03 25.03 0 0 0 35.01 22.91 1.2 1.2 0 0 0 0-2.18 22.62 22.62 0 0 1 0-41.46 1.2 1.2 0 0 0 0-2.18 24.93 24.93 0 0 0-10-2.1z",fill:"none",stroke:e.textColour,"stroke-width":"2"}})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"dark"===e.theme,expression:"theme === 'dark'"}],staticClass:"sun theme"},[a("svg",{attrs:{height:"53",width:"53",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{fill:"none","fill-rule":"evenodd",stroke:e.textColour,"stroke-width":"2"}},[a("circle",{attrs:{cx:"26.58",cy:"26.62",r:"9.44"}}),a("path",{attrs:{d:"M26.58 11.78V1.7M26.58 51.85v-10.1M41.09 26.25H51.2M1.64 26.25h10.13"}}),a("path",{attrs:{d:"M15.85 15.9L8.7 8.76M44.18 44.23l-7.14-7.14M36.34 15.86l7.16-7.15M8.45 43.76l7.16-7.16"}}),a("path",{attrs:{d:"M32.38 12.6l3.86-9.32M17.05 49.62l3.86-9.32M40.25 31.53l9.35 3.87M3.8 16.43l9.36 3.88"}}),a("path",{attrs:{d:"M20.77 12.6l-3.86-9.32M36.1 49.62l-3.86-9.32M39.72 20.42l9.35-3.87M3.28 35.51l9.35-3.87"}})])])])])])])}),i=[],l=a("1209"),c={name:"NavBar",props:{show:Boolean,showGoToTop:Boolean},data:function(){return{theme:localStorage.getItem("theme")||"dark",backgroundColour:"#595959",textColour:"#eee"}},mounted:function(){this.setAppearance(),Object(l["a"])({targets:".themeIcon svg",rotate:[360,315],strokeColor:["#f0f","#000"],delay:500,duration:3e3,easing:"easeInOutSine"})},methods:{toggleTheme:function(){var e=this;this.$refs.themeIcon.style.transform="scale(0)",Object(l["a"])({targets:".themeIcon circle",scale:[0,1],duration:1500,easing:"easeInOutSine"}),Object(l["a"])({targets:".themeIcon path",strokeDashoffset:[l["a"].setDashoffset,0],easing:"easeInOutSine",duration:2500,delay:function(e,t){return 250*t+250},direction:"normal",loop:!1}),Object(l["a"])({targets:".themeIcon svg",rotate:[0,315],strokeColor:["#f0f","#000"],delay:500,duration:3e3,easing:"easeInOutSine"}),setTimeout(function(){e.theme="dark"===e.theme?"light":"dark",localStorage.setItem("theme",e.theme),e.setAppearance(),e.$refs.themeIcon.style.transform="scale(0.5)"},100)},setAppearance:function(){"dark"===this.theme?(this.$emit("darkTheme"),this.backgroundColour="#595959",this.alternateBackgroundColour="#505050",this.textColour="#eee"):(this.$emit("lightTheme"),this.backgroundColour="#fff",this.alternateBackgroundColour="#f2f2f2",this.textColour="#222");var e=document.documentElement;e.style.setProperty("--background-color-base",this.backgroundColour),e.style.setProperty("--background-color-alternate",this.alternateBackgroundColour),e.style.setProperty("--color-text-primary",this.textColour)}}},d=c,h=(a("4d2b"),a("2877")),u=Object(h["a"])(d,s,i,!1,null,"bb248c2e",null),f=u.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{ref:"videoBg",staticClass:"video-bg"},[n("video",{ref:"video",attrs:{autobuffer:"",autoplay:"",muted:"",autoloop:"",playsinline:"",loop:""},domProps:{muted:!0}},[n("source",{attrs:{src:a("f2c0"),type:"video/mp4"}}),n("source",{attrs:{src:a("9276"),type:"video/webm"}})])]),n("canvas",{ref:"gradients",staticClass:"header-gradients"}),n("div",{staticClass:"text",class:{hidden:!e.showText}},[n("h1",{ref:"mainTitle"},[e._v("\n      Victor Mono\n    ")]),e._m(0),n("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#try",expression:"'#try'"}],staticClass:"large-icon"},[n("i",{staticClass:"el-icon-arrow-down"})])])])],1)],1)])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v("\n      The "),a("em",{staticClass:"property"}),a("br",{staticClass:"hidden-sm-and-up"}),e._v("\n      programming font\n    ")])}],v=(a("96cf"),a("3b8d")),g=a("01bf"),b=a.n(g),y=a("10b3"),w=a.n(y),_={name:"Header",props:{showText:Boolean,theme:{type:String,default:localStorage.getItem("theme")||"dark"}},watch:{theme:{handler:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t,a){var n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n="dark"===this.theme?.2:.5,o="dark"===this.theme?.5:.2,e.next=4,Object(l["a"])({targets:this.$refs.videoBg,opacity:[n,0],duration:250,easing:"linear"}).finished;case 4:return"light"===t?(this.$refs.gradients.style.mixBlendMode="multiply",this.$refs.videoBg.style.filter="invert(1)"):(this.$refs.gradients.style.mixBlendMode="screen",this.$refs.videoBg.style.filter="invert(0)"),Object(l["a"])({targets:this.$refs.videoBg,opacity:[0,o],duration:250,easing:"linear"}),e.abrupt("return",Promise.resolve());case 7:case"end":return e.stop()}},e,this)}));function t(t,a){return e.apply(this,arguments)}return t}(),immediate:!0}},mounted:function(){this.initGradient(),this.initTyped()},methods:{initGradient:function(){function e(e){var t,a,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e}var t=[[{color:"rgba(253,199,141,1)",pos:0},{color:"rgba(249,143,253,1)",pos:1}],[{color:"rgba(253,239,132,1)",pos:0},{color:"rgba(21,186,196,1)",pos:1}],[{color:"rgba(243,31,105,1)",pos:0},{color:"rgba(249,233,47,1)",pos:1}],[{color:"rgba(56,230,250,1)",pos:0},{color:"rgba(52,116,243,1)",pos:1}],[{color:"rgba(19,248,87,1)",pos:0},{color:"rgba(235,202,16,1)",pos:1}],[{color:"rgba(101,161,86,1)",pos:0},{color:"rgba(255,178,63,1)",pos:1}],[{color:"rgba(255,100,241,1)",pos:0},{color:"rgba(67,220,255,1)",pos:1}]];return new b.a({element:".header-gradients",direction:"diagonal",isPausedWhenNotInView:!0,states:{"default-state":{gradients:e(t),transitionSpeed:5e3}}})},initTyped:function(){var e={strings:["==>","cursive",'<span style="text-decoration: line-through;">modest</span>',"break-the-wheel","be-all and end-all","donate-what-it's-worth","good-looking","schizophrenic","de facto","one true","awesome","essential","go-to","best","invaluable","free","no-compromise","retina-ready","friendly","elegant","crisp","slender","consistent","fancy","nice","hip(ster)","cool","must-have","democratic","scannable","readable","enjoyable","lovely","effective","perfect","beautiful","ideal","slightly whimsical","victorious",'"#%§§##/&*!',"experimental","definitive","real","attractive","cozy","budget-friendly","trustworthy","poor man’s","real aesthete’s"],startDelay:1e3,typeSpeed:50,backSpeed:10,smartBackspace:!0,backDelay:1500,loop:!0,shuffle:!0};return new w.a(".property",e)}}},k=_,C=(a("07dd"),Object(h["a"])(k,m,p,!1,null,"1fa3037d",null)),x=C.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"window",class:{light:"dark"!==e.theme}},[a("div",{staticClass:"controls"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Not an actual window :P",placement:"top-start"}},[a("span",[a("div",{staticClass:"close"}),a("div",{staticClass:"min"}),a("div",{staticClass:"max"})])])],1),a("codemirror",{ref:"myCm",staticClass:"code",attrs:{value:e.code,options:e.cmOptions},on:{ready:e.onCmReady,focus:e.onCmFocus,input:e.onCmCodeChange}})],1),"dark"===e.theme?a("div",{staticClass:"right caption"},[e._v("\n    Based on\n    "),a("a",{attrs:{target:"_blank",href:"https://github.com/rubjo/ultimate-dark"}},[e._v("Ultimate Dark")]),e._v("\n    colour scheme\n    ("),a("a",{attrs:{target:"_blank",href:"https://packagecontrol.io/packages/Ultimate%20Dark"}},[e._v("Sublime Text 3 package")]),e._v(")\n  ")]):a("div",{staticClass:"right caption"},[e._v("\n    Based on\n    "),a("a",{attrs:{target:"_blank",href:"https://github.com/chriskempson/base16"}},[e._v("Base 16 Light")]),e._v("\n    colour scheme by Chris Kempson\n  ")])])},T=[],j=(a("693d"),a("e13c"),a("93d0"),a("31c5"),a("9948"),a("8c33"),a("7289"),"<template>\n  <div id=\"app\">\n    <h1>My App!</h1>\n    <MainView />\n  </div>\n  \x3c!-- A comment --\x3e\n</template>\n\n<script> /* eslint-disable */\n  import MainView from './components/MainView.vue'\n\n  export default {\n    components: {\n      MainView\n    },\n    methods: {\n      init () {\n        //    ABCDEFGHILJKLMNOPQRSTUVWXYZÆØÅÄÖ\n        //    abcdefghiljklmnopqrstuvwxyzæøåäö\n        //      1  2  3  4  5  6  7  8  9  0\n        //   .,-;:_!\"#$%&/|\\§(){}[]=?*+~^@€`´<>\n        //   ==>  ->  ==  ===  !==  !=  <-  <==\n\n        // An empty arrow function returns undefined\n        let empty = () => {}\n\n        const simple = a => a > 15 ? 15 : a \n        simple(16) // 15\n        simple(10) // 10\n\n        let max = (a, b) => a > b ? a : b\n\n        // Easy array filtering, mapping, ...\n        const arr = [5, 6, 13, 0, 1, 18, 23]\n        const sum = arr.reduce((a, b) => a + b) // 66\n        const even = arr.filter(v => v % 2 === 0) // [6, 0, 18]\n        const double = arr.map(v => v * 2) // [10, 12, 26, 0, 2, 36, 46]\n\n        // More concise promise chains\n        func().then(a => {\n          return new Promise((resolve, reject) => {\n            if (a !== 1) resolve()\n            else reject(new Error('This aint right'))\n          })\n        }).then(b => {\n          // ...\n        }).catch(err => {\n          handle(err)\n        })\n\n        // Parameterless arrow functions that are visually easier to parse\n        setTimeout(() => {\n          console.log('I happen sooner')\n          setTimeout(() => {\n            // deeper code\n            console.log('I happen later')\n          }, 1)\n        }, 1)\n      }\n    }\n  }\n<\/script>\n\n<style lang=\"scss\" scoped>\n  @import './global-variables.scss';\n\n  #app {\n    font-family: 'VictorMono', monospace;\n    line-height: 42;\n    color: $wild-gradient;\n  }\n\n  h1 { // Mwwhooahhaha, they'll never know what hit them\n    position: absolute;\n    top: 0;\n    right: -1000px;\n  }\n</style>\n"),S={name:"CodeView",props:{theme:{type:String,default:localStorage.getItem("theme")||"dark"}},data:function(){return{code:j,cmOptions:{mode:"text/x-vue",tabSize:2,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!0,line:!0,styleSelectedText:!0,matchBrackets:!0,showCursorWhenSelecting:!0,theme:"dark"===this.theme?"ultimate-dark":"base16-light"}}},watch:{theme:function(e,t){this.cm.setOption("theme","dark"===e?"ultimate-dark":"base16-light")}},mounted:function(){},methods:{onCmReady:function(e){this.cm=e,e.setSize("100%","100%")},onCmFocus:function(e){},onCmCodeChange:function(e){this.code=e}}},$=S,M=(a("2d69"),Object(h["a"])($,I,T,!1,null,"41e61df1",null)),O=M.exports,B=a("744c"),N=a("6bf6"),q={name:"Home",components:{NavBar:f,Header:x,CodeView:O,VueFaqAccordion:B["a"]},data:function(){return{showHeaderText:!1,showNav:!0,showGoToTop:!1,revealFaq:!1,theme:localStorage.getItem("theme")||"dark",faqItems:[{title:"The typeface is a bit light/heavy to my liking. Will you offer more weights in the future?",value:'<a href="https://paypal.me/runbjo" target="_blank">Maybe</a>.',category:"Design & features"},{title:"There’s a feature of the font that I don’t like. Could you change it?",value:"Probably not. You can always use a different font. 😛",category:"Design & features"},{title:"Will you add some stylistic variations, like a slashed zero, sharper brackets etc.?",value:'<a href="https://paypal.me/runbjo" target="_blank">I might</a>.',category:"Design & features"},{title:"Will you make a custom style generator, where one can pick the preferred stylistic alternatives and download the corresponding font files?",value:'Probably not. It depends on the reception and <a href="https://paypal.me/runbjo" target="_blank">donations</a>, as this is something I do in my spare time.',category:"Design & features"},{title:"Can I use the font for anything?",value:'Yes. If you\'d like to say thanks, you can <a href="https://paypal.me/runbjo" target="_blank">donate</a>.',category:"Usage"},{title:"How do I use it?",value:'1) <a href="#download">Download</a> the font<br>2) Unpack the ZIP<br>3) <a href="https://www.google.com/search?q=how+to+install+fonts" target="_blank">Install</a> the font',category:"Usage"},{title:"I found a bug. Where do I report it?",value:'Please <a href="https://github.com/rubjo/victor-mono/issues/new" target="_blank">open an issue</a>.',category:"Usage"},{title:"Since it’s called Victor Mono, will a Victor Sans or Serif be released in the future?",value:"Probably not.",category:"Other"},{title:"How does one simply make a font?",value:"Trial and error, some research, good software, patience and time.",category:"Other"},{title:"Why are you giving it away?",value:'I originally planned on selling it for some (smaller or much larger) sum, like others do. But I eventually decided against it: I couldn’t be bothered to set up hosting, payment, EULAs etc, nor do I have time for the level of support I feel should accompany a commercial product. This typeface isn’t meant to be the perfect font for anyone - I just made the one perfect for me. If you’re unemployed or struggle to make ends meet, download the font with a clear conscience. If you work in a corporate setting or are relatively well off, consider <a href="https://paypal.me/runbjo" target="_blank">supporting</a> the hours spent designing this font. If you want to and are able to donate anything: thank you!',category:"Other"},{title:"Did you know that the [insert typeface property here] violates some 500-year old font design convention?",value:"I might. If I did, I didn’t care, or I deliberately chose to go a different direction.",category:"Design & features"},{title:"The font is missing an obscure ligature symbol used for indicating an infinite loop in the language Goskell when writing in ancient Ghiscari. Would you be willing to add it?",value:'Not very likely, but <a href="https://paypal.me/runbjo" target="_blank">I might</a>.',category:"Design & features"}]}},computed:{specimenBanner:function(){return a("fbe2")("./specimen-"+this.theme+".png")}},mounted:function(){this.initScrollWatcher(),this.setHeaderHeight(),this.calculateHeaderText()},methods:{initScrollWatcher:function(){var e=this;function t(e,t){var a=Date.now();return function(){a+t-Date.now()<0&&(setTimeout(e,t),a=Date.now())}}["scroll","resize"].forEach(function(a){window.addEventListener(a,t(e.setHeaderHeight,250)),window.addEventListener(a,t(e.calculateHeaderText,250))})},setHeaderHeight:function(){var e=window.scrollY,t=this.$refs.header.$el.querySelector("h1"),a=parseInt(window.getComputedStyle(t).marginTop),n=t.offsetTop-a,o=this.$refs.header.$el.offsetHeight,r=o-n;if(e!==r){var s=this.$refs.header.$el.getBoundingClientRect().y;s!==r&&(this.$refs.header.$el.style.top=-1*r,Object(l["a"])({targets:this.$refs.header.$el,top:[s,-1*r],duration:100,easing:"easeInOutSine"})),this.$refs.header.$el.style.webkitPosition="sticky",this.$refs.header.$el.style.position="sticky",this.$refs.header.$el.style.position="-webkit-sticky",document.querySelector("body").style.paddingTop=0}else document.querySelector("body").style.paddingTop=o+"px",this.$refs.header.$el.style.webkitPosition="absolute",this.$refs.header.$el.style.position="absolute",this.$refs.header.$el.style.top=0},calculateHeaderText:function(){var e=window.scrollY,t=this.$refs.header.$el.querySelector("h1"),a=parseInt(window.getComputedStyle(t).marginTop),n=t.offsetTop-a,o=this.$refs.header.$el.offsetHeight,r=o-n;e>r?(this.showHeaderText=!1,this.showGoToTop=!0):(this.showHeaderText=!0,this.showGoToTop=!1);var s=t.getBoundingClientRect().top+a;this.showNav=window.scrollY<s||window.scrollY>r},celebrate:function(e){Object(N["confetti"])(e,{angle:90,spread:60,startVelocity:50,elementCount:250,dragFriction:.125,duration:3e3,stagger:2,width:"10px",height:"10px",colors:["#393939","#747369","#515151","#a09f93","#2b2b2b","#ffffff","#e2e0d7","#ff7a7f","#f99157","#dd99dd","#66aadd","#ffee66","#6699cc","#66ffdd","#99dd99","#99cc99","#ff332a","#66cccc","#d27b53","#f92672","#a6e22e","#967efb","#565656"]}),window.removeEventListener("focus",this.celebrate)},thanks:function(e){var t=this;window.open("https://paypal.me/runbjo"),setTimeout(function(){window.addEventListener("focus",t.celebrate(e.target))},1e3)}}},V=q,D=(a("5c0b"),Object(h["a"])(V,o,r,!1,null,null,null)),H=D.exports,P=a("c259"),A=a.n(P),F=(a("0c67"),a("450d"),a("299c")),E=a.n(F),G=(a("1951"),a("eedf")),W=a.n(G),L=(a("f4f9"),a("c2cc")),z=a.n(L),R=(a("7a0f"),a("0f6c")),U=a.n(R);a("e05f");n["default"].use(U.a),n["default"].use(z.a),n["default"].use(W.a),n["default"].use(E.a);var Y=a("8f94"),Q=a.n(Y);a("a7be");n["default"].config.productionTip=!1,n["default"].use(A.a,{container:"body",duration:5e3,easing:"ease",offset:-200,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),n["default"].use(Q.a),window.application=new n["default"]({render:function(e){return e(H)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),o=a.n(n);o.a},"5e27":function(e,t,a){},"67c7":function(e,t,a){},9276:function(e,t,a){e.exports=a.p+"media/headerbg.e563b557.webm"},"93d0":function(e,t,a){},b1f0:function(e,t,a){e.exports=a.p+"img/specimen-dark.8f237350.png"},c048:function(e,t,a){},e13c:function(e,t,a){},ee36:function(e,t,a){e.exports=a.p+"media/cycle.a1ef3438.mp4"},f2c0:function(e,t,a){e.exports=a.p+"media/headerbg.f86509b3.mp4"},fbe2:function(e,t,a){var n={"./specimen-dark.png":"b1f0","./specimen-light.png":"4d2d"};function o(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="fbe2"}});
//# sourceMappingURL=app.841bce1b.js.map