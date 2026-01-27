# Apartmány Šumava - Next.js Web

Moderní web pro dva apartmány na Šumavě (Prášily a Železná Ruda) vytvořený v Next.js s možností statického exportu.

## 🚀 Technologie

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animace)
- **Statický export** (připraveno pro klasický hosting)

## 📁 Struktura projektu

```
apartmany-sumava/
├── app/                          # Next.js stránky
│   ├── apartman/[slug]/         # Detail apartmánu (dynamická stránka)
│   ├── galerie/                 # Galerie s filtrem
│   ├── cenik/                   # Ceník
│   ├── kontakt/                 # Kontakt a FAQ
│   ├── okoli/                   # Tipy na výlety
│   ├── rezervace/               # Rezervační stránka
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Globální styly
├── components/                   # React komponenty
│   ├── Navbar.tsx               # Navigace
│   ├── Hero.tsx                 # Hero sekce
│   ├── ApartmentCard.tsx        # Karta apartmánu
│   ├── SectionHeading.tsx       # Nadpisy sekcí
│   └── Footer.tsx               # Footer
├── content/                      # Datový model
│   ├── apartments.ts            # Data apartmánů
│   ├── site.ts                  # Globální data
│   └── trips.ts                 # Tipy na výlety
├── public/images/               # Obrázky
│   ├── prasily/                 # Obrázky Prášily
│   ├── zelezna-ruda/            # Obrázky Železná Ruda
│   └── shared/                  # Sdílené obrázky
└── out/                         # Statický export (po buildu)
```

## 🎨 Design System

### Barevná paleta
- **Forest Dark**: `#1a3a2e` - Tmavě zelená
- **Charcoal**: `#2c3531` - Uhlová
- **Cream**: `#f4f1ea` - Krémová
- **Copper**: `#b87333` - Měděná (akcent)
- **Mist**: `#e0e5e3` - Mlhavá

### Typografie
- **Serif**: Playfair Display (nadpisy)
- **Sans**: Inter (text)

## 🛠️ Instalace a spuštění

### Lokální vývoj

```bash
# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev
```

Web bude dostupný na `http://localhost:3000`

### Build a export

```bash
# Build projektu
npm run build
```

Po buildu se vytvoří složka `out/` s kompletním statickým webem.

## 📤 Nasazení na hosting

### Krok 1: Build
```bash
npm run build
```

### Krok 2: Nahrání na hosting
1. Otevřete FTP klienta (FileZilla, WinSCP, atd.)
2. Připojte se k vašemu hostingu
3. Přejděte do složky `public_html/`
4. Nahrajte **celý obsah** složky `out/` do `public_html/`

**Důležité**: Nahrajte pouze OBSAH složky `out/`, ne samotnou složku!

### Struktura na hostingu
```
public_html/
├── index.html
├── apartman/
│   ├── prasily/
│   └── zelezna-ruda/
├── galerie/
├── cenik/
├── kontakt/
├── okoli/
├── rezervace/
├── _next/
└── images/
```

## 📸 Jak přidat vlastní fotky

### 1. Příprava fotek
- Doporučená velikost: min. 1920x1080px
- Formát: JPG (optimalizováno pro web)
- Pojmenování: číselné (01.jpg, 02.jpg, atd.)

### 2. Umístění fotek

#### Hero obrázky
```
public/images/prasily/hero.jpg
public/images/zelezna-ruda/hero.jpg
public/images/shared/hero-homepage.jpg
```

#### Galerie apartmánů
```
public/images/prasily/gallery/01.jpg až 10.jpg
public/images/zelezna-ruda/gallery/01.jpg až 10.jpg
```

#### Tipy na výlety
```
public/images/shared/certovo-jezero.jpg
public/images/shared/spicak.jpg
public/images/shared/magistrala.jpg
public/images/shared/cyklo.jpg
public/images/shared/pancirska.jpg
public/images/shared/modrava.jpg
```

### 3. Po přidání fotek
```bash
npm run build
```
Pak nahrajte nový obsah `out/` na hosting.

## ✏️ Jak upravit obsah

### Kontaktní údaje
Upravte soubor `content/site.ts`:
```typescript
contact: {
  phone: '+420123456789',
  phoneDisplay: '+420 123 456 789',
  email: 'info@apartmany-sumava.cz',
}
```

### Ceny apartmánů
Upravte soubor `content/apartments.ts`:
```typescript
pricing: [
  {
    season: 'Hlavní sezóna (léto, zima)',
    pricePerNight: 'od 1 800 Kč',
    minNights: 2,
  },
]
```

### Vybavení apartmánů
Upravte pole `features` v `content/apartments.ts`:
```typescript
features: [
  { icon: '🏠', label: 'Celý apartmán' },
  { icon: '🅿️', label: 'Parkování zdarma' },
  // ...
]
```

### Tipy na výlety
Upravte soubor `content/trips.ts`

Po každé úpravě obsahu:
```bash
npm run build
```

## 🔧 Technické poznámky

### Statický export
Web je nakonfigurován pro statický export (`output: 'export'` v `next.config.ts`). To znamená:
- Žádný server-side rendering
- Všechny stránky jsou pre-renderované jako HTML
- Funguje na jakémkoliv hostingu (nemusí podporovat Node.js)

### Obrázky
Next.js Image komponenta je nastavena na `unoptimized: true` pro statický export. Doporučuji optimalizovat obrázky před nahráním (např. pomocí TinyPNG).

### SEO
- Každá stránka má vlastní metadata (title, description)
- Open Graph tagy pro sdílení na sociálních sítích
- Semantic HTML pro lepší přístupnost

## 📞 Podpora

Pro dotazy nebo problémy kontaktujte vývojáře.

## 📝 Licence

© 2026 Apartmány Šumava. Všechna práva vyhrazena.
