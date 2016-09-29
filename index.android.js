import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View,AppRegistry} from 'react-native';

//import MyScene from './app/MyScene'
// import AV from 'leancloud-storage';  
// const ACCOUNT={
//   APP_ID:'oTM0BkJN7xySe23j44o4Y8fx-gzGzoHsz',
//   APP_KEY:'SVp13MxXRDARCagj18OYgg3p'
// }
// AV.initialize(ACCOUNT.APP_ID, ACCOUNT.APP_KEY);

import FirstPage from './src/navigator_uniform'

AppRegistry.registerComponent('MyProject', () => FirstPage);