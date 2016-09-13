import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View,AppRegistry} from 'react-native';

//import MyScene from './app/MyScene'
// import AV from 'leancloud-storage';  
// const ACCOUNT={
//   APP_ID:'oTM0BkJN7xySe23j44o4Y8fx-gzGzoHsz',
//   APP_KEY:'SVp13MxXRDARCagj18OYgg3p'
// }
// AV.initialize(ACCOUNT.APP_ID, ACCOUNT.APP_KEY);
import navigation from './src/app';
//  class MyProject extends Component {
//   render() {
//     return (
//       <Navigator
//         initialRoute={{ title: 'My Initial Scene', index: 0 }}
//         renderScene={(route, navigator) =>
//           <MyScene
//             title={route.title}

//             // 推入新场景所调用的方法           
//             onForward={() => {    
//               const nextIndex = route.index + 1;
//               navigator.push({
//                 title: 'Scene ' + nextIndex,
//                 index: nextIndex,
//               });
//             }}

//             // 返回上一个场景所调用的方法
//             onBack={() => {
//               if (route.index > 0) {
//                 navigator.pop();
//               }
//             }}
//           />
//         }
//       />
//     )
//   }
// }
AppRegistry.registerComponent('MyProject', () => navigation);