(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1010:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var o=b.a.createContext({}),O=function(t){var e=b.a.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},p=function(t){var e=O(t.components);return b.a.createElement(o.Provider,{value:e},t.children)},j={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},s=b.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),p=O(a),s=n,d=p["".concat(l,".").concat(s)]||p[s]||j[s]||r;return a?b.a.createElement(d,c(c({ref:e},o),{},{components:a})):b.a.createElement(d,c({ref:e},o))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,l=new Array(r);l[0]=s;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var o=2;o<r;o++)l[o]=a[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},185:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return O}));var n=a(2),b=a(7),r=(a(0),a(1010)),l={id:"statusbar",title:"StatusBar"},c={unversionedId:"statusbar",id:"version-0.62/statusbar",isDocsHomePage:!1,title:"StatusBar",description:"Component to control the app status bar.",source:"@site/versioned_docs/version-0.62/statusbar.md",slug:"/statusbar",permalink:"/docs/0.62/statusbar",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/statusbar.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/components",previous:{title:"SectionList",permalink:"/docs/0.62/sectionlist"},next:{title:"Switch",permalink:"/docs/0.62/switch"}},i=[{value:"Usage with Navigator",id:"usage-with-navigator",children:[]},{value:"Imperative API",id:"imperative-api",children:[]},{value:"Constants",id:"constants",children:[]},{value:"Props",id:"props",children:[{value:"<code>animated</code>",id:"animated",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>barStyle</code>",id:"barstyle",children:[]},{value:"<code>hidden</code>",id:"hidden",children:[]},{value:"<code>networkActivityIndicatorVisible</code>",id:"networkactivityindicatorvisible",children:[]},{value:"<code>showHideTransition</code>",id:"showhidetransition",children:[]},{value:"<code>translucent</code>",id:"translucent",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>popStackEntry()</code>",id:"popstackentry",children:[]},{value:"<code>pushStackEntry()</code>",id:"pushstackentry",children:[]},{value:"<code>replaceStackEntry()</code>",id:"replacestackentry",children:[]},{value:"<code>setBackgroundColor()</code>",id:"setbackgroundcolor",children:[]},{value:"<code>setBarStyle()</code>",id:"setbarstyle",children:[]},{value:"<code>setHidden()</code>",id:"sethidden",children:[]},{value:"<code>setNetworkActivityIndicatorVisible()</code>",id:"setnetworkactivityindicatorvisible",children:[]},{value:"<code>setTranslucent()</code>",id:"settranslucent",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"StatusBarAnimation",id:"statusbaranimation",children:[]},{value:"StatusBarStyle",id:"statusbarstyle",children:[]}]}],o={rightToc:i};function O(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Component to control the app status bar."),Object(r.b)("h3",{id:"usage-with-navigator"},"Usage with Navigator"),Object(r.b)("p",null,"It is possible to have multiple ",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar")," components mounted at the same time. The props will be merged in the order the ",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar")," components were mounted."),Object(r.b)("div",{className:"snack-player","data-snack-name":"StatusBar Android and iOS Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20StyleSheet%2C%20StatusBar%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20styleTypes%20%3D%20%5B'default'%2C'dark-content'%2C%20'light-content'%5D%3B%0A%20%20const%20%5BvisibleStatusBar%2C%20setVisibleStatusBar%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BstyleStatusBar%2C%20setStyleStatusBar%5D%20%3D%20useState(styleTypes%5B0%5D)%3B%0A%0A%20%20const%20changeVisibilityStatusBar%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setVisibleStatusBar(!visibleStatusBar)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20changeStyleStatusBar%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20styleId%20%3D%20styleTypes.indexOf(styleStatusBar)%20%2B%201%3B%0A%0A%20%20%20%20if(styleId%20%3D%3D%3D%20styleTypes.length)%7B%0A%20%20%20%20%20%20return%20setStyleStatusBar(styleTypes%5B0%5D)%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20setStyleStatusBar(styleTypes%5BstyleId%5D)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EStatusBar%20Style%3A%20%7BstyleStatusBar%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EStatusBar%20Visibility%3A%20%7B!visibleStatusBar%20%3F%20'Visible'%3A%20'Hidden'%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CStatusBar%20backgroundColor%3D%22blue%22%20barStyle%3D%7BstyleStatusBar%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CStatusBar%20hidden%3D%7BvisibleStatusBar%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20StatusBar%22%20onPress%3D%7B()%20%3D%3E%20changeVisibilityStatusBar()%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Change%20StatusBar%20Style%22%20onPress%3D%7B()%20%3D%3E%20changeStyleStatusBar()%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20'%23ECF0F1'%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%7B%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20textStyle%3A%7B%0A%20%20%20%20textAlign%3A%20'center'%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("h3",{id:"imperative-api"},"Imperative API"),Object(r.b)("p",null,"For cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overridden by the one set by the component in the next render."),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"constants"},"Constants"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"currentHeight")," (Android only) The height of the status bar."),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"animated"},Object(r.b)("inlineCode",{parentName:"h3"},"animated")),Object(r.b)("p",null,"If the transition between status bar property changes should be animated. Supported for backgroundColor, barStyle and hidden."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"backgroundcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(r.b)("p",null,"The background color of the status bar."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.62/colors"}),"color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"barstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"barStyle")),Object(r.b)("p",null,"Sets the color of the status bar text."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('default', 'light-content', 'dark-content')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hidden"},Object(r.b)("inlineCode",{parentName:"h3"},"hidden")),Object(r.b)("p",null,"If the status bar is hidden."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"networkactivityindicatorvisible"},Object(r.b)("inlineCode",{parentName:"h3"},"networkActivityIndicatorVisible")),Object(r.b)("p",null,"If the network activity indicator should be visible."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showhidetransition"},Object(r.b)("inlineCode",{parentName:"h3"},"showHideTransition")),Object(r.b)("p",null,"The transition effect when showing and hiding the status bar using the ",Object(r.b)("inlineCode",{parentName:"p"},"hidden")," prop. Defaults to 'fade'."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('fade', 'slide')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"translucent"},Object(r.b)("inlineCode",{parentName:"h3"},"translucent")),Object(r.b)("p",null,"If the status bar is translucent. When translucent is set to true, the app will draw under the status bar. This is useful when using a semi transparent status bar color."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"popstackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"popStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static popStackEntry(entry: any)\n")),Object(r.b)("p",null,"Get and remove the last StatusBar entry from the stack."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"entry"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Entry returned from ",Object(r.b)("inlineCode",{parentName:"td"},"pushStackEntry"),".")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"pushstackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"pushStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static pushStackEntry(props: any)\n")),Object(r.b)("p",null,"Push a StatusBar entry onto the stack. The return value should be passed to ",Object(r.b)("inlineCode",{parentName:"p"},"popStackEntry")," when complete."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"props"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the stack entry.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"replacestackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"replaceStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static replaceStackEntry(entry: any, props: any)\n")),Object(r.b)("p",null,"Replace an existing StatusBar stack entry with new props."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"entry"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Entry returned from ",Object(r.b)("inlineCode",{parentName:"td"},"pushStackEntry")," to replace.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"props"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the replacement stack entry.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setbackgroundcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"setBackgroundColor()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setBackgroundColor(color: string, [animated]: boolean)\n")),Object(r.b)("p",null,"Set the background color for the status bar. Android-only"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Background color.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animate the style change.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setbarstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"setBarStyle()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setBarStyle(style: StatusBarStyle, [animated]: boolean)\n")),Object(r.b)("p",null,"Set the status bar style"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"style"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.62/statusbar#statusbarstyle"}),"StatusBarStyle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status bar style to set")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animate the style change.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sethidden"},Object(r.b)("inlineCode",{parentName:"h3"},"setHidden()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setHidden(hidden: boolean, [animation]: StatusBarAnimation)\n")),Object(r.b)("p",null,"Show or hide the status bar"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hidden"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hide the status bar.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.62/statusbar#statusbaranimation"}),"StatusBarAnimation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional animation when changing the status bar hidden property.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setnetworkactivityindicatorvisible"},Object(r.b)("inlineCode",{parentName:"h3"},"setNetworkActivityIndicatorVisible()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setNetworkActivityIndicatorVisible(visible: boolean)\n")),Object(r.b)("p",null,"Control the visibility of the network activity indicator. iOS-only."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visible"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show the indicator.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"settranslucent"},Object(r.b)("inlineCode",{parentName:"h3"},"setTranslucent()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setTranslucent(translucent: boolean)\n")),Object(r.b)("p",null,"Control the translucency of the status bar. Android-only."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"translucent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set as translucent.")))),Object(r.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(r.b)("h3",{id:"statusbaranimation"},"StatusBarAnimation"),Object(r.b)("p",null,"Status bar animation"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constants:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No animation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fade"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fade animation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"slide"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Slide animation")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"statusbarstyle"},"StatusBarStyle"),Object(r.b)("p",null,"Status bar style"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constants:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default status bar style (dark for iOS, light for Android)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"light-content"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dark background, white texts and icons")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dark-content"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Light background, dark texts and icons (requires API>=23 on Android)")))))}O.isMDXComponent=!0}}]);