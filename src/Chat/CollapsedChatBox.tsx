import React from 'react';
import ChatCollapsed from '../SvgIcons/ChatCollapsed';

interface Props {
  onClick: () => void
}

function CollapsedChatBox({onClick}: Props) {

  return (
    <div style={{position: 'absolute',
      bottom: '15px',
      right: '15px'}} onClick={onClick}>
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