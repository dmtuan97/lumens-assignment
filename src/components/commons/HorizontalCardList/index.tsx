import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import LText from '../LText';
import { Colors, Spaces } from '../../../assets/themes';
import HorizontalCardItem from './components/HorizontalCardItem';
import { ExclusiveOffer } from '../../../api/model';

interface HorizontalCardListProps {
  titleList: string;
  data: ExclusiveOffer[];
  coinBalance: number;
}

const SeparatorView = () => <View style={{ width: Spaces.xl }} />;

const HorizontalCardList = (props: HorizontalCardListProps) => {
  const { titleList, data, coinBalance } = props;
  const renderCardItem = ({
    item,
  }: {
    item: ExclusiveOffer;
    index: number;
  }) => {
    const { cost, unit, content, thumbnail } = item;
    return (
      <HorizontalCardItem
        title={`${cost} ${unit}`}
        content={content}
        isInsufficient={coinBalance < cost}
        thumbnail={thumbnail}
      />
    );
  };

  return (
    <View>
      <LText type="T1SemiBold" style={styles.title} color={Colors.primary}>
        {titleList}
      </LText>
      <FlatList
        style={{ overflow: 'visible' }}
        keyExtractor={(_, index) => `${titleList}_${index}`}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderCardItem}
        horizontal
        ListHeaderComponent={SeparatorView}
        ListFooterComponent={SeparatorView}
        ItemSeparatorComponent={SeparatorView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: Spaces.xl,
  },
});

export default HorizontalCardList;
