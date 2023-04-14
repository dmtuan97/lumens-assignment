import { moderateScale } from 'react-native-size-matters';

const FontType = {
  bold: 'Hellix-Bold',
  semibold: 'Hellix-SemiBold',
  regular: 'Hellix-Regular',
};

const getTextStyle = (fontFamily: string, size: number, lineHeight: number) => {
  return {
    fontFamily,
    fontSize: moderateScale(size),
    lineHeight: moderateScale(lineHeight),
  };
};

const TypoRegular = {
  H1Regular: getTextStyle(FontType.regular, 48, 72),
  P1Regular: getTextStyle(FontType.regular, 16, 24),
  P3Regular: getTextStyle(FontType.regular, 14, 20),
};

const TypoSemiBold = {
  H1SemiBold: getTextStyle(FontType.semibold, 48, 72),
  H3SemiBold: getTextStyle(FontType.semibold, 32, 40),
  T1SemiBold: getTextStyle(FontType.semibold, 18, 24),
  T2SemiBold: getTextStyle(FontType.semibold, 16, 24),
  T3SemiBold: getTextStyle(FontType.semibold, 14, 24),
};

const TypoBold = {
  H1Bold: getTextStyle(FontType.bold, 48, 72),
};

export const TypoType = {
  ...TypoRegular,
  ...TypoSemiBold,
  ...TypoBold,
};
