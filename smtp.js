/* SmtpJS.com - v3.0.0 */
import 'dotenv';

const mailButton = document.getElementById('btnMail');

const Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function () {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const sendMmail = () =>{
    Email.send({
        // TODO: gegevens in .env file zetten
        Host: "smtp.office365.com",
        Username: "loreverh3@student.arteveldehs.be",
        Password: "HupHollandHup1212!",
        To: "lorenzoverheecke@gmail.com",
        From: "lorenzoverheecke@gmail.com",
        Subject: "WOT - Contact",
        Body: "test 123",
    })
        .then(function (message) {
            alert("mail sent successfully");
            console.log("It worked");
        });
}

btnMail.addEventListener("click", sendMmail);