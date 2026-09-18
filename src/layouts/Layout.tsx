import { useEffect } from "react"
import Modal from "../components/Modal"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"
import Notification from "../components/Notification"


export default function Layout() {

    const loadFromStorage = useAppStore((state) => state.loadFromStorage)

    useEffect(() => {
        loadFromStorage()
    }, [])

    return (
        <>
            <Header />
            <main className="max-w-[90%] mx-auto py-16">
                <Outlet />
            </main>

            <Modal />
            <Notification />
        </>
    )
}
