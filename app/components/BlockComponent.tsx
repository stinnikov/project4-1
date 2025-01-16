import React from 'react';
import { View, Text, StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';
import commonStyles from '../styles/commonStyles';

// Оптимизированный компонент блока

interface BlockComponentProps {
  content: React.ReactElement,
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}
const BlockComponent: React.FC<BlockComponentProps> = ({ style, contentStyle, content }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.content, contentStyle]}>
        {content}
      </View>
    </View>
  );
};

// Стили для компонента
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: commonStyles.block.padding,
    paddingLeft: commonStyles.block.padding,
    // Дополнительные стили для контента, если необходимо
  },
});

export default React.memo(BlockComponent); // Используем React.memo для оптимизации