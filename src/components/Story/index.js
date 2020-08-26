import React from 'react';

import {Container, Image} from './styles';

export default function Story({story, ...properties}) {
  return (
    <Container {...properties}>
      <Image source={{uri: story.image}} />
    </Container>
  );
}