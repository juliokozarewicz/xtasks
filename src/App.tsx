import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

// Import home stylesheet
import homeStyle from './stylesheet/home';

const App = () => {
  return (

    <View style={homeStyle.allcontent}>

      <SafeAreaView style={homeStyle.safeareaview}>

        <Text style={homeStyle.titletop}>Olá, tudo bem!</Text>

      </SafeAreaView>

    </View>

  );
};

export default App;