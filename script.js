//your JS code here. If required.
function mybutton(){
	
	const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
				
                resolve({
					alert("kjsdhkj")

                });
            }
            else {
                reject("User Name is not correct")
            }
        },0);
    });

}