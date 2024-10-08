import { StatusBar, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

import Login from "./screens/Login/Login";
import AlternateLogin from "./screens/Login/AlternateLogin";
import OTPVerificationScreen from "./screens/OTP/OTPVerificationScreen";
import GeneralInfo from "./screens/Login/Generallnfo";
import CreationSuccess from "./screens/Login/CreationSuccess";
import ForgotPassword from "./screens/Login/ForgotPassword";
import NotificationSelection from "./screens/Login/NotificationSelection";

import Landing from "./screens/Dashboard/Landing/Landing";
import Suggestions from "./screens/Dashboard/Suggestion/Suggestion";
import Applied from "./screens/Dashboard/Applied/Applied";
import Saved from "./screens/Dashboard/Saved/Saved";
import Profile from "./screens/Dashboard/Profile/Profile";

import JobPostingDescription from "./components/JobPostingDescription";

import EditProfile from "./components/Forms/Profile/EditProfile";
import DynamicFilter from "./components/DynamicFilter";
import PersonalDetails from "./components/Forms/Profile/PersonalDetails";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const customSlideFromRightIOS = {
  ...TransitionPresets.SlideFromRightIOS,
  transitionSpec: {
    open: {
      animation: "timing",
      config: {
        duration: 180,
      },
    },
    close: {
      animation: "timing",
      config: {
        duration: 180,
      },
    },
  },
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const tabBarIcon = (name, color) => {
  return <Icon name={name} size={24} color={color} />;
};

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: Platform.OS === "ios" ? 90 : 70,
          paddingTop: 12,
          backgroundColor: "#FCFCFC",
          borderTopWidth: 0,
          overflow: "hidden",
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
              iconName = focused ? "check-circle" : "check-circle-outline";
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
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: Platform.OS === "ios" ? 0 : 14, // Reduce bottom padding
          fontFamily: "NunitoSans_700Bold",
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF5C35",
        inactiveTintColor: "#2E475D",
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
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#FFFFFF"
          barStyle={"dark-content"}
        />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...customSlideFromRightIOS,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Alternate Login" component={AlternateLogin} />
          <Stack.Screen
            name="OTP Verification Screen"
            component={OTPVerificationScreen}
          />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          <Stack.Screen name="General Info" component={GeneralInfo} />
          <Stack.Screen
            name="Notification Selection"
            component={NotificationSelection}
          />
          <Stack.Screen name="Creation Success" component={CreationSuccess} />
          <Stack.Screen
            name="Bottom Navigator"
            component={BottomNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Job Posting Description"
            component={JobPostingDescription}
          />
          <Stack.Screen name="Edit Profile" component={EditProfile} />
          <Stack.Screen name="Dynamic Filter" component={DynamicFilter} />
          <Stack.Screen name="Personal Details" component={PersonalDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
