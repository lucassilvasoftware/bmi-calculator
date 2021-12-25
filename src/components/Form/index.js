import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ResultBMI from "./ResultBMI/index"

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
    <View>
      <View>
        <Text>Height</Text>
        <TextInput placeholder="Ex. 1.78" keyboardType="numeric" />
        <Text>Weight</Text>
        <TextInput placeholder="Ex. 85.3" keyboardType="numeric" />
        <Button title='Calculate BMI' />
      </View>
      <ResultBMI messageResultBMI={messageBMI} resultBMI={bmi} />
    </View>
  );
}