import { StyleSheet, Dimensions, platform } from 'react-native'

// Scale and Dynamic Sizing
export const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 350

export const scale = size => width / guidelineBaseWidth * size
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor

// Global Button Styling Variables
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
