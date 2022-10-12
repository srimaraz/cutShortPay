import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.darkBlueBG,
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: 60,
    height: 60,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderWidth: 2,
    borderRadius: 300,
    borderColor: COLORS.modalBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dragMarker: {
    backgroundColor: COLORS.lightBlueMarker,
    height: 8,
    width: 64,
    borderRadius: 10,
    marginBottom: 25,
  },
  modalContainer: {
    height: '45%',
    width: '100%',
    backgroundColor: COLORS.modalBlue,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    paddingTop: 20,
  },
  contactName: {
    color: COLORS.textWhite,
    fontWeight: '500',
    fontSize: 20,
    marginVertical: 10,
  },
  contactNo: {
    color: COLORS.textWhite,
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 30,
  },
  scatteredProfileImagesContainer: {
    position: 'absolute',
    backgroundColor: 'red',
  },
  searchBoxStyle: {
    alignItems: 'center',
    borderWidth: 1,
    height: 45,
    position: 'absolute',
    right: 15,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: COLORS.modalBlue,
    color: COLORS.textWhite,
  },
});

export default styles;
