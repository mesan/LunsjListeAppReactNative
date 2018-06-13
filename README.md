# LunsjListeAppReactNative

## Setup
1. ```npm install```
2. ```touch .env```
3. ```echo 'API_BASE_URL=https://*INSERT_APP_NAME*.firebaseio.com' >> .env ```
4. ```echo 'AUTH_SERVICE_URL=https://*INSERT_APP_NAME*.com' >> .env ```

### Run on IOS
1. ```react-native run-ios```
2. ```react-native log-ios``` for å åpne log cli

### Run on Android
1. ```react-native run-android```
2. ```react-native log-android``` for å åpne log cli

### Build release for Android
1) Do the first steps in this tutorial http://facebook.github.io/react-native/docs/signed-apk-android.html
2) run ```react-native run-android --configuration=release```


### If you want to run an emulator from console instead of opening Android Studio:
#### example with Nexus 5X with API_23
cd /Users/%MY_USER%/Library/Android/sdk/tools && ./emulator -avd Nexus_5X_API_23 -netdelay none -netspeed full

