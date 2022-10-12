import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../utils/colors';
import styles from './styles';

const ButtonPrimary = props => {
  const {
    height = 60,
    width = 175,
    fillcolor = 'transparent',
    borderColor = 'transparent',
    borderWidth = 0,
    textColor = COLORS.textWhite,
    textFontSize = 16,
    text,
    onPress = () => {},
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
        {
          height: height,
          width: width,
          backgroundColor: fillcolor,
          borderWidth: borderWidth,
          borderColor: borderColor,
        },
      ]}>
      <Text
        style={[styles.bottonText, {fontSize: textFontSize, color: textColor}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
