import { StyleSheet, Dimensions, platform } from 'react-native'

// Scale and Dynamic Sizing
export const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 350

export const scale = size => width / guidelineBaseWidth * size
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor

// Global Button Styling Variables
export const borderRadius = 2
export const borderWidth = 1.5
export const paddingHorizontal = '5%'
export const fontWeight = '400'

// Common Styling
export const globalStyles = StyleSheet.create({
  basicContainerStyles: {
    flex: 1
  },
  failIcon: {
    fontSize: moderateScale(25)
  }
})

export const basicButton = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: borderRadius,
    backgroundColor: '#ffde00'
  },
  text: {
    color: 'black',
    alignSelf: 'center',
    fontSize: moderateScale(20),
    fontWeight: '400',
    padding: paddingHorizontal
  }
})
