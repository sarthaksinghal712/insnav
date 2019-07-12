
function load(){
        z = []
        $(".secc").remove();
        $("#sec").fadeIn();
        $("#sub1").show();
        var w = document.getElementById("opt").value;
        const y = document.querySelector("#appendhere");
        db.collection(w).doc("sections").get().then(function(doc){
        // y.textContent = doc.data().section.join(" ");
        z.push(doc.data().section);
        var merged = [].concat.apply([], z);
        for(var i = 0; i < merged.length; i++) {
            var opt = merged[i];
            var el = document.createElement("option");
            el.setAttribute("class", "secc");
            el.textContent = opt;
            el.value = opt;
            $("#sec").append(el);
        }
    });
}

function inload(){
    var w = document.getElementById("opt").value;
    var h = document.getElementById("sec").value;
    db.collection(w).doc("sections").collection("location").doc("loc").get().then(function(doc){
        $("#loc").text(doc.data()[h]);
    });
}
        // var hehe = document.getElementById("loc").textContent;
        // vals = hehe.split(" ");
        // x = vals.indexOf("Staircase");
        // // console.log(x);
        // y = vals[x+1];
        // if(vals.indexOf("Taekwondo") != -1 || vals.indexOf("IT") != -1 || vals.indexOf("Reception") != -1 || vals.indexOf("Basement") != -1 || vals.indexOf("Library")){
        //     console.log("Exsists")

        // } else{
        //     console.log("Not exsists")
        // }


//         setTimeout(function() {
//             next(vals[1]) // runs first
//             function3(vals);
//             function2(y) // runs second
//           }, 1000)
//     });
// }
// function next(a){
//     sett = [
//         "A,",
//         "D,",
//         "E,",
//     ];


//     console.log(a);
//     re = sett.indexOf(a);
//     if(re != -1){
//         if(a == "A,"){
//             $("#block").attr("src", "assets/DSC_0007.jpg");
//         } else if(a == "D,"){
//             $("#block").attr("src","assets/DSC_0080.jpg");
//         }
//     }
// }

// function function2(b){
//     stair = [
//         "A1",
//         "A2",
//         "D1",
//         "D2",
//         "E1",
//         "E2",
//         "A1,",
//         "A2,",
//         "D1,",
//         "D2,",
//         "E1,",
//         "E2,",
//     ];
//     console.log(b)
//     nu = stair.indexOf(b)
//     if(nu != -1){
//         console.log("Near a staircase")
//     }
//     else{
//         console.log("Not near a staircase")
//     }
// }

// function function3(g){
//     console.log(g)
//     h = [
//         "Taekwondo",
//         "Library",
//         "IT",
//         "Reception",
//         "Assembly",
//         "Canteen",
//         "Medical",
//         "Bridge",
//         "Science",
//         "water",
//         "Art",
//         "ATL",
//     ];
//     for (var i = 0; i < g.length; i++){
//         if(h.indexOf(g[i]) != -1){
//             console.log(g.indexOf(g[i]));
//             console.log(g[i]);
//             if(g[i] == "Reception"){
//                 $("#haha").attr("src", "assets/DSC_0012.jpg");
//             }
//             if(g[i] == "IT"){   
//                 $("#haha").attr("src", "assets/DSC_0047.jpg");
//             }
//             if(g[i] == "ATL"){
//                 $("#b1").show();
//                 $("#b1").attr("src", "assets/DSC_0116.jpg");
//             }
//             if(g[i] == "Art"){
//                 $("#b2, #b3, #b4").show();
//                 $("#b2").attr("src", "assets/DSC_0112.jpg");
//                 $("#b3").attr("src", "assets/DSC_0115.jpg");
//                 $("#b4").attr("src", "assets/DSC_0119.jpg");
//             }
//             if(g[i] == "water"){
//                 $("#haha").attr("src", "assets/water.jpg");
//             }
//         }
//     }
// }