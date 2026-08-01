# Portfolio Sitesi Uygulama Planı: "Bold & Typographic" Tasarım Sistemi

Mevcut jenerik (glassmorphism/karanlık tema) şablonlardan tamamen sıyrılarak, **akılda kalıcı, cesur, yüksek kontrastlı ve zamansız (evergreen)** bir tasarım dili olan "Bold Typographic (Brutalist)" stile geçiş yapıyoruz. 

Amacımız; senin "AI System Developer & Architect" kimliğini en güçlü ve profesyonel şekilde yansıtan, okuması keyifli, devasa fontların ve net renk bloklarının olduğu bir portfolio vitrini inşa etmektir.

> [!IMPORTANT]  
> Lütfen baştan aşağı bu yeni vizyona göre hazırlanan mimariyi incele. Onay verdiğin an projedeki eski yapıları silip bu mimariyle kodlamaya başlayacağım.

## 0. Teknolojik Geliştirme ve Dönüşüm Planı (Roadmap)

Biliyorsun ki artık bu sitede blog *yazmayacağız*, blogları dışarıdaki diğer (ASP.NET ile yapacağın) sitenden çekeceğiz. Bu stratejik karara göre mevcut Next.js projesini istediğimiz vizyona dönüştürmek için adım adım teknolojik planımız şudur:

### Adım 1: Proje Temizliği ve Yük Atma (Cleanup)
- Mevcut `portfolio_site` içindeki blog sayfaları (markdown okuyucular vb.) ve gereksiz veritabanı (Redis/Upstash) bağımlılıkları projeden tamamen temizlenecek. Proje yalın bir "Vitrin" haline getirilecek.

### Adım 2: Global CSS ve Tipografi Kurulumu (Setup)
- Yeni devasa "Bold/Brutalist" fontlar (Örn: Inter Black) projeye eklenecek ve `layout.tsx`'e işlenecek.
- `globals.css` içerisine yeni "Turuncu ve Lacivert" tasarım token'ları (Tailwind 4 yapılandırması) yazılacak.

### Adım 3: Single Page Component Mimarisi
- Site, sayfalar arası geçişin olmadığı, tek ve akıcı bir ana sayfa (Single Page Scroll) olarak sıfırdan inşa edilecek.
- Bileşenler (Hero, Journey, Skills, Projects, Blogs, Contact) ayrı ayrı `src/components/` altında kodlanacak.

### Adım 4: Dinamik Pop-up (Modal) Sisteminin Yazılması
- Projeler, Bloglar ve **Yetenekler (Skills)** için ayrı sayfalara gitmek yerine, tıklandığında ekranı flulaştıran (backdrop-blur) ortak bir `Modal.tsx` bileşeni React state'leri (`useState`) ile geliştirilecek.

### Adım 5: ASP.NET Blog API'si İçin Asenkron Hazırlık
- Blog kısmı artık HTML içine statik yazılmayacak. 
- `getLatestBlogs()` adında asenkron bir `fetch` fonksiyonu yazılacak. Şimdilik bu fonksiyon sana ait 3 tane örnek blog yazısını (mock data) sanki backend'den geliyormuş gibi döndürecek.
- Senin ASP.NET Core siten bittiğinde, sadece bu fonksiyondaki URL'i (Örn: `https://api.seninsiten.com/blogs/latest`) değiştirerek sistemi anında canlıya alabileceksin.

