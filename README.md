# LunsjListeAppReactNative

## Setup

### Run on IOS
1. ```npm install```
2. ```echo 'API_BASE_URL=https://*INSERT_APP_NAME*.firebaseio.com' > .env ```
3. ```react-native run-ios```
4. ```react-native log-ios``` for å åpne log cli

### Run on Android
Have Java 8 JDK installed and on JAVA_HOME
Have Android SDK installed and on ANDROID_HOME
Have Android sdk\platform-tools on PATH
Check that VectorIconsPackage is not defined twice in MainApplication.java

1. ```npm install```
2. ```npm start```
3. ```echo 'API_BASE_URL=https://*INSERT_APP_NAME*.firebaseio.com' > .env```
4. Plug in phone and make sure it is in debug-mode
5. ```react-native run-android```

If phone cannot connect to the JD-server:
1. Shake phone in app to open settings menu
2. Click Dev Settings
3. Click Debug server host & port for device
4. Enter IP and port of JD-server (make sure both devices are on the same network)
5. Reload app