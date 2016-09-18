import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableOpacity
} from 'react-native';


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
		if(index>0){
			return (
				<View style={styles.navContainer}>
					<TouchableOpacity
			            underlayColor='transparent'
			            onPress={() => {if (index > 0) {navigator.pop()}}}>
			            <Text style={styles.leftNavButtonText}>
			              后退
			            </Text>
			        </TouchableOpacity>
				</View>
				);
		}else{
			return null;
		}
	},
	RightButton(route,navigator,index,navState){
		console.log(`this page's index is ${index}\n Now U have clicked rightButton.`);
		if (route.onPress)
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
	},
    // 标题
    Title(route, navigator, index, navState) {
	    return (
		      <View style={styles.navContainer}>
		        <Text style={styles.title}>
		          应用标题
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
            style={styles.navContainer}
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
	navContainer:{
		paddingTop:12,
		paddingBottom:10,
		backgroundColor:'#81c04d'
	},
	// 左面导航按钮
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 13
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
    marginRight: 13
  },
  // 标题
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1                //Step 3
  }
});
export default UniformView;
