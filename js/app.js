let burgerMenu = document.querySelector(".burger_menu");
let mobileNavigation = document.querySelector(".mobile_navigation");
let headerBox = document.querySelector(".header_block");

burgerMenu.addEventListener("click", (e) => {
  burgerMenu.querySelector(".burger__").classList.toggle("burg_act");
  mobileNavigation.classList.toggle("nav_act");
  document.body.classList.toggle("overflow_hidden");
  headerBox.classList.toggle("fixed");
});

let langBlock = document.querySelector(".lang_block ");
let langBar = document.querySelector(".drop_down_lang");
let arrow = document.querySelector(".arrow_icon");

langBlock.addEventListener("click", function () {
  langBar.classList.toggle("show_");
  arrow.classList.toggle("arrow_up");
});

let categoryBox = document.querySelectorAll(".parent");
let dropDowns = document.querySelectorAll(".drop_down");

function remoeActive(arr, className) {
  arr.forEach((item) => {
    item.classList.remove(className);
  });
}

function collapseCategory(targetBlock) {
  let target = targetBlock.parentElement.parentElement;
  let selectCategory = target.querySelector(".category_select ");
  let dropDownBox = target.querySelector(".drop_down");
  let infoLiElems = target.querySelectorAll(".info_li");
  remoeActive(categoryBox, "show_");
  remoeActive(dropDowns, "show_");
  dropDownBox.classList.add("show_");
  // infoLiElems.forEach(function (liElement) {
  //     liElement.addEventListener('click', function (e) {
  //         let name = liElement.querySelector('.category_select').innerText;
  //         let template = `
  //                     <div class="category_">${name}</div>
  //                 `;
  //         selectCategory.innerText = name;
  //         // dropDownBox.classList.remove('show_');
  //     });
  // });
}

function toggleCategories(element) {
  let dropDownBox = element.querySelector(".drop_down");
  let infoLiElems = element.querySelectorAll(".info_li");
  let selectCategory = element.querySelector(".category_select ");
  if (!dropDownBox.classList.contains("show_")) {
    remoeActive(dropDowns, "show_");
    dropDownBox.classList.add("show_");
    infoLiElems.forEach(function (liElement) {
      liElement.addEventListener("click", function (e) {
        let name = liElement.querySelector(".category_select").innerText;
        selectCategory.innerText = name;
      });
    });
  } else {
    dropDownBox.classList.remove("show_");
  }
}

document.addEventListener("click", (e) => {
  let target = e.target;
  if (target.getAttribute("data-close") !== "categories") {
    remoeActive(dropDowns, "show_");
  }
});

if (categoryBox) {
  categoryBox.forEach(function (categoryInp) {
    categoryInp.addEventListener("click", function () {
      toggleCategories(categoryInp);
      // collapseCategory(categoryInp);
    });
  });
}

const favBlock = document.querySelectorAll(".fav_block");
favBlock.forEach(function (star) {
  star.addEventListener("click", function () {
    let borderedHeart = star.querySelector(".heart_one");
    let yellowHeart = star.querySelector(".heart_two");
    if (!borderedHeart) return;
    if (!yellowHeart) return;
    borderedHeart.classList.toggle("hide_");
    yellowHeart.classList.toggle("show_");
  });
});

