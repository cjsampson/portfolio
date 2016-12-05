import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import '../../../sass/app.sass';


class App extends Component {
    render(){
        return(
            <div className="someclass">
                <Header />
               
               <div className="section main-section">                
                    
                    {this.props.children}
                    
                </div>

                <Footer />
            </div>
        );
    }
}


export default App;