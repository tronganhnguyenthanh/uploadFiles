let file = []
document.querySelector(".form-control").addEventListener("change", function(e){
  let files = e?.target?.files[0]
  let uploads = URL.createObjectURL(files)
  file.push(uploads)
  getFiles(file)
})

function getFiles(file){
  let list = "<div class='row p-3'>"
  file?.forEach(function(item, index){
    list += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
      <div class="card">
        <img src="${item}" alt="" style="height:400px"/>
        <button type="button" class="btn btn-danger m-2" onclick="deleteFile(${index})">Delete file</button>
      </div>
    </div>
    `
  })
  list += "</div>"
  document.querySelector("#upload-file").innerHTML = list
}

function deleteFile(index){
  let isConfirmed = window.confirm("Are you sure to delete this file?")
  if(isConfirmed){
   file.splice(index, 1)
   getFiles(file)
  }
}