import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Login = () => {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={[styles.logo, { height: '33%' }]} />
      <View style={styles.headerBox}>
        <Text style={styles.title}>
          Discover your <Text style={styles.highlight}>Dream Job</Text> Here
        </Text>
        <Text style={styles.smallText}>Subtitle goes here</Text>
      </View>
      <View style={[styles.formContainer, { backgroundColor: '#FF5C35' }]}>
        <Text style={styles.subheading}>Sign In</Text>
        <Text style={styles.smallText}>Enter your phone number to continue</Text>
        <View style={styles.formInput}>
          <Text style={styles.label}>Phone Number</Text>
          <RNPickerSelect
            onValueChange={(value) => setCountryCode(value)}
            items={[
              { label: 'US (+1)', value: '+1' },
              { label: 'UK (+44)', value: '+44' },
              { label: 'Germany (+49)', value: '+49' },
              // ... Add more country codes
            ]}
            style={{ inputIOS: { color: '#000' } }}
          />
          <TextInput
            keyboardType="phone-pad"
            placeholder="Enter phone number"
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    position: 'absolute',
    top: 55,
    left: 10,
    width: '100%',
    backgroundColor: '#CCC', // Placeholder color
  },
  headerBox: {
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: 40,
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 130,
  },
  highlight: {
    color: '#FF5C35',
  },
  smallText: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
  formContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '90%',
  },
  subheading: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  formInput: {
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Login;
