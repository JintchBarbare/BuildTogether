const state = {
  language: "ka",
  mode: "login",
  resetCode: null,
  resetIdentifier: null
};


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  ka: {

    title: "ავტორიზაცია",

    name: "სახელი",
    surname: "გვარი",

    email: "ელფოსტა ან ტელეფონის ნომერი",

    password: "პაროლი",
    confirmPassword: "გაიმეორეთ პაროლი",

    forgotPassword: "დაგავიწყდათ პაროლი?",

    login: "შესვლა",
    register: "რეგისტრაცია",

    noAccount: "არ გაქვს ექაუნთი?",
    haveAccount: "უკვე გაქვს ექაუნთი?",

    create: "შექმნა",

    registerSubtitle: "შექმენი ახალი ანგარიში",

    footerDescription:
      "გამოცდილი პროფესიონალები, რომლებიც დაგეხმარებიან ნებისმიერი სამშენებლო და სარემონტო საქმის შესრულებაში.",

    services: "მომსახურებები",
    platform: "პლატფორმა & კომპანია",
    contact: "კონტაქტი",

    building: "მშენებლობა",
    fullRenovation: "სრული რემონტი",
    minorRepair: "წვრილმანი შეკეთება & მონტაჟი",

    howItWorks: "როგორ მუშაობს",
    aboutUs: "ჩვენს შესახებ",
    blog: "ბლოგი / რჩევები",
    faq: "ხშირად დასმული კითხვები",

    address: "თბილისი, საქართველო",

    resetTitle: "პაროლის აღდგენა",

   

    resetLabel: "ელფოსტა ან ტელეფონის ნომერი",

    resetButton: "კოდის გაგზავნა",

    codePageTitle: "ჩაწერეთ კოდი",

    


    verifyCode: "კოდის დადასტურება",

    newPasswordTitle: "ახალი პაროლის შექმნა",
    newPasswordLabel: "ახალი პაროლი",
    confirmNewPasswordLabel: "გაიმეორეთ პაროლი",
    newPasswordRequired: "გთხოვთ შეავსოთ ორივე პაროლის ველი.",
    passwordsDoNotMatch: "პაროლები არ ემთხვევა.",

    finishReset: "პაროლის შეცვლა",
    backLogin: "← უკან დაბრუნება",

    placeholderNewPassword: "ახალი პაროლი...",
    placeholderConfirmNewPassword: "გაიმეორეთ პაროლი...",

    placeholderName: "შეიყვანე სახელი...",
    placeholderSurname: "გვარი...",
    placeholderEmail: "ელფოსტა ან ტელეფონის ნომერი...",
    placeholderPassword: "პაროლი...",
    placeholderConfirmPassword: "გაიმეორეთ პაროლი...",
    placeholderReset: "შეიყვანე მონაცემი...",
    placeholderNewPassword: "ახალი პაროლი...",

    loggedIn: "წარმატებით შეხვედით სისტემაში.",

    registered:
      "რეგისტრაცია წარმატებით დასრულდა.",

    userExists:
      "ეს მომხმარებელი უკვე არსებობს.",

    invalidLogin:
      "მონაცემები არასწორია.",

    required:
      "გთხოვთ, შეავსოთ ყველა აუცილებელი ველი.",

    resetRequired:
      "გთხოვთ შეავსოთ სავალდებულო ველი.",

    noUser:
      "ასეთი მომხმარებელი ვერ მოიძებნა.",

    resetSent:
      "აღდგენის კოდი შეიქმნა: ",

    codeRequired:
      "გთხოვთ შეიყვანოთ აღდგენის კოდი.",

    incorrectCode:
      "კოდი არასწორია.",

    correctCode:
      "კოდი სწორია.",

    resetDone:
      "პაროლი წარმატებით შეიცვალა.",

    passwordMismatch:
      "პაროლები არ ემთხვევა.",

    passwordLength:
      "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს.",

    newPasswordLength:
      "ახალი პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს."
  },


  en: {

    title: "Sign in",

    name: "Name",
    surname: "Surname",

    email: "Email or phone number",

    password: "Password",
    confirmPassword: "Confirm password",

    forgotPassword: "Forgot your password?",

    login: "Sign in",
    register: "Register",

    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",

    create: "Create account",

    registerSubtitle: "Create a new account",

    footerDescription:
      "Experienced professionals who can help you with any construction and renovation work.",

    services: "Services",
    platform: "Platform & Company",
    contact: "Contact",

    building: "Building",
    fullRenovation: "Full renovation",
    minorRepair: "Minor repairs & installation",

    howItWorks: "How it works",
    aboutUs: "About us",
    blog: "Blog / Tips",
    faq: "Frequently asked questions",

    address: "Tbilisi, Georgia",

    resetTitle: "Reset password",

   

    resetLabel: "Email or phone number",

    resetButton: "Send code",

    codePageTitle: "Enter the code",


   

    verifyCode: "Verify code",

    newPasswordTitle: "Create a new password",
    newPasswordLabel: "New password",
    confirmNewPasswordLabel: "Confirm password",

    finishReset: "Change password",
    backLogin: "← Back to login",

    
    placeholderConfirmNewPassword: "Confirm your password...",

    newPasswordRequired: "Please fill in both password fields.",
    passwordsDoNotMatch: "Passwords do not match.",

    placeholderName: "Enter your name...",
    placeholderSurname: "Surname...",
    placeholderEmail: "Email or phone number...",
    placeholderPassword: "Password...",
    placeholderConfirmPassword: "Confirm your password...",
    placeholderReset: "Enter your details...",
    placeholderNewPassword: "New password...",

    loggedIn:
      "You have signed in successfully.",

    registered:
      "Registration completed successfully.",

    userExists:
      "This user already exists.",

    invalidLogin:
      "Incorrect credentials.",

    required:
      "Please fill in all required fields.",

    resetRequired:
      "Please fill in the required field.",

    noUser:
      "No user with this email or phone was found.",

    resetSent:
      "Recovery code created: ",

    codeRequired:
      "Please enter the recovery code.",

    incorrectCode:
      "Incorrect recovery code.",

    correctCode:
      "Code is correct.",

    resetDone:
      "Password changed successfully.",

    passwordMismatch:
      "Passwords do not match.",

    passwordLength:
      "Password must contain at least 6 characters.",

    newPasswordLength:
      "The new password must contain at least 6 characters."
  }

};


