import React, { useState, useEffect }from 'react';
import { Feather }  from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';

import Style from './styles';
import logoImg from '../../assets/logo.png';



export default function Incident(){
    const [incidents, SetIncidents] = useState([]);
    const [total, SetTotal] = useState(0);
    const navigation = useNavigation();
    const [page, SetPage] = useState(1);
    const [loading, SetLoanding] = useState(false);

    function navigateToDetail(incident){
        navigation.navigate('Details', { incident });
    } 

    async function LoadIncidents(){

        if (loading) {
            return;
        }

        if(total > 0 && incidents.length == total){
            return;
        }

        SetLoanding(true);
    
         const response = await api.get('incidents', {
             params: { page }
         });

        SetIncidents([...incidents, ...response.data]); 
        SetTotal(response.headers['x-total-count']);
        SetPage(page +1);
        SetLoanding(false);

    }

    useEffect(() => {
        LoadIncidents();
    }, [])

    return (

        <View style={Style.container}>
         <View style={Style.header}>
            <Image source={logoImg}/>
            <Text style={Style.headerText}>
                Total de  <Text style={Style.headerTextBold}>{total} Casos</Text>.
            </Text>
         </View>
            <Text style={Style.title}>Bem Vindo</Text>
            <Text style={Style.description}>Escolha um dos casos abaixo e salve o dia.</Text>

    <FlatList
    data={incidents}
    style={Style.IncidentsList}
    keyExtractor={incident => String(incident.id)}
    showsVerticalScrollIndicator ={false}
    onEndReached={LoadIncidents}
    onEndReachedThreshold={0.2}
    renderItem={({item: incident}) => (
        <View style={Style.Incident}>
        <Text style={Style.incidentProperty}>
            ONG:
        </Text>
        <Text style={Style.incidentValue}>
        {incident.name}
        </Text> 
        <Text style={Style.incidentProperty}>
            Caso:
        </Text>
        <Text style={Style.incidentValue}>
            {incident.title}
        </Text>  
        <Text style={Style.incidentProperty}>
            Valor:
        </Text>
        <Text style={Style.incidentValue}>
            {Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL' }).format(incident.value)}
        </Text>    

        <TouchableOpacity style={Style.detailsButton} onPress={() => navigateToDetail(incident)}>
                <Text style={Style.detailsButtonText}>
                    Ver mais detalhes
                </Text>

                <Feather name="arrow-right" size={16} color="#E02041"/>
        </TouchableOpacity>                                                                             
    </View>

    )}
    />
        </View>
    );
}