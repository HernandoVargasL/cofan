if (document.querySelector(".navbarigac")) {
    const navbarigac = document.querySelector(".navbarigac");
    navbarigac.innerHTML = `
    <div class="logos">
        <div class="navbar-brand-igac">
            <a href='https://www.igac.gov.co' target='_blank'><img alt='Logo IGAC' src='../../images/logo-igac.png'/></a>
        </div>
        <div class="logoigac">
            <a href="/index.html"><img src="../../images/logo.svg" alt="Expediciones Igac"></a>
        </div>
    </div>
    <button class='nav-bar-toggle-igac'>
        <div class='icon-bar'></div>
        <div class='icon-bar'></div>
        <div class='icon-bar'></div>
    </button>
    <div class='navbarnavigac'>
        <li>
            <a class='inicio' href='/index.html'>Pueblo Cofan</a>
        </li>
        <li>
            <a class='dropdownToggle' href='#'>Acerca de</a>
            <ul class='dropDown'>
                <li><a href='/preguntas_frecuentes/index.html'>&iquest;Por qu&eacute; tener un &uacute;nico origen?</a></li>
                <li><a href='/preguntas_frecuentes/cual-es-la-proyeccion.html'>&iquest;Cu&aacute;l es la proyecci&oacute;n?</a></li>
                <li><a href='/preguntas_frecuentes/cuales-son-sus-beneficios.html'>&iquest;Cu&aacute;les son sus beneficios?</a></li>
                <li><a href='/preguntas_frecuentes/quienes-deben-adoptarlo.html'>&iquest;Qui&eacute;nes deben adoptarlo?</a></li>
                <li><a href='/preguntas_frecuentes/otras-preguntas-frecuentes.html'>Otras preguntas frecuentes</a></li>
            </ul>
        </li>
    </div>
    `
};

if (document.querySelector(".nav-underline")) {
    const navUnderline = document.querySelector(".nav-underline");
    navUnderline.innerHTML = `
    <a class='nav-link geodesica' href='/redes/red_geodesica.html'>Red Geod&eacute;sica GNSS</a>
    <a class='nav-link gavimetrica' href='/redes/red_gavimetrica.html'>Red Gravim&eacute;trica</a>
    <a class='nav-link geomagnetica' href='/redes/red_geomagnetica.html'>Red Geomagn&eacute;tica</a>
    <a class='nav-link d-none' href='/redes/red_gnss.html'>Red GNSS Magna Sirgas</a>
    <a class='nav-link d-none' href='/redes/red_vertices_nivelacion.html'>Red de V&eacute;rtices y Redes de Nivelaci&oacute;n</a>
    <a class='nav-link tablero' href='/redes/tablero_control.html'>Tablero de control</a>
    `
};

if (document.querySelector(".nav-underline.navHerramientas")) {
    const navUnderline = document.querySelector(".nav-underline");
    navUnderline.innerHTML = `
    <a class='servicios nav-link' href='servicios.html'>Servicios</a>
    <a class='aplicaciones nav-link' href='aplicaciones_herramientas.html'>Aplicaciones y Herramientas</a>
    <a class='modelos nav-link' href='modelos.html'>Modelos</a>
    <a class='datos nav-link' href='datos.html'>Datos</a>
    <a class='norma nav-link' href='normatividad.html'>Normatividad</a>
    <a class='guias nav-link' href='guias_manuales.html'>Gu&iacute;as y manuales</a>
    `
};

if (document.querySelector(".footer")) {
    const footerIgac = document.querySelector(".footer");
    footerIgac.innerHTML = `
    <div class='footer-container container'>
        <div class='row-footer'>
            <div class='bird-image'>
                <img src='../../images/pajaro_igac.svg' alt=''>
            </div>
            <div class='content-footer'>
                <div class='title'>
                    INSTITUTO GEOGRÁFICO AGUSTÍN CODAZZI
                </div>
                <div class='sub-title'>
                    Oficinas y horarios
                </div>
                <ul>
                    <li>
                        <a class='underline-none' href='tel:+6013773214'>Conmutador (1) 3773214</a>
                    </li>
                    <li>
                        E-mail: <a class='link' href='mailto:contactenos@igac.gov.co' target='_blank'>contactenos@igac.gov.co</a>
                    </li>
                    <li>
                        <a class='link' href='https://www.igac.gov.co/es/contenido/notificaciones-judiciales' target='_blank'>Notificaciones judiciales</a>
                    </li>
                    <li>
                        Carrera 30 Nº 48-51, Bogotá
                    </li>
                </ul>
                <div class='sub-title'>
                    Contáctenos
                </div>
                <ul>
                    <li>Abierto de lunes a viernes de 7:30 a.m. a 3:45 p.m. Jornada continua.</li>
                    <li>Sede Central y territorial Cundinamarca</li>
                    <li>NIT: 8999990049</li>
                    <li><a class="link" href='https://forms.office.com/Pages/ResponsePage.aspx?id=mv5J7epu5ke_Uu6ey12oBxIGmwVNvQBMvgfd4pJEsvJUOUVXTzVQOE1ESlZZRVNZQ1RMVjYzWk8yOS4u' target='_blank'>Encuesta de satisfacción y percepción portal web</a></li>
                </ul>
            </div>
            <div class='content-footer cla-a'>
                <div class='contents'>
                    <div class='sub-title'>
                        Nuestras plataformas
                    </div>
                    <a href='https://www.colombiaot.gov.co/'>Colombia OT</a>
                    <a href='https://www.colombiaenmapas.gov.co/'>Colombia en Mapas</a>
                    <a href='https://diccionario.igac.gov.co/'>Diccionario Geogr&aacute;fico</a>                
                </div>
            </div>
            <div class='content-footer cla-a cla-b'>
                <div class='conatin'>
                    <div class='sub-title'>
                        Síguenos
                    </div>
                    <a href='https://co.linkedin.com/company/igac'><i class='fab fa-linkedin-in'></i><span>LinkedIn</span></a>
                    <a href='https://es-la.facebook.com/IgacColombia/'><i class='fab fa-facebook-f'></i><span>Facebook</span></a>
                    <a href='https://twitter.com/igacColombia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><i class='fab fa-twitter'></i><span>Twitter</span></a>
                    <a href='https://www.instagram.com/igaccolombia/'><i class='fab fa-instagram'></i><span>Instagram</span></a>
                </div>

            </div>
        </div>        
    </div>
    `
};

if (document.querySelector(".nav-bar-toggle-igac")) {
    const dropDownButon = document.querySelector(".nav-bar-toggle-igac");
    const dropDownMenu = document.querySelector(".navbarnavigac");
    const dropDowntoggle = document.querySelector(".dropdownToggle");
    const dropDown = document.querySelector(".dropDown");
    dropDownButon.addEventListener('click', function handleClick(event) {
        dropDownMenu.classList.toggle('expandMenu');
    });
    dropDowntoggle.addEventListener('click', function handleClick(event) {
        dropDown.classList.toggle('expandMenuDrop');
    });
}

$(".list__item").click(function() {
    $(this).toggleClass("active").prevAll().removeClass("active").addClass("done");
    if ($(this).hasClass("active")) {
        $(this).nextAll().removeClass("active").removeClass("done");
    }
});


