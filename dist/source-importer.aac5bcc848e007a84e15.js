(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1269:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(21),c=r.n(a),u=r(537),i=r(37),l=r.n(i),s=r(980),f=r.n(s),p=r(981),m=r.n(p);function b(){return o.a.createElement("svg",{className:"icon-file",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("g",{transform:"translate(-46.000000, -124.000000)"},o.a.createElement("g",{transform:"translate(28.000000, 110.000000)"},o.a.createElement("g",{transform:"translate(18.000000, 14.000000)"},o.a.createElement("path",{d:"M8,0 L12,4 L12,16 L0,16 L0,0 L8,0 Z M8,4 L11,4 L8,1 L8,4 Z"})))))}var y=r(1186);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,u=e[Symbol.iterator]();!(n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e){var t=e.acceptedTypes,r=e.locked,a=e.multiple,c=e.onAccept,u=e.onReset,i=h(Object(n.useState)(),2),s=i[0],p=i[1],v=h(Object(n.useState)(),2),g=v[0],w=v[1],E=Object(n.useCallback)((function(e,t){0===e.length?function(e){!a&&e.length>1?w("Choose a single file"):w("File type is incorrect"),p(void 0),u()}(t):function(e){var t=e.length,r=t>1?"".concat(t," files"):e[0].name;p(r),c(e)}(e)}),[]),O=Object(y.a)({accept:t,disabled:r,multiple:a,onDrop:E}),S=O.getRootProps,_=O.getInputProps,j=O.isDragActive;Object(n.useEffect)((function(){if(g){var e=setTimeout((function(){return w(void 0)}),2500);return function(){return clearTimeout(e)}}}),[g]);var k=g||"Drag a file, or click to choose",R=function(){return o.a.createElement(n.Fragment,null,g?o.a.createElement(m.a,null):o.a.createElement(f.a,null),j?"Drop files here":k)},P=function(){return o.a.createElement(n.Fragment,null,o.a.createElement(b,null),o.a.createElement("span",{className:"importer-dropzone__filename"},s))};return o.a.createElement("div",d({},S(),{className:l()({"is-accepted":s},"importer-dropzone theme-color-border")}),o.a.createElement("input",_()),s?o.a.createElement(P,null):o.a.createElement(R,null))}g.propTypes={acceptedTypes:c.a.string,locked:c.a.bool.isRequired,multiple:c.a.bool,onAccept:c.a.func.isRequired,onReset:c.a.func.isRequired};var w=g,E=r(651),O=r(490),S=r(33),_=r(506),j=r(1198);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var R=function(e){return o.a.createElement(j.a,k({classes:{root:"progress-bar",bar:"progress-bar__bar"}},e))};function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=V(e);if(t){var o=V(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return x(this,r)}}function x(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var M,A,q,I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(c,e);var t,r,n,a=T(c);function c(){return D(this,c),a.apply(this,arguments)}return t=c,(r=[{key:"shouldComponentUpdate",value:function(e){return!(!this.props.endValue&&this.props.isDone===e.isDone)}},{key:"render",value:function(){var e=this.props,t=e.currentValue,r=e.endValue,n=e.isDone,a=function(){return n?o.a.createElement(R,{variant:"determinate",value:100}):o.a.createElement(R,null)};return r?o.a.createElement(R,{variant:"determinate",value:t/r*100}):o.a.createElement(a,null)}}])&&C(t.prototype,r),n&&C(t,n),c}(o.a.Component);M=I,A="propTypes",q={currentValue:c.a.number.isRequired,endValue:c.a.number,isDone:c.a.bool.isRequired},A in M?Object.defineProperty(M,A,{value:q,enumerable:!0,configurable:!0,writable:!0}):M[A]=q;var L=I,F=function(e){var t,r=e.currentValue,n=1===r?"note":"notes";return t=e.isDone?"Done! ".concat(r," ").concat(n," imported."):r?"".concat(r," ").concat(n," imported..."):"Importing...",o.a.createElement("p",{role:"status","aria-live":"polite"},t)};F.propTypes={currentValue:c.a.number.isRequired,isDone:c.a.bool.isRequired};var B=F,z=function(e){var t=e.currentValue,r=e.endValue,n=e.isDone;return o.a.createElement("section",null,o.a.createElement(L,{currentValue:t,endValue:n?t:r,isDone:n}),o.a.createElement(B,{currentValue:t,isDone:n}))};z.propTypes={currentValue:c.a.number.isRequired,endValue:c.a.number,isDone:c.a.bool.isRequired};var J=z;function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=W(e);if(t){var o=W(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return K(this,r)}}function K(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?Q(e):t}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=function(e){switch(e){case"evernote":return r.e(9).then(r.bind(null,1272));case"plaintext":return r.e(11).then(r.bind(null,1263));case"simplenote":return r.e(10).then(r.bind(null,1264))}},ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(c,e);var t,r,n,a=G(c);function c(){var e;Z(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return X(Q(e=a.call.apply(a,[this].concat(r))),"state",{errorMessage:void 0,finalNoteCount:void 0,importedNoteCount:0,isDone:!1,setMarkdown:!1,shouldShowProgress:!1}),X(Q(e),"initImporter",(function(){var t=e.props.source.slug;return Y(t).then((function(r){var n=new(0,r.default)(e.props.importNote,{isMarkdown:e.state.setMarkdown}),o=Object(S.throttle)((function(t){e.setState({importedNoteCount:t})}),20);return n.on("status",(function(r,n){switch(r){case"progress":o(n);break;case"complete":e.setState({finalNoteCount:n,isDone:!0}),e.props.recordEvent("importer_import_completed",{source:t,note_count:n});break;case"error":e.setState({errorMessage:n,shouldShowProgress:!1}),window.setTimeout((function(){e.setState({isDone:!0})}),200)}})),n}))})),X(Q(e),"startImport",(function(){e.setState({shouldShowProgress:!0}),e.props.onStart(),e.initImporter().then((function(t){t.importNotes(e.props.files)}))})),e}return t=c,(r=[{key:"render",value:function(){var e=this,t=this.props,r=t.endValue,n=t.locked,a=t.onClose,c=this.props.source.optionsHint,i=this.state,l=i.errorMessage,s=i.finalNoteCount,f=i.importedNoteCount,p=i.isDone,m=i.setMarkdown,b=i.shouldShowProgress;return o.a.createElement("div",{className:"source-importer-executor"},o.a.createElement("section",{className:"source-importer-executor__options"},o.a.createElement(u.a,{headingLevel:3},"Options"),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:m,className:"source-importer-executor__checkbox",disabled:n,onChange:function(){return e.setState({setMarkdown:!m})}}),"Enable Markdown on all notes"),c&&o.a.createElement("p",{className:"theme-color-fg-dim"},c)),o.a.createElement(E.a,{shouldMount:Boolean(l)},o.a.createElement("div",{role:"alert",className:"source-importer-executor__error"},l)),o.a.createElement(E.a,{shouldMount:b},o.a.createElement(J,{currentValue:p?s:f,endValue:r,isDone:p})),o.a.createElement("div",{className:"source-importer-executor__button"},p?o.a.createElement("button",{className:"button button-primary",type:"button",onClick:a},"Close"):o.a.createElement("button",{className:"button button-primary",disabled:n,type:"button",onClick:this.startImport},"Import")))}}])&&H(t.prototype,r),n&&H(t,n),c}(n.Component),te={importNote:_.a.data.importNote,recordEvent:_.a.analytics.recordEvent},re=Object(O.b)(null,te)(ee);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=se(e);if(t){var o=se(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return ie(this,r)}}function ie(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?le(e):t}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e){return(se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(c,e);var t,r,n,a=ue(c);function c(){var e;oe(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return fe(le(e=a.call.apply(a,[this].concat(r))),"state",{acceptedFiles:void 0}),e}return t=c,(r=[{key:"render",value:function(){var e=this,t=this.props,r=t.buckets,n=t.onClose,a=t.onStart,c=t.locked,i=void 0!==c&&c,l=t.source,s=this.props.source,f=s.acceptedTypes,p=s.instructions,m=s.multiple,b=void 0!==m&&m,y=this.state.acceptedFiles,d=Boolean(y);return o.a.createElement("div",{className:"source-importer"},o.a.createElement(u.a,{headingLevel:"3"},"Import file",b&&"s"),o.a.createElement(w,{acceptedTypes:f,locked:i,multiple:b,onAccept:function(t){return e.setState({acceptedFiles:t})},onReset:function(){return e.setState({acceptedFiles:void 0})}}),!d&&o.a.createElement("p",{className:"theme-color-fg-dim"},p),o.a.createElement(E.a,{wrapperClassName:"source-importer__executor-wrapper",shouldMount:d},o.a.createElement(re,{buckets:r,endValue:b&&d?y.length:void 0,files:y,locked:i,onClose:n,onStart:a,source:l})))}}])&&ae(t.prototype,r),n&&ae(t,n),c}(o.a.Component);fe(pe,"propTypes",{buckets:c.a.object,locked:c.a.bool,onClose:c.a.func.isRequired,onStart:c.a.func.isRequired,source:c.a.shape({acceptedTypes:c.a.string,instructions:c.a.string,multiple:c.a.bool})});t.default=pe}}]);