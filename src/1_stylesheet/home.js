import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    allcontent: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
      backgroundColor: colors.green,
      fontFamily: 'title',
    },

    safeareaview: {
      width: '90%',
      flex: 1,
    },

    // Edit from here
    titletop: {
      marginTop: 70,
      width: '90%',
      fontSize: 20,
      color: colors.black,
      fontFamily: 'title',
    },

  }

);