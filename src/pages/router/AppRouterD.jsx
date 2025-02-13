import { AlbumPage,AlbumsPage, SongPage } from ".."
import { Navigate, Route,Routes } from "react-router-dom"
export const AppRouterD = () => {

  return (
    <Routes>
      <Route path='/albums' element={<AlbumsPage/>}/>
      <Route path='/albums/:name' element={<AlbumPage/>}/>
      <Route path='/albums/:name/:nameSong' element={<SongPage/>}/>
      <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
