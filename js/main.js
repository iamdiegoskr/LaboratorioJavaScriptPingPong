import Board from "./models/Board.js";
import BoardView from "./views/BoardView.js";


let canvas = document.getElementById("canvas");

let board = new Board(800,500);

let boardView = new BoardView(canvas, board);
