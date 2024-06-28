import PropTypes from 'prop-types'


function NavBar(props) {
    return (
        <div expand="lg" className="bg-body-tertiary">

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.about}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Help</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                           {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, vitae! */}
                           <input type="text" placeholder="search"></input>
                           <button>Search</button>
                        </span>
                    </div>
                </div>
            </nav>
            {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, enim. */}
            {/* <h2> Anantesh Chauhan</h2>
            <p>Doing Experiments</p> */}
        </div>
    );
}

export default NavBar;

NavBar.prototype ={
    title: PropTypes.string.isRequired ,
    about: PropTypes.string ,

}

// NavBar.defaultProps={
//     title: 'Set title here',
//     about: 'About us ',
// }