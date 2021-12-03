import React from 'react';
import {
  View,
  Text,

  FlatList,
} from 'react-native';
import styles from '../css/styles';
export const apiOut = ({route}) => {
  const data = route.params.data.results;
  console.log("working!")


  return (
    
    <View style={styles.apdcontainer}>
      <FlatList
        data={data}
        keyExtractor={data => data.id}
        renderItem={({item}) => {
          return (
            <View style={{paddingBottom: '2%'}}>
              <Text style={styles.apdheaderText}>
                {item.name} - {item.gender}
              </Text>
              <Text style={styles.apdsubText}>
                Birth: {item.birth_year}
              </Text>
              <View style={styles.apdbvi}/></View>
              
          );
        }}
      />
    </View>
    
  );
};

                  