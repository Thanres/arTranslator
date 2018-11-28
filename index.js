import { AppRegistry } from 'react-native';
import App from './app/wrapper/appWrapper';

AppRegistry.registerComponent('translator', () => App);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent('ViroSample', () => App);