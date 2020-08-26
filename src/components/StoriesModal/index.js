import React from 'react';

import {StyleSheet, Animated, Dimensions} from 'react-native';

import stories from './stories.json';
import {Container} from './styles';
import Story from '../Story';

const {width} = Dimensions.get('window');

export default function StoriesModal() {
  const axisX = new Animated.Value(0);
  const perspective = 50;
  const angle = Math.atan(perspective / (width / 2));

  function onGenerateStyle(index) {
    const offset = width * index;
    const inputRange = [offset - width, offset + width];

    const translateX = axisX.interpolate({
      inputRange,
      outputRange: [width / 2, -width / 2],
      extrapolate: 'clamp',
    });

    const rotateY = axisX.interpolate({
      inputRange,
      outputRange: [`${angle}rad`, `-${angle}rad`],
      extrapolate: 'clamp',
    });

    return {
      ...StyleSheet.absoluteFillObject,
      transform: [
        {
          perspective,
        },
        {
          translateX,
        },
        {
          rotateY,
        },
        {
          translateX,
        },
      ],
    };
  }

  return (
    <Container>
      {stories.reverse().map((story, index) => (
        <Story story={story} style={onGenerateStyle(index)} />
      ))}

      <Animated.ScrollView
        horizontal
        bounces={false}
        decelerationRate="fast"
        contentContainerStyle={{
          width: width * stories.length,
        }}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: axisX,
              },
            },
          },
        ])}
      />
    </Container>
  );
}