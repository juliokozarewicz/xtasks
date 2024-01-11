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
      marginBottom: 70,
    },
    
    itask: {
      width: '50%',
      flex: 1,
      
      backgroundColor: colors.gray1,
      color: colors.gray5,

      fontFamily: 'textbold',
      fontSize: 12,

      paddingLeft: 15,

      borderWidth: 1,
      borderColor: colors.gray3,
      
      borderRadius: 10,

    },

    itaskupdate: {
      marginTop: 40,

      width: '90%',
      height: 50,
      
      backgroundColor: colors.gray1,
      color: colors.gray5,

      fontFamily: 'textbold',
      fontSize: 12,

      paddingLeft: 15,

      borderWidth: 1,
      borderColor: colors.gray3,
      
      borderRadius: 10,

    },

    itaskupdate2: {
      marginTop: 10,

      width: '90%',
      height: 50,
      
      backgroundColor: colors.gray1,
      color: colors.gray5,

      fontFamily: 'textbold',
      fontSize: 12,

      paddingLeft: 15,

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
      fontFamily: 'title',
      fontSize: 12,

      color: 'white',

      textTransform: 'uppercase',
    },
    
    taskinserted: {
      marginTop: 10,

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

      paddingLeft: 15,
      paddingRight: 10,

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

    deleteicon: {
      width: 25,
      height: 25,
    },

    deleteiconall: {
      width: 35,
      height: 35,
    },

    updateicon: {
      width: 40,
      height: 40,
    },

    loadscreen: {
      zIndex: 100,
      position: 'absolute',

      width: '100%',
      height: '100%',

      backgroundColor: colors.green,

      alignItems: 'center',
      justifyContent: 'center',
    },

    loadscreenText: {
      marginTop: 10,

      fontFamily: 'textbold',
      fontSize: 12,

      color: colors.purple,
    },

    loadscreenlogo: {
      width: 80,
      height: 80,
    },

    framedeleteall: {
      zIndex: 90,
      position: 'absolute',

      width: '100%',
      height: '100%',

      alignItems: 'center',
      justifyContent: 'center',
    },

    backgrounddeleteall: {
      zIndex: 90,
      position: 'absolute',

      width: '100%',
      height: '100%',

      backgroundColor: colors.black,

      alignItems: 'center',
      justifyContent: 'center',

      opacity: 0.8,
    },

    zeroitens: {
      marginTop: 20,
      width: '100%',

      fontFamily: 'textbold',
      fontSize: 12,

      color: colors.gray3,

      //textAlign:'center',
    },

    backgrounddeletealltxt: {
      zIndex: 93,
      position: 'absolute',
      right: 35,
      top: 40,

      fontFamily: 'textbold',
      fontSize: 12,

      color: colors.gray1,

      textAlign: 'center',
    },

    boxmessagedeleteaall: {
      zIndex: 92,
      position: 'absolute',
      bottom: 10,

      width: '95%',
      height: 330,

      backgroundColor: colors.gray1,
      color: colors.black,

      alignItems: 'center',
      justifyContent: 'flex-end',

      borderWidth: 3,

      borderColor: colors.purple,

      borderRadius: 30,
    },

    boxmessageupdate: {
      zIndex: 92,
      position: 'absolute',
      bottom: 10,

      width: '95%',
      height: 430,

      backgroundColor: colors.gray1,
      color: colors.black,

      alignItems: 'center',
      justifyContent: 'flex-end',

      borderWidth: 3,

      borderColor: colors.purple,

      borderRadius: 30,
    },

    boxmessagedeleteaalltitle: {
      zIndex: 93,
      position: 'relative',

      marginTop: 15,

      width: 200,

      fontFamily: 'textbold',
      fontSize: 12,

      color: colors.gray5,

      textAlign: 'center',
    },

    boxmessagedeleteaOnetitle: {
      zIndex: 93,
      position: 'relative',

      marginTop: 15,
      
      maxWidth: '80%',

      fontFamily: 'textbold',
      fontSize: 12,

      color: colors.gray3,

      textAlign: 'center',
    },

    deleteallbtnconfirm: {
      zIndex: 93,
      position: 'relative',

      marginTop: 50,

      width: '90%',
      height: 50,

      backgroundColor: colors.purple,
      color: 'white',

      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 10,
    },

    deleteOnebtnconfirm: {
      zIndex: 93,
      position: 'relative',

      marginTop: 30,

      width: '90%',
      height: 50,

      backgroundColor: colors.purple,
      color: 'white',

      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 10,
    },

    deleteallbtnconfirmtext: {
      zIndex: 93,
      position: 'relative',

      fontFamily: 'title',
      fontSize: 12,

      color: 'white',

      textAlign: 'center',
    },

    cancelalllbtnconfirm: {
      zIndex: 93,
      position: 'relative',

      marginTop: 10,
      marginBottom: 25,

      width: '90%',
      height: 50,

      backgroundColor: colors.green,
      color: 'white',

      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 10,
    },

    cancelalllbtnconfirmtxt: {
      zIndex: 93,
      position: 'relative',

      fontFamily: 'title',
      fontSize: 12,

      color: colors.black,

      textAlign: 'center',
    },

  }

);