import React from 'react';
import ChatLine from './ChatLine';
import { ChatMessage, CurrentUser } from '../Models';

interface Props {
  chatMessages: ChatMessage[],
  currentUser: CurrentUser
}

function ChatGroup({chatMessages, currentUser}: Props) {

  return (
    <div className="chat_group">
      {
        chatMessages.map(message => <ChatLine key={message.id} currentUser={currentUser} message={message} />)
      }
    </div>
  )
}

export default ChatGroup;