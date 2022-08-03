$(document).ready(function () {
    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    // Uzruna
    $.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
    }

    var pamatteksts = 'Ielūdzam uz mūsu kāzām!';
    function updateUzruna(input) {
        var uzrunasTeksts = '';
        var vardi = input.split(",");
        vardi.forEach(function (item, i) {
          if (item) {
            uzrunasTeksts = uzrunasTeksts + item + '! ';
          }
        });
        var uzruna = document.getElementById('uzruna');
        uzrunasTeksts = uzrunasTeksts + pamatteksts;
        uzruna.innerHTML = decodeURIComponent(uzrunasTeksts);
        document.getElementById('guest_name').value = input;
        document.getElementById('guest_name_decline').value = input;
    }

    function hidePlusOneDropdown(input) {
        var vardi = input.split(",");
        if(vardi != null && vardi.length > 1) {
            document.getElementById("plus-one-row").style.display = "none";
            document.getElementById("plus-one").value = "true";​​​​​​​​​​
        }
    }

    var queryInputUzruna = $.urlParam('uzruna');
    if (queryInputUzruna) {
      updateUzruna(decodeURIComponent(queryInputUzruna));
      hidePlusOneDropdown(decodeURIComponent(queryInputUzruna));
    } else {
        uzruna.innerHTML = pamatteksts;
    }
    var queryInputCode = $.urlParam('kods');
    if (queryInputCode) {
      document.getElementById('invite_code').value = (decodeURIComponent(queryInputCode));
      document.getElementById('invite_code_decline').value = (decodeURIComponent(queryInputCode));
    }

    /********************** Social Share buttons ***********************/
    var share_bar = document.getElementsByClassName('share-bar');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (var i = 0; i < share_bar.length; i++) {
        var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=Gints-prec-Santu&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>'
        share_bar[i].innerHTML = html;
        share_bar[i].style.display = 'inline-block';
    }

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-map-wedding').click(function () {
        $('#map-content-wedding').toggleClass('toggle-map-content');
        $('#btn-show-content-wedding').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content-wedding').click(function () {
        $('#map-content-wedding').toggleClass('toggle-map-content');
        $('#btn-show-content-wedding').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Ginta un Santas kāzas",

            // Event start date
            start: new Date('Aug 6, 2022 14:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Aug 7, 2022 16:30'),

            // Event Address
            address: 'Lokstenes svētnīca, pēc tam Ezernieki, Indrānu pagasts',

            // Event Description
            description: "Mīļi gaidīti mūsu kāzās. Neskaidrību gadījumā sazinieties ar Santu vai Gintu. Tel. nr. +371 26701355"
        }
    });

    $('#add-to-cal').html(myCalendar);


    var codesMd5 = ["74829afc837d74ed354ab5672a03a20c", "0dd50c1602e7644112a239f3b97fb250", "a35d664c627f7f78b0e437452e14f328", "007b5be0c0e8504d665caad8f4083ea6", "93375d3d2552723b701b77434e92952d", "d0e3327bf3d5609cf8327aa2e41108d6", "bd04de5b1a380ffdfed38c146a4920ed", "d2bfa28f9f0fbb1c9212c26f8d0438b7", "c97cab8e80d521d901166b6c3fc582c1", "21547e53afa6d0e4d074be0ac6d246f8", "58a9dcbf4308b37422b27d12e7fea43e", "e60066063e895b5bce9fd91f56644b34", "4d2d48c6f6eb816d935ba9dba352ca1f", "8abe06e9a382099b364b0fd464b029b9", "5b3b1be9da1d056432fddf9ad9bb50d9", "baf6ad946c39d696421de105f1d504b7", "aaea1d13804db14f3b5a974e51f02522", "5775db5c2cd57cb6c721e7fc6a6dc746", "3344dcc0f039f9463541a9624c683d58", "0d2112bb35721cbe828aa17b21c35a85", "d511834281562688f4da79d40f66c08e", "e08c70cc16d88967a911081351f20af2", "758c64cb1fc4aeea00987fea3fdf0dc3", "60b92c71ec1f1e67146b9d7d62f05b7a", "b608b1d3178cf5ab00ba9f5508e72371", "75c5b72e3fe3bd1cad7bd3c36cf87d9f", "374ecce87625f22fb1636d5003d67289", "0ea0f59887fd4caecd2bf78de146a265", "0e85657b6061068f4879757297623827", "6111884e8feeeea107a74cb317d3758f", "27a6b09c1d1732fa0bf6475bbdac64a9", "167451c2d40112ad87bf5a612daa9dd6", "991445f04bd38f16767a7c4a1d5f5087", "56c6c874dab6677082572b97600e032f", "95c22390f13d51d329eed24ec8dd58ca", "1dee556924d77226b81f08ad25833ff2", "afcf5c6a704f7f7218ad3729d8271112", "e9180d919eabaf5f32eca1d4f6cab04e", "ac555f5107908d6d237df1fd4ec477e4", "c7ccc108ef63c59aa0aa39f86420cbbd", "272da5f9c87a4f8b81a29adf6fba4daa", "f158d88c033fba9c51487f008d9e496f", "8351ba85d13bc71a3b6880e5f2108aae", "898b107b4f7a15bdc28bd1c7826394ff", "f18fd7453359056d219201d7f1be9496"];
    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();

        var data = $(this).serialize() + "&ieradisies=true";

        $('#alert-wrapper').html(alert_markup('info', '<strong>Mirklīti!</strong> Mēs vēl saglabājam informāciju.'));



        if (!codesMd5.includes(MD5($('#invite_code').val()))) {
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
        } else {
            $.post('https://script.google.com/macros/s/AKfycbzOiSGvFSo8Sg3T7DjjahlO-DEqjXN7i5kl8eF1eaK-jRLiQkGg/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Ups!</strong> Kaut kas nogāja greizi :( '));
                });
        }
    });
    $('#rsvp-decline-form').on('submit', function (e) {
        e.preventDefault();

        var data = $(this).serialize() + "&ieradisies=false";

        $('#alert-wrapper-decline').html(alert_markup('info', '<strong>Mirklīti!</strong> Mēs vēl saglabājam informāciju.'));

        if (!codesMd5.includes(MD5($('#invite_code_decline').val()))) {
            $('#alert-wrapper-decline').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
        } else {
            $.post('https://script.google.com/macros/s/AKfycbzOiSGvFSo8Sg3T7DjjahlO-DEqjXN7i5kl8eF1eaK-jRLiQkGg/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper-decline').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper-decline').html('');
                        $('#rsvp-decline-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper-decline').html(alert_markup('danger', '<strong>Ups!</strong> Kaut kas nogāja greizi :( '));
                });
        }
    });

});

/********************** Extras **********************/

// Google map
function initMaps() {
    initMap('map-canvas', {lat: 56.601622, lng: 25.662042}, "Pārcelšanās uz svētnīcu");
    initMap('map-canvas-wedding', {lat: 56.811758, lng: 26.566291}, "Atpūtas un tūrisma centrs \"Ezernieki\"");
}

function initMap(elementId, location, title) {
    var map = new google.maps.Map(document.getElementById(elementId), {
        zoom: 15,
        center: {lat: location.lat - 0.002000, lng: location.lng},
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: location,
        title: title,
        map: map
    });
    if (title != null) {
        var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h3 id="firstHeading" class="firstHeading">' + title + '</h3>' +
        /*'<div id="bodyContent">' +
        "<p></p>" +
        "</div>" +*/
        "</div>";
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
          });
        marker.addListener("click", function() {
            infowindow.open(map, marker);
          });
    }
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return (x ^ y ^ z);
    }

    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};
