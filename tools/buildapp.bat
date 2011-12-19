rmdir /S/Q ../../dojo-reference-release

pushd ..\src\js\util\buildscripts

call build.bat  --profile ..\..\..\..\tools\release.profile.js --release

popd

copy ..\src\index.html ..\..\dojo-reference-release\index.html
copy ..\src\js\config.js ..\..\dojo-reference-release\js\config.js

