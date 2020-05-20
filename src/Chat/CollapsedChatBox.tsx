import React from 'react';
import ChatCollapsed from '../SvgIcons/ChatCollapsed';

interface Props {
  onClick: () => void
}

function CollapsedChatBox({onClick}: Props) {

  return (
    <div onClick={onClick}>
      <div className="chat_collapsed__outer_wrapper">
        <div className="chat_collapsed__inner_wrapper">
          <div className="chat_collapsed">
            <ChatCollapsed />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollapsedChatBox;