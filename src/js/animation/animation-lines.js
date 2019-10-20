import Config from '../config';
import {TimelineMax} from 'gsap';

const animateLines = () => {
	const linesItem = document.querySelector('.lines');
	const leftTopLine = linesItem.querySelector('.lines__item--left-top');
	const leftVerticalLine = linesItem.querySelector('.lines__item--left-vertical');
	const rightTopLine = linesItem.querySelector('.lines__item--right-top');
	const rightVerticalLine = linesItem.querySelector('.lines__item--right-vertical');

	return new Promise((resolve) => {
		new TimelineMax({
			onStart() {
				setTimeout(resolve, 600);

				linesItem.classList.remove('is-hidden');
			},
		})
			.from(leftTopLine, Config.LINES_ANIM_DURATION, {
				width: 0,
				clearProps: 'all',
			})
			.from(leftVerticalLine, Config.LINES_ANIM_DURATION, {
				y: '100%',
				clearProps: 'all',
			}, `-=${Config.LINES_ANIM_DURATION}`)
			.from(rightTopLine, Config.LINES_ANIM_DURATION, {
				width: 0,
				clearProps: 'all',
			}, `-=${Config.LINES_ANIM_DURATION}`)
			.from(rightVerticalLine, Config.LINES_ANIM_DURATION, {
				y: '100%',
				clearProps: 'all',
			}, `-=${Config.LINES_ANIM_DURATION}`);
	});
};

export default animateLines;
