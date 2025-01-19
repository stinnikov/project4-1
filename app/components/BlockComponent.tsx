import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { commonStyles } from '../styles/styles';

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
    paddingTop: commonStyles.general.padding,
    paddingBottom: commonStyles.general.padding,
    paddingRight: commonStyles.general.padding,
    paddingLeft: commonStyles.general.padding,
    // Дополнительные стили для контента, если необходимо
  },
});

export default React.memo(BlockComponent); // Используем React.memo для оптимизации