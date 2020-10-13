import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Screen11 extends Component {
  render() {
    const {input} = this.props.route.params;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Pengiriman Ke : {input}</Text>
        <Text>Akan kami proses</Text>
      </View>
    );
  }
}
export default Screen11;
