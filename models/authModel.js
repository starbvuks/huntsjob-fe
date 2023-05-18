const authModel = {
  googleLogin: async () => {
    try {
      // Google login code
      if (user) {
        navigation.navigate("Next Screen");
      }
    } catch (error) {
      console.log(error);
    }
  },
  facebookLogin: async () => {
    try {
      // Facebook login code
      if (user) {
        navigation.navigate("Next Screen");
      }
    } catch (error) {
      console.log(error);
    }
  },
  regularLogin: async (phoneNumber, navigation) => {
    try {
      // post phoneNumber to backend
      navigation.navigate("OTP Verification Screen");
    } catch (error) {
      console.log(error);
    }
  },
};

export default authModel;
