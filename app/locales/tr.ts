const tr = {
  hero: { label: "İSTANBUL · ALMATI", badge: "GİRİŞİMCİ · SANAYİCİ", subtitle: "Tecrübe, cesaret ve yeni başlangıçlarla şekillenen bir yaşam.", description: "İstanbul’dan Almatı’ya uzanan bir hayat yolculuğu. Mücadele, üretim, yeniden başlama cesareti ve her gün daha iyi olma arzusu.", primaryButton: "Hikâyemi keşfet", secondaryButton: "Yolculuğum", birthplace: "İstanbul", istanbul: "İSTANBUL", almaty: "ALMATI", experience: "Yıllık deneyim" },
  nav: { about: "Hakkımda", journey: "Yolculuğum", values: "Değerlerim", life: "Hayata Dair", gallery: "Galeri", articles: "Yazılar", blog: "Blog", contact: "İletişim" },
  about: { label: "HAKKIMDA", titleStart: "Hayatım boyunca ", titleHighlight: "üretmeye ve gelişmeye ", titleEnd: "inandım.", intro: "Başarı benim için hiçbir zaman yalnızca maddi sonuçlardan ibaret olmadı.", paragraphOne: "İnsanların güvenini kazanmak, kalıcı işler üretmek, yeni fikirler geliştirmek ve her gün bir önceki günden daha iyi olmak benim için her zaman önemliydi.", paragraphTwo: "2003 yılında Kazakistan’a yerleşerek hayatımda yeni bir sayfa açtım. Farklı sektörlerde çalıştım, yeni başlangıçlar yaptım, hatalarımdan öğrendim ve sağlam ilişkiler kurmaya odaklandım.", paragraphThree: "Bu site; mesleki çalışmalarımı, hayat yolculuğumu, düşüncelerimi, doğaya ve spora olan ilgimi bir araya getiriyor." },
  journey: { label: "HAYAT YOLCULUĞUM", title: "İstanbul’dan Almatı’ya uzanan bir hayat hikâyesi.", description: "Her dönem bana yeni bir tecrübe, yeni bir bakış açısı ve yeniden başlama gücü kazandırdı.", timeline: [
    { year: "1978", title: "İstanbul’da doğdum", text: "13 Kasım 1978 tarihinde İstanbul’da dünyaya geldim. Hayatımın ilk yılları Kadıköy ve çevresinde geçti." },
    { year: "1980’ler", title: "Çocukluk ve eğitim yılları", text: "Çocukluk yıllarım Yeldeğirmeni ve Kozyatağı’nda geçti. Eğitim hayatım boyunca sorumluluk almayı öğrendim." },
    { year: "1990’lar", title: "İlk iş deneyimleri", text: "Muhasebe, gümrük, satış ve operasyon alanlarında edindiğim tecrübeler sonraki işlerimin temelini oluşturdu." },
    { year: "1990’lar", title: "Galatasaray sevdasıyla geçen gençlik", text: "Futbol bana aidiyet, mücadele, sabır ve takım ruhunu öğretti." },
    { year: "2003", title: "Kazakistan yolları", text: "İş nedeniyle Almatı’ya geldim. Kısa süreli görünen bu yolculuk hayatımın önemli dönüm noktalarından biri oldu." },
    { year: "2003–2005", title: "Casino dönemi", text: "Yönetim ve operasyon alanında çalışarak uluslararası iş tecrübesi kazandım." },
    { year: "2005–2007", title: "Otel dönemi", text: "Hizmet, organizasyon, müşteri ilişkileri ve ekip yönetimi alanlarında deneyim edindim." },
    { year: "2007–2017", title: "Restoran ve catering dönemi", text: "Büyük ekipleri ve yoğun operasyonları yönetme konusunda güçlü bir tecrübe kazandım." },
    { year: "Sonraki yıllar", title: "CTZ Group’un kuruluşu", text: "Ticari ve yönetsel tecrübelerimi bir araya getirerek CTZ Group’u kurdum." },
    { year: "Bugün", title: "Üretmeye ve gelişmeye devam", text: "İş, spor, doğa, kişisel gelişim ve yeni hedeflerle geleceğe doğru ilerliyorum." }
  ]},
  values: { label: "DEĞERLERİM", title: "Yolumu belirleyen temel ilkeler.", description: "Kararlarımın ve attığım adımların arkasında değişmeyen değerler vardır.", items: [
    { number: "01", title: "Hedef", text: "İnsan ulaşmak istediği yeri net gördüğünde yolunu da bulmaya başlar." },
    { number: "02", title: "Disiplin", text: "Başarı, her gün tekrarlanan doğru alışkanlıkların sonucudur." },
    { number: "03", title: "Cesaret", text: "Bazen ilk adımı atacak cesaret, bütün cevaplardan daha önemlidir." }
  ]},
  career: { label: "KARİYER VE GİRİŞİMCİLİK", title: "İş hayatımın önemli bir parçası: CTZ Group", description: "CTZ Group ile endüstriyel soğutma, soğuk hava depoları, panel sistemleri ve uluslararası projeler alanında çalışmalar yürütüyorum.", button: "CTZ Group web sitesini ziyaret et" },
  gallery: { label: "HAYATIN İÇİNDEN", title: "İşin ötesinde, hayatın kendisi.", description: "Spor, doğa, yolculuklar ve yıllar içinde biriken anılar...", nature: { label: "DOĞA", title: "Kendimi bulduğum yer", text: "Şehrin gürültüsünden uzaklaşıp yeniden düşünmek." }, life: { label: "YOLCULUK", title: "Her gün yeniden başlamak", text: "Geçmişten öğrenip geleceğe güvenle yürümek." } },
  contact: { label: "İLETİŞİM", title: "Yeni fikirler ve değerli bağlantılar için.", description: "Profesyonel iş birlikleri, uluslararası projeler veya fikir alışverişi için benimle iletişime geçebilirsiniz.", emailButton: "E-posta Gönder", linkedinButton: "LinkedIn" },
  articles: { label: "YAZILARIM", title: "Düşünceler, tecrübeler ve hayata dair notlar.", button: "Yakında →", items: [
    { category: "Hayata Dair", title: "İnsan hedefleri kadar büyür", text: "Hedef koymanın, sabrın ve kendine inanmanın yaşam üzerindeki etkileri." },
    { category: "Girişimcilik", title: "Yeniden başlama cesareti", text: "Zorlukların ardından tekrar ayağa kalkmak ve yeni bir yol kurmak üzerine." },
    { category: "Disiplin", title: "Sporun iş hayatına öğrettikleri", text: "Takım çalışması, mücadele, sabır ve süreklilik arasındaki güçlü bağ." }
  ]},
  footer: { slogan: "İstanbul’da başlayan, Almatı’da devam eden bir hayat yolculuğu.", copyright: "Cüneyt Tanrıverdi. Tüm hakları saklıdır." },
  stats: { kazakhstan: "Kazakistan’da Yaşam", experience: "Yıllık İş Deneyimi", projects: "Tamamlanan Proje", cities: "Çalışılan Şehir" },
  quotes: { mindset: "İnsan kendi zihnindeki engelleri kaldırdığı gün gerçek potansiyelini keşfeder.", natureLabel: "HAYATA DAİR", nature: "Bazı insanlar doğada huzur bulur, bazıları ise kendini. Ben, kendimi buldukça huzur bulduğum için doğayı bir başka seviyorum." },
  blog: { label: "BLOG", title: "Hayatımdan Hikâyeler", intro: "İstanbul’dan Almatı’ya uzanan hayat yolculuğumda yaşadığım tecrübeleri, anıları ve bana ders veren dönemleri burada paylaşıyorum.", home: "Ana sayfaya dön", read: "Hikâyeyi oku", back: "Blog’a dön", previous: "Önceki hikâye", next: "Sonraki hikâye" }
};
export default tr;
