import { StyleSheet } from 'react-native'
import { moderateScale, fontWeight } from '../../common/commonStyles'

export const styles = StyleSheet.create({
  keyboardAwareContainer: {
   flexGrow: 1,
   paddingHorizontal: '12%'
  },  
  childOneView: {
    flex: 2,
    paddingTop: '20%',
    justifyContent: 'center',
    alignContent: 'center'
  },
  imageStyles: {
    // width: moderateScale(200),
    // height: moderateScale(200),
    // maxWidth: moderateScale(200),
    flexDirection: 'row',
    alignSelf: 'center'
  },
  childViewTwo: {
    flex: 3,
    justifyContent: 'center'
  },
  childViewThree: {
    flex: 1,
    paddingHorizontal: '30%',
    justifyContent: 'center'
  },
  childViewFour: {
    flex: 1
  },
  itemStyles: {
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 2
  },
  inputStyles: {
    paddingLeft: moderateScale(5),
    fontSize: moderateScale(20),
    fontWeight: '200',
    color: 'gray'
  },
  textOneStyles: {
    alignSelf: 'center',
    fontSize: moderateScale(25),
    fontWeight: fontWeight
  }
})