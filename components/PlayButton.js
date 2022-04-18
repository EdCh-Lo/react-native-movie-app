import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Colors from '../themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

class PlayButton extends React.PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={handlePress} style={styles.button}>
        <Icon name={'caret-forward-outline'} size={30} color={Colors.black} />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: Colors.primary,
  },
});

export default PlayButton;
