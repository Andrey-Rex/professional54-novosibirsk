
window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const acc = () => {
    const qItems = document.querySelectorAll(".where_list-item");
    const qWrapper = document.querySelectorAll(".list-item-inner_address-image");

    const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    let heightWrapper = 0;
    qWrapper.forEach(elem => {
      if (heightWrapper < elem.scrollHeight) {
        heightWrapper = elem.scrollHeight;
      }
    })

    if (windowWidth > 700) {
      qItems.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          for (let i = 0; i < qItems.length; i++) {
            if (index === i) {
              qWrapper[i].style.height =
                  qItems[i].classList.contains('where__item_active') ?
                      '' : `${heightWrapper}px`
              qItems[i].classList.toggle("where__item_active");
            } else {
              qItems[i].classList.remove("where__item_active");
              qWrapper[i].style.height = '';
            }
          }
        });
      });
    } else {
      qWrapper.forEach((item) => {
        item.style.height = `${heightWrapper}px`
      })
    }
  };

  acc();
})
