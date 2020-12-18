
const isMobile = (
	host.indexOf('m.myoffer.cn') > -1
	|| host.indexOf('m.myoffer.com') > -1
	|| host.indexOf('m.myofferdemo.com') > -1
	|| host.indexOf('m.ssr.myofferdemo.com') > -1
	|| host.indexOf('m.ssr.dev.myofferdemo.com') > -1
	|| /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
)
const context = {
    isMobile: isMobile,
    isClient: true,
    isServer: false,
    req: null,
    res: null,
    url: window.location.pathname
}
export default ({app}) => {
    app.router.beforeEach((to,form,next) => {
      next();
    });
}