import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import LText from '../LText';
import { Colors, Radius, Spaces } from '../../../assets/themes';

interface ButtonProps {
  content: string;
  size: 'small' | 'medium' | 'large';
  style?: StyleProp<ViewStyle>;
}

const PADDING_SIZE = {
  small: Spaces.s,
  medium: Spaces.m,
  large: Spaces.ml,
};

const Button = (props: ButtonProps) => {
  const { content, size = 'medium', style } = props;
  const paddingVertical = PADDING_SIZE[size];
  const buttonStyle = StyleSheet.flatten([
    styles.wrapper,
    { paddingVertical },
    style,
  ]);
  return (
    <TouchableOpacity style={buttonStyle}>
      <LText type="T1SemiBold" color={Colors.white} align="center">
        {content}
      </LText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderRadius: Radius.s,
  },
});

export default Button;