var swiper = new Swiper(".s1", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".s1 .swiper-button-next",
    prevEl: ".s1 .swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".s2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  speed: 500,
  breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

function rating() {
  $(".star_").click(function () {
    $(this).addClass("checked"),
      $(this).prevAll(".star_").addClass("checked"),
      $(this).nextAll(".star_").removeClass("checked");
  });
}
rating();

window.addEventListener("scroll", function () {
  let categoryMenus = document.querySelectorAll(".category_menu");
  let mainHeight = document.querySelector("#main_").getBoundingClientRect();
  let navBar = document.querySelector(".category_left_side");
  let topPos = window.pageYOffset;
  if (
    topPos >
    Number(mainHeight.height).toFixed(0) -
      Number(navBar.getBoundingClientRect().height).toFixed(0)
  ) {
    navBar.classList.add("hide_sidebar");
    navBar.classList.remove("show_sidebar");
    categoryMenus.forEach(function (categoryMenu) {
      categoryMenu.classList.remove("cat_act");
    });
  } else {
    navBar.classList.remove("hide_sidebar");
    navBar.classList.add("show_sidebar");
  }
});

let faq_blocks = document.querySelectorAll(".faq_box_block");

faq_blocks.forEach(function (faqBlock) {
  faqBlock.addEventListener("click", function (e) {
    e.preventDefault();
    let colapsed = faqBlock.getAttribute("collapes");
    let childContent = faqBlock.querySelector(".collapes_content");
    let childHeight = childContent.scrollHeight;
    let targetIcon = faqBlock.querySelector(".more-less");
    let categoryTitle = faqBlock.querySelector(".category_title");
    console.log(categoryTitle);
    if (colapsed === "false") {
      childContent.style.height = `${childHeight}px`;
      childContent.style.opacity = `1`;
      faqBlock.setAttribute("collapes", "true");
      targetIcon.className = "more-less fas fa-chevron-up";
      categoryTitle.style.color = "#00B3F6";
    } else {
      childContent.style.height = `${0}px`;
      childContent.style.opacity = `0`;
      childContent.style.paddingTop = `0px`;
      faqBlock.setAttribute("collapes", "false");
      categoryTitle.style.color = "#6C6D6E";
      targetIcon.className = "more-less fas fa-chevron-down";
    }
  });
});

let categoryList = document.querySelector(".category_box");
let categoryItems = document.querySelector(".category_block");
let categoryMenuBlock = document.querySelector(".category_menu");
categoryList.addEventListener("click", function () {
  categoryMenuBlock.classList.remove("cat_act");
  categoryItems.classList.toggle("hide_");
});
let categoryListBox = document.querySelectorAll(".category_li");
let categoryMenus = document.querySelectorAll(".category_menu");
let bgBox = document.querySelector(".bg_box");
let categoryListItems = document.querySelector(".category_ul");

function removeS() {
  categoryMenus.forEach(function (categoryMenu) {
    categoryMenu.classList.remove("cat_act");
  });
}

categoryListBox.forEach(function (categoryBox) {
  categoryBox.addEventListener("mousemove", function () {
    let top = categoryBox.getBoundingClientRect().top;
    let bottom = categoryBox.getBoundingClientRect().bottom;
    let targetElement = categoryBox.getAttribute("id");
    let category = document.querySelector(`#${targetElement}_content`);
    let windowHeight = window.innerHeight;
    removeS();

    if (category) {
      category.classList.add("cat_act");
      bgBox.classList.add("bg_active");
      if (
        (Number(top) + Number(category.clientHeight)).toFixed(0) > windowHeight
      ) {
        category.style.top = "100px";
        category.style.bottom = `${(Number(bottom) - Number(top) - 50).toFixed(
          0
        )}px`;
      } else {
        category.style.top = `${Number(top).toFixed(0)}px`;
      }
    }
  });

  bgBox.addEventListener("mouseenter", function () {
    removeS();
    bgBox.classList.remove("bg_active");
  });
});

function increment(event) {
  let target = event.target;
  let numInput =
    target.parentElement.parentElement.parentElement.querySelector(
      ".product_num_input"
    );

  numInput.value = Number(numInput.value) + 1;
}

function decrement(event) {
  let target = event.target;
  let numInput =
    target.parentElement.parentElement.parentElement.querySelector(
      ".product_num_input"
    );
  if (numInput.value <= 1) {
    return false;
  }
  numInput.value = Number(numInput.value) - 1;
}
document.querySelectorAll(".up").forEach(function (button) {
  button.addEventListener("click", function (event) {
    increment(event);
  });
});
document.querySelectorAll(".down").forEach(function (button) {
  button.addEventListener("click", function (event) {
    decrement(event);
  });
});
var swiper = new Swiper(".s3", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

//ranger slider
let progress = document.querySelector(".progress");
let hidden_value = document.querySelector(".hidden_value");
class Slider {
  constructor(rangeElement, valueElement, options) {
    this.rangeElement = rangeElement;
    this.valueElement = valueElement;
    this.options = options;

    this.rangeElement.addEventListener("input", this.updateSlider.bind(this));
  }

  init() {
    this.rangeElement.setAttribute("min", options.min);
    this.rangeElement.setAttribute("max", options.max);
    this.rangeElement.value = options.cur;

    this.updateSlider();
  }

  range(value) {
    return parseFloat(value).toLocaleString("en-US", {
      maximumFractionDigits: 1,
    });
  }

  updateSlider(newValue) {
    this.valueElement.innerHTML = this.range(this.rangeElement.value);
    progress.style.width = `${this.rangeElement.value * 2 - 3}%`;
    // set range value for hidden input for back-end developer
    hidden_value.value = this.range(this.rangeElement.value);
  }
}

let rangeElement = document.querySelector('.range [type="range"]');
let valueElement = document.querySelector(".range .range__value span");

let options = {
  min: 0,
  max: 50,
  cur: 15,
};

if (rangeElement) {
  let slider = new Slider(rangeElement, valueElement, options);
  slider.init();
}

var swiper = new Swiper(".partners_slider", {
  slidesPerView: 7,
  spaceBetween: 20,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: ".partner_slider_block .swiper-button-next",
    prevEl: ".partner_slider_block .swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
});
