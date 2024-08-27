A test proyect on react-360

you need node version 14.0.0

nvm install 14.0.0

nvm use 14.0.0

then go to the folder proyect and make npm i

if you got a "Error invalid regular expresion" go to:

.\node_modules\metro\src\blacklist.js

and replace var sharedlist with:

var sharedBlacklist = [ /node_modules[\/\\]react[\/\\]dist[\/\\].*/, /website\/node_modules\/.*/, /heapCapture\/bundle\.js/, /.*\/__tests__\/.*/ ];
