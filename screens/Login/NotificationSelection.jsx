import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const NotificationSelection = ({ navigation }) => {
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [whatsappNotifications, setWhatsappNotifications] = useState(false);
  const [emailNewsletter, setEmailNewsletter] = useState(false);

  const handleSmsNotificationsChange = () => {
    setSmsNotifications(!smsNotifications);
  };

  const handleWhatsappNotificationsChange = () => {
    setWhatsappNotifications(!whatsappNotifications);
  };

  const handleEmailNewsletterChange = () => {
    setEmailNewsletter(!emailNewsletter);
  };

  const handleContinue = () => {
    console.log(smsNotifications, whatsappNotifications, emailNewsletter);
    navigation.navigate("Creation Success");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="notification" size={50} color="#FF5C35" />
        <Text style={styles.title}>Want to stay up to date?</Text>
        <Text style={styles.subtitle}>
          Enable notifications from various channels now to ensure you never
          miss an opportunity
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <TouchableOpacity onPress={handleSmsNotificationsChange}>
            <Icon
              name={smsNotifications ? "checksquare" : "checksquareo"}
              size={24}
              color="#FF5C35"
            />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>SMS Notifications</Text>
        </View>
        <View style={styles.checkbox}>
          <TouchableOpacity onPress={handleWhatsappNotificationsChange}>
            <Icon
              name={whatsappNotifications ? "checksquare" : "checksquareo"}
              size={24}
              color="#FF5C35"
            />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>Whatsapp Notifications</Text>
        </View>
        <View style={styles.checkbox}>
          <TouchableOpacity onPress={handleEmailNewsletterChange}>
            <Icon
              name={emailNewsletter ? "checksquare" : "checksquareo"}
              size={24}
              color="#FF5C35"
            />
          </TouchableOpacity>
          <Text style={styles.checkboxText}>Email Newsletter</Text>
        </View>
      </View>
      <View style={styles.spacing} />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  header: {
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 20,
  },
  checkboxContainer: {
    alignSelf: "stretch",
    marginHorizontal: 30,
    marginVertical: 50,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginLeft: 20,
  },
  checkboxText: {
    fontSize: 18,
    marginLeft: 10,
  },
  spacing: {
    flex: 1,
  },
  button: {
    backgroundColor: "#FF5C35",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 70,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NotificationSelection;
