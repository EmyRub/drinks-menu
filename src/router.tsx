import Layout from "./layouts/Layout"
import { lazy, Suspense } from "react"
import GenerateAI from "./views/GenerateAI"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const IndexPage = lazy(() => import('./views/IndexPage'))
const FavoritesPage = lazy(() => import('./views/FavoritesPage'))

export default function AppRouter() {
    //Layout es un componente que contiene el Header, el Outlet y los componentes Modal y Notification. El Outlet es donde se renderizan las rutas hijas.
    return (
        <BrowserRouter basename="/drinks-menu">
            <Routes>
              
                <Route element={<Layout />} >

                    <Route path="/" element={
                        <Suspense fallback='Cargando...'>
                            <IndexPage />
                        </Suspense>
                    } index />

                    <Route path="/favoritos" element={
                        <Suspense fallback="Cargando...">
                            <FavoritesPage />
                        </Suspense>
                    } />

                    <Route path="/generate" element={
                        <Suspense fallback="Cargando...">
                            <GenerateAI />
                        </Suspense>
                    } />

                </Route>

            </Routes>
        </BrowserRouter>
    )
}
