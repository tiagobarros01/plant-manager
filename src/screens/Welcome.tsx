import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import wateringImg from '../assets/watering.png';

export function Welcome() {
  return (
    <View>
      <Text>Gerencie suas plantas de forma fácil</Text>

      <Image source={wateringImg} />
      <Text>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity>
        <Text>
          {'>'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
