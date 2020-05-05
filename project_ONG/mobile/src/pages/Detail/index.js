import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import  Styles from './styles';
import * as Mailcomposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

export default function Incident(){

    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    
    const message = 'ola apad, estou entrando em contato pois gostaria de ajudar no caso "cadelinha atropelada" com o valor de R$120,00';

    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail () {
        Mailcomposer.composeAsync({
            subject: 'heroi do caso: cadelinha atropelada',
            recipients: ['ricardocontreira23@gmail.com'],
            body: message
        })
    }

    function sendWhatsapp(){
        
        Linking.openURL(`whatsapp://send?phone=555384048271&text=${message}`);
    }

    return (

        <View  style={Styles.container}>
            <View style={Styles.header}>
                <Image source={logoImg}/>
              <TouchableOpacity onPress={navigateBack}>
                  <Feather name="arrow-left" size={28} colro='#E02041'/>
              </TouchableOpacity>       
            </View>

        <View style={Styles.incident}>
            <Text style={[Styles.incidentProperty, { marginTop: 0 }]}>
            ONG:
            </Text>
            <Text style={Styles.incidentValue}>
            {incident.name}
            </Text> 
            <Text style={Styles.incidentProperty}>
            Caso:
            </Text>
            <Text style={Styles.incidentValue}>
            {incident.title}
            </Text>  
            <Text style={Styles.incidentProperty}>
            Valor:
            </Text>
            <Text style={Styles.incidentValue}>
            {Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL' }).format(incident.value)}
            </Text>
        </View>
        <View style={Styles.contactBox}>
            <Text style={Styles.heroTitle}>
                Salve o dia!
            </Text>
            <Text style={Styles.heroTitle}>
                Seja o herói desse caso.
            </Text>
            <Text style={Styles.heroDescription}>
                Entre em contato:
            </Text>

            <View style={Styles.actions}>
                <TouchableOpacity style={Styles.action} onPress={sendWhatsapp}>
                    <Text style={Styles.actionText}>
                        Whatsapp
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.action} onPress={sendEmail}>
                    <Text style={Styles.actionText}>
                        E-mail
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
     </View> 

    );
}