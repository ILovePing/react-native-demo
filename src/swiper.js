import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Navigator,
	TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

class Huandengpian extends Component {
    static propTypes = {
        
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Swiper style={styles.wrapper} height={250} showsButtons={false} autoplay={true} autoplayDirection={true} autoplayTimeout={2.5}>
          	<Image style={styles.slide} source={{uri:images[0]}} ></Image>
			<Image style={styles.slide} source={{uri:images[1]}} ></Image>
			<Image style={styles.slide} source={{uri:images[2]}} ></Image>
			<Image style={styles.slide} source={{uri:images[3]}} ></Image>
		   </Swiper>
        );
    }
}
const images = ['http://yanxuan.nosdn.127.net/cd1c08435cf3e3d7af33379dc000e6b2.jpg?imageView&quality=95&thumbnail=1920x480',
'http://yanxuan.nosdn.127.net/b5843ab8811fed88b60e739d534487e8.jpg?imageView&quality=95&thumbnail=1920x480',
'http://yanxuan.nosdn.127.net/98db66811c9f4b617471b098a4d57736.jpg?imageView&quality=95&thumbnail=1920x480',
'http://yanxuan.nosdn.127.net/86c4165eacfce9c69825d70d9b203f32.jpg?imageView&quality=95&thumbnail=1920x480']
var styles = StyleSheet.create({
  wrapper: {
  },
  slide:{
  	height:250,
  	resizeMode: Image.resizeMode.cover,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
export default Huandengpian;
