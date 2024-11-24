import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

// Define the stack param list for type safety
type RootStackParamList = {
  'Stack 1': undefined;
  'Stack 2': undefined;
  'Stack 3': undefined;
};

// Define the type for navigation prop
type StackOneNavigationProp = StackNavigationProp<RootStackParamList, 'Stack 1'>;
type StackTwoNavigationProp = StackNavigationProp<RootStackParamList, 'Stack 2'>;
type StackThreeNavigationProp = StackNavigationProp<RootStackParamList, 'Stack 3'>;

const Stack = createStackNavigator<RootStackParamList>();

const StackOne = ({ navigation }: { navigation: StackOneNavigationProp }) => {
  const nim = "222505062";
  const nama = "Rivaldy Ahmad Maulana";
  const avatarUrl = "https://i.pinimg.com/236x/37/b2/c0/37b2c05cfde66aaeff30f86ed085267c.jpg"; // Avatar Image URL

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Text style={styles.heading}>Biodata Diri</Text>
      <Text style={styles.text}>NIM: <Text style={styles.highlight}>{nim}</Text></Text>
      <Text style={styles.text}>Nama: <Text style={styles.highlight}>{nama}</Text></Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Stack 2')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const StackTwo = ({ navigation }: { navigation: StackTwoNavigationProp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tentang Saya</Text>
      <Text style={styles.text}>Saya adalah seorang mahasiswa S1 Sistem Informasi di Masoem University yang sedang belajar dan antusias dengan teknologi dan coding.</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Stack 3')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, styles.backButton]} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const StackThree = ({ navigation }: { navigation: StackThreeNavigationProp }) => {
  const hobbies = ["Membaca", "Menonton", "Mendengarkan Musik"];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hobi Saya</Text>
      <View style={styles.list}>
        {hobbies.map((hobby, index) => (
          <Text key={index} style={styles.hobbyText}>{hobby}</Text>
        ))}
      </View>
      <TouchableOpacity 
        style={[styles.button, styles.backButton]} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Stack 1">
        <Stack.Screen name="Stack 1" component={StackOne} />
        <Stack.Screen name="Stack 2" component={StackTwo} />
        <Stack.Screen name="Stack 3" component={StackThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1F1F1F', // Slightly lighter dark background for depth
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FF4C4C', // Red border around avatar for contrast
  },
  heading: {
    color: '#FFD700', // Gold color for headings
    fontSize: 26,
    fontWeight: '700', // Bold weight for heading
    marginBottom: 20,
    textAlign: 'center', // Center align heading
    paddingHorizontal: 20, // Add horizontal padding to avoid edge issues
  },
  text: {
    color: '#E0E0E0', // Softer white for text
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center', // Center align text
    paddingHorizontal: 20, // Add padding for a balanced look
  },
  highlight: {
    color: '#FF6347', // Red color for highlighted text (like NIM and Nama)
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF6347', // Soft red color for buttons
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center', // Ensure text is centered in the button
  },
  buttonText: {
    color: '#FFFFFF', // White text on the button
    fontSize: 18,
    fontWeight: '600', // Medium font weight for button text
  },
  backButton: {
    backgroundColor: '#4CAF50', // Green back button
    marginTop: 10,
  },
  list: {
    alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 20, // Adds padding to the list
  },
  hobbyText: {
    color: '#E0E0E0', // Softer white color for hobby text
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
    paddingHorizontal: 20, // Padding for better alignment
  }
});

export default App;
