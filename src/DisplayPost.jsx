import React, {memo} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { UPDATE_POST } from './redux/dataProvider'

const DisplayPost = ({post, handleClick}) => {

  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  console.log(red, green , blue)

  let dispatch = useDispatch()

  return (
    <div className={`border-2 border-black mb-1`} style={{backgroundColor : `rgb(${red}, ${green}, ${blue})`}}>
        <h1 className='text-center font-bold text-xl'>{post.title}</h1>
        <section className='font-bold'>{post.body}</section>
        <div className='text-center'>
          <button onClick={()=>handleClick(post.id)} className='border-2 border-black w-1/5 rounded-md mb-1' >{post.verify ? "Verified" : 'Verify'}</button>
        </div>
    </div>
  )
}

export default memo(DisplayPost)