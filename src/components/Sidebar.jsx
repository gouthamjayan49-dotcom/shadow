import React,{useState} from 'react';
import {SquarePen,ArrowLeft,Search,UserPlus,User,Check,ChevronDown,Phone} from 'lucide-react';
import Chatlistitem from './Chatlistitem';
import Contactslist from './Contactslist';

const Sidebar = ({isSidebarOpen})=>{
  //conditional rendering code
  const[view,setView]=useState('NewContact');
    return(
        <aside
       className={`border-r transition-all duration-300 overflow-hidden flex flex-col
      ${isSidebarOpen ? 'w-100' : 'w-0'}`}
      style={{backgroundColor:'var(--bg-sidebar)', borderColor:'var(--border-ui)'}}
      >
        {view ==='list' && (
          <>
        <header className='h-16 border-b flex flex-row px-6 items-center justify-between text-[#2D1F1A]'
        style={{borderColor:'var(--border-ui)', color:'var(--text-primary)'}}>
          <h1 className='text-3xl '>SHADOW</h1>
          <button onClick={()=>setView('NewChat')} 
          className='p-2 rounded-lg transition-colors hover:opacity-70'>
            <SquarePen size={20} />
          </button>
        </header>
          <div className='flex flex-col flex-1 overflow-hidden w-full h-full overflow-y-auto
            [&::-webkit-scrollbar]:w-1.5
[&::-webkit-scrollbar-track]:bg-transparent
[&::-webkit-scrollbar-thumb]:rounded-full'
style={{
   scrollbarColor: 'var(--scrollbar) transparent'
}}>
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
            <Chatlistitem />
          </div>
          </>
          )}

          {view === 'NewChat' && (
            <>
            <header className='h-45 border-b flex flex-col gap-2'
            style={{backgroundColor:'var(--bg-item-active)', borderColor:'var(--border-ui)'}}>
              <div className='p-3 gap-3 flex flex-row items-center'
              style={{color:'var(--text-primary)'}}>
                <button className='hover:opacity-70 p-2 rounded-full' onClick={()=>setView('list')}>
                  <ArrowLeft size={22} />
                </button>
                <h1>
                  New Chat
                </h1>
              </div>

              <div className='relative w-full flex justify-center items-center'>
                {/* The Icon (Pinned to the left) */}
                  <Search 
                    className='absolute left-7'
                    style={{color:'var(--text-secondary)'}}
                    size={18} 
                  />
  
                {/* The Input Field */}
              <input 
              type="text"
              placeholder="Search name or number..."
              className='w-90 rounded-lg py-2 pl-10 pr-4
                outline-none border border-transparent focus:border-blue-600/50 transition-all text-sm'
                style={{backgroundColor:'var(--bg-item-hover)', color:'var(--text-primary)'}}
              />
            </div>
            <div className='p-3 hover:opacity-70'>
              <button className='flex gap-3 p-2'
              style={{color:'var(--text-primary)'}}>
              <UserPlus size={22} />
              <h1>New Contact</h1>
              </button>
              

            </div>
            </header>
            <div className='flex flex-col flex-1 overflow-hidden w-full h-full overflow-y-auto
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:rounded-full'
            style={{
            scrollbarColor: 'var(--scrollbar) transparent'
            }}>
            
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />
            <Contactslist />

            </div>
            </>

          )}
      {view === 'NewContact' && (
  <div className='flex flex-col h-full' style={{ backgroundColor: 'var(--bg-app)' }}>
    {/* Header */}
    <header className='h-16 border-b flex flex-row px-4 items-center gap-4'
      style={{ backgroundColor: 'var(--bg-app)', borderColor: 'var(--border-ui)' }}>
      <button 
        className='hover:opacity-70 p-2 rounded-full transition-colors' 
        onClick={() => setView('NewChat')}
      >
        <ArrowLeft size={22} style={{ color: 'var(--text-primary)' }} />
      </button>
      <h1 className='text-lg font-semibold' style={{ color: 'var(--text-primary)' }}>
        New Contact
      </h1>
    </header>

    {/* Form Container */}
    <div className='flex-1 p-6 flex flex-col gap-6'>

      {/* Profile Icon Placeholder */}
      <div className="flex justify-center py-4">
        <div className="p-8 rounded-full" style={{ backgroundColor: 'var(--bg-item-hover)' }}>
          <User size={48} style={{ color: 'var(--text-secondary)' }} />
        </div>
      </div>

      {/* Name Inputs */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 border-b pb-2" style={{ borderColor: 'var(--border-ui)' }}>
          <User size={20} style={{ color: 'var(--text-secondary)' }} />
          <input
            type="text"
            placeholder="First Name"
            className="outline-none bg-transparent w-full text-sm"
            style={{ color: 'var(--text-primary)' }}
          />
        </div>
        <div className="flex items-center gap-3 border-b pb-2 ml-8" style={{ borderColor: 'var(--border-ui)' }}>
          <input
            type="text"
            placeholder="Last Name (Optional)"
            className="outline-none bg-transparent w-full text-sm"
            style={{ color: 'var(--text-primary)' }}
          />
        </div>
      </div>

      {/* Phone Number Input */}
      <div className="flex items-center gap-3 border-b pb-2" style={{ borderColor: 'var(--border-ui)' }}>
        <Phone size={20} style={{ color: 'var(--text-secondary)' }} />
        <select
          className="outline-none bg-transparent text-sm pr-1"
          style={{ color: 'var(--text-primary)' }}
        >
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+91">🇮🇳 +91</option>
          <option value="+33">🇫🇷 +33</option>
          <option value="+49">🇩🇪 +49</option>
          <option value="+39">🇮🇹 +39</option>
          <option value="+34">🇪🇸 +34</option>
          <option value="+61">🇦🇺 +61</option>
          <option value="+81">🇯🇵 +81</option>
          <option value="+86">🇨🇳 +86</option>
          <option value="+55">🇧🇷 +55</option>
          <option value="+7">🇷🇺 +7</option>
          <option value="+971">🇦🇪 +971</option>
          <option value="+966">🇸🇦 +966</option>
          <option value="+27">🇿🇦 +27</option>
          <option value="+20">🇪🇬 +20</option>
          <option value="+234">🇳🇬 +234</option>
          <option value="+254">🇰🇪 +254</option>
          <option value="+92">🇵🇰 +92</option>
          <option value="+880">🇧🇩 +880</option>
        </select>
        <div className="w-px h-4" style={{ backgroundColor: 'var(--border-ui)' }} />
        <input
          type="tel"
          placeholder="Phone Number"
          className="outline-none bg-transparent w-full text-sm"
          style={{ color: 'var(--text-primary)' }}
        />
      </div>

      {/* Tick / Save Button */}
      <div className="flex justify-end mt-2">
        <button
          className="p-3 rounded-full transition-opacity hover:opacity-70"
          style={{ backgroundColor: 'var(--bg-item-hover)' }}
          onClick={() => { /* handle save */ }}
        >
          <Check size={22} style={{ color: 'var(--text-primary)' }} />
        </button>
      </div>

    </div>
  </div>
)}
      </aside>
    );
};
export default Sidebar;