import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    color: COLORS.textWhite,
    fontWeight: '400',
    marginLeft: 10,
    fontSize: 14,
  },
});
export default styles;
