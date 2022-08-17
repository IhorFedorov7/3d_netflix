import { gsap } from 'gsap';

export const Animations = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2}}),
        tl2 = gsap.timeline({ defaults: { ease: 'elastic.inOut', duration: 4}}),
        tl3 = gsap.timeline({ defaults: { ease: 'back.out(2)', opacity: 0, duration: 2}});


    tl.to('.header__logo', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, y: 0, duration: 2.2})
        .to('.header__options', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, x: 0}, '-=1')
        .to('.content__type > h3', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, y: 0}, '-=1')
        .to('h1', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, y: 0}, '-=1')
        .to('.content__info > h3', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, x: 0}, '-=1')
        .to('p', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, x: 0}, '-=1')
        .to('.footer', { 'clip-path': 'polygon(0%, 100%, 100%, 100%, 100%, 0%, 0%, 0%)', opacity: 1, x: 0}, '-=1');

    tl2.to('.btn', {y: 0, duration: 3.2});

    tl3.from('.stars', {delay: 1, scale: .2, transformOrigin: 'center'}, '-=.4');
};
