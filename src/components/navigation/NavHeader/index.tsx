import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Colors, Spaces } from '../../../assets/themes';
import { moderateScale } from 'react-native-size-matters';
import Images from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';

const NavHeader = () => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Image source={Images.ic_chevron_left} style={styles.iconLeft} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: Spaces.xl,
    paddingBottom: Spaces.l,
    paddingTop: Spaces.m,
  },
  backButton: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
});

export default NavHeader;
