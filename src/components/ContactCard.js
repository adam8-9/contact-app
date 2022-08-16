import React from 'react'

const ContactCard = (props)=>{

const {id,name,email} = props.contact

    return(
        <div className='item' style={{display:'flex',alignItems:'center'}}>   
                <div className='content' style={{width:'99%'}}>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
                <i className='trash alternate outline icon' style={{width:'1%',color:'red'}} ></i>
            </div>
    )
}


export default ContactCard