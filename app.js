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
    setTimeout(ii, 1000);
}

function ii(){
    var textarray = document.getElementById("loc").textContent;
    var vals = textarray.split(" ");
    var x = vals.indexOf("Staircase");
    var blockpre = vals.indexOf("Block");
    var block = vals[blockpre + 1];
    if(block.search(",") != -1){
        block_edit = block.slice(0, block.length - 1);
        block = block_edit
    }
    console.log(block);
    console.log(x);
    if(x != -1){
        var y = x + 1
        var stair = vals[y]
        if(stair.search(',') != -1){
            stair_edit = stair.slice(0, stair.length - 1);
            stair = stair_edit;
        }
        console.log(stair)
        var dataA1 = {
            Name: "A1",
            Tip: "Shortest Path - This is the very first staircase you come across when you move towards the reception, i.e. to the left of reception - Block A.",
        };
        var dataC1 = {
            Name: "C1",
            Tip: "Shortest Path - The staircase is situated adjacent to the reception to the right - Block C.",
        };
        var dataC2 = {
            Name: "C2",
            Tip: "Shortest Path - Staircase C2 can be reached by taking a right from the Reception and moving straight to the extreme end of block C.",
        }
        var dataD1 = {
            Name: "D1",
            Tip: "Shortest Path - Block D is the one situated adjacent to the Ground, D1 Staircase is the one which will be in block D, on the Swimming Pool Side.",
        };
        var dataD2 = {
            Name: "D2",
            Tip: "Shortest Path - The Canteen Entrance area, will be the shortest way to reach the staircase D2, it will be the first staircase you'll encounter if you keep moving straight.",
        };
        var dataE1 = {
            Name: "E1",
            Tip: "E1 Staircase can be found in the Synchro Block (which is Block E). It is the Staircase which is adjacent to the outdoor Skating Rink.",
        };
        document.getElementById("tipsection").style.visibility = "visible";
        if(stair == "A1"){
            $("#tipsection").text(dataA1["Tip"]);
        } else if(stair == "D1"){
            $("#tipsection").text(dataD1["Tip"]);
        } else if(stair == "D2"){
            $("#tipsection").text(dataD2["Tip"]);
        } else if(stair == "E1"){
            $("#tipsection").text(dataE1["Tip"]);
        } else if(stair == "C1"){
            $("#tipsection").text(dataC1["Tip"]);
        } else if(stair == "C2"){
            $("#tipsection").text(dataC2["Tip"]);
        }
    } else{
        var dataA = {
            "Name": "A",
            "Tip": "Block A is the first block you see when you enter the premises."
        };
        var dataB = {
            "Name": "B",
            "Tip": "Block B is the one with the reception on Ground Floor."
        };
        var dataC = {
            "Name": "C",
            "Tip": "Block C is located to the right of Reception."
        };
        var dataD = {
            "Name": "D",
            "Tip": "Block D is the one adjacent to the Ground.",
        };
        var dataE = {
            "Name": "E",
            "Tip": "Block E is the Synchro Block, the one which is connected via the Bridge, adjacent to the outdoor skating rink."
        };
        document.getElementById("tipsection").style.visibility = "visible";
        if(block == "A"){
            $("#tipsection").text(dataA["Tip"]);
        } else if(block == "B"){
            $("#tipsection").text(dataB["Tip"]);
        } else if(block == "C"){
            $("#tipsection").text(dataC["Tip"]);
        } else if(block == "D"){
            $("#tipsection").text(dataD["Tip"]);
        } else if(block == "E"){
            $("#tipsection").text(dataE["Tip"]);
        }

    }
    urll = "/master/assets/".concat(block).concat(".JPG");
    $("#blo").attr("src", urll);
    document.getElementById("blo").style.display = "block";

}

function login(){
    function newLoginHappened(user){
        if(user){
            app(user);

        } else{
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    }
    firebase.auth().onAuthStateChanged(newLoginHappened);
}

function app(user){
    document.getElementById("gr").innerHTML = user.displayName;
    document.getElementById("lou").style.visibility = "visible";
    setTimeout(loc, 1000);
}
function logout(){
    firebase.auth().signOut().then(function() {
        alert("Signed Out, sign in again");
        login();
      }, function(error) {
        alert("Err... Error");
      });
}























//         var hehe = document.getElementById("loc").textContent;
//         vals = hehe.split(" ");
//         x = vals.indexOf("Staircase");
//         // console.log(x);
//         y = vals[x+1];
//         if(vals.indexOf("Taekwondo") != -1 || vals.indexOf("IT") != -1 || vals.indexOf("Reception") != -1 || vals.indexOf("Basement") != -1 || vals.indexOf("Library")){
//             console.log("Exists")

//         } else{
//             console.log("Not exists")
//         }


//         setTimeout(function() {
//             next(vals[1]) // runs first
//             function3(vals);
//             function2(y) // runs second
//           }, 1000)
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
// }
