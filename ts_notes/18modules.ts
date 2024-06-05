/*
! TypeScript Modules
* TS supports modules; we can share and organize TypeScript files in projects.
Prior to ES Modules, TypeScript namespaces are still in use but are becoming less and less popular.

* These days, we use the typical import / export syntax!
* However, TS also takes everything to be in the shared global scope, making us require modules to seperate things we want and don't want to use.
! As soon as you add 'export...' (named export), this changes and the code / file / etc. is taken out of global scope.


index.ts
import { add } from "./utils.js"   <-- notice the .js! It'll be compiled into JS when it's usable anyway.
console.log('Hello!')


utils.ts
export function add(x: number, y: number) {
    return x + y;
}

? These examples were executed with node.js, but what if you want to make some scripts for use on a webpage / app?
* We could NOT include import / export and include the individual scripts, sure, but that lacks organization.
! We need to preserve the import and export keywords.
In the Modules section of tsconfig.json, we can change the 'module' setting to 'ES6' (or above)
This doesn't fix it (yet)! -- We need to include <script type="module" src="..."> in our tag.
*/