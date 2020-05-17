import React, { useEffect } from 'react';
import ChatLine from './ChatLine';
import { ChatMessage, CurrentUser } from '../Models';

interface Props {
  chatMessages: ChatMessage[],
  currentUser: CurrentUser
}

function ChatGroup({chatMessages, currentUser}: Props) {
  useEffect(() => {
    var chatGroup: HTMLElement | null = document.getElementById('chat_group');

    if(chatGroup) {
      chatGroup.scrollBy(0, (chatGroup?.scrollHeight - chatGroup?.clientHeight));
    }
  });

  return (
    <div className="chat_group" id="chat_group">
      {
        chatMessages.map(message => <ChatLine key={message.id} currentUser={currentUser} message={message} />)
      }
    </div>
  )
}

export default ChatGroup;