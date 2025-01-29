import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop:150 
  },
  animatedBox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    // position: 'absolute', // Absolute position to animate freely
  },
});

export default styles;
