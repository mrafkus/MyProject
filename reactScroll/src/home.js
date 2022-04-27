import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Card from './card';
import Kawaki from './img/kawaki.png';
import Naruto from './img/naruto.png';
import Sasuke from './img/sasuke.png';
import Mitsuki from './img/mitsuki.png';

const Home = ()=>{
    useEffect(()=>{
        Aos.init();
    }, [])
    return(
        <section className='py-4 py-lg-5 container'>
            <div className='row'>
                <Card aos="fade-up" aos_offset="100" img={Naruto} title="Uzumaki Naruto" desc="desc"/>
                <Card aos="fade-up" aos_offset="100" img={Sasuke} title="Uchiha Sasuke" desc="desc"/>
                <Card aos="fade-up" aos_offset="100" img={Kawaki} title="Kawaki" desc="desc"/>
                <Card aos="fade-up" aos_offset="100" img={Mitsuki} title="Mitsuki" desc="desc"/>
            </div>
        </section>
    )
}

export default Home;