const slider = document.querySelector(".slider");
const output = document.querySelector(".img-container")

slider.addEventListener("input", function (event) {
    console.log(event.currentTarget.value);

    switch (parseFloat(event.currentTarget.value)) {
        case 1:
        output.innerHTML = `<img class="chair-img" src="/img/1.jpg" alt="chair">`
          break;
        case 2:
        output.innerHTML = `<img class="chair-img" src="/img/2.jpg" alt="chair">`
          break;
        case 3:
        output.innerHTML = `<img class="chair-img" src="/img/3.jpg" alt="chair">`
          break;
        case 4:
        output.innerHTML = `<img class="chair-img" src="/img/4.jpg" alt="chair">`
          break;
        case 5:
        output.innerHTML = `<img class="chair-img" src="/img/5.jpg" alt="chair">`
          break;
        case 6:
        output.innerHTML = `<img class="chair-img" src="/img/6.jpg" alt="chair">`
          break;
      }
});

