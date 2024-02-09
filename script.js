document.addEventListener('DOMContentLoaded',function(){
   var i=0;
   var input = document.getElementById("text-content");
   var content="";
   const postBtn = document.getElementById("post-button");
   input.addEventListener('input',function(){
      content=input.value;
      
   });
   postBtn.addEventListener("click", function () {
         input.value = "";
         if(content==""){
            window.alert("Add Text");
            return;
         }
         const tweet_area = document.getElementById("tweets");
         const tweet = document.createElement("div");
          var cont = document.createElement("p");

          cont.innerHTML = `${content}`;
          content="";
          tweet.innerHTML = `
           <div class="post-cards">
               <div class="profile">
                  <div class="name-username">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="profile pic">
                        <p class="name">Name</p>
                        <p class="user-name">@john doe</p>
                  </div>
                  <div class="post-edit">
                        <button class="write"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="write button"></button>
                        <button class="delete"><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt=""></button>
                  </div>
               </div>
               <div class="tweet-content">
               </div>
               <div class="tweet-interact">
                  <img class="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment">
                  <img class="like" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="heart">
                  <p></p>
               </div>
            </div>
        `;
        tweet_area.appendChild(tweet);

        const val = document.getElementsByClassName("tweet-content");
      
         do{
            val[i].appendChild(cont);
            i++;
         }while(i<val.length);
         const post_card = document.getElementsByClassName("post-cards");
         post_card_array=Array.from(post_card);
        post_card_array.forEach((card) => {
         var clicked = false;
         var count=1;
         var edited_text="";
         const write_edit=card.getElementsByClassName("write");
          const write_edit_Array = Array.from(write_edit);
         write_edit_Array.forEach((edit) =>{
            edit.addEventListener("click",function(){
               const contt=card.getElementsByClassName("tweet-content");
               contt_array=Array.from(contt);
               contt_array.forEach((cont_edit) =>{

                  cont_edit.innerHTML = `
                           <textarea name="" class="edit-text" cols="90" rows="9" placeholder="Type your thought here..."></textarea>
                           <input type="submit" class="submit-edit">
                     
                  `;
                  const submit_btn =
                      cont_edit.getElementsByClassName("submit-edit");
                  const inn=cont_edit.getElementsByClassName("edit-text");
                  inn_array=Array.from(inn);
                  submit_btn_array=Array.from(submit_btn);
                  submit_btn_array.forEach((btn)=>{
                     btn.addEventListener('click',()=>{

                        inn_array.forEach((ar)=>{
                           edited_text=ar.value;
                           ar.value="";
                        })
                        const edit_para=document.createElement('p');
                        edit_para.innerHTML=`${edited_text}`;
                        cont_edit.innerHTML="";
                        cont_edit.appendChild(edit_para);
                        
                        
                     })
                  })
                  
               })
            });
         })
          const likeButtons = card.getElementsByClassName("like");
          const likeButtonsArray = Array.from(likeButtons);
         likeButtonsArray.forEach((element) => {
            element.addEventListener("click", function () {
                if (!clicked) {
                    element.src =
                        "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
                    clicked = true;
                     element.nextElementSibling.innerHTML = `Likes: ${count}`;
                } else {
                     count++;
                      element.nextElementSibling.innerHTML = `Likes: ${count}`;
                }
            });
        
      document.addEventListener("click", function(e) {
          if (e.target && e.target.className == "submit-comment") {
              const commentBox = e.target.closest(".comment-box");
              const commentText = commentBox.querySelector(".comment-text").value;
              const commentDisplay = document.createElement("div");
              commentDisplay.className = "comment-display";
              commentDisplay.innerHTML = `
                  <span class="comment-content">${commentText}</span>
                  <div class="comment-like">
                      <span class="like-count">0</span>
                      <button class="like-comment">Like</button>
                  </div>
              `;
              commentBox.before(commentDisplay);
              commentBox.querySelector(".comment-text").value = ""; 
              

              commentDisplay.querySelector(".like-comment").addEventListener("click", function() {
                  const likeCountSpan = this.previousElementSibling;
                  let likeCount = parseInt(likeCountSpan.textContent);
                  likeCount++;
                  likeCountSpan.textContent = likeCount;
              });


              
          }
      });
      
      const commentButtons = card.getElementsByClassName("comment");
      const commentButtonsArray = Array.from(commentButtons);
      commentButtonsArray.forEach((button) => {
          button.addEventListener("click", function () {
              const commentBox = document.createElement("div");
              commentBox.className = "comment-box";
              commentBox.innerHTML = `
                  <textarea class="comment-text" cols="90" rows="3" placeholder="Type your comment here..."></textarea>
                  <button class="submit-comment">Submit</button>
              `;
              const tweetInteractDiv = button.closest(".tweet-interact");
              tweetInteractDiv.after(commentBox);

              const submitCommentButton = commentBox.querySelector(".submit-comment");
              submitCommentButton.addEventListener("click", function () {
                  const commentTextValue = commentBox.querySelector(".comment-text").value;
                  if (commentTextValue.trim() !== "") {
                      const commentDisplay = document.createElement("div");
                      commentDisplay.className = "comment-display";
                      commentDisplay.textContent = commentTextValue;
                      commentBox.before(commentDisplay);
                      commentBox.querySelector(".comment-text").value = "";
                  } else {
                      alert("Please type a comment before submitting.");
                  }
              });
          });
      });
        const deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const postCard = button.closest(".post-cards");
                if (postCard) {
                    postCard.remove();
                }
            });
            i--;
            post_card_array.splice(card);
        });

      });
   });
});  
});