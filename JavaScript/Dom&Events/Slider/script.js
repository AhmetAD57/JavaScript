var models=[
    {
        name: 'Deneme1',
        img: 'img/1.jpg',
        link: 'Google.com'
    },
    {
        name: 'Deneme2',
        img: 'img/2.jpg',
        link: 'Google.com'
    },
    {
        name: 'Deneme3',
        img: 'img/3.jpg',
        link: 'Google.com'
    },
    {
        name: 'Deneme4',
        img: 'img/4.jpg',
        link: 'Google.com'
    },
   ];

 var index=0;
 var SlideCount=models.length;
 var interval;

   var settings={
       duration: '1000',
       random: false
   };

   inint(settings);


   document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
    index--;
    console.log('sol');
    
    shoSlidelide(index);

   });
   
   document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
    index++;
    
    showSlide(index);
   });
   
   document.querySelectorAll('.arrow').forEach(function(item){
        item.addEventListener('mouseenter', function(){
            clearInterval(interval);       
        });
    });

    document.querySelectorAll('.arrow').forEach(function(item){
        item.addEventListener('mouseleave', function(){
           inint(settings);      
        });
    });



   function inint(settings)
   {
        interval=setInterval(function(){
            
            var prev
            if(settings.random)
            {
               do
               {
                   index=Math.floor(Math.random()* SlideCount);
               }
               while(index==prev)
               
               prev=index;
            }
            else
            {
                if(SlideCount==index+1)
                index=-1;

                showSlide(index)
                index++;
            }
            
            showSlide(index);
        }, settings.duration);
   }
   
   function showSlide(i)
   {
        index=i;
        
        if(i<0)
        index=SlideCount-1;
        
        if(i>=SlideCount)
        index=0;

        document.querySelector('.card-title').textContent= models[index].name;
        document.querySelector('.card-img-top').setAttribute('src', models[index].img);
        document.querySelector('.card-link').setAttribute('href', textContent=models[index].link);
   }
