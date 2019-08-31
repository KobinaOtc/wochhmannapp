import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = ({ onPress, title, style = {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Text style={style.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export { Button }