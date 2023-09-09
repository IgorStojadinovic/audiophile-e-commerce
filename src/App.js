import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Headphones from './pages/headphones/Headphones';
import Speakers from './pages/speakers/Speakers';
import Earphones from './pages/earphones/Earphones';
import XX99MARKII from './pages/products/XX99MARKII';
import XX99MARKI from './pages/products/XX99MARKI';
import XX59 from './pages/products/XX59';
import ZX9SPAKER from './pages/products/ZX9SPAKER';
import ZX7SPEAKER from './pages/products/ZX7SPEAKER';
import YX1 from './pages/products/YX1';
import { Layout } from './components/Layout';
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { store} from "./store/store";
import Checkout from './components/shared/Checkout';


const App = () => {
  let persistor = persistStore(store)
  return (
    <Provider store={store}>
  
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              
              <Route path="headphones" >
                <Route index element={<Headphones/>}/>
                <Route path="headphone-xx99-mark-2" element={<XX99MARKII/>}/>
                <Route path="headphone-xx99-mark-1" element={<XX99MARKI/>}/>
                <Route path="headphone-xx59" element={<XX59/>}/>
              </Route>

              <Route path="speakers" >
                <Route index element={<Speakers/>}/>
                <Route path="speaker-zx9" element={<ZX9SPAKER/>}/>
                <Route path="speaker-zx7" element={<ZX7SPEAKER/>}/>
              </Route>

              <Route path="earphones">
                <Route index element={<Earphones/>}/>
                <Route path="earphone-yx1" element={<YX1/>}/>
              </Route>
             
              
              <Route path="checkout" element={<Checkout/>}/>
            </Route>
          </Routes>
        </Router>
    </Provider>
  );
};

export default App;
