"use strict";window.addEventListener("load",function(){var u=document.querySelector(".preview_img"),a=document.querySelector(".mask"),y=document.querySelector(".big");u.addEventListener("mouseover",function(){a.style.display="block",y.style.display="block"}),u.addEventListener("mouseout",function(){a.style.display="none",y.style.display="none"}),u.addEventListener("mousemove",function(e){var t=e.pageX-this.offsetLeft,o=e.pageY-this.offsetTop,s=t-a.offsetWidth/2,i=o-a.offsetHeight/2,n=u.offsetWidth-a.offsetWidth;s<=0?s=0:n<s&&(s=n),i<=0?i=0:n<i&&(i=n),a.style.left=s+"px",a.style.top=i+"px";var d=document.querySelector(".bigImage"),f=d.offsetWidth-y.offsetWidth,l=s*f/n,r=i*f/n;d.style.left=-l+"px",d.style.top=-r+"px"})});