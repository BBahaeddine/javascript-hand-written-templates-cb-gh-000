function addComment() {
  event.preventDefault();
  var bodyText = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;
 
  var commentBody = createCommentBody(bodyText);
  var commenterLabel = createCommenterLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}