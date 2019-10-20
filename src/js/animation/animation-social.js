import Config from '../config';
import {TimelineMax} from 'gsap';

const animateSocial = () => {
	const OFFSET_DURATION = 0.2;

	const socialElement = document.querySelector('.page-main__social');

	const socialItems = socialElement.querySelectorAll('.social__item');

	return new Promise((resolve) => {
		new TimelineMax({
			onComplete() {
				socialElement.classList.add('social--is-animate');
			},
			onStart() {
				setTimeout(resolve, 700);
				socialElement.classList.remove('is-hidden');
			},
		})
			.staggerFrom(socialItems, Config.DEFAULT_ANIM_DURATION, {
				autoAlpha: 0,
				x: '10vw',
				clearProps: 'all',
			}, OFFSET_DURATION);
	});
};

export default animateSocial;
