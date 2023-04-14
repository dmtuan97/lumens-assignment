import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet, TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LText from '../LText';
import { Colors } from '../../../assets/themes';
import { moderateScale } from 'react-native-size-matters';

interface HyperLinkProps {
  content: string;
  icon: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}
const HyperLink = (props: HyperLinkProps) => {
  const { content, icon, style } = props;
  const wrapperStyle = StyleSheet.flatten([styles.wrapper, style]);
  return (
    <TouchableOpacity style={wrapperStyle}>
      <LText type="P1Regular" color={Colors.active}>
        {content}
      </LText>
      <Image source={icon} style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  iconStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
});

export default HyperLink;
