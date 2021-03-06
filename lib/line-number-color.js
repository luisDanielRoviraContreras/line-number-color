'use babel';
import $ from 'jquery'
import LineNumberColorView from './line-number-color-view';
import { CompositeDisposable } from 'atom';

export default {
  activate(state) {
      atom.config.observe('line-number-color.lineNumberBackground',function(value){
        let colorN = value
        let colorNT = `rgb(${colorN._red},${colorN._green},${colorN._blue})`
        console.log('paso por la function value:'+colorNT);
        var styleElement = document.createElement("style");
        styleElement.setAttribute("id","line-number-color")
        console.log($('#line-number-color').length);
        if($('#line-number-color').length == 0){
          document.getElementsByTagName("head")[0].append(styleElement);
        }
        $('#line-number-color').text("atom-text-editor .gutter .line-number.cursor-line{background:"+colorNT+";color:#fff;opacity:1}")
      })
      atom.config.observe('line-number-color.lineNumberColor',function(value){
        let colorN = value
        let colorNT = `rgb(${colorN._red},${colorN._green},${colorN._blue})`
        console.log('paso por la function value:'+colorNT);
        var styleElement = document.createElement("style");
        styleElement.setAttribute("id","line-color")
        console.log($('#line-color').length);
        if($('#line-color').length == 0){
          document.getElementsByTagName("head")[0].append(styleElement);
        }
        $('#line-color').text("atom-text-editor .gutter{color:"+colorNT+"}atom-text-editor .line-number{opacity:1 !important}")
      })
  },
  deactivate() {
    $('#line-color').remove()
  },
  serialize() {
  }
};
