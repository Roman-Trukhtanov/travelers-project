import Config from '../config';
import {Power1, TimelineMax} from 'gsap';

const animateMoveOn = () => {
	const moveOnItem = document.querySelector('.move-on');
	const moveOnBtnWrap = moveOnItem.querySelector('.move-on__btn-wrap');
	const moveOnBtn = moveOnItem.querySelector('.move-on__btn');
	const moveLineTop = moveOnItem.querySelector('.move-on__line--top');
	const moveLineBottom = moveOnItem.querySelector('.move-on__line--bottom');

	return new Promise((resolve) => {
		new TimelineMax({
			onComplete() {
				moveOnBtn.classList.remove('move-on__btn--is-animate');
			},
			onStart() {
				setTimeout(resolve, 750);
				moveOnItem.classList.remove('is-hidden');
			},
		})
			.from(moveLineBottom, Config.MOVE_ON_ANIM_DURATION, {
				height: 0,
				ease: Power1.linear,
				clearProps: 'all',
			})
			.from(moveOnBtnWrap, Config.MOVE_ON_ANIM_DURATION, {
				bottom: `${20 / 800 * 100}vh`,
				ease: Power1.linear,
				clearProps: 'all',
			})
			.from(moveOnBtn, Config.MOVE_ON_ANIM_DURATION, {
				bottom: `${60 / 800 * 100}vh`,
				ease: Power1.linear,
				clearProps: 'all',
			}, `-=${Config.MOVE_ON_ANIM_DURATION}`)
			.from(moveLineTop, Config.MOVE_ON_ANIM_DURATION, {
				height: 0,
				ease: Power1.linear,
				clearProps: 'all',
			});
	});
};

export default animateMoveOn;
