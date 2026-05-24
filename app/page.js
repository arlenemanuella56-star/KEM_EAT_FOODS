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
        <div className="logo">KEM EAT FOODS</div>
        <nav className="nav">
          <a href="#accueil">Accueil</a>
          <a href="#histoire">Notre histoire</a>
          <a href="#prestations">Nos prestations</a>
          <a href="#specialites">Nos spécialités</a>
          <a href="#epicerie">Épicerie & épices</a>
          <a href="#boissons">Boissons</a>
          <a href="#contact">Contact</a>
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
          <h1>Voyage culinaire au cœur des Afrique</h1>
          <p>Plats à emporter, épicerie africaine, grillades, desserts et boissons traditionnelles.</p>
          <a href="#prestations" className="btn-primary">Découvrir nos prestations</a>
        </div>
      </section>

      <section id="histoire" className="section section-light">
        <div className="section-inner two-cols">
          <div>
            <h2>Notre histoire</h2>
            <p>KEM EAT FOODS est un projet dédié à la <strong>vente de plats à emporter</strong> et d'<strong>épicerie africaine</strong>. Inspiré des cuisines camerounaise, ivoirienne, sénégalaise et nigériane, notre objectif est de faire découvrir des saveurs authentiques, généreuses et conviviales.</p>
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

          <div className="special-block">
            <div className="special-header"><h3>Côte d'Ivoire</h3></div>
            <div className="grid">
              {[
                { name: "Kedjenou de poulet", desc: "Poulet mijoté à l'étouffée avec légumes, cuit dans une marmite fermée.", img: "https://i.pinimg.com/736x/56/7c/f9/567cf9675d6d442881e7a022c618f3d1.jpg" },
                { name: "Garba", desc: "Attiéké servi avec thon frit, oignons et piment frais.", img: "https://i.pinimg.com/736x/87/46/9e/87469e299c09df8c7112cdbcfcfc7e44.jpg" },
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

          <div className="special-block">
            <div className="special-header"><h3>Sénégal</h3></div>
            <div className="grid">
              {[
                { name: "Thiep poulet", desc: "Riz sénégalais parfumé, cuit avec poulet, légumes et épices locales.", img: "https://i.pinimg.com/736x/fc/22/38/fc223831e6c221d91e319619730e5e6d.jpg" },
                { name: "Thiep poisson", desc: "Riz cuit dans une sauce tomate épicée avec poisson et légumes.", img: "https://i.pinimg.com/1200x/d0/de/c6/d0dec6eb1737b5973cdcffeeebe20d9d.jpg" },
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

          <div className="special-block">
            <div className="special-header"><h3>Nigeria</h3></div>
            <div className="grid">
              {[
                { name: "Egusi soup", desc: "Soupe épaisse préparée avec graines de melon moulues, légumes et viande.", img: "https://i.pinimg.com/736x/80/d7/2f/80d72f00f1a404c434b4ca0929d5bc5e.jpg" },
                { name: "Jollof rice", desc: "Riz cuit dans une sauce tomate épicée, très populaire en Afrique de l'Ouest.", img: "https://i.pinimg.com/1200x/0c/16/c5/0c16c570b9b9a2ba27aa15886e45486a.jpg" },
              ].map((item) => (
                <div className="card" key={item.name}>
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
          </div>

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

          <div className="special-block">
            <div className="special-header"><h3>Desserts</h3></div>
            <div className="grid">
              {[
                { name: "Kossam / Croquettes", img: "https://i.pinimg.com/1200x/33/2f/b3/332fb3de650294314988636e63059087.jpg" },
                { name: "Caramel", img: "https://i.pinimg.com/736x/e6/e1/27/e6e1275a18689da554a7cccbb1a8b0d4.jpg" },
                { name: "Caramel noix de coco", img: "https://i.pinimg.com/1200x/3a/fb/92/3afb9272e74024fdcca79812369a9a49.jpg" },
                { name: "Beignet Koki", img: "https://i.pinimg.com/736x/6f/42/64/6f4264af51d7af8bc4af5ed4bfe1bccc.jpg" },
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
              { name: "Djanssang", desc: "Graines oléagineuses utilisées comme épaississant et exhausteur de goût dans les sauces.", img: "https://i.pinimg.com/1200x/ba/bf/3d/babf3d52fc1f00bb55c30822dba759e2.jpg" },
              { name: "Massep", desc: "Basilic tropical très présent dans la cuisine africaine, aux nombreuses vertus.", img: "https://i.pinimg.com/736x/b4/2a/53/b42a53a475788a40ca4cef16f1bbd18a.jpg" },
              { name: "Laurier / Paprika", desc: "Pour parfumer bouillons, marinades, viandes blanches, poissons et légumes.", img: "https://i.pinimg.com/1200x/d7/54/8f/d7548f0cba84b966c6a3bf1b7e92f239.jpg" },
              { name: "Clou de girofle / Thym", desc: "Épices et herbes pour sauces, marinades et plats mijotés.", img: "https://i.pinimg.com/1200x/26/be/4e/26be4eead802bf267b9e82714e297bb0.jpg" },
              { name: "Herbes de Provence / Djindja", desc: "Mélange aromatique et racine piquante pour relever vos préparations.", img: "https://i.pinimg.com/736x/bc/a2/9c/bca29c9d25fa8223a261354a6c0e0c2f.jpg" },
              { name: "Poivre blanc / noir", desc: "Pour un piquant maîtrisé et des arômes préservés jusqu'au service.", img: "https://i.pinimg.com/1200x/b9/2d/0c/b92d0cb4d420b1bdb669a3472b129ba0.jpg" },
              { name: "Rondelle / Cannelle", desc: "Graines et épices pour sauces riches et parfumées.", img: "https://i.pinimg.com/736x/ed/e4/3c/ede43c48bb9bb2cf36f30392f3668fbd.jpg" },
              { name: "Pébè / Mbongo", desc: "Épices incontournables des grillades et sauces noires camerounaises.", img: "https://i.pinimg.com/1200x/da/f6/a1/daf6a1dfd01ea58c1bbd531986cf1294.jpg" },
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
          <h2>Contact & commandes</h2>
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
        <p>© KEM EAT FOODS – Plats à emporter & Épicerie africaine</p>
      </footer>
    </>
  )
}