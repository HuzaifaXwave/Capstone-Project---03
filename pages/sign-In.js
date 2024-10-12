// Sign In Form //


    

async function User_Api(){
    let convertInJson = null
    try {
        let callApi = await fetch("https://fakestoreapi.com/users")
        convertInJson = await callApi.json()
        console.log(convertInJson);
        
    } catch  (error) {
        
    }
    document.getElementById("sign-In-form").addEventListener("submit" , function (event){
        event.preventDefault();
    
        let userEmail = document.getElementById("user-Email").value;
        let userPassword = document.getElementById("user-Password").value;
        let findUser = convertInJson.find(user => user.email === userEmail && user.password === userPassword)
    
        if (findUser) {
            
            window.location.href = '/index.html'
    
            alert("Congratulation you are the member of our store now")
        } else{
            alert('user not found')
        }    

        

          
            
    })    
}


User_Api()


