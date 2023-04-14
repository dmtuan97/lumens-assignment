import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { TypoType } from '../../../assets/themes/Fonts';
import { Colors } from '../../../assets/themes';

interface LTextProps {
  type?: keyof typeof TypoType;
  children: ReactNode;
  color?: string;
  align?: 'center' | 'left' | 'right';
  style?: StyleProp<TextStyle>;
}

const LText = (props: LTextProps) => {
  const {
    children,
    type = 'P1Regular',
    align = 'left',
    color = Colors.base,
    style,
    ...rest
  } = props;
  const textStyle = StyleSheet.flatten([
    TypoType[type],
    style,
    { textAlign: align, color: color },
  ]);
  return (
    <Text style={textStyle} {...rest}>
      {children}
    </Text>
  );
};

export default LText;
