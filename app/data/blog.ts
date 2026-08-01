import type { Language } from "../context/LanguageContext";

export type LocalizedText = Record<Language, string>;

export type BlogPost = {
  slug: string;
  year: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  lead: LocalizedText;
  paragraphs: Record<Language, string[]>;
  quote?: LocalizedText;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "2003-kazakistana-ilk-gelisim",
    year: "2003",
    category: { tr: "Hayat Hikâyem", en: "My Life Story", ru: "Моя история", kz: "Өмір тарихым" },
    title: { tr: "Kazakistan’a İlk Gelişim", en: "My First Arrival in Kazakhstan", ru: "Мой первый приезд в Казахстан", kz: "Қазақстанға алғаш келуім" },
    excerpt: { tr: "Kısa süreli bir iş yolculuğu olarak başlayan Almatı macerasının hayatımı nasıl değiştirdiği.", en: "How a short business trip to Almaty changed the direction of my life.", ru: "Как короткая деловая поездка в Алматы изменила мою жизнь.", kz: "Алматыға қысқа жұмыс сапары өмірімнің бағытын қалай өзгертті." },
    lead: { tr: "Birkaç aylık bir görev olarak başlayan yolculuk, hayatımın en önemli başlangıçlarından birine dönüştü.", en: "A journey planned for a few months became one of the most important beginnings of my life.", ru: "Поездка, рассчитанная на несколько месяцев, стала одним из самых важных начал моей жизни.", kz: "Бірнеше айға жоспарланған сапар өмірімдегі ең маңызды бастамалардың біріне айналды." },
    quote: { tr: "Bazen insan bir yere geçici olarak gider, fakat hayat ona orada kalıcı bir hikâye hazırlar.", en: "Sometimes you travel somewhere temporarily, but life prepares a lasting story for you there.", ru: "Иногда человек приезжает ненадолго, но жизнь готовит ему там долгую историю.", kz: "Кейде адам бір жерге уақытша барады, бірақ өмір оған сол жерде ұзақ тарих дайындайды." },
    paragraphs: {
      tr: ["2003 yılının Nisan ayında çalıştığım şirket tarafından Almatı’ya gönderildim. Görevim, Alatau Oteli’nde açılması planlanan casino projesinin hazırlık sürecinde yer almaktı.", "O güne kadar Kazakistan hakkında çok az şey biliyordum. Birkaç ay çalışıp İstanbul’a döneceğimi düşünüyordum.", "Yeni ülke, farklı dil ve bambaşka bir kültür beni bekliyordu. Almatı’nın dağları, geniş caddeleri ve yeşil dokusu ilk günden itibaren beni etkiledi.", "Bu yolculuk yalnızca iş hayatımı değil, özel hayatımı da değiştirdi. Zamanla Almatı ikinci vatanım oldu."],
      en: ["In April 2003, the company I worked for sent me to Almaty to support the preparations for a casino project planned at the Alatau Hotel.", "I knew very little about Kazakhstan and expected to return to Istanbul after a few months.", "A new country, a different language and an unfamiliar culture were waiting for me. Almaty’s mountains, broad streets and green landscape impressed me from the first day.", "This journey changed not only my career but also my personal life. Over time, Almaty became my second home."],
      ru: ["В апреле 2003 года компания, в которой я работал, направила меня в Алматы для участия в подготовке проекта казино в отеле «Алатау».", "Я почти ничего не знал о Казахстане и думал, что через несколько месяцев вернусь в Стамбул.", "Меня ждали новая страна, другой язык и незнакомая культура. Горы, широкие улицы и зелёный облик Алматы впечатлили меня с первого дня.", "Эта поездка изменила не только мою карьеру, но и личную жизнь. Со временем Алматы стал моим вторым домом."],
      kz: ["2003 жылдың сәуірінде жұмыс істеген компаниям мені «Алатау» қонақүйінде жоспарланған казино жобасының дайындығына қатысу үшін Алматыға жіберді.", "Ол кезде Қазақстан туралы аз білетінмін және бірнеше айдан кейін Ыстанбұлға қайтамын деп ойладым.", "Мені жаңа ел, басқа тіл және бейтаныс мәдениет күтіп тұрды. Алматының таулары, кең көшелері мен жасыл келбеті алғашқы күннен әсер етті.", "Бұл сапар тек кәсіби емес, жеке өмірімді де өзгертті. Уақыт өте Алматы екінші үйіме айналды."]
    }
  },
  {
    slug: "casino-gunleri",
    year: "2003–2005",
    category: { tr: "İş Hayatı", en: "Business Life", ru: "Деловая жизнь", kz: "Іскерлік өмір" },
    title: { tr: "Casino Günleri", en: "The Casino Years", ru: "Годы работы в казино", kz: "Казино кезеңі" },
    excerpt: { tr: "Farklı kültürlerle çalıştığım ve yönetimi öğrendiğim yoğun bir dönem.", en: "An intense period of multicultural teamwork and management experience.", ru: "Насыщенный период международной работы и управленческого опыта.", kz: "Әртүрлі мәдениет өкілдерімен жұмыс істеп, басқаруды үйренген кезең." },
    lead: { tr: "Kazakistan’daki ilk iş deneyimim, insan ilişkileri ve operasyon yönetimi açısından gerçek bir okuldu.", en: "My first work experience in Kazakhstan became a real school of people and operations management.", ru: "Первый опыт работы в Казахстане стал для меня настоящей школой управления людьми и операциями.", kz: "Қазақстандағы алғашқы жұмыс тәжірибем адамдар мен операцияларды басқарудың нағыз мектебі болды." },
    quote: { tr: "İnsan yönetmek yalnızca görev vermek değil; anlamak, dinlemek ve doğru zamanda karar vermektir.", en: "Managing people is not only about assigning tasks; it is about understanding, listening and deciding at the right time.", ru: "Управлять людьми — значит не только давать задачи, но и понимать, слушать и вовремя принимать решения.", kz: "Адам басқару тек тапсырма беру емес; түсіну, тыңдау және уақытында шешім қабылдау." },
    paragraphs: {
      tr: ["Miracle Casino adıyla başlayan süreç daha sonra Regal Casinos olarak devam etti. Operasyonun birçok aşamasında görev aldım.", "Sektörün arka planında disiplin, güvenlik, müşteri ilişkileri ve ekip çalışması vardı.", "Farklı ülkelerden gelen insanlarla çalışmak kültürler arası iletişimin önemini öğretti.", "Bu yıllarda kazandığım kriz yönetimi ve ekip disiplini, sonraki işletmelerimin temelini oluşturdu."],
      en: ["The process began under the name Miracle Casino and later continued as Regal Casinos. I took responsibility in many parts of the operation.", "Behind the entertainment world were discipline, security, customer relations and teamwork.", "Working with people from different countries taught me the importance of cross-cultural communication.", "The crisis management and team discipline I learned during these years became a foundation for my later businesses."],
      ru: ["Работа началась в Miracle Casino, а затем продолжилась в Regal Casinos. Я отвечал за многие части операционной деятельности.", "За внешним миром развлечений стояли дисциплина, безопасность, отношения с клиентами и командная работа.", "Работа с людьми из разных стран показала важность межкультурного общения.", "Навыки кризисного управления и командной дисциплины стали основой моих последующих проектов."],
      kz: ["Жұмыс Miracle Casino атауымен басталып, кейін Regal Casinos ретінде жалғасты. Операцияның көптеген кезеңіне жауапты болдым.", "Сыртқы ойын-сауықтың артында тәртіп, қауіпсіздік, клиентпен қарым-қатынас және команда жұмысы тұрды.", "Әртүрлі елден келген адамдармен жұмыс істеу мәдениетаралық байланыстың маңызын көрсетті.", "Осы жылдары үйренген дағдарыс басқаруы мен команда тәртібі кейінгі кәсіптерімнің негізіне айналды."]
    }
  },
  {
    slug: "esimle-tanismam",
    year: "17.08.2003",
    category: { tr: "Hayatımdan", en: "Personal", ru: "Личное", kz: "Жеке өмір" },
    title: { tr: "Hayatımı Değiştiren Tanışma", en: "The Meeting That Changed My Life", ru: "Встреча, изменившая мою жизнь", kz: "Өмірімді өзгерткен кездесу" },
    excerpt: { tr: "Almatı’ya gelişimin bana kazandırdığı en değerli karşılaşmanın hikâyesi.", en: "The story of the most valuable meeting Almaty brought into my life.", ru: "История самой важной встречи, которую подарил мне Алматы.", kz: "Алматы маған сыйлаған ең қымбат кездесудің тарихы." },
    lead: { tr: "Bazı karşılaşmalar o an sıradan görünür; yıllar sonra hayatınızın en önemli günü olduğunu anlarsınız.", en: "Some meetings seem ordinary at first; years later, you understand they changed everything.", ru: "Некоторые встречи сначала кажутся обычными, но спустя годы понимаешь, что они изменили всё.", kz: "Кейбір кездесулер алғашында қарапайым көрінеді, бірақ жылдардан кейін бәрін өзгерткенін түсінесіз." },
    quote: { tr: "Hayatta bazı insanlar tesadüfen karşınıza çıkmaz; doğru zamanda ve doğru nedenle gelirler.", en: "Some people do not enter your life by accident; they arrive at the right time for the right reason.", ru: "Некоторые люди появляются в нашей жизни не случайно — они приходят в нужное время и по важной причине.", kz: "Кейбір адамдар өмірімізге кездейсоқ келмейді; олар дұрыс уақытта, дұрыс себеппен келеді." },
    paragraphs: {
      tr: ["Kazakistan’a geleli çok olmamıştı. Yeni bir ülkeye ve yeni bir işe alışmaya çalışıyordum.", "17 Ağustos 2003 günü tanıştığım insanın yıllar sonra hayat arkadaşım olacağını bilmiyordum.", "O günden sonra Kazakistan yalnızca çalıştığım ülke olmaktan çıktı; burada bir aile ve gelecek kurmaya başladım.", "Zor zamanlarda, yeni başlangıçlarda ve önemli kararlarda ailemin desteği her zaman en büyük gücüm oldu."],
      en: ["I had not been in Kazakhstan for long and was still adapting to a new country and a new job.", "On 17 August 2003, I could not have known that the person I met would become my life partner.", "From that day, Kazakhstan was no longer only the country where I worked; it became the place where I built a family and a future.", "Through difficult times, new beginnings and important decisions, my family’s support has always been my greatest strength."],
      ru: ["Я совсем недавно приехал в Казахстан и ещё привыкал к новой стране и новой работе.", "17 августа 2003 года я не мог знать, что встреченный мной человек станет моей спутницей жизни.", "С этого дня Казахстан перестал быть только страной работы — здесь я начал строить семью и будущее.", "В трудные времена, при новых начинаниях и важных решениях поддержка семьи всегда была моей главной силой."],
      kz: ["Қазақстанға келгеніме көп болмаған, жаңа ел мен жаңа жұмысқа бейімделіп жүрген кезім еді.", "2003 жылдың 17 тамызында танысқан адамның кейін өмірлік серігім болатынын білмедім.", "Сол күннен бастап Қазақстан тек жұмыс істейтін ел емес, отбасы мен болашақ құрған мекенге айналды.", "Қиын кезеңдерде, жаңа бастамаларда және маңызды шешімдерде отбасымның қолдауы ең үлкен күшім болды."]
    }
  },
  {
    slug: "restoran-yillari",
    year: "2007",
    category: { tr: "Girişimcilik", en: "Entrepreneurship", ru: "Предпринимательство", kz: "Кәсіпкерлік" },
    title: { tr: "Restoran Yılları", en: "The Restaurant Years", ru: "Ресторанные годы", kz: "Мейрамхана жылдары" },
    excerpt: { tr: "Alatau Hotel’de başlayan restoran işletmeciliği dönemim.", en: "My restaurant management period that began at the Alatau Hotel.", ru: "Период ресторанного бизнеса, начавшийся в отеле «Алатау».", kz: "«Алатау» қонақүйінде басталған мейрамхана басқару кезеңім." },
    lead: { tr: "Hayatımın en hareketli ve öğretici dönemlerinden biri, restoran işletmeciliğiyle başladı.", en: "One of the busiest and most educational chapters of my life began with restaurant management.", ru: "Один из самых насыщенных и поучительных этапов моей жизни начался с ресторанного бизнеса.", kz: "Өмірімнің ең қарқынды әрі үйреткен кезеңдерінің бірі мейрамхана бизнесімен басталды." },
    quote: { tr: "Bir restoran yalnızca yemek satmaz; misafirlerine yaşanacak bir anı sunar.", en: "A restaurant does not only sell food; it gives its guests a memory to live.", ru: "Ресторан продаёт не только еду — он дарит гостям воспоминания.", kz: "Мейрамхана тек тағам сатпайды; қонақтарға есте қаларлық сәт сыйлайды." },
    paragraphs: {
      tr: ["Casino döneminden sonra hizmet sektöründeki yolculuğum restoran işletmeciliğiyle devam etti.", "Personel, tedarik, mutfak organizasyonu ve müşteri memnuniyetini aynı anda yönetmek gerekiyordu.", "Her gün yeni sorunlar çıkıyor, her gün yeni çözümler üretiyorduk.", "Bugün CTZ Group’u yönetirken kullandığım birçok yaklaşımın temeli o yıllarda atıldı."],
      en: ["After the casino period, my journey in the service sector continued with restaurant management.", "Staff, supply, kitchen organization and guest satisfaction had to be managed at the same time.", "Every day brought new problems and demanded new solutions.", "Many of the management principles I use at CTZ Group today were shaped during those years."],
      ru: ["После периода казино мой путь в сфере сервиса продолжился ресторанным бизнесом.", "Нужно было одновременно управлять персоналом, снабжением, кухней и удовлетворённостью гостей.", "Каждый день приносил новые проблемы и требовал новых решений.", "Многие принципы, которые я использую сегодня в CTZ Group, сформировались именно тогда."],
      kz: ["Казино кезеңінен кейін қызмет көрсету саласындағы жолым мейрамхана басқарумен жалғасты.", "Қызметкерлерді, жеткізуді, асүй жұмысын және қонақтардың қанағаттануын қатар басқару қажет болды.", "Күн сайын жаңа мәселе туып, жаңа шешім табатынбыз.", "Бүгінде CTZ Group басқаруында қолданатын көптеген қағидалардың негізі сол жылдары қаланды."]
    }
  },
  {
    slug: "catering-donemi",
    year: "2008–2012",
    category: { tr: "Girişimcilik", en: "Entrepreneurship", ru: "Предпринимательство", kz: "Кәсіпкерлік" },
    title: { tr: "Catering Dönemi", en: "The Catering Period", ru: "Период кейтеринга", kz: "Кейтеринг кезеңі" },
    excerpt: { tr: "Kurumsal catering operasyonları, büyük ekipler ve yoğun iş temposu.", en: "Corporate catering operations, large teams and an intense work rhythm.", ru: "Корпоративный кейтеринг, большие команды и напряжённый рабочий ритм.", kz: "Корпоративтік кейтеринг, үлкен командалар және қарқынды жұмыс ырғағы." },
    lead: { tr: "Büyük ekipleri ve kurumsal müşteri beklentilerini yönetmeyi öğrendiğim yıllar.", en: "The years when I learned to manage large teams and corporate expectations.", ru: "Годы, когда я научился управлять большими командами и ожиданиями корпоративных клиентов.", kz: "Үлкен командалар мен корпоративтік клиенттердің талаптарын басқаруды үйренген жылдар." },
    quote: { tr: "Büyük işler yalnızca iyi fikirlerle değil; doğru ekip, disiplin ve süreklilikle büyür.", en: "Great work grows not only from good ideas, but from the right team, discipline and consistency.", ru: "Большие дела растут не только благодаря идеям, но и благодаря правильной команде, дисциплине и постоянству.", kz: "Үлкен іс тек жақсы идеямен емес, дұрыс команда, тәртіп және тұрақтылықпен өседі." },
    paragraphs: {
      tr: ["Restoran işletmeciliğinin ardından kurumsal catering alanına geçtim.", "Kcell’in farklı merkezlerindeki yemekhane operasyonlarını yönettik ve her gün düzenli hizmet sunduk.", "Menü planlaması, satın alma, hijyen ve personel yönetimi operasyonun ayrılmaz parçalarıydı.", "Bu deneyim, kendi şirketim Anc Pyramid Catering’i kurma kararımın temelini oluşturdu."],
      en: ["After restaurant management, I moved into corporate catering.", "We managed dining operations at different Kcell locations and delivered reliable service every day.", "Menu planning, purchasing, hygiene and staff management were essential parts of the operation.", "This experience became the foundation of my decision to establish Anc Pyramid Catering."],
      ru: ["После ресторанного бизнеса я перешёл в корпоративный кейтеринг.", "Мы управляли столовыми в разных подразделениях Kcell и ежедневно обеспечивали стабильный сервис.", "Планирование меню, закупки, гигиена и управление персоналом были неотъемлемой частью работы.", "Этот опыт стал основой решения создать собственную компанию Anc Pyramid Catering."],
      kz: ["Мейрамхана бизнесінен кейін корпоративтік кейтеринг саласына өттім.", "Kcell компаниясының әртүрлі орталықтарындағы асхана жұмысын басқарып, күн сайын тұрақты қызмет көрсеттік.", "Мәзір жоспарлау, сатып алу, гигиена және қызметкерлерді басқару операцияның негізгі бөлігі болды.", "Бұл тәжірибе Anc Pyramid Catering компаниясын құру туралы шешімімнің негізіне айналды."]
    }
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
