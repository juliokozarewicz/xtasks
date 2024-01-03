import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import homeStyle from './stylesheet/home';

const App = () => {
  return (

    <View style={homeStyle.allcontent}>

      <SafeAreaView>
        <Text>Olá, tudo bem!</Text>
      </SafeAreaView>

    </View>

  );
};

export default App;