import React from 'react'
import MyMessage from './MyMessage'
import NewMessageForm from './NewMessageForm'
import TheirMessage from './TheirMessage'

export default function ChatFeed(props) {
   const {userName , activeChat , chats , messages} = props
     const chat = chats && chats[activeChat]
   console.log(props)



    const renderReadReceipts = (message , isMyMessage)=>{
    //   return  chat.people.map((contact, i)=>{
    //       console.log(message)
    //             contact.last_read === message.id  && (
                    
    //                 <div
    //                     className='read-receipt'
    //                     key={`read_${i}`}
    //                     style={{
    //                         float: isMyMessage ? "right" : "left" ,
    //                         backgroundImage : 'url('+contact.person.avatar+')'
    //                        // backgroundColor:'black'
    //                     }}
                        
    //                 />
    //                  ) 
                
    //     })
    }

     const renderMessage = ()=>{
         const keys = Object.keys(messages)
         
        return keys.map((key,index)=>{
            const message = messages[key]
            const lastMessageKey = index===0 ? null : keys[index-1] 
            const isMyMessage = userName === message.sender.username  ;
            return(
                <div key={`msg_${index}`} style={{width:'100%'}} >
                    <div className="message-block" >
                        {
                              isMyMessage ? 
                              <MyMessage    message={message} /> 
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-recipes" style={{marginRight: isMyMessage ? "18px" : "0px" , marginLeft: isMyMessage ? "0px" : " 68px " }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        
        
        })
            
     }
     renderMessage()
    return (
        <div className="chat-feed" >
            {/* <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {
                        chat.people.map((contact)=> ` ${contact.person.username}`)
                    }
                </div>
            </div> */}
            {renderMessage()}
            <div style={{height:'100px'}} />
            <div className="message-form-container">
                <NewMessageForm {...props} chatId={activeChat} />
            </div>
            
        </div>
    )
}
