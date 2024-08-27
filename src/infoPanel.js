import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset
} from 'react-360';

export default class InfoPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: {
        src: 'eye.png',
        width: 50,
        height: 50
      }
    }
  }

  render() {
    const {image} = this.state;

    return (
      <View style={styles.panel}>
        <Image source={asset(image.src)} style={{width: image.width, height: image.height}}/>
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});