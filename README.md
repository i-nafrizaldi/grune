# Grüne Coffee Website

Website company profile untuk **Grüne Coffee**, brand coffee shop modern dengan tampilan clean, natural, premium, dan approachable.

Project dibangun menggunakan **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **React Icons**, dan **Embla Carousel**. Struktur kode menggunakan pendekatan **hybrid Atomic Design + feature-based architecture** agar modular, reusable, dan mudah dirawat.

---

## Fitur Utama

### Homepage
- Hero carousel dengan autoplay dan fade transition.
- Tombol previous, next, pause, dan play.
- Coffee process section.
- Daily moments section.
- Testimonial carousel.
- Responsive layout.

### About Page
- Hero brand.
- Cerita Grüne.
- Nilai-nilai brand.
- Brand experience section.
- CTA menuju halaman Contact dan Menu.

### Menu Page
- Hero menu.
- Daftar kategori minuman.
- Responsive menu grid.
- Reusable menu card.
- Optimasi gambar menggunakan `next/image`.
- CTA menuju informasi outlet.

### Contact Page
- Hero contact.
- Reservasi melalui WhatsApp.
- Pesan WhatsApp otomatis.
- Social media cards.
- Informasi alamat dan jam operasional.
- Google Maps embed.
- Tombol Google Maps Directions.
- Closing WhatsApp CTA.

### Global
- Responsive navbar.
- Mobile navigation.
- Global footer.
- Centralized site configuration.
- Semantic HTML.
- Keyboard focus state.

---

## Tech Stack

| Teknologi | Kegunaan |
|---|---|
| Next.js | Framework React dan routing |
| React | Pembuatan antarmuka |
| TypeScript | Static typing |
| Tailwind CSS | Styling |
| shadcn/ui | UI primitives |
| React Icons | Icon library |
| Embla Carousel | Carousel engine |
| `next/image` | Optimasi gambar |
| ESLint | Pemeriksaan kualitas kode |

Dependency tambahan:

```txt
react-icons
embla-carousel-autoplay
embla-carousel-fade
```

Komponen shadcn/ui:

```txt
Button
Card
Carousel
```

---

## Struktur Project

```txt
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── layout/
│   ├── menu/
│   ├── seo/
│   ├── shared/
│   │   ├── brand-logo.tsx
│   │   └── section-heading.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── carousel.tsx
│
├── data/
│   ├── about-values.ts
│   ├── menu-items.ts
│   └── testimonials.ts
│
└── lib/
    ├── contact-links.ts
    ├── site-config.ts
    └── utils.ts
```

> File SEO seperti `robots.ts`, `sitemap.ts`, dan structured data dapat ditambahkan ketika project memasuki tahap production.

---

## Arsitektur Komponen

Project menggunakan pendekatan hybrid Atomic Design.

### UI Primitives / Atoms

```txt
components/ui/button.tsx
components/ui/card.tsx
components/ui/carousel.tsx
```

### Shared Molecules

```txt
components/shared/brand-logo.tsx
components/shared/section-heading.tsx
```

### Feature Molecules

```txt
components/menu/menu-card.tsx
components/home/testimonial-card.tsx
components/contact/social-card.tsx
components/contact/contact-info-item.tsx
components/about/brand-value-card.tsx
```

### Organisms

```txt
components/home/hero-section.tsx
components/home/testimonials-section.tsx
components/menu/menu-grid.tsx
components/contact/location-section.tsx
components/layout/navbar.tsx
components/layout/footer.tsx
```

### Pages

File `page.tsx` hanya bertugas menyusun section:

```tsx
export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ReservationSection />
      <SocialSection />
      <LocationSection />
      <ContactCtaSection />
    </main>
  );
}
```

Prinsip arsitektur:

- `page.tsx` tetap ringkas.
- Data statis dipisahkan dari UI.
- Component reusable menerima data melalui props.
- Server Component digunakan secara default.
- Client Component hanya dipakai untuk UI interaktif.
- Component dibuat berdasarkan tanggung jawab, bukan sekadar ukuran JSX.

---

## Persiapan

Pastikan perangkat memiliki:

```txt
Node.js
npm
Git
```

Periksa instalasi:

```bash
node --version
npm --version
git --version
```

Gunakan versi Node.js yang sesuai dengan versi Next.js pada `package.json`.

---

## Instalasi

Clone repository:

```bash
git clone <repository-url>
cd <project-folder>
```

Install dependency:

```bash
npm install
```

Install dependency tambahan jika belum tersedia:

```bash
npm install react-icons embla-carousel-autoplay embla-carousel-fade
```

