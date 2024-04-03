import { Outlet } from "react-router-dom";
import DemoComponent from "./DemoComponent";

function App() {
    return (
        <div>
            {/* <DemoComponent /> */}
            <Outlet />
        </div>
    );
}

export default App;
