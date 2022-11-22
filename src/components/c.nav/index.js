import { StyleSheet, View  } from 'react-native'
import { Button, Icon } from '@ui-kitten/components'

const FeedIcon     = (props) => <Icon {...props} style={styles.icon} fill='#C9D1D9' name='activity-outline'/>
const CreatorsIcon = (props) => <Icon {...props} style={styles.icon} fill='#C9D1D9' name='people-outline'/>
const MessagesIcon = (props) => <Icon {...props} style={styles.icon} fill='#C9D1D9' name='message-circle-outline'/>
const ProfileIcon  = (props) => <Icon {...props} style={styles.icon} fill='#C9D1D9' name='person-outline'/>
const SettingsIcon = (props) => <Icon {...props} style={styles.icon} fill='#C9D1D9' name='settings-outline'/>

export default function cNav () {
  return (
    <View style={styles.container}>
      <Button style={styles.button} appearance='ghost' accessoryLeft={FeedIcon}/>
      <Button style={styles.button} appearance='ghost' accessoryLeft={CreatorsIcon}/>
      <Button style={styles.button} appearance='ghost' accessoryLeft={MessagesIcon}/>
      <Button style={styles.button} appearance='ghost' accessoryLeft={ProfileIcon}/>
      <Button style={styles.button} appearance='ghost' accessoryLeft={SettingsIcon}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    paddingBottom: 18,
    paddingTop: 4,
  },

  btnStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    border: 1,
    borderColor: '#ffffff',
    width: 20,
    height: 20
  },
})