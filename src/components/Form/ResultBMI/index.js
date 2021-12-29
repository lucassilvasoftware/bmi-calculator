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
      <View>
        {props.resultBMI != null ?
          <TouchableOpacity>
            <Text>Share</Text>
          </TouchableOpacity>
          :
          <View />
        }
      </View>
      <Text style={styles.titleResultIMC}>{props.messageResultBMI}</Text>
      <Text style={styles.resultBMI}>{props.resultBMI}</Text>
    </View >
  );
}