# frend.js

A collection of front-end utility functions

## usage

import {
getClass,
getClasses,
getId
} from "./elegant.js";
       
getClasses("className"); //returns a HTMLCollection of matching elements
getClass("className"); //equivalent to getClasses("className")[0]
getId("id"); //returns HTML element object that matches id
