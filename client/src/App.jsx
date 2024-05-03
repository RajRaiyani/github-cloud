import { Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/home/HomeLayout";
import FileList from "./pages/storage/FileList";

function App() {

  return (
    <Routes>
      <Route path="ui" element={<HomeLayout />}>
        <Route path="" element={<FileList />} />
      </Route>
    </Routes>
  )
}

export default App
