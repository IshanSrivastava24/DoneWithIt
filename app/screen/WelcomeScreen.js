import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={5}
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.loginContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
        <Text style={styles.text}>Sell What you don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton title = "Login"/>
            <AppButton title = "Register" color="secondary"/>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
    },
    loginContainer: {
        position: 'absolute',
        top: 60,
        alignItems: "center"
    },
    text :{
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})

export default WelcomeScreen;