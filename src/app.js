/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React,{ Component } from 'React'
import {
  AppRegistry,
  Platform,
  TouchableOpacity,
  StyleSheet,
  Navigator,
  View,
  Text,
  Image
} from 'react-native';
import Splash from './Splash';

const defaultRoute = {
  component: Splash
};

export default class navigation extends Component {
  _renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component {...route.params} navigator={navigator} />
    );
  }
  _configureScene(route,routeStack){
    if(route.type == 'Bottom'){
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.FloatFromRight; // 右侧弹出
  }
  _renderNavBar() {
    const styles = {
      title: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
      },
      button: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
      },
      buttonText: {
        fontSize: 18, color: '#FFFFFF', fontWeight: '400',
      },
      searchBtn: {
        width: 16, height:17,
      }
    }

    var routeMapper = {
      LeftButton(route, navigator, index, navState) {
        if(index > 0) {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity 
              onPress={() => navigator.pop()}
              style={styles.button}>
            {/*<Image style={styles.searchBtn} source={require('../assets/searchBtn.png')}></Image>*/}
            <Text style={styles.buttonText}>搜索</Text>
            </TouchableOpacity>
          );
        }
      },
      RightButton(route, navigator, index, navState) {
        console.log(`index = ${index}`)
        if(1) {
          return (
            <TouchableOpacity
              onPress={() => navigator.pop()}
              style={styles.button}>
              <Text style={styles.buttonText}>我的</Text>
            </TouchableOpacity>
          );
        } else {
          return null
        }

      },
      Title(route, navigator, index, navState) {
        return (
          <View style={styles.title}>
            <Text style={styles.buttonText}>{route.title ? route.title : '小红书'}</Text>
          </View>
        );
      }
    };

    return (
      <Navigator.NavigationBar
        style={{
          flex:1,
          justifyContent:'space-between',
          alignItems: 'center',
          backgroundColor: '#F04848',
          shadowOffset:{
              width: 1,
              height: 0.5,
          },
          shadowColor: '#F04848',
          shadowOpacity: 0.8,
          }}
        routeMapper={routeMapper}
      />
    );
  }
  render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={this._renderScene}
        sceneStyle={{paddingTop: (Platform.OS === 'android' ? 66 : 74)}}
        navigationBar={this._renderNavBar()} 
        configureScene={this._configureScene} />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('MyProject', () => navigation);
