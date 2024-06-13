import { GlobalStyle } from './GlobalStyle';

import {useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './AppLayout/AppLayout';
import { useAuth } from 'redux/hook/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute'; 
import { PrivateRoute } from './PrivateRoute';

import { lazy, Suspense  } from 'react';
const Main = lazy(()=> import('Pages/Main/Main'));
const Home = lazy(()=> import('Pages/Home/Home'));
const Reistr = lazy(()=> import('Pages/Registr/Registr'));
const Login = lazy(()=> import ('Pages/Login/Login'));
const News = lazy(()=> import ('Pages/News/News'));
const Notices = lazy(()=> import ('Pages/Notices/Notices'));
const AddPet = lazy(()=> import ('Pages/AddPet/AddPet'));
const ContactsPage = lazy(()=> import ('Pages/ContactsPage/ContactsPage'));


    export const App =()=> {
      
      const dispatch = useDispatch();

      const { isRefreshing } = useAuth();
    
      useEffect(() => {
        dispatch(refreshUser());
    
      }, [dispatch]);
    
      return isRefreshing ? (
    <p>Оновлення користувача...</p>
  ) : (
<div>
<Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path = "/" element = {<AppLayout/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="register" element = { <RestrictedRoute redirectTo="/login" component={<Reistr />} />}/>
              <Route path = "login" element ={<RestrictedRoute redirectTo="/contacts" component={<Login/>} />}/>
              <Route path = "contacts" element ={ <PrivateRoute redirectTo="/login" component={<ContactsPage />} />}/>
              <Route path="news" element={<News/>}/>
              <Route path="notices" element={<Notices/>}/>
              <Route path="add-pet" element={<AddPet/>}/>
              <Route path="*" element={<Home/>} />
            </Route>
          </Routes>
          </Suspense>

     <GlobalStyle/>
</div>
  )

    };
    
