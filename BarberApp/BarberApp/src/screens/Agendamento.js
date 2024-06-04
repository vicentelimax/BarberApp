// ScheduleScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ScheduleContext } from '../Contexts/index';

const ScheduleScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { addAppointment } = useContext(ScheduleContext);

  const handleSchedule = () => {
    addAppointment(date, time);
    alert(`Agendado para ${date} às ${time}`);
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Horário</Text>
      <TextInput
        style={styles.input}
        placeholder="Data (AAAA-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Agendar" color='#b5691f' onPress={handleSchedule} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default ScheduleScreen;
