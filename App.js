import React, { useState, useContext } from "react";
import { Text, View, LogBox } from "react-native";
import { useAssets } from "expo-asset";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { signOut } from "firebase/auth";
import ContextWrapper from "./context/ContextWrapper";
import Context from "./context/Context";
import Chats from "./screens/Chats";
import Contacts from "./screens/Contacts";
import Chat from './screens/Chat';
import ChatHeader from './components/ChatHeader';
import { MaterialIcons } from '@expo/vector-icons';
import Login from "./screens/Login";
import Register from "./screens/Register";
import LoadingScreen from "./screens/LoadingScreen";
import ForgotPassword from "./screens/ForgotPassword";
import SplashScreen from './screens/SplashScreen';

LogBox.ignoreLogs([
  "Setting a timer",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
  "Key cancelled in the image picker result is deprecated and will be removed in SDK 48, use canceled instead",
]);

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function App({ navigation }) {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    theme: { colors },
  } = useContext(Context);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#064663',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: colors.white,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title: "Forgot Password" }} />
        <Stack.Screen
            name="Chats"
            component={Chats}
            options={({ navigation }) => ({ // Include navigation prop
            headerShown: true,
            title: "Messages",
            headerRight: () => (
            <View style={{ marginRight: 10 }}>
            <MaterialIcons
            name="logout"
            size={24}
            color="white"
            onPress={() => {
              auth.signOut().then(() => {
                alert('Logged Out!!');
                navigation.navigate('Splash'); // Navigate to SplashScreen
             }).catch((error) => {
                alert(error.message);
              });
            }}
            />
      </View>
    ),
    headerLeft: () => null
  })}
/>
        <Stack.Screen name="contacts" options={{ title: "Select Contacts" }} component={Contacts} />
        <Stack.Screen name="chat" component={Chat} options={{ headerTitle: (props) => <ChatHeader {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home() {
  const {
    theme: { colors },
  } = useContext(Context);
  return (
    <Text></Text>
  );
}

function Main() {
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png")
  );
  if (!assets) {
    return <Text>Loading ..</Text>;
  }
  return (
    <ContextWrapper>
      <App />
    </ContextWrapper>
  );
}

export default Main;
