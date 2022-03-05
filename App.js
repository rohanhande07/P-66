import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  speak() {
    var say = this.state.text;
    this.state.text === ''
    ?alert('This box is empty. Type in a word to hear it')
    :Speech.speak(say);
  }

  render() {
    return (
      <View style = {styles.container}>
        <Header
            backgroundColor={'blue'}
            centerComponent={{
              text: 'Text to Speech',
              style: { color: 'white', fontSize: 28 },
            }}
          />
          
        <TextInput
            style = {styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
            value={this.state.text}
            defaultValue = {"The"}
            placeholder = "Type your text here"
          />

        <TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.speak()
        }}>
          <Text style = {styles.displayText}>Hear Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 20,
    borderColor: '#566B73',
    color: '#2C5361',
    borderRadius: 10
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
  },
  speechButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: '#2E5866'
  },
});
