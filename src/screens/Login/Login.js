import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);
 const navigation=useNavigation();
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://3.7.81.243/projects/plie-api/public/api/login', {
        email,
        password,
      });

      if (response.data.success) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      Alert.alert('Login Failed', 'Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Pliē</Text>
            <View style={styles.imagePlaceholder}>
              <Icon name="image-outline" size={50} color="black" />
            </View>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.emailtext}>Email</Text>
            <TextInput
              style={styles.emailtextinput}
              placeholder="email@email.com"
              placeholderTextColor="gray"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.passwordtext}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry={secureText}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <Icon
                  name={secureText ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
              <Text>Not a member? </Text>
              <TouchableOpacity>
                <Text style={styles.signUpText}>Sign Up Here</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text>or Sign In with:</Text>
              <View style={styles.divider} />
            </View>

            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialIcon}>
                <Image source={require('../../../assets/google.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Image source={require('../../../assets/apple.png')} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon}>
                <Image source={require('../../../assets/facebook.png')} style={styles.icon} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.guestText}>Enter as Guest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

// Styling
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    backgroundColor: 'gray',
    width: '100%',
  },
  logoText: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  imagePlaceholder: {
    height: 100,
    alignSelf: 'center',
    marginTop: 100,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#FFF',
  },
  emailtextinput: {
    backgroundColor: '#FFF',
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  emailtext: {
    fontSize: 16,
    color: 'black',
  },
  passwordtext: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    elevation: 5,
    borderRadius: 5,
  },
  forgotText: {
    textAlign: 'right',
    color: '#555',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#10B981',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
    paddingHorizontal: 25,
  },
  signInText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'flex-end',
  },
  signUpText: {
    textDecorationLine: 'underline',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    margin: 10,
    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  guestText: {
    alignSelf: 'flex-end',
    color: '#555',
    marginTop: 50,
  },
});
