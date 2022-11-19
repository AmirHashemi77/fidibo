import { React, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import Home from './page/Home';
import AccordionMenu from './component/Accordion/AccordionMenu';
import BookDetaile from './page/BookDetaile';
import BookList from './page/BookList';
import { useSelector, useDispatch } from 'react-redux';
import LoginAndSignupContainer from './container/LoginAndSignupContainer';
import Basket from './page/Basket';
import Library from './page/Library';
import MyBooks from './component/LibraryPage/MyBooks/MyBooks';
import RecycleBooks from './component/LibraryPage/RecycleBooks/RecycleBooks';
import FavoriteBooks from './component/LibraryPage/FavoriteBooks/FavoriteBooks';
import SampleBooks from './component/LibraryPage/SampleBooks/SampleBooks';
import { fetchBooks } from './store/action/booksAction';
import AppPage from './page/AppPage';
import NotFound from './page/NotFound';

function App() {
  const showLogin= useSelector((state)=>state.ui.showLogin)
  const dispatch=useDispatch()
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  useEffect(()=>{
     dispatch(fetchBooks())
  },[dispatch])
  
  return (
    <>
     <AccordionMenu />
     {showLogin && <LoginAndSignupContainer/>}
    
    <div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book/:bookdetaile' element={<BookDetaile/>} />
      <Route path='/category/:categoryname' element={<BookList/>} />
      <Route path='/category/:categoryname/:subsetcategory' element={<BookList/>} />
      <Route path='/basket' element={<Basket/>} />
      <Route path='/app' element={<AppPage/>} />
      <Route path='/library' element={<Library/>} >
                <Route path='' element={<MyBooks/>} />
                <Route path='recycle' element={<RecycleBooks/>} />
                <Route path='favorite' element={<FavoriteBooks/>} />
                <Route path='sample' element={<SampleBooks/>} />
      </Route>
      <Route path='/category' element={<Navigate to='/' />} />
      <Route path='/book' element={<Navigate to='/' />} />
      <Route path='/notfound' element={<NotFound/>}/>
      <Route path='*' element={<Navigate to="/notfound" replace />}/>
    </Routes>
    </div>
    
    
    </>
  )
}

export default App;
