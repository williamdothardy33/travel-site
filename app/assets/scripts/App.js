import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenuInstance = new MobileMenu();
var revealOnScrollFeature = new RevealOnScroll(document.querySelectorAll('.feature-item'), 0.25);
var revealOnScrollTestimonial = new RevealOnScroll(document.querySelectorAll('.testimonial'), 0.5);