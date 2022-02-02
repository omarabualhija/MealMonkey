import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {constantStyle} from '../assets/ConstantStyle';

export function DisplayImageAndText({
  data,
  loading,
  onPress,
  ItemsStyle,
  imageStyle,
  isHorizontal = false,
}) {
  const {width, height} = useWindowDimensions();

  const renderItem = ({item}) => (
    <Pressable
      style={[
        {
          marginVertical: 15,
          width: width > height ? width / 2 - 7.5 : width,
          marginRight: width > height ? 15 : 0,
        },
        ItemsStyle,
      ]}
      onPress={onPress}
      key={item.id}>
      <Image
        source={{uri: item.image_url}}
        style={[{width: '100%', height: 300}, imageStyle]}
        resizeMode="stretch"
      />
      <View style={{paddingHorizontal: 15}}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            marginVertical: 5,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../assets/image/Star.png')} />
          <Text style={{color: constantStyle.ORANGE_COLOR}}>
            {` ${item.rating}  `}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: constantStyle.GRAY_COLOR,
              fontSize: 15,
            }}>{`(${item.review_count})   ${item.categories[0].title} `}</Text>
        </View>
      </View>
    </Pressable>
  );
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      horizontal={isHorizontal}
      data={data}
      renderItem={renderItem}
    />
  );
}
