import React from 'react';
import { ChatMessage, CurrentUser } from '../Models';

interface Props {
  message: ChatMessage,
  currentUser: CurrentUser
}

function ChatLine({ message, currentUser}: Props) {

  const {username, content, timestamp} = message;
  
  return (
    <div className={"chatline_wrapper " + (username === currentUser.username ? 'right' : '')}>
      <div className="chatline">
        <div className={"username"}>
          {username}
        </div>

        <div className="content">
          <p>{content}</p>
        </div>

        <span className="time">{timestamp}</span>
      </div>
    </div>
  )
}

export default ChatLine;