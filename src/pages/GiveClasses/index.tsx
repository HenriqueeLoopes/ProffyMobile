import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import giveClassesBGImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';

function GiveClasses(){
    const navigation = useNavigation();
    function handleNavigateBack(){
        return navigation.navigate('Profile');
    }

    return (
    <View style={styles.container}>
        <ImageBackground source={giveClassesBGImage} style={styles.content} resizeMode={"contain"}>
            <Text style={styles.title}>Quer ser um Proffy?</Text>
            <Text style={styles.description}>Para comecar, voce precisa atualizar o seu cadastro!</Text>
        </ImageBackground>
        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
            <Text style={styles.okButtonText}>Atualizar agora!</Text>
        </RectButton>
    </View>
    );
}

export default GiveClasses;