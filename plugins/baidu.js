export default ({app}) => {
    const { router } = app;
    /* 每次路由变更时进行pv统计 */
    router.afterEach((to, from) => {
        try {
            window._hmt = window_hmt || [];
            window._hmt.push(['_trackPageview', to.fullPath])
        } catch(e) {

        }
    }) 
}