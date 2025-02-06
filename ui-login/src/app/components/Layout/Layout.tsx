import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from '../../routes/routes'

export default () => {
  return (
    <div className='app__content'>
      <div className='content'>
        <h2>LOGIN</h2>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => {
              { console.log('MY ROUTES', route) }
              return < Route key={route.path} {...route} />
            })}
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  )
}
