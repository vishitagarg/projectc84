import React from "react";
import {CreateBottomNavigator} from "navigation/bottom-tab";    
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused 
            ? "book" 
            : "book-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused 
            ? "create" 
            : "create-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}/>
          );
        },
      })}
      tabBarOption={{
       activeTintColor: 'tomato',
       inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator