import React, { useState, useRef } from 'react';
import { ChatMessage, CurrentUser } from '../Models';

interface Props {
  saveChatMessage: (message: ChatMessage) => void,
  currentUser: CurrentUser
}

console.log(Date.now());

function ChatInput({saveChatMessage, currentUser}: Props) {
  const refContainer = useRef<HTMLInputElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    
    if(refContainer.current){
      const text = refContainer.current.value;
      const dateNow = Date.now();
      const msg = {
        id: `${currentUser.userID}_${dateNow}`,
        content: text,
        timestamp: dateNow,
        userID: currentUser.userID,
        username: currentUser.username
      };      
      saveChatMessage(msg);      
    }
  }

  return (
    <div className="chat_input">
      <form>
        <div className="input_wrapper">
          <input type="text" name="chat_message" placeholder="Write a message" ref={refContainer}></input>
          <button className="chat_input__submit" onClick={handleSubmit}> > </button>
        </div>
      </form>
    </div>
  )
}

export default ChatInput;