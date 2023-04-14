import { moderateScale } from 'react-native-size-matters';

export const Colors = {
  base: '#92929D',
  primary: '#171725',
  active: '#0062FF',
  inactive: '#696974',
  grey_01: '#B5B5BE',
  grey_02: '#F1F1F5',
  grey_06: '#D5D5DC',
  grey_07: '#E2E2EA',
  grey_08: '#F1F1F5',
  red_notification: '#FC5A5A',
  white: '#ffffff',
};

export const Spaces = {
  s: moderateScale(4),
  m: moderateScale(8),
  l: moderateScale(16),
  ml: moderateScale(18),
  xl: moderateScale(24),
};

export const Radius = {
  xxs: moderateScale(2.5),
  s: moderateScale(4),
  m: moderateScale(8),
};

export const GlobalStyle = {
  lowShadow: {
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.04,
    shadowRadius: 9.54,
    elevation: 15,
  },
};
