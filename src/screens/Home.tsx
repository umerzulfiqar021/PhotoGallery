import {  ActivityIndicator,StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useReducer} from 'react'
import { initialState,actions,reducer } from '../reducer/Reduce'
import { getData } from '../api/Network'
import List from '../containers/List'

const Home = () => {
// const [loading,setLoading] = useState(false)
// const [error,setError] = useState(false)
// const [page, setPage] = useState(1)
// const [array,setArray] = useState([])
// const getData2 = async ()=>{
//   setLoading(true);
//   try {
//     setPage(page+1)
//     const data = await getData(page+1);
//     setArray((prev)=>[...prev,...data]);
//     setLoading(false)
//   } catch (error) {
//     setError(true)
//   }
// }
const [state,dispatch] = useReducer(reducer,initialState)
const {loading,error,photos,page} = state
  //funtion
  const dataGet = useCallback(async ()=> {
    dispatch(actions.onLoading())
    try {
      const nextPhotos = await getData(page)
      dispatch(actions.onSuccess(nextPhotos,page))
    } catch (error) {
      dispatch(actions.onError())
    }
  },[page])
  useEffect(()=>{
    dataGet()
    // getData2()
  },[])
  ////UI
 
    if(loading){
      return(
        <View style= {styles.indicator}>
          <ActivityIndicator animating = {true}/>
        </View>
      )
    }
    if(error){
      return(
      <View style = {styles.indicator}>
        <Text style = {styles.text}>Sorry no Data to show!!</Text>
      </View>
      )
    }
    return <List  items={photos} onEndReached={dataGet} numColumns={3} />
}

export default Home

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#021',
    fontWeight: 'bold',
    fontSize: 15,

  }
})