import { StyleSheet, View } from 'react-native'
import { Text } from '@ui-kitten/components'
import Logo from '../../../assets/logo.svg';

export default function cHeader () {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Logo width={120} height={40} />;
      </View>
      <View style={styles.title}>
        <Text>Page Title</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 25,
    paddingHorizontal: 20,
  },

  logo: {

  },

  title: {

  }
});