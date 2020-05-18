import React from 'react';
import { ChatMessage, CurrentUser } from '../Models';

interface Props {
  message: ChatMessage,
  currentUser: CurrentUser
}

function ChatLine({ message, currentUser}: Props) {

  const {username, content, timestamp} = message;

  const messageDate = new Date(timestamp);
  let tsHours: string | number = messageDate.getHours();
  let tsMinutes: string | number = messageDate.getMinutes();

  if(tsHours < 10) {
    tsHours = '0' + tsHours;
  }

  if(tsMinutes < 10) {
    tsMinutes = '0' + tsMinutes;
  }

  return (
    <div className={"chatline_wrapper flex " + (username === currentUser.username ? 'flex-row-reverse' : '')}>
      <div className="chatline">
        <div className={"username"}>
          {username}
        </div>

        <div className="content">
          <p>{content}</p>
        </div>

        <span className="time">{tsHours + ':' + tsMinutes}</span>
      </div>
    </div>
  )
}

export default ChatLine;