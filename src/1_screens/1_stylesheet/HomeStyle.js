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
      position: 'relative',

      width: '90%',
      flex: 1,
    },

    // Edit from here
    titletop: {
      width: '90%',
      
      marginTop: 50,
      
      fontSize: 29,
      fontFamily: 'title',
      
      color: colors.purple,
    },

    datetime: {
      marginTop: 5,

      fontFamily: 'textbold',
      fontSize: 12,

      color: colors.gray4,
    },
    
    texts: {
      width: '90%',
      
      marginTop: 15,
      
      fontSize: 12,
      fontFamily: 'textbold',
      
      color: colors.black,
    },

    frame_itask: {
      marginTop: 30,

      width: '100%',
      height: 50,
      
      alignItems: 'center',
      justifyContent: 'space-between',
      
      gap: 10,

      flexDirection: 'row',
    },

    roll_tasks: {
      marginTop: 10,
      marginBottom: 58,
    },
    
    itask: {
      width: '50%',
      flex: 1,
      
      backgroundColor: colors.gray1,
      borderColor: 'red',
      color: colors.gray5,

      fontFamily: 'textbold',
      fontSize: 12,

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

      textAlign: 'center',
      textAlignVertical: 'center',
    }, 

    pendente: {
      marginTop: 30,

      fontFamily: 'textbold',
      fontSize: 12,

      color: colors.black
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
      fontSize: 12,

      color: 'white',

      textTransform: 'capitalize',
    },
    
    taskinserted: {
      width: '100%',
      height: 50,
      
      alignItems: 'center',
      justifyContent: 'space-between',
      
      gap: 10,

      flexDirection: 'row',
    },
    
    taskdescript: {
      flex: 1,
      height: '100%',
      
      backgroundColor: colors.gray2,
      color: colors.gray5,

      fontSize: 12,

      paddingLeft: 15,

      borderRadius: 10,

      borderWidth: 1,
      borderColor: colors.gray2,

      alignItems: 'flex-start',
      justifyContent: 'center',

      fontFamily: 'textbold',
      fontSize: 12,

      color: colors.black
    },

    taskdescript_txt: {
      fontFamily: 'textbold',
      fontSize: 12,

      color: colors.gray5,
    },

    btndeletetask: {
      width: 60,
      height: '100%',

      backgroundColor: colors.green,

      borderRadius: 10,

      alignItems: 'center',
      justifyContent: 'center',
    },

  }

);