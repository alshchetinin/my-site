import React from "react"
import { Link } from "gatsby"
import "./header.sass"


class Header extends React.Component {

    render() {
        return (
            <header>
                <nav >
                    <Link className="logo" to="/"> Александр Щетинин</Link>
                    <div className="menu">
                        <Link className="menu__item" to="/page-2/" activeClassName="active">Проекты</Link>
                        <Link className="menu__item" to="/" activeClassName="active">Блог</Link>
                        <Link className="last_post_link" to="/">Принципы работы</Link>
                    </div>
                </nav>
            </header>
        )

    }
}

export default Header