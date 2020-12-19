/**
 * @file 全局状态设置/ ES module
 * @module store/option
 * @author semyin
 */

export const state = () => ({

    // ua
    userAgent: '',

    // 是否为移动端
    isMobile: false,

    // 是否为iOS
    isIOS: false,

    // 是否为Android
    isAndroid: false,

    // 是否为Safari浏览器
    isSafari: false
})

export const getters = {
    isMobile: state => state.isMobile
}

export const mutations = {

    // 设置UA
    updateUserAgent(state, action) {
        state.userAgent = action
    },

    // 设置是否移动端状态
    updateMobileLayoutState(state, action) {
        state.isMobile = action
    },

    // 设置是否为iOS设备
    updateIsIOSDevice(state, action) {
        state.isIOS = action
    },

    // 设置是否为Android设备
    updateIsAndroidDevice(state, aciton) {
        state.isAndroid = aciton
    },

    // 设置是否为Safari浏览器
    updateIsSafariBrowser(state, action) {
        state.isSafari = action
    }
}