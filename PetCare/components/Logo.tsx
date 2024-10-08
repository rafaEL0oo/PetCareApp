import React from 'react';
import { Image, StyleSheet } from 'react-native';


export function Logo(){

    const logoStyles = {
            width: 200,
            height: 200
        }
    return (
        <Image  style={styles.image} source={require('../images/PetCareLogo.png')}></Image>);
}

const styles = StyleSheet.create({
    image: {
      width: 250,
      height: 250,
      top:80
    },
  });