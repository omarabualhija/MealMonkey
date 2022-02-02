import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {constantStyle} from '../assets/ConstantStyle';
import {Rating_a} from '../component/Rating';
import {Rating, AirbnbRating} from 'react-native-ratings';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonComponent} from './../component/ButtonComponent';

export function DetailsScreen() {
  const {width, height} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          resizeMode={'stretch'}
          style={styles.mainImg}
          source={require('../assets/image/menu1.png')}
        />

        <View style={styles.DetailsBox}>
          <View style={[styles.heartBox, styles.shadow]}>
            <Icon name="heart-outline" size={30} />
          </View>
          <View style={styles.HeaderBOx}>
            <Text style={styles.Title}>TEST CDD Tes TestTestt CDD</Text>
          </View>

          <View style={styles.StarBox}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={2.5}
              emptyStarColor={constantStyle.ORANGE_COLOR}
              fullStarColor={constantStyle.ORANGE_COLOR}
              starSize={20}
            />
            <Text style={styles.ratingText}>4 Star Rating</Text>
          </View>

          <View style={styles.descriptionBox}>
            <Text style={styles.DescriptionWord}>Description</Text>
            <Text style={styles.Description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              leo non mollis id cursus. Eu euismod faucibus in leo malesuada
            </Text>
          </View>
          <View style={styles.ReviewsBox}>
            <Text style={styles.ReviewWord}>Reviews</Text>
            <View style={styles.ReviewBox}>
              <Image
                style={styles.personImg}
                source={require('../assets/image/avatar.png')}
              />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                leo non mollis id cursus. Eu euismod faucibus in leo malesuada
              </Text>
            </View>
            <View style={styles.ReviewBox}>
              <Image
                style={styles.personImg}
                source={require('../assets/image/avatar.png')}
              />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                leo non mollis id cursus. Eu euismod faucibus in leo malesuada
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.visitBtnBox,
              {width: width > height ? 400 : '100%'},
            ]}>
            <ButtonComponent
              Content="Visiting site"
              onPress={console.log('d')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
  },
  mainImg: {
    width: '100%',
    height: 250,
  },
  DetailsBox: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    top: -40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
  },
  heartBox: {
    position: 'absolute',
    right: 20,
    top: -15,
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 50,
  },
  HeaderBOx: {
    paddingTop: 40,
  },
  Title: {
    fontSize: 20,
    color: constantStyle.DARK_GRAY_COLOR,
  },
  StarBox: {
    width: 120,
    paddingTop: 8,
  },
  ratingText: {
    marginTop: 5,
    color: constantStyle.ORANGE_COLOR,
  },
  descriptionBox: {
    marginTop: 20,
  },
  DescriptionWord: {
    fontSize: 18,
    fontWeight: 'bold',
    color: constantStyle.DARK_GRAY_COLOR,
  },
  Description: {
    color: constantStyle.GRAY_COLOR,
    marginTop: 10,
    lineHeight: 20,
    letterSpacing: 1.2,
    fontSize: 15,
  },
  shadow: {
    shadowColor: constantStyle.GRAY_COLOR,
    shadowOffset: {
      width: -20,
      height: -50,
    },

    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 12,
  },
  ReviewWord: {
    fontSize: 20,
    color: constantStyle.ORANGE_COLOR,
  },
  ReviewsBox: {
    marginTop: 50,
  },
  ReviewBox: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  personImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 7,
  },
  visitBtnBox: {
    marginTop: 20,
    alignSelf: 'center',
  },
});
