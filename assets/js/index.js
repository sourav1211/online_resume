$(document).ready(function () {
    $("#skill-details-div").hide();
});

function showTooltip(name) {
    alert(name);
}

//
$(".skill-custom div").focus(function () {
    if (!$(this).data('focused')) {
        $(this).data('focused', true);
        alert('focus!');
    }
});

$(".section-bg").hover(function () {
    $("#skill-details-div").hide();
}, function () {
    $("#skill-details-div").hide();
});
$(".skill-custom").hover(function () {
    var ulLi = "";
    var titleDetails = "";
    // alert("hello " + this.id); image-id
    $("#topic-details").text("hello bro");
    $("#skill-details").fadeIn("3000");
    if (this.id == "java") {
        titleDetails = "JAVA";
        ulLi = "" +
            "<ul>" +
            "<li>Got training from IDB-BISEW</li>" +
            "<li>Do some personal project</li>" +
            "<li>Develop application with <i>JDK-1.7</i>,<i>JDK-1.8</i>,<i>JDK-14</i></li>" +
            "</ul>"
    }
    if (this.id == "grails") {
        titleDetails = "Groovy and grails";
        ulLi = "" +
            "<ul>" +
            "<li>Got training from IDB-BISEW</li>" +
            "<li>Do some personal project</li>" +
            "<li>Develop application with <i>JDK-1.7</i>,<i>JDK-1.8</i>,<i>JDK-14</i></li>" +
            "</ul>"
    }
    if (this.id == "flutter") {
        titleDetails = "Flutter";
        ulLi = "" +
            "<ul>" +
            "<li>Got training from IDB-BISEW</li>" +
            "<li>Do some personal project</li>" +
            "<li>Develop application with <i>JDK-1.7</i>,<i>JDK-1.8</i>,<i>JDK-14</i></li>" +
            "</ul>"
    }

    $("#skill-details-div").fadeIn();
    $("#title_details").html(titleDetails);
    $("#detail_content").html(ulLi);

    $("#detail_content_img").attr("src", "assets/img/skills/" + this.id + ".png");
}, function () {
    $("#skill-details-div").hide();
});