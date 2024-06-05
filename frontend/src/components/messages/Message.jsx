import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://cdn2.iconfinder.com/data/icons/avatars-60/5985/4-Writer-512.png" alt="Tailwind css chat bbuble component" />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is upp?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1items-center'>12:42</div>
    </div>
  )
}

export default Message