'use client';
import styles from './css/homepage.module.css'
import { EnvelopeIcon, MagnifyingGlassIcon, PhoneIcon } from '@heroicons/react/16/solid';
import {ShoppingCartIcon} from '@heroicons/react/16/solid';
import { UserIcon } from '@heroicons/react/16/solid';
import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';
import { HomeIcon } from '@heroicons/react/16/solid';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { IdentificationIcon } from '@heroicons/react/16/solid';
import { PhoneArrowDownLeftIcon } from '@heroicons/react/16/solid';
import './css/homepage.module.css';
import { CSSProperties, useEffect, useState } from 'react';
import {XCircleIcon} from '@heroicons/react/16/solid';
import ElevatedButton from './components/button';
//import { HeartIcon } from '@heroicons/react/16/solid';
import Card from './components/card';
import FlexButton from './components/clickable';
//import { Twitter } from '@mui/icons-material';
//import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';





const HomePage:React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  //const [heart, toggleHeart] = useState<string>('fill');
  const sideBarStyle:CSSProperties = {
    left: isClicked ? '0' : '-400px',
    transition:'0.3s ease-in-out'

  }
  const [hearts, setHearts] = useState<{ [key: string]: string }>({
    'first': 'outline',
    'second': 'outline',
    'third': 'outline',
    'fourth': 'outline',
  });

  // Function to handle heart toggle for individual products
  const handleHeartClick = (name: string) => {
    setHearts((prevHearts) => ({
      ...prevHearts,
      [name]: prevHearts[name] === 'fill' ? 'outline' : 'fill',
    }));
  };
  useEffect(() => {},[isClicked]);
  return(
    <div>
      <div className='overflow-x-hidden'>
        {/* Start from here */}
        <header className={styles.header}>
          <Bars3BottomLeftIcon className={styles.bars} onClick={()=> {
            setIsClicked(prev => !prev);
          }}/>
        <img className={styles.logo} src='/Fodpac/Fodpac/logo.jpg'></img>
        <div className={styles.navigation}>
          <p className='cursor-pointer hover:text-green-600'>Home</p>
          <p className='cursor-pointer hover:text-green-600'>About us</p>
          <p className='cursor-pointer hover:text-green-600'>Our Vision</p>
          <p className='cursor-pointer hover:text-green-600'>Contact</p>
        </div>
        <div className={styles.iconsHolder}>
        <MagnifyingGlassIcon className={styles.iconSize}/>
        <ShoppingCartIcon className={styles.iconSize}/>
        <UserIcon className={styles.iconSize}/>
        </div>
        </header> 

        <div className={styles.sideBar} style={sideBarStyle}>
          <div className={styles.sideBarHeader}>
            <XCircleIcon className='size-4 absolute top-3 right-4' onClick={() => {
              setIsClicked(prev => !prev);
              }}/>
            <img src='/Fodpac/Fodpac/logo.jpg'></img>
          </div>
          <div className={styles.navigationMobile}>
            <div className="flex gap-1">
            <HomeIcon className='size-6'/> 
              <p>Home</p>
            </div>
            <div className="flex gap-1">
            <InformationCircleIcon className='size-6'/>
            <p>About us</p>
            </div>
            <div className="flex gap-1">
            <IdentificationIcon className='size-6'/>
            <p>Our vision</p>
            </div>
            <div className="flex gap-1">
            <PhoneArrowDownLeftIcon className='size-6'/>
            <p>Contact</p>
            </div>
        </div>
        </div>

        {/* Bar */}
        <section>
          <div className={styles.advert}>
            <h1 className={styles.h1Style}>
              WE ARE CHANGING THE<br></br>FOOD ECOSYSTEM.</h1>
              <ElevatedButton className={styles.btnStyle} children={'See our products'}>
                
              </ElevatedButton>
              <u><p className={styles.pStyle}>Watch our processes</p></u>
              <img src='/Fodpac/Fodpac/milk2.png' className={styles.drinkImage}></img>
          </div>
        </section>
        <section>
          <div className={styles.carousel}>
            <div className={styles.inner}>
            <div className={styles.box}>
              <img className={styles.Image} src='/Fodpac/Fodpac/protains.jpg'></img>
              <p className='text-center relative bottom-8 text-white text-sm font-bold'>Proteins</p>
            </div>
            <div className={styles.box}>
            <img className='w-full h-full object-cover rounded-3xl filter brightness-90' src='/Fodpac/Fodpac/potatoes.jpg'></img>
            <p className='text-center relative bottom-8 text-white text-sm font-bold'>Potatoes</p>
            </div>
            <div className={styles.box}>
            <img className={styles.Image} src='/Fodpac/Fodpac/cabage.jpg'></img>
            <p className='text-center relative bottom-8 text-white text-sm font-bold'>Vegetables</p>
            </div>
            <div className={styles.box}>
            <img className='w-full h-full object-cover rounded-3xl filter brightness-75' src='/Fodpac/Fodpac/tomatoes.jpg'></img>
            <p className='text-center relative bottom-8 text-white text-sm font-bold'>Tomatoes</p>
            </div>
            <div className={styles.box}>
            <img className={styles.Image} src='/Fodpac/Fodpac/friuts.jpg'></img>
            <p className='text-center relative bottom-8 text-white text-sm font-bold'>Fruits</p>
            </div>
            </div>
          </div>
        </section>

        <section className='flex justify-center'>
          <div className={styles.info}>
            <img className={styles.guy} src='/Fodpac/Fodpac/guy.jpg'></img>
            <div className={styles.moreInfo}>
              <h2 className={styles.moreInfor1}>ABOUT US</h2>
              <h1 className={styles.moreInfor2}>WE MAKE AWESOME PACKAGING<br></br>OF WHOLESOME FOODS</h1>
              <h2 className={styles.moreInfor3}>FODPAC:</h2>
              <ul className={styles.moreInfor4}>
                <li>Providing access to value added food through<br></br> processing, packaging, marketing services, and<br></br> distribution services.</li>
                <li>Provide the infrastructure that support groceries.</li>
                <li>Providing unique online and in-store shopping experience.</li>
              </ul>
              <ElevatedButton children={'Learn more'} className={styles.learnmore}></ElevatedButton>
            </div>
          </div>
        </section>
        <section className='flex justify-center'>
          <div className={styles.coreValues}>
            <div className={styles.core}>
              <h1 className='font-bold text-2xl font-juniper'>1.</h1>
              <h2 className='font-bold mt-3 text-sm text-orange-500'>CORE VALUES</h2>
              <p className='text-sm mt-3'>We value communities: <i>communities of Farmers, Consumers and Traders who are everyday market People.</i></p>
            </div>
            <div className={styles.core}>
            <h1 className='font-bold text-2xl font-juniper'>2.</h1>
              <h2 className='font-bold mt-3 text-sm text-orange-500'>CORE VALUES</h2>
              <p className='text-sm mt-3'>We value optimal and sustainable use of agro value chain resources; we seek to reduce waste</p>
            </div>
            <div className={styles.core}>
            <h1 className='font-bold text-2xl font-juniper'>3.</h1>
              <h2 className='font-bold mt-3 text-sm text-orange-500'>CORE VALUES</h2>
              <p className='text-sm mt-3'>We value health and wee-being, thus healthy farm produce, wholesome processed foods, excellent storage and efficient distribution systems are key.</p>
            </div>
          </div>
        </section>
        <section className='flex justify-center'>
              <div className={styles.advert2}>
                <div className={styles.details}>
                  <h1 className={styles.child1}>OUR VISION</h1>
                  <p className={styles.child2}>
                    We envision a food system that is community supported<br></br>
                     and demand driven in a way that promotes Food, Health.<br></br>
                    Social and Personal security.
                  </p>
                  <h1 className={styles.child3}>OUR MISSION</h1>
                  <p className={styles.child4}>
                    To build a better holistic system for food production,<br></br>
                    storage, packaging and distribution, Processing.
                  </p>
                </div>
                <div className={styles.fruitContainer}>
                <img src='/Fodpac/Fodpac/randomfruits.jpg' className={styles.imageShadow}></img>
                
                </div>
              </div>
        </section>
        <section className='flex justify-center flex-col'>
          <div className={styles.storeHolder}>
          <h2 className={styles.shop}>SHOP</h2>
          <h1 className={styles.explore}>EXPLORE OUR PRODUCTS</h1>
          </div>

          <div className={styles.shopHolder}>
           <Card image='/Fodpac/Fodpac/garri.jpg' name='Garri Plus N5000' heartType={hearts['first']} onHeartClick={()=>handleHeartClick('first')}></Card>
           <Card image='/Fodpac/Fodpac/flakes.jpg' name='Evribodi Flakes N6000' heartType={hearts['second']} onHeartClick={()=>{handleHeartClick('second')}}></Card>
            <Card image='/Fodpac/Fodpac/paste.jpg' name='Tomato Paste N300' heartType={hearts['third']} onHeartClick={()=>{handleHeartClick('third')}}></Card>
            <Card image='/Fodpac/Fodpac/chips.jpg' name='Potato Chips N1200' heartType={hearts['fourth']} onHeartClick={()=>{handleHeartClick('fourth')}}></Card>
          </div>
        </section>
        <section className='flex justify-center'>
          <ElevatedButton className={'bg-green-700 text-white hover:bg-gray-500'} 
          children={'See all products'}></ElevatedButton>
        </section>
        <section className='flex justify-center mt-14'>
          <div>
          <h2 className='text-orange-400 font-bold text-center'>WE ARE PROBABLY NEAR YOU</h2>
          <h1 className='font-bold text-2xl font-juniper text-center mt-5 text-green-700'>LOCATION OF OUR PHYSICAL STORES</h1>
          </div>
        </section>
        <section className='flex justify-center flex-col items-center'>
          <div className='mt-14 flex'>
            <FlexButton name='Abuja'></FlexButton>
            <FlexButton name='Markurdi'></FlexButton>
            <FlexButton name='Lagos'></FlexButton>
            <FlexButton name='Lafia'></FlexButton>
            <FlexButton name='Jos'></FlexButton>
            <FlexButton name='Ibadan'></FlexButton>
            <FlexButton name='Yola'></FlexButton>
            <FlexButton name='Minna'></FlexButton>
          </div>
          <br></br>
          <div className='flex'>
          <FlexButton name='Kano'></FlexButton>
            <FlexButton name='Zaria'></FlexButton>
            <FlexButton name='Uyo'></FlexButton>
            <FlexButton name='Portharcourt'></FlexButton>
            <FlexButton name='Yenagoa'></FlexButton>
            <FlexButton name='Benin'></FlexButton>
            <FlexButton name='Kaduna'></FlexButton>
          </div>
          <br></br>
          <div className='flex'>
          <FlexButton name='Gombe'></FlexButton>
            <FlexButton name='Bauchi'></FlexButton>
            <FlexButton name='Kastina'></FlexButton>
            <FlexButton name='Maiduguri'></FlexButton>
          </div>
        </section>
        <br></br>
        <section className='flex justify-center flex-col'>
          <h2 className='text-center text-orange-500 font-bold mt-10'>CONTACT US</h2>
          <h1 className={styles.fromYou}>WE WOULD LOVE TO HEAR FROM YOU</h1>
        </section>
        <br></br>
        <section className='flex justify-center'>
            <div className={styles.form}>
              <form id='formDetails'>
              <label htmlFor='name'>Full Name</label>
              <input id='name' type='text' className='p-2 rounded-md border border-orange-500 w-full text-sm mb-2 mt-2' placeholder='Enter your full name...' required></input>
              <label htmlFor='email'>Email</label>
              <input id='email' type='email' className='p-2 rounded-md border border-orange-500 w-full text-sm mb-2 mt-2' placeholder='Enter your email address...' required></input>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input id='phone' type='number' className='p-2 rounded-md border border-orange-500 w-full text-sm mb-2 mt-2' placeholder='Enter your phone number...' required></input>
              <label htmlFor='message'>Your Message</label>
              <textarea id='message' className='p-2 rounded-md border border-orange-500 w-full h-44 text-sm mb-2 mt-2' required></textarea>
              <ElevatedButton className={'w-full mt-5 bg-green-800 text-white hover:bg-slate-500'} children={'Send Message'} type='submit'></ElevatedButton>
              </form>
            </div>
        </section>
        <br></br>
        <footer className='flex justify-center mt-28'>
          <div className={styles.footer}>
            <div className={styles.first}>
              <img src='/Fodpac/Fodpac/fodpacWhite.jpg' className={styles.footerLogo}></img>
              <p className={styles.footerText1}>FODPAC: <u>&nbsp;Is a system (virtual & Physical platforms) that aggregates food
                for processing, packaging, marketing services, and distribution.
                </u></p>
                <p className={styles.footerText2}>Online & Brick and Mortar Stores</p>
                <div className='flex gap-4'>
                  <p className={styles.socials}>Socials:</p>
                  <FontAwesomeIcon icon={faTwitter} className={styles.footerIcon1}></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faFacebook} className={styles.footerIcon2}></FontAwesomeIcon>
                </div>
            </div>
            <div className={styles.second}>
              <h3 className={styles.secondText}>Quicklinks</h3>
              <p>Home</p>
              <p>About</p>
              <p>Our Shop</p>
              <p>Contact</p>
            </div>
            <div className={styles.third}>
              <h3 className={styles.thirdText}>Contact Us</h3>
              <div className='flex gap-2 mt-8'>
                <PhoneIcon className={styles.thirdIcon1}></PhoneIcon>
                <p className={styles.phone}>0909610006</p>
              </div>
              <div className='flex gap-2 mt-4'>
              <EnvelopeIcon className={styles.thirdIcon2}></EnvelopeIcon>
              <p className={styles.fodpacEmail}>fodpac.dnl@gmail.com</p>
              </div>
              <div className='flex gap-2 mt-4'>
              <FontAwesomeIcon icon={faMapMarkedAlt} className={styles.thirdIcon3}></FontAwesomeIcon>
              <p className={styles.address}>Office: No. 3, 22 road, 2nd<br></br>Avenu, Gwarinpa, Abuja.</p>
              </div>
            </div>
            
          <div className={styles.line}></div>
            <div className={styles.Fodpac}>
            <p>&copy;Copyright FODPAC 2022 All rights reserved</p>
            <p>FODPAC is subsidiary of Deutero Nig. Ltd</p>
            <p>Privacy policy  Terms of Service</p>
          
            </div>
          </div>
        </footer>
        <br></br><br></br>
        {/* End here */}
      </div>
    </div>
  );
}
export default HomePage;