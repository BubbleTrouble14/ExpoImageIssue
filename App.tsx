/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import {Image} from 'expo-image';
import {
  Collection,
  CollectionNFT,
  CollectionNFTRequestBody,
  CollectionNFTResponse,
} from './src/types/Collections';

import {fetchData} from './src/services';

type RowItemProps = {
  item: Collection;
  showDesc?: boolean;
  width?: number;
  numColumns: number;
};

function RowItem({item}: RowItemProps): JSX.Element {
  return (
    <View style={{paddingHorizontal: 4}}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          borderColor: '#CACACA',
          borderWidth: 0.5,
          borderRadius: 8,
        }}>
        <View
          style={{
            borderRadius: 8,
            borderColor: 'grey',
            overflow: 'hidden',
          }}>
          <Image
            recyclingKey={item.id}
            style={{
              width: '100%',
              aspectRatio: 1,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
            source={{uri: item.thumbnail_uri}}
          />
        </View>
      </View>
    </View>
  );
}

const nums = [1, 2, 4, 6];

function App(): JSX.Element {
  const {width} = useWindowDimensions();
  // const [data, setData] = useState<Collection[]>([]);
  const [data, setData] = useState<CollectionNFT[]>([]);

  const [numColumns, setNumColumns] = useState<number>(3);
  const [nextPage, setNextPage] = useState<string | undefined>(undefined);

  const renderItem: ListRenderItem<Collection> = ({item}) => (
    <RowItem item={item} numColumns={numColumns} />
  );

  useEffect(() => {
    const call = async () => {
      try {
        const response = await fetchData<
          CollectionNFTRequestBody,
          CollectionNFTResponse
        >({
          url: 'collections/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl/nfts',
          parameters: {
            collection_id:
              'col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl',
            size: 100,
          },
        });
        if (response) {
          setData(response.items);
          setNextPage(response.next);
        } else {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    call();
  }, []);

  const loadMore = async () => {
    if (!nextPage) {
      return;
    }
    try {
      const response = await fetchData<
        CollectionNFTRequestBody,
        CollectionNFTResponse
      >({
        url: 'collections/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl/nfts',
        parameters: {
          collection_id:
            'col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl',
          size: 100,
          page: nextPage,
        },
      });
      if (response) {
        setData([...data, ...response.items]);
        setNextPage(response.next);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <Button
        title="press"
        onPress={() => {
          Image.clearMemoryCache();
          Image.clearDiskCache();
          setNumColumns(prev => {
            if (prev === 3) {
              return 0;
            }
            return ++prev;
          });
        }}
      />
      <FlashList
        numColumns={nums[numColumns]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{margin: 4}} />}
        data={data}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={5}
        estimatedItemSize={width / nums[numColumns]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  background: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});

export default App;
