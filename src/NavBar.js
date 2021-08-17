import React from "react";

class NavBar extends React.Component {
    render () {
        return (
            <div>
                <header className="py-3 mb-4">
                    <div className="container d-flex flex-wrap navbar-brand" style={{'font-family': 'Syne Mono'}}>
                        <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none justify-content-center">
                            {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                            <i class="fa fa-terminal" aria-hidden="true"></i>
                            <span class="fs-2 navbar-brand text-monospace">thinesh</span>
                        </a>
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0">
                            <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
                        </form>
                    </div>
                </header>
                <nav class="py-2 bg-light border-top border-bottom  sticky-top justify-content-end ">
                    <div class="container d-flex flex-wrap justify-content-center">
                    <ul class="nav">
                        <li class="nav-item"><a href="#" class="nav-link link-dark px-2 active" aria-current="page">Blog</a></li>
                        <li class="nav-item ml-auto"><a href="#" class="nav-link link-dark px-2">Books</a></li>
                        <li class="nav-item ml-auto"><a href="#" class="nav-link link-dark px-2">Works</a></li>
                        {/* <li class="nav-item ml-auto"><a href="#" class="nav-link link-dark px-2">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-dark px-2">About</a></li> */}
                        <li class="nav-item ml-auto"><a href="#" class="nav-link link-dark px-2">Hire Me</a></li>
                        <li class="nav-item ml-auto"><a href="#" class="nav-link link-dark px-2">About Me</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }

}

export default NavBar;
