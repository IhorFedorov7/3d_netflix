import { gsap } from 'gsap';

export const Animations = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 1}}),
        tl2 = gsap.timeline({ defaults: { ease: 'elastic.inOut', duration: 1}}),
        tl3 = gsap.timeline({ defaults: { ease: 'back.out(2)', opacity: 0, duration: 1}});


    tl.to('.header__logo', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, y: 0, duration: 1.3})
        .to('.header__options', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, x: 0}, '-=0.3')
        .to('.content__type > h3', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, y: 0}, '-=0.3')
        .to('h1', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, y: 0}, '-=0.3')
        .to('.content__info > h3', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, x: 0}, '-=0.3')
        .to('p', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, x: 0}, '-=0.3')
        // .to('.footer', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, x: 0}, '-=0.3');

    tl2.to('.btn', {y: 0, duration: 1.3});

    tl3.from('.stars', {delay: 1, scale: .2, transformOrigin: 'center'}, '-=0.3');
};
