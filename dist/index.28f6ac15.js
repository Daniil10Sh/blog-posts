let t,e=[];async function o(){try{let t=await fetch("http://localhost:3000/posts");if(console.log("Response status:",t.status),!t.ok)throw Error("Network Error Response Identified");let o=await t.json();console.log("Fetched data:",o),e=o}catch(t){console.error("Error fetching or processing data",t)}}async function n(t,o){try{let n=await fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,content:o})});if(console.log(n,"response"),!n.ok)throw Error("Failed to create post");let r=await n.json();e.push(r),console.log("Rendering posts with data:",e),c(e)}catch(t){console.log(t)}}const r=async(t,o,n)=>{try{let r=await fetch(`http://localhost:3000/posts/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:o,content:n})});if(!r.ok)throw Error("Failed to update post");let s=await r.json();console.log("Updated post:",s),e=e.map(e=>e.id===t?{...e,title:o,content:n}:e),c(e)}catch(t){console.error("Error updating post:",t)}};async function s(t){try{let o=await fetch(`http://localhost:3000/posts/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}});if(console.log("deletePost response:",o),!o.ok)throw Error("Failed to delete the post");e=e.filter(e=>e.id!==Number(t)),c(e)}catch(t){console.error("Error deleting post",t)}}async function a(t,o){if(console.log("\uD83D\uDEA8 Debugging createComment | postId:",t,"Comment:",o),!t||t<1){console.error("❌ Invalid post ID:",t);return}try{let n=await fetch(`http://localhost:3000/posts/${t}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:o})});if(!n.ok)throw Error(`Failed to create comment. Server responded with status ${n.status}`);let r=await n.json();console.log("✅ Comment added:",r),e=e.map(e=>e.id===t?{...e,comments:[...e.comments||[],r.comment]}:e),c(e)}catch(t){console.error("❌ Error creating comment:",t)}}function c(e){let o=document.querySelector(".menuContainer");if(!t)return console.log("Template not found");o.innerHTML=t({posts:e})}document.getElementById("createPostForm").addEventListener("submit",t=>{t.preventDefault(),n(document.getElementById("titleInput").value,document.getElementById("contentInput").value),document.getElementById("titleInput").value="",document.getElementById("contentInput").value=""}),document.addEventListener("click",function(t){if(t.target.classList.contains("editPostButton")){let e=t.target.getAttribute("data-id"),o=prompt("Enter new title:"),n=prompt("Enter new content:");o&&n&&(console.log(`Updating post with ID: ${e}`),r(Number(e),o,n))}}),document.addEventListener("click",t=>{if(t.target.classList.contains("deletePostButton")){let e=t.target.getAttribute("data-id");e?(console.log("Delete button clicked for post ID:",e),s(e)):console.error("No valid post ID found for delete operation.")}}),document.addEventListener("submit",t=>{if(t.target.classList.contains("createCommentForm")){t.preventDefault();let e=Number(t.target.getAttribute("data-post-id")),o=t.target.querySelector(".commentInput"),n=o.value.trim();if(!n){console.error("Comment cannot be empty");return}a(e,n),o.value=""}}),async function(){await o();let n=document.querySelector(".menuTemplate"),r=n.innerHTML||n.content.firstElementChild.innerHTML;if(!r.trim()){console.error("Template source is empty");return}t=Handlebars.compile(r),c(e)}();
//# sourceMappingURL=index.28f6ac15.js.map
