class Cat {
    constructor(catName, ownerName, phone, catBreedSelect, foodTypes, catSex, comment) {
        this.catName = catName;
        this.ownerName = ownerName;
        this.phone = phone;
        this.catBreedSelect = catBreedSelect;
        this.foodTypes = foodTypes;
        this.catSex = catSex;
        this.comment = comment;
    }
}
function submitForm() {
    let errorMessage = '';
    document.getElementById('errorMessage').innerHTML = '';
    
    let catName = document.getElementById('catName').value;
    if (!catName) {
        errorMessage += "Please enter your cat's name.<br>";
    }

    let ownerName = document.getElementById('ownerName').value;
    if (!ownerName) {
        errorMessage += "Please enter your name.<br>";
    }

    let phone = document.getElementById('phone').value;
    if (!phone) {
        errorMessage += "Please enter your phone number.<br>";
    }
    let catBreedSelect = document.getElementById('catBreedSelect').value;
    if (catBreedSelect === "0") {
        errorMessage += "Please select your cat's breed.<br>";
    }
    // Food
    let wetFood = document.getElementById('wetFood');
    let dryFood = document.getElementById('dryFood');
    let naturalFood = document.getElementById('naturalFood');
    if (!wetFood.checked && !dryFood.checked && !naturalFood.checked) {
        errorMessage += "Please choose at least one type of cat's food.<br>";
    }
    let foodTypes = [];
    if (wetFood.checked) {
        foodTypes.push(wetFood.value);
    }
    if (dryFood.checked) {
        foodTypes.push(dryFood.value);
    }
    if (naturalFood.checked) {
        foodTypes.push(naturalFood.value);
    }

    // Sex
    let catSex = "";
    let female = document.getElementById('female');
    let male = document.getElementById('male');
    if (!female.checked && !male.checked) {
        errorMessage += "Please choose your cat's sex.<br>";
    }
    if (female.checked) {
        catSex = female.value;
    }
    if (male.checked) {
        catSex = male.value;
    }

    // Error
    if (errorMessage) {
        document.getElementById('errorMessage').innerHTML = errorMessage;
        return;
    }

    let comment = document.getElementById('comment').value;

    let cat1 = new Cat (catName, ownerName, phone, catBreedSelect, foodTypes, catSex, comment);
    console.log(cat1);
}