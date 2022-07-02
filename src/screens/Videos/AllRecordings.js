import React, {useContext, useEffect, useRef, useState} from "react";
import {colors, styles} from "../../styles/Styles";
import {ActivityIndicator, FlatList, SafeAreaView, TouchableOpacity, View} from "react-native";
import {Button, Icon, Menu, Text} from "native-base";
import {Calendar} from "react-native-calendars/src/index";
import moment from "moment";
import useDebounce from "../../hooks/useDebounce";
import {videos} from "../../utilities/api";
import {AuthContext} from "../../context/AuthContext";
import {Entypo, FontAwesome} from "@expo/vector-icons";
import VideoModal from "../../components/VideoModal";

const AllRecordings = () => {
  const {user, token, monitors} = useContext(AuthContext)
  const [selectedDay, setSelectedDay] = useState(moment().format('Y-MM-DD'))
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [video, setVideo] = useState(undefined)
  const [mid, setMid] = useState(monitors[0]) //aBiJU1acZa
  const [show,setShow] = useState(true)
  const [markDate, setMarkDate] = useState({})

  useEffect(()=>{
    video !== undefined && setOpen(true)
  },[video])

  useDebounce(()=>{
    if(mid!==undefined) {
      let h = getVideos()
    }
    let mark = {};
    mark[selectedDay] = {selected: true, color: '#00B0BF', textColor: '#FFFFFF' }
    setMarkDate(mark)
  },[selectedDay,mid])

  const getVideos = async () => {
    setLoading(true)
    const start = moment(selectedDay).format('YYYY-MM-DDTHH:mm:ss')
    const end = moment(selectedDay).format('YYYY-MM-DDT23:59:59')

    await videos(token,user.ke,mid,100,start,end).then(res=>{
      console.log(res)
      setData(res.videos)
    }).catch(err=>{
      alert('Error retrieving videos')
    })
    console.log(start,end)
    setLoading(false)
  }

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>setVideo(item)} style={[styles.p1, styles.rounded, styles.backgroundSemiDark, styles.mY1_2]}>
      <View style={[styles.flex,styles.justifySpaceBetween]}>
        <View style={[styles.flex, styles.flexRow]}>
          <Text>{moment(item.time).format('Y-MM-DD')} </Text>
          <Text bold style={styles.textGray}>({moment(item.time).format('hh:mm A')} - {moment(item.end).format('hh:mm A')} )</Text>
        </View>
        <Text>{(item.size / 1048576).toFixed(2)} MB</Text>
      </View>
    </TouchableOpacity>
  )

  const renderEmpty = () => (
    <View style={styles.flex1}>
      {
        loading ?
          <View style={[styles.flex1, styles.alignCenter, styles.justifyCenter]}>
            <ActivityIndicator color={"#fff"} size={"large"}/>
          </View>
          :
          <View style={[styles.flex1, styles.alignCenter, styles.justifyCenter]}>
            <Text style={{ color: 'white' }}>
              No data
            </Text>
          </View>
      }
    </View>
  )

  return (
    <SafeAreaView style={[styles.flex1, styles.backgroundDark, styles.p1]}>
      {
        open &&
        <VideoModal video={video} setIsOpen={()=>{
          setOpen(false)
          setVideo(undefined)
        }} isOpen={open}/>
      }
     <View style={[styles.flex, styles.justifySpaceBetween, styles.flexRow, styles.alignCenter]}>
       <Text fontSize={"lg"}>Search Video Recordings</Text>
       <View style={[styles.flex, styles.flexRow, styles.alignCenter ]}>
         <TouchableOpacity style={styles.pX1} onPress={()=>setShow(!show)}>
           <Icon as={FontAwesome} name={"calendar"} size={5}/>
         </TouchableOpacity>
         <Menu
           shouldOverlapWithTrigger={false}
           placement={"right"} trigger={triggerProps => {
           return <Button startIcon={ <Icon as={Entypo} name={"tv"} size={3}/>} size={"sm"} alignSelf="center" variant="solid" {...triggerProps}>
             monitor
           </Button>;
         }}>
           {
             monitors.map((m,i)=>(
               <Menu.Item key={i} onPress={()=>setMid(m)}>{m}</Menu.Item>
             ))
           }
         </Menu>
       </View>
     </View>
      {
        show &&
        <View style={styles.mT1}>
          <Calendar

            displayLoadingIndicator={loading}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2022-01-01'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={moment().format('Y-MM-DD')}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              setSelectedDay(day.dateString)
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={false}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            // Do not show days of other months in month page. Default = false
            hideExtraDays={false}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={false}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={false}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            markedDates={markDate}
            theme={{
              backgroundColor: '#000',
              dayTextColor: '#fff',
              calendarBackground: '#000',
              textDisabledColor: '#262626',
            }}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
          />
        </View>
      }
      <View style={styles.mB2}>
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={{ flexGrow: 1, marginTop:20 }}
          ListEmptyComponent={renderEmpty}
        />
      </View>
    </SafeAreaView>
  )
}

export default AllRecordings
