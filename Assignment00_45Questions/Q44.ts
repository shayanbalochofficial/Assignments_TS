//*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwiches(...items: string[]): void {
  // <- Each dot(.) is for each item [as there are 3 items]
  console.log("Order Here : ");

  for (let i = 0; i < items.length; i++) {
    console.log(`- ${items[i]}`);
  }
}
console.log("Enjoy your order \n");

sandwiches("Chicken", "Mushroom", "Garlic");
sandwiches("Mutton", "Butter", "Ketchup");
sandwiches("Beef", "Cheese", "Hot Sauce");
