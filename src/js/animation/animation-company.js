import Config from '../config';
import {TimelineMax, Sine} from 'gsap';

const animateCompany = () => {
	const element = document.querySelector('.company');
	const text = element.querySelector('.company__text');
	const name = element.querySelector('.company__name');
	const lineDecor = element.querySelector('.company__line-decor');
	const btnLeft = element.querySelector('.company__button--left');
	const btnRight = element.querySelector('.company__button--right');

	return new Promise((resolve) => {
		new TimelineMax({
			onComplete() {
				resolve();
			},
			onStart() {
				element.classList.remove('is-hidden');
			},
		})
			.from(text, Config.COMPANY_ANIM_DURATION, {
				x: '-20vw',
				autoAlpha: 0,
				ease: Sine.easeInOut,
				clearProps: 'all',
			})
			.from(name, Config.COMPANY_ANIM_DURATION, {
				x: '20vw',
				autoAlpha: 0,
				ease: Sine.easeInOut,
				clearProps: 'all',
			}, `-=${Config.COMPANY_ANIM_DURATION}`)
			.from(lineDecor, Config.COMPANY_ANIM_DURATION, {
				y: '10vh',
				width: 0,
				autoAlpha: 0,
				ease: Sine.easeInOut,
				clearProps: 'all',
			}, '-=0.2')
			.from(btnLeft, Config.BUTTON_ANIM_DURATION, {
				x: '-20vw',
				y: '5vh',
				autoAlpha: 0,
				ease: Sine.easeInOut,
				clearProps: 'all',
			}, '-=0.2')
			.from(btnRight, Config.BUTTON_ANIM_DURATION, {
				x: '20vw',
				y: '5vh',
				autoAlpha: 0,
				ease: Sine.easeInOut,
				clearProps: 'all',
			}, `-=${Config.BUTTON_ANIM_DURATION}`);
	});
};

export default animateCompany;