/* =========================================================
   SHORTCUT
   ========================================================= */

const $ = (id) => document.getElementById(id);


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function getUsers() {

  return JSON.parse(
    localStorage.getItem("buildTogetherUsers") || "[]"
  );

}


function saveUsers(users) {

  localStorage.setItem(
    "buildTogetherUsers",
    JSON.stringify(users)
  );

}


/* =========================================================
   HELPERS
   ========================================================= */

function normalize(value) {

  return value.trim().toLowerCase();

}


function t(key) {

  return translations[state.language][key];

}


function showMessage(
  message,
  ok = true,
  elementId = "successMessage"
) {

  const element = $(elementId);

  if (!element) return;

  element.textContent = message;

  element.style.color =
    ok ? "#9ee493" : "#ff9c9c";

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function applyLanguage() {

  const lang = state.language;

  document.documentElement.lang =
    lang === "ka" ? "ka" : "en";


  $("languageText").textContent =
    lang === "ka" ? "GEO" : "ENG";


  $("otherLanguage").textContent =
    lang === "ka" ? "ENG" : "GEO";


  /* data-i18n */

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key = element.dataset.i18n;

      if (translations[lang][key]) {

        element.textContent = t(key);

      }

    });


  /* Header search */

  $("headerSearch").placeholder =
    lang === "ka"

      ? "მოძებნე ხელოსანი ან სერვისი... (მაგ. სანტექნიკი, კაფელი, არქიტექტორი)"

      : "Search for a professional or service...(e.g. plumber, tiler, architect)";


  /* Main inputs */

  $("name").placeholder =
    t("placeholderName");

  $("surname").placeholder =
    t("placeholderSurname");

  $("email").placeholder =
    t("placeholderEmail");

  $("password").placeholder =
    t("placeholderPassword");

  $("confirmPassword").placeholder =
    t("placeholderConfirmPassword");


  /* Reset inputs */

  $("resetEmail").placeholder =
    t("placeholderReset");


  $("newPassword").placeholder =
    t("placeholderNewPassword");


  /* Reset texts */

  $("resetTitle").textContent =
    t("resetTitle");


  $("resetLabel").textContent =
    t("resetLabel");

  $("resetButton").textContent =
    t("resetButton");

  $("codePageTitle").textContent =
    t("codePageTitle");

  

  $("resetCodeLabel").textContent =
    t("resetCodeLabel");

  $("verifyCodeButton").textContent =
    t("verifyCode");

  $("newPasswordLabel").textContent =
    t("newPasswordLabel");

  $("finishReset").textContent =
    t("finishReset");

  $("backToLogin").textContent =
    t("backLogin");
  $("newPasswordTitle").textContent =
    t("newPasswordTitle");

  $("confirmNewPasswordLabel").textContent =
    t("confirmNewPasswordLabel");

  $("newPassword").placeholder =
    t("placeholderNewPassword");

  $("confirmNewPassword").placeholder =
    t("placeholderConfirmNewPassword");

  renderMode();

}


