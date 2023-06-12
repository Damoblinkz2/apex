// "use strict";

// let bricksWrapper = document.querySelector(".bricks-wrapper");
// const request = fetch(
//   "https://newsapi.org/v2/everything?q=bitcoin&apiKey=7ee3cc064e15448c96a558adde5e9441"
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const newsBlocks = data.articles;
//     const first10 = newsBlocks.slice(0, 10);
//     console.log(first10);

//     first10.forEach((newsBlock) => {
//       const html = `
//       < class="brick entry format-standard animate-this">
//                <div class="entry-thumb">
//                   <a href="single-standard.html" class="thumb-link">
//                       <img src="images/thumbs/diagonal-building.jpg" alt="building">
//                   </a>
//                </div>
//                <d class="entry-text">
//                	<di class="entry-header">
//                		<div class="entry-meta">
//                			<span class="cat-links">
//                				<a href="#">call</a>
//                				<a href="#">Photography</a>
//                			</span>
//                		</div>
