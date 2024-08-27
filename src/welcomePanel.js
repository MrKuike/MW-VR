import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  VrButton,
  NativeModules
} from 'react-360';

const appModule = NativeModules.appModule

export default class WelcomePanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: {
        src: 'ESO-Logo.jpg',
        width: 500,
        height: 450
      }
    }
  }

  render() {
    const {image} = this.state;

    return (
      <View style={styles.panel}>
        <Image source={asset(image.src)} style={{width: image.width, height: image.height}}/>
        <View style={styles.greetingBox}>
          <VrButton onClick={() => appModule.start()}>
            <Text style={styles.greeting}>
              A View of Our House
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 30,
    color: 'black',
  },
});