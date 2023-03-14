import { Passport } from "./components/Passport"
import { createRoot } from "react-dom/client"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <div>
        <NavBar />
        <Passport />
        </div>
    </BrowserRouter>
)