import { StyleSheet, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight: number = Dimensions.get("window").height;

const widthUnit = deviceWidth / 100;
const heightUnit = deviceHeight / 100;

console.log("height:" + heightUnit * 14.8)
console.log("width:" + widthUnit * 44.6)



const commonStyles = StyleSheet.create({

  general: {
    // general
    padding: 15,
    margin: 15,
  },
  mainWhiteColor:{
    color:"white",
  },

  mainGreyColor:{
    color:'#d9d9d9',
  },

  mainBrightColor:{
    color:'#7000E2',
  },

  // text
  text: {
    fontSize: 18,
    fontFamily: 'SourceSansPro_400Regular',
    color: 'black',
  },

  basketButton:{
    color: '#7000E2',
  },
  basketButtonText:{
    color: 'white',
  },

  //blocks

  block: {
    padding: 16,
  },

  blockTitle: {
    fontSize: 18,

    fontWeight: 'bold',
  },

  deliveryBlock: {
    backgroundColor: '#cfcfcf',
  },

  searchBlock: {

  },

  recsBlock: {
    margin: 15,
    padding: 15,
  },

  topGoodsBlock: {
    margin: 15,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#cfcfcf',
  },

  image: {
    borderRadius: 12,
  },

  //cards

  cardTitle: {
    padding: 10,
    margin: 10,
    fontSize: 11,
    fontWeight: 'thin',
    color: 'black',
  },

  topGoodsCard: {
    padding: 16,
    width: widthUnit * 34.3,
    height: heightUnit * 32.3,
    fontSize: 14,
    fontWeight: 'semibold',
  },

  recsCard: {
    width: widthUnit * 50,
    height: heightUnit * 15,
    padding: 16,
  },

  categoryCard: {
    gap: 10,
    height: heightUnit * 15,
    width: widthUnit * 45,
  },

  productListCard: {
    fontSize: 14,
    fontWeight: 'regular',
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

  // bar
  bar: {
    padding: 16,
    margin: 16,

    width: widthUnit * 91,
    height: heightUnit * 5.4,

    borderWidth: 0,
    borderRadius: 12,
  },

  barText: {
    fontSize: 17,
    padding: 0,
  },

  searchBar: {
    marginRight: widthUnit * 3.6,
  },

  //lists
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    margin: 16,
  },

  categoryListElement: {
    marginRight: 15,
    minHeight: 38,
    borderWidth: 2,
    borderColor: '#cfcfcf',
  },

  categoryListTitle: {
    fontSize: 20,
    margin: 10,
  },

  //other

  searchSettings: {
    width: widthUnit * 12.5,
    backgroundColor: '#cfcfcf',
  },

  topGoodsImageBackground: {
    height: heightUnit * 11.6,
    width: widthUnit * 34.3,
  },

  productsCardImageBackground: {
    height: heightUnit * 17,
    width: widthUnit * 43.25,
  }
});

export default commonStyles;

/*
  categoryList:{
    padding:15,
    text:{
      titleFontSize: 18 as const,
      titleFontWeight: 'bold' as const,
    }
  },

  categoryCard:{
    text:{
      titleFontSize: 12,
    }
  },
  productCard:{
    text:{
      titleFontSize:12,
      titleFontWeight: 'bold' as const,
      color:'white',
    }
  }
*/