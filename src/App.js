
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './compontets/Home';
import Login from './compontets/Login';
import Register from './compontets/Register';
import PrivetRoute from './route/PrivetRoute';
import Order from './compontets/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/order",
          element:<PrivetRoute><Order></Order></PrivetRoute>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
