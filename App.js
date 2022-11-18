import * as eva from '@eva-design/eva'
import * as NavigationBar from 'expo-navigation-bar';
import * as Device from 'expo-device';

import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { C_Nav, C_Header } from './src/components'
import { V_Home } from './src/views'
import { useEffect } from 'react';


export default function App () {
  useEffect(() => {
    const deviceType = Device.brand
    if (deviceType !== 'Apple') setNav()
  }, [])
  
  async function setNav () {
    await NavigationBar.setPositionAsync('absolute')
    await NavigationBar.setBackgroundColorAsync('transparent');
  }
 
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={styles.container}>
          <StatusBar style="light" />
          <C_Header />
          <V_Home />
          <C_Nav />
        </Layout>
      </ApplicationProvider>
    </>
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
    paddingTop: 20,
  },
})