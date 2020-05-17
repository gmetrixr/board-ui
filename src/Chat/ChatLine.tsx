import React from 'react';
import { ChatMessage, CurrentUser } from '../Models';

interface Props {
  message: ChatMessage,
  currentUser: CurrentUser
}

function ChatLine({ message, currentUser}: Props) {

  const {username, content, timestamp} = message;

  const messageDate = new Date(timestamp);
  const ts_hours = messageDate.getHours() < 10 ? '0' + messageDate.getHours() : messageDate.getHours();
  const ts_minutes = messageDate.getMinutes() < 10 ? '0' + messageDate.getMinutes() : messageDate.getMinutes();
  
  return (
    <div className={"chatline_wrapper flex " + (username === currentUser.username ? 'flex-row-reverse' : '')}>
      <div className="chatline">
        <div className={"username"}>
          {username}
        </div>

        <div className="content">
          <p>{content}</p>
        </div>

        <span className="time">{ts_hours + ':' + ts_minutes}</span>
      </div>
    </div>
  )
}

export default ChatLine;