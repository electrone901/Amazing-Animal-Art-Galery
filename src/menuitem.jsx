import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
require('./index.css');
import data from './data';
import 'bootstrap/dist/css/bootstrap.css';
import './gallery.css';
import {Details} from './detailmodal.jsx'
import {Button, Modal} from 'react-bootstrap';

var MenuItem = React.createClass({
    render: function() {
    return (
      
      
         <div className="gallery">{/*styles img gallery*/}
            <div className="itemGallery">
              <li className="listGallery"><h4 className="title">{this.props.info.title}</h4><br/> 
                <img src={require(this.props.info.img)}/><br/>
                {this.props.info.price}


                {/*<Button
                  bsStyle="info"
                  bsSize="xsmall"
                  onClick={this.props.children}>
                  Click for more!
                </Button>*/}
              </li>
            </div>   
         </div>
    )
  }
})

export default MenuItem;