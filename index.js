//1. Create a <p> using the createElement method. When you have a reference to your new element, change its innerText to something that you would like to have on your bucket list, and then append it to the DOM with the appendChild method. Where does this element go? How can you get it do be added directly after the already existing <p>.

const body = document.body;
const section = document.querySelector(".list"); 

// const travel = document.createElement("p");
// travel.innerText = "Travel and explore many country as I can";
// section.appendChild(travel);

// const getADog = document.createElement("p");
// getADog.innerText = "Have a dog";
// section.appendChild(getADog);

//2. Create another <p> with an item you would like to have on you bucket list. This time add it to the DOM, right after your existing <p>-tags with the help of the insertAdjecentElement method. This method accepts a position argument. Which value should that argument have?
// afterbegin
// afterend
// beforebegin
// beforeend
// Try them out!

//Syntax: element.insertAdjacentElement(position, element)
// const language = document.createElement("p");
// language.innerText = "Learn a new language";

// section.insertAdjacentElement("afterbegin", language); // Textens position: Först på listan. I HTML: inne i <section> först
// section.insertAdjacentElement("afterend", language); // Textens position: Sist på listan. I HTML: utanför/under </section>
// section.insertAdjacentElement("beforebegin", language); // Textens position: Första på listan. I HTML: utanför/ovanför <section>. 
// section.insertAdjacentElement("beforeend", language); // Textens position: Sist på listan. I HTML: inne i <section> sist.

//3. innerHTML is an interesting property that exists on HTML elements. With that property we can get and set the inner HTML of a HTML element very easy. Try to get (or do you already have it?) the inner HTML from the element that contains all the <p>-tags of your bucket list. Log that to the console.

const allPTags = document.querySelectorAll("p");
console.log(allPTags);

//4. In order to set the innerHTML of an element we need to create a string that contains the HTML code that we want to add to the DOM. It can look something like this
//"<div>This is a div element as a string</div>";
//Now create that string that contains a new item that you want to add to your bucket list.

const newItem = "<p>Try Zipline</p>";

//5. Set the innerHTML of the list with the new item you just created. What happens when you do that?

// const zipline = document.createElement("p");
// zipline.innerHTML = newItem;
// section.appendChild(zipline);

//6. Comment out that previous line(s) of code and the three items that you had before you should exist again. How can you add that last item and still keep the three other ones? There is a method that is very similar to the insertAdjecentElement that will take your HTML string and add it to the list. Try to add your new item to the beginning of the list.

//Syntax: element.insertAdjacentHTML(position, html)
section.insertAdjacentHTML("afterbegin", "<p>Travel and explore many country as I can</p>");
section.insertAdjacentHTML("afterbegin", "<p>Learn a new language</p>");
section.insertAdjacentHTML("afterbegin", "<p>Have a dog</p>");
section.insertAdjacentHTML("afterbegin", "<p>Try Zipline</p>");

//7. Add three more items to the end of list, but try and do it with a loop instead. Less repetitive code.

const addList = ["Explore food", "Run a marathon", "Live abroad at least 1 year"];

for (let i = 0; i <= addList.length-1; i++) {
    const addItem = document.createElement('p');
    addItem.innerText = addList[i];
    section.appendChild(addItem);
}

//8. How many items do you have in your bucket list now? Log it to the console. Use the children property.

const howManyItems = section.children.length;

console.log(`Number of items: ${howManyItems}`);

//9. Change the content of the h2 at the to top of the HTML document do have your name instead of "Bucky's";

const changeName = document.querySelector(".owner");
const h2Text = changeName.textContent;
console.log(h2Text);

changeName.textContent = "My Zhen";

//10. Replace the first item in your list with a new item. There are several ways to do this, but try the replaceChild method out.

const firstP = document.querySelector("p");
console.log(firstP);

// const myOldItem = document.querySelector("");
const myNewItem = document.createElement("p");
myNewItem.innerText = "Be good at my work";
section.replaceChild(myNewItem, firstP);

//11. Now try replace an element in the middle of the list to a new one. Use the same method as before or get creative.

const myList = document.querySelector(".list")
const replaceElement = myList.children[4];
const addAnotherNewItem = document.createElement("p");
addAnotherNewItem.innerText = "Complete a 1000+ Piece Jigsaw Puzzle"
section.replaceChild(addAnotherNewItem, replaceElement);

//12. Remove the last element in the list. lastChildElement combine with the removeChild method might work.

// const myList = document.querySelector(".list") //Finns redan (är redan definerad)
const lastItem = myList.lastElementChild;
myList.removeChild(lastItem);


