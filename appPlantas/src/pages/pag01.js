import { StyleSheet, Text, View , SafeAreaView, ScrollView} from 'react-native';

export default function Pag01() {
  return (
    <ScrollView>
      <SafeAreaView>
         <View style={styles.container}>
          <Text>pag01</Text>
        </View>
        <View style={{width: '100%', height: 250, backgroundColor:'red'}}/>
        <View style={{width: '100%', height: 250, backgroundColor:'blue'}}/>
        <View style={{width: '100%', height: 250, backgroundColor:'green'}}/>
        <View style={{width: '100%', height: 250, backgroundColor:'orange'}}/>
        <View style={{width: '100%', height: 250, backgroundColor:'black'}}/>
      </SafeAreaView>
     
    </ScrollView>
    
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
