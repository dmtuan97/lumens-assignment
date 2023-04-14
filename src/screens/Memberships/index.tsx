import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Container from '../../components/commons/Container';
import LText from '../../components/commons/LText';
import { Colors, GlobalStyle, Radius, Spaces } from '../../assets/themes';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import NavHeader from '../../components/navigation/NavHeader';
import { moderateScale } from 'react-native-size-matters';
import Images from '../../assets/images';
import ProgressBar from '../../components/commons/ProgressBar';
import HyperLink from '../../components/commons/HyperLink';
import Button from '../../components/commons/Button';
import HorizontalCardList from '../../components/commons/HorizontalCardList';
import { getCurrentTier, getDataExclusive } from '../../api/loyalty';
import { CurrentTierInfo, ExclusiveOfferCollection } from '../../api/model';
import { priceFormatter } from '../../utils/number';
import moment from 'moment';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Memberships = () => {
  const [loadingCurrentTier, setLoadingCurrentTier] = useState<boolean>(true);
  const [loadingExclusiveOffer, setLoadingExclusiveOffer] =
    useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [currentTier, setCurrentTier] = useState<CurrentTierInfo>();
  const [dataExclusive, setDataExclusive] =
    useState<ExclusiveOfferCollection[]>();

  const {
    tierName = '',
    incentive,
    coinBalance = 0,
    maxBalance = 1,
    nextTier,
    lastUpdated,
    paidRentalFee,
  } = currentTier ?? {};
  const { cost = '', gain = '' } = incentive ?? {};
  const { payMore = '', name: nextTierName } = nextTier ?? {};

  const getData = () => {
    setCurrentTier(undefined);
    setDataExclusive([]);
    getCurrentTier()
      .then(response => {
        setCurrentTier(response);
        setLoadingCurrentTier(false);
        return getDataExclusive();
      })
      .then(data => {
        setDataExclusive(data);
      })
      .catch(() => {
        // TODO: Implement later
      })
      .finally(() => {
        setLoadingExclusiveOffer(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    setLoadingExclusiveOffer(true);
    setLoadingCurrentTier(true);
    getData();
  }, []);

  const updatedAt = useMemo(() => {
    return lastUpdated
      ? moment(lastUpdated, 'YYYY-MM-DD').format('DD/MM/YYYY')
      : '__/__/____';
  }, [lastUpdated]);

  const renderHeader = useCallback(() => {
    return (
      <>
        <NavHeader />
        <View style={styles.tierWrapper}>
          {loadingCurrentTier ? (
            <SkeletonPlaceholder
              backgroundColor={'#E1E9EE'}
              highlightColor={'#F2F8FC'}>
              <SkeletonPlaceholder.Item width={180} height={48} />
            </SkeletonPlaceholder>
          ) : (
            <LText type="H3SemiBold" color={Colors.white}>
              {tierName}
            </LText>
          )}
          {loadingCurrentTier ? (
            <SkeletonPlaceholder
              backgroundColor={'#E1E9EE'}
              highlightColor={'#F2F8FC'}>
              <SkeletonPlaceholder.Item
                style={styles.contentTier}
                width={300}
                height={16}
              />
            </SkeletonPlaceholder>
          ) : (
            <LText
              type="P1Regular"
              color={Colors.grey_01}
              style={styles.contentTier}>
              {`In ${tierName}, every ${cost} in rental fee paid, you get ${gain} to redeem exclusive rewards.`}
            </LText>
          )}
        </View>
      </>
    );
  }, [cost, gain, loadingCurrentTier, tierName]);

  const renderOfferSection = useCallback(
    ({ item, index }: { item: ExclusiveOfferCollection; index: number }) => {
      const { title, data } = item ?? {};
      return (
        <HorizontalCardList
          key={`section_${index}`}
          titleList={title}
          data={data}
          coinBalance={coinBalance}
        />
      );
    },
    [coinBalance],
  );

  const renderContent = useCallback(() => {
    return (
      <View style={styles.exclusiveWrapper}>
        <View style={[styles.cardTierWrapper, GlobalStyle.lowShadow]}>
          <ImageBackground
            source={Images.img_tier_background}
            style={styles.cardTierViewContent}
            imageStyle={styles.tierBackgroundImage}>
            <LText type="T3SemiBold" color={Colors.grey_01}>
              Available Coin balance
            </LText>
            {loadingCurrentTier ? (
              <SkeletonPlaceholder
                backgroundColor={'#E1E9EE'}
                highlightColor={'#F2F8FC'}>
                <SkeletonPlaceholder.Item width={180} height={48} />
              </SkeletonPlaceholder>
            ) : (
              <LText
                type="H1Regular"
                color={Colors.primary}
                style={styles.coinText}>
                {priceFormatter(coinBalance, '')}
              </LText>
            )}
            <ProgressBar
              currentProgress={coinBalance / maxBalance}
              style={styles.progressBar}
            />
            <LText type="P1Regular">
              {paidRentalFee
                ? `You have paid rental fee for ${paidRentalFee}`
                : ''}
              {nextTierName
                ? `\nPay more ${payMore} to achieve ${nextTierName}.`
                : ''}
            </LText>
            <HyperLink
              content={'View tier benefits'}
              icon={Images.ic_chevron_right}
              style={styles.hyperLink}
            />
            <Button
              content={'My Coupons'}
              size="large"
              style={styles.myCouponsButton}
            />
            <LText
              type="P3Regular"
              color={Colors.grey_01}
              align="center"
              style={styles.updatedText}>
              Updated: {updatedAt}
            </LText>
          </ImageBackground>
        </View>
        {loadingExclusiveOffer ? (
          <View style={styles.loadingView}>
            <ActivityIndicator
              size={moderateScale(40)}
              color={Colors.primary}
            />
          </View>
        ) : (
          <FlatList data={dataExclusive} renderItem={renderOfferSection} />
        )}
      </View>
    );
  }, [
    loadingCurrentTier,
    coinBalance,
    maxBalance,
    paidRentalFee,
    nextTierName,
    payMore,
    updatedAt,
    loadingExclusiveOffer,
    dataExclusive,
    renderOfferSection,
  ]);

  const renderLayout = ({ item }: { item: string }) => {
    if (item === 'header') {
      return renderHeader();
    }

    return renderContent();
  };

  return (
    <Container edges={['top', 'left', 'right']}>
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor={Colors.white}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        data={['header', 'content']}
        renderItem={renderLayout}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  tierWrapper: {
    paddingHorizontal: Spaces.xl,
    marginBottom: moderateScale(40),
  },
  contentTier: {
    marginTop: Spaces.m,
  },
  exclusiveWrapper: {
    backgroundColor: Colors.white,
    marginTop: moderateScale(180),
    flex: 1,
    overflow: 'visible',
    paddingBottom: Spaces.xl,
  },
  cardTierWrapper: {
    marginTop: moderateScale(-180),
    marginHorizontal: Spaces.l,
    backgroundColor: Colors.white,
    borderRadius: Radius.m,
    overflow: 'visible',
  },
  cardTierViewContent: {
    padding: Spaces.l,
  },
  coinText: {
    marginTop: Spaces.m,
  },
  tierBackgroundImage: {
    tintColor: Colors.grey_02,
  },
  progressBar: {
    marginTop: moderateScale(30),
    marginBottom: moderateScale(33),
  },
  hyperLink: {
    marginTop: Spaces.l,
  },
  myCouponsButton: {
    marginTop: Spaces.xl,
  },
  updatedText: {
    marginTop: Spaces.l,
  },
  loadingView: {
    height: moderateScale(200),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Memberships;
