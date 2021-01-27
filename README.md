# frend.js

A collection of front-end utility functions

## usage

import {\
getClass,\
getClasses,\
getId\
} from "./elegant.js";\
       
getClasses("className");&nbsp //returns a HTMLCollection of matching elements\
getClass("className");&nbsp //equivalent to getClasses("className")[0]\
getId("id");&nbsp //returns HTML element object that matches id
