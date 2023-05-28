import './mainpage.css'
import './ab.jpg'
import './dc.jpg'
import navLogo from "./logo4.png"
import img2 from "./dc.jpg"
import img3 from "./pp.jpg"
import img4 from "./kk.jpg"
import img5 from "./ab.jpg"
import img6 from "./abc.jpg"
import img7 from "./cd.jpg"
import img8 from "./boy.jpg"
import img9 from "./girl.jpg"

function HomePage() {
    
    return (
        <>

    <div class="site">
        <nav>
            <img src={navLogo} class="logo" />
            
          
        </nav>
        <h1 class="title">Hum Care</h1>
        <h1 class="titles">_____________</h1>
        <div class="buttonMP">  
            <a className='space' href="/login">SIGNIN</a>
            <a className='spaces' href="/register">REGISTER</a>
        </div>


        </div>
       

        
       
        
    <section class="things">
         <h1>Things We Offer</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam eaque dolore magnam facilis. Quas ducimus beatae atque! Quis optio quam odio sequi laborum mollitia harum corporis magni aut rem.</p>
    
    <div class="t">
        <div class="things-c">
            <h3>Doctor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>


        <div class="things-c">
            <h3>Medicine</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>


        <div class="things-c">
            <h3>Checkup</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</section>







<section class="doctor">
    <h1>Our     Doctors</h1>
    <p>Doctors have a very noble profession. In addition, they are equipped with comprehensive knowledge and devices that enable them to diagnose and treat their patients with correct procedures.</p>
       <div class="t">
        <div class="doctor-d">
            <img src={img2}/>
            <div class="layer">
                <h3>I'M DOCTOR ALISA</h3>
            </div>
        </div>



        <div class="doctor-d">
            <img src={img3}/>
            <div class="layer">
                <h3>I'M DOCTOR Rose</h3>
            </div>
        </div>




        <div class="doctor-d">
            <img src={img4}/>
            <div class="layer">
                <h3>I'M DOCTOR Alison</h3>
            </div>
        </div>
       </div>
</section>





<section class="facilities">
    <h1>Our facilities</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div class="t">
        <div class="facilities-f">
            <img src= {img5}/>
            <h3>Eye Doctor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>


        <div class="facilities-f">
            <img src= {img6} />
            <h3>Dentist</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. once, while others may experience it multiple times.
                
                 </p>
        </div>


        <div class="facilities-f">
            <img src= {img7}/>
            <h3>Children Doctor</h3>
            <p>any personaLorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>


    </div>
</section>






<section class="test">
    <h1>What Our Patient Says</h1>
    <p>We love that our patients feel inspired to write about the care they received here at Mind Insight! Here are some of the wonderful letters and comments we have recently received.</p>
    <div class="t">
        <div class="test-col">
            <img src={img8}/>
            <div>
                <p>“My Sessions are always good.”</p>
                <h3>HARRY BROOK</h3>
                
            </div>
        </div>
        <div class="test-col">
            <img src={img9}/>
            <div>
                <p>“I was very satisfied with everything.”</p>
                <h3>ALEXA</h3>
            </div>
        </div>
    </div>
</section>


<section class="cta">
    <h1>Hospital Helps Save Lives</h1>
    <a href="" class="hero-btn">CONTACT US</a>
</section>




<section class="footer">
    <h4>ABOUT US</h4>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Iusto dolorem, commodi quisquam nemo nulla quo maiores modi ratione dignissimos illo quas dolorum dolor obcaecati, eligendi quidem quae suscipit laboriosam. Ipsum.
    </p>
</section>


        </>
    )
   

}

export default HomePage;