### re-exporting different libraries pre-configured for the application
---
for rn-monorepo, this may contain some platform specific features


for example,
* localstorage/  
  * localstorage.js  - uses 'react-native-async-storage'  
  * localstorage.web.js - uses browser local storage api

expect that there be least non-local library outside of this directory