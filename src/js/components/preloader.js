import {TweenMax, TimelineMax} from 'gsap';
import animateMainPage from './animation';
import Preloader from 'ninelines-preloader';

const preloaderItem = document.querySelector('.preloader');

const loaderLine = preloaderItem.querySelector('.preloader__loader-line');

const loaderLogo = preloaderItem.querySelector('.preloader__logo');

const bgImgScr = '/images/main-bg@2x.jpg';

const MIN_LOAD_TIME_MS = 850;

const initPage = () => {
	TweenMax.to(loaderLine, MIN_LOAD_TIME_MS / 1000, {
		width: '100%',
	});

	Preloader.init(bgImgScr, MIN_LOAD_TIME_MS)
		.then(() => {
			new TimelineMax({
				onComplete() {
					animateMainPage();
				},
			})
				.to(loaderLogo, 0.25, {
					onComplete() {
						loaderLogo.classList.add('is-hidden');
					},
					scale: 0,
				})
				.to(preloaderItem, 0.5, {
					autoAlpha: 0,
				}, '-=0.15');
		});
};

export default initPage;
