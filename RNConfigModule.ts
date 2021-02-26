import {NativeModules} from 'react-native';

interface RNConfigType {
  ENV: 'dev' | 'staging' | 'prod';
  API_URL: string;
}

export const RNConfig = NativeModules.RNConfig as RNConfigType;
