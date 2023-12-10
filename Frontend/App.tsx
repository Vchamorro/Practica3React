
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { userApi } from './api/userApi';


function App(): JSX.Element {

    const [user, setUser] = useState([]);
    const [hobbies1, setHobbies1] = useState([]);
    const [hobbies2, setHobbies2] = useState([]);
    const [hobbies3, setHobbies3] = useState([]);
    const [hobbies4, setHobbies4] = useState([]);
    const [hobbies5, setHobbies5] = useState([]);
    const [frameworks1, setFrameworks1] = useState([]);
    const [frameworks2, setFrameworks2] = useState([]);
    const [frameworks3, setFrameworks3] = useState([]);
    const [frameworks4, setFrameworks4] = useState([]);
    const [frameworks5, setFrameworks5] = useState([]);


    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [Summary, setSummary] = useState('');
    const [hobbie1Name, setHobbie1Name] = useState('');
    const [hobbie1Description, setHobbie1Description] = useState('');
    const [hobbie2Name, setHobbie2Name] = useState('');
    const [hobbie2Description, setHobbie2Description] = useState('');
    const [hobbie3Name, setHobbie3Name] = useState('');
    const [hobbie3Description, setHobbie3Description] = useState('');
    const [hobbie4Name, setHobbie4Name] = useState('');
    const [hobbie4Description, setHobbie4Description] = useState('');
    const [hobbie5Name, setHobbie5Name] = useState('');
    const [hobbie5Description, setHobbie5Description] = useState('');
    const [framework1Name, setFramework1Name] = useState('');
    const [framework1Level, setFramework1Level] = useState('');
    const [framework1Year, setFramework1Year] = useState('');
    const [framework2Name, setFramework2Name] = useState('');
    const [framework2Level, setFramework2Level] = useState('');
    const [framework2Year, setFramework2Year] = useState('');
    const [framework3Name, setFramework3Name] = useState('');
    const [framework3Level, setFramework3Level] = useState('');
    const [framework3Year, setFramework3Year] = useState('');
    const [framework4Name, setFramework4Name] = useState('');
    const [framework4Level, setFramework4Level] = useState('');
    const [framework4Year, setFramework4Year] = useState('');
    const [framework5Name, setFramework5Name] = useState('');
    const [framework5Level, setFramework5Level] = useState('');
    const [framework5Year, setFramework5Year] = useState('');



    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await userApi.get('/profile');
                setName(data.users[0].name);
                setLastname(data.users[0].lastname);
                setEmail(data.users[0].email);
                setCity(data.users[0].city);
                setCountry(data.users[0].country);
                setSummary(data.users[0].Summary);
                setHobbies1(data.hobbies[0]);
                setHobbie1Name(data.hobbies[0].name);
                setHobbie1Description(data.hobbies[0].description);
                setHobbie2Name(data.hobbies[1].name);
                setHobbie2Description(data.hobbies[1].description);
                setHobbie3Name(data.hobbies[2].name);
                setHobbie3Description(data.hobbies[2].description);
                setHobbie4Name(data.hobbies[3].name);
                setHobbie4Description(data.hobbies[3].description);
                setHobbie5Name(data.hobbies[4].name);
                setHobbie5Description(data.hobbies[4].description);
                setFramework1Name(data.frameworks[0].name);
                setFramework1Level(data.frameworks[0].level);
                setFramework1Year(data.frameworks[0].year);
                setFramework2Name(data.frameworks[1].name);
                setFramework2Level(data.frameworks[1].level);
                setFramework2Year(data.frameworks[1].year);
                setFramework3Name(data.frameworks[2].name);
                setFramework3Level(data.frameworks[2].level);
                setFramework3Year(data.frameworks[2].year);
                setFramework4Name(data.frameworks[3].name);
                setFramework4Level(data.frameworks[3].level);
                setFramework4Year(data.frameworks[3].year);
                setFramework5Name(data.frameworks[4].name);
                setFramework5Level(data.frameworks[4].level);
                setFramework5Year(data.frameworks[4].year);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const saveData = () => {
        const newUser = {
            name,
            lastname,
            email,
            city,
            country,
            Summary,
        };
        const newHoobie1 = {
            name1: hobbie1Name,
            description1: hobbie1Description
        };
        const newHoobie2 = {
            name2: hobbie2Name,
            description2: hobbie2Description
        };
        const newHoobie3 = {
            name3: hobbie3Name,
            description3: hobbie3Description
        };
        const newHoobie4 = {
            name4: hobbie4Name,
            description4: hobbie4Description
        };
        const newHoobie5 = {
            name5: hobbie5Name,
            description5: hobbie5Description
        };
        const newFramework1 = {
            nameFramework1: framework1Name,
            level1: framework1Level,
            year1: framework1Year
        };
        const newFramework2 = {
            nameFramework2: framework2Name,
            level2: framework2Level,
            year2: framework2Year
        };
        const newFramework3 = {
            nameFramework3: framework3Name,
            level3: framework3Level,
            year3: framework3Year
        };
        const newFramework4 = {
            nameFramework4: framework4Name,
            level4: framework4Level,
            year4: framework4Year
        };
        const newFramework5 = {
            nameFramework5: framework5Name,
            level5: framework5Level,
            year5: framework5Year
        };

        console.log('voy a actualizar')
        updateUserData();
        updateHobbieData();
        updateFrameworkData();
    }
    const updateHobbieData = async () => {
        const hobbies = [
            { name: hobbie1Name, description: hobbie1Description },
            { name: hobbie2Name, description: hobbie2Description },
            { name: hobbie3Name, description: hobbie3Description },
            { name: hobbie4Name, description: hobbie4Description },
            { name: hobbie5Name, description: hobbie5Description },
        ];

        hobbies.forEach(async (hobbie, i) => {
            try {
                const response = await userApi.put(`profile/update/hobbies/${i + 1}`, hobbie);
                console.log('Datos actualizados con éxito', response.data);
            } catch (error) {
                console.error('Error al actualizar datos:', error);
                Alert.alert('Error', 'Error al actualizar datos');
            }

        })
    };

    const updateFrameworkData = async () => {
        const frameworks = [
            { name: framework1Name, level: framework1Level, year: framework1Year },
            { name: framework2Name, level: framework2Level, year: framework2Year },
            { name: framework3Name, level: framework3Level, year: framework3Year },
            { name: framework4Name, level: framework4Level, year: framework4Year },
            { name: framework5Name, level: framework5Level, year: framework5Year },
        ]

        frameworks.forEach(async (framework, i) => {
            try {
                const response = await userApi.put(`profile/update/frameworks/${i + 1}`, framework);
                console.log('Datos actualizados con éxito', response.data);
            } catch (error) {
                console.error('Error al actualizar datos:', error);

            }

        })
    };

    const updateUserData = async () => {

        const user = {
            name,
            lastname,
            email,
            city,
            country,
            Summary,
        };

        try {
            const response = await userApi.put(`profile/update/users/1`, user);


            // Aquí puedes manejar la respuesta según tus necesidades
            console.log('Datos actualizados con éxito', response.data);
            Alert.alert('Éxito', 'Datos actualizados con éxito');
        } catch (error) {
            console.log()
            console.error('Error al actualizar datos:', error);
            Alert.alert('Error', 'Error al actualizar datos');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={{ flex: 1 }}></View>
                    <View style={styles.container}>
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 24,
                                textAlign: 'center',
                                marginTop: 60,
                                fontFamily: 'LobsterTwo-Regular'
                            }}>
                            Lista de atributos:
                        </Text>

                        <View>
                            <Text style={styles.title}>Nombre</Text>
                            <TextInput
                                placeholder={name}
                                placeholderTextColor={'black'}
                                keyboardType="default"
                                value={name}
                                onChangeText={setName}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Apellido</Text>
                            <TextInput
                                placeholder={lastname}
                                placeholderTextColor={'black'}
                                keyboardType="default"
                                value={lastname}
                                onChangeText={setLastname}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Correo</Text>
                            <TextInput
                                placeholder={email}
                                placeholderTextColor={'black'}
                                value={email}
                                onChangeText={setEmail}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Ciudad</Text>
                            <TextInput
                                placeholder={city}
                                placeholderTextColor={'black'}
                                value={city}
                                onChangeText={setCity}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Pais</Text>
                            <TextInput
                                placeholder={country}
                                placeholderTextColor={'black'}
                                value={country}
                                onChangeText={setCountry}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Resumen</Text>
                            <TextInput
                                placeholder={Summary}
                                placeholderTextColor={'black'}
                                value={Summary}
                                multiline={true}
                                onChangeText={setSummary}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Hobbie 1</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={hobbie1Name}
                                placeholderTextColor={'black'}
                                value={hobbie1Name}
                                onChangeText={setHobbie1Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Descripcion</Text>
                            <TextInput
                                placeholder={hobbie1Description}
                                placeholderTextColor={'black'}
                                value={hobbie1Description}
                                onChangeText={setHobbie1Description}
                                multiline={true}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Hobbie 2</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={hobbie2Name}
                                placeholderTextColor={'black'}
                                value={hobbie2Name}
                                onChangeText={setHobbie2Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Descripcion</Text>
                            <TextInput
                                placeholder={hobbie2Description}
                                placeholderTextColor={'black'}
                                value={hobbie2Description}
                                onChangeText={setHobbie2Description}
                                multiline={true}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Hobbie 3</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={hobbie3Name}
                                placeholderTextColor={'black'}
                                value={hobbie3Name}
                                onChangeText={setHobbie3Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Descripcion</Text>
                            <TextInput
                                placeholder={hobbie3Description}
                                placeholderTextColor={'black'}
                                value={hobbie3Description}
                                onChangeText={setHobbie3Description}
                                multiline={true}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Hobbie 4</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={hobbie4Name}
                                placeholderTextColor={'black'}
                                value={hobbie4Name}
                                onChangeText={setHobbie4Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Descripcion</Text>
                            <TextInput
                                placeholder={hobbie4Description}
                                placeholderTextColor={'black'}
                                value={hobbie4Description}
                                onChangeText={setHobbie4Description}
                                multiline={true}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Hobbie 5</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={hobbie5Name}
                                placeholderTextColor={'black'}
                                value={hobbie5Name}
                                onChangeText={setHobbie5Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Descripcion</Text>
                            <TextInput
                                placeholder={hobbie5Description}
                                placeholderTextColor={'black'}
                                value={hobbie5Description}
                                onChangeText={setHobbie5Description}
                                multiline={true}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Framework 1</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={framework1Name}
                                placeholderTextColor={'black'}
                                value={framework1Name}
                                onChangeText={setFramework1Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Nivel de conocimiento</Text>
                            <TextInput
                                placeholder={framework1Level}
                                placeholderTextColor={'black'}
                                value={framework1Level}
                                onChangeText={setFramework1Level}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Año de comienzo</Text>
                            <TextInput
                                placeholder={framework1Year}
                                placeholderTextColor={'black'}
                                value={framework1Year}
                                onChangeText={setFramework1Year}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Framework 2</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={framework2Name}
                                placeholderTextColor={'black'}
                                value={framework2Name}
                                onChangeText={setFramework2Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Nivel de conocimiento</Text>
                            <TextInput
                                placeholder={framework2Level}
                                placeholderTextColor={'black'}
                                value={framework2Level}
                                onChangeText={setFramework2Level}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Año de comienzo</Text>
                            <TextInput
                                placeholder={framework2Year}
                                placeholderTextColor={'black'}
                                value={framework2Year}
                                onChangeText={setFramework2Year}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Framework 3</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={framework3Name}
                                placeholderTextColor={'black'}
                                value={framework3Name}
                                onChangeText={setFramework3Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Nivel de conocimiento</Text>
                            <TextInput
                                placeholder={framework3Level}
                                placeholderTextColor={'black'}
                                value={framework3Level}
                                onChangeText={setFramework3Level}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Año de comienzo</Text>
                            <TextInput
                                placeholder={framework3Year}
                                placeholderTextColor={'black'}
                                value={framework3Year}
                                onChangeText={setFramework3Year}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Framework 4</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={framework4Name}
                                placeholderTextColor={'black'}
                                value={framework4Name}
                                onChangeText={setFramework4Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Nivel de conocimiento</Text>
                            <TextInput
                                placeholder={framework4Level}
                                placeholderTextColor={'black'}
                                value={framework4Level}
                                onChangeText={setFramework4Level}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Año de comienzo</Text>
                            <TextInput
                                placeholder={framework4Year}
                                placeholderTextColor={'black'}
                                value={framework4Year}
                                onChangeText={setFramework4Year}
                                style={styles.inputs}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Framework 5</Text>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                placeholder={framework5Name}
                                placeholderTextColor={'black'}
                                value={framework5Name}
                                onChangeText={setFramework5Name}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Nivel de conocimiento</Text>
                            <TextInput
                                placeholder={framework5Level}
                                placeholderTextColor={'black'}
                                value={framework5Level}
                                onChangeText={setFramework5Level}
                                style={styles.inputs}
                            />
                            <Text style={styles.text}>Año de comienzo</Text>
                            <TextInput
                                placeholder={framework5Year}
                                placeholderTextColor={'black'}
                                value={framework5Year}
                                onChangeText={setFramework5Year}
                                style={styles.inputs}
                            />
                        </View>
                        {/* Botón de editar */}
                        <TouchableOpacity style={styles.button} onPress={saveData}>
                            <Text>Editar</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 10 }}></View>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        backgroundColor: 'lightgrey',
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        marginBottom: 10,
        width: 250
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        marginTop: 15,
        width: 200,
        alignItems: 'center'
    },
    text: {
        color: 'black'
    },
    title: {
        color: 'black',
        fontSize: 18,
    },
});

export default App;
