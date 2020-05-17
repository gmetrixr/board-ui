import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import ChatBox from '../../src/Chat/ChatBox';
import { ChatMessage } from '../../src/Models';
import '../../src/Chat/index.scss';
import '../../src/scss/index.scss';
import '../../src/scss/_flex_helpers.scss';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';

// import ChatCollapsed from '../../src/SvgIcons/ChatCollapsed';
// import ChatGroup from '../Chat/ChatGroup';

import CollapsedChatBox from '../../src/Chat/CollapsedChatBox';


function ChatController() {
  const [showChat, setShowChat] = useState(false);

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: '124338432961296_1', content: 'Lorem Ipsum is simply dummy text of the printing Ipsum is simply Ipsum is simply dummy text of the printing Ipsum is simply text of the printing Ipsum is simply.', timestamp: 124338432961295, userID: 1, username: 'Shankar' },
    { id: '124338432961296_2', content: 'Lorem Ipsum is simply dummy', timestamp: 124338432961296, userID: 2, username: 'Ratan' },
    { id: '124338432961296_3', content: 'Lorem Ipsum is simply dummy text of the printing Ipsum is simply dummy text of the printing.', timestamp: 124338432961297, userID: 3, username: 'John' },
    { id: '124338432961296_4', content: 'Hey there!', timestamp: 124338432961298, userID: 4, username: 'Elton' },
    { id: '124338432961296_5', content: 'Testing GMetri Chat.', timestamp: 124338432961299, userID: 5, username: 'Arjun' },
    { id: '124338432961296_6', content: 'Lorem Ipsum is simply dummy text of the printing Ipsum is simply dummy text of the printing.', timestamp: 124338432961297, userID: 6, username: 'John' },
    { id: '124338432961296_7', content: 'Hey there!', timestamp: 124338432961298, userID: 7, username: 'Elton' },
    { id: '124338432961296_8', content: 'Testing GMetri Chat.', timestamp: 124338432961299, userID: 8, username: 'Arjun' }
  ]);

  const currentUser: {userID: number, username: string} = {userID: 2, username: 'Ratan'};

  function saveChatMessage(chatMessage: ChatMessage) {
    console.log(chatMessage);
    chatMessages.push(chatMessage);
    setChatMessages([...chatMessages]);
  }

  return (
    <div>
      {
        showChat ?
        <div className="chat_wrapper">
          <ChatBox chatMessages={chatMessages} currentUser={currentUser} saveChatMessage={saveChatMessage} collapseChat={() => setShowChat(false)} />
        </div> :
        <CollapsedChatBox onClick={() => setShowChat(true)} />
      }
    </div>
  )
}

storiesOf('Chat', module).add('Chat', () => <ChatController />);
