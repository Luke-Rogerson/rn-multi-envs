# Multiple build environments and native-side environment variables in React Native for iOS and Android 📱 🚀 💯

_This is a solution for managing dev/staging/prod (and more if you like) build environments on both iOS and Android. It allows you to have multiple versions of your React Native app installed on a single iOS simulator or Android emulator. It also implements methods for exposing native side constants (environment variables) synchronously to the JavaScript side with proper TypeScript type safety._

### To run:

1. Clone the repo
2. `yarn`
3. `yarn install`
4. `yarn start`
5. **iOS**: `yarn ios --scheme RNBuildVariantsDev --configuration DebugDev`
6. **Android**: `yarn android --variant devDebug`

### Code highlights

Take a look at `ios/RNBuildVariants/RNConfig.m` and `android/app/src/main/java/com/rnbuildvariants/RNConfigModule.java` to see how values are exposed synchronously to the JavaScript side from iOS and Android respectively. Type safety and a single native module export are done in `RNConfigModule.ts`.

### Closing thoughts

While this solution is effective, a definite improvement would be to add a solution for not storing secrets in source control. It is also a fair amount of work to get everything setup (particularly on iOS), so you might want to consider a more streamlined, "React Native" solution such as [react-native-config](https://github.com/luggit/react-native-config) or [react-native-ultimate-config](https://github.com/maxkomarychev/react-native-ultimate-config).
