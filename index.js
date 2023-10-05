// Add your code here

function submitData(username, useremail){
    const formData = {name:username,email:useremail,};
    

    return fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{"Content-Type":"application/json",Accept:"application/json",},
        body: JSON.stringify(formData),
    }).then(res => res.json())
    .then(obj => {
        const userIdlbl = document.createElement('label');
        userIdlbl.textContent =`user id: ${obj.id}`;
        document.body.appendChild(userIdlbl);
        console.log(obj);
    }) .catch(function(error){
        const userIdlbl = document.createElement('label');
        userIdlbl.textContent =`oops!! : ${error.message}`;
        document.body.appendChild(userIdlbl);
        

    })
}

// submitData("matphilips","philips@mat.com");
// submitData("kevin","kevlips@mat.com");
// submitData("dan","philips@dan.com");
// submitData("hue","hue@mat.com");
// submitData("mat","philips@mat.com");

function DisplayUser(){
    return fetch('http://localhost:3000/users')
    .then(res =>res.json())
    .then(users =>{
        for(const user of users){
            console.log(user.username)
        }
    })
    .catch(function(error){
        const userIdlbl = document.createElement('label');
        userIdlbl.textContent =`oops!! : ${error.message}`;
        document.body.appendChild(userIdlbl);
        

    })
}
//DisplayUser();
submitData("jax","philips@mat.com");


  
