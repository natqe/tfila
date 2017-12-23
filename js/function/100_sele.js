'use strict';
// sele function:
// arg == 1: select elem from the dom
// arg == 2: if the first arg is "*" - select * from the dom by the second arg - return array
// arg == 3: if the first arg is "*" and the second arg is an valid element - select * from the elem(second arg) by the third arg  - return array
// arg == 2+: if the first arg is an valid element - foreach arg - select from the elem(first arg) - return array
// arg == 2+: if the first arg is not valid element or "id" or "*"- foreach arg - select from the dom - return array
const sele = (...args) => {

    let result;
    let nodeelem;

    if (args.length === 1) {

        return document.querySelector(args[0]);

    } else if (!args.find(item => item === '*') && !args.find(item => item.nodeType === Node.ELEMENT_NODE)) {
        
        result = args.map(item => document.querySelector(item));
        
    } else if (args.find(item => item === '*') && !args.find(item => item.nodeType === Node.ELEMENT_NODE)) {

        result = args.filter(item => item !== '*').map(item => document.querySelectorAll(item));

    } else if (!args.find(item => item === '*') && (nodeelem = args.find(item => item.nodeType === Node.ELEMENT_NODE))) {

        result = args.filter(item => item.nodeType !== Node.ELEMENT_NODE).map(item => nodeelem.querySelector(item));

    } else if (args.find(item => item === '*') && (nodeelem = args.find(item => item.nodeType === Node.ELEMENT_NODE))) {

        result = args.filter(item => item.nodeType !== Node.ELEMENT_NODE && item !== '*').map(item => nodeelem.querySelectorAll(item));

    }
    
    return result.length !== 1 ? result : result[0];

};