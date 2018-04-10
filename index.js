module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=u(i),o=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={hidden:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,i.Component),r(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.divId;(0,this.context.activate)(t,function(){return e.setState({hidden:!0})})}},{key:"render",value:function(){return this.state.hidden?null:a.default.createElement(e,this.props)}}]),n}();return t.contextTypes={activate:o.default.func.isRequired},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AdvertisingSlotDiv=o;var r=a(n(1)),i=a(n(2));a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.id,n=e.style,i=e.className,a=e.children;return r.default.createElement("div",{id:t,style:n,className:i,children:a})}t.default=(0,i.default)(o)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),a=(r=i)&&r.__esModule?r:{default:r};t.default=a.default.shape({divId:a.default.string.isRequired,targeting:a.default.object,sizes:a.default.arrayOf(a.default.oneOfType([a.default.string,a.default.arrayOf(a.default.number)])).isRequired,prebid:a.default.arrayOf(a.default.shape({sizes:a.default.arrayOf(a.default.arrayOf(a.default.number)).isRequired,bids:a.default.arrayOf(a.default.shape({bidder:a.default.string.isRequired,params:a.default.object}))})).isRequired})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),i=a(n(4));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.shape({metaData:r.default.shape({adUnitPath:r.default.shape({path:r.default.string.isRequired}).isRequired,boardMakeAndModels:r.default.arrayOf(r.default.shape({make:r.default.string.isRequired,models:r.default.arrayOf(r.default.string).isRequired})),loggedIn:r.default.bool,usdToEurRate:r.default.number.isRequired}),prebid:r.default.shape({timeout:r.default.number}),sizeMappings:r.default.objectOf(r.default.arrayOf(r.default.shape({viewPortSize:r.default.arrayOf(r.default.number).isRequired,sizes:r.default.arrayOf(r.default.arrayOf(r.default.number)).isRequired}))),slot:r.default.objectOf(i.default)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e,t){if(e){var n=t&&t[e];if(n)return n.map(function(e){return{minWidth:r(e.viewPortSize,1)[0],sizes:e.sizes}}).sort(function(e,t){return t.minWidth-e.minWidth})}return null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(6),a=(r=i)&&r.__esModule?r:{default:r};t.default=function(e,t){return Object.values(e).reduce(function(e,n){return e.concat(n.prebid.map(function(e){var r={code:n.divId,sizes:e.sizes,bids:e.bids},i=(0,a.default)(n.sizeMappingName,t);return i&&(r.sizeMapping=i),r}))},[])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(7),u=(r=o)&&r.__esModule?r:{default:r};function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(i,a){try{var o=t[i](a),u=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}("next")})}}var l=Symbol("define GTP size mappings (private method)"),f=Symbol("get GPT size mapping (private method)"),c=Symbol("define slots (private method)"),d=Symbol("display slots (private method)"),p=Symbol("setup Prebid (private method)"),v=Symbol("teardown Prebid (private method)"),h=Symbol("setup GPT (private method)"),g=Symbol("teardown GPT (private method)"),b=Symbol("setup collapse empty advertising slots (private method)"),y=Symbol("teardown collapse empty advertising slots (private method)"),m=Symbol("collapse empty advertising slots (private method)"),O=Symbol("with queue (private method)"),_=Symbol("queue for GPT (private method)"),j=Symbol("queue for Prebid (private method)"),k=Symbol("remove background (private method)"),w=Symbol("set default config (private method)"),P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.slots={},this.gptSizeMappings={},this.collapseCallbacks={},this.queue=[]}return a(e,[{key:"setup",value:function(){var t=s(regeneratorRuntime.mark(function t(){var n,r,i,a,o,u,s,l,f,c,d,v,g,y;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this[w](),n=this.slots,r=this.config.prebid.timeout,i=this.collapseCallbacks,a=this.queue,this[b](),t.next=5,Promise.all([e[j](this[p].bind(this)),e[_](this[h].bind(this))]);case 5:if(0!==a.length){t.next=7;break}return t.abrupt("return");case 7:for(o=!0,u=!1,s=void 0,t.prev=10,l=a[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)c=f.value,d=c.divId,v=c.collapse,i[d]=v;t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),u=!0,s=t.t0;case 18:t.prev=18,t.prev=19,!o&&l.return&&l.return();case 21:if(t.prev=21,!u){t.next=24;break}throw s;case 24:return t.finish(21);case 25:return t.finish(18);case 26:g=a.map(function(e){return e.divId}),y=a.map(function(e){var t=e.divId;return n[t]}),e[j](function(){return pbjs.requestBids({timeout:r,adUnitCodes:g,bidsBackHandler:function(){pbjs.setTargetingForGPTAsync(g),e[_](function(){googletag.pubads().refresh(y),g.forEach(e[k])})}})});case 29:case"end":return t.stop()}},t,this,[[10,14,18,26],[19,,21,25]])}));return function(){return t.apply(this,arguments)}}()},{key:"teardown",value:function(){var t=s(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this[y](),t.next=3,Promise.all([e[j](this[v].bind(this)),e[_](this[g].bind(this))]);case 3:this.slots={},this.gptSizeMappings={},this.collapseCallbacks={},this.queue={};case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"activate",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=this.slots,i=this.config.prebid.timeout,a=this.collapseCallbacks;0!==Object.values(r).length?(a[t]=n,e[j](function(){return pbjs.requestBids({timeout:i,adUnitCodes:[t],bidsBackHandler:function(){pbjs.setTargetingForGPTAsync([t]),e[_](function(){googletag.pubads().refresh([r[t]]),e[k](t)})}})})):this.queue.push({divId:t,collapse:n})}},{key:b,value:function(){var e=this.collapseCallbacks;this[m]=function(t){var n=t.data;if("string"==typeof n&&n.startsWith("CloseAdvContainer:")){var r="div-gpt-ad-"+n.replace(/^CloseAdvContainer:/,""),i=e[r];i&&i()}},window.addEventListener("message",this[m])}},{key:y,value:function(){window.removeEventListener("message",this[m])}},{key:l,value:function(){var e=this;this.config.sizeMappings&&Object.keys(this.config.sizeMappings).forEach(function(t){var n=googletag.sizeMapping();e.config.sizeMappings[t].forEach(function(e){var t=e.viewPortSize,r=e.sizes;return n.addSize(t,r)}),e.gptSizeMappings[t]=n.build()})}},{key:f,value:function(e){return e&&this.gptSizeMappings[e]?this.gptSizeMappings[e]:null}},{key:c,value:function(){var e=this;Object.values(this.config.slot).forEach(function(t){var n=t.divId,r=t.targeting,a=void 0===r?{}:r,o=t.sizes,u=t.sizeMappingName,s=t.adUnitPath,l=t.collapseEmptyDiv,c=googletag.defineSlot(s||e.config.metaData.adUnitPath.path,o,n),d=e[f](u);d&&c.defineSizeMapping(d),l&&l.length&&l.length>0&&c.setCollapseEmptyDiv.apply(c,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(l)),Object.entries(a).forEach(function(e){var t=i(e,2),n=t[0],r=t[1];return c.setTargeting(n,r)}),c.addService(googletag.pubads()),e.slots[n]=c})}},{key:d,value:function(){Object.values(this.config.slot).forEach(function(e){var t=e.divId;return googletag.display(t)})}},{key:p,value:function(){pbjs.addAdUnits((0,u.default)(this.config.slot,this.config.sizeMappings)),pbjs.setPriceGranularity("medium"),pbjs.setBidderSequence("random");var e=this.config.metaData.usdToEurRate;pbjs.bidderSettings={appnexus:{bidCpmAdjustment:function(t){return t*e}},rubicon:{bidCpmAdjustment:function(t){return t*e*.93}}}}},{key:v,value:function(){(0,u.default)(this.config.slot,this.config.sizeMappings).forEach(function(e){var t=e.code;return pbjs.removeAdUnit(t)})}},{key:h,value:function(){var e=googletag.pubads(),t=this.config,n=t.metaData,r=t.placementTestId;this[l](),this[c](),void 0!==n.loggedIn&&e.setTargeting("mt-u4",n.loggedIn),void 0!==n.threadId&&e.setTargeting("mt-thread",[n.threadId]),e.setTargeting("mt-ab","test"),n.boardMakeAndModels&&n.boardMakeAndModels.length>0&&e.setTargeting("mt-ma",[n.boardMakeAndModels[0].make]).setTargeting("mt-mo",n.boardMakeAndModels[0].models).setTargeting("mt-u2",["00"]),r&&e.setTargeting("eagt",[r]),e.disableInitialLoad(),e.enableSingleRequest(),googletag.enableServices(),this[d]()}},{key:g,value:function(){googletag.destroySlots()}},{key:w,value:function(){this.config.prebid||(this.config.prebid={}),this.config.prebid.timeout||(this.config.prebid.timeout=700)}}],[{key:_,value:function(t){return e[O](googletag.cmd,t)}},{key:j,value:function(t){return e[O](pbjs.que,t)}},{key:O,value:function(e,t){return new Promise(function(n){return e.push(function(){t(),n()})})}},{key:k,value:function(e){var t=document.getElementById(e);t&&(t.style.backgroundColor="transparent",t.style.backgroundImage="none")}}]),e}();t.default=P},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=s(i),o=s(n(8)),u=s(n(0));s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.advertising=n.props.active?new o.default(e.config):null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"getChildContext",value:function(){var e=this;if(!this.advertising)return{activate:function(){}};var t=this.advertising.activate;return{activate:function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.call.apply(t,[e.advertising].concat(r))}}}},{key:"componentDidMount",value:function(){this.advertising&&this.advertising.setup()}},{key:"componentWillUnmount",value:function(){this.advertising&&this.advertising.teardown()}},{key:"render",value:function(){return a.default.createElement("span",null,this.props.children)}}]),t}();t.default=l,l.childContextTypes={activate:u.default.func},l.defaultProps={active:!0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9);Object.defineProperty(t,"AdvertisingProvider",{enumerable:!0,get:function(){return o(r).default}});var i=n(3);Object.defineProperty(t,"AdvertisingSlot",{enumerable:!0,get:function(){return o(i).default}});var a=n(2);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"connectToAdServer",{enumerable:!0,get:function(){return o(a).default}})}]);