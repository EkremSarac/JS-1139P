let scoreA = 0
let scoreB = 0

document.getElementById("artır1").addEventListener("click", function(){
    scoreA++
    document.getElementById("score1").innerText = scoreA
})

document.getElementById("azalt1").addEventListener("click", function() {
    if (scoreA > 0) {
        scoreA--
        document.getElementById("score1").innerText = scoreA
    }
})


document.getElementById("artır2").addEventListener("click", function(){
    scoreB++
    document.getElementById("score2").innerText = scoreB
})

document.getElementById("azalt2").addEventListener("click", function() {
    if (scoreB > 0) {
        scoreB--
        document.getElementById("score2").innerText = scoreB
    }
})
/* bu kısımda yardım aldım */
document.getElementById("degerGir1").addEventListener("click", function() {
    let yeniSkor = prompt("Takım A için bir sayı girin:")
    if (!isNaN(yeniSkor) && yeniSkor !== null && yeniSkor.trim() !== "") {
        scoreA = parseInt(yeniSkor)

        if (yeniSkor < 0) {
            alert("EKSİ GOL OLMAZ")
        } else{
            document.getElementById("score1").innerText = scoreA
        }

        
    } else {
        alert("Lütfen geçerli bir sayı girin!")
    }
})

document.getElementById("degerGir2").addEventListener("click", function() {
    let yeniSkor = prompt("Takım B için bir sayı girin:")
    if (!isNaN(yeniSkor) && yeniSkor !== null && yeniSkor.trim() !== "") {
        scoreB = parseInt(yeniSkor)
        document.getElementById("score2").innerText = scoreB
    } else {
        alert("Lütfen geçerli bir sayı girin!")
    }
})
/*bu kısımda yardım aldım */

document.getElementById("changeName1").addEventListener("click", function(){
    let yeniIsim = prompt("İsim girin")
    if (yeniIsim == "") {
        alert("geçerli bir isim girin")

    } else {
        document.getElementById("team1").innerHTML = yeniIsim
    }
    
})

document.getElementById("changeName2").addEventListener("click", function(){
    let yeniIsim = prompt("İsim girin")
    document.getElementById("team2").innerHTML = yeniIsim
})
