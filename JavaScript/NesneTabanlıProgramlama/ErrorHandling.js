//ReferenceError
//TypeError
//SyntaxError
//URIError

//Error temel obje

var username = {
    name: "Deneme",
};

try {
    //console.log(Deneme());
    console.log(username.name);
    if (!username.email) throw new Error("Email yok");
} catch (e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
} finally {
    console.log("Finaly block"); //Hata varsada yoksada çalışır
}
