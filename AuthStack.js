import React, {useContext, useState} from 'react';
import {AppContext} from './context/AppContext';
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from './colors';

import {Button as NbButton} from 'native-base';

const Stack = createStackNavigator();

function LoginScreen({navigation}) {
  const {login, error} = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, changeLoading] = useState(false);

  if (loading) {
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>connexion en cours</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryColor,
      }}>
      <Image
        source={require('./logo.png')}
        style={{
          width: 350,
          height: '50%',
        }}
      />
      {error && (
        <Text
          style={{color: 'red', margin: 24, fontWeight: 'bold', fontSize: 20}}>
          {error}
        </Text>
      )}
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: colors.secondaryColor,
          borderBottomWidth: 5,
          padding: 8,
          fontSize: 22,
        }}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
        autoCapitalize="none"
      />
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: colors.secondaryColor,
          borderBottomWidth: 5,
          padding: 8,
          marginTop: 24,
          fontSize: 22,
        }}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <NbButton
        block
        onPress={() => {
          changeLoading(true);
          login(email, password, changeLoading, loading);
        }}
        style={{backgroundColor: colors.secondaryColor, marginVertical: 15}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          Connexion
        </Text>
      </NbButton>

      <NbButton
        block
        onPress={() => navigation.navigate('Register')}
        style={{backgroundColor: colors.secondaryColor, marginVertical: 15}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          Inscription
        </Text>
      </NbButton>
    </View>
  );
}

function RegisterScreen({navigation}) {
  const {registerError, register} = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [taille, setTaille] = useState('');
  const [poids, setPoids] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Traitement en cours</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor: colors.primaryColor}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
          flex: 1,
        }}>
        {registerError && (
          <Text
            style={{
              color: 'red',
              margin: 24,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {registerError}
          </Text>
        )}
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            padding: 8,
            fontSize: 18,
            borderBottomWidth: 5,
            borderBottomColor: colors.secondaryColor,
          }}
          onChangeText={text => setName(text)}
          placeholder="Nom et Prenom"
          textContentType="name"
          autoCapitalize="none"
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            padding: 8,
            marginTop: 24,
            fontSize: 18,
            borderBottomWidth: 5,
            borderBottomColor: colors.secondaryColor,
          }}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            padding: 8,
            marginTop: 24,
            fontSize: 18,
            borderBottomWidth: 5,
            borderBottomColor: colors.secondaryColor,
          }}
          onChangeText={text => setPoids(text)}
          placeholder="Poids en Kg"
          autoCapitalize="none"
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            padding: 8,
            marginTop: 24,
            fontSize: 18,
            borderBottomWidth: 5,
            borderBottomColor: colors.secondaryColor,
          }}
          onChangeText={text => setTaille(text)}
          placeholder="Taille en cm"
          autoCapitalize="none"
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            padding: 8,
            marginTop: 24,
            fontSize: 18,
            borderBottomWidth: 5,
            borderBottomColor: colors.secondaryColor,
          }}
          onChangeText={text => setAge(text)}
          placeholder="Age"
          autoCapitalize="none"
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            padding: 8,
            marginTop: 24,
            fontSize: 18,
            borderBottomWidth: 5,
            borderBottomColor: colors.secondaryColor,
          }}
          onChangeText={text => setPassword(text)}
          placeholder="Mot de passe"
          secureTextEntry={true}
        />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            padding: 8,
            marginTop: 24,
            fontSize: 18,
            borderBottomWidth: 5,
            borderBottomColor: colors.secondaryColor,
          }}
          onChangeText={text => setRepeatPassword(text)}
          placeholder="Répetez le Mot de passe"
          secureTextEntry={true}
        />
        <NbButton
          block
          onPress={() => {
            setLoading(true);
            register(
              email,
              password,
              repeatPassword,
              name,
              poids,
              taille,
              age,
              loading,
              setLoading,
            );
          }}
          style={{
            backgroundColor: colors.secondaryColor,
            marginVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Confirmer
          </Text>
        </NbButton>
        <NbButton
          block
          onPress={() => navigation.navigate('Login')}
          style={{
            backgroundColor: colors.secondaryColor,
            marginVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            Connexion
          </Text>
        </NbButton>
      </View>
    </ScrollView>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
