import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-global',
  templateUrl: './navbar-global.component.html',
  styleUrls: ['./navbar-global.component.css']
})
export class NavbarGlobalComponent implements OnInit {

  dropdownOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    const defaultOption = document.querySelector(".default_option");
    const selectUlItems = document.querySelectorAll(".select_ul li");
    const selectWrap = document.querySelector(".select_wrap");

    if (defaultOption && selectUlItems && selectWrap) {
      defaultOption.addEventListener("click", function() {
        if (selectWrap.classList.contains("active")) {
          selectWrap.classList.remove("active");
        } else {
          selectWrap.classList.add("active");
        }
      });

      selectUlItems.forEach(function(item) {
        item.addEventListener("click", function() {
          const currentEle = item.innerHTML;
          const defaultOptionLi = document.querySelector(".default_option li");

          if (defaultOptionLi) {
            defaultOptionLi.innerHTML = currentEle;
          }
          selectWrap.classList.remove("active");
        });
      });
    }
  }

}
