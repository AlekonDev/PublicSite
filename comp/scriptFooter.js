var footerText = `<footer class="footer">
<div class="conteiner-footer">
    <div>
        <img src="assets/image/logo-footer.svg" alt="">
        <p class="text-footer-log">
            © 2022 ООО “ЦИК АлеКоН”
        </p>
    </div>
    <div class="qq">
        <li class="footer-a">
            <a href="#" class="text-footer-a">
                Главная
            </a>
        </li>
        <li class="footer-a">
            <a href="#" class="text-footer-a">
                Наши продукты
            </a>
        </li>
        <li class="footer-a">
            <a href="#" class="text-footer-a">
                Новости
            </a>
        </li>
        <li class="footer-a">
            <a href="#" class="text-footer-a">
                Документация
            </a>
        </li>
        <li class="footer-a">
            <a href="#" class="text-footer-a">
                Демо версии
            </a>
        </li>
        <li class="footer-a">
            <a href="#" class="text-footer-a">
                Прайс лист
            </a>
        </li>
        <li class="footer-a">
            <a href="#" class="text-footer-a">
                Контакты
            </a>
        </li>
    </div>
    <div class="icon">
        <div>
            <p class= "text-icon">
                <img src="assets/image/email-footer.svg"  class="image-footer" alt="">
                alekondr@mail.ru
            </p>
        </div>
        <div>
            <p class= "text-icon">
                <img src="assets/image/phone-footer.svg" class="image-footer" alt="">
                +7 (911)456-71-87
            </p>
        </div>
        <a class="button-footer button-style">Связаться с нами</a>
    </div>
</div>
</footer>`;

function setFooter() {
  var footer =  document.createElement("footer");
  footer.innerHTML = footerText ;
  document.body.insertAdjacentElement('beforeend', footer );
}

setFooter();