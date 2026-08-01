import type { BlogPost, Category, CategoryInfo, Project } from "@/types";

/* ============================================================
   Blog content layer — file-based, no CMS needed.
   All blog post data lives here as TypeScript objects.
   ============================================================ */

const posts: BlogPost[] = [
    {
        slug: "n8n-ile-otomatik-lead-pipeline",
        title: "n8n ile Otomatik Lead Pipeline Nasıl Kurulur?",
        description:
            "Haftalık 6 saatlik manuel işi tamamen ortadan kaldıran bir n8n otomasyon workflow'u nasıl kurdum? Adım adım anlatıyorum.",
        date: "2026-05-05",
        category: "n8n Workflows",
        tags: ["n8n", "Otomasyon", "Lead Generation", "Webhook", "Notion"],
        coverImage: "/blog/workflow-cover.png",
        featured: true,
        readingTime: 8,
        body: `## Problem

Küçük bir işletme sahibi, her hafta 6 saatten fazla zamanını web formundan gelen lead'leri manuel olarak bir tabloya kopyalayarak, takip e-postaları göndererek ve yanıtları izleyerek harcıyordu. Lead'ler gözden kaçıyor, takipler tutarsız kalıyordu.

## Çözüm

Tüm lead yaşam döngüsünü otomatikleştiren bir n8n workflow'u tasarladım ve deploy ettim:

- **Webhook tetikleyici** ile form gönderimlerini anlık yakalama
- **Veri doğrulama node'u** ile gelen verileri temizleme ve yapılandırma
- **Notion API entegrasyonu** ile tüm alanları, durum etiketlerini ve zaman damgalarını içeren yeni lead kaydı oluşturma
- **Resend e-posta node'u** ile saniyeler içinde otomatik yanıt gönderme
- **Koşullu takip zinciri** ile 3 gün yanıt gelmezse hatırlatma e-postası gönderme

## Teknik Detaylar

Kritik tasarım kararı, özel bir script yerine n8n Cloud'u tercih etmekti. n8n, görsel workflow debug'ı, yerleşik hata yönetimi ve yeniden deploy gerektirmeden kolay iterasyon sağladı.

Notion veritabanı hem CRM hem de raporlama katmanı olarak çalışıyor — ekstra bir araca gerek yok.

Hata yönetimi, API hatalarında retry mantığı ve herhangi bir node başarısız olursa Slack bildirimi içeriyor.

## Sonuçlar

- **Haftalık ~6 saat tasarruf** manuel veri girişi ve e-posta takibinden
- **Manuel takipte ~%80 azalma**
- **Sıfır kayıp lead** — her gönderim takip ediliyor
- Form gönderiminden otomatik yanıta **5 saniyeden az** süre

## Sonraki Adımlar

- Bütçe aralığı ve proje türüne göre lead puanlama ekleme
- Yeni lead'leri ve dönüşüm oranlarını özetleyen haftalık özet e-postası oluşturma
- Takip dizisine doğrudan takvim rezervasyonu entegre etme`,
    },
    {
        slug: "yapay-zeka-ile-icerik-uretimi",
        title: "Yapay Zeka ile İçerik Üretimini 3 Kat Hızlandırma",
        description:
            "AI destekli içerik pipeline'ı ile blog yazılarını tasarlamak, düzenlemek ve yayınlamak artık çok daha hızlı. İşte benim workflow'um.",
        date: "2026-04-28",
        category: "AI Araçları",
        tags: ["OpenAI", "GPT-4", "İçerik Üretimi", "n8n", "WordPress"],
        coverImage: "/blog/ai-content-cover.png",
        featured: true,
        readingTime: 6,
        body: `## Problem

Küçük bir pazarlama ekibi haftada 3 blog yazısı üretiyordu ve her biri taslaktan yayına yaklaşık 4 saat sürüyordu. Süreç manuel araştırma, yazma, düzenleme, SEO optimizasyonu ve CMS yayınlama içeriyordu — hepsi tek bir kişi tarafından yapılıyordu.

## Çözüm

OpenAI ile desteklenen bir n8n workflow'u oluşturdum:

- **Konu alımı** — Google Sheets editöryal takviminden otomatik çekme
- **AI taslak oluşturma** — Marka sesi için özelleştirilmiş prompt'larla GPT-4 kullanımı
- **SEO optimizasyon node'u** — Başlık, meta açıklama ve anahtar kelime yerleşimi önerileri
- **İnsan inceleme adımı** — Taslak, onay butonu ile bir inceleme kuyruğuna düşüyor
- **Otomatik yayınlama** — Onaylandıktan sonra WordPress API üzerinden yayınlama

## Teknik Detaylar

Kritik tasarım tercihi, süreçte insanı döngüde tutmaktı. Tam otonom yayınlama, marka tutarsızlığı riski taşıyordu. Workflow, içeriği "taslak" olarak aşamalandırıyor ve önizleme bağlantısı ile bir Slack bildirimi gönderiyor.

Prompt mühendisliği iteratif oldu — marka tonuna tutarlı bir şekilde uyan bir şablon bulmadan önce 12 prompt varyasyonunu test ettim.

## Sonuçlar

- Yazı başına üretim süresinde **~%70 azalma** (4 saat → ~1.2 saat)
- Aynı ekiple çıktı **haftada 3'ten 8 yazıya** çıktı
- 6 manuel adımdan **4'ü otomatikleştirildi**
- Kalite kontrolü için insan incelemesi korundu

## Sonraki Adımlar

- Öne çıkan görseller için DALL-E ile görsel üretimi ekleme
- En iyi performans gösteren yazıların gelecekteki konu önerilerini bilgilendirdiği analitik geri bildirim döngüsü oluşturma
- Sosyal medya çapraz paylaşımına genişletme (LinkedIn, X)`,
    },
    {
        slug: "akilli-ai-agent-olusturma",
        title: "Özel Workflow'larla Akıllı AI Agent Oluşturma",
        description:
            "AI Agent'lar sadece sohbet botları değil. İşte özel workflow'larla gerçekten faydalı AI agent'lar nasıl oluşturulur.",
        date: "2026-04-15",
        category: "AI Agents",
        tags: ["AI Agent", "LangChain", "Otomasyon", "API", "n8n"],
        coverImage: "/blog/ai-agents-cover.png",
        featured: true,
        readingTime: 10,
        body: `## AI Agent Nedir?

AI Agent, belirli bir görevi yerine getirmek için çeşitli araçları ve API'leri kullanabilen otonom bir yapay zeka sistemidir. Sıradan bir chatbot'tan farklı olarak, agent'lar karar verebilir, araçları kullanabilir ve karmaşık görevleri adım adım çözebilir.

## Neden Özel Agent'lar?

Hazır agent çözümleri (ChatGPT, Claude vb.) genel amaçlıdır. Ancak iş süreçlerinize özel bir agent, tam olarak sizin ihtiyaçlarınızı karşılar:

- **Veri erişimi** — Şirket veritabanınıza, CRM'inize veya dahili araçlarınıza doğrudan erişim
- **İş mantığı** — Sektörünüze özel kurallar ve karar ağaçları
- **Entegrasyon** — Mevcut workflow'larınızla sorunsuz çalışma
- **Güvenlik** — Verileriniz kendi altyapınızda kalır

## Mimari Yaklaşım

Özel AI agent oluşturmak için tercih ettiğim mimari:

- **Orchestration katmanı** — n8n veya LangChain ile agent davranışını yönetme
- **LLM katmanı** — GPT-4 veya Claude ile doğal dil anlama ve üretme
- **Araç katmanı** — API çağrıları, veritabanı sorguları, dosya işlemleri
- **Bellek katmanı** — Konuşma geçmişi ve bağlam yönetimi

## Pratik Örnek: Müşteri Destek Agent'ı

Bir e-ticaret şirketi için oluşturduğum müşteri destek agent'ı:

- Sipariş durumu sorgulama (veritabanı erişimi)
- İade talebi oluşturma (iş süreçleri entegrasyonu)
- Ürün önerileri (AI destekli)
- Karmaşık sorunları insan operatöre yönlendirme (eskalasyon mantığı)

## Sonuçlar

- Müşteri destek yanıt süresi **%60 azaldı**
- Basit soruların **%85'i** agent tarafından çözüldü
- Müşteri memnuniyeti puanı **4.2'den 4.7'ye** yükseldi

## Önemli Noktalar

- Her zaman bir "insan müdahalesi" mekanizması ekleyin
- Agent'ın yapamayacağı şeyleri net bir şekilde belirleyin
- Düzenli olarak agent kararlarını gözden geçirin ve iyileştirin
- Güvenlik ve veri gizliliğini en baştan tasarıma dahil edin`,
    },
];

