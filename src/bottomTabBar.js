import React, { Component, PropTypes } from 'react';
import {
  Text,  View,AppRegistry
} from 'react-native';
import ScrollableTabView,{DefaultTabBar, }from 'react-native-scrollable-tab-view';
class BottomTabBar extends Component {
    static propTypes = {
       
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollableTabView
      style={{ }}
      renderTabBar={() => <DefaultTabBar />}
    	tabBarPosition={'bottom'}>
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
    </ScrollableTabView>
        );
    }
}

export default BottomTabBar;