Tambahkan komponen shadcn/ui jika belum tersedia:

```bash
npx shadcn@latest add button card carousel
```

---

## Environment Variable

Buat file `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Untuk production:

```env
NEXT_PUBLIC_SITE_URL=https://domain-grune.com
```

Jangan commit `.env.local`.

Pastikan `.gitignore` berisi:

```txt
.env
.env.local
.env.*.local
```

---

## Menjalankan Project

Development:

```bash
npm run dev
```

Buka:

```txt
http://localhost:3000
```

Type checking:

```bash
npx tsc --noEmit
```

Lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

Menjalankan hasil build:

```bash
npm run start
```

---

## Konfigurasi Brand

Konfigurasi utama berada di:

```txt
src/lib/site-config.ts
```

Contoh:

```ts
export const siteConfig = {
  name: "Grüne",

  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000",

  description:
    "Modern coffee, welcoming spaces, and thoughtful everyday moments.",

  navigation: [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/about#our-story" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  contact: {
    outletName: "Grüne Coffee",
    email: "hello@grune.example",
    phoneDisplay: "+62 812-0000-0000",
    phoneHref: "tel:+6281200000000",
    whatsappNumber: "6281200000000",
    whatsappDisplay: "+62 812-0000-0000",
    reservationMessage:
      "Hello Grüne, I would like to make a reservation.",
    address: "Replace with the confirmed outlet address",
    operatingHours: "Monday–Sunday, 08.00–22.00",
  },
} as const;
```

Ganti sebelum production:

- domain;
- email;
- nomor telepon;
- nomor WhatsApp;
- alamat outlet;
- jam operasional;
- Instagram;
- TikTok;
- lokasi Google Maps.

Format nomor WhatsApp:

```txt
628xxxxxxxxxx
```

Tanpa `+`, spasi, dan tanda hubung.

---

## Asset

Asset disimpan pada:

```txt
public/asset/
```

Contoh:

```txt
public/asset/6-Photoroom.png
public/asset/8-Photoroom.png
public/asset/GRUNE-HERO-CAROUSEL-1.webp
public/asset/GRUNE-ASSET-PT-10.webp
public/asset/GRUNE-ASSET-PT-11.webp
public/asset/GRUNE-ASSET-PT-13.webp
```

Asset menu:

```txt
public/asset/menu/grune-americano.webp
public/asset/menu/grune-cappuccino.webp
public/asset/menu/grune-caramel-macchiato.webp
public/asset/menu/grune-creamy-dreamy-latte.webp
public/asset/menu/grune-flat-white.webp
public/asset/menu/grune-grape-fizzy-americano.webp
public/asset/menu/grune-latte.webp
public/asset/menu/grune-matcha-frappe.webp
public/asset/menu/grune-matcha-latte.webp
public/asset/menu/grune-orange-americano.webp
```

Best practice:

- gunakan WebP atau AVIF;
- gunakan nama file lowercase dan kebab-case;
- hindari spasi pada nama file;
- kompres gambar sebelum digunakan;
- gunakan alt text yang deskriptif;
- gunakan `priority` hanya untuk gambar hero utama;
- isi properti `sizes` dengan benar.

---

## Routes

| Halaman | Route |
|---|---|
| Homepage | `/` |
| About | `/about` |
| Brand Story | `/about#our-story` |
| Menu | `/menu` |
| Contact | `/contact` |

---

## SEO

Fondasi SEO project:

- metadata unik per halaman;
- title dan description;
- semantic HTML;
- satu `h1` utama per halaman;
- heading hierarchy;
- alt text;
- internal link;
- `next/image`;
- canonical URL;
- sitemap;
- robots;
- Open Graph;
- LocalBusiness structured data.

Contoh metadata:

```tsx
export const metadata: Metadata = {
  title: "Coffee and Matcha Menu",
  description:
    "Explore the Grüne menu, including coffee, matcha, signature beverages, and fizzy americano creations.",
  alternates: {
    canonical: "/menu",
  },
};
```

URL SEO production:

```txt
https://domain-grune.com/sitemap.xml
https://domain-grune.com/robots.txt
```

Setelah deployment:

- daftarkan website ke Google Search Console;
- submit sitemap;
- periksa structured data;
- periksa PageSpeed Insights;
- perbarui Google Business Profile.

Semua informasi bisnis pada structured data harus sesuai dengan informasi yang terlihat pada website.

---

## Accessibility

Project menerapkan:

- semantic HTML;
- `aria-label` untuk tombol icon;
- `aria-labelledby` pada section;
- alt text pada gambar;
- visible keyboard focus;
- iframe Google Maps dengan `title`;
- external links dengan `rel="noopener noreferrer"`;
- carousel controls yang dapat diakses.

