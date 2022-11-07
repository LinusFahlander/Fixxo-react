import React, { useState } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {


  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Mordern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    { id: 2, name: "Mordern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    { id: 3, name: "Mordern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=1600"},
    { id: 4, name: "Mordern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/3944693/pexels-photo-3944693.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
  ])

  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Featured Products" products={featuredProducts}/>
      <FooterSection />
    </>
  )
}

export default HomeView