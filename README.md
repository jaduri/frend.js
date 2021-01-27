# frend.js

A collection of front-end utility functions

## usage

import {
getClass,
getClasses,
getId
} from "./elegant.js";
       
getClasses("className"); //returns a HTMLCollection of matching elements\n
getClass("className"); //equivalent to getClasses("className")[0]\n
getId("id"); //returns HTML element object that matches id
