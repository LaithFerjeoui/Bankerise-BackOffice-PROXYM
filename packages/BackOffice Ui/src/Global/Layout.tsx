import Sidebar from './Sidebar.tsx';
import Index from './Index.tsx';
const Layout = () => {
  return (
    <div className='flex'>
      <div className='relative z-999'>
        <Sidebar />
      </div>
    
      <Index />
    </div>


  )
}

export default Layout