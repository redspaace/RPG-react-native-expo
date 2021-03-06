import React from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';

import habilityImg from '../../../../assets/images/skills/summon.png';
import defaultAttackImg from '../../../../assets/images/skills/default-attack.png';

import TestSkill from '../../../../components/skillsClasses/rogueSkills';
import styles from './styles';

export default function Skills() {
  const dispatch = useDispatch();
  const valueDice = useSelector(state => state.combatReducer.valueDice);
  const dexterity = useSelector(state => state.attributesReducer.dexterity);
  const enemyCurrentLife = useSelector(state => state.currentEnemyInfoReducer.currentLife);
  const enemyArmor = useSelector(state => state.currentEnemyInfoReducer.armor);

  function calculateModifier(attribute: number) {
    let less = 3.5;
    if(attribute % 2 === 0)
      less = 3;
    return (attribute / 2) - less;
  }
  
  function calculateDamage(attribute: number) {
    return valueDice + calculateModifier(attribute);    
  }

  function calculateDefense(armor: number, life: number) {
    return armor + life;
  }

  function attack() {
    let resultAttack = calculateDefense(enemyArmor, enemyCurrentLife) - calculateDamage(dexterity);
    let afterAttack = calculateDamage(dexterity) - enemyArmor;
    dispatch({ type: 'UPDATE_CURRENTLIFE_ENEMY', value: resultAttack });
    dispatch({ type: 'UPDATE_AFTERATTACK', value: afterAttack });
    dispatch({ type: 'UPDATE_ENEMY_ATTACK_CHECK', value: true });
  }

  return(
    <View style={styles.container}>
      <TestSkill />

      <RectButton style={styles.buttonDefaultAttack} onPress={() => attack()}>
        <Image style={styles.image} source={defaultAttackImg} />
      </RectButton>
    </View>
  );
}