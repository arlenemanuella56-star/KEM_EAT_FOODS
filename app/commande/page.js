'use client'
import { useState, useEffect } from 'react'

const WHATSAPP_NUMBER = 'TON_NUMERO_WHATSAPP' // ex: 33612345678 (sans le +)

const menu = [
  // CAMEROUN
  { id: 1, nom: "Ndolé", prix: 12, categorie: "Cameroun" },
  { id: 2, nom: "Eru", prix: 12, categorie: "Cameroun" },
  { id: 3, nom: "Poulet DG", prix: 14, categorie: "Cameroun" },
  { id: 4, nom: "Koki", prix: 8, categorie: "Cameroun" },
  { id: 5, nom: "Sauce Jaune", prix: 11, categorie: "Cameroun" },
  { id: 6, nom: "Mets de pistache", prix: 12, categorie: "Cameroun" },

  // CÔTE D'IVOIRE
  { id: 7, nom: "Kedjenou de poulet", prix: 13, categorie: "Côte d'Ivoire" },
  { id: 8, nom: "Garba", prix: 10, categorie: "Côte d'Ivoire" },
  { id: 9, nom: "Sauce graine", prix: 11, categorie: "Côte d'Ivoire" },

  // SÉNÉGAL
  { id: 10, nom: "Tchep poulet", prix: 13, categorie: "Sénégal" },
  { id: 11, nom: "Tchep poisson", prix: 13, categorie: "Sénégal" },
  { id: 12, nom: "Mafé", prix: 12, categorie: "Sénégal" },
  { id: 13, nom: "Yassa", prix: 12, categorie: "Sénégal" },

  // NIGERIA
  { id: 14, nom: "Jollof rice", prix: 11, categorie: "Nigeria" },
  { id: 15, nom: "Egusi soup", prix: 12, categorie: "Nigeria" },
  { id: 16, nom: "Suya", prix: 10, categorie: "Nigeria" },
  { id: 17, nom: "Pounded Yam and efo Riro", prix: 13, categorie: "Nigeria" },

  // BRÉSIL
  { id: 18, nom: "Feijoada", prix: 13, categorie: "Brésil" },
  { id: 19, nom: "Coxinha", prix: 8, categorie: "Brésil" },
  { id: 20, nom: "Pão de queijo", prix: 6, categorie: "Brésil" },

  // MEXIQUE
  { id: 21, nom: "Tacos", prix: 10, categorie: "Mexique" },
  { id: 22, nom: "Enchiladas", prix: 11, categorie: "Mexique" },
  { id: 23, nom: "Guacamole", prix: 6, categorie: "Mexique" },

  // PÉROU
  { id: 24, nom: "Ceviche", prix: 12, categorie: "Pérou" },
  { id: 25, nom: "Lomo saltado", prix: 13, categorie: "Pérou" },
  { id: 26, nom: "Aji de gallina", prix: 12, categorie: "Pérou" },

  // JAMAÏQUE
  { id: 27, nom: "Jerk chicken", prix: 13, categorie: "Jamaïque" },
  { id: 28, nom: "Rice and peas", prix: 9, categorie: "Jamaïque" },
  { id: 29, nom: "Ackee and saltfish", prix: 12, categorie: "Jamaïque" },

  // CUBA
  { id: 30, nom: "Ropa vieja", prix: 13, categorie: "Cuba" },
  { id: 31, nom: "Riz congrí", prix: 9, categorie: "Cuba" },
  { id: 32, nom: "Tostones", prix: 7, categorie: "Cuba" },

  // HAÏTI
  { id: 33, nom: "Griot", prix: 13, categorie: "Haïti" },
  { id: 34, nom: "Diri kole", prix: 9, categorie: "Haïti" },
  { id: 35, nom: "Soup joumou", prix: 10, categorie: "Haïti" },

  // ACCOMPAGNEMENTS
  { id: 36, nom: "Frites", prix: 4, categorie: "Accompagnements" },
  { id: 37, nom: "Alloco", prix: 4, categorie: "Accompagnements" },
  { id: 38, nom: "Taro", prix: 4, categorie: "Accompagnements" },
  { id: 39, nom: "Attiéké", prix: 4, categorie: "Accompagnements" },
  { id: 40, nom: "Riz", prix: 3, categorie: "Accompagnements" },
  { id: 41, nom: "Chikwang", prix: 4, categorie: "Accompagnements" },
  { id: 42, nom: "Bobolo", prix: 4, categorie: "Accompagnements" },
  { id: 43, nom: "Grillades variées", prix: 10, categorie: "Accompagnements" },

  // DESSERTS
  { id: 44, nom: "Kossam / Croquettes", prix: 5, categorie: "Desserts" },
  { id: 45, nom: "Caramel", prix: 4, categorie: "Desserts" },
  { id: 46, nom: "Caramel noix de coco", prix: 5, categorie: "Desserts" },
  { id: 47, nom: "Beignet Koki", prix: 5, categorie: "Desserts" },
  { id: 48, nom: "Rum cake", prix: 6, categorie: "Desserts" },
  { id: 49, nom: "Flan cubano", prix: 5, categorie: "Desserts" },
  { id: 50, nom: "Churros", prix: 5, categorie: "Desserts" },
  { id: 51, nom: "Brigadeiro", prix: 4, categorie: "Desserts" },
  { id: 52, nom: "Arroz con leche", prix: 5, categorie: "Desserts" },

  // ÉPICES
  { id: 53, nom: "Djanssang", prix: 5, categorie: "Épices" },
  { id: 54, nom: "Massep", prix: 4, categorie: "Épices" },
  { id: 55, nom: "Laurier", prix: 4, categorie: "Épices" },
  { id: 56, nom: "Clou de girofle", prix: 4, categorie: "Épices" },
  { id: 57, nom: "Herbes de Provence", prix: 4, categorie: "Épices" },
  { id: 58, nom: "Poivre blanc / noir", prix: 4, categorie: "Épices" },
  { id: 59, nom: "Cannelle", prix: 4, categorie: "Épices" },
  { id: 60, nom: "Mbongo", prix: 5, categorie: "Épices" },
  { id: 61, nom: "Piment Scotch Bonnet", prix: 4, categorie: "Épices" },
  { id: 62, nom: "Ail", prix: 3, categorie: "Épices" },
  { id: 63, nom: "Cumin", prix: 3, categorie: "Épices" },
  { id: 64, nom: "Chili en poudre", prix: 3, categorie: "Épices" },
  { id: 65, nom: "Origan", prix: 3, categorie: "Épices" },
  { id: 66, nom: "Rondelle/Pébé", prix: 3, categorie: "Épices" },

  // MARINADES
  { id: 67, nom: "Adobo mexicain", prix: 5, categorie: "Épices" },
  { id: 68, nom: "Tempero", prix: 5, categorie: "Épices" },
  { id: 69, nom: "Aji amarillo", prix: 5, categorie: "Épices" },
  { id: 71, nom: "Jerk seasoning", prix: 5, categorie: "Épices" },
  { id: 70, nom: "Sofrito", prix: 5, categorie: "Épices" },

  // BOISSONS
  { id: 72, nom: "Bissap", prix: 4, categorie: "Boissons" },
  { id: 73, nom: "Gingembre", prix: 4, categorie: "Boissons" },
  { id: 74, nom: "Tamarin", prix: 4, categorie: "Boissons" },
  { id: 75, nom: "Boisson au baobab", prix: 4, categorie: "Boissons" },
  { id: 76, nom: "Jus de mangue", prix: 4, categorie: "Boissons" },
  { id: 77, nom: "Eau de coco", prix: 4, categorie: "Boissons" },
  { id: 78, nom: "Jus de goyave", prix: 4, categorie: "Boissons" },
  { id: 79, nom: "Limonade cubaine", prix: 4, categorie: "Boissons" },
  { id: 80, nom: "Jus d'ananas", prix: 4, categorie: "Boissons" },
  { id: 81, nom: "Jus de corossol", prix: 4, categorie: "Boissons" },
  { id: 82, nom: "Jus de papaye", prix: 4, categorie: "Boissons" },
  { id: 83, nom: "Jus de citron vert", prix: 4, categorie: "Boissons" },
  { id: 84, nom: "Agua de sandía", prix: 4, categorie: "Boissons" },
  { id: 85, nom: "Horchata", prix: 4, categorie: "Boissons" },
  { id: 86, nom: "Jus de cajou", prix: 4, categorie: "Boissons" },
  { id: 87, nom: "Jus de maracujá", prix: 4, categorie: "Boissons" },
  { id: 88, nom: "Chicha morada", prix: 4, categorie: "Boissons" },
  { id: 89, nom: "Jus de lucuma", prix: 4, categorie: "Boissons" },
]

