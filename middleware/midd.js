const ROURERS = [
	{ name: 'index', path: "/" },
	{ name: 'm-home', path: "/pc/home" },
	{ name: 'pc-home', path: "/m/home" }
]

export default function ({ req, redirect, route }) {
	const userAgent  = process.server ? req.headers['user-agent'] : navigator.userAgent;
	let isMobile = (ua) => {
		return !!ua.match(/AppleWebKit.*Mobile.*/)
	}
	console.log(isMobile(userAgent))
	let routerMap = (name) => {
		if (isMobile(userAgent)) {
			return ROURERS.filter(item => item.name === route.name)[0].path;
		}
	}
	// redirect(routerMap())
}
