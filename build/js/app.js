const subscriptionInner=document.querySelector(".subscription__icons__inner"),boxes=document.querySelectorAll(".subscription__box"),arrowLeft=document.querySelector(".subscription__arrow-left"),arrowRight=document.querySelector(".subscription__arrow-right");let activeIndex=0,inner=subscriptionInner.getBoundingClientRect();arrowLeft.addEventListener("click",()=>{0===activeIndex?activeIndex=boxes.length-1:activeIndex--,subscriptionInner.style.transform=`translateX(-${inner.width*activeIndex}px)`}),arrowRight.addEventListener("click",()=>{activeIndex===boxes.length-1?activeIndex=0:activeIndex++,subscriptionInner.style.transform=`translateX(-${inner.width*activeIndex}px)`});const header=document.querySelector(".header"),nav=document.querySelector(".nav"),toggleBtn=document.querySelector(".nav__toggle"),navMenu=document.querySelector(".nav__menu"),navLinks=document.querySelectorAll(".nav__link"),height=header.getBoundingClientRect().height;function toggleNavBg(){window.pageYOffset>height?nav.style.background="#bfc4cf":nav.style.background="transparent"}function openMenu(){navMenu.classList.toggle("open")}function linkAction(t){t.preventDefault(),navLinks.forEach(t=>t.classList.remove("active")),t.target.classList.add("active");t=t.target.getAttribute("href");document.querySelector(`${t}`).scrollIntoView({behavior:"smooth",block:"start"}),navMenu.classList.contains("open")&&navMenu.classList.remove("open")}document.addEventListener("scroll",toggleNavBg),toggleBtn.addEventListener("click",openMenu),navLinks.forEach(t=>t.addEventListener("click",linkAction)),navLinks[0].click();const getTemplate=({data:e})=>{const t=e.map(t=>{let e=t.path;var i=e.substring(e.indexOf("/")+1,e.indexOf("."));return`
            <div class="slide" data-type="slide">
                <img src=${t.path} alt=${i}>
            </div>
        `});let i="";for(let t=0;t<e.length;t++)i+='<div class="dot" data-type="dot"></div>';return`
        <div class="gallery__inner">
            ${t.join("")}
        </div>
        <div class="gallery__dots">
            ${i}
        </div>
        <div class="gallery__arrow-top" data-type="top"></div>
        <div class="gallery__arrow-bottom" data-type="bottom"></div>
    `};class Slider{constructor(t,e){this.el=document.querySelector(t),this.options=e,this.activeIndx=0,this.render(),this.setup()}render(){this.el.classList.add("gallery"),this.el.innerHTML=getTemplate(this.options)}setup(){this.clickHandler=this.clickHandler.bind(this),this.el.addEventListener("click",this.clickHandler),this.inner=this.el.querySelector(".gallery__inner"),this.arrowTop=this.el.querySelector('[data-type="top"]'),this.arrowBottom=this.el.querySelector('[data-type="bottom"]'),this.activeDot()}clickHandler(t){var{type:t}=t.target.dataset;"top"===t?this.prevSlide():"bottom"===t&&this.nextSlide()}nextSlide(){this.activeIndx+=1,this.activeSlide(),this.activeDot(),this.toggleArrow()}prevSlide(){--this.activeIndx,this.activeSlide(),this.activeDot(),this.toggleArrow()}activeSlide(){var t=this.inner.getBoundingClientRect().height;this.inner.style.transform=`translateY(-${t*this.activeIndx}px)`}activeDot(){this.el.querySelectorAll('[data-type="dot"]').forEach(t=>t.classList.remove("active")),this.el.querySelectorAll('[data-type="dot"]')[this.activeIndx].classList.add("active")}toggleArrow(){this.arrowTop.style.display="block",this.arrowBottom.style.display="block",0===this.activeIndx?(this.arrowTop.style.display="none",this.arrowBottom.style.display="block"):this.activeIndx===this.options.data.length-1&&(this.arrowTop.style.display="block",this.arrowBottom.style.display="none")}}const slider=new Slider("#gallery",{data:[{path:"images/header/sofa.png"},{path:"images/header/table.png"},{path:"images/header/ottomans.png"}]});