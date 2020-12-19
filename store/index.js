/**
 * @file 设置全局初始化 / ES Module
 * @module store/entry
 * @author semyin
 */

import { isServer } from '@/environment'
import uaDevice from '@/utils/ua-device'


export const actions = {
  // 全局服务初始化
  async nuxtServerInit(store, { req }) {

    // 检查设备类型
    const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
    const { isMobile, isAndroid, isIOS, isFF, isIE, isSafari, isEdge, isBB, isMaxthon } = uaDevice(userAgent || '')
    store.commit('global/updateUserAgent', userAgent)
    store.commit('global/updateMobileLayoutState', isMobile)
    store.commit('global/updateIsIOSDevice', isIOS)
    store.commit('global/updateIsAndroidDevice', isAndroid)
    store.commit('global/updateIsSafariBrowser', isSafari)

    // 鉴权
    // if (req.headers.cookie) {
    //   const parsed = cookieparser.parse(req.headers.cookie)
    //   const { token, userName, userPic } = parsed
    //   const userInfo = { userName, userPic }
    //   if (!token || !userName || !userPic) {
    //     store.commit('auth/setLoginStatus', false)
    //   } else {
    //     store.commit('auth/setAuth', token)
    //     store.commit('auth/setUserInfo', userInfo)
    //     store.commit('auth/setLoginStatus', true)
    //   }
    //   if (store.state.auth.token) {
    //     this.$axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`
    //   }
    //
    // }
  }
}
