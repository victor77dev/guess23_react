webpackJsonp([3],{"./app/components/ProfileChip/index.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=o("./node_modules/react/index.js"),i=o.n(a),s=o("./node_modules/prop-types/index.js"),u=(o.n(s),o("./node_modules/@material-ui/core/styles/index.js")),d=(o.n(u),o("./node_modules/@material-ui/core/Typography/index.js")),c=o.n(d),p=o("./node_modules/@material-ui/core/Avatar/index.js"),m=o.n(p),f=o("./node_modules/@material-ui/core/Chip/index.js"),h=o.n(f),b=o("./node_modules/@material-ui/core/MenuItem/index.js"),v=o.n(b),y=o("./node_modules/@material-ui/core/Menu/index.js"),_=o.n(y),j=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var l=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&l)for(var i in l)void 0===o[i]&&(o[i]=l[i]);else o||(o=l||{});if(1===a)o.children=r;else if(a>1){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+3];o.children=s}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),x=function(e){return{welcomeDiv:{display:"flex",flexDirection:"column"},profileChip:{backgroundColor:e.palette.secondary.light},menu:{top:38},welcome:{margin:2*e.spacing.unit,marginBottom:e.spacing.unit},chip:{height:40,marginRight:"auto",marginLeft:"auto"},chipAvatar:{marginLeft:-10,height:40,width:40}}},C=function(e){var t=e.avatarStyle,o=e.onClick,n=e.user,r=n.username;return g(m.a,{onClick:o,className:t},void 0,r.substring(0,1).toUpperCase())},P=function(e){var t=e.user.username,o=e.user,n=e.classes;return g("div",{className:n.welcomeDiv},void 0,g(c.a,{variant:"display1",className:n.welcome},void 0,"Welcome!"),g(h.a,{avatar:g(C,{avatarStyle:n.chipAvatar,user:o}),label:t,className:n.chip}))},E=function(e){function t(){var e,o,l,a;n(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return o=l=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l.state={anchorEl:null},l.handleMenuClick=function(e){l.setState({anchorEl:e.currentTarget})},l.handleMenuClose=function(){l.setState({anchorEl:null})},l.goToLogout=l.props.goToPath.bind(l,"/logout"),a=o,r(l,a)}return l(t,e),j(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=this.props,o=t.user,n=t.classes,r=g(P,{user:o,classes:n});return g("div",{},void 0,g(C,{avatarStyle:n.profileChip,onClick:this.handleMenuClick,user:o}),g(_.a,{anchorEl:e,open:Boolean(e),onClose:this.handleMenuClose,className:n.menu},void 0,g(v.a,{disabled:!0,component:function(){return r}},void 0),g(v.a,{onClick:this.handleMenuClose},void 0,"My account"),g(v.a,{onClick:this.goToLogout},void 0,"Logout")))}}]),t}(i.a.PureComponent);t.default=Object(u.withStyles)(x)(E)},"./node_modules/@material-ui/core/Avatar/Avatar.js":function(e,t,o){"use strict";function n(e){var t=e.alt,o=e.children,n=e.childrenClassName,r=e.classes,d=e.className,c=e.component,p=e.imgProps,m=e.sizes,f=e.src,h=e.srcSet,b=(0,i.default)(e,["alt","children","childrenClassName","classes","className","component","imgProps","sizes","src","srcSet"]),v=(0,u.default)(r.root,(0,a.default)({},r.colorDefault,o&&!f&&!h),d),y=null;if(f||h)y=s.default.createElement("img",(0,l.default)({alt:t,src:f,srcSet:h,sizes:m,className:r.img},p));else if(n&&s.default.isValidElement(o)){var _=(0,u.default)(n,o.props.className);y=s.default.cloneElement(o,{className:_})}else y=o;return s.default.createElement(c,(0,l.default)({className:v},b),y)}var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=r(o("./node_modules/react/index.js")),u=(r(o("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),r(o("./node_modules/classnames/index.js"))),d=r(o("./node_modules/@material-ui/core/styles/withStyles.js")),c=function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover"}}};t.styles=c,n.propTypes={},n.defaultProps={component:"div"};var p=(0,d.default)(c,{name:"MuiAvatar"})(n);t.default=p},"./node_modules/@material-ui/core/Avatar/index.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("./node_modules/@material-ui/core/Avatar/Avatar.js"))},"./node_modules/@material-ui/core/Chip/Chip.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/extends.js")),l=n(o("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),u=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),p=n(o("./node_modules/react/index.js")),m=(n(o("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),n(o("./node_modules/classnames/index.js"))),f=n(o("./node_modules/keycode/index.js")),h=n(o("./node_modules/@material-ui/core/internal/svg-icons/Cancel.js")),b=n(o("./node_modules/@material-ui/core/styles/withStyles.js")),v=o("./node_modules/@material-ui/core/styles/colorManipulator.js"),y=(n(o("./node_modules/@material-ui/core/utils/unsupportedProp.js")),o("./node_modules/@material-ui/core/utils/helpers.js"));o("./node_modules/@material-ui/core/Avatar/Avatar.js");var _=function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],o=(0,v.fade)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:"none",textDecoration:"none",border:"none",padding:0},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},clickable:{WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,v.emphasize)(t,.08)},"&:active":{boxShadow:e.shadows[1],backgroundColor:(0,v.emphasize)(t,.12)}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,v.emphasize)(e.palette.primary.main,.08)},"&:active":{backgroundColor:(0,v.emphasize)(e.palette.primary.main,.12)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,v.emphasize)(e.palette.secondary.main,.08)},"&:active":{backgroundColor:(0,v.emphasize)(e.palette.secondary.main,.12)}},deletable:{"&:focus":{backgroundColor:(0,v.emphasize)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,v.emphasize)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,v.emphasize)(e.palette.secondary.main,.2)}},avatar:{marginRight:-4,width:32,height:32,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(16)},avatarColorPrimary:{color:(0,v.darken)(e.palette.primary.contrastText,.1),backgroundColor:e.palette.primary.dark},avatarColorSecondary:{color:(0,v.darken)(e.palette.secondary.contrastText,.1),backgroundColor:e.palette.secondary.dark},avatarChildren:{width:19,height:19},label:{display:"flex",alignItems:"center",paddingLeft:12,paddingRight:12,userSelect:"none",whiteSpace:"nowrap",cursor:"inherit"},deleteIcon:{WebkitTapHighlightColor:"transparent",color:o,cursor:"pointer",height:"auto",margin:"0 4px 0 -8px","&:hover":{color:(0,v.fade)(o,.4)}},deleteIconColorPrimary:{color:(0,v.fade)(e.palette.primary.contrastText,.65),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,v.fade)(e.palette.primary.contrastText,.65),"&:hover, &:active":{color:e.palette.primary.contrastText}}}};t.styles=_;var j=function(e){function t(){var e,o;(0,i.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return o=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(r))),o.chipRef=null,o.handleDeleteIconClick=function(e){e.stopPropagation();var t=o.props.onDelete;t&&t(e)},o.handleKeyDown=function(e){if(e.currentTarget===e.target){var t=o.props,n=t.onClick,r=t.onDelete,l=t.onKeyDown,a=(0,f.default)(e);!n||"space"!==a&&"enter"!==a?r&&"backspace"===a?(e.preventDefault(),r(e)):"esc"===a&&(e.preventDefault(),o.chipRef&&o.chipRef.blur()):(e.preventDefault(),n(e)),l&&l(e)}},o}return(0,c.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.avatar,n=t.classes,i=t.className,s=t.clickable,u=t.color,d=t.component,c=t.deleteIcon,f=t.label,b=t.onClick,v=t.onDelete,_=(t.onKeyDown,t.tabIndex),j=(0,a.default)(t,["avatar","classes","className","clickable","color","component","deleteIcon","label","onClick","onDelete","onKeyDown","tabIndex"]),g=(0,m.default)(n.root,(0,l.default)({},n["color".concat((0,y.capitalize)(u))],"default"!==u),(0,l.default)({},n.clickable,b||s),(0,l.default)({},n["clickableColor".concat((0,y.capitalize)(u))],(b||s)&&"default"!==u),(0,l.default)({},n.deletable,v),(0,l.default)({},n["deletableColor".concat((0,y.capitalize)(u))],v&&"default"!==u),i),x=null;v&&(x=c&&p.default.isValidElement(c)?p.default.cloneElement(c,{className:(0,m.default)(c.props.className,n.deleteIcon,(0,l.default)({},n["deleteIconColor".concat((0,y.capitalize)(u))],"default"!==u)),onClick:this.handleDeleteIconClick}):p.default.createElement(h.default,{className:(0,m.default)(n.deleteIcon,(0,l.default)({},n["deleteIconColor".concat((0,y.capitalize)(u))],"default"!==u)),onClick:this.handleDeleteIconClick}));var C=null;o&&p.default.isValidElement(o)&&(C=p.default.cloneElement(o,{className:(0,m.default)(n.avatar,o.props.className,(0,l.default)({},n["avatarColor".concat((0,y.capitalize)(u))],"default"!==u)),childrenClassName:(0,m.default)(n.avatarChildren,o.props.childrenClassName)}));var P=_;return P||(P=b||v||s?0:-1),p.default.createElement(d,(0,r.default)({role:"button",className:g,tabIndex:P,onClick:b,onKeyDown:this.handleKeyDown,ref:function(t){e.chipRef=t}},j),C,p.default.createElement("span",{className:n.label},f),x)}}]),t}(p.default.Component);j.propTypes={},j.defaultProps={clickable:!1,component:"div",color:"default"};var g=(0,b.default)(_,{name:"MuiChip"})(j);t.default=g},"./node_modules/@material-ui/core/Chip/index.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("./node_modules/@material-ui/core/Chip/Chip.js"))},"./node_modules/@material-ui/core/Grow/Grow.js":function(e,t,o){"use strict";function n(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),u=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),p=r(o("./node_modules/react/index.js")),m=(r(o("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),r(o("./node_modules/react-transition-group/Transition.js"))),f=r(o("./node_modules/@material-ui/core/styles/withTheme.js")),h=o("./node_modules/@material-ui/core/transitions/utils.js"),b={entering:{opacity:1,transform:n(1)},entered:{opacity:1,transform:"".concat(n(1)," translateZ(0)")}},v=function(e){function t(){var e,o;(0,i.default)(this,t);for(var r=arguments.length,l=new Array(r),a=0;a<r;a++)l[a]=arguments[a];return o=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(l))),o.autoTimeout=null,o.timer=null,o.handleEnter=function(e){var t=o.props,n=t.theme,r=t.timeout;(0,h.reflow)(e);var l=(0,h.getTransitionProps)(o.props,{mode:"enter"}),a=l.duration,i=l.delay,s=0;"auto"===r?(s=n.transitions.getAutoHeightDuration(e.clientHeight),o.autoTimeout=s):s=a,e.style.transition=[n.transitions.create("opacity",{duration:s,delay:i}),n.transitions.create("transform",{duration:.666*s,delay:i})].join(","),o.props.onEnter&&o.props.onEnter(e)},o.handleExit=function(e){var t=o.props,r=t.theme,l=t.timeout,a=0,i=(0,h.getTransitionProps)(o.props,{mode:"exit"}),s=i.duration,u=i.delay;"auto"===l?(a=r.transitions.getAutoHeightDuration(e.clientHeight),o.autoTimeout=a):a=s,e.style.transition=[r.transitions.create("opacity",{duration:a,delay:u}),r.transitions.create("transform",{duration:.666*a,delay:u||.333*a})].join(","),e.style.opacity="0",e.style.transform=n(.75),o.props.onExit&&o.props.onExit(e)},o.addEndListener=function(e,t){"auto"===o.props.timeout&&(o.timer=setTimeout(t,o.autoTimeout||0))},o}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.children,o=(e.onEnter,e.onExit,e.style),r=(e.theme,e.timeout),i=(0,a.default)(e,["children","onEnter","onExit","style","theme","timeout"]),s=(0,l.default)({},o,p.default.isValidElement(t)?t.props.style:{});return p.default.createElement(m.default,(0,l.default)({appear:!0,onEnter:this.handleEnter,onExit:this.handleExit,addEndListener:this.addEndListener,timeout:"auto"===r?null:r},i),function(e,o){return p.default.cloneElement(t,(0,l.default)({style:(0,l.default)({opacity:0,transform:n(.75)},b[e],s)},o))})}}]),t}(p.default.Component);v.propTypes={},v.defaultProps={timeout:"auto"},v.muiSupportAuto=!0;var y=(0,f.default)()(v);t.default=y},"./node_modules/@material-ui/core/Grow/index.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("./node_modules/@material-ui/core/Grow/Grow.js"))},"./node_modules/@material-ui/core/Menu/Menu.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/extends.js")),l=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),s=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),c=n(o("./node_modules/react/index.js")),p=(n(o("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),n(o("./node_modules/react-dom/index.js"))),m=n(o("./node_modules/dom-helpers/util/scrollbarSize.js")),f=n(o("./node_modules/@material-ui/core/styles/withStyles.js")),h=n(o("./node_modules/@material-ui/core/Popover/index.js")),b=n(o("./node_modules/@material-ui/core/MenuList/index.js")),v={vertical:"top",horizontal:"right"},y={vertical:"top",horizontal:"left"},_={paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}};t.styles=_;var j=function(e){function t(){var e,o;(0,a.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return o=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(r))),o.menuListRef=null,o.getContentAnchorEl=function(){return o.menuListRef&&o.menuListRef.selectedItemRef?p.default.findDOMNode(o.menuListRef.selectedItemRef):p.default.findDOMNode(o.menuListRef).firstChild},o.focus=function(){if(o.menuListRef&&o.menuListRef.selectedItemRef)return void p.default.findDOMNode(o.menuListRef.selectedItemRef).focus();var e=p.default.findDOMNode(o.menuListRef);e&&e.firstChild&&e.firstChild.focus()},o.handleEnter=function(e){var t=o.props,n=t.disableAutoFocusItem,r=t.theme,l=p.default.findDOMNode(o.menuListRef);if(!0!==n&&o.focus(),l&&e.clientHeight<l.clientHeight&&!l.style.width){var a="".concat((0,m.default)(),"px");l.style["rtl"===r.direction?"paddingLeft":"paddingRight"]=a,l.style.width="calc(100% + ".concat(a,")")}o.props.onEnter&&o.props.onEnter(e)},o.handleListKeyDown=function(e,t){"tab"===t&&(e.preventDefault(),o.props.onClose&&o.props.onClose(e))},o}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.open&&!0!==this.props.disableAutoFocusItem&&this.focus()}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,n=t.classes,a=(t.disableAutoFocusItem,t.MenuListProps),i=(t.onEnter,t.PaperProps),s=void 0===i?{}:i,u=t.PopoverClasses,d=t.theme,p=(0,l.default)(t,["children","classes","disableAutoFocusItem","MenuListProps","onEnter","PaperProps","PopoverClasses","theme"]);return c.default.createElement(h.default,(0,r.default)({getContentAnchorEl:this.getContentAnchorEl,classes:u,onEnter:this.handleEnter,anchorOrigin:"rtl"===d.direction?v:y,transformOrigin:"rtl"===d.direction?v:y,PaperProps:(0,r.default)({},s,{classes:(0,r.default)({},s.classes,{root:n.paper})})},p),c.default.createElement(b.default,(0,r.default)({onKeyDown:this.handleListKeyDown},a,{ref:function(t){e.menuListRef=t}}),o))}}]),t}(c.default.Component);j.propTypes={},j.defaultProps={disableAutoFocusItem:!1,transitionDuration:"auto"};var g=(0,f.default)(_,{name:"MuiMenu",withTheme:!0})(j);t.default=g},"./node_modules/@material-ui/core/Menu/index.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("./node_modules/@material-ui/core/Menu/Menu.js"))},"./node_modules/@material-ui/core/MenuItem/MenuItem.js":function(e,t,o){"use strict";function n(e){var t=e.classes,o=e.className,n=e.component,r=e.selected,d=e.role,p=(0,a.default)(e,["classes","className","component","selected","role"]);return s.default.createElement(c.default,(0,i.default)({button:!0,role:d,tabIndex:-1,className:(0,u.default)(t.root,(0,l.default)({},t.selected,r),o),component:n},p))}var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var l=r(o("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=r(o("./node_modules/react/index.js")),u=(r(o("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),r(o("./node_modules/classnames/index.js"))),d=r(o("./node_modules/@material-ui/core/styles/withStyles.js")),c=r(o("./node_modules/@material-ui/core/ListItem/index.js")),p=function(e){return{root:(0,i.default)({},e.typography.subheading,{height:24,boxSizing:"content-box",width:"auto",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingLeft:16,paddingRight:16,"&$selected":{backgroundColor:e.palette.action.selected}}),selected:{}}};t.styles=p,n.propTypes={},n.defaultProps={component:"li",role:"menuitem",selected:!1};var m=(0,d.default)(p,{name:"MuiMenuItem"})(n);t.default=m},"./node_modules/@material-ui/core/MenuItem/index.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("./node_modules/@material-ui/core/MenuItem/MenuItem.js"))},"./node_modules/@material-ui/core/MenuList/MenuList.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/extends.js")),l=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),s=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),c=n(o("./node_modules/react/index.js")),p=(n(o("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),n(o("./node_modules/react-dom/index.js"))),m=n(o("./node_modules/keycode/index.js")),f=(n(o("./node_modules/@material-ui/core/node_modules/warning/warning.js")),n(o("./node_modules/@material-ui/core/utils/ownerDocument.js"))),h=n(o("./node_modules/@material-ui/core/List/index.js")),b=function(e){function t(){var e,o;(0,a.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return o=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(r))),o.listRef=null,o.selectedItemRef=null,o.blurTimer=null,o.state={currentTabIndex:null},o.handleBlur=function(e){o.blurTimer=setTimeout(function(){if(o.listRef){var e=o.listRef,t=(0,f.default)(e).activeElement;e.contains(t)||o.resetTabIndex()}},30),o.props.onBlur&&o.props.onBlur(e)},o.handleKeyDown=function(e){var t=o.listRef,n=(0,m.default)(e),r=(0,f.default)(t).activeElement;"up"!==n&&"down"!==n||r&&(!r||t.contains(r))?"down"===n?(e.preventDefault(),r.nextElementSibling&&r.nextElementSibling.focus()):"up"===n&&(e.preventDefault(),r.previousElementSibling&&r.previousElementSibling.focus()):o.selectedItemRef?o.selectedItemRef.focus():t.firstChild.focus(),o.props.onKeyDown&&o.props.onKeyDown(e,n)},o.handleItemFocus=function(e){var t=o.listRef;if(t)for(var n=0;n<t.children.length;n+=1)if(t.children[n]===e.currentTarget){o.setTabIndex(n);break}},o}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.resetTabIndex()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.blurTimer)}},{key:"setTabIndex",value:function(e){this.setState({currentTabIndex:e})}},{key:"focus",value:function(){var e=this.state.currentTabIndex,t=this.listRef;t&&t.children&&t.firstChild&&(e&&e>=0?t.children[e].focus():t.firstChild.focus())}},{key:"resetTabIndex",value:function(){for(var e=this.listRef,t=(0,f.default)(e).activeElement,o=[],n=0;n<e.children.length;n+=1)o.push(e.children[n]);var r=o.indexOf(t);return-1!==r?this.setTabIndex(r):this.selectedItemRef?this.setTabIndex(o.indexOf(this.selectedItemRef)):this.setTabIndex(0)}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,n=t.className,a=(t.onBlur,t.onKeyDown,(0,l.default)(t,["children","className","onBlur","onKeyDown"]));return c.default.createElement(h.default,(0,r.default)({role:"menu",ref:function(t){e.listRef=p.default.findDOMNode(t)},className:n,onKeyDown:this.handleKeyDown,onBlur:this.handleBlur},a),c.default.Children.map(o,function(t,o){return c.default.isValidElement(t)?c.default.cloneElement(t,{tabIndex:o===e.state.currentTabIndex?0:-1,ref:t.props.selected?function(t){e.selectedItemRef=p.default.findDOMNode(t)}:void 0,onFocus:e.handleItemFocus}):null}))}}]),t}(c.default.Component);b.propTypes={};var v=b;t.default=v},"./node_modules/@material-ui/core/MenuList/index.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("./node_modules/@material-ui/core/MenuList/MenuList.js"))},"./node_modules/@material-ui/core/Popover/Popover.js":function(e,t,o){"use strict";function n(e,t){var o=0;return"number"==typeof t?o=t:"center"===t?o=e.height/2:"bottom"===t&&(o=e.height),o}function r(e,t){var o=0;return"number"==typeof t?o=t:"center"===t?o=e.width/2:"right"===t&&(o=e.width),o}function l(e){return[e.horizontal,e.vertical].map(function(e){return"number"==typeof e?"".concat(e,"px"):e}).join(" ")}function a(e,t){for(var o=t,n=0;o&&o!==e;)o=o.parentNode,n+=o.scrollTop;return n}function i(e){return"function"==typeof e?e():e}var s=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var u=s(o("./node_modules/@babel/runtime/helpers/extends.js")),d=s(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),c=s(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),p=s(o("./node_modules/@babel/runtime/helpers/createClass.js")),m=s(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),f=s(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),h=s(o("./node_modules/@babel/runtime/helpers/inherits.js")),b=s(o("./node_modules/react/index.js")),v=(s(o("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),s(o("./node_modules/react-dom/index.js"))),y=(s(o("./node_modules/@material-ui/core/node_modules/warning/warning.js")),s(o("./node_modules/debounce/index.js"))),_=s(o("./node_modules/react-event-listener/dist/react-event-listener.cjs.js")),j=s(o("./node_modules/@material-ui/core/utils/ownerDocument.js")),g=s(o("./node_modules/@material-ui/core/utils/ownerWindow.js")),x=s(o("./node_modules/@material-ui/core/styles/withStyles.js")),C=s(o("./node_modules/@material-ui/core/Modal/index.js")),P=s(o("./node_modules/@material-ui/core/Grow/index.js")),E=s(o("./node_modules/@material-ui/core/Paper/index.js")),w={paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:"none"}};t.styles=w;var R=function(e){function t(){var e,o;(0,c.default)(this,t);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return o=(0,m.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(s))),o.paperRef=null,o.handleGetOffsetTop=n,o.handleGetOffsetLeft=r,o.handleResize=(0,y.default)(function(){o.setPositioningStyles(o.paperRef)},166),o.componentWillUnmount=function(){o.handleResize.clear()},o.setPositioningStyles=function(e){if(e&&e.style){var t=o.getPositioningStyle(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}},o.getPositioningStyle=function(e){var t=o.props,n=t.anchorEl,r=t.anchorReference,a=t.marginThreshold,s=o.getContentAnchorOffset(e),u={width:e.clientWidth,height:e.clientHeight},d=o.getTransformOrigin(u,s);if("none"===r)return{top:null,left:null,transformOrigin:l(d)};var c=o.getAnchorOffset(s),p=c.top-d.vertical,m=c.left-d.horizontal,f=p+u.height,h=m+u.width,b=(0,g.default)(i(n)),v=b.innerHeight-a,y=b.innerWidth-a;if(p<a){var _=p-a;p-=_,d.vertical+=_}else if(f>v){var j=f-v;p-=j,d.vertical+=j}if(m<a){var x=m-a;m-=x,d.horizontal+=x}else if(h>y){var C=h-y;m-=C,d.horizontal+=C}return{top:"".concat(p,"px"),left:"".concat(m,"px"),transformOrigin:l(d)}},o.handleEnter=function(e){o.props.onEnter&&o.props.onEnter(e),o.setPositioningStyles(e)},o}return(0,h.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){this.props.action&&this.props.action({updatePosition:this.handleResize})}},{key:"getAnchorOffset",value:function(e){var t=this.props,o=t.anchorEl,n=t.anchorOrigin,r=t.anchorReference,l=t.anchorPosition;if("anchorPosition"===r)return l;var a=i(o)||(0,j.default)(this.paperRef).body,s=a.getBoundingClientRect(),u=0===e?n.vertical:"center";return{top:s.top+this.handleGetOffsetTop(s,u),left:s.left+this.handleGetOffsetLeft(s,n.horizontal)}}},{key:"getContentAnchorOffset",value:function(e){var t=this.props,o=t.getContentAnchorEl,n=t.anchorReference,r=0;if(o&&"anchorEl"===n){var l=o(e);if(l&&e.contains(l)){var i=a(e,l);r=l.offsetTop+l.clientHeight/2-i||0}}return r}},{key:"getTransformOrigin",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=this.props.transformOrigin;return{vertical:this.handleGetOffsetTop(e,o.vertical)+t,horizontal:this.handleGetOffsetLeft(e,o.horizontal)}}},{key:"render",value:function(){var e=this,t=this.props,o=(t.action,t.anchorEl),n=(t.anchorOrigin,t.anchorPosition,t.anchorReference,t.children),r=t.classes,l=t.container,a=t.elevation,s=(t.getContentAnchorEl,t.marginThreshold,t.ModalClasses),c=(t.onEnter,t.onEntered),p=t.onEntering,m=t.onExit,f=t.onExited,h=t.onExiting,y=t.open,g=t.PaperProps,x=t.role,P=(t.transformOrigin,t.TransitionComponent),w=t.transitionDuration,R=t.TransitionProps,O=(0,d.default)(t,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","container","elevation","getContentAnchorEl","marginThreshold","ModalClasses","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","role","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),k=w;"auto"!==w||P.muiSupportAuto||(k=void 0);var D=l||(o?(0,j.default)(i(o)).body:void 0);return b.default.createElement(C.default,(0,u.default)({classes:s,container:D,open:y,BackdropProps:{invisible:!0}},O),b.default.createElement(P,(0,u.default)({appear:!0,in:y,onEnter:this.handleEnter,onEntered:c,onEntering:p,onExit:m,onExited:f,onExiting:h,role:x,timeout:k},R),b.default.createElement(E.default,(0,u.default)({className:r.paper,elevation:a,ref:function(t){e.paperRef=v.default.findDOMNode(t)}},g),b.default.createElement(_.default,{target:"window",onResize:this.handleResize}),n)))}}]),t}(b.default.Component);R.propTypes={},R.defaultProps={anchorReference:"anchorEl",anchorOrigin:{vertical:"top",horizontal:"left"},elevation:8,marginThreshold:16,transformOrigin:{vertical:"top",horizontal:"left"},TransitionComponent:P.default,transitionDuration:"auto"};var O=(0,x.default)(w,{name:"MuiPopover"})(R);t.default=O},"./node_modules/@material-ui/core/Popover/index.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(o("./node_modules/@material-ui/core/Popover/Popover.js"))},"./node_modules/@material-ui/core/internal/svg-icons/Cancel.js":function(e,t,o){"use strict";var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/react/index.js")),l=n(o("./node_modules/recompose/pure.js")),a=n(o("./node_modules/@material-ui/core/SvgIcon/index.js")),i=r.default.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),s=function(e){return r.default.createElement(a.default,e,i)};s=(0,l.default)(s),s.muiName="SvgIcon";var u=s;t.default=u},"./node_modules/@material-ui/core/utils/unsupportedProp.js":function(e,t,o){"use strict";function n(e,t,o,n,r){return null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n;t.default=r},"./node_modules/recompose/node_modules/@babel/runtime/helpers/inheritsLoose.js":function(e,t){function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}e.exports=o},"./node_modules/recompose/pure.js":function(e,t,o){"use strict";var n=o("./node_modules/recompose/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/recompose/shouldUpdate.js")),l=n(o("./node_modules/recompose/shallowEqual.js")),a=(n(o("./node_modules/recompose/setDisplayName.js")),n(o("./node_modules/recompose/wrapDisplayName.js")),function(e){var t=(0,r.default)(function(e,t){return!(0,l.default)(e,t)});return t(e)}),i=a;t.default=i},"./node_modules/recompose/setDisplayName.js":function(e,t,o){"use strict";var n=o("./node_modules/recompose/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/recompose/setStatic.js")),l=function(e){return(0,r.default)("displayName",e)},a=l;t.default=a},"./node_modules/recompose/setStatic.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){return function(o){return o[e]=t,o}},r=n;t.default=r},"./node_modules/recompose/shallowEqual.js":function(e,t,o){"use strict";var n=o("./node_modules/recompose/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/fbjs/lib/shallowEqual.js")),l=r.default;t.default=l},"./node_modules/recompose/shouldUpdate.js":function(e,t,o){"use strict";var n=o("./node_modules/recompose/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/recompose/node_modules/@babel/runtime/helpers/inheritsLoose.js")),l=o("./node_modules/react/index.js"),a=(n(o("./node_modules/recompose/setDisplayName.js")),n(o("./node_modules/recompose/wrapDisplayName.js")),function(e){return function(t){var o=(0,l.createFactory)(t),n=function(t){function n(){return t.apply(this,arguments)||this}(0,r.default)(n,t);var l=n.prototype;return l.shouldComponentUpdate=function(t){return e(this.props,t)},l.render=function(){return o(this.props)},n}(l.Component);return n}}),i=a;t.default=i}});