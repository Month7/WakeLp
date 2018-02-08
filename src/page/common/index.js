/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-02-07 21:42:32 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-02-07 21:44:29
 * 移动端通用
 */

'use strict';
//rem单位
changeRootFont();
function changeRootFont() {
    document.documentElement.style.fontSize=((window.innerWidth / 750) * 100) + 'px';
}
window.addEventListener('resize', changeRootFont, false);