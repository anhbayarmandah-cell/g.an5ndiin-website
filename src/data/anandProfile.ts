import { AnandProfileData } from '../types/profile.ts';

export const anandProfile: AnandProfileData = {
  name: 'Ананд',
  age: 16,
  birthday: '2010.07.15',
  favoriteSeason: 'Зуны улирал',
  religion: 'Шүтлэггүй',
  height: '180 см',
  zodiac: 'Мэлхий орд ♋',
  family: 'Дээрээ 1 ахтай',
  role: 'Ирээдүйн Software Engineer & Founder / CEO',
  location: 'Улаанбаатар, Монгол',
  tagline: 'Спорт, хувцас дизайн, орчин үеийн технологийг хослуулагч',
  bio: 'Сайн байна уу! Намайг Ананд гэдэг. Би 2010.07.15-нд төрсөн, зуны улиралд дуртай. Сагсан бөмбөг идэвхтэй тоглож, пүүз хувцасны соёлд дурлаж, вэб технологи суралцаж байна.',
  studyPurpose: 'Их сургуульд ороход болон өөрийн технологийн стартап, хувцасны брэндээ дэлхийн түвшинд гаргахад код сурах нь суурь хөшүүрэг болж байна.',
  
  careerVision: {
    title: 'Software Engineer & Founder / CEO',
    horizon: '10 жилийн дотор',
    focus: 'Спортын хувцас хэрэглэл, өдөр тутмын streetwear, пүүз гутал үйлдвэрлэл + Цахим худалдааны ухаалаг платформ',
    rationale: 'Хувцсанд туйлын сонирхолтой тул технологи, компьютертой хослуулж хөгжүүлснээр бизнесээ илүү ухаалаг, автоматжуулсан, хурдтай авч явах бүрэн боломжтой болно.',
    targetProducts: [
      'Спортын өндөр бүтээмжит хувцас хэрэглэл',
      'Өдөр тутмын загварлаг streetwear',
      'Инновацлаг пүүз, сагсан бөмбөгийн гутал',
      'AI & Web технологид суурилсан худалдааны систем'
    ]
  },

  skills: [
    {
      id: 'code',
      name: 'Код бичих (Frontend & Web)',
      category: 'tech',
      description: 'HTML, CSS, JavaScript суурь болон орчин үеийн вэб технологиудыг эзэмших',
      level: 80
    },
    {
      id: 'business',
      name: 'Бизнесийн анхан шатны мэдлэг',
      category: 'business',
      description: 'Брэнд бүтээх, зах зээлийн судалгаа, борлуулалт, өөрийн дэлгүүрээ нээх төлөвлөлт',
      level: 75
    },
    {
      id: 'leadership',
      name: 'Манлайлах чадвар (Leadership)',
      category: 'soft',
      description: 'Төслийг удирдах, зорилгодоо багаа дагуулах, манлайлагч сэтгэлгээ',
      level: 85
    },
    {
      id: 'teamwork',
      name: 'Багаар ажиллах чадвар (Teamwork)',
      category: 'soft',
      description: 'Сагсан бөмбөгийн талбай болон төсөл дээр хамтрагчидтайгаа нэгэн санаатай байх',
      level: 90
    },
    {
      id: 'grit',
      name: 'Тууштай байдал (Persistence & Grit)',
      category: 'soft',
      description: 'Эхлүүлсэн ажлаа дуусгах, саад бэрхшээлээс суралцаж урагшлах чадвар',
      level: 95
    }
  ],

  roadmap: [
    {
      step: '01',
      title: 'Вэб хөгжүүлэлтийг бүрэн эзэмших',
      target: 'Яг одоо (Энэ ангидаа)',
      status: 'in-progress',
      description: 'HTML5, CSS3, орчин үеийн JavaScript-ийг өөрийн болгож, бие даан цэвэр кодтой вэбсайтууд бүтээнэ.'
    },
    {
      step: '02',
      title: 'Өөрийн дэлгүүрийг нээж, вебсайттай болох',
      target: 'Энэ жил',
      status: 'in-progress',
      description: 'Хувцас, спортын хэрэглэлийн өөрийн жижиг дэлгүүрээ нээж, бүтээгдэхүүнээ борлуулах өөрийн бие даасан онлайн платформоо ажиллуулна.'
    },
    {
      step: '03',
      title: 'Англи хэл: IELTS 8.0 & SAT 1200+',
      target: 'Ирэх жил гэхэд',
      status: 'in-progress',
      description: 'Англи хэлний академик мэдлэгээ дээд зэргээр ахиулж, олон улсын их сургуулиудад тэтгэлэгтэй өрсөлдөх бэлтгэл хангана.'
    },
    {
      step: '04',
      title: 'Их сургуульд мэргэжлээрээ гүнзгийрүүлэн суралцах',
      target: 'Ирээдүйд',
      status: 'upcoming',
      description: 'Компьютерийн ухаан, програм хангамж, бизнес менежментийн чиглэлээр дэлхийн шилдэг хөтөлбөрүүдэд гүнзгийрүүлэн боловсорно.'
    }
  ],

  hobbies: {
    sport: {
      title: 'Сагсан бөмбөг (Basketball)',
      teams: ['JCL Rigorer', 'Dream Club'],
      role: 'Талбайн тоглогч, өндөр 180 см'
    },
    music: {
      artists: ['Vandebo', 'Ginjin'],
      favoriteSong: 'Хүсээгүй'
    },
    entertainment: {
      movies: ['Hustle', 'Diary of a Wimpy Kid'],
      anime: ['Hunter x Hunter'],
      games: ['CS2 (m0NESY)', 'Dress to', 'Basketball']
    },
    food: 'Их хоол (Эрч хүч өгөх тэжээллэг, амттай хоолнууд)',
    creative: 'Instagram Reels & Богино хэмжээний бичлэг хийх'
  },

  interestingFacts: [
    {
      icon: 'Dribbble',
      title: 'NBA: Cooper Flagg',
      detail: 'Би NBA-ээс Cooper Flagg-д дуртай. Түүний тоглолтын арга барил, ирээдүйн чадавх, эрч хүч үнэхээр урам өгдөг.',
      tag: 'NBA шүтээн'
    },
    {
      icon: 'Crosshair',
      title: 'CS2: m0NESY',
      detail: 'CS2 дээр харин m0NESY-д дуртай. Дэлхийн хамгийн хурдан, гайхалтай AWP мэргэн буудагч.',
      tag: 'CS2 Esports'
    },
    {
      icon: 'Sparkles',
      title: 'Шашин: Шүтлэггүй',
      detail: 'Шашин: Шүтлэггүй. Өөрийн бодит хичээл зүтгэл, сахилга бат, сурч мэдсэн зүйлдээ итгэдэг.',
      tag: 'Үзэл баримтлал'
    },
    {
      icon: 'Sun',
      title: '2010.07.15 & Зуны улирал',
      detail: 'Би 2010.07.15-нд төрсөн, дулаахан, нарлаг зуны улиралд хамгийн их дуртай.',
      tag: 'Төрсөн өдөр'
    },
    {
      icon: 'BookOpen',
      title: 'Монголын Нууц Товчоо',
      detail: 'Монголын түүхийн охь дээж болсон "Монголын Нууц Товчоо"-г бүрэн эхээр нь уншиж дуусгасан.',
      tag: 'Түүх & Оюун'
    },
    {
      icon: 'Dribbble',
      title: 'JCL Сагсан бөмбөг',
      detail: 'JCL лигт Rigorer болон Dream Club багуудаас идэвхтэй тоглодог (180 см өндөр).',
      tag: 'Спорт'
    }
  ],


  secretFacts: [
    {
      icon: 'Hand',
      title: 'Хурууны нугаралт',
      detail: 'Би дунд хуруугаа 90 градус нугалж чадна.',
      tag: 'Өвөрмөц онцлог'
    },
    {
      icon: 'Globe2',
      title: 'Хэл сурах & Барселона',
      detail: 'Би Испани, Итали, Герман, Франц хэл сурахыг хүсдэг, мөн том болоод Испани улсын Барселона хотод амьдрахыг хүсдэг.',
      tag: 'Мөрөөдлийн хот'
    },
    {
      icon: 'Trophy',
      title: 'FC Barcelona & Messi',
      detail: 'Би Барселонаг Реал Мадридаас илүүд үздэг. Messi is real GOAT! 🐐⚽',
      tag: 'Шүтээн & Хөлбөмбөг'
    },
    {
      icon: 'GraduationCap',
      title: 'Сургалтад сурч буй зорилго',
      detail: 'Их сургуульд ороход хэрэг болох болон ирээдүйн бизнесээ эхлүүлэх суурь тавигдаж байна.',
      tag: 'Ирээдүй'
    }
  ],

  projects: [
    {
      id: 'comforting-chebakia',
      title: 'Миний Вэб Бүтээл (Chebakia)',
      subtitle: 'Netlify дээр байршсан бодит бүтээл',
      description: 'Ананд миний бие даан боловсруулж, амжилттай интернетэд байршуулсан интерактив вэб төсөл. Цэвэр бүтэц, орчин үеийн кодчлолтой.',
      url: 'https://comforting-chebakia-654408.netlify.app/',
      tags: ['Netlify Live', 'Web Development', 'Interactive UI', 'Responsive Design'],
      features: [
        'Netlify сүлжээнд 24/7 тасралтгүй ажиллах live холбоос',
        'Мобайл болон дэлгэцийн бүх хэмжээнд зохицох responsive дизайн',
        'Хэрэглэгчийн таатай интерфэйс, интерактив шийдэл'
      ],
      category: 'Бодит төсөл',
      isFeatured: true
    }
  ],

  motivationQuote: {
    text: "Quien se esfuerza por aprender un 1 % más cada día nunca deja de avanzar. Brilla, incluso lejos de casa.",
    emoji: "✨",
    translation: "Өдөр бүр 1%-иар илүү суралцахыг хичээдэг хүн хэзээ ч зогсолтгүй урагшилдаг. Гэрээсээ хол байсан ч гэрэлт."
  }
};
