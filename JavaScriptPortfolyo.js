const SITE_DATA = {
  // Profil & Başlıklar
  profile: {
    name: "Arda ÇAM",
    title: "Görsel İletişim Tasarımcısı (VCD)",
    badge: "Yeni Mezun &bull; İş Birliklerine Açık",
    heroHeading: "Kelimeleri Görsel Deneyimlere Dönüştürüyorum.",
    heroSubtext: "Marka kimliği, kinetik tipografi, 3D anlatı ve modern UI/UX disiplinlerini analitik tasarım metodolojisiyle birleştiriyorum.",
    email: "iletisim@ardacam.work",
    linkedin: "https://linkedin.com/in/ardacam"
  },

  // Kullandığın Tasarım Araçları (İstediğini sil, istediğini ekle)
  tools: [
    { name: "Illustrator", desc: "Vektör & Kimlik", icon: "fa-solid fa-pen-nib" },
    { name: "Photoshop", desc: "Görsel Manipülasyon", icon: "fa-solid fa-wand-magic-sparkles" },
    { name: "After Effects", desc: "Motion & Kinetik", icon: "fa-solid fa-film" },
    { name: "Figma", desc: "UI / UX Prototipleme", icon: "fa-brands fa-figma" },
    { name: "Blender", desc: "3D Görselleştirme", icon: "fa-solid fa-cube" },
    { name: "InDesign", desc: "Editoryal & Grid", icon: "fa-solid fa-book-open" }
  ],

  // Projelerin (Buraya istediğin kadar proje ekleyebilir veya silebilirsin)
  projects: [
    {
      id: 1,
      title: "Kozmo Spektrum: Kinetik Kimlik",
      category: "Motion & Kinetik",
      tag: "motion",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
      summary: "Deneysel tipografi ve After Effects parçacık sistemleriyle etkileşime giren dinamik sergi kimliği.",
      problem: "Statik afişlerin yeni medya sanatları festivalinde genç ziyaretçilerin dikkatini çekmemesi.",
      solution: "Sese duyarlı parametrik kinetik fontlar ve dinamik kimlik sistemi tasarlandı.",
      tools: "After Effects, Illustrator"
    },
    {
      id: 2,
      title: "Aura Botanica: Ambalaj & Marka",
      category: "Marka Kimliği",
      tag: "branding",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      summary: "Sürdürülebilir botanik cilt bakım markası için minimalist geometrik tipografi ve ambalaj deneyimi.",
      problem: "Doğal kozmetik sektöründeki klişe yaprak ikonları ve aşırı karmaşık etiketler.",
      solution: "Petrol yeşili ve sıcak kehribar tonlarıyla okunabilirliği yüksek temiz grid yapısı kuruldu.",
      tools: "Illustrator, InDesign"
    },
    {
      id: 3,
      title: "Nexus VR: Mekansal UI/UX",
      category: "UI / UX",
      tag: "uiux",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=900&q=80",
      summary: "3D uzamda iş birliği sağlayan artırılmış gerçeklik arayüz prototipi.",
      problem: "Mekansal arayüzlerde derinlik hissi eksikliği ve göz yoran parlak kontrastlar.",
      solution: "Yarı saydam cam morfizmleri ve sezgisel el jesti hiyerarşisi oluşturuldu.",
      tools: "Figma, Blender"
    }
  ]
};