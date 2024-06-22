import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="footer-left col-md-4 col-sm-6">
                    <p class="about">
                        <span> About the company</span> As a passionate web developer with a keen eye for design and functionality, I'm thrilled to showcase my latest projects and skills. Whether you're seeking a sleek and responsive website, an intuitive user interface, or robust backend development, I'm here to bring your vision to life.
                    </p>
                    <div class="icons">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-google-plus"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-center col-md-4 col-sm-6">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span> Street name and number</span> City, Country</p>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i>
                        <p> (+00) 0000 000 000</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="#"> office@company.com</a></p>
                    </div>
                </div>
                <div class="footer-right col-md-4 col-sm-6">
                    <h2> Ad<span>We</span>Go</h2>
                    <p class="menu">
                        <a href="#"> About </a> |
                        <a href="#"> &nbsp;Services </a> |
                        <a href="#"> &nbsp;Portfolio </a> |
                        <a href="#"> &nbsp;Contact </a>
                    </p>
                    <p class="name"> AdweGo &copy; 2024</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer