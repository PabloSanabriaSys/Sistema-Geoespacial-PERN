import Init from './pages/Init.jsx';
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from './contexts/Auth/AuthProvider.jsx';
import PrivateRoute from './pages/PrivateRoute.jsx';
import Home from './pages/Home.jsx';
import ListClient from './pages/Clients/ListClient.jsx';
import Page404 from './pages/Page404.jsx';
import UbicationClient from './pages/Clients/UbicationClient.jsx';
import Setting from './pages/Setting.jsx';
import HomeClient from './pages/pagesUserClient/HomeClient.jsx';
import ProductsClient from './pages/pagesUserClient/ProductsClient.jsx';
import ContactUser from './pages/pagesUserClient/ContactUser.jsx';
import AboutUs from './pages/pagesUserClient/AboutUs.jsx';
import InitClient from './pages/pagesUserClient/InitClient.jsx';
import PrivateRouteClient from './pages/PrivateRouteClient.jsx';
import UbicationClientMunicipios from './pages/Clients/UbicationClientMunicipios.jsx';
import UbicationClientCantones from './pages/Clients/UbicationClientCantones.jsx';
import UbicationClientManzanos from './pages/Clients/UbicationClientManzanos.jsx';
import UbicationClientOTBS from './pages/Clients/UbicationClientOTBs.jsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <Page404 />
  },
  {
    path: "/register",
    element: <RegisterUser />,
  },
  {
    path: "/",
    element: <PrivateRoute />,
    errorElement: <Page404 />,
    children: [
      {
        path: "",
        element: <Init />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "clientes",
            element: <ListClient />,
          },
          {
            path: "clientes/mapa",
            element: <UbicationClient />,
          },
          {
            path: "clientes/mapa/municipios",
            element: <UbicationClientMunicipios />,
          },
          {
            path: "clientes/mapa/cantones",
            element: <UbicationClientCantones />,
          },
          {
            path: "clientes/mapa/manzanos",
            element: <UbicationClientManzanos />,
          },
          {
            path: "clientes/mapa/otbs",
            element: <UbicationClientOTBS />,
          },
          {
            path: "Configuraciones",
            element: <Setting />,
          },
        ]
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRouteClient />,
    errorElement: <Page404 />,
    children: [
      {
        path: "VistaCliente",
        element: < InitClient />,
        children: [
          {
            path: "",
            element: <HomeClient />,
          },
          {
            path: "productos",
            element: <ProductsClient />,
          },
          {
            path: "contacto",
            element: <ContactUser />,
          },
          {
            path: "acerca-de",
            element: <AboutUs />,
          },
        ]
      },
    ],
  },


]);
function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
