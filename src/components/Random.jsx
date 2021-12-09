import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchVideos } from '../redux/actions/searchAction'

function Random() {
     const dispatch = useDispatch()

     useEffect(() => {
        dispatch(fetchVideos('one'))


     }, [])

    return (
        <div>
            
        </div>
    )
}

export default Random
