document.addEventListener('DOMContentLoaded', function () {
  const computerForm = document.getElementById('computerForm');
  const computerList = document.getElementById('computerList');
  
  computerForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const brand = document.getElementById('brand').value.trim();
      const model = document.getElementById('model').value.trim();
      const serial = document.getElementById('serial').value.trim();
      
      if (brand && model && serial) {
          addComputer(brand, model, serial);
          computerForm.reset();
      } else {
          alert('Please fill out all fields.');
      }
  });
 
  function addComputer(brand, model, serial) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
          <strong>${brand}</strong> - ${model} (${serial})
          <button class="btn btn-info btn-sm float-right edit-btn">Изменить</button>
          <button class="btn btn-danger btn-sm float-right delete-btn ml-2">Удалить</button>
      `;
      computerList.appendChild(li);
  }
  
  computerList.addEventListener('click', function (event) {
      const target = event.target;
      const listItem = target.parentElement;
      
      if (target.classList.contains('delete-btn')) {
          listItem.remove();
      } else if (target.classList.contains('edit-btn')) {
          const [brand, model, serial] = listItem.textContent.split(/ - |\(|\)/).filter(Boolean);
          
          computerForm.innerHTML = `
              <h3>Изменение</h3>
              <div class="form-group">
                  <label for="editBrand">Производитель:</label>
                  <input type="text" class="form-control" id="editBrand" value="${brand}" required>
              </div>
              <div class="form-group">
                  <label for="editModel">Модель:</label>
                  <input type="text" class="form-control" id="editModel" value="${model}" required>
              </div>
              <div class="form-group">
                  <label for="editSerial">Серийный номер:</label>
                  <input type="text" class="form-control" id="editSerial" value="${serial}" required>
              </div>
              <button type="submit" class="btn btn-primary">Сохранить изменения</button>
              <button type="button" class="btn btn-secondary cancel-edit">Отменить</button>
          `;
          
          computerForm.addEventListener('submit', function (event) {
              event.preventDefault();
              
              const newBrand = document.getElementById('editBrand').value.trim();
              const newModel = document.getElementById('editModel').value.trim();
              const newSerial = document.getElementById('editSerial').value.trim();
              
              if (newBrand && newModel && newSerial) {
                  listItem.innerHTML = `
                      <strong>${newBrand}</strong> - ${newModel} (${newSerial})
                      <button class="btn btn-info btn-sm float-right edit-btn">Изменить</button>
                      <button class="btn btn-danger btn-sm float-right delete-btn ml-2">Удалить</button>
                  `;
              } else {
                  alert('Please fill out all fields.');
              }
              
              computerForm.innerHTML = `
                  <div class="form-group">
                      <label for="brand">Производитель:</label>
                      <input type="text" class="form-control" id="brand" required>
                  </div>
                  <div class="form-group">
                      <label for="model">Модель:</label>
                      <input type="text" class="form-control" id="model" required>
                  </div>
                  <div class="form-group">
                      <label for="serial">Серийный номер:</label>
                      <input type="text" class="form-control" id="serial" required>
                  </div>
                  <button type="submit" class="btn btn-primary">Добавить компьютер</button>
              `;
          });
          
          computerForm.querySelector('.cancel-edit').addEventListener('click', function () {
              computerForm.reset();
          });
      }
  });
});