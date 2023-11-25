import React, { useState } from 'react';
import { View, Text, Image, Switch, ScrollView, TextInput } from 'react-native';

const Pokemon = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn((prev) => !prev);
  };

  const getImageSource = () => {
    return isSwitchOn
      ? { uri: 'https://m.media-amazon.com/images/I/712rNmu7YEL._AC_UF1000,1000_QL80_.jpg' }
      : { uri: 'https://pbs.twimg.com/media/E4sYypaVgAQ1Cv9.png' };
  };

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 45,
            alignSelf: 'center',
            color: 'green',
          }}
        >
          Snorlax Berrie
        </Text>
        <Image
          source={getImageSource()}
          style={{ width: 200, height: 210, alignSelf: 'center' }}
        />

        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isSwitchOn}
          style={{ marginTop: 10, alignSelf: 'center' }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 5,
          margin: 15,
        }}
        defaultValue="Digite aqui!"
      />
    </ScrollView>
  );
};

export default Pokemon;