import { Link } from "react-router-dom"
import { ROUTES } from "../../constants"

const Header = () => {
  return (
    <header className="py-6">
      <nav>
        <ul className="flex items-center justify-center gap-5">
          <li>
            <Link to={ROUTES.HOME} className="uppercase">All Meals</Link>
          </li>
          <li>
            <Link to={ROUTES.FAVOURITES} className="uppercase">Favourite Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
