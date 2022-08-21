var boards = [];
var cards = [];

function addBoard() {
  boards.push(document.createElement("div"));
  const board = document.createElement("div");
  board.id = `board-${boards.length}`;
  board.className +=
    "bg-gray-900 border border-slate-300 shadow-lg rounded-lg my-20 ml-2 w-96 h-128 mr-2 overflow-y-scroll";

  const buttonAddCard = document.createElement("button");
  const buttonDeleteBoard = document.createElement("button");
  buttonDeleteBoard.id = `${boards.length}`;

  const divAddCard = document.createElement("div");
  divAddCard.className += "flex items-center justify-between z-10 px-3";

  const title = document.createElement("input");
  title.className +=
    "text-2xl text-white w-36 max-w-full px-2 bg-transparent hover:border hover:border-slate-300 rounded-md";
  title.setAttribute("value", "Title");

  const divIcons = document.createElement("div");

  const iconRemove = document.createElement("i");
  iconRemove.className +=
    "m-3 text-3xl text-red-500 far fa-trash-alt text-white z-10";
  const iconPlus = document.createElement("i");
  iconPlus.className += "m-3 text-3xl fas fas fa-plus-circle text-white z-10";

  buttonAddCard.setAttribute("onclick", `addCard(${boards.length})`);
  buttonDeleteBoard.setAttribute(
    "onclick",
    `deleteBoard(${buttonDeleteBoard.id})`
  );
  buttonDeleteBoard.appendChild(iconRemove);
  buttonAddCard.appendChild(iconPlus);
  divIcons.appendChild(buttonDeleteBoard);
  divIcons.appendChild(buttonAddCard);
  divAddCard.appendChild(title);
  divAddCard.appendChild(divIcons);
  board.appendChild(divAddCard);
  document.getElementById("pattern").appendChild(board);
  boards.push(board);
  console.log(boards);
}

function addCard(i) {
  const board = document.getElementById(`board-${i}`);
  const card = document.createElement("div");
  const textarea = document.createElement("textarea");
  textarea.className +=
    "w-72 h-20 ml-0 bg-transparent rounded-md text-white border border-slate-300";
  card.className +=
    "py-4 px-4 w-11/12 mx-auto bg-gray-700 items-center border boder-slate-100 shadow-lg min-h-32 min-h-32 rounded-lg my-5 z-10";
  card.appendChild(textarea);
  board.appendChild(card);
  cards.push({
    board_id: i,
    card,
  });
}

function deleteBoard(i) {
  const board = document.getElementById(`board-${i}`);
  board.remove();
  boards = boards.filter((b, index) => index != i);
  cards = cards.filter((c) => c.board_id != i);
}

// function

/*
<div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
  </div>
</div>
*/
