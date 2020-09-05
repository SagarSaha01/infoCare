var star;

// H1 Time Settings

var d = new Date(); // for now
d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51

$(document).ready(function () {

  if (d.getHours() >= 0 && d.getHours() < 6) {
    $("h1").text("Hello! Good Night!");
  }

  else if (d.getHours() >= 6 && d.getHours() < 12) {
     $("h1").text("Hello! Good Morning!");
  }

  else if (d.getHours() >= 12 && d.getHours() < 16) {
    $("h1").text("Hello! Good Afternoon!");
  }

  else if (d.getHours() >= 16 && d.getHours() < 21) {
    $("h1").text("Hello! Good Evening!");
  }

  else if (d.getHours() >= 21 && d.getHours() <= 24) {
    $("h1").text("Hello! Good Night!");
  }


  // 5 star rating system.

  $("#s1").click(function () { 
    $(".fa-star").css("color", "black");
    $("#s1").css("color", "yellow");
    star = 1;
  });

  $("#s2").click(function () {
    $(".fa-star").css("color", "black");
    $("#s1, #s2").css("color", "yellow");
    star = 2;
  });

  $("#s3").click(function () {
    $(".fa-star").css("color", "black");
    $("#s1, #s2, #s3").css("color", "yellow");
    star = 3
  }); 

  $("#s4").click(function () {
    $(".fa-star").css("color", "black");
    $("#s1, #s2, #s3, #s4").css("color", "yellow");
    star = 4;
  });

  $("#s5").click(function () {
    $(".fa-star").css("color", "black");
    $("#s1, #s2, #s3, #s4, #s5").css("color", "yellow");
    star = 5;
  });

  // Header - Display Properties

  $(".fa-star").click(function () {
    if (star === 1 || star === 2) {
      $(".good").css("display", "none");
      $(".excellent").css("display", "none");
      $(".bad").css("display", "block");
    } else if (star === 3 || star === 4) {
      $(".bad").css("display", "none");
      $(".excellent").css("display", "none");
      $(".good").css("display", "block");
    } else if (star === 5) {
      $(".bad").css("display", "none");
      $(".good").css("display", "none");
      $(".excellent").css("display", "block");
    } else if (star = 0) {
      $(".bad").css("display", "none");
      $(".good").css("display", "none");
      $(".excellent").css("display", "none");
    }
  })

  // Self-Check Display Properties

  $(".btn-yes").click(function () {
    $(".no").css("display", "none");
    $("#thanks").css("display", "none");
    $(".yes").css("display", "block");
    $("#response").css("display", "block");
  });
  $(".btn-no").click(function () {
    $(".yes").css("display", "none");
    $("#response").css("display", "none");
    $(".no").css("display", "block");
    $("#thanks").css("display", "block");
  });

  // Location Setting

  $("#hospital-btn").click(function () {
    $(".hospital").css("display", "block");
  });

  $("#hospital-btn-1").click(function () {
    $(".hospital").css("display", "block");
  });

  // Covid-19 Symptom Count

  var covidCount;
  var test;

  $("#count").click(function () {
    if (typeof (Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
      covidCount = localStorage.clickcount;   
      localStorage.setItem("number", covidCount);
  
      if (covidCount <= 3) {
        $("#warning").css("display", "none");
        $("#danger").css("display", "none");
        $("#happy").css("display", "block");
        localStorage.setItem("three", "true");
      }
      else if (covidCount > 3 && covidCount <= 10) {
        $("#danger").css("display", "none");
        $("#happy").css("display", "none");
        $("#warning").css("display", "block");
        localStorage.setItem("five", "true")

      }
      else if (covidCount > 10) {
        $("#happy").css("display", "none");
        $("#warning").css("display", "none");
        $("#danger").css("display", "block");
        localStorage.setItem("fourteen", "true");
      }

    }
        
  });  

  if (localStorage.getItem("fourteen") === "true") {
    $("#happy").css("display", "none");
    $("#warning").css("display", "none");
    $("#danger").css("display", "block");
  }
  else if (localStorage.getItem("five") === "true") {
    $("#danger").css("display", "none");
    $("#happy").css("display", "none");
    $("#warning").css("display", "block");
  }
  else if (localStorage.getItem("three") === "true") {
    $("#warning").css("display", "none");
    $("#danger").css("display", "none");
    $("#happy").css("display", "block");
  }
  else {
    $("#warning").css("display", "none");
    $("#danger").css("display", "none");
    $("#happy").css("display", "block");
  }

  // Count Page:

  if (localStorage.getItem("number") > 0) {

    if (localStorage.getItem("fourteen") === "true") {
      $(".no-case").css("display", "none");
      $(".bad").css("display", "none");
      $(".worst").css("display", "block");
      $(".count-page-number").text("Approximately about " + localStorage.getItem("number") + " people reported covid-19 symptoms recently.");
    }
    else if (localStorage.getItem("five") === "true") {
      $(".-nocase").css("display", "none");
      $(".worst").css("display", "none");
      $(".bad").css("display", "block");
      $(".count-page-number").text("Approximately about " + localStorage.getItem("number") + " people reported covid-19 symptoms recently.");
    }
    else if (localStorage.getItem("three") === "true") {
      $(".bad").css("display", "none");
      $(".worst").css("display", "none");
      $(".no-case").css("display", "block");
      $(".count-page-number").text("Approximately about " + localStorage.getItem("number") + " people reported covid-19 symptoms recently.");
    }
  }  
  else {
    $(".bad").css("display", "none");
      $(".worst").css("display", "none");
      $(".no-case").css("display", "block");
      $(".count-page-number").text("No covid-19 symptoms were reported recently.");
  }

  // To-Do List Settings:

  const container = document.querySelector('.container');
  var inputValue = document.querySelector('.input');
  const add = document.querySelector('.add');

  if(window.localStorage.getItem("todos") == undefined){
      var todos = [];
      window.localStorage.setItem("todos", JSON.stringify(todos));
  }

  var todosEX = window.localStorage.getItem("todos");
  var todos = JSON.parse(todosEX);


  class item{
    constructor(name){
      this.createItem(name);
    }
      createItem(name){
        var itemBox = document.createElement('div');
          itemBox.classList.add('item');

        var input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        var edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "Edit";
        edit.addEventListener('click', () => this.edit(input, name));

        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "Remove";
        remove.addEventListener('click', () => this.remove(itemBox, name));

        container.appendChild(itemBox);

          itemBox.appendChild(input);
          itemBox.appendChild(edit);
          itemBox.appendChild(remove);

      }

      edit(input, name){
          if(input.disabled == true){
            input.disabled = !input.disabled;
          }
        else{
              input.disabled = !input.disabled;
              let indexof = todos.indexOf(name);
              todos[indexof] = input.value;
              window.localStorage.setItem("todos", JSON.stringify(todos));
          }
      }

      remove(itemBox, name){
          itemBox.parentNode.removeChild(itemBox);
          let index = todos.indexOf(name);
          todos.splice(index, 1);
          window.localStorage.setItem("todos", JSON.stringify(todos));
      }
  }

  add.addEventListener('click', check);
  window.addEventListener('keydown', (e) => {
    if(e.which == 13){
      check();
    }
  })

  function check(){
    if(inputValue.value != ""){
      new item(inputValue.value);
          todos.push(inputValue.value);
          window.localStorage.setItem("todos", JSON.stringify(todos));
      inputValue.value = "";
    }
  }


  for (var v = 0 ; v < todos.length ; v++){
      new item(todos[v]);
  }
  
});