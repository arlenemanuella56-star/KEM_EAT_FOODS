'use client'
import { useState } from 'react'

const WHATSAPP_NUMBER = 'TON_NUMERO_WHATSAPP' // ex: 33612345678 (sans le +)
const EMAIL_CONTACT = 'TON_EMAIL@gmail.com'

const menu = [
  { id: 1, nom: "Ndolé", prix: 12, categorie: "Cameroun" },
  { id: 2, nom: "Eru", prix: 12, categorie: "Cameroun" },
  { id: 3, nom: "Poulet DG", prix: 14, categorie: "Cameroun" },
  { id: 4, nom: "Koki", prix: 8, categorie: "Cameroun" },
  { id: 5, nom: "Kedjenou de poulet", prix: 13, categorie: "Côte d'Ivoire" },
  { id: 6, nom: "Garba", prix: 10, categorie: "Côte d'Ivoire" },
  { id: 7, nom: "Tchep poulet", prix: 13, categorie: "Sénégal" },
  { id: 8, nom: "Tchep poisson", prix: 13, categorie: "Sénégal" },
  { id: 9, nom: "Mafé", prix: 12, categorie: "Sénégal" },
  { id: 10, nom: "Yassa", prix: 12, categorie: "Sénégal" },
  { id: 11, nom: "Jollof rice", prix: 11, categorie: "Nigeria" },
  { id: 12, nom: "Egusi soup", prix: 12, categorie: "Nigeria" },
  { id: 13, nom: "Bissap", prix: 4, categorie: "Boissons" },
  { id: 14, nom: "Gingembre", prix: 4, categorie: "Boissons" },
  { id: 15, nom: "Tamarin", prix: 4, categorie: "Boissons" },
]

const categories = [...new Set(menu.map(p => p.categorie))]

export default function Commande() {
  const [panier, setPanier] = useState({})
  const [infos, setInfos] = useState({ nom: '', telephone: '', adresse: '', message: '' })
  const [etape, setEtape] = useState(1)

  const ajouterAuPanier = (id) => {
    setPanier(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  const retirerDuPanier = (id) => {
    setPanier(prev => {
      const nouveau = { ...prev }
      if (nouveau[id] > 1) nouveau[id]--
      else delete nouveau[id]
      return nouveau
    })
  }

  const totalItems = Object.values(panier).reduce((a, b) => a + b, 0)
  const totalPrix = Object.entries(panier).reduce((acc, [id, qty]) => {
    const plat = menu.find(p => p.id === parseInt(id))
    return acc + plat.prix * qty
  }, 0)

  const panierDetails = Object.entries(panier).map(([id, qty]) => {
    const plat = menu.find(p => p.id === parseInt(id))
    return `${plat.nom} x${qty} = ${plat.prix * qty}€`
  }).join('\n')

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
                        <button onClick={() => retirerDuPanier(plat.id)} style={{ width: 30, height: 30, borderRadius: '50%', border: '1px solid #ccc', background: 'white', cursor: 'pointer', fontSize: 16 }}>−</button>
                        <span style={{ fontWeight: 600 }}>{panier[plat.id] || 0}</span>
                        <button onClick={() => ajouterAuPanier(plat.id)} style={{ width: 30, height: 30, borderRadius: '50%', border: 'none', background: '#C28A4B', color: 'white', cursor: 'pointer', fontSize: 16 }}>+</button>
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
              {Object.entries(panier).map(([id, qty]) => {
                const plat = menu.find(p => p.id === parseInt(id))
                return <div key={id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 14 }}>
                  <span>{plat.nom} x{qty}</span>
                  <span>{plat.prix * qty}€</span>
                </div>
              })}
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
