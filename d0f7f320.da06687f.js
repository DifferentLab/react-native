(window.webpackJsonp=window.webpackJsonp||[]).push([[758],{1010:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,j=d["".concat(b,".").concat(u)]||d[u]||O[u]||l;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},830:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),l=(a(0),a(1010)),b={id:"picker",title:"\ud83d\udea7 Picker"},c={unversionedId:"picker",id:"version-0.62/picker",isDocsHomePage:!1,title:"\ud83d\udea7 Picker",description:"Deprecated. Use @react-native-community/picker instead.",source:"@site/versioned_docs/version-0.62/picker.md",slug:"/picker",permalink:"/docs/0.62/picker",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/picker.md",version:"0.62",lastUpdatedAt:1603973073},i=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>itemStyle</code>",id:"itemstyle",children:[]},{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>prompt</code>",id:"prompt",children:[]},{value:"<code>selectedValue</code>",id:"selectedvalue",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>testID</code>",id:"testid",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-picker/react-native-picker"}),"@react-native-community/picker")," instead.")),Object(l.b)("p",null,"Renders the native picker component on Android and iOS."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"picker","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20Picker%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%5BselectedValue%2C%20setSelectedValue%5D%20%3D%20useState(%22java%22)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CPicker%0A%20%20%20%20%20%20%20%20selectedValue%3D%7BselectedValue%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%20height%3A%2050%2C%20width%3A%20150%20%7D%7D%0A%20%20%20%20%20%20%20%20onValueChange%3D%7B(itemValue%2C%20itemIndex)%20%3D%3E%20setSelectedValue(itemValue)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CPicker.Item%20label%3D%22Java%22%20value%3D%22java%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPicker.Item%20label%3D%22JavaScript%22%20value%3D%22js%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FPicker%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20paddingTop%3A%2040%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.62/view#props"}),"View Props"),"."),Object(l.b)("h3",{id:"enabled"},Object(l.b)("inlineCode",{parentName:"h3"},"enabled")),Object(l.b)("p",null,"If set to false, the picker will be disabled, i.e. the user will not be able to make a selection."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"itemstyle"},Object(l.b)("inlineCode",{parentName:"h3"},"itemStyle")),Object(l.b)("p",null,"Style to apply to each of the item labels."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.62/text-style-props"}),"text styles")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"mode"},Object(l.b)("inlineCode",{parentName:"h3"},"mode")),Object(l.b)("p",null,"On Android, specifies how to display the selection items when the user taps on the picker:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'dialog': Show a modal dialog. This is the default."),Object(l.b)("li",{parentName:"ul"},"'dropdown': Shows a dropdown anchored to the picker view")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('dialog', 'dropdown')"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onvaluechange"},Object(l.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(l.b)("p",null,"Callback for when an item is selected. This is called with the following parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"itemValue"),": the ",Object(l.b)("inlineCode",{parentName:"li"},"value")," prop of the item that was selected"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"itemPosition"),": the index of the selected item in this picker")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"prompt"},Object(l.b)("inlineCode",{parentName:"h3"},"prompt")),Object(l.b)("p",null,"Prompt string for this picker, used on Android in dialog mode as the title of the dialog."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"selectedvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"selectedValue")),Object(l.b)("p",null,"Value matching value of one of the items. Can be a string or an integer."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"style"},Object(l.b)("inlineCode",{parentName:"h3"},"style")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pickerStyleType"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h3"},"testID")),Object(l.b)("p",null,"Used to locate this view in end-to-end tests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}p.isMDXComponent=!0}}]);