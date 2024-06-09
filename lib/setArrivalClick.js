var arrivalControlInterval;
var onArrivalTimeChange = (elem, e) => {
  clearInterval(arrivalControlInterval);
  if (e.target.value) {
    var isValid = validateTimeFormat(e.target.value);
    if (isValid) {
      elem.style.border = '2px solid #15dd26';
      var spanElement = document.querySelector("span.relative_time");
      arrivalControlInterval = setInterval(() => {
        var spanText = spanElement.textContent || spanElement.innerText;
        var arrivalTime = spanText.slice(-8);
        if (arrivalTime === e.target.value) {
          document.getElementById('troop_confirm_submit').click();
          clearInterval(arrivalControlInterval);
        }
      }, 10);

    } else {
      elem.style.border = '2px solid red';
    }
  }
};

var handleCheckboxChange = () => {
  var checkbox = document.getElementById('set-arrival-time-check');
  var arrivalTimeInput = document.getElementById('arrival-time-input');
  if (checkbox.checked) {
    arrivalTimeInput.readOnly = false;
    arrivalTimeInput.focus();
  } else {
    arrivalTimeInput.readOnly = true;
    arrivalTimeInput.value = '';
    arrivalTimeInput.style.border = null;
  }
};

var commandFormArriveInterval = setInterval(() => {
  var commandDataForm = document.querySelector('form#command-data-form');
  if (commandDataForm) {
    var troopSubmitButton = commandDataForm.querySelector('input#troop_confirm_submit');
    if (troopSubmitButton) {
      // span.relative_time data-duration
      var arrivalPanel = document.createElement('div');
      arrivalPanel.className = 'arrival_panel_command_form';
      arrivalPanel.innerHTML = `
        <span>
          <input id="set-arrival-time-check" type="checkbox" onchange="handleCheckboxChange()" />
          Set Arrival Time
        </span>
        <div class="time-input">
          <label>
            Arrival Time: <input id="arrival-time-input" type="text" readonly placeholder="00:00:00" onkeyup="onArrivalTimeChange(this, event)" />
          </label>
        </div>
      `;
      commandDataForm.appendChild(arrivalPanel);
      clearInterval(commandFormArriveInterval);
    }
  }
}, 1000);