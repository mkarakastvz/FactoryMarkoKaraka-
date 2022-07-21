let itemsReversed = document.querySelectorAll(".container-item");
itemsReversed = [...itemsReversed];
itemsReversed = itemsReversed.reverse();
itemsReversed.forEach((item, indx) => {
  item.style.transform = `translateX(${-indx * 100}%)`;
});

let itemsDown = document.querySelectorAll(".container-item-1");
itemsDown.forEach((itemDown, indx) => {
    itemDown.style.transform = `translateX(${-indx * 100}%)`;
});

let itemCounter = 0;
let maxItems = itemsReversed.length - 1;
const prevItem = document.querySelector(".button-prev");
prevItem.addEventListener("click", function () {
  if (itemCounter === 0) {
    itemCounter = maxItems;
  } else {
    itemCounter--;
  }

  itemsReversed.forEach((item, indx) => {
    item.style.transform = `translateX(${100 * (indx - itemCounter)}%)`;
  });
  itemsDown.forEach((itemDown, indx) => {
    itemDown.style.transform = `translateX(${100 * (indx - itemCounter)}%)`;
  });
});

const nextItem = document.querySelector(".button-next");

nextItem.addEventListener("click", function () {
  if (itemCounter === maxItems) {
    itemCounter = 0;
  } else {
    itemCounter++;
  }

  itemsReversed.forEach((item, indx) => {
    item.style.transform = `translateX(${100 * (indx - itemCounter)}%)`;
  });
  itemsDown.forEach((itemDown, indx) => {
    itemDown.style.transform = `translateX(${100 * (indx - itemCounter)}%)`;
  });
});
