import './App.css';
import {Route,Routes} from 'react-router-dom'
import {Provider } from 'react-redux';
import {store}from'./redux/store'
import {Home} from './components/home';
import {Detail} from './components/detail';
import './App.css';
function App() {
  return (      
   <div className="App">
        <Provider store= {store}>
         <Routes>
         <Route exact path="/" element={<Home/>} > </Route> 
                <Route exact path="/home" element={<Home/>} > </Route> 
                <Route path="/Detail/:id" element={<Detail/>} > </Route>
                <Route path="*" element={<Home/>} > </Route>
      </Routes>
    </Provider>
     </div>   
     );
}
export default App;