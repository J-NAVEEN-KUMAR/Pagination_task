var x = document.createElement('H1');
var t = document.createTextNode("DOM PAGINATION");
x.appendChild(t);
document.body.appendChild(x);
var req = new XMLHttpRequest();
req.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
req.send();
req.onload = function(data){
    var data = JSON.parse(this.response);
    
    
    var store=[];
    for(var i=1;i<=10;i++){
        var btn = document.createElement('button');
        btn.setAttribute("class",i);
        btn.setAttribute("type","button");
        btn.innerHTML = i;
        store.push(btn);
        document.body.append(btn);
    }

    var First = document.createElement('button');
    First.setAttribute("class","First");
    First.setAttribute("type","button");
    First.innerHTML = "First";
    document.body.append(First);

    var Last = document.createElement('button');
    Last.setAttribute("class","Last");
    Last.setAttribute("type","button");
    Last.innerHTML = "Last";
    document.body.append(Last);

    var Prev = document.createElement('button');
    Prev.setAttribute("class","Prev");
    Prev.setAttribute("type","button");
    Prev.innerHTML = "Prev";
    document.body.append(Prev);


    store.forEach((ele,index) =>{
        ele.addEventListener('click', () => {
            print(index+1);
        });
    })

    First.addEventListener('click',()=>print(1));
    Last.addEventListener('click',()=>print(10));
    

    function print(x){
        var b=10;  
        table.innerHTML = "";
        for(var i=(x-1)*b; i<b*x; i++){
            var tbody = document.createElement('tbody');
            var tr = document.createElement('tr');
            var td1=document.createElement('td');
            td1.innerHTML=data[i].id;
            var td2=document.createElement('td');
            td2.innerHTML=data[i].name;
            var td3=document.createElement('td');
            td3.innerHTML=data[i].email;
            tr.append(td1,td2,td3);
            tbody.append(tr);
            table.append(tbody,thead);
            document.body.append(table);
      }
      if(i>10)
        Prev.addEventListener('click',()=>print((i/10)-1));        
    }
    
}


var table = document.createElement('table');
table.setAttribute('class','table');
var thead = document.createElement('thead');
var tr = document.createElement('tr');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');
th1.innerHTML = "ID";
th2.innerHTML = "Name";
th3.innerHTML = "Email";
tr.append(th1,th2,th3);
thead.append(tr);
table.append(thead);
document.body.append(table);
