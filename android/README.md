# OKR Miner — Android App

A WebView wrapper that turns the [OKR Miner](https://game.thisai.fun) web game into an installable Android app.

## Build Instructions

### Option 1: Android Studio

1. Install [Android Studio](https://developer.android.com/studio)
2. Open the `android/` folder as a project
3. Wait for Gradle sync to complete
4. **Build > Build Bundle / APK > Build APK**
5. The APK will be at `android/app/build/outputs/apk/debug/app-debug.apk`

### Option 2: Command Line

```bash
cd android
./gradlew assembleDebug
```

The APK will be at `app/build/outputs/apk/debug/app-debug.apk`.

## Install on Device

```bash
adb install app/build/outputs/apk/debug/app-debug.apk
```

## Notes

- Requires Android 7.0 (API 24) or higher
- The app loads the game from `https://game.thisai.fun`
- Fallback URL: `https://simonbourdages.github.io/OKR-Miner/`
- Internet connection required
