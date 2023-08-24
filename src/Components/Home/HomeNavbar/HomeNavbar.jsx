// import './Navbar.css';
// import sideNavbar from './sideNavbar';
import '../HomeNavbar/sideNavbar'

export default function HomeNavbar() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" >
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Bangladesh Bank </a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="home nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="">ATM</a>
        </li>
        
        
      </ul>
     
      
    </div>
  </div>
  <sideNavbar/>
</nav>
    </div>
  )
}
