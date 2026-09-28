
import React from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const phone="263775499059";
const wa=`https://wa.me/${phone}?text=${encodeURIComponent("Hello Grace's Closet, I would like to enquire about your latest fashion.")}`;

const images={
 hero:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
 dresses:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85",
 tops:"https://images.unsplash.com/photo-1564257577054-8e2c8b6a7b2c?auto=format&fit=crop&w=900&q=85",
 bottoms:"https://images.unsplash.com/photo-1506629905607-d9e8e3a6f7f1?auto=format&fit=crop&w=900&q=85",
 coords:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
 outerwear:"https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85",
 active:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
 shoes:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
 bags:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
 accessories:"https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=85",
 store:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
};

function WA(){return <a className="wa" href={wa} aria-label="Chat with Grace's Closet on WhatsApp">⌕</a>}
function Header(){return <><div className="top"><span>88 Central Ave (Waves Plaza) • Galaxy Mall, Harare</span><a href="tel:+263775499059">☎ 077 549 9059</a></div><header><a className="brand" href="#">Grace’s<span>♥</span><small>CLOSET</small></a><nav><a href="#categories">Categories</a><a href="#products">Products</a><a href="#contact">Contact</a></nav><div className="icons"><button>⌕</button><button>☰</button></div></header></>}
function Cat({image,title}){return <a className="cat" href="#products"><img src={image} alt={title}/><span>{title}</span><b>→</b></a>}
function Product({image,title}){return <article className="product"><img src={image} alt={title}/><div><h3>{title}</h3><a href="#contact">Enquire →</a></div></article>}

function App(){return <div>
<Header/>
<main>
<section className="hero"><img src={images.hero} alt="Fashion boutique collection"/><div className="heroCopy"><p className="eyebrow">GRACE’S CLOSET</p><h1>Fashion<br/>For Every<br/><em>You</em></h1><p>Trendy, stylish and versatile fashion for everyday looks and special occasions.</p><a className="btn" href="#categories">SHOP NOW →</a></div><div className="trust"><span>♧<b>Trendy Styles</b><small>Fresh fashion</small></span><span>◇<b>Quality Fashion</b><small>Everyday style</small></span><span>⌂<b>Visit Our Stores</b><small>Harare</small></span></div></section>

<section id="categories" className="section"><div className="heading"><div><p className="eyebrow pink">SHOP BY CATEGORY</p><h2>Find your look.</h2></div><a href="#products">View All →</a></div><div className="cats">
<Cat image={images.dresses} title="Dresses"/><Cat image={images.tops} title="Tops & Blouses"/><Cat image={images.bottoms} title="Pants & Jeans"/><Cat image={images.coords} title="Co-ord Sets"/><Cat image={images.outerwear} title="Outerwear & Jackets"/><Cat image={images.active} title="Activewear"/><Cat image={images.shoes} title="Shoes"/><Cat image={images.bags} title="Handbags"/><Cat image={images.accessories} title="Accessories"/>
</div></section>

<section id="products" className="section productsSection"><div className="heading"><div><p className="eyebrow pink">FEATURED STYLES</p><h2>Explore the collection.</h2></div><a href="#contact">Ask about availability →</a></div><div className="products">
<Product image={images.dresses} title="Dresses"/><Product image={images.tops} title="Tops & Blouses"/><Product image={images.coords} title="Co-ord Sets"/><Product image={images.outerwear} title="Outerwear"/><Product image={images.shoes} title="Shoes"/><Product image={images.bags} title="Handbags"/>
</div></section>

<section className="feature"><div><p className="eyebrow">EVERYDAY STYLE</p><h2>Casual looks for every day.</h2><p>Explore versatile fashion pieces for everyday wear, work, weekends and casual occasions.</p><a className="btn" href="#products">SHOP FASHION →</a></div><img src={images.active} alt="Everyday fashion"/></section>

<section className="feature light"><img src={images.dresses} alt="Fashion dress"/><div><p className="eyebrow pink">DRESSES</p><h2>Make an impression.</h2><p>Browse dress styles and contact the boutique to confirm available designs, sizes and stock.</p><a className="btn pinkBtn" href={wa}>ASK ON WHATSAPP →</a></div></section>

<section className="feature dark"><div><p className="eyebrow">ACCESSORIES</p><h2>Complete the look.</h2><p>Pair your outfits with shoes, handbags and accessories from the available collection.</p><a className="btn" href="#products">BROWSE ACCESSORIES →</a></div><img src={images.bags} alt="Fashion accessories"/></section>

<section id="contact" className="contact"><div><p className="eyebrow pink">VISIT GRACE’S CLOSET</p><h2>Find us in Harare.</h2><p><b>88 Central Ave (Waves Plaza)</b><br/>Harare, Zimbabwe</p><p><b>Also at Galaxy Mall</b></p><p><a href="tel:+263775499059">077 549 9059</a></p><p>Opening hours: to be confirmed.</p><a className="btn pinkBtn" href={wa}>CHAT ON WHATSAPP →</a></div><div className="map"><div className="pin">●</div><strong>Grace’s Closet</strong><span>Waves Plaza & Galaxy Mall, Harare</span><button>MAP LOCATIONS →</button></div></section>
</main>
<footer><div className="brand footerBrand">Grace’s<span>♥</span><small>CLOSET</small></div><p>Fashion • Everyday Style • Accessories</p><p>© 2026 Grace’s Closet</p></footer><WA/>
</div>}
createRoot(document.getElementById("root")).render(<App/>);
