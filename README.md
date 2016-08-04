# Keele University - uok-core-javascript
## University of Keele core files
~~SASS and~~ JS repo of core CMS styles.

Based on Node (including npm) and Grunt.

## What you'll need
You will need to have NodeJS (including NPM), and Git on your machine.

Gem bundler from <http://bundler.io/>

TO DO:

Split out so we have a folder for header and footer.
Concat out to two separate files.

Final CMS files includes should be minimal i.e.

jQuery (load first as it's a dependency for most everything)
Load header.js
Load footer.js
Allow normal inline scripts to run as normal.

Eventually look at using RequireJS.
Find a safe development platform (separate Page Layouts?) in order to test scripts before making live.