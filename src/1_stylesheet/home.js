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
    },

    // Edit from here
    titletop: {
      width: '90%',
      
      marginTop: 50,
      
      fontSize: 20,
      fontFamily: 'title',
      
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
    
    itaskFocused: {borderColor: colors.green},

    itask_placeholder: {
      color: colors.gray4,
    },

    btnitask: {
      width: 60,
      height: '100%',

      backgroundColor: colors.purple,

      borderWidth: 1,
      borderColor: colors.purple,

      borderRadius: 10,

      alignItems: 'center',
      justifyContent: 'center',
    },

    btnitask_line1: {
      width: 25,
      height: 3,

      backgroundColor: 'white',

      maxHeight: 40,

      color: 'white',
      fontFamily: 'textbold',
      fontSize: 60,

      textAlign: 'center',
      textAlignVertical: 'center',
    }, 

    btnitask_line2: {
      position: 'absolute',

      transform: [{ rotate: '90deg' }],

      width: 25,
      height: 3,

      backgroundColor: 'white',

      maxHeight: 40,

      color: 'white',
      fontFamily: 'textbold',
      fontSize: 60,

      textAlign: 'center',
      textAlignVertical: 'center',
    }, 

    cleantasks: {
      position: 'absolute',
      bottom: 0,

      width: '100%',
      height: 50,

      backgroundColor: colors.purple,

      alignItems: 'center',
      justifyContent: 'center',
    },

    cleantasks_text: {
      fontFamily: 'textbold',
      fontSize: 14,

      color: 'white',
    },

  }

);