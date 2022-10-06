import React, {useState, useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
import {Input, Button, Icon, Text} from 'react-native-elements';
import Image from './Background.jpeg';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {navigate} = useNavigation();

  const SignIn = async () => {
    //TODO
  };

  return (
    <ImageBackground style={styles.image} source={Image}>
      <View style={styles.background}>
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>Welcome To</Text>
            <Text style={styles.header}>Sample Project</Text>
          </View>
          <View>
            <Input
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              inputStyle={{color: 'white'}}
              leftIconContainerStyle={styles.icon}
              inputContainerStyle={styles.inputContainer}
              raised
              leftIcon={
                <Icon type="feather" name="user" size={24} color="white" />
              }
              containerStyle={styles.input}
              placeholder="Username or Email Address"
              onChangeText={user => setUsername(user)}
            />
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              leftIconContainerStyle={styles.icon}
              inputStyle={{color: 'white'}}
              inputContainerStyle={styles.inputContainer}
              raised
              leftIcon={
                <Icon type="feather" name="lock" size={24} color="white" />
              }
              containerStyle={styles.input}
              placeholder="Password"
              onChangeText={pass => setPassword(pass)}
            />
          </View>
          <View>
            <Button
              loading={loading}
              onPress={() => SignIn()}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.sign}
              title="LOGIN"
            />
            <View style={styles.divider}>
              <View style={styles.hrLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.hrLine} />
            </View>
            <Button
              onPress={() => navigate('Register')}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.create}
              title="CREATE ACCOUNT"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
