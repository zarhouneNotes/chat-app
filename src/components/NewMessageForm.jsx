import React , {useState} from 'react'
import { isTyping, sendMessage } from 'react-chat-engine'
import {PictureOutlined} from '@ant-design/icons'


function NewMessageForm(props) {
    const {chatId , creds} = props
    const [msg, setValue] = useState('')
  //  console.log(props)

    const handlSubmit = (event) =>{
        event.preventDefault()
        let text = msg.trim();
        if(text.length >0) {sendMessage(creds ,chatId, {text : text} )}
      // console.log(msg)
            
        setValue('')
    }
    const handlChange = (event) =>{
        setValue(event.target.value)
         isTyping(props , chatId)
    }

    // const keyDown = (event)=>{
    //     if (event.keyCode === 13) {
    //         handlSubmit()
    //     }
    // }


    const handlUpload = (event) =>{
        sendMessage(creds, chatId, {files : event.target.files , text :''})
    }


    


    


    return (
        <form className='message-form' onSubmit={handlSubmit} >
            <input  className="message-input"
                    onChange={handlChange}
                    value={msg}
                    placeholder="type your message.."
                    onSubmit={handlSubmit}
                    
                   

             />
             <label htmlFor="upload-button">
                 <span className='image-button'>
                         <PictureOutlined className='picture-icon' />
                 </span>
             </label>
             <input type="file"
                    id='upload-button'
                    multiple={false}
                    style={{display:'none'}}
                    onChange={handlUpload}
              />



             {/* <button className="message-button" type='submit' onClick={handlSubmit}  >SEND</button> */}
            
        </form>
    )
}

export default NewMessageForm
