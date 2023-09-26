import React from 'react';
import {Text, View} from 'react-native';

function Greeting(props) {
  return (
    <View>
      <Text> Hello {props.name} </Text>
      <Text> ---------------------</Text>
      <Text> react : {props.version} </Text>
      <Text> private : {props.private} </Text>
      <Text> react : {props.react} </Text>
      <Text> react-native : {props.reactNative} </Text>
      <Text> ---------------------</Text>
      <Text> Bye {props.name} </Text>
    </View>
  );
}

Greeting.defaultProps = {
  name: 'React-Native',
};

export default Greeting;
