import { StyleSheet, View } from 'react-native'
import { Text } from '@ui-kitten/components'

export default function cNeader () {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Text>Logo</Text>
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
  },

  logo: {

  },

  title: {

  }
});