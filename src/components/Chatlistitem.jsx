import React from 'react'

const Chatlistitem = ()=>{
    return(
        <div className='flex flex-row items-center p-4 border-b h-16 border-slate-800'>
              {/* Profile icon div */}
              <div className='w-12 h-12 rounded-full bg-slate-700 shrink-0'>
                
      
              </div>

              {/*The div holding two divs for the Name and the last message */}
      
              
              <div className='flex flex-col flex-1 ml-4 gap-2'>
                {/* The div for holding the contact name */}
                <div className='leading-tight truncate'>
                  <h1>Contact Name</h1>
                </div>
                {/* The div for holding the last chat */}
                <div className='leading-tight truncate'>
                  <p className='text-xs'>This is the last message</p>
                </div>

              </div>
              {/* The div to include both the unread messages count and final message time */}
              <div className='flex flex-col items-center leading-tight text-xs truncate gap-2'>
                <p>12:34 pm</p>
                <div className='bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center'>
                      2
                </div>
              </div>
            </div>

    );
}

export default Chatlistitem