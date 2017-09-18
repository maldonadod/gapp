import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export const Login = ({
  onInputEmail
  ,onInputPassword
  ,onSubmit
}) => (
  <View>
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType="email-address"
        onChangeText={onInputEmail}
        placeholder="Email"
        style={styles.input} />
      <TextInput
        secureTextEntry={true}
        onChangeText={onInputPassword}
        placeholder="Password"
        style={styles.input} />
    </View>

    <View style={[styles.inputContainer, styles.loginButton]}>
      <Button onPress={onSubmit} title="Log in" />
    </View>
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#f2f2f2',
  },
  input: {
    marginBottom: 20,
    height: 40,
    fontSize: 12,
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  loginButton: {
    marginTop: 30
  }
});
