import React from 'react'

function TheirMessage({lastMessage , message}) {
    const isFirstMessageByUser = !lastMessage || (lastMessage.sender.username ===! message.sender.username)
    const src = message?.sender?.avatar
    return (
        <div className="message-row" >
            {isFirstMessageByUser && (
            <div 
            className='message-avatar' 
            style={{backgroundImage:'url('+src+')'}}
             />)}
             {
                 (message?.attachments?.length > 0)
                  ?
                   (
                    <img    
                        src={message.attachments[0].file}
                        alt="img-msg"
                        className="message-image"
                        style={{marginLeft : isFirstMessageByUser ? '3px' : '49px'}}
                     />
                 ) : 
                 (
                    <div className="message" style={{float:"left" ,  background:"mintcream", color:"black" , marginLeft : isFirstMessageByUser ? '3px' : '49px'}}>
                         {message.text}
                    </div>
                )
             }
           
        </div>
    )
}

export default TheirMessage
