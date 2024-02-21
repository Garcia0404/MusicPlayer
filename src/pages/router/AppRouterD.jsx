import { HomePage,AlbumPage,AlbumsPage } from ".."
import { Route,Routes } from "react-router-dom"
export const AppRouterD = () => {

  return (
    <Routes>
      <Route path='/*' element={<HomePage/>}></Route>
      <Route path='/albums' element={<AlbumsPage/>}></Route>
      <Route path='/albums/:name' element={<AlbumPage/>}></Route>
    </Routes>
  )
}
