module.exports=function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=3)}([function(e,n){e.exports=require("vscode")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("fs")},function(e,n,o){"use strict";o.r(n);var t=o(0),r=o(2),i=o.n(r),c=o(1),a=o.n(c);const s={js:"jsx",jsx:"js",ts:"tsx",tsx:"ts",css:"pcss",pcss:"css"};function m(e){if(l(e))return e;const n=a.a.extname(e).slice(1),o=s[n];return o?`${e.slice(0,e.lastIndexOf("."))}${o}`:e}function u(e,n){const o=e.slice(0,e.lastIndexOf("."));for(const e of n){const n=`${o}.${e}`;if(l(n))return n}}let d;function l(e){try{return i.a.statSync(e).isFile()}catch(e){if("ENOENT"!==e.code)throw e;return!1}}async function f(e,n=!0,o=!1){if(!l(e=m(e)))return;let r=1;const i=t.window.activeTextEditor;return n&&i&&i.viewColumn&&(r=i.viewColumn+(i.viewColumn>1?-1:1)),(await t.window.showTextDocument(t.Uri.file(e),{preserveFocus:o,preview:!1})).viewColumn!==r&&function(){const e=t.window.activeTextEditor;if(!e||!e.viewColumn)return;e.viewColumn>1?t.commands.executeCommand("workbench.action.moveEditorToPreviousGroup"):t.commands.executeCommand("workbench.action.moveEditorToNextGroup")}(),e}function w(e){return t.workspace.getConfiguration("grabBag",e)}async function p(){t.commands.executeCommand("workbench.action.closePanel"),await t.commands.executeCommand("workbench.action.maximizeEditor"),t.commands.executeCommand("workbench.action.evenEditorWidths")}async function g(){const e=t.window.activeTextEditor;if(!e||!e.viewColumn)return;const{maxEditorGroups:n}=await w();e.viewColumn>=n?t.commands.executeCommand("workbench.action.moveEditorToFirstGroup"):t.commands.executeCommand("workbench.action.moveEditorToNextGroup")}async function v(){let e;for(console.log("here");e=t.window.visibleTextEditors.find(e=>e.viewColumn&&e.viewColumn>2);)console.log(e),t.window.showTextDocument(e.document.uri),t.commands.executeCommand("workbench.action.moveEditorToPreviousGroup")}async function x(e=!0){const n=t.window.activeTextEditor;if(!n)return;const o=n.selection.active,r=e?10:-10,i=Math.min(n.document.lineCount,Math.max(0,o.line+r)),c=o.with(i,o.character),a=new t.Selection(c,c);n.selection=a,t.commands.executeCommand("revealLine",{lineNumber:i})}async function b(){const e=t.window.activeTextEditor;if(!e)return;const n=e.document.fileName,o=y(n);if(1===o.length)return;const r=a.a.dirname(n);let i,c;return"snap"===o[o.length-1]?c=i=a.a.join(r,"..",a.a.basename(n,".snap")):"test"===o[o.length-2]?(o.splice(-2,1),i=a.a.join(r,"..",o.join(".")),c=n):c=i=T(n),E(c),f(i)}function C(){const e=t.window.activeTextEditor;if(!e)return;const n=e.document.fileName;return f(a.a.join(a.a.dirname(n),"__snapshots__",`${a.a.basename(n)}.snap`))}function h(){const e=t.window.activeTextEditor;if(!e)return;const n=T(e.document.fileName);l(n)||(!function(e,n){try{i.a.mkdirSync(e,n)}catch(e){if("EEXIST"!==e.code)throw e}}(a.a.dirname(n),{recursive:!0}),i.a.writeFileSync(n,"")),E(n),f(n)}function y(e){return a.a.basename(e).split(".")}function T(e){const n=y(e);return n.splice(-1,0,"test"),a.a.join(a.a.dirname(e),"__tests__",n.join("."))}async function E(e){const{testCommand:n}=await w();if(n){const o=t.workspace.asRelativePath(m(e));await t.env.clipboard.writeText(`${n} ${o}`)}}function j(){t.commands.executeCommand("workbench.action.quickOpen","@:")}const _=["css","pcss"],k=["js","jsx","ts","tsx"];function O(){const e=t.window.activeTextEditor;if(!e)return;const n=e.document.fileName,o=a.a.extname(n),r=_.includes(o)?u(n,k):u(n,_);r&&f(r)}o.d(n,"activate",(function(){return S}));const S=async function(e){!function(e){d=e}(e),e.subscriptions.push(t.commands.registerCommand("grabBag.openCorrespondingCssModule",O),t.commands.registerCommand("grabBag.openCorrespondingTestFile",b),t.commands.registerCommand("grabBag.openCorrespondingSnapshot",C),t.commands.registerCommand("grabBag.createCorrespondingTestFile",h),t.commands.registerCommand("grabBag.closeAllPanels",p),t.commands.registerCommand("grabBag.moveEditorToOtherGroup",g),t.commands.registerCommand("grabBag.consolidateToTwoEditors",v),t.commands.registerCommand("grabBag.moveCaretDown",()=>x()),t.commands.registerCommand("grabBag.moveCaretUp",()=>x(!1)),t.commands.registerCommand("grabBag.gotoSymbolGrouped",j))}}]);
//# sourceMappingURL=extension.js.map