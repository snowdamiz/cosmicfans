import * as eva from '@eva-design/eva';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { ApplicationProvider, Text, Layout } from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={styles.container}>
        <StatusBar style="light" />

        <Layout style={styles.layout} level='4'>
          <Text>Layout level 4</Text>
        </Layout>
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});