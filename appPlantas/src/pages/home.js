import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>home</Text>
  
      <a href='./pag02.js'>
        <Button
        />
      </a>
   
      
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
