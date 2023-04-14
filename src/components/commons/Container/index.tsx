import React, { ReactNode } from 'react';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { StyleProp, ViewStyle } from 'react-native';

const Container = ({
  children,
  edges = ['top', 'left', 'right'],
  style,
}: {
  children: ReactNode;
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <SafeAreaView edges={edges} style={style}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
