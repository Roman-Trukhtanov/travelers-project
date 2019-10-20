export default {
	isMobile() {
		return innerWidth <= 1024;
	},

	isDesktop() {
		return !this.isMobile();
	},

	getOrientation() {
		return screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type;
	},
};
