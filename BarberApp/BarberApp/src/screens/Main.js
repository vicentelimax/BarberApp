// MainScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { ScheduleContext } from '../Contexts/index';

const MainScreen = ({ navigation }) => {
  const { appointments } = useContext(ScheduleContext);

  return (
    <View style={styles.container}>
      <View style={stylesHeader.container}>
        <View style={stylesHeader.header}>
          <View
            width={13}
            height={13}
            style={{
              backgroundColor: 'gray',
              borderRadius: 100,
            }}
          ></View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 14,
              alignItems: 'center',
            }}
          >
            <Text>Usuário</Text>
            <View
              width={50}
              height={50}
              style={{
                backgroundColor: 'gray',
                borderRadius: 100,
              }}
            ></View>
          </View>
        </View>
        <Text style={stylesHeader.title}></Text>
      </View>
      <Text style={styles.title}>Agendamentos</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointment}>
            <Text>{`Data: ${item.date} - Hora: ${item.time}`}</Text>
          </View>
        )}
      />
      <Button
        title="Agendar Novo Horário"
        onPress={() => navigation.navigate('Agendamento')}
        color='#b5691f'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  appointment: {
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});

const stylesHeader = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 24,
  },
  title: {
    marginTop: 210, // Ajuste para posicionar o título abaixo da `View`
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MainScreen;
