import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function ResultBMI(props) {
  return (
    <View style={styles.resultBMI}>
      <Text style={styles.info}>{props.resultBMI}</Text>
      <Text style={styles.bmiNumber}>{props.messageResultBMI}</Text>
    </View>
  );
}