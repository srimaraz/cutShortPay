import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';
import ButtonPrimary from '../../components/atoms/buttonPrimary';
import {TEXT_ENGLISH} from '../../utils/translations';
import ProfilePicContainer from '../../components/atoms/profilePicContainer';
import BackTextButton from '../../components/atoms/backTextButton';
import SVGsList from '../../assets/svgs';
import styles from './styles';

export default function NewRequestScreen({navigation}) {
  const fakeAPIUserData = {
    userName: 'Adeleke Ramon',
    transactionType: 'request',
    amount: '200,000',
    profilePicUrl:
      'https://s3-alpha-sig.figma.com/img/9d7d/220c/2a9d4e898b77de9f2b525ce5f95838dd?Expires=1666569600&Signature=Nz3IddVhfZIkF1iAZNoWJBe-Gtn0ozlnWZuOXjYGjPviAgglLrO7Th9mstC0K5no7NMkvktivvT8BbzyFzpOumu7SPpI~xUcgI~ODMOfeASmgsbS~Y6rIQajNG31~5JSGhhTFVBT~SOHhD5g0-hlcfBBpRbHnlQd7ZRY-C2IHBNVREDfmZhpmPpHydGn76wyvnnWVConuZg~N95ZMGeE7-kpDXN0a1DG43I2lizGBC2MUfWm8SNVDx4v5aSSDp18xC8lcSFxloEypSpn2TAOw3SObkGBBFrYKodVT-6BwKlvx1bb8tpptIMMfEA5jt9yfcHyqf0Ev8OlKJzKWC~ueg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  };
  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <SVGsList.Vector36 width="120%" style={styles.curveBackground} />
      <View style={styles.contentsWrapper}>
        <View style={styles.headerContainer}>
          <BackTextButton onPress={handleNavigation} />
          <Text style={styles.headerMainText}>{TEXT_ENGLISH.newRequest}</Text>
        </View>
        <View style={styles.rippleLayerOut}>
          <View style={styles.rippleLayerIn}>
            <ProfilePicContainer
              size={100}
              imageUrl={fakeAPIUserData.profilePicUrl}
            />
          </View>
        </View>
        <View style={styles.requestContainer}>
          <Text style={styles.userText}>{fakeAPIUserData.userName}</Text>
          <Text style={styles.isRequestingText}>is requesting for:</Text>
          <View style={styles.amountTextContainer}>
            <SVGsList.CurrencySVG />
            <Text style={styles.amountText}>{fakeAPIUserData.amount}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonPrimary
            width={180}
            height={60}
            fillcolor={COLORS.buttonRed}
            text={TEXT_ENGLISH.sendMoney}
          />
          <ButtonPrimary
            width={180}
            height={60}
            borderColor={COLORS.lightBlueText}
            textColor={COLORS.lightBlueText}
            borderWidth={2}
            text={TEXT_ENGLISH.dontSend}
          />
        </View>
      </View>
    </View>
  );
}
