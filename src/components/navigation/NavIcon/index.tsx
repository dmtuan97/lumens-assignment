import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/themes';

interface NavIconProps {
  source: ImageSourcePropType;
  color: string;
}

const NavIcon = ({ source, color }: NavIconProps) => {
  const iconStyle = StyleSheet.flatten([
    styles.iconStyle,
    { tintColor: color },
  ]);
  return <Image source={source} style={iconStyle} />;
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 40,
    height: 40,
  },
});

export default NavIcon;
