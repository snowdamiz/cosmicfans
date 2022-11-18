import * as eva from '@eva-design/eva'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { ApplicationProvider, Layout } from '@ui-kitten/components'

import { C_Nav, C_Header } from './src/components'
import { V_Home } from './src/views'

export default function App () {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        <StatusBar style="light" />
        <C_Header />
        <V_Home />
        <C_Nav />
      </Layout>
    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0D0D0E',
    justifyContent: 'space-between',
    height: '100%',
    padding: 16,
  },
})