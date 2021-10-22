/*
 * @Author: jhl
 * @Date: 2021-10-22 17:28:27
 * @LastEditors: jhl
 * @LastEditTime: 2021-10-22 17:30:52
 * @Description:
 */
import * as shelljs from 'shelljs';

/* 
    -R 表示递归拷贝（recursive）
*/
// 将 public 拷贝到 dist 下
shelljs.cp('-R', 'public', 'dist');
shelljs.cp('-R', 'views', 'dist');
