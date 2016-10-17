//I ADDED LOGIN

import React from 'react';
import './login.css'
import {Link} from 'react-router';

 {/*GALLERY COMPONENT & SIDEBAR*/}
var Login = React.createClass({
  
    render() {
    return (
      <div className="gallery">
      
          {/*SIDEBAR*/}  
	        <table className ="table-bordered">
	          <thead>
	            <tr>
	              <th>Store Departments</th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr>
	              <td>Categories</td>
	            </tr>
	            <tr>
	              <td>
	              	<Link to="/" className="glyphicon glyphicon-fire">  Eerie </Link>
	              </td>
	            </tr>
	            <tr>
	            	<Link to="/" className="glyphicon glyphicon-hand-right">  Funny </Link>
	            </tr>
	             <tr>
	               <td>
	             	<Link to="/" className="glyphicon glyphicon-gift">  Weird </Link>
	               </td>
	            </tr>
	            <tr>
	              <td>
	             	<Link to="t" className="glyphicon glyphicon-gift">  T </Link>
	               </td>
	            </tr>
	    
	             <tr>
	               <td>
	             	<Link to="Search" className="glyphicon glyphicon-gift"> Search </Link>
	               </td>
	            </tr>
	            <tr>
	              <td>Funny</td> 
	            </tr>
	          </tbody>
	        </table>

	        {/*LOGIN FORM*/} 
		    <div className="log">
		   {/* <p>Register</p>*/} 
		        <div className="card">
		            <img  src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
		            <form>
		                <input type="email" placeholder="Email address"/>
		                <input type="password" placeholder="Password" required/>
		                <div id="remember" className="checkbox">
		                    <label>
		                        <input type="checkbox"/> Remember me
		                    </label>
		                </div>
		                <button className="btn-success" type="submit">Sign in</button>
		            </form>

		            <a href="#"> Forgot the password? </a>
		        </div>
		    </div>


      </div>
      
    )
  }
})

export default Login;

