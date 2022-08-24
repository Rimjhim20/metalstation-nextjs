import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import productcardCss from '../styles/ProductCard.module.css'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import { GetAllProducts, backendurl } from '../urls'
const Demo = () => {
  const [products, setproducts] = useState([])
  useEffect(() => {
    async function getdata() {
      let res = await fetch(GetAllProducts, {
        method: "GET",
        headers: {
          'content-Type': 'application/json'
        }
      })
      let data = await res.json();
      if (data.success) {
        setproducts(data.pagination.results);
      }
    }
    getdata()
  }, [])
  const slides = [1, 2, 3, 4, 5, 6, 7, 8];
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const sslideRight = () => {
    var slider = document.getElementById("sslider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  const sslideLeft = () => {
    var slider = document.getElementById("sslider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  return (
    <>
      <div className='container'>
        <h2 className={productcardCss.Title}>Similar Products</h2>
        <div id='main-slider-container'>
          <AiOutlineLeft className='slider-icon left' onClick={slideLeft} />
          <div id="slider">
            {
              products.map((product, index) => {
                let link = '/ecommerce/' + product._id;
                return (
                  <div className='slider-card' key={index}>
                    <div className={productcardCss.Product}>
                      <Image src={backendurl + product.img[0]} alt="steel" className={productcardCss.cardimg}
                        width={400}
                        height={200} />
                      <div className={productcardCss.bottom_right_detail}>
                        <small>
                          4.9 <i className="bi bi-star-fill"></i> (1349)
                        </small>
                      </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                    <div className={productcardCss.Product_detail}>
                      <div className={productcardCss.Product_Title}>
                        <Link href={link}><a><h3>{product.name}</h3></a></Link>
                        <p className={productcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                      </div>
                      <div className={productcardCss.Product_Description}>
                        <small>{product.shortDescription}</small>
                      </div>
                      <ul className={`${productcardCss.Product_Quantity} ${productcardCss.display}`}>
                        <li>1 Ton <small>(min order)</small></li>
                        <li className={productcardCss.Product_Price}>
                          {
                            product.price && <>
                              ₹ {product.price}/-
                            </>
                          }
                        </li>
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <AiOutlineRight className='slider-icon right' onClick={slideRight} />
        </div>
        {/* <h2 className={productcardCss.Title} >Recently Viewed</h2>
        <div id='main-slider-container'>
          <AiOutlineLeft className='slider-icon left' onClick={sslideLeft} />
          <div id="sslider">
            {
              slides.map((slide, index) => {
                return (
                  <div className='slider-card' key=''>
                    <div className={productcardCss.Product}>
                      <Image src="/metal.png" alt="steel" className={productcardCss.cardimg}
                        width={400}
                        height={200} />
                      <div className={productcardCss.bottom_right_detail}>
                        <small>
                          4.9 <i className="bi bi-star-fill"></i> (1349)
                        </small>
                      </div>
                    </div>
                    <i className="fa-solid fa-ellipsis"></i>
                    <div className={productcardCss.Product_detail}>
                      <div className={productcardCss.Product_Title}>
                        <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                        <p className={productcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                      </div>
                      <div className={productcardCss.Product_Description}>
                        <small>Recycled Aluminium scrap from blast furnace.</small>
                      </div>
                      <ul className={`${productcardCss.Product_Quantity} ${productcardCss.display}`}>
                        <li>1 Ton <small>(min order)</small></li>
                        <li className={productcardCss.Product_Price}>
                          ₹ 1,39,999
                        </li>
                      </ul>
                    </div>

                  </div>
                )
              })
            }
          </div>
          <AiOutlineRight className='slider-icon right' onClick={sslideRight} />
        </div> */}
      </div>
    </>
  )
}

export default Demo