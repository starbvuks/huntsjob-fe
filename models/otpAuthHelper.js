import { useState, useEffect } from "react";

const otpAuthHelper = {
    useCountdownTimer: (initialTime) => {
      const [timer, setTimer] = useState(initialTime);
  
      useEffect(() => {
        if (timer > 0) {
          const countdown = setTimeout(() => {
            setTimer(timer - 1);
          }, 1000);
          return () => clearTimeout(countdown);
        }
      }, [timer]);
  
      return [timer, setTimer];
    },
    handleResendOTP: async (phoneNumber, setTimer) => {
      try {
        // TODO: Add your backend API endpoint to resend the OTP
        // Example:
        // const response = await fetch('https://your-backend-api.com/resendOTP', {
        //   method: 'POST',
        //   body: JSON.stringify({ phoneNumber }),
        //   headers: { 'Content-Type': 'application/json' },
        // });
        // const data = await response.json();
        // console.log(data);
        setTimer(60);
      } catch (error) {
        console.log(error);
      }
    },
    handleVerifyOTP: async (otpValues) => {
      try {
        // Handle OTP Verification, change "confirmation" to whatever required
        const confirmation = "Success"
        if (confirmation) {
          console.log('OTP verification successful');
        } else {
          console.log('OTP verification failed');
        }
      } catch (error) {
        console.log(error);
      }
    },
  };
  
  export default otpAuthHelper;
  