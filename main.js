var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://st2.depositphotos.com/2435397/8050/i/950/depositphotos_80500412-stock-photo-cartoon-older-woman.jpg","https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg","https://cdn1.vectorstock.com/i/1000x1000/48/80/character-mother-standing-design-vector-13874880.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UuLLNTs2zE8QuqCxJphUKjaUssry8BhIA8vl6ryx2gW3Wtm16djEI6FHhXf0Tio4enA&usqp=CAU","https://lh3.googleusercontent.com/proxy/CybCcHXpQDIRX6d4WuYm5yAqY7EUW7skwSZYxIxvl_yDcRJJZwlOAK1Aj6p2nvqCgdwhPz2ILVuJ922xHDWVBZM","https://cdn4.vectorstock.com/i/1000x1000/03/93/cute-boy-cartoon-posing-vector-21580393.jpg",]; 
var names = ["family book","name : Alphonsa Isaac","name : Priyan Isaac","name : Shanthi Priyan","name : Alfred Priyan","name : Adrian Priyan","name : Anton Priyan",];
var age = [" -","age : 69","age : 42","age : 37","age : 12","age : 8","age : 6"]
var i = 0;
function update()
{
    i++;
    var numbers_family_member = 6
    if(i > numbers_family_member)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage=images[i]
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName= names[i]
    var updatedage= age[i]
 
    document.getElementById("family_member_image").src =updatedImage;
    document.getElementById("family_member_name").innerHTML =updatedName;
    document.getElementById("family_member_age").innerHTML =updatedage;
    }
