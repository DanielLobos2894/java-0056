window.onload = function (){

    createGraphic(data);


}

function createGraphic(data) {
    let colors = ["#D53E4F", "#F46D43", "#FDAE61", "#FEE08B", "#F6FAAA", "#E6F598", "#ABDDA4", "#66C2A5", "#7BA5C7", "#A17BC7"]
    $dataTable = $("table#dataTable");


    for (let i = 0; i < 28 ; i++){
        let cell = "<th>" + (1990+i) + "</th>>";
        for (let j=1;j <= 12; j++ ){

            cell = cell + "<td id=\"" + (1990+i) + "_" + j + "\"></td>";
        }

        let row = "<tr>" + cell + "</tr>";
        $dataTable.append(row);
    }

    for (let k = 0 ; k < colors.length; k++){

        $("ul#colorList").append("<li style=\"background-color: " + colors[k] + "\"></li>");
    }

    data.forEach(function (monthData)  {

      monthData.forEach(function(yearData, i)  {
      let id= yearData.year + "_" + yearData.month;
      let color = colors[i];
      let $td = $("table#dataTable td#" + id);
      $td.text(i+1);
      $td.on("mouseover", function (e){
          $(e.target).text(yearData.value);

      });
      $td.on("mouseout",function (e){
          $(e.target).text(i+1);
      });

      $td.css("background-color", color);

      });

    });
}