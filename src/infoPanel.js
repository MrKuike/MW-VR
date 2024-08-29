import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  NativeModules
} from 'react-360';

const appModule = NativeModules.appModule


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

  modifyPanel = (id) => {
    appModule.resizePanel(500,700,id)
    this.setState({
        ...this.state,
        image: {
            ...this.state.image,
            src: `${id}.jpg`,
            width: 500,
            height: 500 
        }
    })
  }

  resetPanel = (id) => {
    appModule.resizePanel(50,50,id)
    this.setState({
        ...this.state,
        image: {
            ...this.state.image,
            src: `${id}.png`,
            width: 50,
            height: 50 
        }
    })
  }

  render() {
    const {image} = this.state;
    const {id, text} = this.props;

    return (
      <View style={styles.panel} onEnter={() => this.modifyPanel(id)} onExit={() => this.resetPanel('eye')} hitSlop={500}>
        <Image source={asset(image.src)} style={{width: image.width, height: image.height}}/>
        <View style={styles.infoBox}>
            <Text style={styles.info}>
              {text}
            </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 50,
    height: 50,
  },
  infoBox: {
    padding: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    width: 500
  },
  info: {
    fontSize: 30,
    color: 'black',
  },
});