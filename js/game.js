class Game {
constructor() {

}

start()
{
   form=new Form();
   home= new Home();
   if(temp==="home")
   {
      form.hide();
      home.display();
   }
   else
   {
      form.display();
   }
  
}

}