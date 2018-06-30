import React from 'react'
import { Platform, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native'


const TouchableView = ({ isRippleDisabled, rippleColor, children, style, ...props }) => {
  if (!isRippleDisabled) {
    const background = TouchableNativeFeedback.Ripple('#FFF')
    return (
      <TouchableNativeFeedback {...props} background={background}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    )
  } else {
    return (
      <TouchableOpacity {...props} style={style}>
        {children}
      </TouchableOpacity>
    )
  }
}


export default TouchableView
