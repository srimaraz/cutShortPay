import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {flex: 1, position: 'absolute', top: 130},
  dragMarker: {
    backgroundColor: COLORS.lightBlueMarker,
    height: 8,
    width: 64,
    borderRadius: 10,
    marginBottom: 25,
  },
  profilePicWrapper: {
    borderWidth: 3,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  userContainer: {position: 'absolute', alignItems: 'center'},
});
export default styles;
