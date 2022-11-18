import { StyleSheet, View  } from 'react-native';
import { Text } from '@ui-kitten/components';

export default function cNav () {
  return (
    <View style={styles.container}>
      <View style={styles.left_section}>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
      </View>
      <View style={styles.right_section}>
        <View style={styles.button}></View>
        <View style={styles.button}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    borderRadius: 12,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
  },

  left_section: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '65%',
    height: '75%',
    borderRightWidth: 1,
    borderRightColor: '#292929',
  },

  right_section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '35%',
  },

  button: {
    width: 22,
    height: 22,
  }
});