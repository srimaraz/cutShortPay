import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/colors';

import ButtonPrimary from '../../components/atoms/buttonPrimary';
import {TEXT_ENGLISH} from '../../utils/translations';

import {transactionsList} from '../../dummies/transactionsList';
import ProfilePicContainer from '../../components/atoms/profilePicContainer';
import styles from './styles';
import SVGsList from '../../assets/svgs';

const HomeScreen = ({navigation}) => {
  const dummyUserName = 'Sandra';
  const dummyAccountBalance = '200,000';

  const handleRequestMoney = () => {
    navigation.navigate('NewRequest');
  };
  const handleSendMoney = () => {
    navigation.navigate('SelectContacts');
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderCircle}>
          <SVGsList.Group10 />
        </View>
        <Text style={styles.headerGreetingText}>Hello {dummyUserName},</Text>
        <View style={styles.headerButtonContainer}>
          <ButtonPrimary
            height={35}
            width={90}
            text={TEXT_ENGLISH.addMoney}
            fillcolor={COLORS.darkBlue2}
            textColor={COLORS.blueText1}
            textFontSize={13}
          />
        </View>
      </View>
    );
  };

  // renders induvidual transaction item
  const renderTrasactionCard = ({item, index}) => {
    let config = {};
    switch (item.status) {
      case 'Recieved':
        config = {color: COLORS.successGreen, icon: <SVGsList.RecievedSVG />};
        break;
      case 'Sent':
        config = {color: COLORS.sentYellow, icon: <SVGsList.SentSVG />};
        break;
      case 'Failed':
        config = {color: COLORS.failedRed, icon: <SVGsList.FailedSVG />};
        break;
      default:
        config = {};
        break;
    }

    return (
      <TouchableOpacity
        style={[
          styles.transactionCardContainer,
          {backgroundColor: index % 2 ? COLORS.modalBlue : COLORS.darkBlue2},
        ]}>
        <ProfilePicContainer size={50} imageUrl={item.user.profilePicUrl} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.userNameText}>{item.user.userName}</Text>
          <View
            style={[
              styles.transactionStatusContainer,
              {backgroundColor: config.color},
            ]}>
            <View style={styles.transactionStatusIconContainer}>
              {config.icon}
            </View>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>

        <Text style={[styles.transactionAmountText, {color: config.color}]}>
          ₦ {item.amount}
        </Text>
      </TouchableOpacity>
    );
  };

  //renders the "all transactions" modal
  const renderTransactionsList = () => {
    return (
      <View style={styles.transactionModal}>
        <View style={styles.dragMarker} />
        <View style={styles.dropdownContainer}>
          <Text style={styles.modalHeadingText}>
            {TEXT_ENGLISH.allTransactions}
          </Text>

          <View style={styles.dropdownTextContainer}>
            <Text style={styles.dropdownTextLeft}>{TEXT_ENGLISH.sortBy} :</Text>
            <Text style={styles.dropdownTextRight}>Recent</Text>
            <SVGsList.DropdownSVG />
          </View>
        </View>
        <FlatList
          data={transactionsList}
          keyExtractor={(item, index) => item.id}
          renderItem={renderTrasactionCard}
        />
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      <View style={styles.balanceParentContainer}>
        <Text style={styles.currentBalanceHeading}>
          {TEXT_ENGLISH.currentBalance}
        </Text>
        <View style={styles.accountBalanceContainer}>
          <SVGsList.CurrencySVG />
          <Text style={styles.accountBalanceText}>{dummyAccountBalance}</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonPrimary
          height={60}
          width="47%"
          borderWidth={1}
          borderColor={COLORS.lightBlueText}
          text={TEXT_ENGLISH.requestMoney}
          textColor={COLORS.lightBlueText}
          onPress={handleRequestMoney}
        />
        <ButtonPrimary
          height={60}
          width="47%"
          borderWidth={1}
          borderColor={COLORS.lightBlueText}
          text={TEXT_ENGLISH.sendMoney}
          textColor={COLORS.lightBlueText}
          onPress={handleSendMoney}
        />
      </View>
      {renderTransactionsList()}
    </View>
  );
};

export default HomeScreen;
