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
import AppPage from './page/AppPage';
import NotFound from './page/NotFound';
import { fetchBasketData, postBasketData } from './store/action/basketHandlerAction';
import { fetchLibraryData, postLibraryData } from './store/action/libraryHandlerAction';

function App() {
  const showLogin= useSelector((state)=>state.ui.showLogin)
  const cartData=useSelector((state)=>state.basket)
  const basketChanged=useSelector((state)=>state.basket.changed)
  const libraryChanged=useSelector((state)=>state.library.libraryChange)
  const libraryData=useSelector((state)=>state.library)
  const currentUser=useSelector((state)=>state.auth.activeUser)
  const authed=useSelector((state)=>state.auth.authed)
  const dispatch=useDispatch()
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


 

  useEffect(()=>{
    if(authed && basketChanged){
      const basketData={
        basketItems:cartData.basketItems,
        numberOfProduct:cartData.numberOfProduct,
        totalPrice:cartData.totalPrice,
      }
      dispatch(postBasketData(basketData,currentUser.id))
      
    }
  },[cartData,currentUser.id,dispatch,authed,basketChanged])

  useEffect(()=>{
    if(authed){
      dispatch(fetchBasketData(currentUser.id))
    }
  },[currentUser.id,dispatch,authed])
  useEffect(()=>{
    if(authed && libraryChanged){
      const library={
        myBooks:libraryData.myBooks,
        recycleBooks:libraryData.recycleBooks,
        favoriteBooks:libraryData.favoriteBooks,
        sampleBooks:libraryData.sampleBooks,
      }
      dispatch(postLibraryData(library,currentUser.id))
    }
  },[libraryData,dispatch,authed,currentUser.id,libraryChanged])
  useEffect(()=>{
    if(authed){
      dispatch(fetchLibraryData(currentUser.id))
    }
  },[authed,dispatch,currentUser.id])
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
