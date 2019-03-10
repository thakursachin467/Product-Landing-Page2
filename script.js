function CollectTheme {
  let CurrentTheme = document.getelementbyclass('still-lifepainting').value;
  localstorage.setitem("CurrentTheme", CurrentTheme);
}
function CollectId {
  let CurrentId= document.getelementbyid('s16').value;
  localstorage.setitem("CurrentId", CurrentId);
}
/* TODO: Make it so that the src of the 17th image in paintings.html is the same as the src of the id of the clicked image on the home page.
You can do this by localstorage hopefully, try asking discord */
