(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1270:function(e,t,n){"use strict";n.r(t),n.d(t,"NoteList",(function(){return V}));var r=n(0),o=n.n(r),a=n(1177),i=n(37),c=n.n(i),l=n(490);function s(){return o.a.createElement("svg",{className:"icon-published-small",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o.a.createElement("rect",{x:"0",fill:"none",width:"16",height:"16"}),o.a.createElement("g",null,o.a.createElement("polygon",{points:"7.38 10.25 5.13 8.11 6.16 7.02 7.36 8.17 9.82 5.75 10.87 6.82 7.38 10.25"}),o.a.createElement("path",{d:"M13,.93H3a1.5,1.5,0,0,0-1.5,1.5V12.57A1.5,1.5,0,0,0,3,14.07H13a1.5,1.5,0,0,0,1.5-1.5V2.43A1.5,1.5,0,0,0,13,.93ZM3.5,12.07V4h9v8.07Z"})))}function u(){return o.a.createElement("svg",{className:"icon-pinned-small",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o.a.createElement("rect",{x:"0",fill:"none",width:"16",height:"16"}),o.a.createElement("g",null,o.a.createElement("path",{d:"M4.41,10.17l-4-4,5.65-.52L8.65,3.1,7.24,1.69,8.66.27l7.07,7.07L14.31,8.76,12.89,7.33,10.33,9.91l-.52,5.66-4-4L3,14.41,1.59,13Zm3.8,1L8.4,9l3.07-3.1-1.4-1.41L7,7.6l-2.13.19Z"})))}function p(){return o.a.createElement("svg",{className:"icon-sync-small",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o.a.createElement("rect",{x:"0",fill:"none",width:"16",height:"16"}),o.a.createElement("g",null,o.a.createElement("path",{d:"M14,2v5h-0.09h-2.05H9l1.82-1.82C10.1,4.46,9.11,4,8,4C6.14,4,4.59,5.28,4.14,7H2.09C2.57,4.17,5.03,2,8,2 c1.65,0,3.14,0.69,4.22,1.78L14,2z M8,12c-1.11,0-2.1-0.46-2.82-1.18L7,9H4.14H2.09H2v5l1.78-1.78C4.86,13.31,6.35,14,8,14 c2.97,0,5.43-2.17,5.91-5h-2.05C11.41,10.72,9.86,12,8,12z"})))}var f=n(33),h=n(892),d=n.n(h),m=n(560),y=function(e,t){return e.length>0?e.reduce((function(e,t){var n=t.filter,r=t.replacer,o="string"==typeof n&&Object(m.b)(n),a=o&&o.length>0?new RegExp(Object(f.escapeRegExp)(o),"gi"):n;return d()(e,a,r)}),t).map((function(e,t){return e&&"string"!=typeof e?o.a.cloneElement(e,{key:t}):e})):t},g=function(e){return{filter:e,replacer:function(e){if(e.length)return o.a.createElement("span",{className:"search-match"},e)}}},b=n(647),v=n(589),w=n(506),E=n(548);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(i,e);var t,n,r,a=S(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),D(k(t=a.call(this,e)),"createdAt",void 0),D(k(t),"updateScheduled",void 0),t.createdAt=Date.now(),t}return t=i,(n=[{key:"componentDidUpdate",value:function(e){var t,n,r=this;(null===(t=e.note)||void 0===t?void 0:t.content)!==(null===(n=this.props.note)||void 0===n?void 0:n.content)&&this.props.invalidateHeight(),this.props.lastUpdated<1e3&&!this.updateScheduled&&(this.updateScheduled=setTimeout((function(){return r.forceUpdate()}),1e3))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.updateScheduled)}},{key:"render",value:function(){var e=this.props,t=e.displayMode,n=e.hasPendingChanges,r=e.isOffline,a=e.isOpened,i=e.lastUpdated,l=e.noteId,f=e.note,h=e.openNote,d=e.pinNote,w=e.searchQuery,E=e.style;if(!f)return o.a.createElement("div",null,"Couldn't find note");var N=Object(b.b)(f),O=N.title,j=N.preview,S=f.systemTags.includes("pinned"),x=!!f.publishURL,k=i-this.createdAt>1e3&&Date.now()-i<1200,P=c()("note-list-item",{"note-list-item-selected":a,"note-list-item-pinned":S,"note-recently-updated":k,"published-note":x}),D=c()("note-list-item-pinner",{"note-list-item-pinned":S}),C=Object(m.a)(w).map(g);return o.a.createElement("div",{style:E,className:P},o.a.createElement("div",{className:"note-list-item-status"},o.a.createElement("div",{className:D,tabIndex:0,onClick:function(){return d(l,!S)}},o.a.createElement(u,null))),o.a.createElement("div",{className:"note-list-item-text theme-color-border",tabIndex:0,onClick:function(){return h(l)}},o.a.createElement("div",{className:"note-list-item-title"},o.a.createElement("span",null,y(C,Object(v.a)(O)))),"expanded"===t&&j.length>0&&o.a.createElement("div",{className:"note-list-item-excerpt"},Object(v.a)(j).split("\n").map((function(e,t){return o.a.createElement(o.a.Fragment,{key:t},t>0&&o.a.createElement("br",null),y(C,e.slice(0,200)))}))),"comfy"===t&&j.length>0&&o.a.createElement("div",{className:"note-list-item-excerpt"},y(C,Object(v.a)(j).slice(0,200)))),o.a.createElement("div",{className:"note-list-item-status-right theme-color-border"},n&&o.a.createElement("span",{className:c()("note-list-item-pending-changes",{"is-offline":r})},o.a.createElement(p,null)),x&&o.a.createElement("span",{className:"note-list-item-published-icon"},o.a.createElement(s,null))))}}])&&O(t.prototype,n),r&&O(t,r),i}(r.Component),L={openNote:w.a.ui.openNote,pinNote:w.a.data.pinNote},R=Object(l.b)((function(e,t){var n,r=t.noteId;return{displayMode:e.settings.noteDisplay,hasPendingChanges:E.c(e,r),isOffline:"offline"===e.simperium.connectionStatus,isOpened:e.ui.openedNote===r,lastUpdated:null!==(n=e.simperium.lastRemoteUpdate.get(r))&&void 0!==n?n:-1/0,note:e.data.notes.get(r),searchQuery:e.ui.searchQuery}}),L)(C),I=n(728);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Q(e);if(t){var o=Q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return U(this,n)}}function U(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?W(e):t}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(s,e);var t,n,i,l=M(s);function s(){var e;A(this,s);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return K(W(e=l.call.apply(l,[this].concat(n))),"state",{heightCache:new a.c({defaultHeight:135,fixedWidth:!0,keyMapper:function(t){var n=e.props,r=n.filteredNotes,o=n.searchQuery,a=n.tagResultsFound;return 0===a&&0===r.length?"no-notes":0===o.length||0===a?r[t]:0===t?"tag-suggestions":1===t?"notes-header":r[t-2]}}),lastNoteDisplay:null,windowWidth:null}),K(W(e),"list",Object(r.createRef)()),K(W(e),"handleShortcut",(function(t){if(e.props.keyboardShortcuts){var n=t.ctrlKey,r=t.metaKey,o=t.shiftKey,a=t.key.toLowerCase(),i=e.props,c=i.isSmallScreen,l=i.showNoteList,s=n||r;return s&&o&&"k"===a?(e.props.selectNoteAbove(),t.stopPropagation(),t.preventDefault(),!1):s&&o&&"j"===a?(e.props.selectNoteBelow(),t.stopPropagation(),t.preventDefault(),!1):c&&s&&o&&"l"===a?(e.props.toggleNoteList(),t.stopPropagation(),t.preventDefault(),!1):!c||!l||"Enter"!==a||(e.props.openNote(),t.stopPropagation(),t.preventDefault(),!1)}})),K(W(e),"toggleShortcuts",(function(t){t?window.addEventListener("keydown",e.handleShortcut,!0):window.removeEventListener("keydown",e.handleShortcut,!0)})),e}return t=s,(n=[{key:"componentDidMount",value:function(){this.toggleShortcuts(!0)}},{key:"componentWillUnmount",value:function(){this.toggleShortcuts(!1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.filteredNotes,i=t.hasLoaded,l=t.noteDisplay,s=t.onEmptyTrash,u=t.openedNote,p=t.searchQuery,f=t.showTrash,h=t.tagResultsFound,d=this.state.heightCache,m=function(e,t,n){return 0===t.length||0===n?e:["tag-suggestions","notes-header"].concat(B(e.length>0?e:["no-notes"]))}(n,p,h),y=m.findIndex((function(e){return e===u})),g=function(e,t){var n=t.heightCache;return function(t){var r=t.index,i=t.key,c=t.parent,l=t.style,s=e[r];return"no-notes"===s?o.a.createElement(a.b,{cache:n,columnIndex:0,key:"no-notes",parent:c,rowIndex:r},o.a.createElement("div",{className:"note-list is-empty",style:z(z({},l),{},{height:200})},o.a.createElement("span",{className:"note-list-placeholder"},"No Notes"))):"tag-suggestions"===s||"notes-header"===s?"tag-suggestions"===s?o.a.createElement(a.b,{cache:n,columnIndex:0,key:"tag-suggestions",parent:c,rowIndex:r},o.a.createElement(I.a,{style:z({},l)})):o.a.createElement(a.b,{cache:n,columnIndex:0,key:"notes-header",parent:c,rowIndex:r},o.a.createElement("div",{className:"note-list-header",style:z({},l)},"Notes")):o.a.createElement(a.b,{cache:n,columnIndex:0,key:i,parent:c,rowIndex:r},o.a.createElement(R,{invalidateHeight:function(){return n.clear(r,0)},noteId:s,style:l}))}}(m,{heightCache:d}),b=0===m.length,v=o.a.createElement("div",{className:"note-list-empty-trash theme-color-border"},o.a.createElement("button",{type:"button",className:"button button-borderless button-danger",onClick:s},"Empty Trash"));return o.a.createElement("div",{className:c()("note-list",{"is-empty":b})},b?o.a.createElement("span",{className:"note-list-placeholder"},i?"No Notes":"Loading Notes"):o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:"note-list-items ".concat(l)},o.a.createElement(a.a,null,(function(t){var n=t.height,r=t.width;return o.a.createElement(a.d,{ref:e.list,estimatedRowSize:126,height:n,noteDisplay:l,notes:m,rowCount:m.length,rowHeight:d.rowHeight,rowRenderer:g,scrollToIndex:y,width:r})}))),f&&v))}}])&&_(t.prototype,n),i&&_(t,i),s}(r.Component);K(V,"displayName","NoteList"),K(V,"getDerivedStateFromProps",(function(e,t){return t.heightCache.clear(0),t.heightCache.clear(1),t.heightCache.clear(2),e.noteDisplay!==t.lastNoteDisplay||e.windowWidth!==t.windowWidth?(t.heightCache.clearAll(),{lastNoteDisplay:e.noteDisplay,windowWidth:e.windowWidth}):null}));var J={onEmptyTrash:w.a.ui.emptyTrash,openNote:w.a.ui.openNote,selectNoteAbove:w.a.ui.selectNoteAbove,selectNoteBelow:w.a.ui.selectNoteBelow,toggleNoteList:w.a.ui.toggleNoteList};t.default=Object(l.b)((function(e){return{hasLoaded:e.ui.hasLoadedNotes,isSmallScreen:E.b(e),keyboardShortcuts:e.settings.keyboardShortcuts,noteDisplay:e.settings.noteDisplay,filteredNotes:e.ui.filteredNotes,openedNote:e.ui.openedNote,openedTag:e.ui.openedTag,searchQuery:e.ui.searchQuery,showNoteList:e.ui.showNoteList,showTrash:e.ui.showTrash,tagResultsFound:e.ui.tagSuggestions.length,windowWidth:e.browser.windowWidth}}),J)(V)}}]);