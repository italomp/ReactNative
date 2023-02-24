import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import Movie from './components/Movie';
import api from './services/api';

type MovieProps = {
  id: number,
  nome: string,
  sinopse: string,
  foto: any,
}

function App(): JSX.Element {
  const [movies, setMovies] = useState();
  
  useEffect(() => { 
    async function loadMovies(){
      const resp = await api.get("r-api/?api=filmes");
      setMovies(resp.data);
    }
    loadMovies();
  }, []);
  
  return (
    <View>
      <FlatList
      data={movies}
      keyExtractor={ item => String(item.id)}
      renderItem={ ({ item }) => <Movie data={item} />}/>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
