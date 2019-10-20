import helpers from '../helpers';
import animateHeader from '../animation/animation-header';
import animateCopyrights from '../animation/animation-copyrights';
import animateLines from '../animation/animation-lines';
import animateSocial from '../animation/animation-social';
import animateMoveOn from '../animation/animation-move-on';
import animateCompany from '../animation/animation-company';

const initAnimation = () => {
	setTimeout(() => {
		return Promise.resolve()
			.then(animateLines)
			.then(animateCompany)
			.then(animateMoveOn)
			.then(animateHeader)
			.then(() => Promise.all([animateCopyrights(), animateSocial()]));
	}, 200);
};

const Orientation = {
	LAND_PRIMARY: 'landscape-primary',
	LAND_SECONDARY: 'landscape-secondary',
};

let isFirstMobileAnim = true;

const animMobileLandscape = () => {
	const currentOrientation = helpers.getOrientation();

	if (
		(currentOrientation === Orientation.LAND_PRIMARY ||
		currentOrientation === Orientation.LAND_SECONDARY) &&
		isFirstMobileAnim
	) {
		isFirstMobileAnim = false;
		initAnimation();
	}
};

const animateMainPage = () => {
	if (helpers.isDesktop()) {
		initAnimation();
	} else {
		window.addEventListener('resize', () => {
			setTimeout(() => {
				animMobileLandscape();
			}, 600);
		});

		animMobileLandscape();
	}
};

export default animateMainPage;
