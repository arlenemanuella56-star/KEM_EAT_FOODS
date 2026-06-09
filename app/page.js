'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    let slides = document.querySelectorAll('.hero-slideshow .slide')
    let index = 0
    const changeSlide = () => {
      slides[index].classList.remove('active')
      index = (index + 1) % slides.length
      slides[index].classList.add('active')
    }
    const sliderInterval = setInterval(changeSlide, 4000)

    const animatedCards = document.querySelectorAll('.card')
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.9
      animatedCards.forEach(card => {
        const rect = card.getBoundingClientRect()
        if (rect.top < trigger) {
          card.style.opacity = 1
          card.style.transform = 'translateY(0)'
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      clearInterval(sliderInterval)
      window.removeEventListener('scroll', handleScroll)
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
          <a href="#boissons">Boissons</a>
          <a href="/commande">Commander</a>
          <a href="#contact">Contacts</a>
        </nav>
      </header>

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

      <section id="histoire" className="section section-light">
        <div className="section-inner two-cols">
          <div>
            <h2>Notre histoire</h2>
            <p>KEM EAT FOODS est un projet dédié à la <strong>vente de plats à emporter</strong> et d'<strong>épices africaines</strong>. Inspiré des cuisines camerounaise, ivoirienne, sénégalaise et nigériane, notre objectif est de faire découvrir des saveurs authentiques, généreuses et conviviales.</p>
            <p>De la sauce Ndolé au Thiep, en passant par le Jollof rice, chaque plat est préparé avec des épices sélectionnées et un savoir-faire traditionnel.</p>
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
              <p>Une carte variée de plats africains prêts à déguster : sauces, ragoûts, grillades, accompagnements.</p>
            </div>
            <div className="card">
              <h3>Épicerie africaine</h3>
              <p>Épices, graines, condiments et produits typiques pour cuisiner chez vous.</p>
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
                { name: "Ndolé", desc: "Plat emblématique à base de feuilles de ndolé, arachides et viande ou crevettes.", img: "https://i.pinimg.com/1200x/0e/92/a3/0e92a37772f91de30a3d6bb8cc4698dd.jpg" },
                { name: "Eru", desc: "Feuilles d'eru mélangées au water-fufu, viande et épices traditionnelles.", img: "https://i.pinimg.com/1200x/7b/ce/1b/7bce1b626095798dc7d014d2b18e27f6.jpg" },
                { name: "Koki", desc: "Gâteau salé de haricot jaune cuit à la vapeur dans des feuilles de bananier.", img: "https://i.pinimg.com/736x/74/ec/e0/74ece0c8e1e2f0653d19eb02b850f8f1.jpg" },
                { name: "Poulet DG", desc: "Poulet mijoté avec légumes, plantains mûrs et épices camerounaises.", img: "https://i.pinimg.com/1200x/ba/7a/e2/ba7ae2e6fc0f44c6c5d08ed2f2edc268.jpg" },
                { name: "Sauce Jaune", desc: "Sauce traditionnelle à base d'épices locales, souvent servie avec plantains.", img: "https://i.pinimg.com/736x/04/a4/ba/04a4ba05dcbc2d1d2ee8147ecb70cdd1.jpg" },
                { name: "Mets de pistache", desc: "Graines de courge moulues cuites avec viande ou poisson.", img: "https://i.pinimg.com/736x/c1/53/be/c153be2b325b43536de1c3489061b8b0.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* CÔTE D'IVOIRE */}
          <div className="special-block">
            <div className="special-header"><h3>Côte d'Ivoire</h3></div>
            <div className="grid">
              {[
                { name: "Kedjenou de poulet", desc: "Poulet mijoté à l'étouffée avec légumes, cuit dans une marmite fermée.", img: "https://i.pinimg.com/736x/f6/b4/7a/f6b47af63dc0ff9d2e0017edc04e2316.jpg" },
                { name: "Garba", desc: "Attiéké servi avec thon frit, oignons et piment frais.", img: "/Garba.jpg" },
                { name: "Sauce graine", desc: "Ragoût épais préparé avec la pulpe de noix de palme, servi avec riz ou foutou.", img: "https://i.pinimg.com/736x/63/e2/6c/63e26c664651936add9da3eefbaf740a.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* SÉNÉGAL */}
          <div className="special-block">
            <div className="special-header"><h3>Sénégal</h3></div>
            <div className="grid">
              {[
                { name: "Tchep poulet", desc: "Riz sénégalais parfumé, cuit avec poulet, légumes et épices locales.", img: "https://i.pinimg.com/736x/fc/22/38/fc223831e6c221d91e319619730e5e6d.jpg" },
                { name: "Tchep poisson", desc: "Riz cuit dans une sauce tomate épicée avec poisson et légumes.", img: "https://i.pinimg.com/1200x/d0/de/c6/d0dec6eb1737b5973cdcffeeebe20d9d.jpg" },
                { name: "Mafé", desc: "Ragoût de viande mijoté dans une sauce d'arachide onctueuse.", img: "https://i.pinimg.com/1200x/96/8e/da/968eda51a53f74fc43922037dde7d9ac.jpg" },
                { name: "Yassa", desc: "Plat à base d'oignons caramélisés, citron, moutarde et poulet ou poisson.", img: "https://i.pinimg.com/736x/64/2b/e9/642be9ae6285da6ac0fbc62e574316d8.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* NIGERIA */}
          <div className="special-block">
            <div className="special-header"><h3>Nigeria</h3></div>
            <div className="grid">
              {[
                { name: "Egusi soup", desc: "Soupe épaisse préparée avec graines de melon moulues, légumes et viande.", img: "https://i.pinimg.com/736x/80/d7/2f/80d72f00f1a404c434b4ca0929d5bc5e.jpg" },
                { name: "Jollof rice", desc: "Riz cuit dans une sauce tomate épicée, très populaire en Afrique de l'Ouest.", img: "https://i.pinimg.com/1200x/0c/16/c5/0c16c570b9b9a2ba27aa15886e45486a.jpg" },
                { name: "Suya", desc: "Brochettes de viande épicée (souvent bœuf ou poulet) grillées au feu.", img: "https://i.pinimg.com/736x/55/39/30/553930667ae0469d00c1a881bf5c70b3.jpg" },
                { name: "Pounded Yam and efo Riro", desc: "Igname pilée servie avec une sauce aux légumes et viande/poisson.", img: "https://i.pinimg.com/736x/b4/f1/bd/b4f1bd7bc9a1abb33ab84a63bdec483d.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* BRÉSIL */}
          <div className="special-block">
            <div className="special-header"><h3>Brésil</h3></div>
            <div className="grid">
              {[
                { name: "Feijoada", desc: "Ragoût de haricots noirs avec viande, plat emblématique du Brésil.", img: "https://i.pinimg.com/736x/77/e9/40/77e9400dad11242fcc69994be9c2ebd5.jpg" },
                { name: "Coxinha", desc: "Beignets brésiliens fourrés au poulet effiloché.", img: "https://i.pinimg.com/736x/33/81/f6/3381f6b021022c6f669bbf650c48a801.jpg" },
                { name: "Pão de queijo", desc: "Petits pains au fromage, moelleux et populaires au Brésil.", img: "https://i.pinimg.com/1200x/55/63/bb/5563bbc9c3f2c9853a4eb039ce4f740b.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* MEXIQUE */}
          <div className="special-block">
            <div className="special-header"><h3>Mexique</h3></div>
            <div className="grid">
              {[
                { name: "Tacos", desc: "Tortillas garnies de viande, légumes et sauces mexicaines.", img: "https://i.pinimg.com/736x/3b/37/d3/3b37d3af2c4a550bd296ee34aa980771.jpg" },
                { name: "Enchiladas", desc: "Tortillas roulées, garnies et nappées de sauce pimentée.", img: "https://i.pinimg.com/1200x/e7/ed/a2/e7eda2e8aeb4bd56995d1002aac19ba8.jpg" },
                { name: "Guacamole", desc: "Purée d'avocat assaisonnée avec citron, oignon et coriandre.", img: "https://i.pinimg.com/1200x/ce/e9/e0/cee9e0cd60519ad0fc79f7ee36c671b2.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* PÉROU */}
          <div className="special-block">
            <div className="special-header"><h3>Pérou</h3></div>
            <div className="grid">
              {[
                { name: "Ceviche", desc: "Poisson cru mariné dans du citron vert, oignons et piment.", img: "https://i.pinimg.com/1200x/e9/9f/b7/e99fb7102604e2a17a6be5d061d37260.jpg" },
                { name: "Lomo saltado", desc: "Sauté de bœuf avec oignons, tomates et frites, plat fusion péruvien.", img: "https://i.pinimg.com/1200x/02/7c/d6/027cd6fd2e5e47cb9965436373432d7e.jpg" },
                { name: "Aji de gallina", desc: "Poulet effiloché dans une sauce crémeuse au piment jaune.", img: "https://i.pinimg.com/736x/f0/d4/59/f0d45904f9b3f044d2521b9d2f2113ce.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* JAMAÏQUE */}
          <div className="special-block">
            <div className="special-header"><h3>Jamaïque</h3></div>
            <div className="grid">
              {[
                { name: "Jerk chicken", desc: "Poulet mariné et grillé avec un mélange d'épices jamaïcaines.", img: "https://i.pinimg.com/736x/8c/3d/cd/8c3dcd5017c2393929ab5a301650c431.jpg" },
                { name: "Rice and peas", desc: "Riz cuit avec lait de coco et haricots rouges, parfumé au thym.", img: "https://i.pinimg.com/1200x/4e/31/69/4e3169c2874698b6d41d7f6f46f6e556.jpg" },
                { name: "Ackee and saltfish", desc: "Plat national jamaïcain à base d'ackee et de morue salée.", img: "https://i.pinimg.com/1200x/b9/c7/b4/b9c7b4f71125b3b0f1788121dc4cd503.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* CUBA */}
          <div className="special-block">
            <div className="special-header"><h3>Cuba</h3></div>
            <div className="grid">
              {[
                { name: "Ropa vieja", desc: "Bœuf effiloché mijoté dans une sauce tomate aux poivrons.", img: "https://i.pinimg.com/1200x/87/42/b5/8742b5249abc800060229a82e342e33a.jpg" },
                { name: "Riz congrí", desc: "Mélange de riz et haricots noirs, assaisonné à la cubaine.", img: "https://i.pinimg.com/1200x/01/ef/98/01ef98536eca69a92513c9fb2f7d8dc8.jpg" },
                { name: "Tostones", desc: "Bananes plantain frites deux fois, croustillantes et dorées.", img: "https://i.pinimg.com/1200x/6d/3e/e2/6d3ee2b3f62193e3273743f66fd75e69.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* HAÏTI */}
          <div className="special-block">
            <div className="special-header"><h3>Haïti</h3></div>
            <div className="grid">
              {[
                { name: "Griot", desc: "Morceaux de porc marinés, frits et servis croustillants.", img: "https://i.pinimg.com/1200x/72/1c/78/721c7834053a663dd6a497cfc9ed2055.jpg" },
                { name: "Diri kole", desc: "Riz aux haricots rouges, assaisonné à la haïtienne.", img: "https://i.pinimg.com/1200x/16/83/4f/16834f929f5aca2a7c3240f2b7306b12.jpg" },
                { name: "Soup joumou", desc: "Soupe traditionnelle à la courge, symbole de liberté en Haïti.", img: "https://i.pinimg.com/1200x/a1/e7/9d/a1e79d153f8c0ad18d675166d487b09d.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* ACCOMPAGNEMENTS & GRILLADES */}
          <div className="special-block">
            <div className="special-header"><h3>Accompagnements & grillades</h3></div>
            <div className="grid">
              {[
                { name: "Frites", img: "https://i.pinimg.com/736x/eb/81/ca/eb81cae87bf7b7470de9a7db3a816cce.jpg" },
                { name: "Alloco", img: "https://i.pinimg.com/736x/b2/93/91/b29391e690b717990ffb72dbc554877d.jpg" },
                { name: "Taro", img: "https://i.pinimg.com/1200x/9e/0f/aa/9e0faa52fb25f3cfc7f72a2a4d4feb36.jpg" },
                { name: "Attiéké", img: "https://i.pinimg.com/736x/c7/71/3b/c7713b76e91369984c1b70319a4e569f.jpg" },
                { name: "Riz", img: "https://i.pinimg.com/1200x/76/42/29/764229ec9ac84351020f02ec8fd5a4db.jpg" },
                { name: "Chikwang", img: "https://i.pinimg.com/1200x/82/3e/fc/823efcb23e60b265421b9724a2cac87b.jpg" },
                { name: "Bobolo", img: "https://i.pinimg.com/1200x/bd/0c/a5/bd0ca529f757c554415a75b3a73979b6.jpg" },
                { name: "Grillades variées", img: "https://i.pinimg.com/control1/736x/f9/3e/31/f93e314e524455b83e6c3aafceb80e4f.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

          {/* DESSERTS */}
          <div className="special-block">
            <div className="special-header"><h3>Desserts</h3></div>
            <div className="grid">
              {[
                { name: "Kossam / Croquettes", img: "https://i.pinimg.com/1200x/33/2f/b3/332fb3de650294314988636e63059087.jpg" },
                { name: "Caramel", img: "https://i.pinimg.com/736x/e6/e1/27/e6e1275a18689da554a7cccbb1a8b0d4.jpg" },
                { name: "Caramel noix de coco", img: "https://i.pinimg.com/1200x/3a/fb/92/3afb9272e74024fdcca79812369a9a49.jpg" },
                { name: "Beignet Koki", img: "https://i.pinimg.com/736x/6f/42/64/6f4264af51d7af8bc4af5ed4bfe1bccc.jpg" },
                { name: "Rum cake", img: "https://i.pinimg.com/1200x/b8/e4/21/b8e421c5b746fa0ec470a2398891d06f.jpg" },
                { name: "Flan cubano", img: "https://i.pinimg.com/1200x/00/f3/96/00f396fd481ecdeafc2a75269a937ea8.jpg" },
                { name: "Churros", img: "https://i.pinimg.com/736x/a1/57/09/a15709c858f07753d10d34ad2d058d50.jpg" },
                { name: "Brigadeiro", img: "https://i.pinimg.com/1200x/54/53/cb/5453cbd4075a7a2e35651070d4f91fc2.jpg" },
                { name: "Arroz con leche", img: "https://i.pinimg.com/736x/68/5d/6b/685d6b94405191c19545e86eda303499.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <img src={item.img} alt={item.name} />
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
              { name: "Djanssang", desc: "Graines oléagineuses utilisées comme épaississant et exhausteur de goût dans les sauces.", img: "https://i.pinimg.com/1200x/be/30/6f/be306f652906cbd01f5a9bd78873b37a.jpg" },
              { name: "Massep", desc: "Basilic tropical très présent dans la cuisine africaine, aux nombreuses vertus.", img: "https://i.pinimg.com/736x/b4/2a/53/b42a53a475788a40ca4cef16f1bbd18a.jpg" },
              { name: "Laurier / Paprika", desc: "Pour parfumer bouillons, marinades, viandes blanches, poissons et légumes.", img: "https://i.pinimg.com/1200x/d7/54/8f/d7548f0cba84b966c6a3bf1b7e92f239.jpg" },
              { name: "Clou de girofle / Thym", desc: "Épices et herbes pour sauces, marinades et plats mijotés.", img: "https://i.pinimg.com/1200x/26/be/4e/26be4eead802bf267b9e82714e297bb0.jpg" },
              { name: "Herbes de Provence / Djindja", desc: "Mélange aromatique et racine piquante pour relever vos préparations.", img: "https://i.pinimg.com/736x/bc/a2/9c/bca29c9d25fa8223a261354a6c0e0c2f.jpg" },
              { name: "Poivre blanc / noir", desc: "Pour un piquant maîtrisé et des arômes préservés jusqu'au service.", img: "https://i.pinimg.com/1200x/b9/2d/0c/b92d0cb4d420b1bdb669a3472b129ba0.jpg" },
              { name: "Rondelle / Cannelle", desc: "Graines et épices pour sauces riches et parfumées.", img: "https://i.pinimg.com/736x/ed/e4/3c/ede43c48bb9bb2cf36f30392f3668fbd.jpg" },
              { name: "Pébè / Mbongo", desc: "Épices incontournables des grillades et sauces noires camerounaises.", img: "https://i.pinimg.com/1200x/da/f6/a1/daf6a1dfd01ea58c1bbd531986cf1294.jpg" },
              { name: "Piment Scotch Bonnet", desc: "Piment jamaïcain extrêmement fort, utilisé dans les marinades et grillades.", img: "https://i.pinimg.com/1200x/b2/18/2b/b2182bc68fa94fcdbd0b64b7e2e26932.jpg" },
              { name: "Thym", desc: "Herbe aromatique essentielle dans les plats jamaïcains et caribéens.", img: "https://i.pinimg.com/736x/22/3e/1c/223e1c8fc46c131473d141b0485eb30e.jpg" },
              { name: "Jerk seasoning", desc: "Mélange épicé : piment, ail, oignon, thym, muscade, cannelle, sucre brun.", img: "https://i.pinimg.com/1200x/fb/84/54/fb8454642b08686da8cada236757461b.jpg" },
              { name: "Ail", desc: "Base aromatique incontournable dans la cuisine cubaine.", img: "https://i.pinimg.com/1200x/27/0d/4f/270d4f74ff32b4355cbcc67a58d22272.jpg" },
              { name: "Cumin", desc: "Épice chaude utilisée dans les plats de viande et haricots.", img: "https://i.pinimg.com/1200x/26/23/f9/2623f98fe270a60a849765a4a191dcad.jpg" },
              { name: "Sofrito", desc: "Mélange : ail, oignon, poivron, tomate, huile d'olive.", img: "https://i.pinimg.com/1200x/fc/e5/5e/fce55e38b7a65d6c2ec76dd680b4299b.jpg" },
              { name: "Clou de girofle haïtien", desc: "Épice chaude utilisée dans les marinades et bouillons haïtiens.", img: "https://i.pinimg.com/736x/78/8d/76/788d76de6e610f5a76b77e2d43eaf39d.jpg" },
              { name: "Chili en poudre", desc: "Mélange de piments séchés, base des plats mexicains.", img: "https://i.pinimg.com/736x/1d/84/64/1d84647ab5f31486554510d4d534ebfe.jpg" },
              { name: "Origan", desc: "Herbe séchée très utilisée dans tacos, sauces et viandes.", img: "https://i.pinimg.com/1200x/93/3f/5c/933f5cf4d861c2c962621721d3b9d8d0.jpg" },
              { name: "Adobo mexicain", desc: "Piments séchés, ail, vinaigre, origan, cumin.", img: "https://i.pinimg.com/736x/99/da/dc/99dadc27dcf12dd04ddabe0719674e4a.jpg" },
              { name: "Coriandre", desc: "Herbe fraîche très utilisée dans les plats brésiliens.", img: "https://i.pinimg.com/1200x/80/2c/df/802cdf23d3b1c6e2d816fb64c1122ffe.jpg" },
              { name: "Tempero", desc: "Mélange : ail + sel, oignon, coriandre, huile.", img: "https://i.pinimg.com/1200x/0b/64/92/0b6492206cd0ae5566b3014e7ff762e2.jpg" },
              { name: "Aji amarillo", desc: "Piment jaune péruvien, parfumé et légèrement piquant.", img: "https://i.pinimg.com/736x/ce/3d/3c/ce3d3c7ec3d550bf6cf936c4470c3f5a.jpg" },
              { name: "Sauce Aji Amarillo", desc: "Piment jaune, oignon, ail, citron, huile.", img: "https://i.pinimg.com/736x/3e/d0/d4/3ed0d440ae5d09fedce56d589dd9d8c1.jpg" },
              { name: "Poivre long", desc: "Épice aux arômes intenses et raffinés, idéale pour sublimer viandes, poissons, sauces et plats mijotés.",img: "https://i.pinimg.com/1200x/6e/59/33/6e593369904bd5ce710d95789d2aef01.jpg"},
              { name: "Gousses de caroubes/Quatre-côtés", desc: "Épice africaine aux arômes chauds et parfumés, appréciée pour relever les plats, les sauces et les infusions traditionnelles.", img:"https://i.pinimg.com/736x/82/25/d6/8225d6abcba577d316a886942b9f6f38.jpg"},
              { name: "Potasse", desc: "Ingrédient traditionnel utilisé en cuisine africaine pour attendrir les aliments, épaissir certaines sauces et faciliter la cuisson des légumes et légumineuses.", img: "/potasse.png" }
            ].map((item) => (
              <div className="card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <img src={item.img} alt={item.name} />
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
              { name: "Bissap", desc: "Fleur d'hibiscus, eau, sucre, lait (optionnel).", img: "https://i.pinimg.com/736x/38/a8/fa/38a8fa2f73904f6e015eb65bea8405c6.jpg" },
              { name: "Boisson au baobab", desc: "Poudre de baobab, eau, sucre, lait (optionnel).", img: "https://i.pinimg.com/236x/9d/ed/00/9ded00ff55c74c57d1c0e86d6d5160ee.jpg" },
              { name: "Gingembre", desc: "Gingembre frais, eau, jus de citron en option.", img: "https://i.pinimg.com/736x/19/30/d5/1930d534161cac21d6c468b3df488c78.jpg" },
              { name: "Tamarin", desc: "Tamarin, eau tiède, citron vert, sucre selon votre goût.", img: "https://i.pinimg.com/736x/7d/7c/11/7d7c115e3b781bf8fedde1e7c0117c9f.jpg" },
              { name: "Jus de mangue", desc: "Boisson douce et fruitée à base de mangue fraîche.", img: "https://i.pinimg.com/736x/2d/2b/e5/2d2be5b4042ddea128e748a65bebf459.jpg" },
              { name: "Eau de coco", desc: "Boisson hydratante et rafraîchissante, 100% naturelle.", img: "https://i.pinimg.com/736x/85/b1/eb/85b1eb27363cc5f2e0dd6cd854fbe4c5.jpg" },
              { name: "Jus de goyave", desc: "Boisson tropicale douce et parfumée.", img: "https://i.pinimg.com/736x/bb/d8/46/bbd8466bf6e59601ff9c0a06906b9753.jpg" },
              { name: "Limonade cubaine", desc: "Citron, sucre et eau glacée pour une boisson rafraîchissante.", img: "https://i.pinimg.com/736x/d1/0f/38/d10f381dfa16278b10aa4d83096a877a.jpg" },
              { name: "Jus d'ananas", desc: "Jus tropical sucré et désaltérant.", img: "https://i.pinimg.com/736x/6e/9a/36/6e9a3659956f231eb458b368d82a2676.jpg" },
              { name: "Jus de corossol", desc: "Boisson crémeuse et parfumée à base de soursop.", img: "https://i.pinimg.com/736x/e0/4b/1b/e04b1be7266c6bdc9f2890f4ec47f449.jpg" },
              { name: "Jus de papaye", desc: "Jus doux, onctueux et riche en vitamines.", img: "https://i.pinimg.com/736x/4d/b6/30/4db630ec99d6ab3230cd3f1ef2ec50ef.jpg" },
              { name: "Jus de citron vert", desc: "Citron vert sucré, boisson fraîche et acidulée.", img: "https://i.pinimg.com/736x/15/0a/5e/150a5e8beae0bdbc3a0e2d8c95c65a2b.jpg" },
              { name: "Agua de sandía", desc: "Boisson à la pastèque mixée, très rafraîchissante.", img: "https://i.pinimg.com/736x/20/3d/03/203d03851eaaefba8c5ee17c90cde08f.jpg" },
              { name: "Horchata", desc: "Boisson de riz parfumée à la cannelle et au sucre.", img: "https://i.pinimg.com/736x/00/da/13/00da130fe2fd41bb12d3f04380fde224.jpg" },
              { name: "Jus de cajou", desc: "Boisson douce et fruitée à base de pomme de cajou.", img: "https://i.pinimg.com/736x/6a/03/39/6a03393d62911fdaf314f3e6dde3823f.jpg" },
              { name: "Jus de maracujá", desc: "Jus de fruit de la passion, acidulé et parfumé.", img: "https://i.pinimg.com/736x/2e/10/50/2e1050aee6c3096743e57a0ff7e63890.jpg" },
              { name: "Chicha morada", desc: "Boisson de maïs violet avec épices et citron.", img: "https://i.pinimg.com/1200x/00/19/9e/00199ee629c0aaf2da22eaa26f8a1acb.jpg" },
              { name: "Jus de lucuma", desc: "Boisson crémeuse à base du fruit lucuma.", img: "https://i.pinimg.com/736x/e8/8d/cd/e88dcd537cd04490adb8723b7a787e76.jpg" },
            ].map((item) => (
              <div className="card" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <img src={item.img} alt={item.name} />
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

      <footer className="footer">
        <p>© KEM EAT FOODS – Plats à emporter & Épices africaine</p>
      </footer>
    </>
  )
}