import React from 'react'
import messageHOC from './HOC';
//interface UserMessage {
 //   name:string,
 //   message:string
//}
//const Message = (prop:UserMessage): any => {
    
 //   return (
 //       <p>{prop.name},{prop.message}</p>
 //   )
//}

const example = (props:any): any => <p> {props.name},{props.message}</p>;


const Message = messageHOC (example);

export default Message;