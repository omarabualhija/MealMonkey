import React, {useEffect} from 'react';
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
import {ListItems} from '../component/LIstItems';
import {useSelector, useDispatch} from 'react-redux';
import {getHotAndNew} from '../redux/Actions/getData';
export function ListItemsScreen({navigation, route}) {
  const {width, height} = useWindowDimensions();
  const HotAndNew = useSelector(state => state.getHotAndNew);
  const data = useDispatch(state => state.getHotAndNew);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotAndNew(20));
  }, [dispatch]);
  const _renderItems = ({item}) => (
    <View style={styles.itemBox}>
      <Image
        resizeMode={'stretch'}
        source={{uri: item.image_url}}
        style={[styles.itemImg, {width: width}]}></Image>
      <View style={styles.infoBOx}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <View style={styles.ReviewBox}>
          <Icon size={20} color={constantStyle.ORANGE_COLOR} name="star" />
          <Text style={styles.numReview}>{item.rating}</Text>
          <Text style={styles.typeRestaurant}>
            {item.categories && item.categories[0].title}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.itemsBox}>
        <FlatList data={HotAndNew.data} renderItem={_renderItems} />
      </View>
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
