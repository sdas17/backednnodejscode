import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from '../src/pages/Header';
import Footer from '../src/pages/Footer';
import Landingpage from './pages/Landingpage';
import MYNotes from './pages/MYNotes';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
 /** root routes */
const router = createBrowserRouter([
  {
      path : '/',
      element : <Landingpage/>
  },
  {
    path:"/MYnotes",
    element:<MYNotes/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
 
])
  return (
    <>
      <Header />
      <main style={{ minHeight: "92vh" }}>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
 
  );
}

export default App;
