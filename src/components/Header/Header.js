import React from "react";

const Header = () => {
  return (
    <div class="wrapper">
      <div class="header__content">
        <div class="header__logo">
          <a href="https://www.tiesibsargs.lv/">
            <img
              src="https://www.tiesibsargs.lv/wp-content/themes/tiesibsargs/assets/img/logo.svg"
              alt="tiesibsargs.lv atgriezties sākumlapā"
            ></img>
          </a>
        </div>

        <nav
          role="navigation"
          class="header__nav"
          aria-label="Galvenes navigācija"
        >
          <div class="menu js-menu">
            <button
              class="menu__btn"
              type="button"
              id="menubutton-menu1"
              aria-haspopup="true"
              aria-controls="menu1"
            >
              <span class="menu__btn-text">Izvēlne</span>

              <svg
                width="12px"
                height="6px"
                viewBox="0 0 12 6"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    transform="translate(-219.000000, -33.000000)"
                    fill="#12021D"
                  >
                    <g transform="translate(0.000000, -1.000000)">
                      <g transform="translate(145.000000, 0.000000)">
                        <g transform="translate(21.810066, 27.000000)">
                          <g transform="translate(58.500000, 10.000000) scale(1, -1) rotate(-180.000000) translate(-58.500000, -10.000000) translate(53.000000, 7.000000)">
                            <polygon points="5.5 6 0 0.736842105 0.77 0 5.5 4.52631579 10.23 0 11 0.736842105"></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>

            <ul
              id="menu1"
              role="menu"
              aria-labelledby="menubutton-menu1"
              class="menu__items"
            >
              <li
                role="none"
                class="menu__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-202"
              >
                <a
                  role="menuitem"
                  href="https://www.tiesibsargs.lv/par-mums/"
                  class="menu__link"
                  tabindex="0"
                >
                  Par mums
                </a>
              </li>
              <li
                role="none"
                class="menu__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-326"
              >
                <a
                  role="menuitem"
                  href="https://www.tiesibsargs.lv/tiesibu-jomas/"
                  class="menu__link"
                  tabindex="0"
                >
                  Tiesību jomas
                </a>
              </li>
              <li
                role="none"
                class="menu__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-201"
              >
                <a
                  role="menuitem"
                  href="https://www.tiesibsargs.lv/kontakti/"
                  class="menu__link"
                  tabindex="0"
                >
                  Kontakti
                </a>
              </li>
              <div class="menu__lang">
                <div class="menu js-menu">
                  <button
                    class="menu__btn"
                    type="button"
                    id="menubutton-menu2"
                    aria-haspopup="true"
                    aria-controls="menu2"
                  >
                    <svg
                      width="13px"
                      height="13px"
                      viewBox="0 0 13 13"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Language</title>
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          transform="translate(-33.000000, -307.000000)"
                          fill="#12021D"
                        >
                          <g transform="translate(33.000000, 304.000000)">
                            <g transform="translate(0.000000, 3.000000)">
                              <path d="M6.5,0 C2.91014913,0 0,2.91014913 0,6.5 C0,10.0898509 2.91014913,13 6.5,13 C10.0898509,13 13,10.0898509 13,6.5 C13,4.77609282 12.3151805,3.12279238 11.0961941,1.90380592 C9.87720762,0.684819462 8.22390718,0 6.5,0 Z M12.0714286,6.03571429 L9.28571429,6.03571429 C9.23151766,4.32578999 8.78852575,2.6506772 7.99035714,1.1375 C10.2427974,1.75363235 11.8720084,3.70905625 12.0714286,6.03571429 L12.0714286,6.03571429 Z M6.5,12.0714286 C6.39642615,12.0783836 6.29250242,12.0783836 6.18892857,12.0714286 C5.22706121,10.5375155 4.69323663,8.77413101 4.64285714,6.96428571 L8.35714286,6.96428571 C8.31095299,8.77282895 7.7819662,10.5361182 6.825,12.0714286 C6.7167997,12.0790212 6.6082003,12.0790212 6.5,12.0714286 L6.5,12.0714286 Z M4.64285714,6.03571429 C4.68904701,4.22717105 5.2180338,2.46388176 6.175,0.928571429 C6.38173041,0.905341245 6.59041245,0.905341245 6.79714286,0.928571429 C7.76391396,2.46108393 8.30257712,4.22456451 8.35714286,6.03571429 L4.64285714,6.03571429 Z M4.99571429,1.1375 C4.2023873,2.65183522 3.76417465,4.32688722 3.71428571,6.03571429 L0.928571429,6.03571429 C1.12799163,3.70905625 2.75720263,1.75363235 5.00964286,1.1375 L4.99571429,1.1375 Z M0.951785714,6.96428571 L3.7375,6.96428571 C3.78595238,8.67274746 4.22257206,10.3477793 5.01428571,11.8625 C2.76914679,11.2398126 1.14856283,9.28585138 0.951785714,6.96428571 Z M7.99035714,11.8625 C8.78852575,10.3493228 9.23151766,8.67421001 9.28571429,6.96428571 L12.0714286,6.96428571 C11.8720084,9.29094375 10.2427974,11.2463676 7.99035714,11.8625 Z"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>

                    <span class="menu__btn-text">Latviešu valoda</span>

                    <svg
                      width="12px"
                      height="6px"
                      viewBox="0 0 12 6"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          transform="translate(-219.000000, -33.000000)"
                          fill="#12021D"
                        >
                          <g transform="translate(0.000000, -1.000000)">
                            <g transform="translate(145.000000, 0.000000)">
                              <g transform="translate(21.810066, 27.000000)">
                                <g transform="translate(58.500000, 10.000000) scale(1, -1) rotate(-180.000000) translate(-58.500000, -10.000000) translate(53.000000, 7.000000)">
                                  <polygon points="5.5 6 0 0.736842105 0.77 0 5.5 4.52631579 10.23 0 11 0.736842105"></polygon>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>

                  <ul
                    id="menu2"
                    role="menu"
                    aria-labelledby="menubutton-menu2"
                    class="menu__items"
                  >
                    <li
                      role="none"
                      class="menu__item lang-item lang-item-7 lang-item-lv current-lang lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-375-lv"
                    >
                      <a
                        role="menuitem"
                        href="https://www.tiesibsargs.lv/resursu-datubaze/"
                        class="menu__link"
                        tabindex="0"
                      >
                        Latviešu valoda
                      </a>
                    </li>
                    <li
                      role="none"
                      class="menu__item lang-item lang-item-10 lang-item-en no-translation menu-item menu-item-type-custom menu-item-object-custom menu-item-375-en"
                    >
                      <a
                        role="menuitem"
                        href="https://www.tiesibsargs.lv/en/homepage/"
                        class="menu__link"
                        tabindex="0"
                      >
                        English
                      </a>
                    </li>
                    <li
                      role="none"
                      class="menu__item lang-item lang-item-15 lang-item-ru no-translation menu-item menu-item-type-custom menu-item-object-custom menu-item-375-ru"
                    >
                      <a
                        role="menuitem"
                        href="https://www.tiesibsargs.lv/ru/homepage-rus/"
                        class="menu__link"
                        tabindex="0"
                      >
                        Русский
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                <a
                  class="menu__link menu__link--lang"
                  aria-label="Viegli lasīt"
                  href="https://www.tiesibsargs.lv/viegli-lasit/"
                >
                  Viegli lasīt
                </a>
              </div>
            </ul>
          </div>{" "}
        </nav>

        <button
          type="button"
          class="header__search"
          aria-label="Atveriet meklēšanu"
        >
          <svg
            version="1.1"
            viewBox="0 0 700 700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m624.88 530.12-204.02-204c29.996-35.688 46.422-80.301 46.422-127.48 0-53.059-20.66-102.95-58.184-140.46-37.52-37.512-87.406-58.172-140.46-58.172-53.059 0-102.95 20.66-140.45 58.184-77.441 77.453-77.441 203.46 0 280.92 37.508 37.52 87.395 58.184 140.45 58.184 47.168 0 91.793-16.414 127.48-46.422l204 204zm-471.95-215.77c-63.793-63.805-63.793-167.62 0-231.42 30.906-30.902 71.996-47.926 115.71-47.926 43.715 0 84.805 17.023 115.71 47.926 30.906 30.906 47.926 71.996 47.926 115.71 0 43.715-17.023 84.805-47.926 115.71-30.906 30.906-72.008 47.926-115.71 47.926s-84.805-17.012-115.71-47.926z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
