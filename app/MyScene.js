import React, { Component ,PropTypes} from 'react';
import { View, Text ,TouchableHighlight,TouchableNativeFeedback,Animated} from 'react-native';
export default class MyScene extends Component {
	constructor(props){
		super(props);
		this.state = {
			bounceValue : new Animated.Value(0),
		}
	}
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
    Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
      this.state.bounceValue,                 // 将`bounceValue`值动画化
      {
        toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // 开始执行动画
  }
  render() {
    return (
      <View>
      <Animated.Image 
      source={{uri:'http://imgnews.gmw.cn/attachement/jpg/site2/20160908/3749773067287350665.jpg'}}
      style={{
      	flex:1,transform:[{scale:this.state.bounceValue}],width:100,height:100
      }}
      />
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableNativeFeedback onPress={this.props.onForward}>
        <View>
          <Text>Tap me to load the next scene</Text>
        </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={this.props.onBack}>
        <View>
          <Text>Tap me to go back</Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}