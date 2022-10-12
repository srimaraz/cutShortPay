import {Image} from 'react-native';
import React from 'react';

const ProfilePicContainer = props => {
  const {size, imageUrl} = props;
  return (
    <Image
      style={{
        height: size,
        width: size,
        borderRadius: size,
      }}
      source={{
        uri: imageUrl,
      }}
    />
  );
};

export default ProfilePicContainer;