const categories = [...new Set(menu.map(p => p.categorie))]

export default function Commande() {
  // Panier partagé : tableau [{ name, img, prix, qty }] — même format que la page d'accueil
  const [cart, setCart] = useState([])
  const [infos, setInfos] = useState({ nom: '', telephone: '', adresse: '', message: '' })
  const [etape, setEtape] = useState(1)

  // Charge le panier partagé depuis localStorage au premier rendu côté client
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

  const ajouterAuPanier = (plat) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === plat.nom)
      if (existing) {
        return prev.map((i) =>
          i.name === plat.nom ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { name: plat.nom, img: null, prix: plat.prix, qty: 1 }]
    })
  }

  const retirerDuPanier = (plat) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === plat.nom)
      if (!existing) return prev
      if (existing.qty > 1) {
        return prev.map((i) =>
          i.name === plat.nom ? { ...i, qty: i.qty - 1 } : i
        )
      }
      return prev.filter((i) => i.name !== plat.nom)
    })
  }

  const getQty = (nom) => cart.find((i) => i.name === nom)?.qty || 0

  const totalItems = cart.reduce((a, i) => a + i.qty, 0)
  const totalPrix = cart.reduce((a, i) => a + i.prix * i.qty, 0)

  const panierDetails = cart.map((i) => `${i.name} x${i.qty} = ${i.prix * i.qty}€`).join('\n')

  const envoyerWhatsApp = () => {
    const message = `🛒 NOUVELLE COMMANDE KEM EAT FOODS\n\n👤 ${infos.nom}\n📞 ${infos.telephone}\n📍 ${infos.adresse}\n\n${panierDetails}\n\n💰 TOTAL: ${totalPrix}€\n\n💬 ${infos.message}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', background: '#F4EDE2', minHeight: '100vh' }}>
      <header style={{ background: 'rgba(244,237,226,0.95)', padding: '18px 40px', position: 'fixed', top: 0, width: '100%', zIndex: 1000, borderBottom: '1px solid #e0d6c7' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ fontWeight: 700, letterSpacing: '0.12em', textDecoration: 'none', color: '#1A1A1A' }}>KEM EAT FOODS</a>
          <span style={{ background: '#C28A4B', color: 'white', borderRadius: '999px', padding: '6px 16px', fontSize: 14 }}>
            🛒 {totalItems} article{totalItems > 1 ? 's' : ''} — {totalPrix}€
          </span>
        </div>
      </header>

      <div style={{ paddingTop: 90, maxWidth: 900, margin: '0 auto', padding: '90px 24px 40px' }}>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>Passez une commande</h1>
        <p style={{ color: '#666', marginBottom: 32 }}>Choisissez vos plats puis renseignez vos informations.</p>

        {etape === 1 && (
          <>
            {categories.map(cat => (
              <div key={cat} style={{ marginBottom: 32 }}>
                <h2 style={{ color: '#C28A4B', fontSize: 20, marginBottom: 16 }}>{cat}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
                  {menu.filter(p => p.categorie === cat).map(plat => (
                    <div key={plat.id} style={{ background: 'white', borderRadius: 12, padding: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                      <div style={{ fontWeight: 600, marginBottom: 4 }}>{plat.nom}</div>
                      <div style={{ color: '#C28A4B', fontWeight: 700, marginBottom: 12 }}>{plat.prix}€</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <button onClick={() => retirerDuPanier(plat)} style={{ width: 30, height: 30, borderRadius: '50%', border: '1px solid #ccc', background: 'white', cursor: 'pointer', fontSize: 16 }}>−</button>
                        <span style={{ fontWeight: 600 }}>{getQty(plat.nom)}</span>
                        <button onClick={() => ajouterAuPanier(plat)} style={{ width: 30, height: 30, borderRadius: '50%', border: 'none', background: '#C28A4B', color: 'white', cursor: 'pointer', fontSize: 16 }}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {totalItems > 0 && (
              <div style={{ position: 'fixed', bottom: 24, right: 24 }}>
                <button onClick={() => setEtape(2)} style={{ background: '#C28A4B', color: 'white', border: 'none', borderRadius: '999px', padding: '14px 28px', fontSize: 16, cursor: 'pointer', boxShadow: '0 4px 20px rgba(194,138,75,0.4)' }}>
                  Continuer ({totalItems} article{totalItems > 1 ? 's' : ''} — {totalPrix}€) →
                </button>
              </div>
            )}
          </>
        )}

        {etape === 2 && (
          <div style={{ background: 'white', borderRadius: 16, padding: 32, maxWidth: 600 }}>
            <h2 style={{ marginBottom: 24 }}>Vos informations</h2>
            {[
              { label: 'Nom complet', key: 'nom', type: 'text' },
              { label: 'Téléphone', key: 'telephone', type: 'tel' },
              { label: 'Adresse de livraison', key: 'adresse', type: 'text' },
            ].map(field => (
              <div key={field.key} style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, fontSize: 14 }}>{field.label}</label>
                <input
                  type={field.type}
                  value={infos[field.key]}
                  onChange={e => setInfos(prev => ({ ...prev, [field.key]: e.target.value }))}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #d2c6b5', fontSize: 14, fontFamily: 'inherit' }}
                />
              </div>
            ))}
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 6, fontWeight: 600, fontSize: 14 }}>Message (optionnel)</label>
              <textarea
                value={infos.message}
                onChange={e => setInfos(prev => ({ ...prev, message: e.target.value }))}
                rows={3}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #d2c6b5', fontSize: 14, fontFamily: 'inherit' }}
              />
            </div>

            <div style={{ background: '#F4EDE2', borderRadius: 12, padding: 16, marginBottom: 24 }}>
              <h3 style={{ marginBottom: 8 }}>Récapitulatif</h3>
              {cart.map((item) => (
                <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 14 }}>
                  <span>{item.name} x{item.qty}</span>
                  <span>{item.prix * item.qty}€</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #d2c6b5', marginTop: 8, paddingTop: 8, fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                <span>Total</span><span>{totalPrix}€</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setEtape(1)} style={{ flex: 1, padding: '12px', borderRadius: 999, border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>← Retour</button>
              <button onClick={envoyerWhatsApp} disabled={!infos.nom || !infos.telephone || !infos.adresse}
                style={{ flex: 2, padding: '12px', borderRadius: 999, border: 'none', background: infos.nom && infos.telephone && infos.adresse ? '#25D366' : '#ccc', color: 'white', cursor: 'pointer', fontWeight: 600 }}>
                📱 Envoyer via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}