/* =========================================================
   LOGIN / REGISTER / RESET MODE
   ========================================================= */

function renderMode() {

  const login = state.mode === "login";
  const register = state.mode === "register";
  const reset = state.mode === "reset";


  /* MAIN AUTH ICON + TITLE */

  $("authCard").querySelector(":scope > .auth-icon").style.display =
    reset ? "none" : "block";

  $("formTitle").style.display =
    reset ? "none" : "block";


  /* TITLE */

  $("formTitle").textContent =
    login
      ? t("title")
      : register
        ? t("register")
        : t("resetTitle");


  /* NAME */

  $("nameField").style.display =
    register ? "block" : "none";


  /* SURNAME */

  $("surnameField").style.display =
    register ? "block" : "none";


  /* EMAIL */

  $("emailField").style.display =
    reset ? "none" : "block";


  /* PASSWORD */

  $("passwordField").style.display =
    reset ? "none" : "block";


  /* CONFIRM PASSWORD */

  $("confirmPasswordField").style.display =
    register ? "block" : "none";


  /* FORGOT PASSWORD */

  $("forgotRow").style.display =
    login ? "block" : "none";


  /* RESET PAGE */

  $("resetPage").style.display =
    reset ? "block" : "none";


  /* SOCIAL LOGIN */

  $("socialLogin").style.display =
    reset ? "none" : "flex";


  /* MAIN FORM */

  $("authForm").style.display =
    reset ? "none" : "block";


  /* MAIN BUTTON */

  $("submitButton").style.display =
    reset ? "none" : "block";


  /* BOTTOM TEXT */

  $("bottomText").style.display =
    reset ? "none" : "block";


  /* LOGIN */

  if (login) {

    $("submitButton").textContent =
      t("login");

    $("bottomMessage").textContent =
      t("noAccount");

    $("switchMode").textContent =
      t("create");

    $("password").autocomplete =
      "current-password";
  }


  /* REGISTER */

  if (register) {

    $("submitButton").textContent =
      t("register");

    $("bottomMessage").textContent =
      t("haveAccount");

    $("switchMode").textContent =
      t("login");

    $("password").autocomplete =
      "new-password";
  }
  if (state.mode === "login" || state.mode === "register") {
    $("backToLogin").style.display = "none";
  } else {
    $("backToLogin").style.display = "block";
  }
}


/* =========================================================
   LOGIN / REGISTER SWITCH
   ========================================================= */

function toggleMode() {

  if (
    state.mode !== "login" &&
    state.mode !== "register"
  ) {

    state.mode = "login";

  } else {

    state.mode =
      state.mode === "login"
        ? "register"
        : "login";

  }


  $("authForm").reset();

  showMessage("");

  renderMode();

}


/* =========================================================
   LANGUAGE BUTTON
   ========================================================= */

$("languageSwitch").addEventListener(
  "click",
  () => {

    state.language =
      state.language === "ka"
        ? "en"
        : "ka";

    applyLanguage();

  }
);


/* =========================================================
   SWITCH LOGIN / REGISTER
   ========================================================= */

$("switchMode").addEventListener(
  "click",
  toggleMode
);


/* =========================================================
   HEADER LOGIN
   ========================================================= */

$("openLoginHeader").addEventListener(
  "click",
  () => {

    state.mode = "login";

    resetEverything();

    renderMode();

    $("authCard").scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }
);


/* =========================================================
   PASSWORD SHOW / HIDE
   ========================================================= */

$("togglePassword").addEventListener(
  "click",
  () => {

    const input = $("password");

    input.type =
      input.type === "password"
        ? "text"
        : "password";

  }
);


$("toggleConfirmPassword").addEventListener(
  "click",
  () => {

    const input =
      $("confirmPassword");

    input.type =
      input.type === "password"
        ? "text"
        : "password";

  }
);


/* =========================================================
   LOGIN / REGISTER FORM
   ========================================================= */

