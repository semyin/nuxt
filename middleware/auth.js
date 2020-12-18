export default function ({ route, store, redirect }) {
    if (store) {
        console.log('抱歉您没有token，请先登录')
        // return redirect('/')
    }
    // console.log(store)
}