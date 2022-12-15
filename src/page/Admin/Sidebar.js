import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <>
     <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Ecommerce Website</h3>
            </div>

            <ul className="list-unstyled components">
               
                <li className="active">
                    <Link to="/admin/dashboard">Dashboard</Link>
                    <Link to="#" data-bs-toggle="collapse" data-bs-target="#categorySubmenu" aria-expanded="false"
                        className="dropdown-toggle">Category</Link>
                    <ul className=" list-unstyled" id="categorySubmenu">
                        <li>
                            <Link to="/admin/dashboard/addcategory">Add Category</Link>
                        </li>
                        <li>
                            <Link to="#">List Category</Link>
                        </li>
                       

                    </ul>
                </li>
                <li>

                    <Link to="#"  data-bs-toggle="collapse" data-bs-target="#usersSubmenu" aria-expanded="false"
                        className="dropdown-toggle">Users</Link>
                    <ul className=" list-unstyled" id="usersSubmenu">
                        <li>
                            <Link to="#">List Users</Link>
                        </li>
                
                    </ul>
                </li>
                <li>
                    <Link to="#" data-bs-toggle="collapse" data-bs-target="#productSubmenu" aria-expanded="false"
                        className="dropdown-toggle">Products</Link>
                    <ul className="collapse list-unstyled" id="productSubmenu">
                        <li>
                            <Link to="/admin/dashboard/addproduct">Add Products</Link>
                        </li>
                        <li>
                            <Link to="#">List Product</Link>
                        </li>
                        
                    </ul>
                </li>
                <li>
                    <Link to="#orderSubmenu" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false"
                        className="dropdown-toggle">Orders</Link>
                    <ul className=" list-unstyled"  id="collapseWidthExample">
                        <li>
                            <Link to="#">Order Details</Link>
                        </li>
                        <li>
                            <Link to="#">List Orders</Link>
                        </li>
                        
                    </ul>
                </li>

            </ul>

            <button className='btb btn-danger m-3'> Signout</button>
        </nav>

    </>
  )
}

export default Sidebar