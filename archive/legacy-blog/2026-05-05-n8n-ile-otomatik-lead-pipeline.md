---
slug: n8n-ile-otomatik-lead-pipeline
title: "n8n ile Otomatik Lead Pipeline Nasıl Kurulur?"
description: "Haftalık 6 saatlik manuel işi tamamen ortadan kaldıran bir n8n otomasyon workflow'u nasıl kurdum? Adım adım anlatıyorum."
date: 2026-05-05
category: n8n Workflows
tags: [n8n, Otomasyon, Lead Generation, Webhook, Notion]
coverImage: ./images/workflow-cover.png
featured: true
readingTime: 8
---

## Problem

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
- Takip dizisine doğrudan takvim rezervasyonu entegre etme
