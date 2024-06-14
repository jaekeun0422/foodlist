import React from 'react'
import footerImg from '../footer.jpg';

const Footer = () => {
  return (
    <>
        <footer className="py-5 bg-dark">
            <div className="container">
              <img className="card-img-top footer-img" src={footerImg} alt="footer" />
              <p className="m-0 text-center text-white">Copyright &copy; Jaekeun Lee 2024. All Rights Reserved.
              Privacy · Terms · FAQ</p>
            </div>
        </footer>
    </>
  )
}

export default Footer