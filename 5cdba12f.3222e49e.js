(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{1010:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=a,u=d["".concat(r,".").concat(b)]||d[b]||m[b]||o;return n?i.a.createElement(u,l(l({ref:t},c),{},{components:n})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},439:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(7),o=(n(0),n(1010)),r={id:"animations",title:"Animations"},l={unversionedId:"animations",id:"version-0.61/animations",isDocsHomePage:!1,title:"Animations",description:"Animations are very important to create a great user experience. Stationary objects must overcome inertia as they start moving. Objects in motion have momentum and rarely come to a stop immediately. Animations allow you to convey physically believable motion in your interface.",source:"@site/versioned_docs/version-0.61/animations.md",slug:"/animations",permalink:"/docs/0.61/animations",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/animations.md",version:"0.61",lastUpdatedAt:1604577351,sidebar:"version-0.61/docs",previous:{title:"Images",permalink:"/docs/0.61/images"},next:{title:"Accessibility",permalink:"/docs/0.61/accessibility"}},s=[{value:"<code>Animated</code> API",id:"animated-api",children:[{value:"Configuring animations",id:"configuring-animations",children:[]},{value:"Composing animations",id:"composing-animations",children:[]},{value:"Combining animated values",id:"combining-animated-values",children:[]},{value:"Interpolation",id:"interpolation",children:[]},{value:"Tracking dynamic values",id:"tracking-dynamic-values",children:[]},{value:"Tracking gestures",id:"tracking-gestures",children:[]},{value:"Responding to the current animation value",id:"responding-to-the-current-animation-value",children:[]},{value:"Using the native driver",id:"using-the-native-driver",children:[]},{value:"Bear in mind",id:"bear-in-mind",children:[]},{value:"Additional examples",id:"additional-examples",children:[]}]},{value:"<code>LayoutAnimation</code> API",id:"layoutanimation-api",children:[]},{value:"Additional notes",id:"additional-notes",children:[{value:"<code>requestAnimationFrame</code>",id:"requestanimationframe",children:[]},{value:"<code>setNativeProps</code>",id:"setnativeprops",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Animations are very important to create a great user experience. Stationary objects must overcome inertia as they start moving. Objects in motion have momentum and rarely come to a stop immediately. Animations allow you to convey physically believable motion in your interface."),Object(o.b)("p",null,"React Native provides two complementary animation systems: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animations#animated-api"}),Object(o.b)("inlineCode",{parentName:"a"},"Animated"))," for granular and interactive control of specific values, and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animations#layoutanimation-api"}),Object(o.b)("inlineCode",{parentName:"a"},"LayoutAnimation"))," for animated global layout transactions."),Object(o.b)("h2",{id:"animated-api"},Object(o.b)("inlineCode",{parentName:"h2"},"Animated")," API"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animated"}),Object(o.b)("inlineCode",{parentName:"a"},"Animated"))," API is designed to concisely express a wide variety of interesting animation and interaction patterns in a very performant way. ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and ",Object(o.b)("inlineCode",{parentName:"p"},"start"),"/",Object(o.b)("inlineCode",{parentName:"p"},"stop")," methods to control time-based animation execution."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Animated")," exports six animatable component types: ",Object(o.b)("inlineCode",{parentName:"p"},"View"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Text"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Image"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ScrollView"),", ",Object(o.b)("inlineCode",{parentName:"p"},"FlatList")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SectionList"),", but you can also create your own using ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.createAnimatedComponent()"),"."),Object(o.b)("p",null,"For example, a container view that fades in when it is mounted may look like this:"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Animated%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20FadeInView%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20const%20%5BfadeAnim%5D%20%3D%20useState(new%20Animated.Value(0))%20%20%2F%2F%20Initial%20value%20for%20opacity%3A%200%0A%0A%20%20React.useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20Animated.timing(%0A%20%20%20%20%20%20fadeAnim%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20toValue%3A%201%2C%0A%20%20%20%20%20%20%20%20duration%3A%2010000%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20).start()%3B%0A%20%20%7D%2C%20%5B%5D)%0A%0A%20%20return%20(%0A%20%20%20%20%3CAnimated.View%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Special%20animatable%20View%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20...props.style%2C%0A%20%20%20%20%20%20%20%20opacity%3A%20fadeAnim%2C%20%20%20%20%20%20%20%20%20%2F%2F%20Bind%20opacity%20to%20animated%20value%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%7Bprops.children%7D%0A%20%20%20%20%3C%2FAnimated.View%3E%0A%20%20)%3B%0A%7D%0A%0A%2F%2F%20You%20can%20then%20use%20your%20%60FadeInView%60%20in%20place%20of%20a%20%60View%60%20in%20your%20components%3A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20alignItems%3A%20'center'%2C%20justifyContent%3A%20'center'%7D%7D%3E%0A%20%20%20%20%20%20%3CFadeInView%20style%3D%7B%7Bwidth%3A%20250%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BfontSize%3A%2028%2C%20textAlign%3A%20'center'%2C%20margin%3A%2010%7D%7D%3EFading%20in%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FFadeInView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"Let's break down what's happening here. In the ",Object(o.b)("inlineCode",{parentName:"p"},"FadeInView")," constructor, a new ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Value")," called ",Object(o.b)("inlineCode",{parentName:"p"},"fadeAnim")," is initialized as part of ",Object(o.b)("inlineCode",{parentName:"p"},"state"),". The opacity property on the ",Object(o.b)("inlineCode",{parentName:"p"},"View")," is mapped to this animated value. Behind the scenes, the numeric value is extracted and used to set opacity."),Object(o.b)("p",null,"When the component mounts, the opacity is set to 0. Then, an easing animation is started on the ",Object(o.b)("inlineCode",{parentName:"p"},"fadeAnim")," animated value, which will update all of its dependent mappings (in this case, only the opacity) on each frame as the value animates to the final value of 1."),Object(o.b)("p",null,"This is done in an optimized way that is faster than calling ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," and re-rendering. Because the entire configuration is declarative, we will be able to implement further optimizations that serialize the configuration and runs the animation on a high-priority thread."),Object(o.b)("h3",{id:"configuring-animations"},"Configuring animations"),Object(o.b)("p",null,"Animations are heavily configurable. Custom and predefined easing functions, delays, durations, decay factors, spring constants, and more can all be tweaked depending on the type of animation."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Animated")," provides several animation types, the most commonly used one being ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animated#timing"}),Object(o.b)("inlineCode",{parentName:"a"},"Animated.timing()")),". It supports animating a value over time using one of various predefined easing functions, or you can use your own. Easing functions are typically used in animation to convey gradual acceleration and deceleration of objects."),Object(o.b)("p",null,"By default, ",Object(o.b)("inlineCode",{parentName:"p"},"timing")," will use a easeInOut curve that conveys gradual acceleration to full speed and concludes by gradually decelerating to a stop. You can specify a different easing function by passing a ",Object(o.b)("inlineCode",{parentName:"p"},"easing")," parameter. Custom ",Object(o.b)("inlineCode",{parentName:"p"},"duration")," or even a ",Object(o.b)("inlineCode",{parentName:"p"},"delay")," before the animation starts is also supported."),Object(o.b)("p",null,"For example, if we want to create a 2-second long animation of an object that slightly backs up before moving to its final position:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"Animated.timing(this.state.xPosition, {\n  toValue: 100,\n  easing: Easing.back(),\n  duration: 2000\n}).start();\n")),Object(o.b)("p",null,"Take a look at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animated#configuring-animations"}),"Configuring animations")," section of the ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," API reference to learn more about all the config parameters supported by the built-in animations."),Object(o.b)("h3",{id:"composing-animations"},"Composing animations"),Object(o.b)("p",null,"Animations can be combined and played in sequence or in parallel. Sequential animations can play immediately after the previous animation has finished, or they can start after a specified delay. The ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," API provides several methods, such as ",Object(o.b)("inlineCode",{parentName:"p"},"sequence()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"delay()"),", each of which take an array of animations to execute and automatically calls ",Object(o.b)("inlineCode",{parentName:"p"},"start()"),"/",Object(o.b)("inlineCode",{parentName:"p"},"stop()")," as needed."),Object(o.b)("p",null,"For example, the following animation coasts to a stop, then it springs back while twirling in parallel:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"Animated.sequence([\n  // decay, then spring to start and twirl\n  Animated.decay(position, {\n    // coast to a stop\n    velocity: { x: gestureState.vx, y: gestureState.vy }, // velocity from gesture release\n    deceleration: 0.997\n  }),\n  Animated.parallel([\n    // after decay, in parallel:\n    Animated.spring(position, {\n      toValue: { x: 0, y: 0 } // return to start\n    }),\n    Animated.timing(twirl, {\n      // and twirl\n      toValue: 360\n    })\n  ])\n]).start(); // start the sequence group\n")),Object(o.b)("p",null,"If one animation is stopped or interrupted, then all other animations in the group are also stopped. ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.parallel")," has a ",Object(o.b)("inlineCode",{parentName:"p"},"stopTogether")," option that can be set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," to disable this."),Object(o.b)("p",null,"You can find a full list of composition methods in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animated#composing-animations"}),"Composing animations")," section of the ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," API reference."),Object(o.b)("h3",{id:"combining-animated-values"},"Combining animated values"),Object(o.b)("p",null,"You can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animated#combining-animated-values"}),"combine two animated values")," via addition, multiplication, division, or modulo to make a new animated value."),Object(o.b)("p",null,"There are some cases where an animated value needs to invert another animated value for calculation. An example is inverting a scale (2x --\x3e 0.5x):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const a = new Animated.Value(1);\nconst b = Animated.divide(1, a);\n\nAnimated.spring(a, {\n  toValue: 2\n}).start();\n")),Object(o.b)("h3",{id:"interpolation"},"Interpolation"),Object(o.b)("p",null,"Each property can be run through an interpolation first. An interpolation maps input ranges to output ranges, typically using a linear interpolation but also supports easing functions. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value."),Object(o.b)("p",null,"A mapping to convert a 0-1 range to a 0-100 range would be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"value.interpolate({\n  inputRange: [0, 1],\n  outputRange: [0, 100]\n});\n")),Object(o.b)("p",null,"For example, you may want to think about your ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Value")," as going from 0 to 1, but animate the position from 150px to 0px and the opacity from 0 to 1. This can be done by modifying ",Object(o.b)("inlineCode",{parentName:"p"},"style")," from the example above like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"  style={{\n    opacity: this.state.fadeAnim, // Binds directly\n    transform: [{\n      translateY: this.state.fadeAnim.interpolate({\n        inputRange: [0, 1],\n        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0\n      }),\n    }],\n  }}\n")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animated#interpolate"}),Object(o.b)("inlineCode",{parentName:"a"},"interpolate()"))," supports multiple range segments as well, which is handy for defining dead zones and other handy tricks. For example, to get a negation relationship at -300 that goes to 0 at -100, then back up to 1 at 0, and then back down to zero at 100 followed by a dead-zone that remains at 0 for everything beyond that, you could do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"value.interpolate({\n  inputRange: [-300, -100, 0, 100, 101],\n  outputRange: [300, 0, 1, 0, 0]\n});\n")),Object(o.b)("p",null,"Which would map like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Input | Output\n------|-------\n  -400|    450\n  -300|    300\n  -200|    150\n  -100|      0\n   -50|    0.5\n     0|      1\n    50|    0.5\n   100|      0\n   101|      0\n   200|      0\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"interpolate()")," also supports mapping to strings, allowing you to animate colors as well as values with units. For example, if you wanted to animate a rotation you could do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"value.interpolate({\n  inputRange: [0, 360],\n  outputRange: ['0deg', '360deg']\n});\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"interpolate()")," also supports arbitrary easing functions, many of which are already implemented in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/easing"}),Object(o.b)("inlineCode",{parentName:"a"},"Easing"))," module. ",Object(o.b)("inlineCode",{parentName:"p"},"interpolate()")," also has configurable behavior for extrapolating the ",Object(o.b)("inlineCode",{parentName:"p"},"outputRange"),". You can set the extrapolation by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"extrapolate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"extrapolateLeft"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"extrapolateRight")," options. The default value is ",Object(o.b)("inlineCode",{parentName:"p"},"extend")," but you can use ",Object(o.b)("inlineCode",{parentName:"p"},"clamp")," to prevent the output value from exceeding ",Object(o.b)("inlineCode",{parentName:"p"},"outputRange"),"."),Object(o.b)("h3",{id:"tracking-dynamic-values"},"Tracking dynamic values"),Object(o.b)("p",null,"Animated values can also track other values. Set the ",Object(o.b)("inlineCode",{parentName:"p"},"toValue"),' of an animation to another animated value instead of a plain number. For example, a "Chat Heads" animation like the one used by Messenger on Android could be implemented with a ',Object(o.b)("inlineCode",{parentName:"p"},"spring()")," pinned on another animated value, or with ",Object(o.b)("inlineCode",{parentName:"p"},"timing()")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"duration")," of 0 for rigid tracking. They can also be composed with interpolations:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"Animated.spring(follower, { toValue: leader }).start();\nAnimated.timing(opacity, {\n  toValue: pan.x.interpolate({\n    inputRange: [0, 300],\n    outputRange: [1, 0]\n  })\n}).start();\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"leader")," and ",Object(o.b)("inlineCode",{parentName:"p"},"follower")," animated values would be implemented using ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.ValueXY()"),". ",Object(o.b)("inlineCode",{parentName:"p"},"ValueXY")," is a handy way to deal with 2D interactions, such as panning or dragging. It is a wrapper that contains two ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Value")," instances and some helper functions that call through to them, making ",Object(o.b)("inlineCode",{parentName:"p"},"ValueXY")," a drop-in replacement for ",Object(o.b)("inlineCode",{parentName:"p"},"Value")," in many cases. It allows us to track both x and y values in the example above."),Object(o.b)("h3",{id:"tracking-gestures"},"Tracking gestures"),Object(o.b)("p",null,"Gestures, like panning or scrolling, and other events can map directly to animated values using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animated#event"}),Object(o.b)("inlineCode",{parentName:"a"},"Animated.event")),". This is done with a structured map syntax so that values can be extracted from complex event objects. The first level is an array to allow mapping across multiple args, and that array contains nested objects."),Object(o.b)("p",null,"For example, when working with horizontal scrolling gestures, you would do the following in order to map ",Object(o.b)("inlineCode",{parentName:"p"},"event.nativeEvent.contentOffset.x")," to ",Object(o.b)("inlineCode",{parentName:"p"},"scrollX")," (an ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Value"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"})," onScroll={Animated.event(\n   // scrollX = e.nativeEvent.contentOffset.x\n   [{ nativeEvent: {\n        contentOffset: {\n          x: scrollX\n        }\n      }\n    }]\n )}\n")),Object(o.b)("p",null,"When using ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder"),", you could use the following code to extract the x and y positions from ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState.dx")," and ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState.dy"),". We use a ",Object(o.b)("inlineCode",{parentName:"p"},"null")," in the first position of the array, as we are only interested in the second argument passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," handler, which is the ",Object(o.b)("inlineCode",{parentName:"p"},"gestureState"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"onPanResponderMove={Animated.event(\n  [null, // ignore the native event\n  // extract dx and dy from gestureState\n  // like 'pan.x = gestureState.dx, pan.y = gestureState.dy'\n  {dx: pan.x, dy: pan.y}\n])}\n")),Object(o.b)("h3",{id:"responding-to-the-current-animation-value"},"Responding to the current animation value"),Object(o.b)("p",null,"You may notice that there is no clear way to read the current value while animating. This is because the value may only be known in the native runtime due to optimizations. If you need to run JavaScript in response to the current value, there are two approaches:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"spring.stopAnimation(callback)")," will stop the animation and invoke ",Object(o.b)("inlineCode",{parentName:"li"},"callback")," with the final value. This is useful when making gesture transitions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"spring.addListener(callback)")," will invoke ",Object(o.b)("inlineCode",{parentName:"li"},"callback")," asynchronously while the animation is running, providing a recent value. This is useful for triggering state changes, for example snapping a bobble to a new option as the user drags it closer, because these larger state changes are less sensitive to a few frames of lag compared to continuous gestures like panning which need to run at 60 fps.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Animated")," is designed to be fully serializable so that animations can be run in a high performance way, independent of the normal JavaScript event loop. This does influence the API, so keep that in mind when it seems a little trickier to do something compared to a fully synchronous system. Check out ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Value.addListener")," as a way to work around some of these limitations, but use it sparingly since it might have performance implications in the future."),Object(o.b)("h3",{id:"using-the-native-driver"},"Using the native driver"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," API is designed to be serializable. By using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/blog/2017/02/14/using-native-driver-for-animated"}),"native driver"),", we send everything about the animation to native before starting the animation, allowing native code to perform the animation on the UI thread without having to go through the bridge on every frame. Once the animation has started, the JS thread can be blocked without affecting the animation."),Object(o.b)("p",null,"To use the native driver for normal animations add ",Object(o.b)("inlineCode",{parentName:"p"},"useNativeDriver: true")," to the animation config when starting it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"Animated.timing(this.state.animatedValue, {\n  toValue: 1,\n  duration: 500,\n  useNativeDriver: true // <-- Add this\n}).start();\n")),Object(o.b)("p",null,"Animated values are only compatible with one driver so if you use native driver when starting an animation on a value, make sure every animation on that value also uses the native driver."),Object(o.b)("p",null,"The native driver also works with ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.event"),". This is especially useful for animations that follow the scroll position as without the native driver, the animation will always run a frame behind the gesture due to the async nature of React Native."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Animated.ScrollView // <-- Use the Animated ScrollView wrapper\n  scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed\n  onScroll={Animated.event(\n    [\n      {\n        nativeEvent: {\n          contentOffset: { y: this.state.animatedValue }\n        }\n      }\n    ],\n    { useNativeDriver: true } // <-- Add this\n  )}>\n  {content}\n</Animated.ScrollView>\n")),Object(o.b)("p",null,"You can see the native driver in action by running the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/tree/master/packages/rn-tester/"}),"RNTester app"),", then loading the Native Animated Example. You can also take a look at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/NativeAnimation/NativeAnimationsExample.js"}),"source code")," to learn how these examples were produced."),Object(o.b)("h4",{id:"caveats"},"Caveats"),Object(o.b)("p",null,"Not everything you can do with ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," is currently supported by the native driver. The main limitation is that you can only animate non-layout properties: things like ",Object(o.b)("inlineCode",{parentName:"p"},"transform")," and ",Object(o.b)("inlineCode",{parentName:"p"},"opacity")," will work, but flexbox and position properties will not. When using ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.event"),", it will only work with direct events and not bubbling events. This means it does not work with ",Object(o.b)("inlineCode",{parentName:"p"},"PanResponder")," but does work with things like ",Object(o.b)("inlineCode",{parentName:"p"},"ScrollView#onScroll"),"."),Object(o.b)("p",null,"When an animation is running, it can prevent ",Object(o.b)("inlineCode",{parentName:"p"},"VirtualizedList")," components from rendering more rows. If you need to run a long or looping animation while the user is scrolling through a list, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"isInteraction: false")," in your animation's config to prevent this issue."),Object(o.b)("h3",{id:"bear-in-mind"},"Bear in mind"),Object(o.b)("p",null,"While using transform styles such as ",Object(o.b)("inlineCode",{parentName:"p"},"rotateY"),", ",Object(o.b)("inlineCode",{parentName:"p"},"rotateX"),", and others ensure the transform style ",Object(o.b)("inlineCode",{parentName:"p"},"perspective")," is in place. At this time some animations may not render on Android without it. Example below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Animated.View\n  style={{\n    transform: [\n      { scale: this.state.scale },\n      { rotateY: this.state.rotateY },\n      { perspective: 1000 } // without this line this Animation will not render on Android while working fine on iOS\n    ]\n  }}\n/>\n")),Object(o.b)("h3",{id:"additional-examples"},"Additional examples"),Object(o.b)("p",null,"The RNTester app has various examples of ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," in use:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/tree/master/packages/rn-tester/js/examples/Animated/AnimatedGratuitousApp"}),"AnimatedGratuitousApp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/NativeAnimation/NativeAnimationsExample.js"}),"NativeAnimationsExample"))),Object(o.b)("h2",{id:"layoutanimation-api"},Object(o.b)("inlineCode",{parentName:"h2"},"LayoutAnimation")," API"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"LayoutAnimation")," allows you to globally configure ",Object(o.b)("inlineCode",{parentName:"p"},"create")," and ",Object(o.b)("inlineCode",{parentName:"p"},"update"),' animations that will be used for all views in the next render/layout cycle. This is useful for doing flexbox layout updates without bothering to measure or calculate specific properties in order to animate them directly, and is especially useful when layout changes may affect ancestors, for example a "see more" expansion that also increases the size of the parent and pushes down the row below which would otherwise require explicit coordination between the components in order to animate them all in sync.'),Object(o.b)("p",null,"Note that although ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutAnimation")," is very powerful and can be quite useful, it provides much less control than ",Object(o.b)("inlineCode",{parentName:"p"},"Animated")," and other animation libraries, so you may need to use another approach if you can't get ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutAnimation")," to do what you want."),Object(o.b)("p",null,"Note that in order to get this to work on ",Object(o.b)("strong",{parentName:"p"},"Android")," you need to set the following flags via ",Object(o.b)("inlineCode",{parentName:"p"},"UIManager"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"UIManager.setLayoutAnimationEnabledExperimental &&\n  UIManager.setLayoutAnimationEnabledExperimental(true);\n")),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NativeModules%2C%0A%20%20LayoutAnimation%2C%0A%20%20Text%2C%0A%20%20TouchableOpacity%2C%0A%20%20StyleSheet%2C%0A%20%20View%2C%0A%7D%20from%20'react-native'%3B%0A%0Aconst%20%7B%20UIManager%20%7D%20%3D%20NativeModules%3B%0A%0AUIManager.setLayoutAnimationEnabledExperimental%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%0Aexport%20default%20class%20App%20extends%20React.Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20w%3A%20100%2C%0A%20%20%20%20h%3A%20100%2C%0A%20%20%7D%3B%0A%0A%20%20_onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Animate%20the%20update%0A%20%20%20%20LayoutAnimation.spring()%3B%0A%20%20%20%20this.setState(%7Bw%3A%20this.state.w%20%2B%2015%2C%20h%3A%20this.state.h%20%2B%2015%7D)%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.box%2C%20%7Bwidth%3A%20this.state.w%2C%20height%3A%20this.state.h%7D%5D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7Bthis._onPress%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3EPress%20me!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20width%3A%20200%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20backgroundColor%3A%20'red'%2C%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20'black'%2C%0A%20%20%20%20paddingHorizontal%3A%2020%2C%0A%20%20%20%20paddingVertical%3A%2015%2C%0A%20%20%20%20marginTop%3A%2015%2C%0A%20%20%7D%2C%0A%20%20buttonText%3A%20%7B%0A%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%7D%2C%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"This example uses a preset value, you can customize the animations as you need, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js"}),"LayoutAnimation.js")," for more information."),Object(o.b)("h2",{id:"additional-notes"},"Additional notes"),Object(o.b)("h3",{id:"requestanimationframe"},Object(o.b)("inlineCode",{parentName:"h3"},"requestAnimationFrame")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"requestAnimationFrame")," is a polyfill from the browser that you might be familiar with. It accepts a function as its only argument and calls that function before the next repaint. It is an essential building block for animations that underlies all of the JavaScript-based animation APIs. In general, you shouldn't need to call this yourself - the animation APIs will manage frame updates for you."),Object(o.b)("h3",{id:"setnativeprops"},Object(o.b)("inlineCode",{parentName:"h3"},"setNativeProps")),Object(o.b)("p",null,"As mentioned ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/direct-manipulation"}),"in the Direct Manipulation section"),", ",Object(o.b)("inlineCode",{parentName:"p"},"setNativeProps")," allows us to modify properties of native-backed components (components that are actually backed by native views, unlike composite components) directly, without having to ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," and re-render the component hierarchy."),Object(o.b)("p",null,"We could use this in the Rebound example to update the scale - this might be helpful if the component that we are updating is deeply nested and hasn't been optimized with ",Object(o.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"."),Object(o.b)("p",null,"If you find your animations with dropping frames (performing below 60 frames per second), look into using ",Object(o.b)("inlineCode",{parentName:"p"},"setNativeProps")," or ",Object(o.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," to optimize them. Or you could run the animations on the UI thread rather than the JavaScript thread ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/blog/2017/02/14/using-native-driver-for-animated"}),"with the useNativeDriver option"),". You may also want to defer any computationally intensive work until after animations are complete, using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/interactionmanager"}),"InteractionManager"),'. You can monitor the frame rate by using the In-App Developer Menu "FPS Monitor" tool.'))}p.isMDXComponent=!0}}]);