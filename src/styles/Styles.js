import React from 'react';
import { StyleSheet, Dimensions,Appearance } from 'react-native';

// colors
const lightColor = '#fff';
const darkColor = '#000';
const darkColor200 = '#1a191f';
const darkColor300 = '#1a1a1a';
const primaryColor = '#F06D19';
const dangerColor = '#f44336';
const warningColor = '#fcbe68';
const gray = '#696969';
const disableColor = '#898787';
const lightGray = "#F8F8F8";
const infoColor = "#007bff";
const tmColor = "#E3C42C";
const darkBlue = "#14328C";

const colors = {
  lightColor: lightColor,
  primaryColor: primaryColor,
  darkColor: darkColor,
  darkColor200: darkColor200,
  dangerColor: dangerColor,
  warningColor: warningColor,
  gray: gray,
  lightGray: lightGray,
  disableColor: disableColor,
  infoColor: infoColor,
  tmColor: tmColor,
};

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const baseWidth = 15;

const _isDarkMode = Appearance.getColorScheme() === 'dark';

const styles = StyleSheet.create({
  normalText:{
    color: gray
  },
  mauto:{
    margin: 'auto'
  },
  m0:{
    margin: 0
  },
  m1:{
    margin: baseWidth
  },
  m2: {
    margin: baseWidth * 2
  },
  m3: {
    margin: baseWidth * 3
  },
  m4: {
    margin: baseWidth * 4
  },
  m5: {
    margin: baseWidth * 5
  },
  mT0: {
    marginTop: 0
  },
  mT0_5: {
    marginTop: baseWidth / 2
  },
  mT1: {
    marginTop: baseWidth
  },
  mT2: {
    marginTop: baseWidth * 2
  },
  mT3: {
    marginTop: baseWidth * 3
  },
  mT4: {
    marginTop: baseWidth * 4
  },
  mT5: {
    marginTop: baseWidth * 5
  },
  mB0: {
    marginBottom: 0
  },
  mB1_5: {
    marginBottom: baseWidth / 5
  },
  mB1: {
    marginBottom: baseWidth
  },
  mB2: {
    marginBottom: baseWidth * 2
  },
  mB3: {
    marginBottom: baseWidth * 3
  },
  mB4: {
    marginBottom: baseWidth * 4
  },
  mB5: {
    marginBottom: baseWidth * 5
  },
  mL0: {
    marginLeft: 0
  },
  mL1_5: {
    marginLeft: baseWidth / 2
  },
  mL1: {
    marginLeft: baseWidth
  },
  mL2: {
    marginLeft: baseWidth * 2
  },
  mL3: {
    marginLeft: baseWidth * 3
  },
  mL4: {
    marginLeft: baseWidth * 4
  },
  mL5: {
    marginLeft: baseWidth * 5
  },
  mR0: {
    marginRight: 0
  },
  mR0_5: {
    marginRight: baseWidth / 2
  },
  mR1: {
    marginRight: baseWidth
  },
  mR2: {
    marginRight: baseWidth * 2
  },
  mR3: {
    marginRight: baseWidth * 3
  },
  mR4: {
    marginRight: baseWidth * 4
  },
  mR5: {
    marginRight: baseWidth * 5
  },
  mX1_5: {
    marginLeft: baseWidth / 2,
    marginRight: baseWidth / 2
  },
  mX1: {
    marginLeft: baseWidth,
    marginRight: baseWidth
  },
  mX2: {
    marginLeft: baseWidth * 2,
    marginRight: baseWidth * 2
  },
  mX3: {
    marginLeft: baseWidth * 3,
    marginRight: baseWidth * 3
  },
  mX4: {
    marginLeft: baseWidth * 4,
    marginRight: baseWidth * 4
  },
  mX5: {
    marginLeft: baseWidth * 5,
    marginRight: baseWidth * 5
  },
  mX10: {
    marginLeft: baseWidth * 10,
    marginRight: baseWidth * 10
  },
  mY1: {
    marginTop: baseWidth,
    marginBottom: baseWidth
  },
  mY1_2: {
    marginTop: baseWidth / 2,
    marginBottom: baseWidth / 2
  },
  mY1_5: {
    marginTop: baseWidth / 5,
    marginBottom: baseWidth / 5
  },
  mY2: {
    marginTop: baseWidth * 2,
    marginBottom: baseWidth * 2
  },
  mY3: {
    marginTop: baseWidth * 3,
    marginBottom: baseWidth * 3
  },
  mY4: {
    marginTop: baseWidth * 4,
    marginBottom: baseWidth * 4
  },
  mY5: {
    marginTop: baseWidth * 5,
    marginBottom: baseWidth * 5
  },
  p0:{
    padding: 0
  },
  p1_5:{
    padding: baseWidth / 5
  },
  p1_2:{
    padding: baseWidth / 2
  },
  p1_3:{
    padding: baseWidth / 1.5
  },
  p1:{
    padding: baseWidth
  },
  p2: {
    padding: baseWidth * 2
  },
  p3: {
    padding: baseWidth * 3
  },
  p4: {
    padding: baseWidth * 4
  },
  p5: {
    padding: baseWidth * 5
  },
  pL1:{
    paddingLeft: baseWidth
  },
  pL2:{
    paddingLeft: baseWidth * 2
  },
  pL3:{
    paddingLeft: baseWidth * 3
  },
  pL4:{
    paddingLeft: baseWidth * 4
  },
  pL5:{
    paddingLeft: baseWidth * 5
  },
  pR1:{
    paddingRight: baseWidth
  },
  pR2:{
    paddingRight: baseWidth * 2
  },
  pR3:{
    paddingRight: baseWidth * 3
  },
  pR4:{
    paddingRight: baseWidth * 4
  },
  pR5:{
    paddingRight: baseWidth * 5
  },
  pX1: {
    paddingLeft: baseWidth,
    paddingRight: baseWidth
  },
  pX1_2:{
    paddingLeft: baseWidth / 2,
    paddingRight: baseWidth / 2
  },
  pX2: {
    paddingLeft: baseWidth * 2,
    paddingRight: baseWidth * 2
  },
  pX3: {
    paddingLeft: baseWidth * 3,
    paddingRight: baseWidth * 3
  },
  pX4: {
    paddingLeft: baseWidth * 4,
    paddingRight: baseWidth * 4
  },
  pX5: {
    paddingLeft: baseWidth * 5,
    paddingRight: baseWidth * 5
  },
  pY1: {
    paddingTop: baseWidth,
    paddingBottom: baseWidth
  },
  pY1_2:{
    paddingTop: baseWidth / 2,
    paddingBottom: baseWidth / 2
  },
  pY2: {
    paddingTop: baseWidth * 2,
    paddingBottom: baseWidth * 2
  },
  pY3: {
    paddingTop: baseWidth * 3,
    paddingBottom: baseWidth * 3
  },
  pY4: {
    paddingTop: baseWidth * 4,
    paddingBottom: baseWidth * 4
  },
  pY5: {
    paddingTop: baseWidth * 5,
    paddingBottom: baseWidth * 5
  },
  pB1: {
    paddingBottom: baseWidth
  },
  pB2: {
    paddingBottom: baseWidth * 2
  },
  pB3: {
    paddingBottom: baseWidth * 3
  },
  pB4: {
    paddingBottom: baseWidth * 4
  },
  pB5: {
    paddingBottom: baseWidth * 5
  },
  pB150: {
    paddingBottom: 150
  },
  pT1: {
    paddingTop: baseWidth
  },
  pT2: {
    paddingTop: baseWidth * 2
  },
  pT3: {
    paddingTop: baseWidth * 3
  },
  pT4: {
    paddingTop: baseWidth * 4
  },
  pT5: {
    paddingTop: baseWidth * 5
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignEnd:{
    alignItems: 'flex-end'
  },
  alignFlexStart: {
    alignItems: 'flex-start'
  },
  justifySpaceBetween: {
    justifyContent: 'space-between'
  },
  justifySpaceAround: {
    justifyContent: 'space-around'
  },
  flexWrap: {
    flexWrap: 'wrap'
  },
  flexShrink: {
    flexShrink: 1,
  },
  flex  :{
    display: 'flex',
  },
  flexRow :{
    flexDirection: 'row',
  },
  flexGrow :{
    flexGrow: 1,
  },
  flexRowReverse :{
    flexDirection: 'row-reverse',
  },
  flexColumn :{
    flexDirection: 'column',
  },
  flex1 :{
    flex: 1,
  },
  flex3 :{
    flex: 3,
  },
  flex1_8 :{
    flex: 1.8,
  },
  flexCol: {
    flexDirection: 'column'
  },
  textCenter: {
    textAlign: 'center'
  },
  textUppercase: {
    textTransform: 'uppercase'
  },
  textLowercase: {
    textTransform: 'lowercase'
  },
  textBold: {
    fontWeight: 'bold'
  },
  textSemiBold: {
    fontWeight: '600'
  },
  textThin: {
    fontWeight: '200'
  },
  textWeight500: {
    fontWeight: '500'
  },
  textWeight300: {
    fontWeight: '300'
  },
  textTm:{
    color: tmColor,
  },
  textInfo:{
    color: infoColor
  },
  textWhite: {
    color: lightColor
  },
  textGray: {
    color: disableColor
  },
  textPrimary: {
    color: primaryColor
  },
  textDanger: {
    color: dangerColor
  },
  textWarning: {
    color: warningColor
  },
  textDark: {
    color: darkColor
  },
  textSubtitle: {
    fontSize: 12
  },

  textJustify: {
    textAlign: 'justify'
  },
  textMini: {
    fontSize: 9
  },
  backgroundPrimary:{
    backgroundColor: primaryColor
  },
  backgroundWhite:{
    backgroundColor: lightColor
  },
  backgroundLightGray:{
    backgroundColor: lightGray
  },
  backgroundLightDark:{
    backgroundColor: darkColor200
  },
  backgroundSemiDark:{
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  backgroundDark:{
    backgroundColor: darkColor
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  font11: {
    fontSize: 11
  },
  font12: {
    fontSize: 12
  },
  font13: {
    fontSize: 13
  },
  font14: {
    fontSize: 14
  },
  font15: {
    fontSize: 15
  },
  font16: {
    fontSize: 16
  },
  font17: {
    fontSize: 17
  },
  font18: {
    fontSize: 18
  },
  font19: {
    fontSize: 19
  },
  font20: {
    fontSize: 20
  },
  font25: {
    fontSize: 25
  },
  font30: {
    fontSize: 30
  },
  font40: {
    fontSize: 40
  },
  font78: {
    fontSize: 78
  },
  font94: {
    fontSize: 94
  },
  font124:{
    fontSize: 124
  },

    splashLogo: {
    width: 230,
    height: 100,
  },
  col: {
    width: 'auto'
  },
  col2: {
    width: '15%'
  },
  col3: {
    width: '25%'
  },
  col4: {
    width: '33.33%'
  },
  col6: {
    width: '50%'
  },
  col7: {
    width: '70%'
  },
  col8: {
    width: '75%'
  },
  col9:{
    width: '90%'
  },
  col9_5:{
    width: '95%'
  },
  col10:{
    width: '100%'
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22
  },

  LibraryPhoto:{
    width: 95.37,
    height: 133.72,
  },
  LibraryMusic:{
    width: 71,
    height: 111,
  },
  LibraryVideo:{
    width: 148,
    height: 92,
  },
  LibraryPDF:{
    width: 97,
    height: 133,
  },

  notificationImage: {
    width: 48,
    height: 62,
  },

  splashSubLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },

  splashSubLogoWide: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },

  logoContainer: {
    flex: 1,
    flexDirection: 'row'
  },

  lineSeparator:{
    height: 1,
    backgroundColor: darkColor200
  },

  appContainer: {
    paddingLeft: baseWidth * 2,
    paddingRight: baseWidth * 2
  },

  currentBookThumbnail: {
    width: 110,
    height: 145
  },

  roundedButton: {
    borderRadius : 70,
    width : 90,
    height : 90,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  rounded: {
    borderRadius : 10
  },

  semiRounded: {
    borderRadius : 15
  },

  bordered:{
    borderWidth: .5,
    borderColor: "#000"
  },
  borderedGray:{
    borderWidth: .8,
    borderColor: "gray"
  },
  borderPrimary:{
    borderColor: primaryColor,
    borderWidth: 1
  },

  borderedTop: {
    borderTopWidth: .5,
    borderColor: "#E0E0E0"
  },

  borderedBottom:{
    borderBottomWidth: 1,
    borderColor: "#898787"
  },

  pullBottom:{
    flexDirection: "row",
    flex: 1,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    padding: 15
  },

  videoCardImage: {
    height: 150,
    width: null,
    flex: 1
  },

  audioCardImage: {
    height: 37,
    width: 37
  },

  publicationImage: {
    width: 200,
    height: 270
  },
  publicationCardImage: {
    marginTop: -30,
    borderRadius: 3,
    width: 110,
    height: 145
  },

  publicationCardText: {
    flexShrink: 1,
    marginLeft: 7,
    marginTop: -20
  },

  publicationCard: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    borderRadius: 10,
    elevation: 5,
    shadowRadius: 5
  },
  publicationThumbnail: {
    width: 110,
    height: 145,

  },

  tinyLogo: {
    width: 50,
    height: 50,
  },
  videoThumbnail: {
    width: 148,
    height: 93
  },
  audioThumbnail: {
    width: 71,
    height: 111
  },

  pdfContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  pdf: {
    flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  headerIcon: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 11
  },

  modalView: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  videoContainer:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: darkColor
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  currentFlatlist: {
    width: Dimensions.get('window').width / 3 - 10 ,
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: baseWidth,
    marginLeft: 1
  },
  imageBackground:{
    height: deviceHeight / 2.5,
    width: "100%"
  },
  imageFullCover:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  w100p:{
    width: "100%"
  },
  w90:{
    width: 90
  },
  w100:{
    width: 100
  },
  screenHeight : {
    height: Dimensions.get('screen').height
  },
 indicatorSlideActive: {
   height:8,
   width:20,
   backgroundColor:primaryColor,
   borderRadius:10,
   marginHorizontal:3
 },
  indicatorSlide: {
    height:8,
    width:8,
    backgroundColor:gray,
    borderRadius:10,
    marginHorizontal:3
  },
  iconDefault : {
    backgroundColor: 'darkblue',
    color: '#fff',
  },

});

export {styles, deviceHeight, deviceWidth, colors}
