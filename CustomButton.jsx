import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export const buttonTypes = {
  PRIMARY_SMALL: {
    backgroundColor: '#2D65E6',
    width: 120,
    height: 28,
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  PRIMARY_LARGE: {
    backgroundColor: '#2D65E6',
    width: 358,
    height: 48,
    borderRadius: 12,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  LIGHT_SMALL: {
    backgroundColor: '#D0D2D8',
    width: 120,
    height: 28,
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  LIGHT_LARGE: {
    backgroundColor: '#D0D2D8',

    width: 358,
    height: 48,
    borderRadius: 12,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  OUTLINE_SMALL: {
    backgroundColor: 'Transparent',
    borderWidth: 2,
    borderColor: '#1A1C1E',
    width: 120,
    height: 28,
    borderRadius: 8,
    color: '#1A1C1E',
    fontSize: 12,
    fontWeight: '600',
  },
  OUTLINE_LARGE: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#1A1C1E',
    width: 358,
    height: 48,
    borderRadius: 12,
    color: '#1A1C1E',
    fontSize: 16,
    fontWeight: '600',
  },
};

const CustomButton = ({onPress, title, buttonType}) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      borderWidth: buttonType.borderWidth,
      borderColor: buttonType.borderColor,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: buttonType.backgroundColor,
      width: buttonType.width,
      height: buttonType.height,
      borderRadius: buttonType.borderRadius,
    },
    buttonTitle: {
      color: buttonType.color,
      fontSize: buttonType.fontSize,
      fontWeight: buttonType.fontWeight,
    },
  });
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
