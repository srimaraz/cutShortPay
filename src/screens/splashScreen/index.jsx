import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import ButtonPrimary from '../../components/atoms/buttonPrimary';
import {TEXT_ENGLISH} from '../../utils/translations';
import SVGsList from '../../assets/svgs';
import styles from './styles';

const SplashScreen = ({navigation}) => {
  const handleNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.splashMainContainer}>
      <SVGsList.Vector35 width="100%" style={styles.vector35} />
      <SVGsList.Vector33 width="100%" style={styles.vector33} />
      <SVGsList.Rectangle257 style={styles.rectangle257} />
      <SVGsList.Polygon1 style={styles.polygon1} />
      <SVGsList.Vector34 style={styles.vector34} />
      <SVGsList.Rectangle256 style={[styles.rectangle, {top: 130}]} />
      <SVGsList.Rectangle255 style={[styles.rectangle, {top: 160}]} />
      <SVGsList.Ellipse7 style={[styles.ellipse, {left: '50%'}]} />
      <SVGsList.Ellipse8 style={[styles.ellipse, {right: '50%'}]} />
      <SVGsList.Polygon2 style={[styles.polygonCenter, {right: '50%'}]} />
      <SVGsList.Polygon3 style={[styles.polygonCenter, {left: '50%'}]} />
      <SVGsList.Lock1 style={styles.lock} />
      <SVGsList.Group9 style={styles.group9} />
      <View style={styles.bottomMainContainer}>
        <View style={styles.paginationMarkersContainer}>
          <View style={styles.paginationStyle} />
          <View style={[styles.paginationStyle, {width: 32}]} />
          <View style={styles.paginationStyle} />
        </View>
        <Text style={styles.splashHeadingText}>{TEXT_ENGLISH.splashTag1}</Text>
        <Text style={styles.splashSubHeadingText}>
          {TEXT_ENGLISH.splashTag2}
        </Text>
        <ButtonPrimary
          fillcolor={COLORS.textWhite}
          height={50}
          width={145}
          text={TEXT_ENGLISH.startBanking}
          textColor={COLORS.darkBlue3}
          onPress={handleNavigation}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
