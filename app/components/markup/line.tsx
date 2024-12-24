import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const lineChar:string = '─';

const Line:React.FC = () => {
    const [dimensions, setDimensions] = useState({
      window: windowDimensions,
      screen: screenDimensions,
    });

    useEffect(() => {
      const subscription = Dimensions.addEventListener(
        'change',
        ({window, screen}) => {
          setDimensions({window, screen});
        },
      );
      return () => subscription?.remove();
    });


    let numLetters:number = Math.floor(dimensions.window.width / 20 * 1.8);
    
    // Создаем строку с повторяющимися символами
    const lineString = lineChar.repeat(numLetters);

    return(
        <Text>{lineString}</Text>
    )
}

export default Line;