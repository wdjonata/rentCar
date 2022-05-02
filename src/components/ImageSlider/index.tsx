import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
   Container,
   ImageIndexes,
   ImageIndex,
   CarImageWrapper,
   CarImage
} from './styles';

interface Props {
    imagesUrl: {
        id: string;
        photo: string;
    }[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export const ImageSlider = ({imagesUrl}: Props) => {
    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ChangeImageProps) => {
      const index = info.viewableItems[0].index!;
      console.log(index)
      setImageIndex(index);
    })
    
   return (
       <Container>
           <ImageIndexes>
                { 
                    imagesUrl.map((_, index) => (
                        <ImageIndex
                            key={String(index)}
                            active={index === imageIndex}
                        />
                    ))
            
                }
           </ImageIndexes>

           
            <FlatList
                data={imagesUrl}
                keyExtractor={ (item) => item.id}
                renderItem={ ({ item }) => (
                    console.log(imagesUrl),
                    <CarImageWrapper>
                        <CarImage
                            source={{ uri: item.photo }}
                            resizeMode="contain"
                        />
                    </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onViewableItemsChanged={indexChanged.current}
            />
           
       </Container>
   );
}