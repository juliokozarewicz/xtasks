import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  return (

    <View style={styles.allcontent}>

      <Text style={styles.titletop}>Olá, tudo bem!</Text>

    </View>

  );
};


// styles
const styles = StyleSheet.create({

  allcontent: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#7EFCBB',
  },

  titletop: {
    marginTop: 90,
    width: '90%',
    fontSize: 25,
    color: 'black',
  },

});

export default App;