import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from '../../routes/routes'

export default () => {
  return (
    <div className='app__content'>
      <div className='content'>
        <h1>HELLO MF SEED</h1>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => {
              { console.log(route) }
              return <Route key={route.path} {...route} />
            })}
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  )
}
