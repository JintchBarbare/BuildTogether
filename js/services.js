const translations = {
  geo: {
    search_placeholder: "მოძებნე ხელოსანი ან სერვისი... (მაგ. სანტექნიკი, კაფელში, არქიტექტორი)",
    login_btn: "შესვლა",
    nav_projects: "პროექტები",
    hero_title: "სერვისის კატეგორიები",
    hero_desc: "აირჩიე შენთვის სასურველი მიმართულება და იპოვე შესაბამისი პროფესიონალები",
    page_main_title: "რომელ სფეროში მოღვაწეობთ?",
    page_subtitle: "აირჩიეთ თქვენი მიმართულება, დარეგისტრირდით და მიიღეთ ახალი შეკვეთები",
    service1_title: "მშენებლობა & პროექტირება",
    service1_desc: "გათვლილია როგორც სამშენებლო ბრიგადებზე, ასევე ცალკეულ პროფესიონალებზე.",
    service1_btn: "შექმენი პროფილი",
    service2_title: "რემონტი & ინტერიერი",
    service2_desc: "გათვლილია როგორც სარემონტო ბრიგადებზე, ასევე ცალკეულ პროფესიონალებზე.",
    service2_btn: "შექმენი პროფილი",
    service3_title: "ხელოსანი",
    service3_desc: "გათვლილია ცალკეულ ოსტატებზე, რომლებიც ინდივიდუალურ შეკვეთებზე მუშაობენ.",
    service3_btn: "შექმენი პროფილი",
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
    footer_contact1: "თბილისი, საქართველო"
  },
  eng: {
    search_placeholder: "Search for a master or service... (e.g. plumber, tiler, architect)",
    login_btn: "Log In",
    nav_projects: "Projects",
    hero_title: "Service Categories",
    hero_desc: "Choose your desired category and find qualified professionals",
    page_main_title: "Which field do you work in?",
    page_subtitle: "Choose your field, register and get new orders",
    service1_title: "Construction & Design",
    service1_desc: "Designed for construction crews as well as individual professionals.",
    service1_btn: "Create Profile",
    service2_title: "Renovation & Interior",
    service2_desc: "Designed for renovation teams as well as individual professionals.",
    service2_btn: "Create Profile",
    service3_title: "Handyman",
    service3_desc: "Designed for individual craftsmen working on custom orders.",
    service3_btn: "Create Profile",
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
    footer_contact1: "Tbilisi, Georgia"
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

  document.documentElement.lang = lang === 'eng' ? 'en' : 'ka';
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