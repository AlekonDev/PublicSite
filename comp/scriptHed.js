var headerText = `<header id="header" class="header"> 
<div class="box">
    <div class="conteiner-label">
        <img src="Assets/image/logo(black).png" alt="">
        <div class="num">
            <img src="Assets/image/Email.png" alt ="">
            <span class="text">
                alekondr@mail.ru
            </span>
            <img src="Assets/image/phone.png" alt="">
            <span class="text">
                +7 (911)456-71-87
            </span>
        </div>
        <a class="button-style buttom-header" href="#">
            Связаться с нами
            <img src="assets/image/trel-blue.svg" alt="">
        </a>
    </div>
    <ul class="ui-head">
        <li class="ui-head-li">
            <a href="#">
                Главная
            </a>
        </li>
        <li class="ui-head-li">
            <a href="#"  class = "active">
                Наши продукты
                <img src="Assets/image/Vector (1).png" alt="">
            </a>
        </li>
        <li class="ui-head-li">
            <a href="#">
                Новости
            </a>
        </li>
        <li class="ui-head-li">
            <a href="#">
                Документация
            </a>
        </li>
        <li class="ui-head-li">
            <a href="#">
                Демо версия
            </a>
        </li>
        <li class="ui-head-li">
            <a href="#">
                Прайс лист
            </a>
        </li>
        <li class="ui-head-li">
            <a href="#">
                Контакты
            </a>
        </li>
    </ul>
</div>
</header>`;

function setHeader() {
  var header =  document.createElement("header");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();