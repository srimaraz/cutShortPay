import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  splashMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.splashBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMainContainer: {
    position: 'absolute',
    bottom: 0,
    height: 220,
    width: '85%',
    alignSelf: 'flex-start',
    borderTopRightRadius: 70,
    backgroundColor: COLORS.darkBlue3,
    paddingLeft: 30,
  },
  paginationMarkersContainer: {
    flexDirection: 'row',
    width: 85,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  paginationStyle: {
    height: 8,
    width: 20,
    backgroundColor: COLORS.sentYellow,
    borderRadius: 10,
  },
  splashHeadingText: {
    color: COLORS.textWhite,
    fontSize: 19,
    fontWeight: '700',
  },
  splashSubHeadingText: {
    color: COLORS.textWhite,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    width: '85%',
    marginBottom: 20,
  },
  vector35: {
    position: 'absolute',
    bottom: '30%',
  },
  vector33: {
    position: 'absolute',
    top: 30,
    flex: 1,
  },
  rectangle257: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  polygon1: {
    position: 'absolute',
    right: 0,
    top: 30,
  },
  vector34: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  ellipse: {position: 'absolute', top: '32%'},
  polygonCenter: {position: 'absolute', top: '36%'},
  rectangle: {position: 'absolute', left: 0},
  lock: {position: 'absolute', top: '41%'},
  group9: {position: 'absolute', bottom: 0, right: 15},
});

export default styles;
