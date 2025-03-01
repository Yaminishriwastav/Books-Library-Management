import { createRoot } from 'react-dom/client'
import { Provider as ChakraProvider} from "@/components/ui/provider"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import store from './redux/store'


createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
    </Provider>
   
  
)
