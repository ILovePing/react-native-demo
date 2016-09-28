import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import searchPage from './search';
import Huandengpian from './swiper';
const searchBtn = (<Icon name="search" size={30} color="#fff" />);
const backBtn = (<Icon name="chevron-left" size={30} color="#fff" />);
const bellBtn = (<Icon name="bell" size={30} color="#fff" />);
const test = [searchBtn,backBtn,bellBtn];
class FirstPage extends Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }
	/**
	 * [_onPress 当前组件点击事件]
	 * @return {[type]} [description]
	 */
    _onPress(){
    	alert('firstpage被点击了！');
    }
    /**
     * [_goNext 跳转到下一个页面]
     */
    _goNext(name,type = 'Normal'){
    	this.props.navigator.push({
    		component: SecondPage,
    		passProps:{
    			id:name
    		},
    		onPress:this._onPress,
    		rightText:'提示',
    		type:type
    	})
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={{height:200}} ><Huandengpian /></View>
            	<TouchableOpacity
            	style={styles.button}
            	onPress={()=>this._goNext('第一页')} >
            	<Text style={styles.buttonText}>
            		跳转至第二页(右出)
            	</Text>
            	</TouchableOpacity>
				<TouchableOpacity
          style={styles.button}
          onPress={()=>this._goNext('第一页', 'Modal')}>
          <Text style={styles.buttonText}>
            {'跳转至第二页(底部)'}
          </Text>
        </TouchableOpacity>
            </View>
        );
    }
}
class SecondPage extends Component{
	render(){
		return (
			<View style={styles.container}>
				<TouchableOpacity
				style={styles.button}
				onPress={()=>this.props.navigator.pop()}>
					<Text style={styles.buttonText}>
					返回上一页，来源{this.props.id}</Text>
				</TouchableOpacity>
			</View>
			);
	}
}

const routeMapper = {
	LeftButton(route,navigator,index,navState){
		console.log(`this page's index is ${index}\n Now U have clicked leftButton.`);
    console.log(`the index is ${index}`)
		if(index>0){
			return (
				<View style={styles.navContainer}>
					<TouchableOpacity
			            underlayColor='transparent'
			            onPress={() => {if (index > 0) {navigator.pop()}}}>
			            <Text style={styles.leftNavButtonText}>
			              {backBtn}
			            </Text>
			        </TouchableOpacity>
				</View>
				);
		}else{
			return (
				<View style={styles.navContainer}>
					<TouchableOpacity 
          onPress={
            () => navigator.push({
                      component: searchPage
                    })
          }
          >
						<Text  style={styles.leftNavButtonText}>{searchBtn}</Text>
					</TouchableOpacity>
				</View>
				)
		}
	},
	RightButton(route,navigator,index,navState){
		console.log(`this page's index is ${index}\n Now U have clicked rightButton.`);
		if(index>0){
      if (route.onPress){
      return (
          <View style={styles.navContainer}>
            <TouchableOpacity
              onPress={() => route.onPress()}>
              <Text style={styles.rightNavButtonText}>
                {route.rightText || '右键'}
              </Text>
            </TouchableOpacity>
          </View>
        );
    }else{
      return null
    }
  }else{
    return (
          <View style={styles.navContainer}>
            <TouchableOpacity>
              <Text style={styles.rightNavButtonText}>
              {bellBtn}
              </Text>
            </TouchableOpacity>
          </View>
        );
  }

	},
    // 标题
    Title(route, navigator, index, navState) {
	    return (
		      <View style={[{alignSelf:'stretch',marginRight:43},styles.navContainer]}>
		        <Text style={styles.title}>
		          {route.title || "小红书"}
		        </Text>
		      </View>
		    );
  	}
}
// 主模块
class UniformView extends Component {
  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{name: 'FirstPage', component: FirstPage}}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navBarContainer}
            routeMapper={routeMapper}/>}
        />
    );
  }
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:100,
		flexDirection:'column'
	},
	button:{
		height:60,
		marginTop:10,
		justifyContent:'center',//内容沿着column也就是垂直轴居中显示
		alignItems: 'center',//内容沿着cross line 居中显示
		backgroundColor: '#FF1049'
	},
	buttonText:{
		fontSize:18,
		color:'#fff'
	},
  navBarContainer:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#FF1049',
  },

	navContainer:{
    flex:1,
		paddingTop:12,
		paddingBottom:10,
	},
	// 左面导航按钮
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,

  },
   // 导航栏文字
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  // 右面导航按钮
  rightNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  // 标题
  title: {
    fontSize: 20,
    color: '#fff',
    //paddingLeft:120,
    flex:1,
    fontWeight: 'bold',               //Step 3
    textAlign:'center',
  
  }
});
export default UniformView;
