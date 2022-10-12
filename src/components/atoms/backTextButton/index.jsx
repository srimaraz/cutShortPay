import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SVGsList from '../../../assets/svgs';
import styles from './styles';

const BackTextButton = props => {
  const {onPress} = props;
  // You can Modify onPress prop to customize the back action.

  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <SVGsList.Back height={14} />
      <Text style={styles.backText}>{'Back'}</Text>
    </TouchableOpacity>
  );
};

export default BackTextButton;
