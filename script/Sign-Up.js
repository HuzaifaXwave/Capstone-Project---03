

document.getElementById("sign-up-form").addEventListener("submit" , function(e){
    e.preventDefault();

    
    let userEmail = document.getElementById("user-Email").value
    let userPassword = document.getElementById("user-Password").value
    

    if(userEmail && userPassword){

        let profileDetails = {
            email : userEmail,
            password : userPassword,
        }
        let localUser = localStorage.setItem("user" , profileDetails)
        let stringifyDetails = JSON.stringify(localUser)

        console.log(stringifyDetails);
        

         window.location.href = "/pages/SignIn.html"

         alert('Welcome')


        
    } else {
        alert("user not found")
    }

    
})


