import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProfilePicContainer from '../../atoms/profilePicContainer';
import {COLORS} from '../../../utils/colors';
import {contactsList} from '../../../dummies/contactsList';
import styles from './styles';

const ScatteredProfileImages = ({handleContactSelection}) => {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
  const [loading, setLoading] = useState(true);
  const [contactListFromAPI, setContactListFromAPI] = useState(contactsList);
  useEffect(() => {
    getRandomPositions(contactListFromAPI);
  }, []);
  var min_x = 0;
  var max_x = deviceWidth - 100;
  var min_y = 0;
  var max_y = deviceHeight / 2 - 60;
  var filled_areas = new Array();

  function getRandomPositions(contactListCopy) {
    contactListCopy.forEach(contact => {
      var rand_x = 0;
      var rand_y = 0;
      var area;
      do {
        rand_x = Math.round(min_x + (max_x - min_x) * (Math.random() % 1));
        rand_y = Math.round(min_y + (max_y - min_y) * (Math.random() % 1));
        area = {
          x: rand_x,
          y: rand_y,
          width: 60,
          height: 60,
        };
      } while (check_overlap(area));

      contact.position = [rand_x, rand_y];
    });
    setLoading(false);
    setContactListFromAPI(contactListCopy);
  }
  //check if exact same position has been assigned before
  function check_overlap(area) {
    for (var i = 0; i < filled_areas.length; i++) {
      check_area = filled_areas[i];

      var bottom1 = area.y + area.height;
      var bottom2 = check_area.y + check_area.height;
      var top1 = area.y;
      var top2 = check_area.y;
      var left1 = area.x;
      var left2 = check_area.x;
      var right1 = area.x + area.width;
      var right2 = check_area.x + check_area.width;
      if (
        bottom1 < top2 ||
        top1 > bottom2 ||
        right1 < left2 ||
        left1 > right2
      ) {
        continue;
      }
      return true;
    }
    return false;
  }
  function handleContactClick(item) {
    contactListFromAPI.forEach(a => (a.isSelected = false));
    item.isSelected = true;
    setContactListFromAPI([...contactListFromAPI, item]);
    handleContactSelection(item);
  }

  //future scope: show some loader when data is fetched and processed, for now : using blank screen as loader
  if (loading) {
    return <></>;
  }
  return (
    <View
      style={[
        styles.mainContainer,
        {maxHeight: deviceHeight / 2, width: deviceWidth},
      ]}>
      {contactListFromAPI.map(contact => (
        <View
          key={Math.random() * 10000}
          style={[
            styles.userContainer,
            {
              top: contact.position[1],
              left: contact.position[0],
            },
          ]}>
          <TouchableOpacity
            onPress={() => handleContactClick(contact)}
            style={[
              {
                borderColor: contact.isSelected
                  ? COLORS.successGreen
                  : COLORS.plainGrey,
              },
              styles.profilePicWrapper,
            ]}>
            <ProfilePicContainer
              size={contact.isSelected ? 60 : 50}
              imageUrl={contact.profilePicUrl}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: contact.isSelected
                ? COLORS.successGreen
                : COLORS.textWhite,
              fontWeight: '500',
              fontSize: 12,
            }}>
            {contact.contactName}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ScatteredProfileImages;
