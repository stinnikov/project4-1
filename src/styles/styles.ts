import { StyleSheet, Dimensions, ColorValue } from 'react-native';
const deviceWidth: number = Dimensions.get("window").width;
const deviceHeight: number = Dimensions.get("window").height;

const widthUnit = deviceWidth / 100;
const heightUnit = deviceHeight / 100;

const lightThemeColors: {
  mainWhiteColor: ColorValue,
  mainGreyColor: ColorValue,
  mainLightGreyColor: ColorValue,
  mainDarkGreyColor: ColorValue,
  mainBrightColor: ColorValue,
  mainBlackColor: ColorValue,
  mainDarkColor: ColorValue,
} = {
  mainWhiteColor: 'white',
  mainGreyColor: '#eeeeee',
  mainLightGreyColor: '#E2E2E2',
  mainDarkGreyColor: '#6d6d6d',
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
  mainDarkGreyColor: {
    color: appColors.mainDarkGreyColor
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

export const shadowStyles = StyleSheet.create({
  regularShadow: {
    elevation: 5,
    shadowRadius: 24,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  }
})

export const dimensionsStyles = StyleSheet.create(
  {
    recsCard: {
      width: widthUnit * 50,
      height: heightUnit * 15, //ETO NADO
    },
    productListCard: {
      width: widthUnit * 44,
      height: heightUnit * 43, //ETO NADO
    },
    productCardImage: {
      width: widthUnit * 100,   //ETO NADO
      height: heightUnit * 28.9,
    },
    categoryCard: {
      height: heightUnit * 15, //ETO NADO
      width: widthUnit * 45,
    },
    bonusCard: {
      width: widthUnit * 94,
      height: heightUnit * 29,
    },
    circleStory: {
      height: 94, //ETO NADO
      width: 94,
    },
    couponsAndPromotions: {
      height: heightUnit * 10, //ETO NADO
    },
    categoryListImageBackground: {
      height: heightUnit * 33, //ETO NADO
    }
  }
)

export default { dimensionsStyles, colorsStyles, buttonStyles, shadowStyles };