import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Images from '../../../../../assets/images';
import LText from '../../../LText';
import {
  Colors,
  GlobalStyle,
  Radius,
  Spaces,
} from '../../../../../assets/themes';
import { moderateScale } from 'react-native-size-matters';

interface HorizontalCardItemProps {
  image?: string;
  title: string;
  content: string;
  isInsufficient?: boolean;
  thumbnail?: string;
}

const HorizontalCardItem = (props: HorizontalCardItemProps) => {
  const { thumbnail, content, title, isInsufficient } = props;
  const cardStyle = StyleSheet.flatten([
    GlobalStyle.lowShadow,
    styles.cardWrapper,
  ]);
  return (
    <TouchableOpacity style={cardStyle}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <View style={styles.cardContent}>
        <View style={styles.title}>
          {isInsufficient && (
            <Image source={Images.ic_clock} style={styles.clockIcon} />
          )}
          <LText
            type="T2SemiBold"
            color={isInsufficient ? Colors.inactive : Colors.active}>
            {title}
          </LText>
        </View>
        <LText type="P1Regular" style={styles.marginTop8}>
          {content}
        </LText>
        {isInsufficient && (
          <LText
            type="P3Regular"
            color={Colors.active}
            style={styles.marginTop8}>
            Insufficient coins
          </LText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: Colors.white,
    width: moderateScale(200),
    borderRadius: Radius.s,
    borderWidth: moderateScale(1),
    borderColor: Colors.grey_08,
  },
  cardContent: {
    padding: Spaces.l,
  },
  image: {
    resizeMode: 'cover',
    width: moderateScale(200),
    height: moderateScale(100),
    borderTopLeftRadius: Radius.s,
    borderTopRightRadius: Radius.s,
  },
  marginTop8: {
    marginTop: Spaces.m,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    width: moderateScale(16),
    height: moderateScale(16),
    marginRight: Spaces.s,
  },
});

export default HorizontalCardItem;
