import { openOrderWindow } from "./orderWindow.js";
import { openTabsWindow } from "./openTickets.js";
let currentTicketId; //important for scope

////  QUERY SELECTED BUTTONS   ////
const entreeButton = document.querySelector(".classicEntreesButton");
const starterButton = document.querySelector(".classicStartersButton");
const dessertButton = document.querySelector(".classicDessertButton");
const sideButton = document.querySelector(".classicSidesButton");
const nonAlcholicButton = document.querySelector(".classicNonAlcoholicButton");
const alcoholicButton = document.querySelector(".classicAlcoholicButton");

const individualItems = document.querySelector(".individualItems");
const terminal = document.querySelector(".terminal");

const ticketBox = document.querySelector("terminal");

startServerProcess();
function startServerProcess() {
  
  ////  NEW TICKET FOR SCOPE, DONT REPEAT   ////  
  console.log("log: started new ticket");
  const newTicketJson = {
   
  };
  fetch(`http://localhost:8080/Tickets/newTicket`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTicketJson),
  })
    .then((res) => res.json())
    .then((newTicketJson) => {
      console.log("ID: " + newTicketJson.id);
      currentTicketId = newTicketJson.id;
    });

    ////  ENTREES ////  
    entreeButton.addEventListener("click", () => {
    clearChildren(individualItems);   
    fetch("http://localhost:8080/Floor/Entrees")
      .then((res) => res.json())
      .then((entreeJson) => {
        entreeJson.forEach((entree) => {
          console.log(entree);

          const entreeCard = document.createElement("div");
          entreeCard.className = "cards";
          entreeCard.innerText = entree.name + " " + entree.price;
          individualItems.appendChild(entreeCard);

          entreeCard.addEventListener("click", () => {
            const entreeJson = {
              name: entree.name,
              price: entree.price,
              description: entree.description,
              available: entree.available,
            };
            console.log(entree.id);
            fetch(`http://localhost:8080/Tickets/${currentTicketId}/addItem`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(entreeJson),
            })
              .then((res) => res.json())
              .then((ticket) => {
                const ticketEntreeCard = document.createElement("div");
                ticketEntreeCard.className = "cards";
                ticketEntreeCard.innerText = entree.name + " " + entree.price;
                terminal.appendChild(ticketEntreeCard);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      });
  });

  ////  STARTERS    ////

    starterButton.addEventListener("click", () => {
    clearChildren(individualItems);   
    fetch("http://localhost:8080/Floor/Appetizers")
      .then((res) => res.json())
      .then((appetizersJson) => {
        appetizersJson.forEach((appetizer) => {
          console.log(appetizer);

          const appetizerCard = document.createElement("div");
          appetizerCard.className = "cards";
          appetizerCard.innerText = appetizer.name + " " + appetizer.price;
          individualItems.appendChild(appetizerCard);

          appetizerCard.addEventListener("click", () => {
            const appetizersJson = {
              name: appetizer.name,
              price: appetizer.price,
              description: appetizer.description,
              available: appetizer.available,
            };
            console.log(appetizer.id);
            fetch(`http://localhost:8080/Tickets/${currentTicketId}/addItem`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(appetizersJson),
            })
              .then((res) => res.json())
              .then((ticket) => {
                const ticketAppetizerCard = document.createElement("div");
                ticketAppetizerCard.className = "cards";
                ticketAppetizerCard.innerText = appetizer.name + " " + appetizer.price;
                terminal.appendChild(ticketAppetizerCard);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      });
  });

  ////  DESSERTS    ////

    dessertButton.addEventListener("click", () => {
      clearChildren(individualItems);   
    fetch("http://localhost:8080/Floor/Desserts")
      .then((res) => res.json())
      .then((dessertJson) => {
        dessertJson.forEach((dessert) => {
          console.log(dessert);

          const dessertCard = document.createElement("div");
          dessertCard.className = "cards";
          dessertCard.innerText = dessert.name + " " + dessert.price;
          individualItems.appendChild(dessertCard);

          dessertCard.addEventListener("click", () => {
            const dessertJson = {
              name: dessert.name,
              price: dessert.price,
              description: dessert.description,
              available: dessert.available,
            };
            console.log(dessert.id);
            fetch(`http://localhost:8080/Tickets/${currentTicketId}/addItem`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dessertJson),
            })
              .then((res) => res.json())
              .then((ticket) => {
                const ticketDessertCard = document.createElement("div");
                ticketDessertCard.className = "cards";
                ticketDessertCard.innerText = dessert.name + " " + dessert.price;
                terminal.appendChild(ticketDessertCard);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      });
  });

  ///   SIDES   ////
  sideButton.addEventListener("click", () => {
    clearChildren(individualItems);   
    fetch("http://localhost:8080/Floor/Sides")
      .then((res) => res.json())
      .then((sideJson) => {
        sideJson.forEach((side) => {
          console.log(side);

          const sideCard = document.createElement("div");
          sideCard.className = "cards";
          sideCard.innerText = side.name + " " + side.price;
          individualItems.appendChild(sideCard);

          sideCard.addEventListener("click", () => {
            const sideJson = {
              name: side.name,
              price: side.price,
              description: side.description,
              available: side.available,
            };
            console.log(side.id);
            fetch(`http://localhost:8080/Tickets/${currentTicketId}/addItem`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(sideJson),
            })
              .then((res) => res.json())
              .then((ticket) => {
                const ticketSideCard = document.createElement("div");
                ticketSideCard.className = "cards";
                ticketSideCard.innerText = side.name + " " + side.price;
                terminal.appendChild(ticketSideCard);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      });
  });

  /// NONALCOHOLIC  ////

  nonAlcholicButton.addEventListener("click", () => {
    clearChildren(individualItems);   
    fetch("http://localhost:8080/Floor/NonAlcoholicDrinks")
      .then((res) => res.json())
      .then((nonAlcholicJson) => {
        nonAlcholicJson.forEach((nonAlcholic) => {
          console.log(nonAlcholicJson);

          const nonAlcholicCard = document.createElement("div");
          nonAlcholicCard.className = "cards";
          nonAlcholicCard.innerText = nonAlcholic.name + " " + nonAlcholic.price;
          individualItems.appendChild(nonAlcholicCard);

          nonAlcholicCard.addEventListener("click", () => {
            const nonAlcholicJson = {
              name: nonAlcholic.name,
              price: nonAlcholic.price,
              isAlcoholic: nonAlcholic.isAlcoholic,
            };
            console.log(nonAlcholic.id);
            fetch(`http://localhost:8080/Tickets/${currentTicketId}/addItem`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(nonAlcholicJson),
            })
              .then((res) => res.json())
              .then((ticket) => {
                const ticketNonAlcoholicCard = document.createElement("div");
                ticketNonAlcoholicCard.className = "cards";
                ticketNonAlcoholicCard.innerText = nonAlcholic.name + " " + nonAlcholic.price;
                terminal.appendChild(ticketNonAlcoholicCard);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      });
  });
  

  ////  ALCOHOLIC   ////

  alcoholicButton.addEventListener("click", () => {
    clearChildren(individualItems);   
    fetch("http://localhost:8080/Floor/AlcoholicDrinks")
      .then((res) => res.json())
      .then((alcholicJson) => {
        alcholicJson.forEach((alcholic) => {
          console.log(alcholicJson);

          const alcholicCard = document.createElement("div");
          alcholicCard.className = "cards";
          alcholicCard.innerText = alcholic.name + " " + alcholic.price;
          individualItems.appendChild(alcholicCard);

          alcholicCard.addEventListener("click", () => {
            const alcholicJson = {
              name: alcholic.name,
              price: alcholic.price,
              isAlcoholic: alcholic.isAlcoholic,
            };
            console.log(alcholic.id);
            fetch(`http://localhost:8080/Tickets/${currentTicketId}/addItem`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(alcholicJson),
            })
              .then((res) => res.json())
              .then((ticket) => {
                const ticketAlcoholicCard = document.createElement("div");
                ticketAlcoholicCard.className = "cards";
                ticketAlcoholicCard.innerText = alcholic.name + " " + alcholic.price;
                terminal.appendChild(ticketAlcoholicCard);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        });
      });
  });
}

function clearChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
} 