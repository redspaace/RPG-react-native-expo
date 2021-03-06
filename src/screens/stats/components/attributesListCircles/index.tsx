import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import styles from './styles';

export default function AttributesListCircles() {
  const dexterity = useSelector(state => state.attributesReducer.dexterity);
  const constitution = useSelector(state => state.attributesReducer.constitution);
  const power = useSelector(state => state.attributesReducer.power);
  const intelligence = useSelector(state => state.attributesReducer.intelligence);
  const charisma = useSelector(state => state.attributesReducer.charisma);

  return(
    <View style={styles.container}>
      <View style={styles.attribute}>
        <Text style={styles.text}>
          <FontAwesome  name='circle' size={22} color='#7C1616' />
          {' '}Força
        </Text>
        <Text style={styles.text}>{power}</Text>
      </View>

      <View style={styles.attribute}>
        <Text style={styles.text}>
          <FontAwesome name='circle' size={22} color='#10A8BD' />
          {' '}Inteligência
        </Text>
        <Text style={styles.text}>{intelligence}</Text>
      </View>

      <View style={styles.attribute}>
        <Text style={styles.text}>
          <FontAwesome name='circle' size={22} color='#278210' />
          {' '}Destreza
        </Text>
        <Text style={styles.text}>{dexterity}</Text>
      </View>

      <View style={styles.attribute}>
        <Text style={styles.text}>
          <FontAwesome name='circle' size={22} color='#AF9F0D' />
          {' '}Constituição
        </Text>
        <Text style={styles.text}>{constitution}</Text>
      </View>

      <View style={styles.attribute}>
        <Text style={styles.text}>
          <FontAwesome name='circle' size={22} color='#7F2387' />
          {' '}Carisma
        </Text>
        <Text style={styles.text}>{charisma}</Text>
      </View>
    </View>
  );
}