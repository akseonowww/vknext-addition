// ___ BLACK LIST ___

// СПОСОБ 1. Фильтр 
// 1. по названию
// 2. по артисту
// 3. по названию и/или по артисту

// СПОСОБ 2. Файл
// Формат импорта песен в Яндекс Музыку
// [Artist] - [Name]
// DK - Лицемер
// Слава КПСС - ОЙ ДА
// EXILE feat. DK - МЁД

//    1. Загружаем Black_List_date.txt
//    2. При загрузки трека в плеере - пропускать (3 сек)
//    3. Кнопка блокировки
//    4. Скачать Black_List_date.txt

// Для импорта из VK в Я.Музыку
// (function(){
//   function downloadString(text, fileType, fileName) {
//    var blob = new Blob([text], { type: fileType });
//    var a = document.createElement('a');
//    a.download = fileName;
//    a.href = URL.createObjectURL(blob);
//    a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
//    a.style.display = "none";
//    document.body.appendChild(a);
//    a.click();
//    document.body.removeChild(a);
//  }
//  downloadString(Array.from(document.querySelectorAll('.audio_row')).map(el => {
//      const title = el.querySelector('.audio_row__title_inner');
//      const artist = el.querySelector('.audio_row__performers');
//      return `${artist.innerText} - ${title.innerText}`
//  }).join('\n'), 'text', 'audio.txt');
// })();