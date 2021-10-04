const AllDetails=document.querySelectorAll(".form-control");
const btnSubmit=document.querySelector("#submit-btn");

btnSubmit.addEventListener("click",DisplayDetails);

function DisplayDetails(){
  const firstname=document.querySelector("#Dfirstname");
  firstname.innerText=AllDetails[0].value;
  const lastname=document.querySelector("#Dlastname");
  lastname.innerText=AllDetails[1].value;
  const address1=document.querySelector("#Dadd1");
  address1.innerText=AllDetails[2].value;
  const pincode=document.querySelector("#Dpincode");
  pincode.innerText=AllDetails[4].value;
  const state=document.querySelector("#Dstate");
  state.innerText=AllDetails[5].value;
  const country=document.querySelector("#Dcountry");
  country.innerText=AllDetails[6].value;
  
  if(document.querySelector('#male').checked) {
    const genderSelectMale=document.querySelector("#male");
    Gender(genderSelectMale);
    console.log(genderSelectMale)
  }
  else{
    const genderSelectFemlae=document.querySelector("#female");
    Gender(genderSelectFemlae)
  }

  const favfood=document.querySelectorAll(".favoritefood")
  const foodList=document.querySelector("#Dfavoritefood")
  let temp=[];
  for(let i=0;i<favfood.length;i++){
      if(favfood[i].checked){
        temp.push(favfood[i].value);
      }
  }
  if(temp.length>1){
    foodList.innerText=temp;
  }else{
    alert("Please choose atleast two favorite food")
  }
}
//Gender function
function Gender(gen){
  const gender=document.querySelector("#Dgender");
  gender.innerText=gen.value;
}

