import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
class Screen2 extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Kembali Ke Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Screen2;
