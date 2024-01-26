import AuthLayout from './_Auth/AuthLayout';
import SigninForm from './_Auth/forms/SigninForm';
import SignupForm from './_Auth/forms/SignupForm';
import { Home  } from './_Route/Pages';
import RootLayout from './_Route/RootLayout';
import './globals.css';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <main className="flex h-screen">
     
     <Routes>
        {/* Public route (log in)*/}
     <Route element={<AuthLayout />}>
      <Route path="/sign-in" element={<SigninForm />}/> 
      <Route path="/sign-up" element={<SignupForm />}/>
      </Route> 
      
   {/* Public route (log in)*/}
   <Route element={<RootLayout />}>
     <Route index element={<Home />}/>
    </Route>
</Routes>
</main>     
  )
}

export default App
