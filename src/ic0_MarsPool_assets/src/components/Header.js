import React, {Component} from 'react';
class Header extends Component {
    render() {
	    return (
		<div className="row ">
            <header>
            <div className="header_bot">
                <div className="wrapper">
                <div className="logo"><
                    a href="index.html"><img src="logo.png" alt="logo" /></a></div>
                <div className="menu_area">
                    <div id="navigation">
                    <div id="navbtn">menu</div>
                    <ul id="menu-nenu" className="nav-menu">
                        <li><a href="http://dapp.marspool.xyz">HOME</a></li>
                        <li><a href="http://dapp.marspool.xyz">BENEFITS</a></li>
                        <li><a href="http://dapp.marspool.xyz">GALLERY</a></li>
                        <li><a href="http://dapp.marspool.xyz">SEED TOKEN</a></li>
                        <li><a href="http://dapp.marspool.xyz">MY WALLET</a></li>
                        <li><a href="http://dapp.marspool.xyz">LIVE SALE</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </header>            
        </div>  
	     );
    }
}
export default Header;