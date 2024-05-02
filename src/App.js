import "./App.css"
import Header from "./Components/Header";
import Body from "./Components/Body";
import store from "./Utils/store"
import { Provider } from "react-redux" 
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from "./Components/MainContainer"
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([{
  path:'/',
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>,
    },
    {
      path: "/watch",
      element: <WatchPage/>,
    }
]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <RouterProvider router={appRouter}/>
        {
        /**
         * Header
         * Side bar
         *  - Menuitems
         * Main Container
         *  -  Buttons list
         *  - Vedio container
         *    - vedios card 
       */
      }
      </div>
    </Provider>
  );
}

export default App;
