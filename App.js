import React , {useState} from 'react';


import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories =[
  {lable: "Furniture" , value: 1},
  {lable: "Clothings" , value: 2},
  {lable: "Cameras" , value: 3}
];

export default function App() {
  const [category , setCategory] = useState(categories[0]);
  
  return (
    <Screen>
      <AppPicker 
      selectedItem = {category}
      onSelectItem ={item => setCategory(item)}
      items={categories} icon = "apps" placeholder="Category" /> 
      <AppTextInput icon= "email" placeholder="Email"/>
    </Screen>
  ); 
}


