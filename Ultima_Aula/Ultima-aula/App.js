import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqyH-D8PQZAwU2g7EK4orzENkbaVKNJWc",
  authDomain: "meuprimeirofirestore-704b0.firebaseapp.com",
  projectId: "meuprimeirofirestore-704b0",
  storageBucket: "meuprimeirofirestore-704b0.appspot.com",
  messagingSenderId: "112502594763",
  appId: "1:112502594763:web:8943620701332763e88f4e"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const PessoasCollection = firebase.firestore().collection('Nomes');
      const snapshot = await PessoasCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
