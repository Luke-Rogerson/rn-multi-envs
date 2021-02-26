/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, Text, StatusBar} from 'react-native';

import {RNConfig} from './RNConfigModule';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const env = RNConfig.ENV;
  return (
    <>
      <StatusBar backgroundColor="red" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24}}>Environment</Text>
        <Text style={{fontSize: 48, fontWeight: 'bold'}}>{env}</Text>
        <Text>{`API URL: ${RNConfig.API_URL}`}</Text>
      </View>
    </>
  );
};

export default App;
