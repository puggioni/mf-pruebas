import { Paths } from './paths'
import Health from '../components/Health/Health'
import { AppRoute } from '../ts/types'

const routes: AppRoute[] = [
  {
    path: Paths.health.index,
    element: <Health />,
  },
]

export default routes
