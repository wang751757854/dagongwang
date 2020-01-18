window,onload=function(){
    var contentList=document.getElementById('contentList');
    var li=contentList.getElementsByTagName('li')[0];
    li.style.display="none";

    var fm=document.getElementById('fm1');
    var msgTitle=document.getElementById('msgTitle'),
        userName=document.getElementById('userName'),
        msgContent=document.getElementById('msgContent');
    fm.onsubmit=function(evt){
        if(evt){
            evt.preventDefault();
        }else{
            window.event.return.value=false;
        }

        var title=msgTitle.value;
        var user=userName.value;
        var content=msgContent.value;

        if(title&&user&&content){
            var newLi=li.cloneNode(true),
                msgTitleSpan=getByClass('msgTitle',newLi)[0],
                userNameSpan=getByClass('userName',newLi)[0],
                dateSpan=getByClass('msgDate',newLi)[0],
                msgContentDiv=getByClass('msgContent',newLi)[0];
            msgTitleSpan.innerHTML=title;
            userNameSpan.innerHTML=user;
            dateSpan.innerHTML=new Date();
            msgContentDiv.innerHTML=content;
            contentList.appendChild(newLi);
            newLi.style.display="block";
        }else{
            alert("请输入完整");
        }
    }
}