/* ---------- Query helpers ---------- */

export function getPosts(): BlogPost[] {
    return [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
    return posts.map((p) => p.slug);
}

export function getPostsByCategory(category: Category): BlogPost[] {
    return getPosts().filter((p) => p.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
    return getPosts().filter((p) => p.featured);
}

export function getAllTags(): string[] {
    const tags = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
}

export function getCategories(): CategoryInfo[] {
    const categoryMap: Record<Category, { emoji: string; description: string }> = {
        "AI Agents": {
            emoji: "🤖",
            description: "Otonom AI sistemleri ve agent mimarileri",
        },
        "n8n Workflows": {
            emoji: "⚡",
            description: "n8n ile otomasyon workflow'ları",
        },
        "Make Automations": {
            emoji: "🔧",
            description: "Make (Integromat) ile otomasyonlar",
        },
        "Prompt Engineering": {
            emoji: "✨",
            description: "Etkili prompt tasarımı ve teknikleri",
        },
        "AI Araçları": {
            emoji: "🧠",
            description: "AI araçları ve entegrasyonları",
        },
        Rehberler: {
            emoji: "📚",
            description: "Adım adım teknik rehberler",
        },
    };

    return (Object.keys(categoryMap) as Category[]).map((name) => ({
        name,
        emoji: categoryMap[name].emoji,
        description: categoryMap[name].description,
        count: posts.filter((p) => p.category === name).length,
    }));
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
    const current = getPostBySlug(slug);
    if (!current) return [];
    return getPosts()
        .filter((p) => p.slug !== slug && p.category === current.category)
        .slice(0, limit);
}

/* ============================================================
   Projects content layer
   ============================================================ */

const projects: Project[] = [
    {
        slug: "project-sentinel",
        title: "Project Sentinel",
        description: "Autonomous Drone Control system powered by AI.",
        client: "AeroTech",
        timeline: "6 Months",
        stack: ["React", "Python", "OpenCV"],
        role: "Lead Developer",
        tags: ["AI", "Drones", "Automation"],
        featured: true,
        outcomes: [
            { label: "Efficiency", value: "+40%" },
            { label: "Latency", value: "< 20ms" }
        ],
        body: `## Problem\n\nManual drone control requires high cognitive load.\n\n## Solution\n\nAn AI-powered autonomous control system.\n\n## Results\n\nReduced required operator time significantly.`
    },
    {
        slug: "pixel-dynamics",
        title: "Pixel Dynamics",
        description: "Retro Game Engine running on the web.",
        client: "Indie Game Studio",
        timeline: "3 Months",
        stack: ["Next.js", "TypeScript", "Canvas API"],
        role: "Frontend Engineer",
        tags: ["Gaming", "WebAssembly"],
        featured: true,
        outcomes: [
            { label: "FPS", value: "60+" },
            { label: "Size", value: "< 2MB" }
        ],
        body: `## Problem\n\nWeb-based game engines are often bloated.\n\n## Solution\n\nA lightweight retro game engine.\n\n## Results\n\nSilky smooth 60 FPS gameplay on any device.`
    },
    {
        slug: "synthflow",
        title: "SynthFlow",
        description: "Generative Music AI using advanced neural networks.",
        client: "MusicTech Startup",
        timeline: "4 Months",
        stack: ["Python", "TensorFlow", "React"],
        role: "AI Researcher",
        tags: ["AI", "Music", "Generative"],
        featured: true,
        outcomes: [
            { label: "Tracks", value: "10k+" },
            { label: "Rating", value: "4.8/5" }
        ],
        body: `## Problem\n\nCreating royalty-free background music is expensive.\n\n## Solution\n\nA neural network capable of composing infinite unique tracks.\n\n## Results\n\nThousands of high-quality tracks produced for creators.`
    }
];

export function getProjects(): Project[] {
    return [...projects];
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return getProjects().filter((p) => p.featured);
}
