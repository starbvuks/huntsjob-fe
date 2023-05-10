import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";

import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

import Login from "./screens/Login/Login";
import AlternateLogin from "./screens/Login/AlternateLogin";
import OTPVerificationScreen from "./screens/OTP/OTPVerificationScreen";
import GeneralInfo from "./screens/Login/Generallnfo";
import CreationSuccess from "./screens/Login/CreationSuccess";
// import BottomNav from "./components/BottomNav";
import Landing from "./screens/Dashboard/Landing/Landing";
import Suggestions from "./screens/Dashboard/Suggestion";
import Applied from "./screens/Dashboard/Applied";
import Saved from "./screens/Dashboard/Saved";
import Profile from "./screens/Dashboard/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarIcon = (name, color) => {
  return <MatIcon name={name} size={24} color={color} />;
};

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle:{
          height: '10%'
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Suggestion":
              iconName = focused ? "lightbulb" : "lightbulb-outline";
              break;
            case "Applied":
              iconName = focused ? "check-decagram" : "check-decagram-outline";
              break;
            case "Saved":
              iconName = focused ? "bookmark" : "bookmark-outline";
              break;
            case "Profile":
              iconName = focused ? "account" : "account-outline";
              break;
          }
          return tabBarIcon(iconName, color);
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF5C35",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Suggestion"
        component={Suggestions}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Applied"
        component={Applied}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Alternate Login" component={AlternateLogin} />
        <Stack.Screen
          name="OTP Verification Screen"
          component={OTPVerificationScreen}
        />
        <Stack.Screen name="General Info" component={GeneralInfo} />
        <Stack.Screen name="Creation Success" component={CreationSuccess} />
        <Stack.Screen
          name="Bottom Navigator"
          component={BottomNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
