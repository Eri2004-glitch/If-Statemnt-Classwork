let userRole = "Admin";
let password = "TheMaster";

if (userRole === "Admin"){
    console.log("Enter Password for Admin");
    if (password === "TheMaster"){
        console.log("Welcome");
    } else if (password != "TheMaster"){
        console.log("Wrong Password");
    }
} else if (userRole != "Admin"){
    console.log ("I don't know you");
}