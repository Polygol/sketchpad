window.bcpMap = { EN: 'en-US', JP: 'ja-JP', KO: 'ko-KR', ZH: 'zh-CN' };
var bcpMap = window.bcpMap;

function getAppLanguage() {
    let l = (localStorage.getItem('language') || localStorage.getItem('selectedLanguage') || 'EN').toUpperCase();
    if (l === 'JA') l = 'JP';
    return ['EN', 'JP', 'KO', 'ZH'].includes(l) ? l : 'EN';
}
window.getAppLanguage = getAppLanguage;
var getAppLanguage = window.getAppLanguage;

function t(key, params = {}) {
    const lang = getAppLanguage();
    const dict = window['LANG_' + lang + '_SKETCHPAD'] || window['LANG_EN_SKETCHPAD'] || {};
    let str = dict[key] !== undefined ? dict[key] : key;
    if (params) {
        Object.keys(params).forEach(p => {
            str = str.replace(new RegExp('\\{' + p + '\\}', 'g'), params[p]);
        });
    }
    return str;
}
window.t = t;
var t = window.t;

window.LANG_EN_SKETCHPAD = {
    TITLE: "SketchPad",
    BRUSH: "Brush",
    ERASER: "Eraser",
    LINE: "Line",
    RECTANGLE: "Rectangle",
    CIRCLE: "Circle",
    COLOR: "Color",
    SIZE: "Size",
    UNDO: "Undo",
    REDO: "Redo",
    CLEAR: "Clear",
    SAVE: "Save"
};

window.LANG_JP_SKETCHPAD = {
    TITLE: "スケッチパッド",
    BRUSH: "ブラシ",
    ERASER: "消しゴム",
    LINE: "直線",
    RECTANGLE: "四角形",
    CIRCLE: "円",
    COLOR: "色",
    SIZE: "サイズ",
    UNDO: "元に戻す",
    REDO: "やり直す",
    CLEAR: "クリア",
    SAVE: "保存"
};

window.LANG_KO_SKETCHPAD = {
    TITLE: "스케치패드",
    BRUSH: "브러시",
    ERASER: "지우개",
    LINE: "직선",
    RECTANGLE: "직사각형",
    CIRCLE: "원",
    COLOR: "색상",
    SIZE: "크기",
    UNDO: "실행 취소",
    REDO: "다시 실행",
    CLEAR: "지우기",
    SAVE: "저장"
};

window.LANG_ZH_SKETCHPAD = {
    TITLE: "画板",
    BRUSH: "画笔",
    ERASER: "橡皮擦",
    LINE: "直线",
    RECTANGLE: "矩形",
    CIRCLE: "圆形",
    COLOR: "颜色",
    SIZE: "粗细",
    UNDO: "撤销",
    REDO: "重做",
    CLEAR: "清空",
    SAVE: "保存"
};

var LANG_EN_SKETCHPAD = window.LANG_EN_SKETCHPAD;
var LANG_JP_SKETCHPAD = window.LANG_JP_SKETCHPAD;
var LANG_KO_SKETCHPAD = window.LANG_KO_SKETCHPAD;
var LANG_ZH_SKETCHPAD = window.LANG_ZH_SKETCHPAD;
