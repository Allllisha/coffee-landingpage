import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Coffee makes your day", "If life gives you coffee beans, you make coffee"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };