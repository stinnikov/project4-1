import { StyleSheet, Dimensions, ColorValue } from 'react-native';
const deviceWidth: number = Dimensions.get("window").width;
const deviceHeight: number = Dimensions.get("window").height;

const widthUnit = deviceWidth / 100;
const heightUnit = deviceHeight / 100;



const lightThemeColors: {
  mainWhiteColor: ColorValue,
  mainGreyColor: ColorValue,
  mainLightGreyColor: ColorValue,
  mainBrightColor: ColorValue,
  mainBlackColor: ColorValue,
  mainDarkColor: ColorValue,
} = {
  mainWhiteColor: 'white',
  mainGreyColor: '#eeeeee',
  mainLightGreyColor: '#efefef',
  mainBrightColor: '#7f00ff',
  mainBlackColor: 'black',
  mainDarkColor: '#e1c4ff'
};

const appColors = lightThemeColors;

export const buttonStyles = StyleSheet.create({
  miniButton: {
    height: 30, // чуть больше размера иконки
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 5,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 24,
    shadowOpacity: 0.2,
    backgroundColor: appColors.mainWhiteColor,
  },
  basketButton: {
    flexDirection: 'row',
    gap: 2,
    minHeight: 28,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.mainBrightColor,
  }
})



export const colorsStyles = StyleSheet.create({
  mainBlackColor: {
    color: appColors.mainBlackColor,
  },
  mainWhiteColor: {
    color: appColors.mainWhiteColor,
  },

  mainLightGreyColor: {
    color: appColors.mainLightGreyColor
  },

  mainGreyColor: {
    color: appColors.mainGreyColor,
  },

  mainBrightColor: {
    color: appColors.mainBrightColor,
  },

  mainDarkColor: {
    color: appColors.mainDarkColor,
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
      width: widthUnit * 44,
      height: heightUnit * 43,
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
    bonusCard: {
      width: widthUnit * 94,
      height: heightUnit * 29,
    },
    circleStory: {
      height: 94,
      width: 94,
    },
    couponsAndPromotions: {
      height: heightUnit * 10,
    }
  }
)

export default { dimensionsStyles, colorsStyles, buttonStyles };