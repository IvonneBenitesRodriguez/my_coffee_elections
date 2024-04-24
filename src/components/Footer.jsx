import React from 'react';
import github from '../assets/github.png';
import google from '../assets/google.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';

function Footer() {
    return (
        <div className='bg-white' style={{marginTop:'32px'}}>
            <ul className='flex justify-center' style={{gap:'10px'}}>
                <li><a href="#"><img src={github} style={{width:'30px', backgroundColor: 'white'}} alt='Github'/></a></li>
                <li><a href="#"><img src={google} style={{width:'30px'}} alt='Google'/></a></li>
                <li><a href="#"><img src={instagram} style={{width:'30px'}} alt='Instagram'/></a></li>
                <li><a href="#"><img src={linkedin} style={{width:'30px'}} alt='linkedin'/></a></li>
                <li><a href="#"><img src={facebook} style={{width:'30px'}} alt='facebook'/></a></li>
                <li><a href="#"><img src={twitter} style={{width:'30px'}} alt='twitter'/></a></li>
            </ul>
            <p className="block text-gray-600 text-center mt-2" style={{color:'black'}}>© 2024 IvonneBenitesRodriguez. All rights reserved.</p>
        </div>
    );
}

export default Footer;