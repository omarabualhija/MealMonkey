import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {constantStyle} from '../assets/ConstantStyle';
export function ListItems({navigation, data}) {
  const {width, height} = useWindowDimensions();
  const _img_url = `require(${data.image_url})`;

  const _renderItems = item => (
    <View style={styles.itemsBox}>
      <View style={styles.itemBox}>
        <Image
          resizeMode={'stretch'}
          source={_img_url}
          style={[styles.itemImg, {width: width}]}></Image>
        <View style={styles.infoBOx}>
          <Text style={styles.restaurantName}>{item.name}</Text>
          <View style={styles.ReviewBox}>
            <Icon size={20} color={constantStyle.ORANGE_COLOR} name="star" />
            <Text style={styles.numReview}>{item.rating}</Text>
            <Text style={styles.typeRestaurant}>
              {categories && categories[0].title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={data}
        renderItem={_renderItems}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  itemsBox: {
    marginBottom: 150,
  },
  itemBox: {
    marginTop: 8,
  },
  itemImg: {
    width: '100%',
    height: 200,
  },
  ReviewBox: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  numReview: {
    fontSize: 20,
    marginHorizontal: 15,
    color: constantStyle.ORANGE_COLOR,
  },
  restaurantName: {
    fontSize: 25,
    marginRight: 8,
    color: '#FFFFFF',
  },
  typeRestaurant: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  infoBOx: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});
