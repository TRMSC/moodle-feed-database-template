/* Feed v.2.0 (jstemplate.js) - Copyright (C) 2021, TRMSC - https://trmsc1.wordpress.com/ */
/* GNU General Public Licence 3.0 - http://www.gnu.de/documents/gpl-3.0.en.html */

    window.onload = function() {
        jquery_load_check_interval = setInterval(function() {
            if (window.jQuery) {

                changeButtons();
                prepareList ();
                prepareSingle ();
                makePost(); 
                finishLoading();

                console.log("jquery successfully loaded...");
                console.log($.fn.jquery); // <== version of jQuery
                clearInterval(jquery_load_check_interval);
            } else {
                console.log("new try to load jquery...");
            }
        }, 150);

        function changeButtons() {
            $('.nav-link[href*="edit"]').text('➕ Etwas posten');
            $('#page-mod-data-edit .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link').text('➕ Etwas posten');
            $('.comment-area .fd a').text('Kommentar abschicken 📧');
        }

        function prepareList () {
            if ($("#data_adv_form").length) { 
                $(".alert-success, .alert-danger").appendTo(".boxaligncenter");
                var inputContent = document.getElementById("u_fn").value + document.getElementById("u_ln").value + document.getElementById("f_2161").value;
                if ((inputContent == "") && ($(".boxaligncenter .alert-success").length) && (!$(".boxaligncenter .alert-success:contains('/')").length) ) { 
                    location.reload();
                }
                if (($(".boxaligncenter .alert-danger").length) || ((inputContent == "") && ($(".boxaligncenter .alert-success:contains('/')").length)) ) {
                    alert ("Leider nichts gefunden... 😥");
                    $("#data_adv_form .boxaligncenter .btn-secondary").click();
                }
            }

            $("#data_adv_form .boxaligncenter .btn-primary").prop('value', 'Suchen 🔎');
            $("#data_adv_form .boxaligncenter .btn-secondary").prop('value', 'Zurücksetzen 🗑');
            if ($("#licenceFooter").length) { 
                document.getElementById("advancedcheckbox").checked = false;
                showHideAdvSearch(this.checked);
                $('.nav-tabs .nav-item a[href*="search"]').click(function() {
                    if (!($(".alert-success").length)) {
                        $('#advancedcheckbox').click();
                    }
                    return false;
                });       
                if ($(".alert-success").length && $("#smallPicture").length) {
                    $("#data_adv_form").css("display", "inline");
                    $("#reg_search").css("display", "none");
                } 
            } 
        }

        function prepareSingle () {
            $('.nav-link[href*="edit"]').text('➕ Etwas posten');

            $("#moreOver .icon").css({"font-size":"x-large", "margin-right":"13px", "margin-bottom":"25px"});
            $("#moreStart").css({"font-size":"1.2rem"});

             var listLink = window.location.href.split('&')[0];
             if($("#bigPicture").length) {
                 $('.mdl-left').before("<a class='" + "backBtn'" + "href='"+listLink+"'>↩ Zurück zum Feed</a>");
                 $(".backBtn").addClass("btn btn-success");
                 $(".mdl-left").css("margin-bottom", "60px");
             }
        }

        function makePost () {  
            $("#page-mod-data-edit #region-main .mdl-align.mt-1").prepend("<h3>3 - Vergiss nicht, deinen Post zu sichern und abzuschicken 🚀</h3>");
            $('#page-mod-data-edit .btn[name*="saveandview"]').val('Diesen Post abschicken ✅');
            $('#page-mod-data-edit .btn[name*="saveandadd"]').val('Abschicken und weiterposten ➕');
            $('#page-mod-data-edit .btn[name*="saveandadd"]').addClass('btn-secondary').removeClass('btn-primary');
            if ($(".mdl-align .btn-secondary").length) {
                $("#page-mod-data-edit .boxwidthwide h3").first().text("Einen neuen Post erstellen:"); 
            } else {
                $(".boxwidthwide").prepend('<h3>Deinen Post bearbeiten:</h3>');
            }
        }

        function finishLoading () {
            $("#region-main").css("cursor", "auto");
        }

    };
