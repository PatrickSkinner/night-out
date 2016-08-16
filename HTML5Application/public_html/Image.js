/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Images = {
    "Pubs": [
        {
            "name": "The Bog",
            "filepath": "Assets/Images/List_Items_BkGrnd_Images/Pubs/TheBog.png"
        },
        {
            "name": "Craft Bar",
            "filepath": "Assets/Images/List_Items_BkGrnd_Images/Pubs/TheCraft.png"
           
            
        },
        {
            "name": "The Craic Irish Tavern",
            "filepath": "Assets/Images/List_Items_BkGrnd_Images/Pubs/TheCraic.png"
        },
        {
            "name": "Innocent Bystander",
            "filepath": "Assets/Images/List_Items_BkGrnd_Images/Pubs/InnocentBystanders.png"
        },
        {
            "name": "Alibi",
            "filepath": "Assets/Images/List_Items_BkGrnd_Images/Pubs/Alibi.png"
        }
], 
"Clubs": [
    
        {
            "name": "10 Bar",
            "filepath": "Assets/Images/List_Items_BkGrnd_Images/Clubs/10Bar.png"
        },
        {
             "name": "Boogie",
             "filepath": "Assets/Images/List_Items_BkGrnd_Images/Clubs/Boogie.png"
                     
        },
        {
            "name": "Brimstone",
            "filepath": "Assets/Images/List_Items_BkGrnd_Images/Clubs/Brimstone.png"
        },
        {
            "name": "Suburbia",
            "filepath": "Assets/Images/List_Items_BkGrnd_Images/Clubs/Suburbia.png"
        },
        {
            "name": "The Break",
            "filepath": "Assets/Images/List_Items_BkGrnd_Images/Clubs/TheBreak.png"
        }
],
"Food": [
    {
        "name": "Dost",
        "filepath": "Assets/Images/List_Items_BkGrnd_Images/Food/Dost.png"
    },
    {
        "name": "McDonalds",
        "filepath": "Assets/Images/List_Items_BkGrnd_Images/Food/Mcdonalds.png"
    },
    {
        "name": "Night & Day",
        "filepath": "Assets/Images/List_Items_BkGrnd_Images/Food/NightDay.png"
    },
    {
        "name": "PitaPit",
        "filepath": "Assets/Images/List_Items_BkGrnd_Images/Food/PitaPit.png"
    },
    {
        "name": "Velvet Burger",
        "filepath": "Assets/Images/List_Items_BkGrnd_Images/Food/VelvetBurger.png"
    }
],
"Taxis": [
    {
        "name": "Blue Bubble Taxis",
        "filepath": "Assets/Images/List_Items_BkGrnd_Images/Taxis/BlueBubble.png"
    },
    {
        "name": "City United Taxis",
        "filepath": "Assets/Images/List_Items_BkGrnd_Images/Taxis/CityUnited.png"
    },
    {
        "name": "Southern Taxis",
        "filepath": "Assets/Images/List_Items_BkGrnd_Images/Taxis/SouthernTaxis.png"
    }
]

};


function getPubImages() {
    return Images.Pubs;     
}

function getClubImages() {
    return Images.Clubs;
}

function getFoodImages() {
    return Images.Food;
}

function getTaxiImages() {
    return Images.Taxis;
}


