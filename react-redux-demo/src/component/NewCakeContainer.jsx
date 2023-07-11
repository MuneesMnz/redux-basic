import React, { useState } from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'

const NewCakeContainer = (props) => {

    const [input,setInput]=useState('1')
  return (
    <div>
      <h2>Number Of Cakes {props.numofCakes} </h2>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={()=>props.buyCake(input)}>buy {input} cake</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        numofCakes: state.cake.numofCakes,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:(number)=>dispatch(buyCake(number)) ,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
