"use strict";

// Бургер меню
// пункты бургер меню
// position sticky




const NavItem1 = document.getElementById('nav__item1');
var bull1 = 0;
const NavItem2 = document.getElementById('nav__item2');
var bull2 = 0;
const NavItem3 = document.getElementById('nav__item3');
var bull3 = 0;
const NavItem4 = document.getElementById('nav__item4');
var bull4 = 0;

// if (this.classList.contains('active'))

function visibleOnClick(elem) {
	if (elem.classList.contains('nav__item_active')) {
		close(elem);
	} else {
		closeOther();
		unlock(elem);
	}
}
function closeOther(params) {
	NavItem1.classList.remove("nav__item_active");
	NavItem1.className = "nav__item";
	NavItem1.childNodes[1].classList.remove("nav__vector_active");
	NavItem1.childNodes[1].className = "nav__vector";
	NavItem1.childNodes[3].className = "sub-nav__item";
	NavItem2.classList.remove("nav__item_active");
	NavItem2.className = "nav__item";
	NavItem2.childNodes[1].classList.remove("nav__vector_active");
	NavItem2.childNodes[1].className = "nav__vector";
	NavItem2.childNodes[3].className = "sub-nav__item";
	NavItem3.classList.remove("nav__item_active");
	NavItem3.className = "nav__item";
	NavItem3.childNodes[1].classList.remove("nav__vector_active");
	NavItem3.childNodes[1].className = "nav__vector";
	NavItem3.childNodes[3].className = "sub-nav__item";
	NavItem4.classList.remove("nav__item_active");
	NavItem4.className = "nav__item";
	NavItem4.childNodes[1].classList.remove("nav__vector_active");
	NavItem4.childNodes[1].className = "nav__vector";
	NavItem4.childNodes[3].className = "sub-nav__item";
}

function unlock(elem) {
	elem.classList = "nav__item_active";
	elem.childNodes[1].className = "nav__vector_active";
	elem.childNodes[3].className = "sub-nav__item_active";
}
function close(elem) {
	elem.classList.remove("nav__item_active");
	elem.className = "nav__item";
	elem.childNodes[1].classList.remove("nav__vector_active");
	elem.childNodes[1].className = "nav__vector";
	elem.childNodes[3].className = "sub-nav__item";
}

const navBurger = document.getElementById('nav__burger');
function burgerActive(params) {
	navBurger.classList.toggle('_active');
}




const imgBoxes = document.getElementById('imgBoxes');

const nftsBtn = document.getElementById('nftsBtn');
const defiBtn = document.getElementById('defiBtn');
const paymentsBtn = document.getElementById('paymentsBtn');
const gamingBtn = document.getElementById('gamingBtn');
const daosBtn = document.getElementById('daosBtn');


const imgBoxesChild1 = document.getElementById('imgBoxesChild1');
const imgBoxesChild2 = document.getElementById('imgBoxesChild2');
const imgBoxesChild3 = document.getElementById('imgBoxesChild3');
const imgBoxesChild4 = document.getElementById('imgBoxesChild4');
const imgBoxesChild5 = document.getElementById('imgBoxesChild5');


const textBoxesChild1 = document.getElementById('textBoxesChild1');
const textBoxesChild2 = document.getElementById('textBoxesChild2');
const textBoxesChild3 = document.getElementById('textBoxesChild3');
const textBoxesChild4 = document.getElementById('textBoxesChild4');
const textBoxesChild5 = document.getElementById('textBoxesChild5');

const iconBoxesChild1 = document.getElementById('iconBoxesChild1');
const iconBoxesChild2 = document.getElementById('iconBoxesChild2');
const iconBoxesChild3 = document.getElementById('iconBoxesChild3');
const iconBoxesChild4 = document.getElementById('iconBoxesChild4');
const iconBoxesChild5 = document.getElementById('iconBoxesChild5');

function removeAll(params) {
	imgBoxesChild1.setAttribute("hidden", "hidden");
	imgBoxesChild2.setAttribute("hidden", "hidden");
	imgBoxesChild3.setAttribute("hidden", "hidden");
	imgBoxesChild4.setAttribute("hidden", "hidden");
	imgBoxesChild5.setAttribute("hidden", "hidden");

	textBoxesChild1.setAttribute("hidden", "hidden");
	textBoxesChild2.setAttribute("hidden", "hidden");
	textBoxesChild3.setAttribute("hidden", "hidden");
	textBoxesChild4.setAttribute("hidden", "hidden");
	textBoxesChild5.setAttribute("hidden", "hidden");

	iconBoxesChild1.classList.add("hidden");
	iconBoxesChild2.classList.add("hidden");
	iconBoxesChild3.classList.add("hidden");
	iconBoxesChild4.classList.add("hidden");
	iconBoxesChild5.classList.add("hidden");

	nftsBtn.classList.remove("nft-features__btn_active")
	defiBtn.classList.remove("nft-features__btn_active")
	paymentsBtn.classList.remove("nft-features__btn_active")
	gamingBtn.classList.remove("nft-features__btn_active")
	daosBtn.classList.remove("nft-features__btn_active")
}


function buildVisibleOnClick(focus) {
	if (focus == nftsBtn) {
		removeAll();
		imgBoxesChild1.removeAttribute("hidden");
		textBoxesChild1.removeAttribute("hidden");
		iconBoxesChild1.classList.remove("hidden");
		nftsBtn.classList.add("nft-features__btn_active")
	} else {
		if (focus == defiBtn) {
			removeAll();
			imgBoxesChild2.removeAttribute("hidden");
			textBoxesChild2.removeAttribute("hidden");
			iconBoxesChild2.classList.remove("hidden");
			defiBtn.classList.add("nft-features__btn_active")
		} else {
			if (focus == paymentsBtn) {
				removeAll();
				imgBoxesChild3.removeAttribute("hidden");
				textBoxesChild3.removeAttribute("hidden");
				iconBoxesChild3.classList.remove("hidden");
				paymentsBtn.classList.add("nft-features__btn_active")
			} else {
				if (focus == gamingBtn) {
					removeAll();
					imgBoxesChild4.removeAttribute("hidden");
					textBoxesChild4.removeAttribute("hidden");
					iconBoxesChild4.classList.remove("hidden");
					gamingBtn.classList.add("nft-features__btn_active")
				} else {
					if (focus == daosBtn) {
						removeAll();
						imgBoxesChild5.removeAttribute("hidden");
						textBoxesChild5.removeAttribute("hidden");
						iconBoxesChild5.classList.remove("hidden");
						daosBtn.classList.add("nft-features__btn_active")
					} else {
						console.log('eror')
					}
				}
			}
		}
	}
}



