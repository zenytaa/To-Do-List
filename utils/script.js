// document.addEventListener("click", async function (e) {
//   if (e.target.classList.contains("edit-btn")) {
//   }
// });

// function showEditModal() {
//   const edit = displayEditModal();
//   const modalEdit = document.querySelector(".modal-edit");
//   modalEdit.innerHTML = edit;
// }

// function displayEditModal() {
//   return `<div class="modal fade" id="editModal" tabindex="-1">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>

//       <div class="modal-body">
//         <form action="/update" method="POST">
//           <div class="row d-flex gap-lg-4">
//             <div class="col-lg-5 py-2">
//               <input type="text" class="form-control" name="task" placeholder="Add task.." value="<%= t.task %>">
//             </div>
//             <div class="col-lg-5 py-2">
//               <input type="date" class="form-control" name="dueTo" placeholder="Add due" value="<%= t.dueTo %>">
//             </div>
//           </div>
//         </form>
//       </div>

//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
// `;
// }
