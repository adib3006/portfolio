import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/route';

function App() {
  return (
    <div className='lg:px-10'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
