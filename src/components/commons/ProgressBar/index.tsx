import React, { useEffect, useState } from 'react';
import {
  LayoutAnimation,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Colors, Radius } from '../../../assets/themes';

interface ProgressBarProps {
  style: StyleProp<ViewStyle>;
  currentProgress: number;
}

const ProgressBar = ({ currentProgress = 0, style }: ProgressBarProps) => {
  const [parentWidth, setParentWidth] = useState<number>(0);
  const [childWidth, setChildWidth] = useState<number>(0);

  useEffect(() => {
    if (parentWidth > 0) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setChildWidth(parentWidth * currentProgress);
    }
  }, [currentProgress, parentWidth]);

  const parentStyle = StyleSheet.flatten([styles.parentView, style]);
  const childStyle = StyleSheet.flatten([
    styles.parentView,
    styles.childView,
    { width: childWidth },
  ]);
  return (
    <View
      style={parentStyle}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => setParentWidth(width)}>
      <View style={childStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    height: moderateScale(5),
    borderRadius: Radius.xxs,
    backgroundColor: Colors.grey_07,
    overflow: 'hidden',
  },
  childView: {
    backgroundColor: Colors.active,
  },
});

export default ProgressBar;
