import { HomePage,AlbumPage,AlbumsPage, SongPage } from ".."
import { Route,Routes } from "react-router-dom"
export const AppRouterD = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/albums' element={<AlbumsPage/>}/>
      <Route path='/albums/:name' element={<AlbumPage/>}/>
      <Route path='/albums/:name/:nameSong' element={<SongPage/>}/>
    </Routes>
  )
}
