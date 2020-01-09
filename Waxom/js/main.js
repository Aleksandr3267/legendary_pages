
// burger
$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger, #main-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
// 
// --------------------------------------------------------------------------

// slider
'use strict';
    var slider = (function (config) {

      const ClassName = {
        INDICATOR_ACTIVE: 'slider__indicator_active',
        ITEM: 'slider__item',
        ITEM_LEFT: 'slider__item_left',
        ITEM_RIGHT: 'slider__item_right',
        ITEM_PREV: 'slider__item_prev',
        ITEM_NEXT: 'slider__item_next',
        ITEM_ACTIVE: 'slider__item_active'
      }

      var
        _isSliding = false, // индикация процесса смены слайда
        _interval = 0, // числовой идентификатор таймера
        _transitionDuration = 700, // длительность перехода
        _slider = {}, // DOM элемент слайдера
        _items = {}, // .slider-item (массив слайдов) 
        _sliderIndicators = {}, // [data-slide-to] (индикаторы)
        _config = {
          selector: '', // селектор слайдера
          isCycling: true, // автоматическая смена слайдов
          direction: 'next', // направление смены слайдов
          interval: 5000, // интервал между автоматической сменой слайдов
          pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
        };

      var
        // функция для получения порядкового индекса элемента
        _getItemIndex = function (_currentItem) {
          var result;
          _items.forEach(function (item, index) {
            if (item === _currentItem) {
              result = index;
            }
          });
          return result;
        },
        // функция для подсветки активного индикатора
        _setActiveIndicator = function (_activeIndex, _targetIndex) {
          if (_sliderIndicators.length !== _items.length) {
            return;
          }
          _sliderIndicators[_activeIndex].classList.remove(ClassName.INDICATOR_ACTIVE);
          _sliderIndicators[_targetIndex].classList.add(ClassName.INDICATOR_ACTIVE);
        },

        // функция для смены слайда
        _slide = function (direction, activeItemIndex, targetItemIndex) {
          var
            directionalClassName = ClassName.ITEM_RIGHT,
            orderClassName = ClassName.ITEM_PREV,
            activeItem = _items[activeItemIndex], // текущий элемент
            targetItem = _items[targetItemIndex]; // следующий элемент

          var _slideEndTransition = function () {
            activeItem.classList.remove(ClassName.ITEM_ACTIVE);
            activeItem.classList.remove(directionalClassName);
            targetItem.classList.remove(orderClassName);
            targetItem.classList.remove(directionalClassName);
            targetItem.classList.add(ClassName.ITEM_ACTIVE);
            window.setTimeout(function () {
              if (_config.isCycling) {
                clearInterval(_interval);
                _cycle();
              }
              _isSliding = false;
              activeItem.removeEventListener('transitionend', _slideEndTransition);
            }, _transitionDuration);
          };

          if (_isSliding) {
            return; // завершаем выполнение функции если идёт процесс смены слайда
          }
          _isSliding = true; // устанавливаем переменной значение true (идёт процесс смены слайда)

          if (direction === "next") { // устанавливаем значение классов в зависимости от направления
            directionalClassName = ClassName.ITEM_LEFT;
            orderClassName = ClassName.ITEM_NEXT;
          }

          targetItem.classList.add(orderClassName); // устанавливаем положение элемента перед трансформацией
          _setActiveIndicator(activeItemIndex, targetItemIndex); // устанавливаем активный индикатор

          window.setTimeout(function () { // запускаем трансформацию
            targetItem.classList.add(directionalClassName);
            activeItem.classList.add(directionalClassName);
            activeItem.addEventListener('transitionend', _slideEndTransition);
          }, 0);

        },
        // функция для перехода к предыдущему или следующему слайду
        _slideTo = function (direction) {
          var
            activeItem = _slider.querySelector('.' + ClassName.ITEM_ACTIVE), // текущий элемент
            activeItemIndex = _getItemIndex(activeItem), // индекс текущего элемента 
            lastItemIndex = _items.length - 1, // индекс последнего элемента
            targetItemIndex = activeItemIndex === 0 ? lastItemIndex : activeItemIndex - 1;
          if (direction === "next") { // определяем индекс следующего слайда в зависимости от направления
            targetItemIndex = activeItemIndex == lastItemIndex ? 0 : activeItemIndex + 1;
          }
          _slide(direction, activeItemIndex, targetItemIndex);
        },
        // функция для запуска автоматической смены слайдов в указанном направлении
        _cycle = function () {
          if (_config.isCycling) {
            _interval = window.setInterval(function () {
              _slideTo(_config.direction);
            }, _config.interval);
          }
        },
        // обработка события click
        _actionClick = function (e) {
          var
            activeItem = _slider.querySelector('.' + ClassName.ITEM_ACTIVE), // текущий элемент
            activeItemIndex = _getItemIndex(activeItem), // индекс текущего элемента
            targetItemIndex = e.target.getAttribute('data-slide-to');

          if (!(e.target.hasAttribute('data-slide-to') || e.target.classList.contains('slider__control'))) {
            return; // завершаем если клик пришёлся на не соответствующие элементы
          }
          if (e.target.hasAttribute('data-slide-to')) {// осуществляем переход на указанный сдайд 
            if (activeItemIndex === targetItemIndex) {
              return;
            }
            _slide((targetItemIndex > activeItemIndex) ? 'next' : 'prev', activeItemIndex, targetItemIndex);
          } else {
            e.preventDefault();
            _slideTo(e.target.classList.contains('slider__control_next') ? 'next' : 'prev');
          }
        },
        // установка обработчиков событий
        _setupListeners = function () {
          // добавление к слайдеру обработчика события click
          _slider.addEventListener('click', _actionClick);
          // остановка автоматической смены слайдов (при нахождении курсора над слайдером)
          if (_config.pause && _config.isCycling) {
            _slider.addEventListener('mouseenter', function (e) {
              clearInterval(_interval);
            });
            _slider.addEventListener('mouseleave', function (e) {
              clearInterval(_interval);
              _cycle();
            });
          }
        };

      // init (инициализация слайдера)
      for (var key in config) {
        if (key in _config) {
          _config[key] = config[key];
        }
      }
      _slider = (typeof _config.selector === 'string' ? document.querySelector(_config.selector) : _config.selector);
      _items = _slider.querySelectorAll('.' + ClassName.ITEM);
      _sliderIndicators = _slider.querySelectorAll('[data-slide-to]');
      // запуск функции cycle
      _cycle();
      _setupListeners();

      return {
        next: function () { // метод next 
          _slideTo('next');
        },
        prev: function () { // метод prev 
          _slideTo('prev');
        },
        stop: function () { // метод stop
          clearInterval(_interval);
        },
        cycle: function () { // метод cycle 
          clearInterval(_interval);
          _cycle();
        }
      }
    }({
      selector: '.slider',
      isCycling: false,
      direction: 'next',
      interval: 5000,
      pause: true
    }));
