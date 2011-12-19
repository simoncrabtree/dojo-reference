rm -R ../../dojo-reference-release

../src/js/util/buildscripts/build.sh  --profile release.profile.js --release

cp ../src/index.html ../../dojo-reference-release/index.html
cp ../src/js/config.js ../../dojo-reference-release/js/config.js

