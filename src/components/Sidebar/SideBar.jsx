import React, { useContext, useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { Contex } from '../../contex/Contex'
const SideBar = () => {

  const [extended, setExtended] = useState(false)
  const { onSent, previousPrompts, setRecentPrompt, newChat } = useContext(Contex)

  const handleExtension = () => {
    setExtended(prev => !prev)
  }

  const loadPrompt = async (prompt = undefined) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <img className='menu' src={assets.menu_icon} alt='' onClick={handleExtension} />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? <div className="recent">
          <p className="recent-title">Recent</p>
          {previousPrompts.map((item) => {
            return (
              <div onClick={() => loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 18)} ...</p>
              </div>
            )
          })}

        </div> : null}

      </div>
      <div className='buttom'>
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>

      </div>

    </div>
  )
}

export default SideBar
