import React from 'react';
import {  StyleSheet } from 'react-native';
import * as Yup from 'yup'

import Screen from '../components/Screen';
import {
    AppForm , AppFormField , SubmitButton , AppFormPicker
} from "../components/forms"

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.string().required().min(1).max(1000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories= [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Camera", value: 3},
];

function ListingEditScreen() {

    return (
        <Screen style={styles.container}>
                <AppForm 
                initialValues = {{
                    title: '' ,
                    price: '' ,
                    description: '' ,
                    category: null ,
                    }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
                >
                <AppFormField 
                    maxLength={225}
                    name= "title"
                    placeholder= "Title"
                />
                <AppFormField
                    keyboardType ="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                 />
                 <AppFormPicker 
                     items= {categories}
                     name= "category"
                     placeholder="Catego"
                 />
                 <AppFormField
                    multiline
                    maxLength={225}
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                 />
                 <SubmitButton  title="Post"/> 
                </AppForm>
        </Screen>
    );
} 

const styles = StyleSheet.create({
    container: {
        padding: 10,

    },  
})

export default ListingEditScreen;