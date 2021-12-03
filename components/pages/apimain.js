import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';
import style from '../css/styles';


export const apihome = ({navigation, route}) => {
  const fetchData = async () => {
    const source = axios.CancelToken.source();
    const url = 'https://www.swapi.it/api/people';
    console.log('fetching data');
    try {
      const response = await axios.get(url, {cancelToken: source.token});
      if (response.status === 200) {
        console.log(response.data);
        navigation.navigate( "ApiOut", {data: response.data}); 
        return;
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Data fetching cancelled');
      }
    }
  };

  return (
    <View style={style.container}>
        <Text>Axios Data Fetch!</Text>
        <TouchableOpacity style={style.apibtn} onPress={() => fetchData()}> 
        <Text style={style.btnstxt}>Click to Fetch !!!</Text>
        </TouchableOpacity>
      </View>
  );
};