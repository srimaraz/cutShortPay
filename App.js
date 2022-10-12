import {View, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import StackNavigator from './src/navigation/stackNavigator';

const App = () => {
  return (
    <View style={styles.rootContainer}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <StackNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {display: 'flex', height: '100%', width: '100%'},
});

export default App;
