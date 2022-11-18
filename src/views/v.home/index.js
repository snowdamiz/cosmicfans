import { StyleSheet, ScrollView } from 'react-native'
import { Card } from '@ui-kitten/components'

export default function vHead () {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  }
})