import "./App.css";
import QRcodeGenerator from "./components/QRcodeGenerator";
import QRcodeScanner from "./components/QRcodeScanner";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hey there!!!</h1>
        <p>What you want to do?</p>
        <Link to="scan">Scan a QR code</Link> <br/>
        <Link to="create">Create a QR code</Link>
      </div>
    ),
  },
  {
    path: "scan",
    element: <QRcodeScanner/>,
  },{
    path: "create",
    element: <QRcodeGenerator/>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