// end_slider
// --------------------------------------------------------------------------

// filters
// focused
// $(document).ready(function() {
//  $('.button[filter]').click(function() {

//     if($(this).attr('filter')=='all') {
//        if($(this).attr('val')=='off') {
//         $('.button[filter]').attr('val', 'off');
//         $(this).attr('val', 'on');
//         $('.button[filter]').removeClass('focused');
//         $(this).addClass('focused');
//         $('.filter > div').show(300);
//        }
//     } else
//     if($(this).attr('val')=='off') {
//         $('.button[filter]').attr('val', 'off');
//         $(this).attr('val', 'on');
//         $('.button[filter]').removeClass('focused');
//         $(this).addClass('focused');
//         $('.filter > div').hide(300);
//         var filter = $(this).attr('filter');
//         $('.filter > div[filter='+filter+']').show(300);
//     }
//   })
// })
  // end_focused
  
$(document).ready(function() {




    $('.button[filter="all"]').addClass('focused')

  // all
    $('.button[filter="all"]').click(function ready() {
    

    if($(this).attr('val')=='off') {
    $('.button[filter]').attr('val', 'off');
    $(this).attr('val', 'on');
     
    

      
        

         $('.button[filter]').removeClass('focused');
         $(this).addClass('focused');
     

    $('.filter > div').show(500);

    }
  });
  // end_all
  // button1
  $('.button[filter="wd"]').click(function() {
    
    if($(this).attr('val')=='off') {
    $('.button[filter]').attr('val', 'off');
    $(this).attr('val', 'on');

    $('.button[filter]').removeClass('focused');
    $(this).addClass('focused');
    
    $('.filter > div').hide(300);
    $('.filter > div[filter="wd"], [filter="moc"]:nth-child(5), [filter="ud"]:last-child').show(500);
    }
  });
  // end_button1
  // button2
  $('.button[filter="ud"]').click(function() {
    
    if($(this).attr('val')=='off') {
    $('.button[filter]').attr('val', 'off');
    $(this).attr('val', 'on');

    $('.button[filter]').removeClass('focused');
    $(this).addClass('focused');
    
    $('.filter > div').hide(300);
    $('.filter > div[filter="wd"], [filter="mob"]:nth-child(3), [filter="moc"]:nth-child(5)').show(500);
    }
  });
  // end_button2
  // button3
  $('.button[filter="moc"]').click(function() {
    
    if($(this).attr('val')=='off') {
    $('.button[filter]').attr('val', 'off');
    $(this).attr('val', 'on');

    $('.button[filter]').removeClass('focused');
    $(this).addClass('focused');
    
    $('.filter > div').hide(300);
    $('.filter > div[filter="ud"]:nth-child(2), [filter="mob"]:nth-child(3), [filter="mob"]:nth-child(4), [filter="moc"]:nth-child(5)').show(500);
    }
  });
  // end_button3
  // button4 
  $('.button[filter="mob"]').click(function() {
    
    if($(this).attr('val')=='off') {
    $('.button[filter]').attr('val', 'off');
    $(this).attr('val', 'on');

    $('.button[filter]').removeClass('focused');
    $(this).addClass('focused');
    
    $('.filter > div').hide(300);
    $('.filter > div[filter="mob"]:nth-child(3), [filter="mob"]:nth-child(4), [filter="moc"]:nth-child(5), [filter="ud"]:last-child').show(500);
    }
  });
  // 
});
// 
// --------------------------------------------------------------------------
// video



$(document).on('click', '.play_video', function() {
  var $video = $('#video'),
    src = $video.attr('src');
 
  $video.attr('src', src + '&autoplay=1');

  $('iframe').show(300);
  $('.overflow, .contant_on_video').hide(200);
});
// 
// --------------------------------------------------------------------------
// numbers
var time = 2, cc = 1;
$(window).scroll(function() {
$('#counter').each(function(){
  var
  cPos = $(this).offset().top,
  topWindow = $(window).scrollTop();
  if (cPos < topWindow + 400) {
    if (cc < 2) {
      $('.number').addClass('viz');
        $('div').each(function(){
          var 
          i = 1,
          num = $(this).data('num'),
          step = 1000 * time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num) {
              that.html(i);
            }
            else {
              cc = cc + 2;
              clearInterval(int);
            }
            i++;
          },step);
        });
      }
    }
  });
});
// 
// --------------------------------------------------------------------------
// СКРИПТ К СЛАЙДЕРУ КОМПАНИЙ
const mySiema = new Siema({
  loop: true
});
//



















