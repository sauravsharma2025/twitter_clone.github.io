function take_tweet(){    
    var tweet= document.getElementById('tweet_data').value
    if(tweet==''){
        alert('Please type something for Tweeting')
    }
    else{

    alert('You have posted successfully')
    let p = document.createElement('div')
    //p.innerHTML=tweet
      
    //document.getElementById('tweeting').innerHTML=tweet
    document.getElementById('boiler_div').appendChild(p)
    var done =`
    <div  id="twt_div"class="post" style="display:flex ;">
    <div class="post_avatar">
        <img src="/images/man.png" alt="avatar">
    </div>
    <div class="post_body">
        <div class="post_header">
            <div class="post_headerText">
                <h3>Saurav Kumar Sharma
                <span class="post_headerSpecial">
                <span class="material-icons post__badge">verified</span>@Saurav_Sharma
                </span>
                </h3>
            </div>
            <div class="post_headerDescription">
                <p id="tweeting">${tweet}</p>
            </div>
        </div>
        <div class="post_footer">
            <span class="material-icons">reply</span>
            <span class="material-icons">publish</span>
            <span class="material-icons">favorite border</span>
           

        </div>
    </div>
</div> `
p.innerHTML=done
    }
 document.getElementById('tweet_data').value=''
}
   
   