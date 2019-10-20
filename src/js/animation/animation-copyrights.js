import Config from '../config';
import {TimelineMax} from 'gsap';

const animateCopyrights = () => {
	const copyrightsItem = document.querySelector('.page-main__copyrights');

	return new Promise((resolve) => {
		new TimelineMax({
			onStart() {
				setTimeout(resolve, 700);
				copyrightsItem.classList.remove('is-hidden');
			},
		})
			.from(copyrightsItem, Config.DEFAULT_ANIM_DURATION, {
				autoAlpha: 0,
				x: '-10vw',
			});
	});
};

export default animateCopyrights;
