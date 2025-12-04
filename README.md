# 🔧 Strona Internetowa Serwisu Maszyn Budowlanych

Nowoczesna, responsywna strona internetowa dla serwisu maszyn budowlanych stworzona w React + Vite + Tailwind CSS.

## ✨ Funkcje

- 🎨 Unikalny design w kolorach czarny-biały-niebieski-błękitny
- 📱 Pełna responsywność (mobile, tablet, desktop)
- ⚡ Szybkie ładowanie dzięki Vite
- 🎭 Animacje i efekty hover
- 📋 Formularz zgłoszeniowy napraw
- 🖼️ Galeria realizacji
- 📞 Sekcja kontaktowa
- 🏭 Prezentacja obsługiwanych marek

## 🚀 Szybki Start

### 1. Uruchom lokalnie i zobacz zmiany NA ŻYWO

```bash
# Zainstaluj zależności (tylko przy pierwszym uruchomieniu)
npm install

# Uruchom serwer deweloperski
npm run dev
```

**Otwórz przeglądarkę pod adresem: `http://localhost:5173`**

🎉 **Każda zmiana w kodzie będzie widoczna NATYCHMIAST w przeglądarce!**

### 2. Jak dodać swoje zdjęcia?

#### Logo firmy:
1. Wrzuć swoje logo do folderu: `public/images/logo/`
2. Nazwij je: `logo.png` (może być też .jpg)
3. Logo pojawi się automatycznie w nawigacji!

#### Zdjęcia realizacji (galeria):
1. Wrzuć zdjęcia do folderu: `public/images/gallery/`
2. Nazwij je: `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg` itd.
3. Zdjęcia pojawią się automatycznie w galerii!

**WAŻNE:** Możesz dodawać zdjęcia PODCZAS gdy serwer jest uruchomiony - wystarczy odświeżyć stronę (F5)

### 3. Jak zmienić dane kontaktowe?

Otwórz plik: `src/sections/Contact.jsx`

Znajdź i zmień:
- Numer telefonu: `+48 123 456 789`
- Email: `kontakt@serwis.pl`
- Adres: `ul. Przykładowa 123, 00-000 Miasto`

Zapisz plik - zmiany pojawią się NATYCHMIAST!

### 4. Jak zmienić godziny otwarcia?

W tym samym pliku `src/sections/Contact.jsx` znajdź sekcję "Godziny otwarcia" i zmień je według swoich potrzeb.

## 🌐 Wdrożenie na hosting (DARMOWE!)

### Opcja 1: Vercel (POLECANA - najprostsza!)

1. **Stwórz konto na Vercel:**
   - Wejdź na: https://vercel.com/signup
   - Zarejestruj się przez GitHub

2. **Połącz z GitHub:**
   - Wrzuć swój kod na GitHub (możesz użyć GitHub Desktop)
   - W Vercel kliknij "Import Project"
   - Wybierz swoje repozytorium

3. **Wdróż:**
   - Kliknij "Deploy"
   - Gotowe! 🎉

**Od teraz każda zmiana którą wypchniesz na GitHub będzie automatycznie publikowana!**

#### Jak aktualizować stronę na Vercel:

```bash
# 1. Zapisz zmiany
git add .
git commit -m "Aktualizacja strony"

# 2. Wypchnij na GitHub
git push

# 3. Vercel automatycznie zaktualizuje stronę (zazwyczaj w 1-2 minuty)!
```

### Opcja 2: Netlify

1. Wejdź na: https://www.netlify.com/
2. Przeciągnij folder `dist` (po uruchomieniu `npm run build`)
3. Gotowe!

### Opcja 3: GitHub Pages

```bash
# Dodaj do package.json:
# "homepage": "https://<username>.github.io/<repo-name>"

# Zainstaluj gh-pages
npm install --save-dev gh-pages

# Dodaj do scripts w package.json:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Wdróż
npm run deploy
```

## 📝 Struktura projektu

```
voltscan.page/
├── public/
│   └── images/
│       ├── logo/          # Twoje logo tutaj
│       ├── gallery/       # Zdjęcia realizacji tutaj
│       └── brands/        # Logo marek (opcjonalnie)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx     # Nawigacja
│   │   └── Footer.jsx     # Stopka
│   ├── sections/
│   │   ├── Hero.jsx       # Sekcja główna
│   │   ├── Services.jsx   # Oferta
│   │   ├── Brands.jsx     # Obsługiwane marki
│   │   ├── Realizations.jsx  # Galeria
│   │   ├── Contact.jsx    # Kontakt
│   │   └── RepairForm.jsx # Formularz zgłoszeniowy
│   ├── App.jsx            # Główny komponent
│   └── index.css          # Style
└── README.md              # Ten plik
```

## 🎨 Kolory używane w projekcie

- **Primary (niebieski):** `#0066CC`
- **Secondary (błękitny):** `#00AAFF`
- **Dark (czarny):** `#0A0A0A`
- **White (biały):** `#FFFFFF`

## 🔧 Najczęstsze operacje

### Zmiana kolorów:
Otwórz `tailwind.config.js` i zmień wartości w sekcji `colors`.

### Dodanie nowej sekcji:
1. Stwórz nowy plik w `src/sections/`
2. Dodaj import w `src/App.jsx`
3. Dodaj komponent między innymi sekcjami

### Zmiana kolejności sekcji:
Otwórz `src/App.jsx` i zmień kolejność komponentów.

## 📧 Konfiguracja formularza kontaktowego

Obecnie formularz wyświetla alert po wysłaniu. Aby podłączyć prawdziwy backend:

1. **Formspree (najprostsza opcja):**
   - Wejdź na: https://formspree.io/
   - Stwórz konto i uzyskaj endpoint
   - W `Contact.jsx` i `RepairForm.jsx` zmień:
   ```jsx
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

2. **EmailJS:**
   - Wejdź na: https://www.emailjs.com/
   - Skonfiguruj połączenie z Gmail/Outlook
   - Użyj ich SDK w React

3. **Własny backend:**
   - Stwórz endpoint API
   - Zmień `handleSubmit` w formularzach

## 🆘 Pomoc

### Strona nie uruchamia się?
```bash
# Spróbuj:
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Zmiany nie są widoczne?
- Upewnij się, że serwer jest uruchomiony (`npm run dev`)
- Odśwież przeglądarkę (Ctrl+R lub Cmd+R)
- Sprawdź czy zapisałeś plik (Ctrl+S lub Cmd+S)

### Błędy w konsoli?
- Otwórz narzędzia deweloperskie (F12)
- Sprawdź zakładkę "Console"
- Skopiuj błąd i zapytaj o pomoc

## 📱 Social Media (opcjonalnie)

Aby dodać linki do social media w stopce, edytuj `src/components/Footer.jsx`.

## 🔄 Aktualizacje

Aby zaktualizować zależności:
```bash
npm update
```

## 📞 Wsparcie

Jeśli potrzebujesz pomocy:
1. Sprawdź czy serwer jest uruchomiony
2. Sprawdź konsolę przeglądarki (F12)
3. Sprawdź terminal gdzie uruchomiłeś `npm run dev`

---

**Miłego tworzenia! 🚀**

Każda zmiana którą wprowadzisz będzie widoczna natychmiast - po prostu zapisz plik i zobacz efekt w przeglądarce!
