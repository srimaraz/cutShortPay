import {Text, View, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../utils/colors';
import ScatteredProfileImages from '../../components/organisms/scatteredProfileImages';
import ProfilePicContainer from '../../components/atoms/profilePicContainer';
import ButtonPrimary from '../../components/atoms/buttonPrimary';
import {TEXT_ENGLISH} from '../../utils/translations';
import BackTextButton from '../../components/atoms/backTextButton';
import styles from './styles';

const SelectContactsScreen = ({navigation}) => {
  const [selectedContact, setSelectedContact] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');
  const [borderColor, setBorderColor] = useState('grey');

  const handleTextChange = text => {
    setValue(text);
    //future scope: filter user from contact list , whose fullname contains the entered text
  };

  const handleContactSelection = item => {
    setShowModal(true);
    setSelectedContact(item);
  };

  const handlePressOutside = () => {
    setShowModal(false);
  };
  const handleSearchFocus = () => {
    setShowModal(false);
    setBorderColor(COLORS.successGreen);
  };
  const handleNavigation = () => {
    navigation.goBack();
  };

  const renderModal = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.dragMarker} />
        <ProfilePicContainer
          size={100}
          imageUrl={selectedContact.profilePicUrl}
        />
        <Text style={styles.contactName}>{selectedContact.contactName}</Text>
        <Text style={styles.contactNo}>{selectedContact.contactNo}</Text>
        <ButtonPrimary
          height={60}
          width={150}
          fillcolor={COLORS.buttonRed}
          text={TEXT_ENGLISH.continue}
          textColor={COLORS.textWhite}
        />
      </View>
    );
  };

  return (
    <Pressable onPress={handlePressOutside} style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <BackTextButton onPress={handleNavigation} />
        <TextInput
          value={value}
          onFocus={handleSearchFocus}
          onBlur={() => setBorderColor(COLORS.plainGrey)}
          style={[styles.searchBoxStyle, {borderColor: borderColor}]}
          placeholder="Search Contact"
          placeholderTextColor={COLORS.textWhite}
          onChangeText={handleTextChange}
        />
      </View>
      {/* for ripple/radar effect */}
      <View
        style={[
          styles.circle,
          {
            width: 400,
            height: 400,
            marginTop: 30,
          },
        ]}>
        <View
          style={[
            styles.circle,
            {
              width: 300,
              height: 300,
            },
          ]}>
          <View
            style={[
              styles.circle,
              {
                width: 200,
                height: 200,
              },
            ]}>
            <View
              style={[
                styles.circle,
                {
                  width: 100,
                  height: 100,
                },
              ]}
            />
          </View>
        </View>
      </View>
      {/* to show contacts/user randomly placed  */}
      <ScatteredProfileImages handleContactSelection={handleContactSelection} />
      {/* modal when any user is slected */}
      {showModal && renderModal()}
    </Pressable>
  );
};

export default SelectContactsScreen;
