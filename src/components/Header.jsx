import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <header className='h-16 border-b flex flex-row items-center px-6 gap-4'
        style={{backgroundColor:'var(--bg-app)', borderColor:'var(--border-ui)'}}>
            <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className='p-2 hover:opacity-70 rounded-lg transition-colors'
                style={{color:'var(--text-primary)'}}
            >
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="font-medium text-lg" style={{color:'var(--text-primary)'}}>Shadow Chat</h1>
        </header>
    );
};

export default Header;