$("authForm").addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const name =
      $("name").value.trim();

    const surname =
      $("surname").value.trim();

    const identifier =
      normalize($("email").value);

    const password =
      $("password").value;

    const confirmPassword =
      $("confirmPassword").value;


    /* -----------------------------------------
       REGISTER VALIDATION
    ----------------------------------------- */

    if (state.mode === "register") {

      if (
        !name ||
        !surname ||
        !identifier ||
        !password ||
        !confirmPassword
      ) {

        showMessage(
          t("required"),
          false
        );

        return;

      }


      if (
        password !== confirmPassword
      ) {

        showMessage(
          t("passwordMismatch"),
          false
        );

        return;

      }


      if (
        password.length < 6
      ) {

        showMessage(
          t("passwordLength"),
          false
        );

        return;

      }

    }


    const users =
      getUsers();


    /* -----------------------------------------
       REGISTER
    ----------------------------------------- */

    if (
      state.mode === "register"
    ) {

      const exists =
        users.some(
          user =>
            user.identifier ===
            identifier
        );


      if (exists) {

        showMessage(
          t("userExists"),
          false
        );

        return;

      }


      users.push({

        id:
          crypto.randomUUID
            ? crypto.randomUUID()
            : String(Date.now()),

        name,

        surname,

        identifier,

        password,

        createdAt:
          new Date().toISOString()

      });


      saveUsers(users);


      showMessage(
        t("registered")
      );


      $("authForm").reset();

      return;

    }


    /* -----------------------------------------
       LOGIN VALIDATION
    ----------------------------------------- */

    if (
      !identifier ||
      !password
    ) {

      showMessage(
        t("required"),
        false
      );

      return;

    }


    /* -----------------------------------------
       LOGIN
    ----------------------------------------- */

    const user =
      users.find(
        item =>
          item.identifier ===
            identifier &&
          item.password ===
            password
      );


    if (!user) {

      showMessage(
        t("invalidLogin"),
        false
      );

      return;

    }


    localStorage.setItem(
      "buildTogetherCurrentUser",
      JSON.stringify({

        id: user.id,

        name: user.name,

        surname:
          user.surname || "",

        identifier:
          user.identifier

      })
    );


    showMessage(
      t("loggedIn")
    );

  }
);


/* =========================================================
   OPEN PASSWORD RESET
   ========================================================= */

$("forgotPassword").addEventListener(
  "click",
  () => {

    state.mode = "reset";

    state.resetCode = null;

    state.resetIdentifier = null;


    $("authForm").reset();

    showMessage("");


    /* Reset page */

    $("resetEmailStep")
      .classList.remove("hidden");

    $("resetCodeStep")
      .classList.add("hidden");

    $("newPasswordStep")
      .classList.add("hidden");


    $("verifyCodeButton")
      .style.display = "block";


    $("resetEmail").value = "";

    document.querySelectorAll(".code-input").forEach(input => {
      input.value = "";
    });
  

    $("newPassword").value = "";

    $("confirmNewPassword").value = "";


    $("resetMessage").textContent = "";


    renderMode();

  }
);


/* =========================================================
   SEND RECOVERY CODE
   ========================================================= */

$("resetForm").addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const identifier =
      normalize(
        $("resetEmail").value
      );


    /* Empty */

    if (!identifier) {

      showMessage(
        t("resetRequired"),
        false,
        "resetMessage"
      );

      return;

    }


    const users =
      getUsers();


    const user =
      users.find(
        item =>
          item.identifier ===
          identifier
      );


    /* User not found */

    if (!user) {

      showMessage(
        t("noUser"),
        false,
        "resetMessage"
      );

      return;

    }


    /* Save identifier */

    state.resetIdentifier =
      identifier;


    /* Generate 6 digit code */

    state.resetCode =
      String(
        Math.floor(
          100000 +
          Math.random() *
          900000
        )
      );


    /* STEP 1 OFF */

    $("resetEmailStep")
      .classList.add("hidden");


    /* STEP 2 ON */

    $("resetCodeStep")
      .classList.remove("hidden");


    $("newPasswordStep")
      .classList.add("hidden");


    $("verifyCodeButton")
      .style.display = "block";


    /* Demo code */

    showMessage(
      t("resetSent") +
      state.resetCode,
      true,
      "resetMessage"
    );

  }
);
/* =========================================================
   6 DIGIT RECOVERY CODE INPUTS
   ========================================================= */

const codeInputs = document.querySelectorAll(".code-input");

