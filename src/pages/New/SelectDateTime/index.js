/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import {Container, HourList, Hour, Title} from './styles';

export default function SelectDateTime({navigation}) {
  const [date, setDate] = useState(new Date());

  const [availableHours, setAvailableHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });
      setAvailableHours(response.data);
    }
    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput
          date={date}
          onChange={setDate}
          onPress={() => navigation.navigate('Confirm', {date})}
        />
        <HourList
          data={availableHours}
          keyExtractor={item => item.time}
          renderItem={({item}) => (
            <Hour
              onPress={() => handleSelectHour(item.value)}
              enable={item.available}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({navigation}) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
