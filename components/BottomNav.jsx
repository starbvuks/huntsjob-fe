// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';

// // Import or create your screens for Home, Suggestion, Applied, Saved, and Profile
// import Landing from '../screens/Dashboard/Landing';
// import CreationSuccess from '../screens/Login/CreationSuccess';

// const Tab = createBottomTabNavigator();

// const tabBarIcon = (name, color) => {
//   return <Icon name={name} size={24} color={color} />;
// };

// const BottomNav = () => {
//   return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color }) => {
//             let iconName;
//             switch (route.name) {
//               case 'Home':
//                 iconName = focused ? 'home' : 'home-outline';
//                 break;
//               case 'Suggestion':
//                 iconName = focused ? 'bulb' : 'bulb-outline';
//                 break;
//               case 'Applied':
//                 iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
//                 break;
//               case 'Saved':
//                 iconName = focused ? 'bookmark' : 'bookmark-outline';
//                 break;
//               case 'Profile':
//                 iconName = focused ? 'person' : 'person-outline';
//                 break;
//             }
//             return tabBarIcon(iconName, color);
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: '#FF5C35',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="Home" component={Landing} />
//         <Tab.Screen name="Suggestion" component={CreationSuccess} />
//         <Tab.Screen name="Applied" component={CreationSuccess} />
//         <Tab.Screen name="Saved" component={CreationSuccess} />
//         <Tab.Screen name="Profile" component={CreationSuccess} />
//       </Tab.Navigator>
//   );
// };

// export default BottomNav;
