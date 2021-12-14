function sendMail()
{
    var body = document.getElementById("name").value + document.write('<br />');

    var body2=document.getElementById("email").value + document.write('<br />');

    var body3=document.getElementById("website").value+document.write('<br />');

    var body4=document.getElementById("message").value+document.write('<br />');
    var body5=body+body2+body3+body4;

    alert(body5);
    window.location.href = "mailto:artem.letavin@yandex.ru?subject= Bronirovanie $body="+body5;
}
