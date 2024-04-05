import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUpContainer from "./pages/SignUp/SignUpContainer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <SignUpContainer />
            }
        ]
    }
])

export default router