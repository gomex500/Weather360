import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const [climaData, setClimaData] = useState(null);

const countries = ['Spain', 'France', 'Germany'];

useEffect(() => {
    const fetchClimaData = async () => {
        try {
            const responsePromise = countries.map(country =>
                axios.get(`https://api.weatherapi.com/v1/current.json?key=5951a79ad844445db3733218230107&q=${country}&lang=es`)
                );
                const responses = await Promise.all(responsePromise);
                setClimaData(climaDataArray);
        } catch (error) {
            console.log(error);
        }
    };
    fetchClimaData();
}, []);

if (!climaData) {
    return(
        <View>
            <Text>cargando...</Text>
        </View>
    )
}

return(
    <View>
        {climaData.map((clima, index) => (
            <View key={index}>
                <Text>Ubicacion: {clima.location.name}, {clima.location.region}, {clima.location.country}</Text>
                <Text>Temperature: {clima.current.temp_c}C</Text>
                <Text>Condicion: {clima.current.condition.text}</Text>
                <Text>_________________________________________</Text>
            </View>
        ))}
    </View>
)

export default ClimaScreen;
