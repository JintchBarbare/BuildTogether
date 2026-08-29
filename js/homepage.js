const translations = {
  geo: {
    search_placeholder: "მოძებნე ხელოსანი ან სერვისი... (მაგ. სანტექნიკი, კაფელში, არქიტექტორი)",
    login_btn: "შესვლა",
    hero_title: "ყველაფერი რემონტისა <br> და სახლის მოვლისთვის — ერთ სივრცეში",
    hero_desc: "მშენებლობა, სრული რემონტი <br> თუ წვრილმანი შეკეთება? იპოვე სანდო ოსტატები და კომპანიები მარტივად",
    card1_title: "დაიწყე პროექტი ან შეკვეთა",
    card1_desc: "იპოვე სანდო ხელოსნები, სარემონტო ბრიგადები ან <br> სამშენებლო კომპანიები",
    card1_btn: "სერვისის არჩევა",
    card2_title: "ვარ პროფესიონალი",
    card2_desc: "დარეგისტრირდი, განათავსე ინფორმაცია შენს შესახებ <br> და იპოვე ახალი შეკვეთები",
    card2_btn: "პროფილის შექმნა",
    stat1_label: "დასრულებული პროექტი",
    stat2_label: "მიმდინარე პროექტი",
    stat3_label: "კმაყოფილი კლიენტი",
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
    hero_title: "Everything for Renovation <br> and Home Care — in One Place",
    hero_desc: "Construction, full renovation <br> or minor repairs? Easily find trusted masters and companies",
    card1_title: "Start a Project or Order",
    card1_desc: "Find trusted craftsmen, renovation teams or <br> construction companies",
    card1_btn: "Choose Service",
    card2_title: "I am a Professional",
    card2_desc: "Register, post information about yourself <br> and find new orders",
    card2_btn: "Create Profile",
    stat1_label: "Completed Project",
    stat2_label: "Ongoing Project",
    stat3_label: "Satisfied Client",
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