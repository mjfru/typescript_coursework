/*
! Configuring TypeScript - Settings for TS
* In a desired directory, tsc --init creates a JSON file with all of TypeScript's configurations.

* Watch Mode - using tsc --watch, this will tell TS to listen to changes and re-compile into JavaScript.

* Working with multiple TS files in the same directory
? tsc by itself will compile all the files in the directory.
? Specifying a file after tsc will only compile a single file.

* The 'Files' section of TS Configuration allows a programmer to manually specify which files to compile.
? In the Config:
"files": ["fileyouwanttoinclude.ts", "index.ts"]

* Include / Exclude - These options come together, the default behavior is to include all the files in your working directory.
? In the Config:
"include": ["directoryName"]
? Now, only files in the "include" value will be included when compiled.
"exclude": ["file/directory"]
? In tandem with "include", it will now exclude these directories/files from being compiled.
! Exclude's default behavior is to exclude node_modules

* Outdir - outDir allows us to specify where to emit the compiled TS files.
* Often, this folder for your JS folders is in 'dist'
? "outDir": "./dist"

* Target - target allows you to set the JS version that TS compiles into (ES5, ES2017, etc.).

* Strict - Enables strict type-checking behavior to give you a greater degree of program correctness.
*/