---

## Optimasi Performa

Praktik yang digunakan:

- Server Component sebagai default.
- Client Component hanya untuk carousel dan mobile navigation.
- `next/image` untuk gambar.
- Asset WebP.
- Lazy loading untuk Google Maps.
- Aspect ratio untuk mencegah layout shift.
- Static data dipisahkan dari component.
- Dependency client-side dibatasi.

Hindari:

- `"use client"` pada seluruh halaman;
- `priority` pada semua gambar;
- gambar berukuran sangat besar;
- duplikasi data bisnis;
- library tambahan untuk fungsi sederhana;
- inline data besar di dalam `page.tsx`.

---

## Scripts

Contoh scripts pada `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

Perintah utama:

```bash
npm run dev
npx tsc --noEmit
npm run lint
npm run build
npm run start
```

---

## Deployment

Project dapat dideploy ke platform yang mendukung Next.js.

Langkah umum:

1. Push repository ke Git provider.
2. Hubungkan repository ke platform hosting.
3. Tambahkan environment variable.
4. Jalankan production build.
5. Hubungkan domain.
6. Aktifkan HTTPS.
7. Periksa seluruh route.
8. Submit sitemap ke Google Search Console.

Environment production:

```env
NEXT_PUBLIC_SITE_URL=https://domain-grune.com
```

---

## Checklist Sebelum Production

### Data bisnis

- [ ] Nama bisnis sudah benar.
- [ ] Email sudah aktif.
- [ ] Nomor telepon sudah aktif.
- [ ] Nomor WhatsApp sudah benar.
- [ ] Alamat outlet sudah lengkap.
- [ ] Jam operasional sudah dikonfirmasi.
- [ ] Instagram sudah benar.
- [ ] TikTok sudah benar.
- [ ] Google Maps mengarah ke outlet.

### UI dan konten

- [ ] Navbar desktop bekerja.
- [ ] Mobile navigation bekerja.
- [ ] Semua internal link bekerja.
- [ ] Semua external link bekerja.
- [ ] Carousel bekerja.
- [ ] Pause carousel bekerja.
- [ ] Semua gambar tampil.
- [ ] Alt text sudah sesuai.
- [ ] Tidak ada placeholder.
- [ ] Tidak ada typo.
- [ ] Layout mobile sudah diperiksa.

### SEO

- [ ] Metadata setiap halaman unik.
- [ ] Domain production sudah disetel.
- [ ] Canonical URL benar.
- [ ] `sitemap.xml` dapat dibuka.
- [ ] `robots.txt` dapat dibuka.
- [ ] Open Graph image tersedia.
- [ ] Favicon tersedia.
- [ ] Structured data valid.
- [ ] Google Search Console sudah dikonfigurasi.

### Kualitas kode

- [ ] `npx tsc --noEmit` berhasil.
- [ ] `npm run lint` berhasil.
- [ ] `npm run build` berhasil.
- [ ] Tidak ada error console.
- [ ] Tidak ada unused import.
- [ ] Nama file menggunakan kebab-case.
- [ ] Tidak ada data sensitif dalam repository.

---

## Git Workflow

Buat branch:

```bash
git switch -c feature/contact-page
```

Periksa perubahan:

```bash
git status
git diff
```

Commit:

```bash
git add -A
git commit -m "feat: add contact page"
```

Push:

```bash
git push -u origin feature/contact-page
```

Contoh commit convention:

```txt
feat: add menu page
fix: correct WhatsApp reservation link
refactor: separate homepage sections
style: improve responsive spacing
docs: update project readme
chore: update dependencies
```

Sebelum refactor besar:

```bash
git branch backup/before-refactor
```

---

## Best Practices

- Gunakan `components/ui` untuk primitive.
- Gunakan `components/shared` untuk component lintas fitur.
- Simpan component khusus halaman di feature folder.
- Simpan data statis di `src/data`.
- Simpan konfigurasi bisnis di `site-config.ts`.
- Gunakan Server Component secara default.
- Hindari penggunaan `any`.
- Gunakan kebab-case untuk nama file.
- Gunakan PascalCase untuk nama component.
- Jaga `page.tsx` tetap ringkas.
- Jalankan type check, lint, dan build sebelum push.

---

## Lisensi

Project ini dibuat untuk kebutuhan brand **Grüne Coffee**.

Logo, foto produk, materi visual, nama brand, dan konten terkait Grüne merupakan milik pemilik brand masing-masing dan tidak boleh digunakan kembali tanpa izin.
