import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from '../style/HomeStyle';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      ti: '',
    };
  }
  render() {
    return (
      <View style={styles.bg}>
        <Text style={styles.title}> Selamat datang </Text>
        <Button
          title="ceck status"
          onPress={() => this.props.navigation.navigate('Pindah')}
        />
        <Text style={styles.ap}>Alamat Pengiriman</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.tin}
            placeholder="Masukan Tujuan Pengiriman disini"
            onChangeText={(tek) => this.setState({ti: tek})}
          />
          <Button
            onPress={() =>
              this.props.navigation.navigate('Screen11', {
                input: this.state.ti,
              })
            }
            styles={styles.but}
            title="kirim"
          />
        </View>
      </View>
    );
  }
}
