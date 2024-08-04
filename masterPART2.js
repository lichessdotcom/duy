//in ra so chan
//in ra so lon nhat

var a =[2,7,6,5,3,4];
for(let i=0;i<a.length;i++)
{
    if (a[i]%2===0)
    {
        console.log(a[i]);
    }
}
var mx=0
for(let i=0;i<a.length;i++)
{
    if (a[i]>mx)
    {
        mx=a[i];
    }
}

console.log(mx)

