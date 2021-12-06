import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {sampleAction} from '../redux/actions/templateActions'

function Sample() {

    const count = useSelector(state => state.templateReducer.count)
    const dispatch = useDispatch()

    //componentDidMount if dependency list is empty
    useEffect(() => {

        //component did unmount used as a cleanup function
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <>
            <h1>Redux Template</h1>
            <br />
            <h1>{count}</h1>
            <button onClick={()=>dispatch(sampleAction(3))}>Click to increment/change global state</button>
        </>
    )
}

export default Sample
