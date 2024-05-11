import { useCallback, useEffect, useMemo } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_POST, UPDATE_POST } from './redux/dataProvider'
import DisplayPost from './DisplayPost'
import {v4 as uuidv4} from 'uuid'

function App() {

  let [timer, setTimer] = useState(0)
  let initialState = useRef({title : '', body : ''})
  let [formData, setFormData] = useState(initialState.current)

  let result = useSelector(state => state.dataProvider)
  let dispatch = useDispatch()

  let postData = useMemo(() => result, [result])

  useEffect(() => {
    let timerId = setInterval(()=> setTimer(prev => prev + 1), 1000)
    
    return () => {
      clearInterval(timerId)
    }
  },[])

  const handleChange = event => {
    setFormData(prev => ({...prev, [event.target.name] : event.target.value}))
  }

  const handleSubmit = event => {
    event.preventDefault()
    setFormData(initialState.current)
    if(formData.title && formData.body){
      let obj = {
        id : uuidv4(),
        verify : false,
        ...formData
      }
      dispatch(ADD_POST(obj))
    }
  }

  const handleClick = useCallback((id) => {
    console.log(id)
    console.log('handleClick')
    dispatch(UPDATE_POST(id))
  }, [])

  return (
    <>
    <div className='m-auto w-3/5 flex flex-col text-center'>
      <h1 className='font-bold text-lg' >Timer :- {timer} </h1>
      <form onClick={handleSubmit} className='border-2 border-black flex flex-col justify-center items-center' >
        <input className='border-2 border-black w-4/5 rounded outline-none' type="text" placeholder='Enter post title' value={formData.title} name='title' onChange={handleChange} />
        <textarea name="body" rows='5' className='border-2 border-black mt-1 max-h-20 min-h-20 w-4/5 rounded-md ' value={formData.body} placeholder='Enter post body' onChange={handleChange}></textarea>
        <input type="submit" value={'Add Post'} className='border-2 border-black rounded-lg w-1/2 h-9 mt-1' />
      </form>
    </div>
    <div className='mt-1 flex flex-col'>
      {postData?.map(post => <DisplayPost post={post} handleClick={handleClick}/>)}
    </div>
    </>
  )
}

export default App
