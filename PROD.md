Run
node_modules/.bin/babel --presets es2015 ./dist/build.js -o ./dist/build.babel.js
To create a cross-platform build-script
Take src/assets (without SCSS) and put them in a /assets directory
Point the index.html to the babel JS file!