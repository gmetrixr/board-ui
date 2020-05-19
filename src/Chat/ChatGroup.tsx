import React, { useEffect, useRef } from 'react';
import ChatLine from './ChatLine';
import { ChatMessage, CurrentUser } from '../Models';

interface Props {
  chatMessages: ChatMessage[],
  currentUser: CurrentUser,
  requestHistory: () => void
}

function ChatGroup({chatMessages, currentUser, requestHistory}: Props) {
  let lastScrollTop = useRef<number>(0);
  const requestedForHistory = useRef<boolean>(false);

  useEffect(() => {
    const chatGroup = document.getElementById('chat_group') as HTMLDivElement;
    
    if(chatGroup) {
      chatGroup.addEventListener('scroll', () => {
        let scrollTop = chatGroup.scrollTop;

        if(chatGroup.scrollTop < 10 && !requestedForHistory.current && lastScrollTop.current > scrollTop) {
          requestHistory();
          // setTimeout(() => {       keeping this code here for
          //   requestedForHistory.current = false;
          // }, 100);
          requestedForHistory.current = true;
        }
        lastScrollTop.current = scrollTop;
      });
    }
  }, []);

  useEffect(() => {
    // already requested for history
    if(requestedForHistory.current) {
      requestedForHistory.current = false;
    } else {
      // scroll to bottom of ChatGroup
      let chatGroup = document.getElementById('chat_group') as HTMLDivElement;
      if(chatGroup && !requestedForHistory.current) {
        chatGroup.scrollBy(0, (chatGroup?.scrollHeight - chatGroup?.clientHeight));
      } 
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