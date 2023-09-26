import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Greeting from './Greeting';
import Box from './Box';

function PracticeView(props) {
  const [boxVisible, setBoxVisible] = useState(true);
  const onPress = () => {
    setBoxVisible(true);
  };
  const onPressCount = () => {
    setBoxVisible(false);
  };

  const name = 'paul';
  const version = '0.0.1';
  const privateStatus = 'true';
  const react = '18.2.0';
  const reactNative = '0.72.4';
  const roundedBox = true;
  const boxSize = 'large';
  const boxColor = 'red';
  return (
    <View>
      <Button title={'박스'} onPress={onPress}></Button>
      <Button title={'숫자'} onPress={onPressCount}></Button>
      <Greeting
        name={name}
        version={version}
        private={privateStatus}
        react={react}
        reactNative={reactNative}
      />
      {boxVisible && (
        <View>
          <Box rounded={roundedBox} size={boxSize} color={boxColor} />
          <Box rounded={roundedBox} size={'medium'} color={'blue'} />
          <Box rounded={roundedBox} size={'small'} color={'yellow'} />
          <Box />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default PracticeView;
