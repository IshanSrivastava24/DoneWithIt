import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from './../components/AppButton';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <Screen style={styles.screen}>
            <Image  
                style={styles.logo}
                source={require("../assets/logo-red.png")}/>
                <Formik 
                initialValues = {{email: '' , password: ''}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
                >
                {({ handleSubmit }) => 
                <>
                <AppFormField 
                    keyboardType = "email-address"
                    textContentType = "emailAddress"
                    autoCapitalize = "none"
                    name= "email"
                    autoCorrect = {false}
                    icon = "email"
                    placeholder = "Email"
                />
                <AppFormField
                    autoCapitalize= "none"
                    autoCorrect= {false}
                    icon = "lock"
                    name= "password"
                    placeholder = "Password"
                    textContentType = "password"
                    secureTextEntry = {true}
                 />
                 <AppButton title="Login" onPress={handleSubmit} /> 
                 </>
                }
                </Formik>
        </Screen>
    );
} 

const styles = StyleSheet.create({
    screen: {
        padding: 10
    },  
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;