import React from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import style from '../css/styles';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export function nammacamera() {
  const openCamara = () => {
    var options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },

    };

    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
    });
  };

  const openGallery = () => {
    var options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
    });
  };

  return (

    <View style={style.camcontainer}>
    <TouchableOpacity onPress={openGallery} style={style.btns}>
       <Text style={style.btnstxt}>Open Gallery! </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={openCamara} style={style.btns}>
       <Text style={style.btnstxt}>Open Camera !</Text>
     </TouchableOpacity>
   </View>
  );
};

export default nammacamera;