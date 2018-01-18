import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={this.props.style}>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={this.props.style}>{display}</Text>
    );
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      // <View style={styles.container}>

      //   <Greeting style={styles.bigblue} name='Valeera' />
      //   <Image source={pic} style={{width: 193, height: 110}}/>
      //   <Text>Bạn muốn học React Native!</Text>
      //   <Blink style={styles.red} text='I love to blink' />
      // </View>  

      // <View style={{height: 300}}>
      //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      //   <View style={{flex: 1, backgroundColor: 'skyblue'}} />
      //   <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      // </View>

      // <View style={{flex: 1, flexDirection: 'row'}}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      // </View>

      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'space-between',
      // }}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      // </View>

      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      // }}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      // </View>

      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
