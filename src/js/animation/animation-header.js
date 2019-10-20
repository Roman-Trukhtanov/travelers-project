import Config from '../config';
import {TimelineMax, Sine} from 'gsap';

const animateHeader = () => {
	const headerItem = document.querySelector('.page-header');
	const logo = document.querySelector('.page-header__logo');

	return new Promise((resolve) => {
		new TimelineMax({
			onStart() {
				setTimeout(resolve, 500);
				headerItem.classList.remove('is-hidden');
			},
		})
			.from(headerItem, Config.DEFAULT_ANIM_DURATION, {
				yPercent: -200,
				ease: Sine.easeOut,
				clearProps: 'all',
			})
			.from(logo, Config.DEFAULT_ANIM_DURATION, {
				autoAlpha: 0,
				yPercent: -100,
				ease: Sine.easeOut,
				clearProps: 'all',
			}, '-=0.25');
	});
};

export default animateHeader;
