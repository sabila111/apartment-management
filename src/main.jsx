import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
 <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
   </QueryClientProvider>
 </AuthProvider>
)
