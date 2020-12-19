/**
 * @file UA 解析器 / ES module
 * @module utils/ua-device
 * @author semyin
 */

export default userAgent => ({
    isEdge: userAgent.includes('Edge'),
    isFF: userAgent.includes('Firefox'),
    isOpera: userAgent.includes('Opera'),
    isBB: userAgent.includes('BlackBerry'),
    isChrome: userAgent.includes('Chrome'),
    isMaxthon: userAgent.includes('Maxthon'),
    isIOS: /(iPhone|iPad|iPod|iOS)/i.test(userAgent),
    isAndroid: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1,
    isIE: ['compatible', 'MSIE'].every(n => userAgent.includes(n)),
    isSafari: userAgent.includes('Safari') && !userAgent.includes('Chrome'),
    isMobile: /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/gi.test(
        userAgent
    )
})
