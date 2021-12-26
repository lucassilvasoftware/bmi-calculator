import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultBMI from "./ResultBMI/index"
import styles from './style';

export default function Form() {

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageBMI, setMessageBMI] = useState("Enter your weight and height.")
  const [bmi, setBmi] = useState(null)
  const [TextButton, setTextButton] = useState("Calculate")

  function bmiCalc() {
    return setBmi((weight / (height * height)).toFixed(2))
  }

  function validationBmi() {
    if (weight != null && height != null) {
      bmiCalc()
      setHeight(null)
      setWeight(null)
      setMessageBMI("Your BMI is:")
      setTextButton("Calculate again.")
      return
    }
    setBmi(null)
    setTextButton("Calculate")
    setMessageBMI("Enter your weight and height.")
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Height</Text>
        <TextInput onChangeText={setHeight} value={height} placeholder="Ex. 1.78" keyboardType="numeric" />
        <Text style={styles.formLabel}>Weight</Text>
        <TextInput onChangeText={setWeight} value={weight} placeholder="Ex. 85.3" keyboardType="numeric" />
        <Button color="#3EB489" title={TextButton} onPress={() => validationBmi()} />
      </View>
      <ResultBMI messageResultBMI={messageBMI} resultBMI={bmi} />
    </View >
  );
}