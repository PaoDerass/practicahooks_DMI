import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';

type Alumno = {
  id: string;
  nombre: string;
};

export default function App() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);

  useEffect(() => {
    const alumnosIniciales: Alumno[] = [
      { id: '1', nombre: 'Bruno' },
      { id: '2', nombre: 'Naiara' },
      { id: '3', nombre: 'Iker' },
      { id: '4', nombre: 'Tadeo' },
      { id: '5', nombre: 'Luna' },
      { id: '6', nombre: 'Gael' },
      { id: '7', nombre: 'Noa' },
      { id: '8', nombre: 'Fabián' },
      { id: '9', nombre: 'Violeta' },
      { id: '10', nombre: 'Ezequiel' },
    ];
    setAlumnos(alumnosIniciales);
  }, []);

  const agregarAlumno = () => {
    const nuevoId = (alumnos.length + 1).toString();
    const nuevoAlumno: Alumno = {
      id: nuevoId,
      nombre: `Alumno ${nuevoId}`,
    };
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  return (
    <SafeAreaView style={estilos.contenedor}>
      <Text style={estilos.titulo}>Lista de Alumnos</Text>

      <FlatList
        data={alumnos}
        keyExtractor={(alumno) => alumno.id}
        renderItem={({ item }) => (
          <Text style={estilos.alumno}>
            {item.id}. {item.nombre}
          </Text>
        )}
        contentContainerStyle={{ paddingBottom: 100 }} 
      />

      <View style={estilos.contenedorBoton}>
        <TouchableOpacity style={estilos.boton} onPress={agregarAlumno}>
          <Text style={estilos.textoBoton}>Agregar Alumno</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f3e5f5',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#6a1b9a',
  },
  alumno: {
    fontSize: 18,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#ce93d8',
    color: '#4a148c',
  },
  contenedorBoton: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 30 : 20, 
    left: 20,
    right: 20,
  },
  boton: {
    backgroundColor: '#ba68c8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
