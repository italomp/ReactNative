import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';

import Movie from './components/Movie';
import api from './services/api';

function App(): JSX.Element {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true)
  
  useEffect(() => { 
    async function loadMovies(){
      const resp = await api.get("r-api/?api=filmes");
      setMovies(resp.data);
      setLoading(false);
    }
    loadMovies();
  }, []);

  if(loading){
    return(
      <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
        <ActivityIndicator color="#121212" size={45}/>
      </View>
    );
  }
  else{
    return (
      <View>
        <FlatList
        data={movies}
        keyExtractor={ item => String(item.id)}
        renderItem={ ({ item }) => <Movie data={item} />}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
