import React from 'react';

import { Container, ContainerHeader, GroupLabel, Label, ContainerScrollStory, ContainerItemStory,
  ContainerPhoto, Photo, Name, } from './styles';

import stories from './stories.json';

const Stories = ({onShowStoriesModal}) => {
  return (
    <Container>
      <ContainerHeader> 
        <GroupLabel>
        </GroupLabel>
      </ContainerHeader>

      <ContainerScrollStory>
        {stories &&
          stories.map((storie, index) => (
            <ContainerItemStory key={index} onPress={onShowStoriesModal}>
              <ContainerPhoto>
                <Photo source={{uri: storie.photo}} />
              </ContainerPhoto>
              <Name>{storie.name}</Name>
            </ContainerItemStory>
          ))}
      </ContainerScrollStory>
    </Container>
  );
};

export default Stories;