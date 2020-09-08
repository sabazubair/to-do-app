$(document).ready(function () {
  $(".fas, .fa-plus-circle").on("click", function () {
    $("#list").append(`
    <li>
      <i class="far fa-circle"></i>
      for now, it is a static list item
      <i class="far fa-trash-alt"></i>
    </li>`);
    // console.log($("input[type=text]").val());
  });

  // $(".fas, .fa-plus-circle").on("click", function () {
  //   console.log("add button");
  // });

  // const addToDo = () => {
  //   let newToDo = $("input[type=text]").val();
  //   console.log(newToDo);
  // };
});

// refer to this video: https://www.youtube.com/watch?v=b8sUhU_eq3g
