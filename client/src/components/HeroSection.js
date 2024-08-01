import React from 'react';
import '../styles/HeroSection.css'; // Add this file for your hero section styles

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Welcome to Blissful Beauty</h1>
      <p>Discover our exclusive range of beauty products.</p>
      <img src="//shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=3840" alt="" srcset="//shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=375 375w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=550 550w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=750 750w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=1100 1100w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=1500 1500w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=1780 1780w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=2000 2000w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=3000 3000w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=3840 3840w" height="2755" sizes="100vw" fetchpriority="high"></img>
      <button>Shop Now</button>
    </section>
  );
};

export default HeroSection;
