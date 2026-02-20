import React from 'react'

const Chatlistitem = ()=>{
    return(
        <div className='flex flex-row items-center p-4 border-b cursor-pointer hover:opacity-80 transition-colors'
        style={{borderColor:'var(--border-ui)', backgroundColor:'var(--bg-sidebar)'}}>
              {/* Profile icon div */}
              <div className='w-12 h-12 rounded-full shrink-0'
              style={{backgroundColor:'var(--bg-item-active)'}}>
                
      
              </div>

              {/*The div holding two divs for the Name and the last message */}
      
              
              <div className='flex flex-col flex-1 ml-4 gap-2'>
                {/* The div for holding the contact name */}
                <div className='leading-tight truncate'>
                  <h1 style={{color:'var(--text-primary)'}}>Contact Name</h1>
                </div>
                {/* The div for holding the last chat */}
                <div className='leading-tight truncate'>
                  <p className='text-xs' style={{color:'var(--text-secondary)'}}>
                    This is the last message</p>
                </div>

              </div>
              {/* The div to include both the unread messages count and final message time */}
              <div className='flex flex-col items-center leading-tight text-xs truncate gap-2'>
                <p style={{color:'var(--text-secondary)'}}>12:34 pm</p>
                <div className='text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center'
                style={{backgroundColor:'var(--bubble-sent)', color:'var(--accent-text)'}}>
                      2
                </div>
              </div>
            </div>

    );
}

export default Chatlistitem