import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {InputComponent} from '../component/InputComponent';
import {constantStyle} from '../assets/ConstantStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPopularResturent,
  getOpenNowResturent,
  getHotAndNew,
} from '../redux/Actions/getData';
import {DisplayImageAndText} from '../component/DisplayImageAndText';
import {SectionTitle} from '../component/SectionTitle';

export function HomeScreen() {
  const [searchLoaction, setSearchLocation] = useState('');
  const {width, height} = useWindowDimensions();
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(
    state => state.getPopularResturents,
  );
  const openNow = useSelector(state => state.getOpenNow);
  const HotAndNew = useSelector(state => state.getHotAndNew);
  const categoryData = [
    {
      id: 1,
      title: 'middle east',
      image: require('../assets/image/category1.png'),
      ALIAS: 'mediterranean, All',
    },
    {
      id: 2,
      title: 'mexican',
      image: require('../assets/image/category2.jpg'),
      ALIAS: 'easternmexican',
    },
    {
      id: 3,
      title: 'Spanish',
      image: require('../assets/image/category3.png'),
      ALIAS: 'spanish, All',
    },
    {
      id: 4,
      title: 'Turkish',
      image: require('../assets/image/category4.jpg'),
      ALIAS: 'turkish, All',
    },
  ];

  const handelSearchLocation = Text => {
    setSearchLocation(Text);
  };

  useEffect(() => {
    dispatch(getPopularResturent(4));
    dispatch(getOpenNowResturent(4));
    dispatch(getHotAndNew(4));
  }, [dispatch]);

  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.SearchBox,
            {width: width > height ? 500 : width, alignSelf: 'center'},
          ]}>
          <InputComponent
            placeholder="Search An Address"
            onChangeText={handelSearchLocation}
            style={{paddingHorizontal: 50}}
            value={searchLoaction}
          />

          <Image
            style={styles.SearchIcon}
            source={require('../assets/image/SearchIcon.png')}
          />
        </View>
        <View>
          <FlatList
            keyExtractor={item => item.id}
            contentContainerStyle={styles.CategoryBox}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categoryData}
            renderItem={({item}) => (
              <Pressable
                style={styles.pressableCategory}
                onPress={() => console.log(item.ALIAS)}>
                <Image
                  resizeMode="stretch"
                  style={[
                    styles.categoryImg,
                    {width: width / 3.75, height: width / 3.75},
                  ]}
                  source={item.image}
                />
                <Text style={styles.categoryTitle}>{item.title}</Text>
              </Pressable>
            )}
          />
        </View>
        <View>
          <View style={styles.titleBox}>
            <SectionTitle title={'Popular Resturents'} />
          </View>
          <View style={[styles.PopularItemsBox, {width: width, flex: 1}]}>
            <DisplayImageAndText data={data} loading={loading} />
          </View>
        </View>
        <View>
          <View style={styles.titleBox}>
            <SectionTitle title={'Open Now !'} />
          </View>
          <DisplayImageAndText
            isHorizontal={true}
            ItemsStyle={{
              width: width / 1.5,
              marginHorizontal: 20,
              height: width / 1.9,
            }}
            imageStyle={{borderRadius: 30, flex: 1}}
            data={openNow.data}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 120,
    backgroundColor: '#FFFFFF',
  },
  helloTitleBox: {
    marginBottom: 30,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  basketbox: {
    position: 'relative',
    flexDirection: 'row',
  },

  numberOfItems: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: constantStyle.ORANGE_COLOR,
    left: -10,
    top: -12,
    zIndex: 999,
    borderRadius: 20,
    textAlign: 'center',
  },

  helloTitle: {
    fontSize: 15,
  },
  SearchBox: {
    position: 'relative',
    paddingHorizontal: 15,
  },
  SearchIcon: {
    position: 'absolute',
    top: 15,
    left: 30,
  },
  categoryImg: {
    marginRight: 15,
    borderRadius: 25,
  },
  CategoryBox: {
    marginTop: 35,
    paddingLeft: 15,
  },
  pressableCategory: {
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  titleBox: {
    width: '100%',
  },
  PopularText: {
    fontSize: 22,
  },
  ViewAllText: {
    fontSize: 18,
    color: constantStyle.ORANGE_COLOR,
  },
  PopularItemsBox: {
    marginTop: 20,
    alignItems: 'center',
  },
});
