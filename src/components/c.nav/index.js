import { StyleSheet, View  } from 'react-native';
import { Button, Icon } from '@ui-kitten/components'


export default function cNav () {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} fill='#8F9BB3' name='activity-outline' />
      <Icon style={styles.icon} fill='#8F9BB3' name='people-outline'/>
      <Icon style={styles.icon} fill='#8F9BB3' name='message-circle-outline'/>
      {/* <Icon style={styles.icon} fill='#8F9BB3' name='person-outline'/> */}
      <Icon style={styles.icon} fill='#8F9BB3' name='settings-outline'/>
      {/* <Button appearance='ghost' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 14,
  },

  icon: {
    width: 26,
    height: 26,
  }
});