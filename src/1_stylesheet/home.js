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
      
      marginTop: 50,
      
      fontSize: 20,
      fontFamily: 'textbold',
      
      color: colors.purple,
    },
    
    texts: {
      width: '90%',
      
      marginTop: 20,
      
      fontSize: 12,
      fontFamily: 'textbold',
      
      color: colors.black,
    },

    frame_itask: {
      marginTop: 50,

      width: '100%',
      height: 50,
      
      alignItems: 'center',
      justifyContent: 'space-between',
      
      gap: 10,

      flexDirection: 'row',
    },
    
    itask: {
      width: '50%',
      flex: 1,
      
      backgroundColor: colors.gray2,
      borderColor: 'red',
      color: colors.gray5,

      fontSize: 15,

      paddingLeft: 15,

      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.gray3,
      borderRadius: 10,

    },

    itask_placeholder: {
      color: colors.gray4,
    },

    btnitask: {
      width: 60,
      flex: 1,
      
      backgroundColor: colors.gray2,
      color: colors.gray5,

      borderWidth: 1,
      borderColor: 'red',

      fontSize: 15,

      paddingLeft: 15,

      borderRadius: 10,

    },

  }

);