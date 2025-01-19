import { StyleSheet, Dimensions, ColorValue } from 'react-native';
const deviceWidth: number = Dimensions.get("window").width;
const deviceHeight: number = Dimensions.get("window").height;

const widthUnit = deviceWidth / 100;
const heightUnit = deviceHeight / 100;

const colors: {
  mainWhiteColor: ColorValue,
  mainGreyColor: ColorValue,
  mainBrightColor: ColorValue,
  mainDarkColor: ColorValue,
} = {
  mainWhiteColor: 'white',
  mainGreyColor: '#d9d9d9',
  mainBrightColor: '#7000E2',
  mainDarkColor: 'black',
};

export const commonStyles = StyleSheet.create({

  general: {
    // general
    padding: 16,
    margin: 16,
    borderRadius: 12,
  },


  // text
  text: {
    fontSize: 18,
    fontFamily: 'SourceSansPro_400Regular',
    color: 'black',
  },

  //cards



  //lists
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    margin: 16,
  },

});



export const colorsStyles = StyleSheet.create({
  mainDarkColor: {
    color: colors.mainDarkColor,
  },
  mainWhiteColor: {
    color: colors.mainWhiteColor,
  },

  mainGreyColor: {
    color: colors.mainGreyColor,
  },

  mainBrightColor: {
    color: colors.mainBrightColor,
  },

  basketButtonColor: {
    color: colors.mainBrightColor,
  },
})

export const textStyles = StyleSheet.create({
  productListCardText: {
    fontSize: 14,
    fontWeight: 'regular',
  },
  cardTitle: {
    padding: 10,
    margin: 10,
    fontSize: 11,
    fontWeight: 'thin',
    color: 'black',
  },
  basketButtonText: {
    fontSize: 18,
    fontWeight: 'regular',
    fontFamily: commonStyles.text.fontFamily,
    color: colors.mainWhiteColor,
  },
  basketButtonMiniText: {
    fontSize: 14,
    fontFamily: commonStyles.text.fontFamily,
    color: colors.mainWhiteColor,
  },
})

export const dimensionsStyles = StyleSheet.create(
  {
    bar: {
      width: widthUnit * 91,
      height: heightUnit * 5.4,
    },
    topGoodsCard: {
      width: widthUnit * 34.3,
      height: heightUnit * 32.3,
    },
    topGoodsImageBackground: {
      height: heightUnit * 11.6,
      width: widthUnit * 34.3,
    },
    recsCard: {
      width: widthUnit * 50,
      height: heightUnit * 15,
    },
    productListCard: {
      width: widthUnit * 43,
      height: heightUnit * 32.3,
    },
    productCard: {
      width: widthUnit * 100,
      height: heightUnit * 35,
    },

    productCardImage: {
      width: widthUnit * 100,
      height: heightUnit * 28.9,
    },
    productsCardImageBackground: {
      height: heightUnit * 17,
      width: widthUnit * 43.25,
    },
    categoryCard: {
      height: heightUnit * 15,
      width: widthUnit * 45,
    },
  }
)

export default { commonStyles, dimensionsStyles, colorsStyles, textStyles };