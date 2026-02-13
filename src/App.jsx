
import {Menu,X,Search,Phone,Video,MoreVertical,Send,Paperclip,SquarePen} from 'lucide-react';
import {useState} from 'react'
import Sidebar from './components/Sidebar';//new line
import Header from './components/Header';
import Chatarea from './components/Chatarea';
const App = ()=>{
  const[isSidebarOpen,setIsSidebarOpen]=useState(true)
  return(
    <div className='flex h-screen w-screen text-white bg-slate-950 overflow-hidden'>
      <aside className='border-r overflow-hidden w-20 flex flex-col h-screen border-slate-800'>
        

      </aside>

      
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <main className='flex-1 flex flex-col bg-slate-950 relative'>
        <Header isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} />
        <Chatarea />
      </main>

    </div>

  )
  
}
export default App