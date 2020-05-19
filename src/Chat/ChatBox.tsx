import React from 'react';
import ChatGroup from './ChatGroup';
import ChatInput from './ChatInput';
import { ChatMessage, CurrentUser } from '../Models';

import DownArrow from '../SvgIcons/DownArrow';

interface Props {
  chatMessages: ChatMessage[],
  currentUser: CurrentUser
  saveChatMessage: (message: ChatMessage) => void,
  collapseChat: () => void,
  requestHistory: () => void
}

function ChatBox({chatMessages, currentUser, saveChatMessage, collapseChat, requestHistory}: Props) {

  return (
    <div className="chat_box">
      <div className="down_arrow_wrapper flex" onClick={collapseChat}>
        <DownArrow />
      </div>

      <ChatGroup chatMessages={chatMessages} requestHistory={requestHistory} currentUser={currentUser} />
      <ChatInput saveChatMessage={saveChatMessage} currentUser={currentUser} />
    </div>
  )
}

export default ChatBox;