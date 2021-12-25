import React from 'react';
import { View, Text } from 'react-native';

export default function ResultBMI() {
  return (
    <View>
      <Text>{props.resultBMI}</Text>
      <Text>{props.messageResultBMI}</Text>
    </View>
  );
}