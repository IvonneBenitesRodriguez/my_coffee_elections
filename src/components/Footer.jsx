import React from 'react';
import github from '../assets/github.png';
import google from '../assets/google.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='bg-white' style={{marginTop:'32px'}}>
            <ul className='flex justify-center' style={{gap:'10px'}}>
                <Link to="#"><img src={github} style={{width:'30px', backgroundColor: 'white'}} alt='Github'/></Link>
                <Link to="#"><img src={google} style={{width:'30px'}} alt='Google'/></Link>
                <Link to="#"><img src={instagram} style={{width:'30px'}} alt='Instagram'/></Link>
                <Link to="#"><img src={linkedin} style={{width:'30px'}} alt='linkedin'/></Link>
                <Link to="#"><img src={facebook} style={{width:'30px'}} alt='facebook'/></Link>
                <Link to="#"><img src={twitter} style={{width:'30px'}} alt='twitter'/></Link>
            </ul>
            <p className="block text-gray-600 text-center mt-2" style={{color:'black'}}>© 2024 IvonneBenitesRodriguez. All rights reserved.</p>
        </div>
    );
}

export default Footer;