import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function ResultBMI(props) {
  return (
    <View style={styles.contextBMI}>
      <Text style={styles.titleResultIMC}>{props.messageResultBMI}</Text>
      <Text style={styles.resultBMI}>{props.resultBMI}</Text>
    </View>
  );
}