### Adım 6: S.O.L.I.D. Prensipleri ve Clean Code Mimarisi
- Proje kodlanırken baştan sona **S.O.L.I.D.** prensiplerine (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) sadık kalınacak.
- **Single Responsibility (SRP)**: Her React bileşeni (Component) sadece tek bir işi yapacak (Örn: `ProjectCard` sadece UI görünümünü çizerken, modal state'ini yönetme veya veriyi çekme işi ayrı kancalarda (Custom Hooks) veya Service katmanında olacak).
- **Dependency Inversion (DIP)**: Veri çekme işlemleri (Blog veya Proje data fetch) doğrudan UI bileşenlerinin içine gömülmeyecek. TypeScript `interface`'leri tanımlanacak ve bir `Service` katmanı üzerinden UI'a enjekte edilecek. Böylece ileride ASP.NET API'sine geçerken UI kodlarına hiç dokunulmayacak (Open/Closed prensibi sağlanacak).
- Bu sayede site sadece görsel olarak değil, kod kalitesi ve mimari olarak da bir "System Developer / Architect"in elinden çıktığını ispatlayacak.

### Adım 7: AI-Optimized (Yapay Zeka İçin Optimize Edilmiş) Yüksek Modülerlik Standartları
Senin vizyonun doğrultusunda, bu projenin (AI tarafından) en kusursuz, hatasız ve genişletilebilir şekilde kodlanması için projeye şu "katı kurallar (strict rules)" eklenmiştir:
- **UI ve Feature İzolasyonu**: Bileşenler `components/ui` (sadece görsel, mantıksız (dumb) bileşenler, örn: Button, Card, ProgressBar) ve `components/features` (iş mantığı içeren bileşenler, örn: BlogList, ProjectModal) olarak ikiye ayrılacak. Bu izolasyon AI'ın kodu üretirken UI ve Logic'i birbirine karıştırmasını engeller.
- **Kati Tip Güvenliği (Strict Typing & Zod)**: Veri modelleri (Blog, Proje, Skill) sadece TypeScript `interface`'leri ile değil, projede halihazırda kurulu olan **Zod** kütüphanesi ile şemalandırılacak. API'den (veya mock'tan) gelen veriler Zod ile doğrulanacak (Data Validation). Bu, AI için kesin sözleşmeler (contracts) oluşturur ve runtime hatalarını sıfırlar.
- **Custom Hook Mimarisi**: Pop-up (Modal) durumları (Açık/Kapalı, Hangi kartın seçildiği) UI bileşenlerinin içine yazılmayacak. `hooks/useModal.ts` gibi merkezi Custom Hook'lar oluşturularak UI temiz tutulacak.
- **Barrel Files (`index.ts`) Kullanımı**: Her klasörde bir `index.ts` oluşturularak dışa aktarımlar merkezileştirilecek. Böylece import yolları karmaşıklaşmayacak (`import { Button, Modal } from '@/components/ui'`), kod çok daha temiz (Clean Code) olacak.

---

## 1. Tasarım Sistemi ve Renk Paleti (Design Tokens)

Sitede "Turuncu ve Lacivert" (Orange & Navy Blue) bloklaması (Color Blocking) kullanılacaktır.

**Ana Renk Paleti:**
- `bg-orange`: `#FF6B35` veya canlı bir sıcak Turuncu (Enerji, yaratıcılık ve aksiyon alanları için).
- `bg-navy`: `#0B132B` veya çok derin bir Lacivert (Güven, teknoloji, mühendislik ve arka planlar için).
- `text-primary`: Zemin rengine göre tam zıtlık yaratacak Dev Lacivert veya Krem/Beyaz metinler.
- `accent-white`: `#F8F9FA` (Temiz beyaz/krem detaylar ve ikonlar için).

**Tipografi (Sitenin Karakteri):**
Sitenin tüm ruhunu devasa, kalın (Black/ExtraBold) ve düz (Sans-Serif) fontlar oluşturacak.
- Başlıklar (Headings): **Inter (Black)** veya **Outfit (ExtraBold)**. Harfler birbirine yakın, devasa boyutlarda.
- Metinler (Body): Temiz ve okunaklı, orta ağırlıkta modern bir font.

## 2. Sayfa Akışı ve Bileşen Mimarisi (Yukarıdan Aşağıya)

Bütün site tek bir akıcı (Scroll) sayfa olarak tasarlanacak ve bu yeni "Bold" dile göre her bölüm (section) kendi içinde bir renk bloğu (Color Block) olacak.

### Bölüm 1: Hero Section (Karşılama Ekranı)
- **Tasarım Dili**: İkiye bölünmüş (Split-Screen) yapı. Sol taraf Turuncu, sağ taraf Lacivert.
- **Sol Taraf (Turuncu)**: Devasa Lacivert harflerle **"HI, THIS IS MEHMET"**. Altında rolün (AI System Developer & Architect). İki adet zıt renkli yönlendirme butonu ("Explore Projects" ve "Contact").
- **Sağ Taraf (Lacivert)**: Klasik bir fotoğraf yerine, senin mühendislik tarafını simgeleyen, içi koyu renkli, şık bir pencerede duran **n8n otomasyon akış şeması (Workflow Diagram)**.

**Görsel Referans (Hero):**
![Hero Section Mockup](/Users/mehmetcankocakurt/.gemini/antigravity/brain/bcd04b50-fe7b-4700-9116-f0bc17cb5137/orange_navy_portfolio_mockup_1784722140177.jpg)

### Bölüm 2: Kariyer Yolu ve Hakkımda (My Journey)
- **Tasarım Dili**: Tam genişlikte (Full-width) Lacivert veya Krem bir zemin.
- **İçerik**: Kısaca kim olduğun, eğitim/staj hayatın ve yazılıma bakış açın.
- **Özellik**: Sıkıcı paragraflar yerine, devasa bir başlık ("MY JOURNEY") ve yanında kısa, madde madde veya minimalist bir zaman çizelgesi (Timeline) şeklinde okunması çok kolay hap bilgiler.

### Bölüm 3: Projeler (Projects)
- **Tasarım Dili**: Turuncu veya Beyaz zemin üzerine devasa "WORK" veya "PROJECTS" başlığı.
- **Kartlar**: Projeler, içlerinde projenin görseli ve devasa isimlerinin yazdığı düz, gölgesiz, köşeli (Brutalist) şık kartlar halinde sıralanacak.
- **✨ Etkileşim (Modal / Pop-up)**: Bir proje kartına tıklandığında; **arkadaki sayfa pürüzsüzce bulanıklaşacak (backdrop-blur)** ve ekranın ortasında projenin mimarisini, açıklamalarını ve butonlarını barındıran şık bir Pop-up (Modal) açılacak. Ziyaretçi sayfadan ayrılmadan tüm detayı bu pencerede görecek.

**Görsel Referans (Modal Davranışı):**
*(Not: Bu mockup eski cam konseptine ait olsa da, Pop-up'ın ekranın ortasında açılması ve arka planı flulaştırması (blur) davranışı birebir aynı şekilde yeni renk paletimizle uygulanacaktır.)*
![Proje Modal Davranışı](/Users/mehmetcankocakurt/.gemini/antigravity/brain/bcd04b50-fe7b-4700-9116-f0bc17cb5137/project_modal_mockup_1784711415161.jpg)

### Bölüm 3.5: Yetenekler (Skills & Expertise)
- **Tasarım Dili**: Derin Lacivert (Navy) zemin üzerinde, yüksek kontrastlı devasa bloklar.
- **Kartlar/Barlar**: Gönderdiğin Figma çiziminin mantığı (Yetenek adı, Yüzdesi ve dolum barı) bu brutalist tasarım diline uyarlanacak. Çizimdeki yumuşak çizgiler yerine; keskin kenarlı, kalın çerçeveli ve içi canlı Turuncu (Orange) dolan devasa ilerleme çubukları (Progress Bars) kullanılacak.
- **Animasyon**: Sayfa bu bölüme kaydırıldığında, barlar pürüzsüz ama enerjik bir şekilde `%0`'dan hedeflenen yüzdeye (Örn: `%80`) dolacak.
- **✨ Etkileşim (Skill Modal)**: Tıpkı proje ve bloglarda olduğu gibi, bir yetenek barına tıklandığında **arkadaki sayfa flulaşacak (blur)** ve ekranın ortasında o yeteneğe dair detayları (örn: o dilde yazdığın spesifik projeler, kütüphaneler, tecrübe süren) gösteren bir Pop-up penceresi açılacak.

**Görsel Referans (Yetenekler Bölümü):**
![Skills Section Mockup](/Users/mehmetcankocakurt/.gemini/antigravity/brain/bcd04b50-fe7b-4700-9116-f0bc17cb5137/skills_section_mockup_1784723478488.jpg)

### Bölüm 4: Son Blog Yazıları (Geleceğe Hazır API)
- **Tasarım Dili**: Lacivert zemin, üzerinde Turuncu vurgular.
- **Kartlar**: Son paylaşılan 3 blog yazısı. 
- **✨ Etkileşim (Blog Modal)**: Projelerdeki gibi, karta tıklandığında dış siteye gitmeden önce ekran flulaşacak ve bir Modal (Pop-up) açılacak. Bu pencerede yazının kısa özeti okunup asıl bloga yönlendirme butonu olacak.
- **Backend Hazırlığı**: Blog kartları HTML içine statik yazılmayacak. `getLatestBlogs()` isimli asenkron bir fonksiyonla çekilecek. İleride ASP.NET siteni açtığında sadece `fetch('api.site.com')` yazarak canlıya geçebileceksin.

### Bölüm 5: İletişim ve Footer (Let's Talk)
- **Tasarım Dili**: Ekranın en altı, devasa fontla yazılmış "LET'S TALK" veya "CONTACT" başlığı.
- **İçerik**: Bir form veya doğrudan mail adresin.
- **Sosyal Medya Ağı**: Doğrudan profil sayfalarına tek tuşla erişebilecekleri büyük, temiz ikonlar (LinkedIn, GitHub, X vb.).

## 3. Geliştirme Süreci
Bu tasarım dili, hazır UI kütüphaneleriyle yapılamaz; tamamen **Custom Vanilla CSS (Tailwind yapılandırması)** gerektirir. 
- `tailwind.config.ts` dosyasına bizim özel Turuncu ve Lacivert kodlarımız eklenecek.
- "Bulanıklaşan Pop-up" (Modal) mantığı için React state yönetimi (`isOpen`) ve CSS `backdrop-filter: blur()` özellikleri harmanlanarak pürüzsüz geçişler yazılacak.

## User Review Required

> [!IMPORTANT]
> **Plan Onayı:**
> 1. Renkler, tipografi ve Bölüm (Section) akışları bu iddialı (Turuncu/Lacivert) konsepte tam olarak oturdu mu?
> 2. Proje ve Blog tıklamalarında **sayfanın bulanıklaşıp (blur) ortadan Pop-up açılması** kurgusu istediğin gibi planlandı mı?
> 3. Her şey eksiksizse, sağ alttaki **Proceed (Onayla)** butonuna basarak projeyi sıfırdan bu mimariyle yazmama izin verebilirsin!
