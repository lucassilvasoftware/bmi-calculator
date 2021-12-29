import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultBMI(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "My BMI today is: " + props.resultBMI,
    })
  }

  return (
    <View style={styles.contextBMI}>
      <View style={styles.shareButton}>
        <Text style={styles.titleResultIMC}>{props.messageResultBMI}</Text>
        <Text style={styles.resultBMI}>{props.resultBMI}</Text>
        <TouchableOpacity style={styles.shared} onPress={onShare}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View >
    </View >
  );
}