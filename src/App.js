import React from 'react';
import {View, SafeAreaView, Text, StatusBar} from 'react-native';

// Import home stylesheet
import homeStyle from './1_stylesheet/home';

const App = () => {
  return (

    <View style={homeStyle.allcontent}>

      <SafeAreaView style={homeStyle.safeareaview}>

        <StatusBar barStyle="light-content" backgroundColor={homeStyle.statusbar.backgroundColor} />

        <Text style={homeStyle.titletop}>Olá, tudo bem!</Text>

      </SafeAreaView>

    </View>

  );
};

export default App;