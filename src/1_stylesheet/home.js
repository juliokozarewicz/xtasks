import {StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    allcontent: {
      width: '100%',
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'start',
      
      backgroundColor: colors.gray1,
    },

    statusbar: {
      backgroundColor: colors.green,
    },

    safeareaview: {
      width: '90%',
      flex: 1,
    },

    // Edit from here
    titletop: {
      width: '90%',
      
      marginTop: 70,
      
      fontSize: 20,
      fontFamily: 'textbold',
      
      color: colors.black,
    },

  }

);