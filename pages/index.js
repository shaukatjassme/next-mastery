
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '../public/images/picture-1.png';
import checkboxImage from '../public/images/checkbox.png';
import logos from '../public/images/logos.png';
import iceburg from '../public/images/iceberg.png';
import stats from '../public/images/stats.png';
import statsGood from '../public/images/stats-good.png';
import gifImage from '../public/images/deep-dive.gif';
import puzzleImage from '../public/images/puzzle.png';
import logoShort from '../public/images/logos-short.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaStar } from 'react-icons/fa';
import webDev from '../public/images/webdev.png';
import codeStackr from '../public/images/codeStackr.png';
import hayley from '../public/images/hayley.png';
import nikky from '../public/images/nikky.png';
import model1 from '../public/images/module-1.png';
import model2 from '../public/images/module-2.png';
import header from '../public/images/header.png';
import comingSoon from '../public/images/R.jpg';
import SwitchButton from '../components/SwitchButton';

const Index = () => {

    const [futureDate, setFutureDate] = useState('');
    const [price, setPrice] = useState(74.85);


    useEffect(() => {
        // Calculate the date 3 days from now
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 3);

        // Format the date as "Month DD, YYYY"
        const options = { year: 'numeric', month: 'long', day: '2-digit' };
        const formattedDate = futureDate.toLocaleDateString('en-US', options);

        setFutureDate(formattedDate);
    }, []);

    const handleToggle = () => {
        setPrice((prevPrice) => prevPrice * 2); // Increase price by 1 on each toggle
    };

    return (
        <div>
            <div className="main-section">
                <h6 className="text-center developer-text">
                    for developers who want to stand out and become irreplaceable
                </h6>
                <p className="text-center course-text">
                    Become a top 1% <span className="text-gradient_blue">Next.js 14</span> developer in only one course
                </p>
                <p className="text-center content-text">
                    Escape the shallow content & dive deep into the hottest tech of 2024
                </p>
                <div className="image-container">
                    <Image
                        src={image1}
                        alt="Course image"
                        width={550}
                        height={550}
                        className='image-1'
                    />
                </div>
            </div>
            <div className="text-center-container">
                <Image
                    src={checkboxImage}
                    alt="check image"
                    width={25}
                    height={25}
                />
                <span className="date-text">Up to date:<span className='date-after'> {futureDate}</span></span>
            </div>

            <p className="text-center content-text-2">
                Read the page if you want every single piece of information. Or just scroll to the main details by clicking the button below.
            </p>

            <div className="button-row scroll-dev">
                <button className="custom-button-1">
                    Scroll to the Details
                    <i className="fa-solid fa-arrow-down down-arrow-icon"></i>
                </button>
                <button className="custom-button-2">
                    Explore pricing options
                    <i className="fa-solid fa-arrow-down down-arrow-icon"></i>
                </button>
            </div>

            <div className='new-era-dev'>
                <p className="text-left react-text">
                    Enter the new era of React.
                </p>
                <p className="text-left content-text-3">
                    Here’s a little known fact.
                </p>
                <p className="text-left content-text-4">
                    17% of the top 1 million websites use Next.js.
                </p>
                <p className="text-left content-text-5">
                    Are these some nameless websites? Who are these companies? Take a look.
                </p>

                <div className="image-container">
                    <Image
                        src={logos}
                        alt="Course image"
                        width={900}
                        height={900}
                    />
                </div>

                <p className="text-left content-text-3">
                    Again, it's a little known fact.
                </p>
                <p className="text-left content-text-4">
                    But the best companies have already realized they need to use Next.js or get left behind.
                </p>

                <div className="button-row">
                    <i className="fa-solid fa-quote-left quote-icon"></i>
                    <p className="text-left react-text-1">
                        "Great. I'll use Next right now."
                    </p>
                    <i className="fa-solid fa-quote-right quote-icon"></i>
                </div>

                <p className="text-left content-text-3">
                    Here’s the catch.
                </p>
                <p className="text-left content-text-3">
                    Me and these massive companies don’t use Next like plain React.
                </p>
                <p className="text-left content-text-3">
                    If you try using Next.js like React, you’ll make a mediocre app and miss the whole point of Next.
                </p>
                <p className="text-left content-text-3">
                    That’s because you’re taught that...        </p>

                <div className="button-row">
                    <i className="fa-solid fa-quote-left quote-icon"></i>
                    <p className="text-left react-text-1">
                        "Next.js is just good old React"
                    </p>
                    <i className="fa-solid fa-quote-right quote-icon"></i>
                </div>
                <p className="text-left content-text-4">
                    Wrong. Next.js is an iceberg.        </p>


                <p className="text-left content-text-3">
                    You <span style={{ fontWeight: 'bolder' }}>think</span> you know it because you only see the 15% of it that’s above water. </p>

                <p className="text-left content-text-3">
                    So you start coding. And like the Titanic sinking after hitting an iceberg they thought was tiny, what you didn’t know gets you.
                </p>

                <div className="image-container">
                    <Image
                        src={iceburg}
                        alt="Course image"
                        width={900}
                        height={900}
                    />
                </div>

                <p className="text-left content-text-4">
                    The same thing happened to me.       </p>
                <p className="text-left content-text-3">
                    I jumped into the new <span style={{ fontWeight: 'bolder' }}>Next.js</span> thinking it’s the same <span style={{ fontWeight: 'bolder' }}>Next</span> and <span style={{ fontWeight: 'bolder' }}>React</span> I’m used to.  </p>

                <p className="text-left content-text-3">
                    My team and I built our website with it.
                </p>
                <p className="text-left content-text-3">
                    After adding line after line of code for months?
                </p>
                <p className="text-left content-text-3">
                    Without realizing it the app turned into a slow client-side mess.
                </p>

                <div className="image-container stats-image">
                    <Image
                        src={stats}
                        alt="Course image"
                        width={900}
                        height={900}
                        style={{ borderRadius: '10px' }}
                    />
                </div>

                <div className="button-row">
                    <i className="fa-solid fa-close quote-icon"></i>
                    <p className="text-left react-text-2">
                        It’s not your fault. What’s out there sucks
                    </p>
                    <i className="fa-solid fa-close quote-icon"></i>
                </div>


                <p className="text-left content-text-4">
                    Next.js 13 & 14 are new. There is no good way to learn them out there.
                </p>

                <p className="text-left content-text-3">
                    Every piece of content you see is basic.
                </p>
                <p className="text-left content-text-3">
                    It doesn’t teach you the best practices.
                </p>
                <p className="text-left content-text-3">
                    Most of the people teaching it have no experience building massive production-ready apps with Next 14 - so they give superficial advice (if the advice is up to date at all).
                </p>

                <p className="text-left content-text-3">
                    You don’t want to read the never-ending docs or 7153 articles you need to learn it all.
                </p>
                <p className="text-left content-text-4">
                    What if you could just take one course with...
                </p>

                <div className="button-row">
                    <i className="fa-solid fa-leaf quote-icon"></i>
                    <p className="text-left react-text-2">
                        A whole new approach to learning
                    </p>
                    <i className="fa-solid fa-leaf quote-icon"></i>
                </div>

                <p className="text-left content-text-4">
                    I spent almost a year deep in the Next.js ocean.
                </p>


                <li className='text-left content-text-3'>
                    Building massive 5 and 6-figure apps for clients on our agency side.
                </li>
                <li className='text-left content-text-3'>
                    Making tutorials & mentoring devs.
                </li>
                <li className='text-left content-text-3'>
                    Rebuilding my course platform from scratch because the old way of building Next & React apps made production apps a mess.
                </li>

                <p className="text-left content-text-4">
                    After all this? After countless daily requests for a Next14 course & after perfecting my website?
                </p>
                <div className="image-container stats-good-image">
                    <Image
                        src={statsGood}
                        alt="Course image"
                        width={900}
                        height={900}
                        style={{ borderRadius: '10px' }}
                    />
                </div>

                <p className="text-left content-text-7">
                    I finally decided on this three-part learning method for learning Next14 so you don’t have to struggle:
                </p>

                <p className="text-left react-text-5">
                    1. <span className="deep-dive">Deep dive </span>& understand how it works
                </p>

                <p className="text-left content-text-3">
                    Just knowing how to do something isn’t enough.
                </p>
                <p className="text-left content-text-3">
                    Not with ChatGPT, GitHub Copilot and new tools that can output better code every day.
                </p>
                <p className="text-left content-text-3">
                    See, understanding how the web actually works makes you future-proof.
                </p>
                <p className="text-left content-text-3">
                    You’ll be able to prompt little pieces of code and bring them together into a well-architectured app instead of getting replaced.
                </p>
                <p className="text-left content-text-3">
                    Here’s a little demo of our deep dive lectures.
                </p>



                <div className="image-container gif-image">
                    <Image
                        src={gifImage}
                        alt="Course image"
                        width={900}
                        height={900}
                    />
                </div>

                <p className="text-left react-text-5">
                    2. <span className="deep-dive">Build and deploy </span> a complex app
                </p>

                <p className="text-left content-text-3">
                    If you have half the pieces of a puzzle?
                </p>
                <p className="text-left content-text-3">
                    You have a terrible puzzle.
                </p>

                <div className="image-container puzzle-image">
                    <Image
                        src={puzzleImage}
                        alt="Course image"
                        width={900}
                        height={900}
                        style={{ borderRadius: '10px' }}
                    />
                </div>

                <p className="text-left content-text-3">
                    That’s why theory, short tutorials, and docs aren’t enough. How do you actually bring it all together into a production-ready app?
                </p>
                <p className="text-left content-text-3">
                    That’s what separates a great dev from the mediocre junior who just takes on tasks given from above like a robot.
                </p>
                <p className="text-left content-text-3">
                    And finally...
                </p>
                <p className="text-left react-text-5">
                    3. <span className="puzzle-text">Active lessons </span> so you’re 100% confident you can code it yourself
                </p>
                <p className="text-left content-text-3">
                    Look. The biggest issue with project-based tutorials is that people sometimes just follow along.
                </p>
                <p className="text-left content-text-3">
                    You need to practice yourself because no one will code the app for you.
                </p>
                <p className="text-left content-text-3">
                    This is why I added Active lessons.
                </p>
                <p className="text-left content-text-3">
                    Here you code the most important parts of the app.
                </p>
                <p className="text-left content-text-3">
                    You master the features of Next14 to guarantee you walk away with the skills to build stunning apps with Next14 on your own.
                </p>
                <p className="text-left content-text-3">
                    Here’s what these lessons look like.
                </p>


                <div className="image-container puzzle-image">
                    <video
                        width="900"
                        height="900"
                        controls
                        autoPlay
                        loop
                        muted
                        style={{ maxWidth: '100%', height: 'auto' }} // Ensures responsiveness
                    >
                        <source src="/images/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="text-left unique-text">
                    🥁 And the unique app you’ll build is...
                </p>
                <span className="deep-dive-text">A modern StackOverflow clone. </span>

                <div className="image-container puzzle-image">
                    <video
                        width="900"
                        height="900"
                        controls
                        autoPlay
                        loop
                        muted
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} // Ensures responsiveness
                    >
                        <source src="/images/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <p className="text-left mt-5 content-text-3">
                    Not an Amazon or Youtube clone every dev and their mother has in their portfolio 😬
                </p>
                <p className="text-left mt-5 content-text-3">
                    Nope.
                </p>
                <p className="text-left mt-5 content-text-3">
                    The DevOverflow app has:
                </p>

                <p className="text-left content-text-4" style={{ marginLeft: '20px' }}>
                    1.   A recommendation system for posts (no one teaches this)
                </p>
                <p className="text-left content-text-4" style={{ marginLeft: '20px' }}>
                    2.   Global database data-fetching
                </p>
                <p className="text-left content-text-4" style={{ marginLeft: '20px' }}>
                    3.   AI generated answers to questions
                </p>
                <p className="text-left content-text-4" style={{ marginLeft: '20px' }}>
                    4.   Badge & Reputation System
                </p>
                <p className="text-left content-text-4" style={{ marginLeft: '20px' }}>
                    5.   Views and Voting Mechanism
                </p>
                <p className="text-left content-text-4" style={{ marginLeft: '20px' }}>
                    6.   Filter and Pagination for almost all pages & so much more
                </p>

                <div className="button-row">
                    {/* <i className="fa-solid fa-leaf quote-icon"></i> */}
                    <p className="text-left react-text-2">
                        “ Okay okay, you convinced me. “
                    </p>
                    {/* <i className="fa-solid fa-leaf quote-icon"></i> */}
                </div>


                <div className="convinc-dev">

                    <button className="custom-convince-text">
                        Take me to the pricing section!
                        <i className="fa-solid fa-arrow-down down-arrow-icon"></i>
                    </button>
                </div>

                <p className="text-left unique-text">
                    Master the most sought-after tech stack of 2023 and beyond
                </p>

                <div className="image-container puzzle-image logos-short">
                    <Image
                        src={logoShort}
                        alt="Course image"
                        width={900}
                        height={900}
                        style={{ borderRadius: '10px' }}
                    />
                </div>
                <p className="text-left content-text-3" >
                    You’ll need intermediate knowledge of JavaScript (eg. array methods, spread, try catch...) and beginner knowledge of React (components & JSX syntax, managing state, functional components) to take the course.
                </p>
                <p className="text-left content-text-3" >
                    If you’re unfamiliar with these, don’t worry. We’ll provide you the resources to get you up to speed, but it definitely won’t be as easy as if you had experience beforehand.
                </p>
                <p className="text-left content-text-3" >
                    If you’re asking if you need to know TypeScript - you don’t. Here at JSM we learn by building apps & this is the perfect chance to learn it since TypeScript is used in most industry projects.                                </p>
                <p className="text-center review-text">
                    The reviews are in.
                </p>



                <div className="testimonial-dev">

                    <div className="testimonial">
                        <div className="testimonial-header">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="star-icon" />
                            ))}
                        </div>
                        <p className="testimonial-body">
                            JS Mastery's Next.js course is amazing. The way Adrian structures the course by giving you active lessons that you build out on your own is perfect for learning. These active lessons have just the right amount of difficulty so you are never lost yet are always pushing yourself and learning more. Also, by the end of the course you will have an incredible project that would make any portfolio stand out.
                        </p>
                        <div className="testimonial-profile">
                            <Image
                                src={webDev}
                                alt="Profile"
                                width={30}   // or set the appropriate size
                                height={30}  // or set the appropriate size
                                className="profile-pic"
                            />
                            <div className="profile-info">
                                <h4 className="profile-name">Web Dev Simplified</h4>
                                <p className="profile-occupation">Youtuber | 1.4M subscribers</p>
                            </div>
                        </div>
                    </div>



                    <div className="testimonial">
                        <div className="testimonial-header">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="star-icon-2" />
                            ))}
                        </div>
                        <p className="testimonial-body">
                            This course is a game-changer for anyone serious about mastering Next.js 14. Adrian's teaching style is engaging, the curriculum is exhaustive, and the focus on active, hands-on learning is unparalleled. Building DevFlow, a real-world app, can not only solidified your understanding but also gave you a portfolio-worthy project. If you want to become a top 1% Next.js developer, this course is your roadmap.                        </p>
                        <div className="testimonial-profile">
                            <Image
                                src={codeStackr}
                                alt="Profile"
                                width={30}   // or set the appropriate size
                                height={30}  // or set the appropriate size
                                className="profile-pic"
                            />
                            <div className="profile-info">
                                <h4 className="profile-name">Jesse Hall (codeSTACKr)</h4>
                                <p className="profile-occupation">Youtuber | 289K subscribers</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="testimonial-dev-2">

                    <div className="testimonial">
                        <div className="testimonial-header">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="star-icon-3" />
                            ))}
                        </div>
                        <p className="testimonial-body">
                            The team at JS Mastery have done it again! Clear and thorough videos broken down step-by-step, frequent prompts to get you thinking in the 'Next 14 way' - and perhaps the best part of all - interactive tasks (with Figma designs!) to solidify your knowledge. Wow, forget passive learning... great job, JS Mastery!
                        </p>
                        <div className="testimonial-profile">
                            <Image
                                src={hayley}
                                alt="Profile"
                                width={30}   // or set the appropriate size
                                height={30}  // or set the appropriate size
                                className="profile-pic"
                            />
                            <div className="profile-info">
                                <h4 className="profile-name">Hayley Wood</h4>
                                <p className="profile-occupation">React Developer</p>
                            </div>
                        </div>
                    </div>



                    <div className="testimonial">
                        <div className="testimonial-header">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className="star-icon-3" />
                            ))}
                        </div>
                        <p className="testimonial-body">
                            I have been eagerly anticipating this release, which has surpassed my expectations! Finally, there exists a comprehensive one-stop destination to learn everything Next.js. This course is a testament to the dedication and expertise of its creators, and I couldn’t be more impressed. For anyone looking to master Next.js, this is an indispensable resource that I highly recommend!
                        </p>
                        <div className="testimonial-profile">
                            <Image
                                src={nikky}
                                alt="Profile"
                                width={30}   // or set the appropriate size
                                height={30}  // or set the appropriate size
                                className="profile-pic"
                            />
                            <div className="profile-info">
                                <h4 className="profile-name">Jesse Hall (codeSTACKr)</h4>
                                <p className="profile-occupation">Youtuber | 289K subscribers</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='text-center mt-5'><button className='all-review'> See all reviews</button></div>



                <div className="button-row-learn mt-4">

                    <p className="text-center review-text">
                        <i className="fa-solid fa-arrow-down down-arrow-icon-learn"></i>   See what you’ll learn  <i className="fa-solid fa-arrow-down down-arrow-icon-learn"></i>
                    </p>


                </div>

                <div className="testimonial-dev-3">

                    <div className="learn-dev-1">
                        <div className="testimonial-header">
                            <h4 className="intro-text text-left">Getting Started</h4>
                        </div>
                        <p className="testimonial-body-intro">
                            <span className="span-num">01</span> Intro
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">02</span> Prerequisites
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">03</span> Things before Next.js
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">04</span> Introduction to Next.js
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">05</span> How Web Works
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">06</span> Project Setup (ESLint, Prettier, Git &nbsp; & Github)
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">07</span> Tailwind CSS
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">08</span> Code Architecture
                        </p>
                        <Image
                            src={model1}
                            alt="Course image"
                            width={120}
                            height={120}
                            style={{ borderRadius: '10px' }}
                            className="model-1"
                        />


                    </div>


                    <div className="learn-dev-2 ">
                        <div className="testimonial-header">
                            <h4 className="intro-text text-left">Routing, Core Concepts, and UI Mastery</h4>
                        </div>
                        <p className="testimonial-body-intro">
                            <span className="span-num">09</span> Routing
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">10</span> Next.js Core Architecture
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">03</span> Things before Next.js
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">04</span> Introduction to Next.js
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">05</span> How Web Works
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">06</span> Project Setup (ESLint, Prettier, Git &nbsp; & Github)
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">07</span> Tailwind CSS
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">08</span> Code Architecture
                        </p>
                        <Image
                            src={model2}
                            alt="Course image"
                            width={120}
                            height={120}
                            style={{ borderRadius: '10px' }}
                            className="model-1"
                        />


                    </div>




                </div>

                <div className="testimonial-dev-3">

                    <div className="learn-dev-1">
                        <div className="testimonial-header">
                            <h4 className="intro-text text-left">Getting Started</h4>
                        </div>
                        <p className="testimonial-body-intro">
                            <span className="span-num">01</span> Intro
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">02</span> Prerequisites
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">03</span> Things before Next.js
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">04</span> Introduction to Next.js
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">05</span> How Web Works
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">06</span> Project Setup (ESLint, Prettier, Git &nbsp; & Github)
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">07</span> Tailwind CSS
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">08</span> Code Architecture
                        </p>
                        <Image
                            src={model1}
                            alt="Course image"
                            width={120}
                            height={120}
                            style={{ borderRadius: '10px' }}
                            className="model-1"
                        />


                    </div>


                    <div className="learn-dev-2 ">
                        <div className="testimonial-header">
                            <h4 className="intro-text text-left">Routing, Core Concepts, and UI Mastery</h4>
                        </div>
                        <p className="testimonial-body-intro">
                            <span className="span-num">09</span> Routing
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">10</span> Next.js Core Architecture
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">03</span> Things before Next.js
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">04</span> Introduction to Next.js
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">05</span> How Web Works
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">06</span> Project Setup (ESLint, Prettier, Git &nbsp; & Github)
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">07</span> Tailwind CSS
                        </p>
                        <p className="testimonial-body-intro">
                            <span className="span-num">08</span> Code Architecture
                        </p>
                        <Image
                            src={model2}
                            alt="Course image"
                            width={120}
                            height={120}
                            style={{ borderRadius: '10px' }}
                            className="model-1"
                        />


                    </div>




                </div>
                <div className="button-row-learn mt-4">

                    <p className="text-center review-text-bonuses">
                        You’ll also get these bonuses 👀
                    </p>


                </div>



            </div>

            {/* new-era-ended */}


            {/* ultimate-container */}


            <div className='ultimate-container'>
                <div className='ultimate-dev'>
                    <div>
                        <p className='ultimate-dev-text'>Bonus #1 - Ebook (200 pages)</p>
                     
                     
                     
                     
                        <p className="text-left review-heading-text">
                            The Ultimate Next.js 14 Ebook
                        </p>
                    </div>
                    <div>
                        <Image
                            src={header}
                            alt="Profile"
                            width={900}   // or set the appropriate size
                            height={900}  // or set the appropriate size
                            className="header-img"
                        />
                    </div>
                </div>

             


                <p className="text-center review-text-bonuses">
                Become a top 1% Next.js developer & lead the Next era of React
                </p>
                <p className='ultimate-dev-text text-center mt-4 mb-5'> <i className="fa-solid fa-graduation-cap degree-completed-icon"></i>  2976+ developers already enrolled</p>

                <div className="pricing">
                    <div className="plan">
                        <div className="all-card-content">
                            <div className="first-price-table">
                                <h2 className='title-text'>The Basic Package</h2>
                                <div className="price-text">Build and deploy DevOverflow</div>
                                <p className="text-center price-text-bonuses">
                                    ${price.toFixed(2)}
                                </p>
                                <p class="text-center mt-5 include-text">Price including sales tax</p>
                                <div className='button-row-switch'>
                                    <p class="text-center include-text-forself">For myself</p>
                                    <div>

                                        <SwitchButton onToggle={handleToggle} />
                                    </div>
                                    <p class="text-center include-text-forself">For teams</p>
                                </div>
                                <button className="price-button">Buy now</button>


                                <p class="text-center mt-5 include-text">30-Day Money-Back Guarantee</p>



                            </div>
                            <p className="location-text text-left">It looks like you're located in 🇵🇰Pakistan.

                                This is a premium course with a premium price, but I don't want it to be impossible to get if you're from a country with lower purchasing power.</p>
                            <p className="location-text-2 mb-0 text-left">It looks like you're located in 🇵🇰Pakistan.

                                That is why regional discount is applied automatically. Note that you will only be able to view content from within Pakistan.</p>

                            <div className="first-price-table">
                                <p class="text-left  dev-over-text">Build DevOverflow and learn how to build Next14 apps.</p>
                                <div className='button-row-include'>
                                    <hr /><p class="text-center include-text-forself2">IT INCLUDES</p><hr />
                                </div>
                            </div>

                            <div className="depth-price-table">
                                <Image
                                    src={model1}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img"
                                    style={{ borderRadius: '10px' }}

                                />
                                <div className="depth-price-text text-left">In-depth Build & Deploy DevOverflow App (20 hours)</div>
                            </div>
                            <div className="depth-price-text text-left">Features</div>
                            <div className="depth-price-table">
                                <Image
                                    src={checkboxImage}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img-2"
                                    style={{ borderRadius: '10px' }}

                                />
                                <p class="text-left money-text">30-Day Money-Back Guarantee</p>
                            </div>
                            <div className="depth-price-table">
                                <Image
                                    src={checkboxImage}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img-2"
                                    style={{ borderRadius: '10px' }}

                                />
                                <p class="text-left money-text">Lifetime access</p>
                            </div>
                            <div className="depth-price-table">
                                <Image
                                    src={checkboxImage}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img-2"
                                    style={{ borderRadius: '10px' }}

                                />
                                <p class="text-left money-text">Private & active Discord community</p>
                            </div>
                            <div className="depth-price-table">
                                <Image
                                    src={checkboxImage}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img-2"
                                    style={{ borderRadius: '10px' }}

                                />
                                <p class="text-left money-text">Access to GitHub Repository </p>
                            </div>
                            <div className="depth-price-table">
                                <button className="price-button mb-5">Buy now</button>
                            </div>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="all-card-content">
                            <div className="first-price-table">
                                <h2 className='title-text'>The Master Package</h2>
                                <div className="price-text">Deep dive + Build & Deploy + Active lessons</div>
                                <p className="text-center price-text-bonuses">
                                $89.85
                                </p>
                                <p class="text-center mt-5 include-text">Price including sales tax</p>
                                <div className='button-row-switch'>
                                    <p class="text-center include-text-forself">For myself</p>
                                    <div>

                                        <SwitchButton  />
                                    </div>
                                    <p class="text-center include-text-forself">For teams</p>
                                </div>
                                <button className="price-button">Buy now</button>


                                <p class="text-center mt-5 include-text">30-Day Money-Back Guarantee</p>



                            </div>
                            <p className="location-text text-left">It looks like you're located in 🇵🇰Pakistan.

                                This is a premium course with a premium price, but I don't want it to be impossible to get if you're from a country with lower purchasing power.</p>
                            <p className="location-text-2 mb-0 text-left">It looks like you're located in 🇵🇰Pakistan.

                                That is why regional discount is applied automatically. Note that you will only be able to view content from within Pakistan.</p>

                            <div className="first-price-table">
                                <p class="text-left  dev-over-text">Build DevOverflow and learn how to build Next14 apps.</p>
                                <div className='button-row-include'>
                                    <hr /><p class="text-center include-text-forself2">IT INCLUDES</p><hr />
                                </div>
                            </div>

                            <div className="depth-price-table">
                                <Image
                                    src={model1}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img"
                                    style={{ borderRadius: '10px' }}

                                />
                                <div className="depth-price-text text-left">In-depth Build & Deploy DevOverflow App (20 hours)</div>
                            </div>
                            <div className="depth-price-text text-left">Features</div>
                            <div className="depth-price-table">
                                <Image
                                    src={checkboxImage}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img-2"
                                    style={{ borderRadius: '10px' }}

                                />
                                <p class="text-left money-text">30-Day Money-Back Guarantee</p>
                            </div>
                            <div className="depth-price-table">
                                <Image
                                    src={checkboxImage}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img-2"
                                    style={{ borderRadius: '10px' }}

                                />
                                <p class="text-left money-text">Lifetime access</p>
                            </div>
                            <div className="depth-price-table">
                                <Image
                                    src={checkboxImage}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img-2"
                                    style={{ borderRadius: '10px' }}

                                />
                                <p class="text-left money-text">Private & active Discord community</p>
                            </div>
                            <div className="depth-price-table">
                                <Image
                                    src={checkboxImage}
                                    alt="Profile"
                                    // or set the appropriate size
                                    className="header-img mt-4 depth-img-2"
                                    style={{ borderRadius: '10px' }}

                                />
                                <p class="text-left money-text">Access to GitHub Repository </p>
                            </div>
                            <div className="depth-price-table">
                                <button className="price-button mb-5">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center review-text-bonuses">
                    Frequently Asked Questions
                </p>



                <Image
                    src={comingSoon}
                    alt="Profile"
                    // or set the appropriate size
                    className="header-img mt-4"
                    style={{ borderRadius: '10px' }}
                />

            </div>


        </div>
    );
};

export default Index;
