import React from 'react'

const ContactCard = (props)=>{

const {id,name,email} = props.contact
const {deleteHandler} = props
console.log(props)

    return(
        <div  className='item' style={{display:'flex',alignItems:'center'}}>   
                <div className='content' style={{width:'99%'}}>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
                <i className='trash alternate outline icon' style={{width:'1%',color:'red'}} onClick={()=>deleteHandler(id)} ></i>
            </div>
    )
}


export default ContactCard