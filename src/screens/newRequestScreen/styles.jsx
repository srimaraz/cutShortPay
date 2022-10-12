import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.darkBlueBG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentsWrapper: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  curveBackground: {
    position: 'absolute',
    top: 0,
    left: -20,
    transform: [{rotate: '10deg'}],
  },
  headerMainText: {
    color: COLORS.textWhite,
    fontWeight: '500',
    fontSize: 18,
  },
  rippleLayerOut: {
    borderRadius: 220,
    height: 220,
    width: 220,
    backgroundColor: COLORS.modalBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  rippleLayerIn: {
    borderRadius: 160,
    height: 160,
    width: 160,
    backgroundColor: COLORS.darkBlue4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    height: 150,
    justifyContent: 'space-between',
    marginTop: 50,
  },
  amountTextContainer: {flexDirection: 'row', alignItems: 'center'},
  requestContainer: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  amountText: {
    color: COLORS.textWhite,
    fontWeight: '700',
    fontSize: 40,
    marginLeft: 6,
  },
  userText: {color: COLORS.textWhite, fontWeight: '600', fontSize: 24},
  isRequestingText: {color: COLORS.textWhite, fontWeight: '400', fontSize: 14},
  headerContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: '6%',
    left: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
