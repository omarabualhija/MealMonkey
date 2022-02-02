import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {constantStyle} from '../assets/ConstantStyle';
export function MenuScreen() {
  const {width, height} = useWindowDimensions();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.categoryBox}>
          <View style={styles.orangeBox} />
          <View
            style={[
              styles.itemsBox,
              {width: width > height ? 500 : width - 100},
            ]}>
            <View style={[styles.itemBox, styles.shadow]}>
              <Image
                resizeMode={'cover'}
                style={styles.CategoryImage}
                source={require('../assets/image/menu1.png')}
              />
              <Text style={styles.categoryTitle}>Coffee Shops </Text>
              <View style={[styles.arrowBox, styles.shadow]}>
                <Image source={require('../assets/image/ArrowRight.png')} />
              </View>
            </View>
            <View style={[styles.itemBox, styles.shadow]}>
              <Image
                resizeMode={'cover'}
                style={styles.CategoryImage}
                source={require('../assets/image/menu2.jpg')}
              />
              <Text style={styles.categoryTitle}>Fast Food Restaurants</Text>

              <View style={[styles.arrowBox, styles.shadow]}>
                <Image source={require('../assets/image/ArrowRight.png')} />
              </View>
            </View>
            <View style={[styles.itemBox, styles.shadow]}>
              <Image
                resizeMode={'cover'}
                style={styles.CategoryImage}
                source={require('../assets/image/menu3.jpg')}
              />
              <Text style={styles.categoryTitle}>Health Markets</Text>

              <View style={[styles.arrowBox, styles.shadow]}>
                <Image source={require('../assets/image/ArrowRight.png')} />
              </View>
            </View>
          </View>
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
  },
  MenuHeaderBox: {
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

  MenuTitle: {
    fontSize: 20,
  },

  CategoryImage: {
    width: 75,
    height: 75,
    left: -40,
    borderRadius: 80,
    position: 'absolute',
  },
  categoryBox: {
    flexDirection: 'row',
    marginTop: 10,
  },
  orangeBox: {
    width: 90,
    backgroundColor: constantStyle.ORANGE_COLOR,
    height: '100%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  itemsBox: {
    paddingVertical: 15,
  },
  itemBox: {
    height: 100,
    marginVertical: 15,
    flexDirection: 'row',
    paddingVertical: 10,
    left: -30,
    paddingRight: 80,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },

  categoryTitle: {
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: constantStyle.DARK_GRAY_COLOR,
    left: 40,
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
  arrowBox: {
    position: 'absolute',
    right: -20,
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
