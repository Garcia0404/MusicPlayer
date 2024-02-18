import { HomePage,AlbumPage } from ".."
import { Route,Routes } from "react-router-dom"
export const AppRouterD = () => {

  return (
    <Routes>
      <Route path='/*' element={<HomePage/>}></Route>
      <Route path='/:name' element={<AlbumPage/>}></Route>
    </Routes>
  )
}
