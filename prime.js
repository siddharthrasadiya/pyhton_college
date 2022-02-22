num = 17;
var flag = 0;


for(i=2;i<num;i++)
{
	if(num%i == 0)
	{
		flag = 1;
		// console.log("gh");
		break;
	}

}
if(flag == 0)
	console.log("number is prime ...");
else
	console.log("number is not prime ...");
