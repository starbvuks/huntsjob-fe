import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const OTPInput = () => {
  const inputRefs = useRef([null, null, null, null]);
  const [otpValues, setOtpValues] = useState(Array(4).fill(''));

  const handleInputChange = (text, index) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);

    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerifyOTP = () => {
    const otp = otpValues.join('');
    console.log('OTP:', otp);

    // TODO: Call your backend API to verify the OTP
    // Example:
    // api.verifyOTP(otp)
    //   .then(response => {
    //     if (response.success) {
    //       // OTP verification successful
    //     } else {
    //       // OTP verification failed
    //     }
    //   });
    // rxjs or dependency injection
  };

  return (
    <View style={styles.container}>
      <View style={styles.phoneContainer}>
        {inputRefs.current.map((_, index) => (
          <TextInput
            key={index}
            style={styles.phoneInput}
            onChangeText={(text) => handleInputChange(text, index)}
            maxLength={1}
            keyboardType="number-pad"
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOTP}>
        <Text style={styles.verifyButtonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
  },
  phoneInput: {
    width: '20%',
    height: 70,
    padding: 10,
    marginRight: 10,
    marginTop: 50,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: '#D5DADF',
  },
  verifyButton: {
    backgroundColor: '#FF5C35',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OTPInput;

