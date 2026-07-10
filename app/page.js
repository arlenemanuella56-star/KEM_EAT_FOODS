'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name)
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { name: item.name, img: item.img, prix: item.prix, qty: 1 }]
    })
  }

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((i) => i.name !== name))
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = cart.reduce((sum, i) => sum + i.qty * (i.prix || 0), 0)

  // Charge le panier partagé (localStorage) au premier rendu côté client
  useEffect(() => {
    try {
      const stored = localStorage.getItem('kem_cart')
      if (stored) setCart(JSON.parse(stored))
    } catch (e) {
      console.error('Erreur de lecture du panier :', e)
    }
  }, [])

  // Sauvegarde le panier partagé à chaque modification
  useEffect(() => {
    try {
      localStorage.setItem('kem_cart', JSON.stringify(cart))
    } catch (e) {
      console.error('Erreur de sauvegarde du panier :', e)
    }
  }, [cart])

  useEffect(() => {
    let slides = document.querySelectorAll('.hero-slideshow .slide')
    let index = 0
    const changeSlide = () => {
      slides[index].classList.remove('active')
      index = (index + 1) % slides.length
      slides[index].classList.add('active')
    }
    const sliderInterval = setInterval(changeSlide, 4000)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const animatedCards = document.querySelectorAll('.card')
    animatedCards.forEach((card) => observer.observe(card))

    return () => {
      clearInterval(sliderInterval)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="site-title">
          <div className="logo">KEM EAT FOODS</div>
        </div>
        <nav className="nav">
          <a href="#accueil">Accueil</a>
          <a href="#histoire">Notre histoire</a>
          <a href="#prestations">Nos prestations</a>
          <a href="#specialites">Nos spécialités</a>
          <a href="#epicerie">Épicerie & épices</a>
          <a href="#marinades">Marinades</a>
          <a href="#boissons">Boissons</a>
          <a href="/commande">Commander</a>
          <a href="#contact">Contacts</a>
        </nav>
      </header>

      <button className="cart-float-button" onClick={() => setShowCart(true)}>
        🛒
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </button>

      <section id="accueil" className="hero">
        <div className="hero-slideshow">
          <img src="https://i.pinimg.com/736x/92/d2/3e/92d23e0dbcb48707480ade1cbbe7f24a.jpg" className="slide active" alt="slide1" />
          <img src="https://i.pinimg.com/736x/4a/e7/a3/4ae7a3449acbae5847fafe322f16b975.jpg" className="slide" alt="slide2" />
          <img src="https://i.pinimg.com/736x/58/69/0c/58690c9516a605c5b47f08df405d266c.jpg" className="slide" alt="slide3" />
          <img src="https://i.pinimg.com/736x/8b/da/46/8bda46e82b435038ec90dd46d196c773.jpg" className="slide" alt="slide4" />
          <img src="https://i.pinimg.com/736x/9e/3d/3c/9e3d3c48fd4801938dd9f7ffe0b0f4db.jpg" className="slide" alt="slide5" />
          <img src="https://i.pinimg.com/736x/fb/6c/ee/fb6ceedd074c863317d70f1c5202492c.jpg" className="slide" alt="slide6" />
          <img src="https://i.pinimg.com/1200x/69/7e/8a/697e8a1d1a5f916175c1383db9ea7c58.jpg" className="slide" alt="slide7" />
          <img src="https://i.pinimg.com/736x/b5/a6/39/b5a639244b88ddc15d08cd31afe23fb7.jpg" className="slide" alt="slide8" />
          <img src="https://i.pinimg.com/736x/cc/22/68/cc2268a6906ff1e0178af657aa4d71f4.jpg" className="slide" alt="slide9" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Voyage culinaire au cœur des Afriques</h1>
          <p>Plats à emporter, épices africaine, grillades, desserts et boissons traditionnelles.</p>
          <div style={{display: "flex", gap: "12px", flexWrap: "wrap", marginTop: '16px'}}>
            <a href="#prestations" className="btn-primary">Découvrir nos prestations</a>
            <a href="/commande" className="btn-primary" style={{ marginLeft: '12px' }}>🛒 Commander</a>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="trust-strip-inner">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7h11v9H3z" strokeLinejoin="round"/>
              <path d="M14 10h4l3 3v3h-7z" strokeLinejoin="round"/>
              <circle cx="7" cy="18" r="1.5"/>
              <circle cx="17.5" cy="18" r="1.5"/>
            </svg>
            <div>
              <strong>Livraison rapide</strong>
              <span>Partout en France</span>
            </div>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="6" width="18" height="13" rx="2"/>
              <path d="M3 10h18"/>
              <path d="M7 15h4"/>
            </svg>
            <div>
              <strong>Paiement sécurisé</strong>
              <span>Transactions protégées</span>
            </div>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L4.2 7.7l5.4-.8z" strokeLinejoin="round"/>
            </svg>
            <div>
              <strong>Épices 100% naturelles</strong>
              <span>Sélection artisanale</span>
            </div>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21s-7-4.4-9.5-8.9C.7 8.4 2.4 5 5.8 5c1.9 0 3.3 1 4.2 2.4C11 6 12.4 5 14.2 5c3.4 0 5.1 3.4 3.3 7.1C15 16.6 12 21 12 21z" strokeLinejoin="round"/>
            </svg>
            <div>
              <strong>Fait avec passion</strong>
              <span>Recettes traditionnelles</span>
            </div>
          </div>
        </div>
      </section>

      <section id="histoire" className="section section-light">
        <div className="section-inner two-cols">
          <div>
            <h2>Notre histoire</h2>
            <p className="histoire-accroche"><em>Une racine. Trois continents. Un seul goût de maison.</em></p>
            <p>KEM EAT FOODS raconte un seul et même voyage : celui d'une cuisine née en Afrique et portée, au fil de l'histoire, jusqu'aux Antilles et en Amérique latine. Sous des noms différents — Ndolé au Cameroun, Griot en Haïti, Feijoada au Brésil, Ceviche au Pérou — se cache souvent le même héritage : des épices transmises de génération en génération, un savoir-faire traditionnel, et cette générosité qui se retrouve à toutes les tables.</p>
            <p>Notre carte suit ce fil d'un continent à l'autre : les saveurs d'Afrique de l'Ouest et centrale (Cameroun, Côte d'Ivoire, Sénégal, Nigeria) dialoguent avec celles des Caraïbes (Jamaïque, Cuba, Haïti) et de l'Amérique latine (Brésil, Mexique, Pérou) — trois continents, une seule famille culinaire. Nos épices, nos marinades et nos boissons traditionnelles prolongent ce voyage jusque dans votre cuisine, pour que chaque plat continue de raconter cette histoire commune.</p>
          </div>
          <div className="image-block">
            <img src="https://i.pinimg.com/736x/9b/76/a4/9b76a4be024740444fb5db5f2f8af7e4.jpg" alt="Table africaine conviviale" />
          </div>
        </div>
      </section>

      <section id="prestations" className="section section-dark">
        <div className="section-inner">
          <h2>Nos prestations</h2>
          <div className="cards-row">
            <div className="card">
              <h3>Plats à emporter</h3>
              <p>Une carte variée de plats d'Afrique, des Antilles et d'Amérique latine prêts à déguster : sauces, ragoûts, grillades, accompagnements.</p>
            </div>
            <div className="card">
              <h3>Épicerie & marinades</h3>
              <p>Épices, marinades et produits typiques d'Afrique, des Caraïbes et d'Amérique latine pour cuisiner chez vous.</p>
            </div>
            <div className="card">
              <h3>Événements & réceptions</h3>
              <p>Buffets, plateaux et menus sur mesure pour vos événements privés ou professionnels.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="specialites" className="section section-light">
        <div className="section-inner">
          <h2>Nos spécialités</h2>

          {/* CAMEROUN */}
          <div className="special-block">
            <div className="special-header"><h3>Cameroun</h3></div>
            <div className="grid">
              {[
                { name: "Ndolé", desc: "Un plat signature du Cameroun : feuilles de ndolé mijotées avec arachides pilées et viande ou crevettes, pour une sauce riche et légèrement amère, pleine de caractère.", img: "https://i.pinimg.com/1200x/0e/92/a3/0e92a37772f91de30a3d6bb8cc4698dd.jpg", prix: 12 },
                { name: "Eru", desc: "Feuilles d'eru finement mijotées avec du water-fufu, viande fondante et épices traditionnelles — un classique réconfortant venu du Cameroun.", img: "https://i.pinimg.com/1200x/7b/ce/1b/7bce1b626095798dc7d014d2b18e27f6.jpg", prix: 12 },
                { name: "Koki", desc: "Un gâteau salé de haricot jaune, cuit tout en douceur à la vapeur dans des feuilles de bananier, pour une texture moelleuse et un parfum authentique.", img: "https://i.pinimg.com/736x/74/ec/e0/74ece0c8e1e2f0653d19eb02b850f8f1.jpg", prix: 8 },
                { name: "Poulet DG", desc: "Poulet mijoté longuement avec légumes de saison et plantains mûrs caramélisés, relevé d'épices camerounaises — la fête dans l'assiette.", img: "https://i.pinimg.com/1200x/ba/7a/e2/ba7ae2e6fc0f44c6c5d08ed2f2edc268.jpg", prix: 14 },
                { name: "Sauce Jaune", desc: "Une sauce traditionnelle dorée, parfumée aux épices locales, à savourer généreusement avec des plantains fondants.", img: "https://i.pinimg.com/736x/04/a4/ba/04a4ba05dcbc2d1d2ee8147ecb70cdd1.jpg", prix: 11 },
                { name: "Mets de pistache", desc: "Graines de courge finement moulues, mijotées avec viande ou poisson pour une sauce onctueuse et gourmande.", img: "https://i.pinimg.com/736x/c1/53/be/c153be2b325b43536de1c3489061b8b0.jpg", prix: 12 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CÔTE D'IVOIRE */}
          <div className="special-block">
            <div className="special-header"><h3>Côte d'Ivoire</h3></div>
            <div className="grid">
              {[
                { name: "Kedjenou de poulet", desc: "Poulet mijoté à l'étouffée avec des légumes, dans une marmite fermée qui concentre tous les arômes — la tradition ivoirienne à l'état pur.", img: "https://i.pinimg.com/736x/f6/b4/7a/f6b47af63dc0ff9d2e0017edc04e2316.jpg", prix: 13 },
                { name: "Garba", desc: "Attiéké moelleux accompagné de thon frit croustillant, oignons et piment frais — le grand classique de rue ivoirien, façon restaurant.", img: "/Garba.jpg", prix: 10 },
                { name: "Sauce graine", desc: "Un ragoût généreux à base de pulpe de noix de palme, servi avec du riz ou du foutou — riche, parfumé, typiquement ivoirien.", img: "https://i.pinimg.com/736x/63/e2/6c/63e26c664651936add9da3eefbaf740a.jpg", prix: 11 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SÉNÉGAL */}
          <div className="special-block">
            <div className="special-header"><h3>Sénégal</h3></div>
            <div className="grid">
              {[
                { name: "Tchep poulet", desc: "Riz sénégalais longuement parfumé, cuit avec du poulet fondant, légumes et épices locales — le Tchep dans toute sa générosité.", img: "https://i.pinimg.com/736x/fc/22/38/fc223831e6c221d91e319619730e5e6d.jpg", prix: 13 },
                { name: "Tchep poisson", desc: "Riz mijoté dans une sauce tomate épicée, accompagné de poisson et légumes fondants — un classique sénégalais plein de caractère.", img: "https://i.pinimg.com/1200x/d0/de/c6/d0dec6eb1737b5973cdcffeeebe20d9d.jpg", prix: 13 },
                { name: "Mafé", desc: "Un ragoût de viande mijoté longuement dans une sauce d'arachide onctueuse, pour un plat riche et réconfortant.", img: "https://i.pinimg.com/1200x/96/8e/da/968eda51a53f74fc43922037dde7d9ac.jpg", prix: 12 },
                { name: "Yassa", desc: "Poulet ou poisson nappé d'oignons caramélisés, citron et moutarde — l'équilibre parfait entre acidulé et fondant.", img: "https://i.pinimg.com/736x/64/2b/e9/642be9ae6285da6ac0fbc62e574316d8.jpg", prix: 12 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NIGERIA */}
          <div className="special-block">
            <div className="special-header"><h3>Nigeria</h3></div>
            <div className="grid">
              {[
                { name: "Egusi soup", desc: "Une soupe épaisse et parfumée, préparée avec des graines de melon moulues, légumes et viande — un incontournable nigérian.", img: "https://i.pinimg.com/736x/80/d7/2f/80d72f00f1a404c434b4ca0929d5bc5e.jpg", prix: 12 },
                { name: "Jollof rice", desc: "Riz mijoté dans une sauce tomate épicée, star incontestée des tables d'Afrique de l'Ouest.", img: "https://i.pinimg.com/1200x/0c/16/c5/0c16c570b9b9a2ba27aa15886e45486a.jpg", prix: 11 },
                { name: "Suya", desc: "Brochettes de viande épicée, grillées au feu pour une saveur fumée et relevée — un classique de rue nigérian revisité.", img: "https://i.pinimg.com/736x/55/39/30/553930667ae0469d00c1a881bf5c70b3.jpg", prix: 10 },
                { name: "Pounded Yam and efo Riro", desc: "Igname pilée moelleuse, servie avec une sauce épinards relevée et viande ou poisson — un duo généreux et traditionnel.", img: "https://i.pinimg.com/736x/b4/f1/bd/b4f1bd7bc9a1abb33ab84a63bdec483d.jpg", prix: 13 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BRÉSIL */}
          <div className="special-block">
            <div className="special-header"><h3>Brésil</h3></div>
            <div className="grid">
              {[
                { name: "Feijoada", desc: "Un ragoût de haricots noirs mijoté longuement avec de la viande, plat emblématique et généreux du Brésil.", img: "https://i.pinimg.com/736x/77/e9/40/77e9400dad11242fcc69994be9c2ebd5.jpg", prix: 13 },
                { name: "Coxinha", desc: "Beignets brésiliens dorés, fourrés d'un cœur de poulet effiloché fondant — le snack star du Brésil.", img: "https://i.pinimg.com/736x/33/81/f6/3381f6b021022c6f669bbf650c48a801.jpg", prix: 8 },
                { name: "Pão de queijo", desc: "Petits pains au fromage, moelleux à cœur et dorés à l'extérieur — une gourmandise brésilienne irrésistible.", img: "https://i.pinimg.com/1200x/55/63/bb/5563bbc9c3f2c9853a4eb039ce4f740b.jpg", prix: 6 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MEXIQUE */}
          <div className="special-block">
            <div className="special-header"><h3>Mexique</h3></div>
            <div className="grid">
              {[
                { name: "Tacos", desc: "Tortillas garnies de viande mijotée, légumes frais et sauces mexicaines maison — simple, généreux, savoureux.", img: "https://i.pinimg.com/736x/3b/37/d3/3b37d3af2c4a550bd296ee34aa980771.jpg", prix: 10 },
                { name: "Enchiladas", desc: "Tortillas roulées, généreusement garnies et nappées d'une sauce pimentée — un classique réconfortant du Mexique.", img: "https://i.pinimg.com/1200x/e7/ed/a2/e7eda2e8aeb4bd56995d1002aac19ba8.jpg", prix: 11 },
                { name: "Guacamole", desc: "Une purée d'avocat crémeuse, relevée de citron, oignon et coriandre fraîche — la fraîcheur mexicaine par excellence.", img: "https://i.pinimg.com/1200x/ce/e9/e0/cee9e0cd60519ad0fc79f7ee36c671b2.jpg", prix: 6 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PÉROU */}
          <div className="special-block">
            <div className="special-header"><h3>Pérou</h3></div>
            <div className="grid">
              {[
                { name: "Ceviche", desc: "Poisson frais mariné minute dans un citron vert acidulé, oignons rouges et piment — la fraîcheur péruvienne dans toute sa pureté.", img: "https://i.pinimg.com/1200x/e9/9f/b7/e99fb7102604e2a17a6be5d061d37260.jpg", prix: 12 },
                { name: "Lomo saltado", desc: "Un sauté de bœuf tendre avec oignons, tomates et frites croustillantes — la fusion péruvienne à son meilleur.", img: "https://i.pinimg.com/1200x/02/7c/d6/027cd6fd2e5e47cb9965436373432d7e.jpg", prix: 13 },
                { name: "Aji de gallina", desc: "Poulet effiloché enrobé d'une sauce crémeuse au piment jaune péruvien — doux, réconfortant, savoureux.", img: "https://i.pinimg.com/736x/f0/d4/59/f0d45904f9b3f044d2521b9d2f2113ce.jpg", prix: 12 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* JAMAÏQUE */}
          <div className="special-block">
            <div className="special-header"><h3>Jamaïque</h3></div>
            <div className="grid">
              {[
                { name: "Jerk chicken", desc: "Poulet mariné puis grillé dans un mélange d'épices jamaïcaines intenses — fumé, épicé, inoubliable.", img: "https://i.pinimg.com/736x/8c/3d/cd/8c3dcd5017c2393929ab5a301650c431.jpg", prix: 13 },
                { name: "Rice and peas", desc: "Riz mijoté au lait de coco et haricots rouges, parfumé au thym — l'accompagnement signature jamaïcain.", img: "https://i.pinimg.com/1200x/4e/31/69/4e3169c2874698b6d41d7f6f46f6e556.jpg", prix: 9 },
                { name: "Ackee and saltfish", desc: "Le plat national jamaïcain : ackee crémeux et morue salée, pour une texture surprenante et pleine de saveurs.", img: "https://i.pinimg.com/1200x/b9/c7/b4/b9c7b4f71125b3b0f1788121dc4cd503.jpg", prix: 12 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CUBA */}
          <div className="special-block">
            <div className="special-header"><h3>Cuba</h3></div>
            <div className="grid">
              {[
                { name: "Ropa vieja", desc: "Bœuf effiloché mijoté longuement dans une sauce tomate aux poivrons — un classique cubain fondant et réconfortant.", img: "https://i.pinimg.com/1200x/87/42/b5/8742b5249abc800060229a82e342e33a.jpg", prix: 13 },
                { name: "Riz congrí", desc: "Riz et haricots noirs mijotés ensemble, assaisonnés à la cubaine — simple et savoureux.", img: "https://i.pinimg.com/1200x/01/ef/98/01ef98536eca69a92513c9fb2f7d8dc8.jpg", prix: 9 },
                { name: "Tostones", desc: "Bananes plantain frites deux fois, dorées et croustillantes à souhait — l'accompagnement incontournable cubain.", img: "https://i.pinimg.com/1200x/6d/3e/e2/6d3ee2b3f62193e3273743f66fd75e69.jpg", prix: 7 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HAÏTI */}
          <div className="special-block">
            <div className="special-header"><h3>Haïti</h3></div>
            <div className="grid">
              {[
                { name: "Griot", desc: "Morceaux de porc marinés puis frits jusqu'à devenir bien croustillants — un incontournable de la table haïtienne.", img: "https://i.pinimg.com/1200x/72/1c/78/721c7834053a663dd6a497cfc9ed2055.jpg", prix: 13 },
                { name: "Diri kole", desc: "Riz et haricots rouges mijotés ensemble, assaisonnés à la haïtienne — réconfortant et généreux.", img: "https://i.pinimg.com/1200x/16/83/4f/16834f929f5aca2a7c3240f2b7306b12.jpg", prix: 9 },
                { name: "Soup joumou", desc: "Une soupe traditionnelle à la courge, symbole de liberté en Haïti, mijotée avec soin et partagée en famille.", img: "https://i.pinimg.com/1200x/a1/e7/9d/a1e79d153f8c0ad18d675166d487b09d.jpg", prix: 10 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACCOMPAGNEMENTS & GRILLADES */}
          <div className="special-block">
            <div className="special-header"><h3>Accompagnements & grillades</h3></div>
            <div className="grid">
              {[
                { name: "Frites", img: "https://i.pinimg.com/736x/eb/81/ca/eb81cae87bf7b7470de9a7db3a816cce.jpg", prix: 4 },
                { name: "Alloco", img: "https://i.pinimg.com/736x/b2/93/91/b29391e690b717990ffb72dbc554877d.jpg", prix: 4 },
                { name: "Taro", img: "https://i.pinimg.com/1200x/9e/0f/aa/9e0faa52fb25f3cfc7f72a2a4d4feb36.jpg", prix: 4 },
                { name: "Attiéké", img: "https://i.pinimg.com/736x/c7/71/3b/c7713b76e91369984c1b70319a4e569f.jpg", prix: 4 },
                { name: "Riz", img: "https://i.pinimg.com/1200x/76/42/29/764229ec9ac84351020f02ec8fd5a4db.jpg", prix: 3 },
                { name: "Chikwang", img: "https://i.pinimg.com/1200x/82/3e/fc/823efcb23e60b265421b9724a2cac87b.jpg", prix: 4 },
                { name: "Bobolo", img: "https://i.pinimg.com/1200x/bd/0c/a5/bd0ca529f757c554415a75b3a73979b6.jpg", prix: 4 },
                { name: "Grillades variées", img: "https://i.pinimg.com/control1/736x/f9/3e/31/f93e314e524455b83e6c3aafceb80e4f.jpg", prix: 10 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESSERTS */}
          <div className="special-block">
            <div className="special-header"><h3>Desserts</h3></div>
            <div className="grid">
              {[
                { name: "Kossam / Croquettes", img: "https://i.pinimg.com/1200x/33/2f/b3/332fb3de650294314988636e63059087.jpg", prix: 5 },
                { name: "Caramel", img: "https://i.pinimg.com/736x/e6/e1/27/e6e1275a18689da554a7cccbb1a8b0d4.jpg", prix: 4 },
                { name: "Caramel noix de coco", img: "https://i.pinimg.com/1200x/3a/fb/92/3afb9272e74024fdcca79812369a9a49.jpg", prix: 5 },
                { name: "Beignet Koki", img: "https://i.pinimg.com/736x/6f/42/64/6f4264af51d7af8bc4af5ed4bfe1bccc.jpg", prix: 5 },
                { name: "Rum cake", img: "https://i.pinimg.com/1200x/b8/e4/21/b8e421c5b746fa0ec470a2398891d06f.jpg", prix: 6 },
                { name: "Flan cubano", img: "https://i.pinimg.com/1200x/00/f3/96/00f396fd481ecdeafc2a75269a937ea8.jpg", prix: 5 },
                { name: "Churros", img: "https://i.pinimg.com/736x/a1/57/09/a15709c858f07753d10d34ad2d058d50.jpg", prix: 5 },
                { name: "Brigadeiro", img: "https://i.pinimg.com/1200x/54/53/cb/5453cbd4075a7a2e35651070d4f91fc2.jpg", prix: 4 },
                { name: "Arroz con leche", img: "https://i.pinimg.com/736x/68/5d/6b/685d6b94405191c19545e86eda303499.jpg", prix: 5 },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="product-image-wrap">
                    <img src={item.img} alt={item.name} />
                    <div className="hover-overlay">
                      <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                      <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="epicerie" className="section section-dark">
        <div className="section-inner">
          <h2>Épicerie & épices</h2>
          <p className="section-intro">Une sélection d'épices africaines pour sublimer vos plats : épaississants, exhausteurs de goût, herbes aromatiques et mélanges piquants.</p>
          <div className="grid">
            {[
              { name: "Djanssang", desc: "Graines oléagineuses moulues, prisées pour épaissir et intensifier le goût des sauces mijotées.", img: "https://i.pinimg.com/1200x/be/30/6f/be306f652906cbd01f5a9bd78873b37a.jpg", prix: 5 },
              { name: "Massep", desc: "Un basilic tropical parfumé, star discrète de la cuisine africaine, aux notes fraîches et légèrement anisées.", img: "https://i.pinimg.com/736x/b4/2a/53/b42a53a475788a40ca4cef16f1bbd18a.jpg", prix: 4 },
              { name: "Laurier / Paprika", desc: "Un duo aromatique pour parfumer bouillons, marinades, viandes blanches, poissons et légumes avec finesse.", img: "https://i.pinimg.com/1200x/d7/54/8f/d7548f0cba84b966c6a3bf1b7e92f239.jpg", prix: 4 },
              { name: "Clou de girofle", desc: "Une épice chaude et parfumée, indispensable pour sublimer sauces, marinades et plats mijotés.", img: "https://i.pinimg.com/1200x/26/be/4e/26be4eead802bf267b9e82714e297bb0.jpg", prix: 4 },
              { name: "Herbes de Provence / Djindja", desc: "Un mélange aromatique relevé d'une pointe de racine piquante, pour twister vos préparations du quotidien.", img: "https://i.pinimg.com/736x/bc/a2/9c/bca29c9d25fa8223a261354a6c0e0c2f.jpg", prix: 4 },
              { name: "Poivre blanc / noir", desc: "Pour un piquant maîtrisé et des arômes préservés jusqu'à l'assiette.", img: "https://i.pinimg.com/1200x/b9/2d/0c/b92d0cb4d420b1bdb669a3472b129ba0.jpg", prix: 4 },
              { name: "Cannelle", desc: "Une épice douce et chaleureuse, pour des sauces riches et parfumées.", img: "https://i.pinimg.com/736x/ed/e4/3c/ede43c48bb9bb2cf36f30392f3668fbd.jpg", prix: 4 },
              { name: "Mbongo", desc: "L'épice incontournable des grillades et sauces noires camerounaises, au parfum fumé et intense.", img: "https://i.pinimg.com/1200x/da/f6/a1/daf6a1dfd01ea58c1bbd531986cf1294.jpg", prix: 5 },
              { name: "Piment Scotch Bonnet", desc: "Le piment jamaïcain par excellence : fruité, intense, pour marinades et grillades qui ne manquent pas de caractère.", img: "https://i.pinimg.com/1200x/b2/18/2b/b2182bc68fa94fcdbd0b64b7e2e26932.jpg", prix: 4 },
              { name: "Thym", desc: "Une herbe aromatique essentielle, indispensable dans les plats jamaïcains et caribéens.", img: "https://i.pinimg.com/736x/22/3e/1c/223e1c8fc46c131473d141b0485eb30e.jpg", prix: 4 },
              { name: "Ail", desc: "La base aromatique incontournable de la cuisine cubaine, pour parfumer chaque plat en profondeur.", img: "https://i.pinimg.com/1200x/27/0d/4f/270d4f74ff32b4355cbcc67a58d22272.jpg", prix: 3 },
              { name: "Cumin", desc: "Une épice chaude et enveloppante, parfaite pour sublimer viandes et plats de haricots.", img: "https://i.pinimg.com/1200x/26/23/f9/2623f98fe270a60a849765a4a191dcad.jpg", prix: 3 },
              { name: "Clou de girofle haïtien", desc: "Une épice chaude et parfumée, essentielle dans les marinades et bouillons haïtiens.", img: "https://i.pinimg.com/736x/78/8d/76/788d76de6e610f5a76b77e2d43eaf39d.jpg", prix: 4 },
              { name: "Chili en poudre", desc: "Un mélange de piments séchés, base incontournable des plats mexicains les plus relevés.", img: "https://i.pinimg.com/736x/1d/84/64/1d84647ab5f31486554510d4d534ebfe.jpg", prix: 3 },
              { name: "Origan", desc: "Une herbe séchée aux notes méditerranéennes, star des tacos, sauces et grillades.", img: "https://i.pinimg.com/1200x/93/3f/5c/933f5cf4d861c2c962621721d3b9d8d0.jpg", prix: 3 },
              { name: "Rondelle/Pébé", desc: "Des rondelles d'épices savoureuses qui libèrent progressivement leurs arômes, pour une touche authentique à chaque plat du quotidien.", img: "https://i.pinimg.com/1200x/45/07/a7/4507a77ded7fa668a147b14435ffa824.jpg", prix: 3 },
              { name: "Aji amarillo", desc: "Le piment jaune péruvien, doux et parfumé, avec juste ce qu'il faut de piquant.", img: "https://i.pinimg.com/736x/ce/3d/3c/ce3d3c7ec3d550bf6cf936c4470c3f5a.jpg", prix: 5 },
              { name: "Poivre long", desc: "Une épice aux arômes intenses et raffinés, pour sublimer viandes, poissons, sauces et plats mijotés.", img: "https://i.pinimg.com/1200x/6e/59/33/6e593369904bd5ce710d95789d2aef01.jpg", prix: 5 },
              { name: "Gousses de caroubes/Quatre-côtés", desc: "Une épice africaine aux notes chaudes et parfumées, idéale pour relever plats, sauces et infusions traditionnelles.", img: "https://i.pinimg.com/736x/82/25/d6/8225d6abcba577d316a886942b9f6f38.jpg", prix: 5 },
              { name: "Potasse", desc: "Un ingrédient traditionnel de la cuisine africaine, pour attendrir les aliments et épaissir sauces et légumineuses.", img: "/potasse.png", prix: 4 }
            ].map((item) => (
              <div className="card" key={item.name}>
                <h3>{item.name}</h3>
                <div className="product-image-wrap">
                  <img src={item.img} alt={item.name} />
                  <div className="hover-overlay">
                    <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                    <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>
      
      <section id="marinades" className="section section-light">
        <div className="section-inner">
          <h2>Marinades</h2>
          <p className="section-intro">Des marinades traditionnelles pour parfumer viandes, poissons et légumes avant cuisson, inspirées des cuisines africaine, caribéenne et latino-américaine.</p>
          <div className="grid">
            {[
              { name: "Adobo mexicain", desc: "Piments séchés, ail, vinaigre, origan et cumin réunis dans une marinade mexicaine généreuse et parfumée.", img: "https://i.pinimg.com/1200x/0b/2d/7a/0b2d7aa9d2f79b3f7e3d8ea7e6d275d5.jpg", prix: 5 },
              { name: "Tempero", desc: "Ail, oignon, coriandre et huile réunis dans une marinade brésilienne pleine de fraîcheur.", img: "https://i.pinimg.com/736x/a0/e8/39/a0e839aa39b249f25c8ebf7bf4c88322.jpg", prix: 5 },
              { name: "Sauce Aji Amarillo", desc: "Piment jaune, oignon, ail, citron et huile — une sauce péruvienne relevée et parfumée.", img: "https://i.pinimg.com/736x/3e/d0/d4/3ed0d440ae5d09fedce56d589dd9d8c1.jpg", prix: 5 },
              { name: "Sofrito", desc: "Ail, oignon, poivron, tomate et huile d'olive mijotés ensemble — la base aromatique par excellence des Caraïbes.", img: "https://i.pinimg.com/1200x/fc/e5/5e/fce55e38b7a65d6c2ec76dd680b4299b.jpg", prix: 5 },
              { name: "Jerk seasoning", desc: "Piment, ail, oignon, thym, muscade, cannelle et sucre brun — le mélange jamaïcain signature, fumé et épicé.", img: "https://i.pinimg.com/736x/31/cf/13/31cf13224a584d9a7d0530854829359c.jpg", prix: 5 }
            ].map((item) => (
              <div className="card" key={item.name}>
                <h3>{item.name}</h3>
                <div className="product-image-wrap">
                  <img src={item.img} alt={item.name} />
                  <div className="hover-overlay">
                    <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                    <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="boissons" className="section section-light">
        <div className="section-inner">
          <h2>Boissons</h2>
          <div className="grid">
            {[
              { name: "Bissap", desc: "Fleur d'hibiscus infusée, sucrée et parfumée — la boisson rafraîchissante par excellence d'Afrique de l'Ouest.", img: "https://i.pinimg.com/736x/38/a8/fa/38a8fa2f73904f6e015eb65bea8405c6.jpg", prix: 4 },
              { name: "Boisson au baobab", desc: "Poudre de baobab infusée, douce et légèrement acidulée, pour une pause fraîcheur pleine de vitamines.", img: "https://i.pinimg.com/236x/9d/ed/00/9ded00ff55c74c57d1c0e86d6d5160ee.jpg", prix: 4 },
              { name: "Gingembre", desc: "Gingembre frais infusé, vif et tonique — une boisson qui réveille les papilles.", img: "https://i.pinimg.com/736x/19/30/d5/1930d534161cac21d6c468b3df488c78.jpg", prix: 4 },
              { name: "Tamarin", desc: "Tamarin infusé, entre douceur et acidité, pour une boisson traditionnelle rafraîchissante.", img: "https://i.pinimg.com/736x/7d/7c/11/7d7c115e3b781bf8fedde1e7c0117c9f.jpg", prix: 4 },
              { name: "Jus de mangue", desc: "Un jus doux et fruité, pressé à partir de mangues bien mûres.", img: "https://i.pinimg.com/736x/2d/2b/e5/2d2be5b4042ddea128e748a65bebf459.jpg", prix: 4 },
              { name: "Jus de coco", desc: "Une boisson hydratante et rafraîchissante, 100% naturelle, pour une pause tropicale.", img: "https://i.pinimg.com/736x/85/b1/eb/85b1eb27363cc5f2e0dd6cd854fbe4c5.jpg", prix: 4 },
              { name: "Jus de goyave", desc: "Un jus tropical doux et parfumé, aux notes fruitées irrésistibles.", img: "https://i.pinimg.com/736x/bb/d8/46/bbd8466bf6e59601ff9c0a06906b9753.jpg", prix: 4 },
              { name: "Limonade cubaine", desc: "Citron pressé, sucre et eau glacée — la fraîcheur cubaine dans un verre.", img: "https://i.pinimg.com/736x/d1/0f/38/d10f381dfa16278b10aa4d83096a877a.jpg", prix: 4 },
              { name: "Jus d'ananas", desc: "Un jus tropical sucré et désaltérant, plein de soleil.", img: "https://i.pinimg.com/736x/6e/9a/36/6e9a3659956f231eb458b368d82a2676.jpg", prix: 4 },
              { name: "Jus de corossol", desc: "Un jus crémeux et parfumé à base de corossol, pour une touche d'exotisme.", img: "https://i.pinimg.com/736x/e0/4b/1b/e04b1be7266c6bdc9f2890f4ec47f449.jpg", prix: 4 },
              { name: "Jus de papaye", desc: "Un jus doux et onctueux, riche en vitamines et en douceur.", img: "https://i.pinimg.com/736x/4d/b6/30/4db630ec99d6ab3230cd3f1ef2ec50ef.jpg", prix: 4 },
              { name: "Jus de citron vert", desc: "Citron vert pressé et sucré, pour une boisson fraîche et acidulée.", img: "https://i.pinimg.com/736x/15/0a/5e/150a5e8beae0bdbc3a0e2d8c95c65a2b.jpg", prix: 4 },
              { name: "Agua de sandía", desc: "Pastèque fraîche mixée, pour une boisson ultra-rafraîchissante venue d'Amérique latine.", img: "https://i.pinimg.com/736x/20/3d/03/203d03851eaaefba8c5ee17c90cde08f.jpg", prix: 4 },
              { name: "Horchata", desc: "Une boisson de riz parfumée à la cannelle et légèrement sucrée, douce et réconfortante.", img: "https://i.pinimg.com/736x/00/da/13/00da130fe2fd41bb12d3f04380fde224.jpg", prix: 4 },
              { name: "Jus de cajou", desc: "Un jus doux et fruité, pressé à partir de la pomme de cajou.", img: "https://i.pinimg.com/736x/6a/03/39/6a03393d62911fdaf314f3e6dde3823f.jpg", prix: 4 },
              { name: "Jus de maracujá", desc: "Un jus de fruit de la passion acidulé et parfumé, plein de caractère.", img: "https://i.pinimg.com/736x/2e/10/50/2e1050aee6c3096743e57a0ff7e63890.jpg", prix: 4 },
              { name: "Chicha morada", desc: "Une boisson de maïs violet infusée aux épices et au citron, typique du Pérou.", img: "https://i.pinimg.com/1200x/00/19/9e/00199ee629c0aaf2da22eaa26f8a1acb.jpg", prix: 4 },
              { name: "Jus de lucuma", desc: "Un jus crémeux et doux, à base du fruit lucuma, star des boissons péruviennes.", img: "https://i.pinimg.com/736x/e8/8d/cd/e88dcd537cd04490adb8723b7a787e76.jpg", prix: 4 },
            ].map((item) => (
              <div className="card" key={item.name}>
                <h3>{item.name}</h3>
                <div className="product-image-wrap">
                  <img src={item.img} alt={item.name} />
                  <div className="hover-overlay">
                    <button className="overlay-btn overlay-buy" onClick={() => { addToCart(item); setShowCart(true) }}>Acheter</button>
                    <button className="overlay-btn overlay-details" onClick={() => setSelectedItem(item)}>Détails</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-contact">
        <div className="section-inner">
          <h2>Contacts & commandes</h2>
          <p>Pour une commande, un devis ou une collaboration, laissez-nous un message :</p>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Merci pour votre message !") }}>
            <div className="form-row">
              <input type="text" placeholder="Nom complet" />
              <input type="email" placeholder="Adresse e-mail" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Adresse postale" />
              <input type="text" placeholder="Numero" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Objet de la demande" />
            </div>
            <div className="form-row">
              <textarea rows="5" placeholder="Votre message"></textarea>
            </div>
            <button type="submit" className="btn-primary">Envoyer</button>
          </form>
        </div>
      </section>

      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div className="modal-content cart-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCart(false)}>×</button>
            <h3>Votre panier</h3>
            {cart.length === 0 ? (
              <p>Votre panier est vide pour le moment.</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.name}>
                      {item.img && <img src={item.img} alt={item.name} />}
                      <div className="cart-item-info">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-qty">Quantité : {item.qty} — {item.prix * item.qty} €</span>
                      </div>
                      <button className="cart-remove" onClick={() => removeFromCart(item.name)}>Retirer</button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">Total : {cartTotal} €</div>
                <a href="/commande" className="btn-primary cart-checkout">Passer commande</a>
              </>
            )}
          </div>
        </div>
      )}

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>×</button>
            <img src={selectedItem.img} alt={selectedItem.name} />
            <h3>{selectedItem.name}</h3>
            {selectedItem.desc && <p>{selectedItem.desc}</p>}
            <p className="modal-price">{selectedItem.prix} €</p>
            <button className="btn-add-cart" onClick={() => addToCart(selectedItem)}>Ajouter au panier</button>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© KEM EAT FOODS – Plats à emporter & Épices africaine</p>
      </footer>
    </>
  )
}