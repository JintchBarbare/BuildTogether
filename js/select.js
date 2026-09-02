const translations = {
  geo: {
    search_placeholder: "მოძებნე ხელოსანი ან სერვისი... (მაგ. სანტექნიკი, კაფელში, არქიტექტორი)",
    login_btn: "შესვლა",
    nav_projects: "პროექტები",
    footer_desc: "ციფრული პლატფორმა, რომელიც <br> აერთიანებს მშენებლობას, სრულ <br> რემონტსა და წვრილმან <br> საყოფაცხოვრებო საქმეების ხელოსნებს. <br> გახადე ნებისმიერი პროცესი მარტივი და <br> ორგანიზებული.",
    footer_col1_title: "მომსახურებები",
    footer_link1: "მშენებლობა",
    footer_link2: "სრული რემონტი",
    footer_link3: "წვრილმანი შეკეთება & მონტაჟი",
    footer_col2_title: "პლატფორმა & კომპანია",
    footer_link4: "როგორ მუშაობს",
    footer_link5: "ჩვენ შესახებ",
    footer_link6: "ბლოგი / რჩევები",
    footer_link7: "ხშირად დასმული კითხვები",
    footer_col3_title: "კონტაქტი",
    footer_contact1: "თბილისი, საქართველო",
    page_main_title: "რომელ სფეროში მოღვაწეობთ?",
    page_subtitle: "აირჩიეთ თქვენი მიმართულება, დარეგისტრირდით და მიიღეთ ახალი შეკვეთები",
    service1_title: "სარემონტო ბრიგადა / გუნდი",
    service1_desc: "ვიღებ ბინების, სახლების ან კომერციული ფართების სრულ <br> სარემონტო პროექტებს",
    service1_btn: "შექმენი პროფილი",
    service3_title: "ვარ ინდივიდუალური პროფესიონალი",
    service3_desc: "ვასრულებ კონკრეტულ სარემონტო სამუშაოებს <br> (მაგ: ელექტროობა, კაფელ-მეტლახი, სამალიარო)",
    service3_btn: "შექმენი პროფილი"
  },
  eng: {
    search_placeholder: "Search for a master or service... (e.g. plumber, tiler, architect)",
    login_btn: "Log In",
    nav_projects: "Projects",
    footer_desc: "A digital platform that <br> combines construction, full <br> renovation and minor <br> household chores masters. <br> Make any process simple and <br> organized.",
    footer_col1_title: "Services",
    footer_link1: "Construction",
    footer_link2: "Full Renovation",
    footer_link3: "Minor Repairs & Installation",
    footer_col2_title: "Platform & Company",
    footer_link4: "How It Works",
    footer_link5: "About Us",
    footer_link6: "Blog / Tips",
    footer_link7: "Frequently Asked Questions",
    footer_col3_title: "Contact",
    footer_contact1: "Tbilisi, Georgia",
    page_main_title: "Which field do you work in?",
    page_subtitle: "Select your specialization, register and start receiving new orders",
    service1_title: "Renovation Crew / Team",
    service1_desc: "I take on complete renovation projects for apartments, houses or commercial spaces",
    service1_btn: "Create Profile",
    service3_title: "I am an Individual Professional",
    service3_desc: "I perform specific repair/renovation work <br> (e.g. electrical, tiling, painting)",
    service3_btn: "Create Profile"
  }
};

function setLanguage(lang) {
  const translatableElements = document.querySelectorAll('[data-translate]');
  translatableElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  if (lang === 'eng') {
    document.documentElement.classList.add('lang-eng');
    document.documentElement.lang = 'en';
  } else {
    document.documentElement.classList.remove('lang-eng');
    document.documentElement.lang = 'ka';
  }
}

const langOptions = document.querySelectorAll('.lang-option');

langOptions.forEach(option => {
  option.addEventListener('click', () => {
    langOptions.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');

    const selectedLang = option.getAttribute('data-lang');

    setLanguage(selectedLang);
  });
});