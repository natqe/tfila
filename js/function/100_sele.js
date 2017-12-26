'use strict';

// sele function:
// arg == 1: select elem from the dom
// arg == 2: if the first arg is "*" - select * from the dom by the second arg - return array
// arg == 3: if the first arg is "*" and the second arg is an valid element - select * from the elem(second arg) by the third arg  - return array
// arg == 2+: if the first arg is an valid element - foreach arg - select from the elem(first arg) - return array
// arg == 2+: if the first arg is not valid element or "id" or "*"- foreach arg - select from the dom - return array
function sele(...e){let l,n;const t=e=>e.find(e=>e.nodeType===Node.ELEMENT_NODE);return 1===e.length?document.querySelector(e[0]):(e.includes("*")||t(e)?e.includes("*")&&!t(e)?l=e.filter(e=>"*"!==e).map(e=>document.querySelectorAll(e)):!e.includes("*")&&(n=t(e))?l=e.filter(e=>e.nodeType!==Node.ELEMENT_NODE).map(e=>n.querySelector(e)):e.includes("*")&&(n=t(e))&&(l=e.filter(e=>e.nodeType!==Node.ELEMENT_NODE&&"*"!==e).map(e=>n.querySelectorAll(e))):l=e.map(e=>document.querySelector(e)),1!==l.length?l:l[0]);}
