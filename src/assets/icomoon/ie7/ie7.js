/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-next': '&#xe918;',
		'icon-Star1': '&#xe917;',
		'icon-Check1': '&#xe915;',
		'icon-Close1': '&#xe916;',
		'icon-bot': '&#xe912;',
		'icon-Copyright': '&#xe900;',
		'icon-Close': '&#xe901;',
		'icon-Check': '&#xe902;',
		'icon-Star': '&#xe903;',
		'icon-Services': '&#xe904;',
		'icon-Portfolio': '&#xe905;',
		'icon-Mobile': '&#xe906;',
		'icon-mail': '&#xe907;',
		'icon-location': '&#xe908;',
		'icon-Home': '&#xe909;',
		'icon-cv': '&#xe90a;',
		'icon-Contact': '&#xe90b;',
		'icon-Blog': '&#xe90c;',
		'icon-Icons-Youtube': '&#xe90d;',
		'icon-Icons-twitter': '&#xe90e;',
		'icon-Icons-instagram': '&#xe90f;',
		'icon-Icons-facebook': '&#xe910;',
		'icon-Icons-dribbble': '&#xe911;',
		'icon-download': '&#xe914;',
		'icon-linkedin': '&#xe913;',
		'icon-telegram': '&#xea95;',
		'icon-github': '&#xeab0;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
