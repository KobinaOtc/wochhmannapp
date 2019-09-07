import { StyleSheet } from 'react-native'
import { width } from '../../common'

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  }
})

export const modalStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    width: width - 80,
    height: 150,
    paddingTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 10
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold'
  },
  touchableHighLight: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 10
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
  buttonView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center'
  }
})