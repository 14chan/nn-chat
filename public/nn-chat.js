'use strict';
// 一番下を表示
window.onload = function() {
  window.scrollTo(0,document.body.scrollHeight);
}
// エンターキーとCtrlキー（Macの場合はCommandキー）を押していたら送信
const formElement = document.forms['message-form'];
const textareaElement = formElement.elements['content'];
textareaElement.addEventListener('keydown', (event) => {

  if(isPressedSubmitKey(event)){
    event.preventDefault();
    formElement.submit();
  }
});

function isPressedSubmitKey(event) {
  if(event.key !== 'Enter') {
    return false;
  }
  if(event.ctrlKey) {
    return true;
  }
  if(event.metaKey) {
    return true;
  }
}

// ツールチップの有効化
const tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerElements.forEach((tooltipTriggerElement) => {
  new bootstrap.Tooltip(tooltipTriggerElement);
});