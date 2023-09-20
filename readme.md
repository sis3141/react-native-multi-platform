## Thanks to

- project structure : https://github.com/alan2207/bulletproof-react

## Important project information

- mobile-app : react-native 0.72  
  metro export feature as beta from 0.72, but this project still using react-native-monorepo-tools  
  (will be officially released from v0.73)
- web : react-native-web
  Actually React, but some overheads
- web-server : express
  For now, using pm2 for linux, nodemon for window to serve static files
  (Next.js to be configured)

## For use this boilerplate

- As mentioned above, main ideas' from two repos. But there were some problems like web build and I customized few settings.
- Find and change the word 'athler' ( my example app name) to your app name
- Make sure you've configured default react-native startup settings ( like jdk, android studio etc)
- Yarn v1 ( not yarn berry yet)

## To be added

- next js configuration
- many custom logics for handle libraries across platform
- some easy path aliasing controller (for babel, eslint, tsconfig)
- many business-useful boiler plates
  - ga, codepush, firebase libs , etc
- custom react-native web transpiler
- migrate to yarn berry

## Start with your credential

- firebase
  -(app) add your google-services.json at /android/app folder
  -(web) add your firebase js sdk configuration at lib/firebase - https://firebase.google.com/docs/web/learn-more#config-object
- code push
  add your stating, release deployment key in /android/app/build.gradle file

## Todo

request notification permission at app start