codeInputs.forEach((input, index) => {

  input.addEventListener("input", () => {

    // მხოლოდ ციფრი
    input.value = input.value.replace(/\D/g, "");

    // ფოტო დამალე როცა ციფრი ჩაიწერა
    const box = input.closest(".code-box");

    if (box) {
      box.classList.toggle(
        "has-value",
        input.value.length > 0
      );
    }

    // შემდეგ input-ზე გადასვლა
    if (
      input.value &&
      index < codeInputs.length - 1
    ) {
      codeInputs[index + 1].focus();
    }

  });


  input.addEventListener("keydown", (event) => {

    // Backspace
    if (
      event.key === "Backspace" &&
      !input.value &&
      index > 0
    ) {

      codeInputs[index - 1].focus();

    }

  });


  input.addEventListener("paste", (event) => {

    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    pasted.split("").forEach((digit, i) => {

      if (codeInputs[i]) {

        codeInputs[i].value = digit;

        const box =
          codeInputs[i].closest(".code-box");

        if (box) {
          box.classList.add("has-value");
        }

      }

    });

    const nextIndex = Math.min(
      pasted.length,
      codeInputs.length - 1
    );

    codeInputs[nextIndex].focus();

  });

});

/* =========================================================
   VERIFY RECOVERY CODE
   ========================================================= */

$("verifyCodeButton").addEventListener(
  "click",
  () => {

    const code = Array.from(
      document.querySelectorAll(".code-input")
    )
      .map(input => input.value)
      .join("");

    /* Empty */

    if (code.length !== 6) {

      showMessage(
        t("codeRequired"),
        false,
        "resetMessage"
      );

      return;
    }

    /* Incorrect */

    if (code !== state.resetCode) {

      showMessage(
        t("incorrectCode"),
        false,
        "resetMessage"
      );

      return;
    }

    

    /* Correct */

    showMessage(
      t("correctCode"),
      true,
      "resetMessage"
    );


    /* Hide code page */

    $("resetCodeStep")
      .classList.add("hidden");


    /* Show new password page */

    $("newPasswordStep")
      .classList.remove("hidden");


    /* Clear password fields */

    $("newPassword").value = "";
    $("confirmNewPassword").value = "";


    /* Focus first password */

    $("newPassword").focus();

  }
);

/* =========================================================
   CHANGE PASSWORD
   ========================================================= */
$("finishReset").addEventListener(
  "click",
  () => {

    const newPassword =
      $("newPassword").value;

    const confirmNewPassword =
      $("confirmNewPassword").value;


    /* Empty */

    if (!newPassword || !confirmNewPassword) {

      showMessage(
        t("newPasswordRequired"),
        false,
        "resetMessage"
      );

      return;
    }


    /* Password length */

    if (newPassword.length < 6) {

      showMessage(
        t("newPasswordLength"),
        false,
        "resetMessage"
      );

      return;
    }


    /* Passwords don't match */

    if (
      newPassword !== confirmNewPassword
    ) {

      showMessage(
        t("passwordsDoNotMatch"),
        false,
        "resetMessage"
      );

      return;
    }


    /* Find user */

    const users = getUsers();

    const userIndex =
      users.findIndex(
        item =>
          item.identifier ===
          state.resetIdentifier
      );


    if (userIndex === -1) {

      showMessage(
        t("noUser"),
        false,
        "resetMessage"
      );

      return;
    }


    /* Change password */

    users[userIndex].password =
      newPassword;

    saveUsers(users);


    /* Success */

    showMessage(
      t("resetDone"),
      true,
      "resetMessage"
    );


    /* Return to login */

    setTimeout(
      () => {
        resetEverything();
      },
      1500
    );

  }
);


/* =========================================================
   BACK TO LOGIN
   ========================================================= */

$("backToLogin").addEventListener(
  "click",
  () => {

    resetEverything();

    state.mode = "login";

    renderMode();

  }
);

/* =========================================================
   NEW PASSWORD VISIBILITY
   ========================================================= */

$("toggleNewPassword").addEventListener(
  "click",
  () => {

    const input = $("newPassword");

    input.type =
      input.type === "password"
        ? "text"
        : "password";

  }
);


$("toggleConfirmNewPassword").addEventListener(
  "click",
  () => {

    const input =
      $("confirmNewPassword");

    input.type =
      input.type === "password"
        ? "text"
        : "password";

  }
);

/* =========================================================
   RESET EVERYTHING
   ========================================================= */

function resetEverything() {

  state.resetCode = null;

  state.resetIdentifier = null;


  /* Reset main form */

  $("authForm").reset();


  /* Reset password recovery */

  $("resetForm").reset();


  $("resetEmailStep")
    .classList.remove("hidden");

  $("resetCodeStep")
    .classList.add("hidden");

  $("newPasswordStep")
    .classList.add("hidden");


  $("verifyCodeButton")
    .style.display = "block";


  $("resetMessage").textContent = "";

  $("successMessage").textContent = "";


  $("successMessage")
    .style.display = "block";
  
  document.querySelectorAll(".code-input").forEach(input => {
    input.value = "";
  });
}


/* =========================================================
   INITIALIZE
   ========================================================= */

applyLanguage();