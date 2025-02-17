import { Paths } from './paths'
import Health from '../components/Health/Health'
import { AppRoute } from '../ts/types'

const routes: AppRoute[] = [
  {
    path: Paths.seed.health,
    element: <Health />,
  },
]

export default routes
