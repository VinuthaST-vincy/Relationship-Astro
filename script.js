function calculate()
{
    const name1= document.getElementById("name").value.trim();
    const name2= document.getElementById("partner").value.trim();

    if(name1=== "" || name2===""){
        alert("Text fields cannot be empty");
    }
    else{
            const lovepercentage = Math.floor(Math.random() * 101);

            const result = document.getElementById("result");

            result.innerHTML = `${name1} and ${name2} 's Love Percentage: ${lovepercentage} `;

            if(lovepercentage < 30){
                result.innerHTML += "Not a Great Match . Looking!"
            }

            else if(lovepercentage >=30 && lovepercentage< 70)
                {
                    result.innerHTML += "<br> There is potential to match!";

            }
            else{
                result.innerHTML += "<br> Perfect Match!, lovely!" ;

            }

    }    
    
    
}