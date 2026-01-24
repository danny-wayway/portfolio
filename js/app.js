// let container_box = document.querySelector(".container-box");
// for(let i=1; i<=300; i++){
//     let block = document.createElement("div");
//     block.classList.add("block");
//     container_box.appendChild(block);
// }

// let allBlock = document.querySelectorAll('.block');

// let animate = anime.timeline({
//     targets: allBlock,
//     easing: 'easeInOutExpo',
//     loop: true,
//     delay: anime.stagger(100,{grid:[25,12], from:'center'}),
//     duration: 1500
// })

// animate
// .add({
//     rotateZ: 180,
//     translateY: anime.stagger(-3,{grid:[25,12], from:'center', axis:'y'}),
//     translateX: anime.stagger(-3,{grid:[25,12], from:'center', axis:'x'}),
//     opacity: 1,
// })
// .add({
//     borderRadius: 50,
// })
// .add({
//     scale: 0.2,
//     opacity: 1,
// })
// .add({
//     scale: 1,
//     opacity: 0,
// })
// .add({
//     skewY: 20,
//     borderRadius: 0,
//     opacity: 1,
// })
// .add({
//     rotateZ: 0,
//     translateY: anime.stagger(0,{grid:[25,12], from:'center', axis:'y'}),
//     translateX: anime.stagger(0,{grid:[25,12], from:'center', axis:'x'}),
//     opacity: 1,
//     skewY: 0,
// })


// evenement du click sur les items dela navbar
const navbarItems = document.querySelectorAll(".navbar ul li");

navbarItems.forEach( item =>  {

	item.addEventListener("click", ()=>{
		itemClassList = item.getAttribute("class").split(' ');

		// suprimer la class "active" du lien en cours
		let activeItem = document.querySelector(".navbar ul li.active");
		activeItem.classList.remove("active");

		item.classList.add("active")

	})
});



//Evenement du click sur les list d'affichage des languages sur la sections service

const viewListItems = document.querySelectorAll("section.services .languages .viewList p");


viewListItems.forEach(list =>{
	list.addEventListener("click",()=>{
		let getClass = list.getAttribute("class").split(' ');

		viewListItems.forEach(item =>{
			item.classList.remove("active");

			list.classList.add("active");
		})
		
		let boxItems = document.querySelectorAll("section.services .languages .boxItems");

		boxItems.forEach(boxItem =>{
			if(boxItem.classList.contains("grid")){
				boxItem.classList.remove("grid");
				boxItem.classList.add("hidden")

			}
		})
		let boxItemFind = document.querySelector(`section.services .languages .boxItems.${getClass[0]}`);

		boxItemFind.classList.add("grid");
		boxItemFind.classList.remove("hidden");
	})
})




//Evenement du click sur les list d'affichage des mes récent projets sur la sections projets

const viewListProjet = document.querySelectorAll("section.projets .viewListProjet div p");

viewListProjet.forEach(listProjet =>{
	listProjet.addEventListener("click", ()=>{
		let getClass = listProjet.getAttribute("class").split(' ');

		viewListProjet.forEach(item =>{
			item.classList.remove("active");
			listProjet.classList.add("active");
		})

		let boxItems = document.querySelectorAll("section.projets .box .boxItems");

		boxItems.forEach(boxItem =>{
			if(boxItem.classList.contains("grid")){
				boxItem.classList.remove("grid");
				boxItem.classList.add("hidden")

			}
		})
		let boxItemFind = document.querySelector(`section.projets .box .boxItems.${getClass[0]}`);

		boxItemFind.classList.add("grid");
		boxItemFind.classList.remove("hidden");
	})
})



// section mes performances

const performancesDiv = document.querySelectorAll(".performances .row1 .item");
const boxItemPerf = document.querySelectorAll(".performances .row2 .boxItem");

performancesDiv.forEach(item =>{
	item.addEventListener("click",()=>{

		performancesDiv.forEach(items =>{
			let focus = items.querySelector(".focusCercle");

			focus.classList.remove("active");
			items.classList.remove("active");
		})

		boxItemPerf.forEach(itemPerf =>{
			itemPerf.classList.remove("flex");
			itemPerf.classList.add("hidden");
		})

		let getClass = item.getAttribute("class").split(' ');

		let boxActive = document.querySelector(`.performances .row2 .boxItem.${getClass[0]}`);

		boxActive.classList.remove("hidden");
		boxActive.classList.add("flex")

		let newFocus = item.querySelector(".focusCercle");
		newFocus.classList.add("active");
		item.classList.add("active");
	})
})


// evenement click sur la barre de navigsion pour faire apparaître le sidebar

const barOpen = document.querySelector(".barIcon_open");
const barClose = document.querySelector(".barIcon_close");
let sidebarDiv = document.querySelector(".sidebar");

barOpen.addEventListener("click",()=>{
	sidebarDiv.classList.add("active");
})
barClose.addEventListener("click",()=>{
	sidebarDiv.classList.remove("active");
})
 
 const sidebarItems = document.querySelectorAll(".sidebar ul li");

sidebarItems.forEach( item =>  {

	item.addEventListener("click", ()=>{
		itemClassList = item.getAttribute("class").split(' ');
		sidebarDiv.classList.remove("active");


		// suprimer la class "active" du lien en cours
		let activeItem = document.querySelector(".sidebar ul li.active");
		activeItem.classList.remove("active");

		item.classList.add("active")

	})
});